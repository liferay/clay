---
title: Buttons
description: Components
layout: "guide"
weight: 100
---

<article id="button">

### Button

<button class="btn btn-primary" type="button">Primary</button>{sp}
<button class="btn btn-secondary" type="button">Secondary</button>{sp}
<button class="btn btn-link" type="button">Link</button>{sp}
<button class="btn btn-unstyled" type="button">Unstyled</button>{sp}

```soy
{call ClayButton.render}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Unstyled' /}
	{param style: 'unstyled' /}
	{param type: 'button' /}
{/call}
```
```webcomponents
<clay-button label="Primary" type="button"></clay-button>

<clay-button label="Secondary" style="secondary" type="button"></clay-button>

<clay-button label="Link" style="borderless" type="button"></clay-button>

<clay-button label="Unstyled" style="link" type="button"></clay-button>
```
```text/html
<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-link" type="button">Link</button>
<button class="btn btn-unstyled" type="button">Unstyled</button>
```

### Disabled

<button class="btn btn-primary" disabled type="button">Primary</button>{sp}
<button class="btn btn-secondary" disabled type="button">Secondary</button>{sp}
<button class="btn btn-link" disabled type="button">Link</button>{sp}
<button class="btn btn-unstyled" disabled type="button">Unstyled</button>{sp}

```soy
{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Unstyled' /}
	{param style: 'unstyled' /}
	{param type: 'button' /}
{/call}
```
```webcomponents
<clay-button
	disabled="true"
	label="Primary"
	type="button">
</clay-button>

<clay-button
	disabled="true"
	label="Secondary"
	style="secondary"
	type="button">
</clay-button>

<clay-button
	disabled="true"
	label="Link"
	style="borderless"
	type="button">
</clay-button>

<clay-button
	disabled="true"
	label="Unstyled"
	style="link"
	type="button">
</clay-button>
```
```text/html
<button class="btn btn-primary" disabled type="button">Primary</button>
<button class="btn btn-secondary" disabled type="button">Secondary</button>
<button class="btn btn-link" disabled type="button">Link</button>
<button class="btn btn-unstyled" disabled type="button">Unstyled</button>
```

</article>


<article id="button-monospaced">

### Button Monospaced

<button class="btn btn-monospaced btn-primary" type="button">A</button>{sp}
<button class="btn btn-monospaced btn-secondary" type="button">B</button>{sp}
<button class="btn btn-monospaced btn-link" type="button">C</button>{sp}
<button class="btn btn-monospaced btn-unstyled" type="button">D</button>

```soy
{call ClayButton.render}
	{param label: 'A' /}
	{param monospaced: true /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'B' /}
	{param style: 'secondary' /}
	{param monospaced: true /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'C' /}
	{param style: 'link' /}
	{param monospaced: true /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'D' /}
	{param style: 'unstyled' /}
	{param monospaced: true /}
	{param type: 'button' /}
{/call}
```
```webcomponents
<clay-button
	label="A"
	monospaced="true"
	type="button">
</clay-button>

<clay-button
	label="B"
	style="secondary"
	monospaced="true"
	type="button">
</clay-button>

<clay-button
	label="C"
	style="borderless"
	monospaced="true"
	type="button">
</clay-button>

<clay-button
	label="D"
	style="link"
	monospaced="true"
	type="button">
</clay-button>
```
```text/html
<button class="btn btn-monospaced btn-primary" type="button">A</button>
<button class="btn btn-monospaced btn-secondary" type="button">B</button>
<button class="btn btn-monospaced btn-link" type="button">C</button>
<button class="btn btn-monospaced btn-unstyled" type="button">D</button>
```

</article>


<article id="button-dropdown">

### Button Dropdown

<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>{sp}
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>{sp}

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'label': 'Action',
			'url': '#1'
		],
		[
			'separator': true,
			'type': 'group'
		],
		[
			'label': 'Scope',
			'url': '#1'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param triggerLabel: 'Primary' /}
	{param triggerStyle: 'primary' /}
{/call}
```
```webcomponents
<clay-dropdown
	items='[{"label": "Action", "url": "#1"},{"separator": true, "type": : "group"},{"label": "Scope", "url": "#1"}]'
	spritemap="/vendor/lexicon/icons.svg"
	triggerLabel="Primary"
	triggerStyle="primary">
</clay-dropdown>
```
```text/html
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
```

</article>


<article id="sizes">

### Sizes

<button class="btn btn-secondary btn-sm" type="button">Small</button>{sp}
<button class="btn btn-secondary" type="button">Default</button>

```soy
{call ClayButton.render}
	{param label: 'Small' /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param label: 'Default' /}
{/call}
```
```webcomponents
<clay-button label="Small" size="sm"></clay-button>

<clay-button label="Default"></clay-button>
```
```text/html
<button class="btn btn-secondary btn-sm" type="button">Small</button>

<button class="btn btn-secondary" type="button">Default</button>
```

<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>{sp}
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
		<use xlink:href="/vendor/lexicon/icons.svg#plus"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'blogs'
	] /}
	{param monospaced: true /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'plus'
	] /}
	{param monospaced: true /}
{/call}
```
```webcomponents
<clay-button
	icon='{"spritemap": "/vendor/lexicon/icons.svg", "symbol": "blogs"}' monospaced="true"
	size="sm">
</clay-button>

<clay-button
	icon='{"spritemap": "/vendor/lexicon/icons.svg", "symbol": "plus"}' monospaced="true">
</clay-button>
```
```text/html
<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>

<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
		<use xlink:href="/vendor/lexicon/icons.svg#plus"></use>
	</svg>
</button>
```

<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>{sp}
<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>

```soy
{call ClayButton.render}
	{param block: true /}
	{param label: 'Small Block Level Button' /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param block: true /}
	{param label: 'Normal Block Level Button' /}
{/call}
```
```webcomponents
<clay-button block="true" label="Small Block Level Button" size="sm"></clay-button>

<clay-button block="true" label="Normal Block Level Button"></clay-button>
```
```text/html
<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>

<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
```

</article>
