# TreeView Performance Analysis

This document covers an analysis of various scenarios of the performance of the `<TreeView />` component in different scenarios and the limitations and more technical details of implementation.

Important information to be considered are the strategies that were adopted to avoid performance losses in the TreeView implementation in different scenarios.

-   Data agnostic
-   Avoid traverse the tree to DnD, Multiple-selection, and Expandable
-   Build a tree mirror on a "flat" structure using the React rendering stream
-   Async Node

### Data agnostic

The main motivation to avoid being rigid by some API of the tree is to avoid developers having to convert their structure to follow the component APIs, this is a component performance degradation point that makes it have to traverse the tree to normalize the data every time it changes on a hot path render.

### Avoid traverse the tree

Avoiding traversing the tree to update some data is always a challenge in different scenarios, in the current implementation in DXP this is often used to update the expandable state and select a Node and create a flat structure to do some operations.

For Expandable and Multi-select solutions instead of adding a unique property as part of each Node, we centralize in one state the unique ids of the Nodes that are expanded and selected respectively to avoid traversing the tree.

```ts
const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
	new Set(['1', '2', '3'])
);

const [expandedKeys, setExpandedKeys] = useState<Set<React.Key>>(
	new Set(['1', '2', '3', '4', '5'])
);
```

The DnD implementation would also be a place where we would be using tree traversal to move nodes from one point to another, instead we borrowed the [RFC 6902 (JSON Patch)](https://datatracker.ietf.org/doc/html/rfc6902) implementation to apply the operations to move a Node from a point A to a point B.

```ts
// Operation of `add` value to the document structure.
// RFC 6902 (JSON Patch) 4.1
type PatchAdd = {
	op: 'add';
	path: Array<number>;
	value: unknown;
};

// Operation of `move` value to the same document structure, removing from
// `from` and then adding to `path`.
// RFC 6902 (JSON Patch) 4.4
type PatchMove = {
	op: 'move';
	from: Array<number>;
	path: Array<number>;
};

type Patch = PatchAdd | PatchMove | PatchRemove | PatchReplace;
```

For this to work correctly the nodes need what we can think are coordinates of where the node is located in the tree ie the indices according to the depth level of the tree, we aggregate the index in each rendering within nested contexts to accumulate the indices. This avoids traversing the tree recursively in search of the node and we know exactly where to remove a Node and where to add it.

To deal with immutable data during a DnD operation, for example, we use a strategy of creating a partial copy of the structure, for example, instead of creating a complete copy of the structure which would be very expensive because it would need to recursively traverse the tree and use more memory space, create a copy of the nodes that are in the index path and keep a reference to the rest of the other nodes that have not changed, the image below illustrates this well when a new item is added to the tree.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Purely_functional_tree_after.svg/876px-Purely_functional_tree_after.svg.png)

A new copy of the structure is created (ys) to add the item (e), the blue part is a new copy as it references the original structure.

### Build a tree mirror on a "flat" structure using the React rendering stream

For multi-selection to avoid traversing the entire tree looking for child nodes to select and the parent if necessary, we create a flat structure using React's rendering flow ie as components are rendered, we make up a flat structure, if one component is unmounted it's automatically removed from the structure, this creates a mirror using the unique id of the node.

```ts
type LayoutInfo = {
	children: Set<React.Key>;
	intermediate: boolean;
	parentKey?: React.Key;
};

type LayoutKeys = Map<React.Key, LayoutInfo>;
```

This avoids us from building a flat structure at component startup and having to keep it up-to-date with the tree, but this is only used for multi-select like read.

## Load test

It is a big challenge for a component in React to efficiently render a large list, for this, it is used strategies such as virtualization in a tree could be adopted the same to prevent many components from being rendered and maintain efficiency, we would be able to reduce the cost of many operations that can affect performance.

The TreeView currently in the writing of this document does not implement virtualization, only the strategies adopted above for the different user interaction scenarios with the TreeView but will not solve the rendering.

For the test scenarios, we used the example in the TreeView Storybook called `performance` which renders a tree with only two levels of 550 x 400, 220K total, to be more realistic a deeper nested would be ideal here to check more closely the efficiency of operations that do not use full tree traversal.

-   Initial render time
-   Time when expanding a Node
-   Time when selecting a Node
-   Time to start dragging an item

> The numbers are considered using Chrome's DevTools Performance tool, considering the long task which includes all React operations from event to repaint and DOM update.

| Initial rendering | Expand a node  | Select a node  |
| ----------------- | -------------- | -------------- |
| 1162ms / 5 ops    | 1221ms / 8 ops | 1108ms / 8 ops |

The above results bring some interesting results, it also means that the more data will be slower, there is room for improvement and avoid some use cases. Let's take a closer look at the scenarios and possible problems.

#### Initial rendering

<img alt="Tracing initial rendering" src="https://user-images.githubusercontent.com/13750819/140421402-5c6ad4ed-f640-4c34-af7c-4ebca89e0509.png" style="border-radius: 5px;" />

The render phase has a considerably noticeable time which is slow for the user considering the RAIL model. This is very dependent on the number of components being rendered in a list, the tracing above shows well that the number of components being rendered but the main thread being occupied to render the complete list.

This initial rendering time can increase if a list of expanded Nodes is defined, this example is rendering the first level of TreeView with 550 Nodes, in the number of components, this is higher because only one Node can render more components per Node, consider 10 components by Node.

Some alternatives we can adopt here to solve this is virtualization as recommended by the React.js team which will only render a limited amount of Nodes according to the viewport.

#### Expand a node

<img alt="Tracing expand a node" src="https://user-images.githubusercontent.com/13750819/140421389-a2098c37-5e5d-42c0-a9a9-4d54839b67ed.png" style="border-radius: 5px;" />

The API decision to avoid tree traversal to change a property on each Node that would symbolize whether the Node is expanded or not also has the same impact as causing a render on all other Nodes but avoids the cost of traversing the tree.

Since all Nodes consume the same context to know if the Node is expanded any new items added to the state will cause it to re-render.

Ideally, just cause a rendering on the Node that is being expanded, we have some alternatives to avoid that like treating the `expandedKeys` only as initial and using local state on the Node to expand, we can have some drastic performance gains.

This is a common problem for context usage that all-consuming components will cause re-rendering, there is a proposal for this in [React RFC 119 (Context selectors)](https://github.com/reactjs/rfcs/pull/119) that would render the component only if the data it is consuming has changed, a [PR from the React team](https://github.com/facebook/react/pull/20646) was sent some time ago as an experiment but still open.

#### Select a node

<img alt="Tracing select a node" src="https://user-images.githubusercontent.com/13750819/140422167-4cb42107-f11c-41b9-8079-f1d1f261fa80.png" style="border-radius: 5px;" />

Selecting a node is similar to expanding because it has the same API design, we can use the same alternatives to avoid rendering on all nodes.

### Drag and Drop

| Dragging an item | Dropping an item |
| ---------------- | ---------------- |
| 5025ms / 3 ops   | 5930ms / 2 ops   |

The implementation of DnD is built on top of the [react-dnd](https://react-dnd.github.io/) library which we ended up depending on the performance of the library but we made our improvements that make the tree change without a high cost, it's down to about a few nanoseconds with the immutability of the tree.

The perception of slowness is totally noticeable to start dragging and then being able to move the Node between the elements is very slow generating animation slowdowns and the drop also has the same effect. The reason is very similar to Select a node and Expand, `react-dnd` causes a lot of rendering in its hooks which are used on all Nodes which makes all components render in one big list takes up a lot of thread time, a list is not phased so it takes a lot of main thread time.
