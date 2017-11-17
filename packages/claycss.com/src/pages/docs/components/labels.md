---
title: Labels
description: Components
layout: "guide"
weight: 100
---

<article id="labels">

### Labels

<span class="label label-primary">Primary</span>{sp}
<span class="label label-secondary">Secondary</span>{sp}
<span class="label label-success">Success</span>{sp}
<span class="label label-info">Info</span>{sp}
<span class="label label-warning">Warning</span>{sp}
<span class="label label-danger">Danger</span>

```soy
{call ClayLabel.render}
	{param label: 'Label Text' /}
{/call}

{call ClayLabel.render}
	{param label: 'Status' /}
	{param style: 'info' /}
{/call}

{call ClayLabel.render}
	{param label: 'Pending' /}
	{param style: 'warning' /}
{/call}

{call ClayLabel.render}
	{param label: 'Rejected' /}
	{param style: 'danger' /}
{/call}

{call ClayLabel.render}
	{param label: 'Approved' /}
	{param style: 'success' /}
{/call}
```
```webcomponents
<clay-label label="Label text"></clay-label>

<clay-label label="Status" style="info"></clay-label>

<clay-label label="Pending" style="warning"></clay-label>

<clay-label label="Rejected" style="danger"></clay-label>

<clay-label label="Approved" style="success"></clay-label>
```
```text/html
<span class="label label-primary">Primary</span>
<span class="label label-secondary">Secondary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>
```

</article>


<article id="label-as-a-link">

### Label as a Link

<a class="label label-primary" href="#1">Primary</a>{sp}
<a class="label label-secondary" href="#1">Secondary</a>{sp}
<a class="label label-success" href="#1">Success</a>{sp}
<a class="label label-info" href="#1">Info</a>{sp}
<a class="label label-warning" href="#1">Warning</a>{sp}
<a class="label label-danger" href="#1">Danger</a>

```soy
{call ClayLabel.render}
	{param href: '#1' /}
	{param label: 'Label Text' /}
{/call}

{call ClayLabel.render}
	{param href: '#1' /}
	{param label: 'Status' /}
	{param style: 'info' /}
{/call}

{call ClayLabel.render}
	{param href: '#1' /}
	{param label: 'Pending' /}
	{param style: 'warning' /}
{/call}

{call ClayLabel.render}
	{param href: '#1' /}
	{param label: 'Rejected' /}
	{param style: 'danger' /}
{/call}

{call ClayLabel.render}
	{param href: '#1' /}
	{param label: 'Approved' /}
	{param style: 'success' /}
{/call}
```
```webcomponents
<clay-label href="#1" label="Label text"></clay-label>

<clay-label href="#1" label="Status" style="info"></clay-label>

<clay-label href="#1" label="Pending" style="warning"></clay-label>

<clay-label href="#1" label="Rejected" style="danger"></clay-label>

<clay-label href="#1" label="Approved" style="success"></clay-label>
```
```text/html
<a class="label label-primary" href="#1">Primary</a>
<a class="label label-secondary" href="#1">Secondary</a>
<a class="label label-success" href="#1">Success</a>
<a class="label label-info" href="#1">Info</a>
<a class="label label-warning" href="#1">Warning</a>
<a class="label label-danger" href="#1">Danger</a>
```

</article>


<article id="label-dismissible">

### Label Dismissible

<span class="label label-dismissible label-secondary">
	Normal Label{sp}
	<button aria-label="Close" class="close" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times"></use>
		</svg>
	</button>
</span>{sp}
<span class="label label-dismissible label-lg label-success">
	Large Label{sp}
	<button aria-label="Close" class="close" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times"></use>
		</svg>
	</button>
</span>

```soy
{call ClayLabel.render}
	{param closeable: true /}
	{param label: 'Normal Label' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}

{call ClayLabel.render}
	{param closeable: true /}
	{param label: 'Large Label' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param size: 'lg' /}
	{param style: 'info' /}
{/call}
```
```webcomponents
<clay-label
	closeable="true"
	label="Normal Label"
	spritemap="/vendor/lexicon/icons.svg">
</clay-label>

<clay-label
	closeable="true"
	label="Large Label"
	spritemap="/vendor/lexicon/icons.svg"
	size="lg"
	style="info">
</clay-label>
```
```text/html
<span class="label label-dismissible label-secondary">
	Normal Label
	<button aria-label="Close" class="close" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times"></use>
		</svg>
	</button>
</span>

<span class="label label-dismissible label-lg label-success">
	Large Label
	<button aria-label="Close" class="close" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times"></use>
		</svg>
	</button>
</span>
```

</article>


<article id="label-sizes">

### Label Sizes

> Use `label-lg` to make the label larger or use the mixin `label-size($sassMap)` to create a custom sized label.

<span class="label label-secondary">Normal Label</span>{sp}
<span class="label label-lg label-success">Large Label</span>{sp}

```soy
{call ClayLabel.render}
	{param closeable: true /}
	{param label: 'Normal Label' /}
{/call}

{call ClayLabel.render}
	{param label: 'Large Label' /}
	{param size: 'lg' /}
	{param style: 'info' /}
{/call}
```
```webcomponents
<clay-label
	label="Normal Label"
	spritemap="/vendor/lexicon/icons.svg">
</clay-label>

<clay-label
	label="Large Label"
	spritemap="/vendor/lexicon/icons.svg"
	size="lg"
	style="info">
</clay-label>
```
```text/html
<span class="label label-secondary">Normal Label</span>
<span class="label label-lg label-success">Large Label</span>
```

</article>
