# Collection component

-   Start Date: 31-03-2022
-   Author: [Matuzalém Teles](https://github.com/matuzalemsteles)
-   RFC PR: (leave this empty)
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

```tsx
type Props<Items> = {
	children: ChildrenFunction<Items> | React.ReactNode;
	items?: Array<Items>;
};

// Intern use
<Collection<Items> items={items}>{children}</Collection>;
```

The component must be markup independent to allow adapting to the markups of each component. We also ensure that the behavior is consistent as well as APIs and composition.

The collection implementation will help improve the implementation of low-level components as described in [RFC 0001 Component offerings](./0001-component-offerings.md). Most components that implement collection have been created a high-level implementation with the prefix WithItems to support passing a Item API and render, for example:

```jsx
const items = [{label: 'Item'}];

<DropDownWithItems
	items={items}
	trigger={<ClayButton>{'Click Me'}</ClayButton>}
/>;
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

![Collection component](https://user-images.githubusercontent.com/13750819/166341856-7c55ab6e-5c82-4071-b9cb-35e720bdd008.png)

Describe the solution design in enough detail for someone familiar with Clay to understand and for someone familiar with the implementation to be able to implement it. If a new API is involved, show the full API and its documentation comments detailing what it does.

-   Static data
-   Dynamic data
-   Async loading
    -   ErrorBoundary
    -   Suspense
-   Data agnostic
-   Virtualization for large collections

## Alternatives considered

Describe alternative approaches to addressing the same problem, and why you chose this approach instead.

## Adoption strategy

If we implement this proposal, how will existing Clay developers adopt it? Is this a significant change? Can we write a codemod? Should we coordinate with other projects?

## How we teach this

What names and terminology work best for these concepts and why? How is this idea best presented?

When this proposal is accepted would it mean that Clay's documentation should be reorganized or changed?
