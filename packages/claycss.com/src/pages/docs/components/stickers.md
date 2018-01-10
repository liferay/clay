---
title: Stickers
description: "Stickers are a visual way to quickly identify content in a different way than badges and labels."
layout: "guide"
pattern: "stickers"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-sticker-sizes">

### Sizes

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
```text/html
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

</article>

<article id="clay-sticker-colors">

### Colors

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
```text/html
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

<article id="clay-stickers-variantions">

### Variations

### Square

> Use it only with files and folders. You can place up to 3 characters inside it or an icon. Always capital letters.

<span class="sticker sticker-primary">JPG</span>{sp}
<span class="sticker sticker-primary">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
</span>

```soy
{call ClaySticker.render}
	{param label: 'JPG' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param icon: 'picture' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'primary' /}
{/call}
```
```text/html
<clay-sticker
	label="JPG"
	style="primary">
</clay-sticker>

<clay-sticker
	icon="picture"
	spritemap="/vendor/lexicon/icons.svg"
	style="primary">
</clay-sticker>
```
```text/html
<span class="sticker sticker-primary">JPG</span>
<span class="sticker sticker-primary">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-picture">
		<use xlink:href="/vendor/lexicon/icons.svg#picture" />
	</svg>
</span>
```

### Round

> Use it only with people. You can places up to 2 characters inside it or an image. Always capital letters.

<span class="sticker sticker-primary rounded-circle">JP</span>{sp}
<span class="sticker sticker-primary rounded-circle">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
	</span>
</span>

```soy
{call ClaySticker.render}
	{param label: 'JP' /}
	{param shape: 'circle' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param imageAlt: 'thumbnail' /}
	{param imageSrc: '/images/thumbnail_coffee.jpg' /}
	{param shape: 'circle' /}
{/call}
```
```text/html
<clay-sticker
	label="JP"
	style="primary"
	shape="circle">
</clay-sticker>

<clay-sticker
	imageAlt="thumbnail"
	imageSrc="/images/thumbnail_coffee.jpg"
	shape="circle">
</clay-sticker>
```
```text/html
<span class="sticker sticker-primary rounded-circle">JP</span>
<span class="sticker sticker-primary rounded-circle">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg">
	</span>
</span>
```

</article>

<article id="clay-sticker-position">

### Position

> A sticker can be placed in a Image Card. Its position is always bottom left as you can see in the following example.

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
```text/html
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
