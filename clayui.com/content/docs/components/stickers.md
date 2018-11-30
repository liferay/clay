---
title: "Stickers"
---

### Description

Stickers are a visual way to quickly identify content in a different way than badges and labels.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/stickers.html">Stickers Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Sizes

> Stickers come in four sizes: sm, normal, lg, and xl. Create your own custom size with the `sticker-size` mixin.

<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
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
```html
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
```html
<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-danger sticker-xl">133</span>
```

### Colors

<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
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
```html
<clay-sticker label="133"></clay-sticker>

<clay-sticker label="133" style="secondary"></clay-sticker>

<clay-sticker label="133" style="success"></clay-sticker>

<clay-sticker label="133" style="info"></clay-sticker>

<clay-sticker label="133" style="warning"></clay-sticker>

<clay-sticker label="133" style="danger"></clay-sticker>
```
```html
<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
```

### Variations

### Square

> Use square stickers to identify files and folders. You can place up to three characters or an icon inside a square sticker. Always capitalize the text in a square sticker.

<span class="sticker sticker-primary">JPG</span>
<span class="sticker sticker-primary">
	<span class="inline-item">
		<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#picture" />
		</svg>
	</span>
</span>

```soy
{call ClaySticker.render}
	{param label: 'JPG' /}
	{param style: 'primary' /}
{/call}

{call ClaySticker.render}
	{param icon: 'picture' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'primary' /}
{/call}
```
```html
<clay-sticker
	label="JPG"
	style="primary">
</clay-sticker>

<clay-sticker
	icon="picture"
	spritemap="/images/icons/icons.svg"
	style="primary">
</clay-sticker>
```
```html
<span class="sticker sticker-primary">JPG</span>
<span class="sticker sticker-primary">
	<span class="inline-item">
		<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#picture" />
		</svg>
	</span>
</span>
```

### Round

> Use a round sticker to identify people. You can place up to two characters or an image inside a round sticker. Always capitalize the text in a round sticker.

<span class="sticker sticker-primary rounded-circle">JP</span>
<span class="sticker sticker-primary rounded-circle">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg" />
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
```html
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
```html
<span class="sticker sticker-primary rounded-circle">JP</span>
<span class="sticker sticker-primary rounded-circle">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="img-fluid" src="/images/thumbnail_coffee.jpg" />
	</span>
</span>
```

### Position

> You can add a sticker to an Image Card. By default, its position is bottom left.

> Use the positional sticker classes to place them anywhere relative to your container: `sticker-top-left`, `sticker-bottom-left`, `sticker-top-right`, and `sticker-bottom-right`.

<div class="row">
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
				<span class="sticker sticker-danger sticker-top-left">PDF</span>
			</div>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
				<span class="sticker sticker-bottom-left sticker-danger">PDF</span>
			</div>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
				<span class="sticker sticker-danger sticker-top-right">PDF</span>
			</div>
		</div>
	</div>
	<div class="col-md-3 col-6">
		<div class="clay-site-positional-sticker">
			<div class="aspect-ratio">
				<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
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
```html
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
```html
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
	<span class="sticker sticker-danger sticker-top-left">PDF</span>
</div>
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
	<span class="sticker sticker-bottom-left sticker-danger">PDF</span>
</div>
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
	<span class="sticker sticker-danger sticker-top-right">PDF</span>
</div>
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
	<span class="sticker sticker-bottom-right sticker-danger">PDF</span>
</div>
```

### API

<div>
	[APITable "clay-sticker/src/ClaySticker.js"]
</div>
