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
<span class="badge badge-danger">130</span>{sp}
<span class="badge badge-light">130</span>{sp}
<span class="badge badge-dark">130</span>{sp}

```text/html
<span class="badge badge-primary">8</span>
<span class="badge badge-secondary">87</span>
<span class="badge badge-success">999K</span>
<span class="badge badge-info">91</span>
<span class="badge badge-warning">21</span>
<span class="badge badge-danger">130</span>
<span class="badge badge-light">130</span>
<span class="badge badge-dark">130</span>
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


<article id="badge-pill">

### Badge Pill

<span class="badge badge-pill badge-primary">8</span>{sp}
<span class="badge badge-pill badge-secondary">87</span>{sp}
<span class="badge badge-pill badge-success">999K</span>{sp}
<span class="badge badge-info badge-pill">91</span>{sp}
<span class="badge badge-pill badge-warning">21</span>{sp}
<span class="badge badge-danger badge-pill">130</span>{sp}
<span class="badge badge-light badge-pill">130</span>{sp}
<span class="badge badge-dark badge-pill">130</span>{sp}

```text/html
<span class="badge badge-pill badge-primary">8</span>
<span class="badge badge-pill badge-secondary">87</span>
<span class="badge badge-pill badge-success">999K</span>
<span class="badge badge-info badge-pill">91</span>
<span class="badge badge-pill badge-warning">21</span>
<span class="badge badge-danger badge-pill">130</span>
<span class="badge badge-light badge-pill">130</span>
<span class="badge badge-dark badge-pill">130</span>
```

</article>


<article id="badges-as-anchor-tags">

### Badges as Anchor Tags

<a class="badge badge-primary" href="#1">Primary</a>{sp}
<a class="badge badge-secondary" href="#1">Secondary</a>{sp}
<a class="badge badge-success" href="#1">Success</a>{sp}
<a class="badge badge-info" href="#1">Info</a>{sp}
<a class="badge badge-warning" href="#1">Warning</a>{sp}
<a class="badge badge-danger" href="#1">Danger</a>{sp}
<a class="badge badge-light" href="#1">Light</a>{sp}
<a class="badge badge-dark" href="#1">Dark</a>{sp}

```text/html
<a class="badge badge-primary" href="#1">Primary</a>
<a class="badge badge-secondary" href="#1">Secondary</a>
<a class="badge badge-success" href="#1">Success</a>
<a class="badge badge-info" href="#1">Info</a>
<a class="badge badge-warning" href="#1">Warning</a>
<a class="badge badge-danger" href="#1">Danger</a>
<a class="badge badge-light" href="#1">Light</a>
<a class="badge badge-dark" href="#1">Dark</a>
```

</article>


<article id="badge-sizes">

### Badge Sizes

<div class="alert alert-warning">
	Badge Sizes have been removed, use the <code>badge-size($sassMap)</code> mixin to create custom badges sizes for your app.
</div>

</article>


<article id="labels">

### Labels

<span class="label label-primary">Primary</span>{sp}
<span class="label label-secondary">Secondary</span>{sp}
<span class="label label-success">Success</span>{sp}
<span class="label label-info">Info</span>{sp}
<span class="label label-warning">Warning</span>{sp}
<span class="label label-danger">Danger</span>{sp}
<span class="label label-light">Light</span>{sp}
<span class="label label-dark">Dark</span>{sp}

```text/html
<span class="label label-primary">Primary</span>
<span class="label label-secondary">Secondary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>
<span class="label label-light">Light</span>
<span class="label label-dark">Dark</span>
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


<article id="label-as-an-anchor-tag">

### Labels as an Anchor Tag

<a class="label label-primary" href="#1">Primary</a>{sp}
<a class="label label-secondary" href="#1">Secondary</a>{sp}
<a class="label label-success" href="#1">Success</a>{sp}
<a class="label label-info" href="#1">Info</a>{sp}
<a class="label label-warning" href="#1">Warning</a>{sp}
<a class="label label-danger" href="#1">Danger</a>{sp}
<a class="label label-light" href="#1">Light</a>{sp}
<a class="label label-dark" href="#1">Dark</a>{sp}

