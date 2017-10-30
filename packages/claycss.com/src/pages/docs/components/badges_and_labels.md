---
title: Badges, Labels, and Stickers
description: Components
layout: "guide"
weight: 100
---

<article id="badges">

### Badges

<span class="badge badge-primary">8</span>{sp}
<span class="badge badge-secondary">87</span>{sp}
<span class="badge badge-success">999K</span>{sp}
<span class="badge badge-info">91</span>{sp}
<span class="badge badge-warning">21</span>{sp}
<span class="badge badge-danger">130</span>

```text/html
<span class="badge badge-primary">8</span>
<span class="badge badge-secondary">87</span>
<span class="badge badge-success">999K</span>
<span class="badge badge-info">91</span>
<span class="badge badge-warning">21</span>
<span class="badge badge-danger">130</span>
```
```soy
{call ClayBadge.render}
	{param: label: '8' /}
{/param}

{call ClayBadge.render}
	{param: label: '87' /}
	{param: style: 'secondary' /}
{/param}

{call ClayBadge.render}
	{param: label: '999K' /}
	{param: style: 'success' /}
{/param}
```

</article>


<article id="labels">

### Labels

<span class="label label-primary">Primary</span>{sp}
<span class="label label-secondary">Secondary</span>{sp}
<span class="label label-success">Success</span>{sp}
<span class="label label-info">Info</span>{sp}
<span class="label label-warning">Warning</span>{sp}
<span class="label label-danger">Danger</span>

```text/html
<span class="label label-primary">Primary</span>
<span class="label label-secondary">Secondary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>
```
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

</article>


<article id="label-as-a-link">

### Label as a Link

<a class="label label-primary" href="#1">Primary</a>{sp}
<a class="label label-secondary" href="#1">Secondary</a>{sp}
<a class="label label-success" href="#1">Success</a>{sp}
<a class="label label-info" href="#1">Info</a>{sp}
<a class="label label-warning" href="#1">Warning</a>{sp}
<a class="label label-danger" href="#1">Danger</a>

```text/html
<a class="label label-primary" href="#1">Primary</a>
<a class="label label-secondary" href="#1">Secondary</a>
<a class="label label-success" href="#1">Success</a>
<a class="label label-info" href="#1">Info</a>
<a class="label label-warning" href="#1">Warning</a>
<a class="label label-danger" href="#1">Danger</a>
```
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

</article>


<article id="label-sizes">

### Label Sizes

> Use `label-lg` to make the label larger or use the mixin `label-size($sassMap)` to create a custom sized label.

<span class="label label-secondary">Normal Label</span>{sp}
<span class="label label-lg label-success">Large Label</span>{sp}

```text/html
<span class="label label-secondary">Normal Label</span>
<span class="label label-lg label-success">Large Label</span>
```
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

</article>


<article id="sticker">

### Sticker

> Stickers are monospaced badges/labels.

<span class="sticker sticker-primary">133</span>{sp}
<span class="sticker sticker-secondary">133</span>{sp}
<span class="sticker sticker-success">133</span>{sp}
<span class="sticker sticker-info">133</span>{sp}
<span class="sticker sticker-warning">133</span>{sp}
<span class="sticker sticker-danger">133</span>

```text/html
<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
```
```soy
{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'info' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'warning' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'danger' /}
{/call}
```

</article>


<article id="positional-stickers">

### Positional Stickers

> Place them anywhere relative to your container using positional sticker classes `sticker-top-left`, `sticker-bottom-left`, `sticker-top-right`, and `sticker-bottom-right`.

<div class="row">
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
				<span class="sticker sticker-danger sticker-top-left">PDF</span>
			</div>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
				<span class="sticker sticker-bottom-left sticker-danger">PDF</span>
			</div>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
				<span class="sticker sticker-danger sticker-top-right">PDF</span>
			</div>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
				<span class="sticker sticker-bottom-right sticker-danger">PDF</span>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
	<span class="sticker sticker-danger sticker-top-left">PDF</span>
</div>
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
	<span class="sticker sticker-bottom-left sticker-danger">PDF</span>
