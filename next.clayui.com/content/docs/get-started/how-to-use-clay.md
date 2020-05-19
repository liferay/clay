---
title: "How to use clay"
description: "Practical guidelines to start using Clay, a quick guide on how to install components and css to get started."
order: 2
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Install with NPM or Yarn](#install-with-npm-or-yarn)
    - [NPM](#npm)
	- [Yarn](#yarn)
- [Install via Clay CSS CDN](#install-via-clay-css-cdn)
- [Quick start](#quick-start)

</div>
</div>

Clay follows some fundamentals and we recommend that you read more about this before you start using it in your application.

<div class="nav-toc">

- [Composing](/foundations/composing.html)

</div>

### Install with NPM or Yarn


Clay makes the components and CSS available in its own `@clayui` scope package, in some packages we have component aggregation, something like the `@clayui/form` package that aggregates components `Checkbox`, `Radio`, `Input`, `Select`...

You can check out the full list of [packages available in NPM](https://www.npmjs.com/search?q=%40clayui).

#### NPM

```shell
npm install @clayui/css @clayui/*
```

#### Yarn

```shell
yarn add @clayui/css @clayui/*
```

### Install via Clay CSS CDN

We provide Clay CSS via CDN, which is an option when you do not want to install the clay package via NPM or Yarn.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css">
```

If you want a specific version of CSS, specify the desired version.

Example:

```diff
- https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css
+ https://cdn.jsdelivr.net/npm/@clayui/css@3.0.0/lib/css/atlas.css
```

### Quick start

<div class="clay-site-alert alert alert-warning">
	<strong class="lead">Warning</strong>
	Before you get started with this quick start, read about Clay's fundamentals of composition to move on. The information below is assuming you have read about Clay's compositional philosophy and learned about the terms.
</div>

<div class="clay-site-alert alert alert-warning">
	<strong class="lead">Warning</strong>
	This quick start requires that you have a minimum knowledge of <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">React Hooks</a>, not much of your API's will be used but just <a href="https://reactjs.org/docs/hooks-reference.html#usestate" target="_blank"><b>useState</b></a> to control the component.
</div>

For this quick start we will use [codesandbox](https://codesandbox.io/) which does not need to install an environment on your machine.

Use the **codesandbox** below as your text editor and environment so we can follow through with the examples.

<iframe src="https://codesandbox.io/embed/intelligent-resonance-dlpgp?fontsize=14&view=editor" title="quick-start-clay" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Let's use the **DropDown** component (`@clayui/drop-down`) and understand how the compositing philosophy works for this component so you can start replicating on other components.

<div class="clay-site-alert alert alert-info">
	<strong class="lead">Info</strong>
	You can check the <a href="/docs/components/drop-down.html" target="_blank">ClayDropDown</a> package documentation for its API and usage philosophy.
</div>

Before we get started, let's import the main packages that we will use to create a low-level Drop Down with Clay components.

```js
import {ClayCheckbox, ClayRadio} from '@clayui/form';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
```

<div class="clay-site-alert alert alert-info">
	<strong class="lead">Info</strong>
	These packages are installed in the sandbox environment, so feel free to fork the environment if you want to test with other Clay components.
</div>


As you learned from [Clay's compositional philosophy]((/foundations/composing.html)), we are using a low-level DropDown component, as its essence is a controlled component and for that you need to control DropDown's expand state. Let's use React's [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate) to control the state.

```js
const [expand, setExpand] = useState(false);
```

Soon after we can add the components to see rendered on the screen.

```jsx
<ClayDropDown
	active={expand}
	onActiveChange={setExpand}
	trigger={<ClayButton>{'Click Me'}</ClayButton>}
/>
```

At first we are seeing only ClayButton being rendered with empty DropDown, as it is a low-level component we need to compose DropDown content with other components to see a list of actions or add whatever you want inside.

Try this:

```jsx
<ClayDropDown
	active={expand}
	onActiveChange={setExpand}
	trigger={<ClayButton>{'Click Me'}</ClayButton>}
>
	<h1>Menu</h1>
</ClayDropDown>
```

Now we can compose with other Clay components and add a Checkbox and Radio to the content.

```jsx
<ClayDropDown
	active={expand}
	onActiveChange={setExpand}
	trigger={<ClayButton>{'Click Me'}</ClayButton>}
>
	<ClayDropDown.ItemList>
		<ClayDropDown.Item href="#1">
            Linkable
		</ClayDropDown.Item>
		<ClayDropDown.Item>
			<ClayCheckbox checked label="Checkbox" onChange={() => {}} />
		</ClayDropDown.Item>
		<ClayDropDown.Item>
			<ClayRadio checked label="Radio" value="radio" />
        </ClayDropDown.Item>
	</ClayDropDown.ItemList>
</ClayDropDown>
```

Low-level components in Clay allow you to compose and add your own rules, allowing you to achieve your design standards that are tied to Lexicon fundamentals. A team that follows the Lexicon team's predicted behaviors and cases can use the high-level components that help you code faster.

See the same example above being reflected in a high-level component.

```js
import ClayDropDown, {ClayDropDownWithItems} from '@clayui/drop-down';
```

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
		{
			label: 'Radio',
			type: 'radio',
			value: 'radio',
		}
	]}
	trigger={<ClayButton>{'Click Me'}</ClayButton>}
/>
```

If you had problems, this is the final sandbox with all the examples described above.

<iframe src="https://codesandbox.io/embed/quick-start-clay-23xtz?fontsize=14" title="quick-start-clay-finale" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>