```text/html
<a class="label label-primary" href="#1">Primary</a>
<a class="label label-secondary" href="#1">Secondary</a>
<a class="label label-success" href="#1">Success</a>
<a class="label label-info" href="#1">Info</a>
<a class="label label-warning" href="#1">Warning</a>
<a class="label label-danger" href="#1">Danger</a>
<a class="label label-light" href="#1">Light</a>
<a class="label label-dark" href="#1">Dark</a>
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
</span>{sp}

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


<article id="label-with-links-inside">

### Label with Links Inside

<span class="label label-secondary">
	<a href="#1">Normal Label</a>
</span>{sp}
<span class="label label-lg label-success">
	<a href="#1">Large Label</a>
</span>{sp}

```text/html
<span class="label label-secondary">
	<a href="#1">Normal Label</a>
</span>

<span class="label label-lg label-success">
	<a href="#1">Large Label</a>
</span>
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
<span class="sticker sticker-danger">133</span>{sp}
<span class="sticker sticker-light">133</span>{sp}
<span class="sticker sticker-dark">133</span>{sp}

```text/html
<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
<span class="sticker sticker-light">133</span>
<span class="sticker sticker-dark">133</span>
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

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'light' /}
{/call}

{call ClaySticker.render}
	{param label: '133' /}
	{param style: 'dark' /}
{/call}
```

</article>


<article id="positional-stickers">

### Positional Stickers

> Place them anywhere relative to your container using positional sticker classes `sticker-top-left`, `sticker-bottom-left`, `sticker-top-right`, and `sticker-bottom-right`.

<div class="row">
	<div class="col-md-3 col-6">
		<div class="aspect-ratio">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
			<span class="sticker sticker-danger sticker-top-left">PDF</span>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="aspect-ratio">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
			<span class="sticker sticker-bottom-left sticker-danger">PDF</span>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="aspect-ratio">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
			<span class="sticker sticker-danger sticker-top-right">PDF</span>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="aspect-ratio">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
			<span class="sticker sticker-bottom-right sticker-danger">PDF</span>
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

> Stickers come in 3 different sizes, small, regular and large. Create your own custom size by changing the `width`, `height`, `line-height`, and `font-size`. You can also use the sass monospace mixin to change the width and height e.g. `@include monospace(30px);`.

<span class="sticker sticker-primary sticker-sm">133</span>{sp}
<span class="sticker sticker-secondary">133</span>{sp}
<span class="sticker sticker-lg sticker-success">133</span>{sp}
<span class="sticker sticker-xl sticker-info">133</span>{sp}
<span class="sticker sticker-xxl sticker-warning">133</span>{sp}

```text/html
<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-xl sticker-info">133</span>
<span class="sticker sticker-xxl sticker-warning">133</span>
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
	{param style: 'info' /}
{/call}
```

<span class="sticker sticker-xxl sticker-warning">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-magic">
		<use xlink:href="/vendor/lexicon/icons.svg#magic" />
	</svg>
</span>{sp}
<span class="sticker sticker-xl sticker-info">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
</span>{sp}
<span class="sticker sticker-lg sticker-success">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-home">
		<use xlink:href="/vendor/lexicon/icons.svg#home" />
	</svg>
</span>{sp}
<span class="sticker sticker-secondary">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>{sp}
<span class="sticker sticker-primary sticker-sm">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
		<use xlink:href="/vendor/lexicon/icons.svg#folder" />
	</svg>
</span>{sp}

```text/html
<span class="sticker sticker-xxl sticker-warning">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-magic">
		<use xlink:href="/vendor/lexicon/icons.svg#magic" />
	</svg>
</span>
<span class="sticker sticker-xl sticker-info">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
</span>
<span class="sticker sticker-lg sticker-success">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-home">
		<use xlink:href="/vendor/lexicon/icons.svg#home" />
	</svg>
</span>
<span class="sticker sticker-secondary">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-format">
		<use xlink:href="/vendor/lexicon/icons.svg#format" />
	</svg>
</span>
<span class="sticker sticker-primary sticker-sm">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
		<use xlink:href="/vendor/lexicon/icons.svg#folder" />
	</svg>
</span>
```
```soy
{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'magic'
	] /}
	{param size: 'xl' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'picture'
	] /}
	{param size: 'lg' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'home'
	] /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param icon: [
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'format'
	] /}
	{param size: 'sm' /}
	{param style: 'primary' /}
{/call}
```

