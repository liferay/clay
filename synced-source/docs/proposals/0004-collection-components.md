# Collection component

-   Start Date: 31-03-2022
-   Author: [Matuzalém Teles](https://github.com/matuzalemsteles)
-   RFC PR: [#4840](https://github.com/liferay/clay/pull/4840)
-   Clay Issue: [#4112](https://github.com/liferay/clay/issues/4112)
-   Status: **Awaiting implementation**

## Introduction

Collections are a common thing for components to display a list of elements in some way, for example, TreeView, Autocomplete, DropDown, List, MultiSelect, Nav, NavigationBar, and VerticalNav. These collections can be browsed using the keyboard, loading dynamic data, static data, asynchronous loading, filters, virtualized scrolling for large list performance, and many other scenarios.

Projecting this to the component can be done in many different ways, for example, JSX Children, a list of objects as property, or via a data source like [`useResource`](https://clayui.com/docs/components/data-provider.html). This RFC describes how we can achieve implementation consistency and default behavior for all components that require collection with a few goals in mind:

-   Decrease the learning curve
-   Improves the DX of the APIs
-   Optimization
-   Data agnostic

## Motivation

For Clay, there are many components related to the collection and we have different ways of dealing with it in the components, this increases the learning curve for the developers and creates API inconsistency between the components. It also causes some components to be resourceful more than others or to implement optimizations only for some components.

As described in [RFC 0001 Component offerings](./0001-component-offerings.md), normally components that have a collection implementation are offered as high-level components that are not data-agnostic and an API needs to be followed, there are customization limitations according to what is offered, some of our components have problems with prop drilling like DropDown and others with `menuProps`, `menuElementAttrs`, `containerProps`, `formProps`, `searchProps`, `dropDownTriggerProps`. The advantage is that in theory you write "fewer lines" of code but in UI everything is very much related to the markup composition to generate the interface, which in these cases the composition is much more preferable because it allows reaching the APIs of the components that would be internal or many of the sometimes inaccessible and the components are explicit.

Collection component consistent for all components lessens this learning curve and allows for better internal code reuse, we are also able to provide API and behavior consistency e.g. virtualized scroll, keyboard interaction using arrow keys, load dynamic data, render content static, and optimize rendering for large data list.

## Proposed solution

This solution proposes to create a component that handles the rendering of the `<Collection /` collection, in order to be an internal component and not a public one. The purpose of this component is to have a unique API that allows rendering dynamic and static content both of which can be done using composition, ensuring data is agnostic, scrolling virtualization, loading asynchronous data with [`useResource`](https://clayui.com/docs/components/data-provider.html) support, and adding accessibility features such as navigation via keyboard.

```typescript
type Props<Items> = {
	children: ChildrenFunction<Items> | React.ReactNode;
	items?: Array<Items>;
};
```

```tsx
// (!) Approximate internal use

<Collection<Items> items={items}>{children}</Collection>
```

The component must be markup independent to allow adapting to the markups of each component. We also ensure that the behavior is consistent as well as APIs and composition.

The collection implementation will help improve the implementation of low-level components as described in [RFC 0001 Component offerings](./0001-component-offerings.md). Most components that implement collection have been created a high-level implementation with the prefix WithItems to support passing a Item API and render, for example:

```jsx
const items = [{label: 'Item'}];

function Example() {
	return (
		<DropDownWithItems
			items={items}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		/>
	);
}
```

As [described in the motivation we have some problems with this design](#motivation). On the other hand, components in composition naturally ask you to be more declarative or write more lines of code if you think this might be something negative, for example, in the case above with the following composition.

```jsx
<DropDown trigger={<ClayButton>{'Click Me'}</ClayButton>}>
	<DropDown.ItemList>
		{items.map((item) => (
			<DropDown.Item key={item.id}>{item.label}</DropDown.Item>
		))}
	</DropDown.ItemList>
</DropDown>
```

In the case of high-level, you define the rendering of the component defining an object according to the specified data the problem is that this data is opinionated for each component, and for teams, the data can be different, in many situations where the implementation is simple developers prefer low-level rendering because it allows the data to be agnostic and is more advantageous than transforming the data to adapt to the component structure which will require a performance loss in initial rendering in smaller scenarios this may not be an issue but with a lot of use cases within the application starting to become, in other scenarios the transform would also be necessary to add a listener like `onClick` to listen for an item specific event.

The collection implementation tries to solve this problem, allow the low-level component to offer collection, and optimize with virtualization and data agnostic for low-level components. The pseudocode for DropDown following the Collection:

```jsx
// Collection
// static - basically low-level
<DropDown>
  <DropDown.ItemList>
    <DropDown.Item>Item</DropDown.Item>
  </DropDown.ItemList>
</DropDown>

// Collection
// dynamically - basically "high-level"
<DropDown
  items={[...]}
>
  {(item) => (
    <DropDown.Item key={item.name}>
      {item.name}
    </DropDown.Item>
  )}
</DropDown>

<DropDown>
  <DropDown.Header header="Folder" />
  <DropDown.List items={[...]}>
    {(item) => (
      <DropDown.Item key={item.name}>
        {item.name}
      </DropDown.Item>
    )}
  </DropDown.List>
</DropDown>
```

> The components, in this case, can be smarter like avoiding declaring the `ItemList` in this case when the component doesn't need to render a search or caption.

The collection implementation goes beyond offering smarter compositing with more features for low-level components, it also tries to encourage and integrate with components in React, for example using `<ErrorBoundary />` and `<Suspense />` to [Render As You Fetch](https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html). This component does not necessarily implement these features but encourages these defaults because they are more network-related so this will be done by the [`useResource`](https://clayui.com/docs/components/data-provider.html) hook.

The components that can have these changes are:

-   TreeView
-   Autocomplete
-   Breadcrumb
-   DropDown
-   RadioGroup
-   List
-   MultiSelect
-   MultiStepNav
-   Nav
-   VerticalNav
-   NavigationBar
-   PaginationBar and Pagination
-   Tabs

Related:

-   Select (As of this writing this is a native component we have no control over the rendering and other details.)

## Detailed design

![Collection component](https://user-images.githubusercontent.com/13750819/166605103-fed4553d-0f85-4f27-8fc6-fe87c3044582.png)

The component's internal implementation must allow for two levels of composition that are principal and essential for Collection, static and dynamic content. The API between dynamic and static content is syntactically close together to avoid a big rewrite when moving from static to dynamic.

```jsx
// Static content
<Collection>
  <Item />
  <Item />
  <Item />
</Collection>

// Dynamic content
<Collection<Items> items={items}>
  {(item) => <Item />}
</Collection>
```

This example above is just a demonstration of the syntax of both possibilities but the developer will not use this component exactly this is what we will implement in the components that need Collection. For example, DropDown:

```tsx
// (!) Approximate behavior

type Props<Items> = {
	children: React.ReactNode | ChildrenFunction<Items>;
	items?: Array<T>;
	trigger: React.ReactElement;
};

function DropDown<Items>({trigger, items, children}: Props<Items>) {
	return (
		<Root>
			{trigger}
			<Menu>
				<Collection<Items> items={items}>{children}</Collection>
			</Menu>
		</Root>
	);
}

// (!) Approximate usage example
/// Static content
function Example() {
	return (
		<DropDown>
			<Item />
			<Item />
			<Item />
		</DropDown>
	);
}

/// Dynamic content
function Example() {
	return <DropDown<Items> items={items}>{(item) => <Item />}</DropDown>;
}
```

Dynamic collections offer more features, such as optimizing rendering and implementing list virtualization, and both allow them to be data agnostic without defining a fixed data structure to render some element. This allows us and developers to compose with different hierarchies, e.g. groups or trees like TreeView, and have rich renderings with different markup styles.

### Static collection

Static collections are like the hardcoded list, usually used for elements like a Menu that are not configurable or dynamic or data coming from the user.

```jsx
<DropDown trigger={<Button>View</Button>}>
	<Item>List</Item>
	<Item>Table</Item>
	<Item>Card</Item>
</DropDown>
```

### Dynamic collection

Unlike static collections, dynamic collections are data rendered in the list using a JSX-based interface where the amount of data is unknown and may change during the component's lifecycle.

The `items` property is reactive, this can change according to the implementation and criteria of the component, for example `<TreeView />` data can be modified with user interaction, such as moving, deleting, or renaming the item, in this case, the items property follows [RFC 0002 Controlled and uncontrolled components](./0002-controlled-and-uncontrolled.md).

```tsx
<DropDown<Items> items={items}>{(item) => <Item>{item.name}</Item>}</DropDown>
```

#### Virtualization

[List virtualization](https://www.patterns.dev/posts/virtual-lists/) is extremely important to prevent React.js don't lose performance with a large list of data being rendered. The implementation is to render only the visible elements in the viewport or the container where the element is being rendered.

The [virtualization](https://www.patterns.dev/posts/virtual-lists/) implementations normally adjust with the size of the container, we can also provide if the container does not define any size automatically render only the elements considering the viewport.

[Virtualization](https://www.patterns.dev/posts/virtual-lists/) also needs to consider that items can have dynamic sizes, [virtualization](https://www.patterns.dev/posts/virtual-lists/) must be offered in an OOTB way so that it is not necessary to configure any properties, obligatorily also all items being added in the Collection content must accept [`ref`](https://reactjs.org/docs/forwarding-refs.htm) so that it can calculate the element and auto-adjust.

```tsx
const Item = React.forwardRef(({children}, ref) => (
	<div ref={ref}>{children}</div>
));

function Example() {
	return (
		<DropDown<Items> items={items}>
			{(item) => <Item key={item.name}>{item.name}</Item>}
		</DropDown>
	);
}
```

#### Unique keys

For a list being rendered in React.js it is necessary that a [`key`](https://reactjs.org/docs/lists-and-keys.html#keys) with a unique id be provided so that it can update the correct element that has been updated. To keep the syntax synthetically close to the static collection, by default if the `key` property is not defined the implementation uses the `id` or `key` of the data if it exists, otherwise, no value should be used and the developer has to define the key property in the component.

```tsx
// When there is an `id` or `key` property in the data it is
// not necessary to define the property.
const items = [
	{id: 1, name: 'Item 1'},
	{id: 2, name: 'Item 2'},
	{id: 3, name: 'Item 3'},
];

function Example() {
	return (
		<DropDown<Items> items={items}>
			{(item) => <Item>{item.name}</Item>}
		</DropDown>
	);
}

// If the key is not defined.
const items = [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}];

function Example() {
	return (
		<DropDown<Items> items={items}>
			{(item) => <Item key={item.name}>{item.name}</Item>}
		</DropDown>
	);
}
```

### Asynchronous loading

The ability to load data asynchronously is not a responsibility of the `<Collection />` component, as is dealing with network exceptions and loading, instead, this proposal encourages the use of native React APIs which deal much better with these situations and allows for better UI responsiveness.

To allow the scenarios below, [`useResource`](https://clayui.com/docs/components/data-provider.html) needs to create an integration with [`Suspense`](https://reactjs.org/docs/react-api.html#reactsuspense) and [`ErrorBoundary`](https://reactjs.org/docs/error-boundaries.html) to allow dealing with the two-state scenarios of a component, error, and loading.

#### `ErrorBoundary`

[Error boundaries](https://reactjs.org/docs/error-boundaries.html) are an essential and fundamental part of React.js's ability for part of the application to recover without breaking the entire application. Catch javascript errors anywhere in their child component tree, and display a UI as a fallback.

The collection does not handle this implementation internally, this should be a composition of the components to allow more flexibility in choosing where to catch the error and which element to render.

The use of `<ErrorBoundary />` becomes recommended when integration with suspense is done and mainly for the initial request, first because the request is performed in render time instead of being executed by some handler, for example `onClick` or even being called by `useEffect` these use cases are not covered by `<ErrorBoundary />`. Considering the scenario of loading asynchronous data as the user clicks on a node of a `<TreeView />` component as in the example below from `<FileExplorer />`, we need to handle it in different ways.

```jsx
// (!) Error located

const FileExplorer = () => {
  const resource = useResource({
    link: 'https://api.example.com/v1/files/tree',
    cursor: (data) => data.next,
  });

	return (
		<TreeView
			items={resource.data}
			onLoadMore={resource.loadMore}
		>
			{(item) => (
				<TreeView.Item>
					{...}
				</TreeView.Item>
			)}
		</TreeView>
	);
};
```

In this scenario, `<ErrorBoundary />` does not capture errors that occur in some handler, as in the `onClick` callback, so if a network error occurs, the developer can add a `try catch` to control the error and render some fallback or just tell the user to try again, in the TreeView example above this becomes more complicated because `onLoadMore` is declared in the root and not declared directly in the node, under the hood it is called in the node handler that will invoking but catching this error is very difficult it would have to be exposed as an API to be invoked on the specific node so that the developer can catch the error and show a specific fallback component for the node instead of the root.

The problem with this line of development is that asynchronous loading doesn't become OOTB, it starts to go into the developer's hands even if he just invokes the `loadMore` call. This is a more difficult behavior to deal with in cases when the data is structured in a tree like the TreeView, list collections are simpler because it usually has the infinite list effect and if it fails to add a component as a fallback is easier, for example:

```jsx
// (!) Error located

const DropDownUsers = () => {
	const [networkStatus, setNetworkStatus] = useState(() => ({
    error: false,
    loading: false,
  }));

  const resource = useResource({
    link: 'https://api.example.com/v1/files/tree',
    cursor: (data) => data.next,
    onNetworkStatusChange: (status) =>
      setNetworkStatus({
        error: status === 5,
        loading: status < 4,
        networkStatus: status
      }),
    suspense: true,
  });

  return (
    <DropDown>
      <DropDown.List
        items={resource.data}
        onLoadMore={resource.loadMore}
      >
        {(item) => (
          <DropDown.Item>
            {...}
          </DropDown.Item>
        )}
      </DropDown.List>

      {networkStatus.error && (
        <Error>
          <Text>Failed to load data!</Text>
          <Button>Try again</Button>
        </Error>
      )}
    </DropDown>
  );
};
```

This scenario would not need to add a `try catch` with wrapper to `onLoadMore`, under the hood `useResource` handles catching network errors when requests do not happen at render time when suspense is enabled. Using network status is easier for list than tree because it is simpler to implement an error or loading fallback component at the end of the list.

```jsx
<DropDown>
	<DropDown.List
		items={resource.data}
		onLoadMore={resource.loadMore}
	>
		{(item) => (
			<DropDown.Item>
				{...}
			</DropDown.Item>
		)}
	</DropDown.List>

	{networkStatus.loading && <LoadingIndicator />}
</DropDown>
```

When suspense is enabled when a network error occurs for the first request of the component, it would not be possible to catch errors just by using the network state provided by `useResource` or adding a `try catch` for this the recommended thing is to add the `<ErrorBoundary />` above the component that makes the request to catch errors in render time.

```jsx
// (!) Top-level Error Boundary

<ErrorBoundary exceptionElement={<Exception />}>
	<DropDownUsers />
</ErrorBoundary>
```

In this scenario, it is possible to catch the exception and render a UI as a fallback. Who takes care of this integration and thrown the exceptions is the [`useResource`](https://clayui.com/docs/components/data-provider.html) itself.

#### `Suspense`

[`Suspense`](https://reactjs.org/docs/react-api.html#reactsuspense) is one of the very important features for asynchronous invocation of resources, it allows you to add a fallback to the UI when a request is in progress and if there are many nested requests React can parallelize the calls. Advised to read more about this in the React docs as well as combine using `startTransition` and `useTransition` APIs.

> Integration with Suspense must be done by [`useResource`](https://clayui.com/docs/components/data-provider.html)!

```jsx
<ErrorBoundary exceptionElement={<FileExplorerException />}>
	<Suspense fallback={<FileExplorerSkeleton />}>
		<FileExplorer />
	</Suspense>
</ErrorBoundary>
```

Adding `Suspense` in this example above causes a fallback in the UI to be rendered on the first render when the request is made, it would also be feasible to add a `Suspense` located in the item together with the `ErrorBoundary` for cases where the node request can be slow, this triggers a fallback in the UI just for the item instead of triggering for the entire component.

## Effect on API resilience

Introducing this "syntax" to existing components has some side effects, not-for-all. First, because not all of our components faithfully follow the implementation of [RFC 0001 Component offerings](./0001-component-offerings.md) such as Breadcrumb, MultiSelect, and other components that don't exist a low-level implementation and its component default is delivered as a high-level, implementing this new definition in these components would cause a breaking change, we would be able to maintain backward compatibility but this causes some negative effects that we might not want to risk.

For the low-level components that have this implementation we were able to add a new feature and new APIs, this will not cause breaking change because these components essentially don't have these features and are simpler.

### Backward compatibility

Creating backward compatibility for components that by default are high-level is possible by keeping the current API consistent and the "syntax" implementation via `children` but some features may not be possible as data agnostic.

A side effect is that maintaining backward compatibility for these components is that by default the use of collection will be optional, so it will only be used when it is necessary to modify the rendering, ideally, we want the collection to be explicit because that is the benefit of being data agnostic and components will not be opinionated to data.

### Data provider

The implementation also affects the `useResource` hook to allow loading data on demand like load more for TreeView, infinite list, or pagination for example. The current APIs will have no effect so just add new APIs like `cursor` for that purpose.

The behavior change may be necessary, to integrate with Suspense and ErrorBoundary it is necessary to change the internal implementation, the use of network status for example changes here because when causing a network error `useResource` needs to throw an exception at render time for this to be caught by ErrorBoundary. Integrate with Suspense it is necessary to throw an exception with the promise so that React knows when to retrieve the component.

These behavior changes affect the current implementation a lot but we can add this as an optional way over a new property because this new behavior needs developers to learn and study more about these new React components and paradigms.

## Alternatives considered

### Why not array map?

The first thought on this is, why not use array map? we can't optimize without knowing the "data", we need to know the amount of data to decide when to optimize, we can optimize on two levels storing the rendering in memory and using virtualization which is one of the main resources for collection. Implementing virtualization with array map would make things more verbose and we wouldn't be able to make this OOTB which is one of the main goals also without the developer having to declare an extra hook for example to handle the virtualization calculations and having to use the output to use in the map array.

We were able to impose standards that are very common in the community, with the use of [render props](https://reactjs.org/docs/render-props.html), synthetically the use of function replaces the map array and allows us to create internal optimizations while still keeping the component being data-agnostic and avoiding problems like drilling props.

### Why not custom props?

One option to render a custom component to replace an internal component would be to use a custom render, also very common for some use cases. Usually this option is more common for scenarios where `children` is already used for another purpose, for example:

```jsx
<Suspense fallback={...}>
	<Component>
		{...}
	</Component>
</Suspense>

<Route element={<Root />}>
	<Route
		{...}
	/>
</Route>
```

To illustrate an example of what this API would look like for some of the components, it would look something like this for DropDown.

```jsx
<DropDown
	customMenu={...}
	customItem={...}
/>
```

The downside of going with this implementation is that it would create more APIs for the components and it wouldn't be something consistent for all components, the synthetic approximation between low-level and high-level components is far, the composition would still not be something granular as the possibilities that composition via `children` allows us to do.

For other scenarios as shown in the examples above, it makes a lot of sense because the responsibilities of these components are simple and concise to their goals, unlike our collection components which the vast majority can allow different variations and different ways of composing the UI.

### Schema for data agnostic

Creating a schema API is an alternative for the component to be data agnostic but to implement this at the component level would be complex of use that the component would have compared to a composition strategy, using schema would be not to go with composition this can do sense in other implementations but for UI we would be increasing the learning curve and doing something unusual to circumvent the common that would be simpler.

## Adoption strategy

This implementation can be implemented gradually, first, we can implement it for all components that have their low-level component implementation, and for the next major version, we add the implementation for the components that have their default high-level component.

For developers to adopt, we need to communicate and make this behavior and use of all components explicit, this proposal is part of the foundation of the components that need collection. Writing an initial blog about the adoption of this proposal is an initial step toward making developers aware of how they can benefit from the improvements to their applications.

It's not very interesting to create codemods or coordinate with teams, this is something that developers need to learn how to implement and how to use the new features of React, this also brings paradigm changes that React bring about fetching data as early as possible when as opposed to fetching data when rendering which mainly impacts rendering time which directly reflects on [Web Vitals LCP and FID metrics](https://web.dev/vitals/).

## How we teach this

No new terminology here, this proposal uses known patterns in the community like [render props](https://reactjs.org/docs/render-props.html), the rest of the proposal is just encouraging the standard of React features and encouraging them to be used.

For the Clay side, we need to create documents and guides that help developers understand these new patterns and especially how to use [`ErrorBoundary`](https://reactjs.org/docs/error-boundaries.html) and [`Suspense`](https://reactjs.org/docs/react-api.html#reactsuspense) in their applications to optimize and create good patterns.

We should consider updating the docs of the components that adopt the collection to add the examples already using these new behaviors to encourage developers to use them.
