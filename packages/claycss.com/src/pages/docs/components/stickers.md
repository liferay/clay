---
title: Stickers
description: Components
layout: "guide"
weight: 100
---

<article id="sticker">

### Sticker

> Stickers are monospaced badges/labels.

<span class="sticker sticker-primary">133</span>{sp}
<span class="sticker sticker-secondary">133</span>{sp}
<span class="sticker sticker-success">133</span>{sp}
<span class="sticker sticker-info">133</span>{sp}
<span class="sticker sticker-warning">133</span>{sp}
<span class="sticker sticker-danger">133</span>

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
```webcomponents
<clay-sticker label="133"></clay-sticker>

<clay-sticker label="133" style="secondary"></clay-sticker>

<clay-sticker label="133" style="success"></clay-sticker>

<clay-sticker label="133" style="info"></clay-sticker>

<clay-sticker label="133" style="warning"></clay-sticker>

<clay-sticker label="133" style="danger"></clay-sticker>
```
```text/html
<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
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
```webcomponents
<clay-sticker
	label="133"
	position="top-left"
	style="danger">
</clay-sticker>

<clay-sticker
	label="133"
	position="bottom-left"
	style="danger">
</clay-sticker>

<clay-sticker
	label="133"
	position="top-right"
	style="danger">
</clay-sticker>

<clay-sticker
	label="133"
	position="bottom-right"
	style="danger">
</clay-sticker>
```
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

</article>


<article id="sticker-sizes">

### Sticker Sizes

> Stickers come in 4 sizes sm, normal, lg, and xl . Create your own custom size with the `sticker-size` mixin.

<span class="sticker sticker-primary sticker-sm">133</span>{sp}
<span class="sticker sticker-secondary">133</span>{sp}
<span class="sticker sticker-lg sticker-success">133</span>{sp}
<span class="sticker sticker-danger sticker-xl">133</span>

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
```webcomponents
<clay-sticker
	label="133"
	size="sm"
	style="primary">
</clay-sticker>

<clay-sticker label="133" style="secondary"></clay-sticker>

<clay-sticker
	label="133"
	size="lg"
	style="success">
</clay-sticker>

<clay-sticker
	label="133"
	size="xl"
	style="danger">
</clay-sticker>
```
```text/html
<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-danger sticker-xl">133</span>
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
```webcomponents
<clay-sticker
	icon="['spritemap': '/vendor/lexicon/icons.svg', 'symbol': 'format']"
	size="sm"
	style="primary">
</clay-sticker>

<clay-sticker
	icon="['spritemap': '/vendor/lexicon/icons.svg', 'symbol': 'format']"
	style="secondary">
</clay-sticker>

<clay-sticker
	icon="['spritemap': '/vendor/lexicon/icons.svg', 'symbol': 'format']"
	size="lg"
	style="success">
</clay-sticker>

<clay-sticker
	icon="['spritemap': '/vendor/lexicon/icons.svg', 'symbol': 'format']"
	size="xl"
	style="danger">
</clay-sticker>
```
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

```soy
{call ClaySticker.render}
	{param label: 'JB' /}
	{param shape: 'circle' /}
	{param size: 'sm' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param label: 'TT' /}
	{param shape: 'circle' /}
	{param style: 'secondary' /}
{/call}

{call ClaySticker.render}
	{param label: 'SP' /}
	{param shape: 'circle' /}
	{param size: 'lg' /}
	{param style: 'success' /}
{/call}

{call ClaySticker.render}
	{param label: 'WW' /}
	{param shape: 'circle' /}
	{param size: 'xl' /}
	{param style: 'danger' /}
{/call}
```
```webcomponents
<clay-sticker
	label="JB"
	shape="circle"
	size="sm"
	style="primary">
</clay-sticker>

<clay-sticker
	label="TT"
	shape="circle"
	style="secondary">
</clay-sticker>

<clay-sticker
	label="SP"
	shape="circle"
	size="lg"
	style="success">
</clay-sticker>

<clay-sticker
	label="WW"
	shape="circle"
	size="xl"
	style="danger">
</clay-sticker>
```
```text/html
<span class="rounded-circle sticker sticker-primary sticker-sm">JB</span>
<span class="rounded-circle sticker sticker-secondary">TT</span>
<span class="rounded-circle sticker sticker-lg sticker-success">SP</span>
<span class="rounded-circle sticker sticker-danger sticker-xl">WW</span>
```

</article>