</article>


<article id="sticker-overlay">

### Sticker Overlay

> Overlay content over stickers by nesting `sticker-overlay` inside `sticker`.

<span class="sticker sticker-primary sticker-sm">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_dock.jpg">
	<span class="sticker-overlay">JB</span>
</span>{sp}
<span class="sticker sticker-primary">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coyote.jpg">
	<span class="sticker-overlay">TT</span>
</span>{sp}
<span class="sticker sticker-primary sticker-lg">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
	<span class="sticker-overlay">SP</span>
</span>{sp}
<span class="sticker sticker-primary sticker-xl">
	<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
	<span class="sticker-overlay">
		TT
	</span>
</span>{sp}
<span class="sticker sticker-primary sticker-xxl">
	<img alt="thumbnail" class="img-fluid" src="../../images/thumbnail_typewriter.jpg">
	<span class="sticker-overlay">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
			<use xlink:href="/vendor/lexicon/icons.svg#folder" />
		</svg>
	</span>
</span>{sp}

</article>


<article id="sticker-outside">

### Sticker Outside

> Add class `sticker-outside` in conjunction with sticker positions to position the sticker on the outside corners.

<div class="row">
	<div class="col-md-3 col-6">
		<button class="btn btn-primary" style="position:relative;">
			Email
			<span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-left">133</span>
		</button>
	</div>
	<div class="col-md-3 col-6">
		<button class="btn btn-primary" style="position:relative;">
			Email
			<span class="rounded-circle sticker sticker-bottom-left sticker-danger sticker-outside">133</span>
		</button>
	</div>
	<div class="col-md-3 col-6">
		<button class="btn btn-primary" style="position:relative;">
			Email
			<span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-right">133</span>
		</button>
	</div>
	<div class="col-md-3 col-6">
		<button class="btn btn-primary" style="position:relative;">
			Email
			<span class="rounded-circle sticker sticker-bottom-right sticker-danger sticker-outside">133</span>
		</button>
	</div>
</div>

```text/html
<button class="btn btn-primary" style="position:relative;">
	Email
	<span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-left">133</span>
</button>
<button class="btn btn-primary" style="position:relative;">
	Email
	<span class="rounded-circle sticker sticker-bottom-left sticker-danger sticker-outside">133</span>
</button>
<button class="btn btn-primary" style="position:relative;">
	Email
	<span class="rounded-circle sticker sticker-danger sticker-outside sticker-top-right">133</span>
</button>
<button class="btn btn-primary" style="position:relative;">
	Email
	<span class="rounded-circle sticker sticker-bottom-right sticker-danger sticker-outside">133</span>
</button>
```
```soy
{call ClayButton.render}
	{param label kind="xml"}
		{call ClaySticker.render}
			{param label: '133' /}
			{param outside: 'top-left' /}
			{param shape: 'circle' /}
			{param style: 'danger' /}
		{/call}
	{/param}
{/call}

{call ClayButton.render}
	{param label kind="xml"}
		{call ClaySticker.render}
			{param label: '133' /}
			{param outside: 'bottom-left' /}
			{param shape: 'circle' /}
			{param style: 'danger' /}
		{/call}
	{/param}
{/call}

{call ClayButton.render}
	{param label kind="xml"}
		{call ClaySticker.render}
			{param label: '133' /}
			{param outside: 'top-right' /}
			{param shape: 'circle' /}
			{param style: 'danger' /}
		{/call}
	{/param}
{/call}

{call ClayButton.render}
	{param label kind="xml"}
		{call ClaySticker.render}
			{param label: '133' /}
			{param outside: 'bottom-right' /}
			{param shape: 'circle' /}
			{param style: 'danger' /}
		{/call}
	{/param}
{/call}
```