</div>
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
	<span class="sticker sticker-danger sticker-top-right">PDF</span>
</div>
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
	<span class="sticker sticker-bottom-right sticker-danger">PDF</span>
</div>
```
```soy
{call ClaySticker.render}
	{param label: 'PDF' /}
	{param position: 'top-left' /}
	{param style: 'danger' /}
{/call}

{call ClaySticker.render}
	{param label: 'PDF' /}
	{param position: 'bottom-left' /}
	{param style: 'danger' /}
{/call}

{call ClaySticker.render}
	{param label: 'PDF' /}
	{param position: 'top-right' /}
	{param style: 'danger' /}
{/call}

{call ClaySticker.render}
	{param label: 'PDF' /}
	{param position: 'bottom-right' /}
	{param style: 'danger' /}
{/call}
```

</article>


<article id="sticker-sizes">

### Sticker Sizes

> Stickers come in 4 sizes sm, normal, lg, and xl . Create your own custom size with the `sticker-size` mixin.

<span class="sticker sticker-primary sticker-sm">133</span>{sp}
<span class="sticker sticker-secondary">133</span>{sp}
<span class="sticker sticker-lg sticker-success">133</span>{sp}
<span class="sticker sticker-danger sticker-xl">133</span>

```text/html
<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-danger sticker-xl">133</span>
```
```soy
{call ClaySticker.render}
	{param label: '133' /}
	{param size: 'sm' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param size: 'lg' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param size: 'xl' /}
	{param style: 'danger' /}
{/call}
```

<span class="sticker sticker-primary sticker-sm">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>{sp}
<span class="sticker sticker-secondary">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>{sp}
<span class="sticker sticker-lg sticker-success">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>{sp}
<span class="sticker sticker-danger sticker-xl">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>

```text/html
<span class="sticker sticker-primary sticker-sm">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>
<span class="sticker sticker-secondary">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>
<span class="sticker sticker-lg sticker-success">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>
<span class="sticker sticker-danger sticker-xl">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>
```
```soy
{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'format'
	] /}
	{param size: 'sm' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'format'
	] /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'format'
	] /}
	{param size: 'lg' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'format'
	] /}
	{param size: 'xl' /}
	{param style: 'danger' /}
{/call}
```

</article>


<article id="stickers-as-avatars-user-icon-replacement">

### Stickers as Avatars (User Icon Replacement)

<span class="rounded-circle sticker sticker-primary sticker-sm">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_dock.jpg">
</span>{sp}
<span class="rounded-circle sticker sticker-primary">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coyote.jpg">
</span>{sp}
<span class="rounded-circle sticker sticker-primary sticker-lg">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
</span>{sp}
<span class="rounded-circle sticker sticker-primary sticker-xl">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
</span>{sp}

```text/html
<span class="rounded-circle sticker sticker-primary sticker-sm">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_dock.jpg">
</span>
<span class="rounded-circle sticker sticker-primary">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coyote.jpg">
</span>
<span class="rounded-circle sticker sticker-primary sticker-lg">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
</span>
<span class="rounded-circle sticker sticker-primary sticker-xl">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
</span>
```

<span class="rounded-circle sticker sticker-primary sticker-sm">JB</span>{sp}
<span class="rounded-circle sticker sticker-secondary">TT</span>{sp}
<span class="rounded-circle sticker sticker-lg sticker-success">SP</span>{sp}
<span class="rounded-circle sticker sticker-danger sticker-xl">WW</span>{sp}

```text/html
<span class="rounded-circle sticker sticker-primary sticker-sm">JB</span>
<span class="rounded-circle sticker sticker-secondary">TT</span>
<span class="rounded-circle sticker sticker-lg sticker-success">SP</span>
<span class="rounded-circle sticker sticker-danger sticker-xl">WW</span>
```
```soy
{call ClaySticker.render}
	{param label: 'JB' /}
	{param size: 'sm' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param label: 'TT' /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param label: 'SP' /}
	{param size: 'lg' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param label: 'WW' /}
	{param size: 'xl' /}
	{param style: 'danger' /}
{/call}
```

</article>
