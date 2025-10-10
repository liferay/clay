# Controlled and uncontrolled components

-   Start Date: 2022-03-28
-   Author: [Matuzalém Teles](https://github.com/matuzalemsteles)
-   RFC PR: [#4786](https://github.com/liferay/clay/pull/4786)
-   Clay Issue: [#4766](https://github.com/liferay/clay/issues/4766)
-   Status: **Implemented**

## Introduction

The term [controlled](https://reactjs.org/docs/forms.html#controlled-components) and [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) components are not new and was [introduced by React.js](https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components), they are essentially used for form-related elements such as `<input />`. Elements like input have user interactions when typing in the input, this value can be managed without a state or with, but both cannot be changed during the component's lifecycle, this allows it to have a single source of truth that can be controlled without losing data on what the user is typing and what the component is changing.

In Clay components we have many form-related components, like `<ColorPicker />`, `<DatePicker />`, `<Input />`... this term can also be used for components that control state internally if the settings by default are not passed, such as `<TreeView />`, `<DropDown />` which provide the states being controlled internally as a way to improve the DX so that in some cases the developer does not need to create a state and configure it in the component.

This document describes the implementation proposal to improve API consistency between the various components with the same purpose of providing the option of the controlled or uncontrolled component.

## Motivation

The controlled and uncontrolled components are the state of who is managing the component's values and who is the source of truth. The main objective is to create consistency in the pattern of controlled and uncontrolled components in Clay so that developers can replicate the same learning in one component in the other components, this specifically deals with DX and API consistency between different Clay components with the same principle.

In Clay we have different components that use the component as controlled by default but not provide uncontrolled, other components provide APIs with different naming like `initialValue` instead of `defaultValue` for properties with initial values which are used when the component is acting as uncontrolled.

## Proposed solution

Keep APIs consistent between components that can be uncontrolled and controlled, naming should be the same between different components or close, this will allow the developer to replicate the same behavior uniformly between different components.

```jsx
// controlled
<TreeView
  items={items}
  onItemsChange={setItems}
/>

<Input
  value={value}
  onChange={setValue}
/>

// uncontrolled
<TreeView
  defaultItems={items}
/>

<Input
  defaultValue={value}
/>
```

Keep a hook to handle controlled and uncontrolled state management, we already have this implementation in Clay with [`useInternalState`](https://github.com/liferay/clay/blob/5ce984402f1d42d53da225b4c75b14746c5139dd/packages/clay-shared/src/useInternalState.ts).

```typescript
type InternalDispatch<Value> =
	| ((value: Value) => void)
	| ((value?: Value) => void)
	| React.Dispatch<React.SetStateAction<Value>>;

type Props<Value> = {
	defaultName: string;
	handleName: string;
	name: string;
	defaultValue?: Value | (() => Value);
	onChange?: InternalDispatch<Value>;
	value?: Value;
};

function useInternalState<Value>(
	props: Props<Value>
): [Value, InternalDispatch];
```

We have the implementation of [`useInternalState`](https://github.com/liferay/clay/blob/5ce984402f1d42d53da225b4c75b14746c5139dd/packages/clay-shared/src/useInternalState.ts) which aims to be the hook that will manage when the component is acting as controlled and uncontrolled and alert the developer when it is using the component the wrong way, this behavior is the same as React.js like this like the error message.

## Detailed design

To improve the consistency of the public APIs of components that can act as controlled and uncontrolled, this document describes the proposal to rename the naming of some existing APIs in order to maintain consistency between the different components.

To clarify better, there are two groups of components that act with this behavior, components based to forms and presentation. Some examples are:

-   Forms
    -   `<Checkbox />`
    -   `<Input />`
    -   `<Radio />`
    -   `<MultiSelect />`
    -   `<ColorPicker />`
    -   `<DatePicker />`
    -   `<TimePicker />`
    -   `<SelectBox />`
-   Presentation
    -   `<TreeView />`
    -   `<DropDown />`
    -   `<Tabs />`
    -   `<Pagination />`
    -   `<PaginationBar />`
    -   `<Modal />`

Both allow the developer to have visibility of the component state that is triggered by the interaction of a user, all have the same premise the user's reaction triggers a reaction even if it is not something linked to the form.

Not all components need to act as uncontrolled or controlled but all form components must follow, In presentation components, there is any inconsistency, as of this writing, `<DropDown />` is only controlled in some component scenarios at low-level. `<Alert />` doesn't implement this definition very clearly it just has the `onClose` property with the effect of being reactive to user interaction but not controlling the visibility state of the component.

Define consistent naming and behavior for the two groups with minor differences for use cases aimed at the presentation group. Components based on the form must follow the nomenclature and presentation components must follow the pattern, this is described below as the reasons.

### Form-based components

```typescript
type Props<Value> =
	| {
			/**
			 * Property to set the default value. (uncontrolled)
			 */
			defaultValue: Value;
	  }
	| {
			/**
			 * Handler property reactivates the user's action to modify the value. (controlled)
			 */
			onChange: React.Dispatch<React.SetStateAction<Value>>;

			/**
			 * The value property defines the current value of the component. (controlled)
			 */
			value: Value;
	  };
```

The type presented above is the proposal for all form-based components that must follow the API nomenclature and behavior.

> 🚨 With the exception of native components that behave differently, for example in `<checkbox/>` the `checked` property is used to define if the element is selected and `value` for another purpose it's not modified by some user action.

### Presentation components

The components linked to the presentation have the difference that they are not linked to the form but usually, a mixture of user actions are reactive in the component, for example, expanding the menu of the `<DropDown />`, changing tabs in `<Tabs / >`, the `<TreeView />` with different actions in a single component, these cases differ from the form-based components proposal because the naming of the properties has to be added some context so that it can facilitate what is it and avoid conflicts with other properties in the same component, for example the `<TreeView />`.

```typescript
type Props<Value> =
	| {
			/**
			 * Property to set the default value of the `items`. (uncontrolled)
			 */
			defaultItems: Value;
	  }
	| {
			/**
			 * Handler property reactivates the user's action to modify the `items` value. (controlled)
			 */
			onItemsChange: React.Dispatch<React.SetStateAction<Value>>;

			/**
			 * The value property defines the current value of the `items`. (controlled)
			 */
			items: Value;
	  };
```

The type above is an example following the naming pattern for this purpose, other example, to expand the DropDown menu:

```typescript
type Props<Value> =
	| {
			/**
			 * Property to set the default value of the `expand`. (uncontrolled)
			 */
			defaultExpand: Value;
	  }
	| {
			/**
			 * The handler property is reactivates the user action when clicking expand menu. (controlled)
			 */
			onExpandPress: React.Dispatch<React.SetStateAction<Value>>;

			/**
			 * The value property defines the current value of the `expand`. (controlled)
			 */
			expand: Value;
	  };
```

The components must follow the naming pattern but the behavior must remain the same for all ie, being controlled or uncontrolled depending on the property definition. For properties with the default value they must have the mandatory `default` prefix followed by the name of the property referring to the current value, the same for the event handler accompanied by the prefix `on` and the suffix corresponds to the type of the action, either `Change` , `Click`, `Focus`, must respect the naming of the browser's native events.

An exception to the action type like `Press` which handles more interactions than the commonly used `Click`, e.g press interactions across mouse, touch, keyboard, and screen readers.

## Effect on API resilience

This proposal will not change the behavior of the existing APIs because the behavior is consistent across all components that are using `useInternalState`, so components that need to use `DropDown` will not affect the behavior for those who are using it always defined the component as controlled.

To avoid a breaking change don't remove the existing APIs but create new APIs with the nomenclatures as aliases for the deprecated naming APIs and remove in Clay v4.

## Alternatives considered

There are not many alternatives considered regarding the consistency of APIs but an alternative regarding the definition of the new `default` property for the components to act as uncontrolled, in some components defining only `value` without the handler the component would be acting as uncontrolled but this causes confusion with property reaction because re-setting a new value for `value` will not cause any rerender.

```jsx
// Uncontrolled
<TreeView
  items={items}
/>

// Controlled
<TreeView
  items={items}
  onItemsChange={setItems}
/>
```

## Adoption strategy

For the adoption of new properties to set the initial value, we will adjust our documentation to use the new properties and disable the use of old properties, also publish a blog post about this change with the intuition of passing knowledge and teaching about behaviors like this.

## How we teach this

The terms used will be the same as what React.js uses to define when the component is controlling the state, uncontrolled, and when the developer is controlling the state, uncontrolled. We want to avoid creating new terms that can help hinder the component's learning curve. Blog posts and documentation should cite references to the React.js documentation.

To help the developer understand when they are configuring the component incorrectly, provide warnings in the console with useful information to help fix it.