<div class="row">
	<div class="col-md-3 col-6">
		<span class="sticker sticker-dark">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
				<use xlink:href="/vendor/lexicon/icons.svg#picture" />
			</svg>
			<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-top-left">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-sun">
					<use xlink:href="/vendor/lexicon/icons.svg#sun" />
				</svg>
			</span>
		</span>
	</div>
	<div class="col-md-3 col-6">
		<span class="sticker sticker-info">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
				<use xlink:href="/vendor/lexicon/icons.svg#picture" />
			</svg>
			<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-bottom-left">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-magic">
					<use xlink:href="/vendor/lexicon/icons.svg#magic" />
				</svg>
			</span>
		</span>
	</div>
	<div class="col-md-3 col-6">
		<span class="sticker sticker-danger">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
				<use xlink:href="/vendor/lexicon/icons.svg#picture" />
			</svg>
			<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-top-right">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-transform">
					<use xlink:href="/vendor/lexicon/icons.svg#transform" />
				</svg>
			</span>
		</span>
	</div>
	<div class="col-md-3 col-6">
		<span class="sticker sticker-success">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
				<use xlink:href="/vendor/lexicon/icons.svg#picture" />
			</svg>
			<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-bottom-right">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-undo">
					<use xlink:href="/vendor/lexicon/icons.svg#undo" />
				</svg>
			</span>
		</span>
	</div>
</div>

```text/html
<span class="sticker sticker-dark">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
	<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-top-left">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-sun">
			<use xlink:href="/vendor/lexicon/icons.svg#sun" />
		</svg>
	</span>
</span>
<span class="sticker sticker-info">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
	<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-bottom-left">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-magic">
			<use xlink:href="/vendor/lexicon/icons.svg#magic" />
		</svg>
	</span>
</span>
<span class="sticker sticker-danger">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
	<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-top-right">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-transform">
			<use xlink:href="/vendor/lexicon/icons.svg#transform" />
		</svg>
	</span>
</span>
<span class="sticker sticker-success">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
	<span class="sticker sticker-info sticker-sm rounded-circle sticker-outside sticker-bottom-right">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-undo">
			<use xlink:href="/vendor/lexicon/icons.svg#undo" />
		</svg>
	</span>
</span>
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
	<span class="sticker-overlay">
		TT
	</span>
</span>{sp}
<span class="rounded-circle sticker sticker-secondary sticker-xxl">
	<img alt="thumbnail" class="img-fluid" src="../../images/thumbnail_typewriter.jpg">
</span>

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
	<span class="sticker-overlay">
		TT
	</span>
</span>
<span class="rounded-circle sticker sticker-secondary sticker-xxl">
	<img alt="thumbnail" class="img-fluid" src="../../images/thumbnail_typewriter.jpg">
</span>
```

<span class="rounded-circle sticker sticker-secondary sticker-sm">JB</span>
<span class="rounded-circle sticker sticker-danger">TT</span>
<span class="rounded-circle sticker sticker-info sticker-lg">SP</span>
<span class="rounded-circle sticker sticker-primary sticker-xl">WW</span>
<span class="rounded-circle sticker sticker-success sticker-xxl">TT</span>

```text/html
<span class="rounded-circle sticker sticker-secondary sticker-sm">JB</span>
<span class="rounded-circle sticker sticker-danger">TT</span>
<span class="rounded-circle sticker sticker-info sticker-lg">SP</span>
<span class="rounded-circle sticker sticker-primary sticker-xl">WW</span>
<span class="rounded-circle sticker sticker-success sticker-xxl">TT</span>
```
```soy
{call ClaySticker.render}
	{param label: 'JB' /}
	{param size: 'sm' /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param label: 'TT' /}
	{param style: 'danger' /}
{/call}

{call ClaySticker.render}
	{param label: 'SP' /}
	{param size: 'lg' /}
	{param style: 'info' /}
{/call}

{call ClaySticker.render}
	{param label: 'WW' /}
	{param size: 'xl' /}
	{param style: 'primary' /}
{/call}
```

</article>
