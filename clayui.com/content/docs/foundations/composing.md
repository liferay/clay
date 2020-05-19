---
title: 'Composing'
description: 'Component composition philosophy'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Composition](#composition)
-   [Philosophy](#philosophy)
    -   [Low-level components](#low-level-components)
    -   [High-level components](#high-level-components)

</div>
</div>

Clay follows some fundamentals for creating new components by following a common React pattern of [composition](https://reactjs.org/docs/composition-vs-inheritance.html).

We believe that using composition is helpful and is a widely used standard in the community. By using composition, it allows Clay to be widely used across various use cases.

## Composition

The composition is very common in React because the JSX syntactic sugar makes it very powerful and more viable when coupled with the `children` prop for passing arbitrary child elements. Props in React components allows us to pass objects and consequently React elements since they are objects.

```jsx
<ClayModal>
	<ClayModal.Footer
		first={
			<ClayButton.Group spaced>
				<ClayButton displayType="secondary">{'Secondary'}</ClayButton>
				<ClayButton displayType="secondary">{'Secondary'}</ClayButton>
			</ClayButton.Group>
		}
		middle={<ClayButton>{'Primary'}</ClayButton>}
	/>
</ClayModal>
```

So we follow some of React's composition approaches:

<div class="clay-ullist">

-   [**Containment**](https://reactjs.org/docs/composition-vs-inheritance.html#containment) - Components that are treated as generic blocks that accept the passing of arbitrary `children` to them, either using `children` props or the special naming convention itself.
-   [**Specialization**](https://reactjs.org/docs/composition-vs-inheritance.html#specialization) - Special case components that are for a specific use case and not treated as something more generic.

</div>

## Philosophy

Assuming that we want our components to be reusable and enable developers to have the flexibility to build on their own use cases while also helping developers who want quickly implement [Lexicon](https://lexicondesign.io) components, we have to consider the following:

Teams are constantly advancing and new features are always emerging that require new interactions and behavioral changes, a product changes a lot over time, being refined, aligning interests and changing behaviors in the UI.

Designers cannot get caught up in strict rules this blocks the creative mind and can prevent UI advances and interaction enhancements. The same goes for components, it has to allow developers to move forward with the standards made by designers and allow them to reuse components in the future.

Dealing with this is complex and requires balancing component flexibility and specialization, getting to that balance is difficult and we can spend a lot of time polishing and refining components.

We are delivering Clay as a **Multi-Layered API library**: **low-level**, **high-level** and **pure html**(@clayui/css). Each approach has its purposes of use:

<div class="clay-ullist">

-   **low-level** - Basic building blocks to provide flexibility so that you can customize and create high level components.
-   **high-level** - Highly specific component that tend to cover only specific use cases, limiting their flexibility.

</div>

#### Low-level components

They are a great way to create new behaviors by utilizing composition to allow you to compose with other Clay components and build new possibilities.

In essence, low-level components are more flexible but can slightly increase the "work" you have to do to get specifications, it requires you to do more composition but that doesn't mean it's bad or the components are incomplete. Usually they tend to be [controlled components](https://reactjs.org/docs/forms.html#controlled-components).

Clay follows a namespace pattern for low-level layer components, components are always nested according to responsibilities, common example:

<div class="clay-ullist">

-   ClayDropDown
-   ClayDropDown.Action
-   ClayDropDown.Item
-   ClayDropDown.ItemList
-   ClayDropDown.Search

</div>

```jsx
<ClayDropDown
	active={expand}
	onActiveChange={setExpand}
	trigger={<ClayButton>{'Low-level'}</ClayButton>}
>
	<ClayDropDown.ItemList>
		<ClayDropDown.Item href="#1">Linkable</ClayDropDown.Item>
		<ClayDropDown.Item>
			<ClayCheckbox checked label="Checkbox" onChange={() => {}} />
		</ClayDropDown.Item>
	</ClayDropDown.ItemList>
</ClayDropDown>
```

#### High-level components

They are friendlier in simple use cases and help develop quickly but are specialized for specific cases. They are built on top of low-level components adding rules that help to reach specific [Lexicon](https://lexicondesign.io) specifications.

The standard for differentiating high-level components from low-level components is defined in component naming following the pattern `{ComponentName}{Variant}`.

<div class="clay-ullist">

-   ClayButtonWithIcon
-   ClayCardWithHorizontal
-   ClayCardWithNavigation
-   ClayDropDownWithItems

</div>

<div class="clay-site-alert alert alert-warning">
   There are some exceptions to some components, Date Picker, Color Picker and Time Picker are examples of this.
</div>

```jsx
<ClayDropDownWithItems
	items={[
		{
			href: '#linkable',
			label: 'linkable',
		},
		{
			checked: true,
			label: 'Checkbox',
			type: 'checkbox',
		},
	]}
	trigger={<ClayButton>{'High-level'}</ClayButton>}
/>
```
