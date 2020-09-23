# Developing components

This article explains best practices, concepts, and common pitfalls when making components for Clay.
We go over concepts of high and low level components, composition, and advice on tying it all together.
When we make new components we must determine how high-level the component should be, and know what the component needs to offer, to better understand this, read [component offerings](https://github.com/liferay/clay/wiki/Component-Offerings)

## High-level vs low-level components and composition

When developing a new component always focus on the low-level components and composition first.
Leave complex business logic out of the components to maximize reusability (but think about how it will need to be implemented to provide ergonomic APIs and components)

### Composition

This refers to [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html).

> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

In Clay we compose our low-level components to build powerful high-level components, allowing users to use either to compose their own components depending on their needs. [Compositional philosophy](https://dev.to/matuzalemsteles/design-system-compositional-philosophy-of-components-1cc4) is good reading matieral to wrap your head around the concept.

### Low-level components

Low-level components are essentially building blocks (clay bricks) of any modern frontend solution. We primarily focus on making flexible low-level components before composing them into high-level components. These low-level components are supposed to be simple in their implementation so they can be reusable across multiple high-level components.

### High-level components

Not to be confused with [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html), high-level components are abstract components that are composed by multiple low-level components. You want to provide high level components only when the abstraction is clear and makes sense. For example [Dual List Box](https://github.com/liferay/clay/blob/master/packages/clay-form/src/DualListBox.tsx) is an abstraction of two [Select Box](https://github.com/liferay/clay/blob/master/packages/clay-form/src/SelectBox.tsx) components, tied together in a specific way.

## Common pitfalls

-   All of our component's props are located locally in the `IProps` object, and because we consume these in our API tables over on [ClayUI](https://clayui.com) we need to cast them like so `({}): IProps`, so they get properly consumed by the API tables e.g.

```tsx
const ClayComponent = ({
	children,
	className,
	...otherProps
}: IProps) => {
```

-   When creating a brand new component we often forget some of the boilerplate, one of those errors is `Error TS4082: Default export of the module has or is using private name ...`. The reason this error pops up is because it needs it's low-level components assigned to the parent component, like so:

```tsx
const ClayComponent: React.FunctionComponent<IProps> & {
    Item: typeof Item;
    Label: typeof Label;
} = ({...});

export default Object.assign(ClayComponent, {
	Item,
	Label,
});
```

-   We must specify the `displayName` of the component for it's entry in React Dev Tools to show the name we want for the component
