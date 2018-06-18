---
title: "Labels"
---

### Description

Labels are a mechanism to categorize information providing quick recognition.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/labels.html">Labels Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-labels">

### Labels

<span class="label label-secondary"><span class="label-item label-item-expand">Label Text</span></span>{sp}
<span class="label label-info"><span class="label-item label-item-expand">Status</span></span>{sp}
<span class="label label-warning"><span class="label-item label-item-expand">Pending</span></span>{sp}
<span class="label label-danger"><span class="label-item label-item-expand">Rejected</span></span>{sp}
<span class="label label-success"><span class="label-item label-item-expand">Approved</span></span>

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
```text/html
<clay-label label="Label text"></clay-label>

<clay-label label="Status" style="info"></clay-label>

<clay-label label="Pending" style="warning"></clay-label>

<clay-label label="Rejected" style="danger"></clay-label>

<clay-label label="Approved" style="success"></clay-label>
```
```text/html
<span class="label label-secondary">
	<span class="label-item label-item-expand">Label Text</span>
</span>

<span class="label label-info">
	<span class="label-item label-item-expand">Status</span>
</span>

<span class="label label-warning">
	<span class="label-item label-item-expand">Pending</span>
</span>

<span class="label label-danger">
	<span class="label-item label-item-expand">Rejected</span>
</span>

<span class="label label-success">
	<span class="label-item label-item-expand">Approved</span>
</span>
```

</article>

<article id="clay-labels-size">

### Sizes

> Use `label-lg` to make the label larger or use the mixin `label-size($sassMap)` to create a custom sized label.

<span class="label label-secondary"><span class="label-item label-item-expand">Normal Label</span></span>{sp}
<span class="label label-lg label-secondary"><span class="label-item label-item-expand">Large Label</span></span>{sp}

```soy
{call ClayLabel.render}
	{param label: 'Normal Label' /}
{/call}

{call ClayLabel.render}
	{param label: 'Large Label' /}
	{param size: 'lg' /}
{/call}
```
```text/html
<clay-label label="Normal Label"></clay-label>

<clay-label label="Large Label" size="lg"></clay-label>
```
```text/html
<span class="label label-secondary">
	<span class="label-item label-item-expand">Normal Label</span>
</span>

<span class="label label-lg label-secondary">
	<span class="label-item label-item-expand">Large Label</span>
</span>
```

</article>

<article id="clay-labels-variations">

### Variations

#### Label simple

> Used to identify, tag content, show status, to filter content or even to provide navigation to elements of same identification. It can be used with status colors.

<span class="label label-secondary"><span class="label-item label-item-expand">Label Text</span></span>

```soy
{call ClayLabel.render}
	{param label: 'Label Text' /}
{/call}
```
```text/html
<clay-label label="Normal Label"></clay-label>
```
```text/html
<span class="label label-secondary">
	<span class="label-item label-item-expand">Label Text</span>
</span>
```

#### Label removable

> Used in filter bars, categories, etc. Always in default size and without status color. Use it only in default size.

<span class="label label-dismissible label-secondary">
	<span class="label-item label-item-expand">Label Text</span>
	<span class="label-item label-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
		</button>
	</span>
</span>

```soy
{call ClayLabel.render}
	{param closeable: true /}
	{param label: 'Label Text' /}
{/call}
```
```text/html
<clay-label closeable="true" label="Label Text"></clay-label>
```
```text/html
<span class="label label-dismissible label-secondary">
	<span class="label-item label-item-expand">Label Text</span>
	<span class="label-item label-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>
```

#### Label with link

> Used in sites to link to related content.

<a class="label label-secondary" href="#1"><span class="label-item label-item-expand">Label Text</span></a>

```soy
{call ClayLabel.render}
	{param href: '#1' /}
	{param label: 'Label Text' /}
{/call}
```
```text/html
<clay-label href="#1" label="Label Text"></clay-label>
```
```text/html
<a class="label label-primary" href="#1">
	<span class="label-item label-item-expand">Label Text</span>
</a>
```

</article>
