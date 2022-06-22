---
title: 'Loading Indicator'
description: 'The loading indicator shows the user that an external process, like a connection, is being executed.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/loading-indicator/'
mainTabURL: 'docs/components/loading-indicator.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Loading Animation](#css-loading-animation)
-   [Loading Animation Squares](#css-loading-animation-squares)
-   [Sizes](#css-loading-animation-sizes)
    -   [Extra Small](#css-loading-animation-extra-small)
    -   [Small](#css-loading-animation-small)
    -   [Medium](#css-loading-animation-medium)
    -   [Large](#css-loading-animation-large)
-   [Variations](#css-variations)
    -   [Primary](#css-loading-animation-primary)
    -   [Secondary](#css-loading-animation-secondary)
    -   [Light](#css-loading-animation-light)
-   [Compositions](#css-loading-animation-compositions)
    -   [Button](#css-loading-animation-button)
-   [Reverting to the Dotted Animation](#css-loading-animation-reverting-to-the-dotted-animation)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	These animations are made using only CSS.
</div>

## Loading Animation(#css-loading-animation)

<div class="clay-site-alert alert alert-danger">
	This component received a breaking style update. Please see <a href="#css-loading-animation-reverting-to-the-dotted-animation">reverting to the Dotted Loading Animation</a> for instructions on how to revert it.
</div>

The `loading-animation` indicator is to be used with small components such as badges, buttons, inputs, tables rows, etc. This component takes on the `currentColor` and `font-size`.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation-secondary loading-animation-sm"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-secondary loading-animation-sm"
></span>
```

## Loading Animation Squares(#css-loading-animation-squares)

The `loading-animation-squares` indicator uses 2 square shapes taken from the Liferay logo. It helps us include some details from the brand in our product interfaces. Use this indicator only for bigger components such as cards, modals, sidebars, dashboards, etc. This component takes on the `currentColor` and the current `font-size`.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation-squares loading-animation-lg loading-animation-primary"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation-squares loading-animation-lg loading-animation-primary"
></span>
```

## Sizes(#css-loading-animation-sizes)

The Loading Animation components ship with four sizes. The Sass map, `$loading-animation-sizes`, accepts additional maps to output more sizes if needed.

### Extra Small(#css-loading-animation-extra-small)

The modifier class `loading-animation-xs` forces the loading animation indicator size to be 10px.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation-secondary loading-animation-xs"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-secondary loading-animation-xs"
></span>
```

### Small(#css-loading-animation-small)

The modifier class `loading-animation-sm` forces the Loading Animation indicator size to be 16px.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation-secondary loading-animation-sm"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-secondary loading-animation-sm"
></span>
```

### Medium(#css-loading-animation-medium)

The modifier class `loading-animation-md` forces the Loading Animation indicator size to be 32px.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation-squares loading-animation-primary loading-animation-md"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation-squares loading-animation-primary loading-animation-md"
></span>
```

### Large(#css-loading-animation-large)

The modifier class `loading-animation-lg` forces the Loading Animation indicator size to be 64px.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation-squares loading-animation-primary loading-animation-lg"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation-squares loading-animation-primary loading-animation-lg"
></span>
```

## Variations(#css-variations)

The Loading Animation component has three variants, primary, secondary, and light. The Sass map, `$loading-animation-palette`, accepts additional maps to output more variants if needed.

### Primary(#css-loading-animation-primary)

The modifier class `loading-animation-primary` forces the Loading Animation indicator color to be `$primary`.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation-squares loading-animation-md loading-animation-primary"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation-squares loading-animation-md loading-animation-primary"
></span>
```

### Secondary(#css-loading-animation-secondary)

The modifier class `loading-animation-secondary` forces the Loading Animation indicator color to be `$secondary`.

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation-sm loading-animation-secondary"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-sm loading-animation-secondary"
></span>
```

### Light(#css-loading-animation-light)

The modifier class `loading-animation-light` forces the Loading Animation indicator color to be white.

<div class="sheet-example">
	<div class="row bg-dark py-3">
		<div class="col-md-3">
			<span aria-hidden="true" class="loading-animation loading-animation-sm loading-animation-light"></span>
		</div>
		<div class="col-md-3">
			<span aria-hidden="true" class="loading-animation-squares loading-animation-md loading-animation-light"></span>
		</div>
	</div>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-sm loading-animation-light"
></span>
<span
	aria-hidden="true"
	class="loading-animation-squares loading-animation-md loading-animation-light"
></span>
```

## Compositions(#css-loading-animation-compositions)

### Button(#css-loading-animation-button)

<div class="sheet-example">
	<button class="btn btn-primary" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-secondary" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-success" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-info" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-warning" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-danger" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-light" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-dark" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
	<button class="btn btn-link" type="button">
		<span class="inline-item inline-item-before">
			<span aria-hidden="true" class="loading-animation"></span>
		</span>Loading
	</button>
</div>

```html
<button class="btn btn-primary" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-success" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-info" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-warning" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-danger" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-light" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-dark" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>

<button class="btn btn-link" type="button">
	<span class="inline-item inline-item-before">
		<span aria-hidden="true" class="loading-animation"></span> </span
	>Loading
</button>
```

## Reverting to the Dotted Animation(#css-loading-animation-reverting-to-the-dotted-animation)

Copy and paste the code below into your `_clay_variables.scss` file.

```scss{expanded}
$btn-primary: (
	loading-animation: 'loading-animation-light',
) !default;

$btn-success: (
	loading-animation: 'loading-animation-light',
) !default;

$btn-info: (
	loading-animation: 'loading-animation-light',
) !default;

$btn-warning: (
	loading-animation: 'loading-animation-light',
) !default;

$btn-danger: (
	loading-animation: 'loading-animation-light',
) !default;

$btn-dark: (
	loading-animation: 'loading-animation-light',
) !default;

$loading-icon-font-size: 2.5rem !default;

$loading-icon-font-size-sm: 1.25rem !default;

$loading-animation: (
	mixin-name: 'clay-loading-animation-variant',
	animation: clay-unset,
	ball-0-color: rgba(#6b6c7e, 1),
	ball-1-color: rgba(#6b6c7e, 0.8),
	ball-2-color: rgba(#6b6c7e, 0.6),
	ball-3-color: rgba(#6b6c7e, 0.4),
	ball-4-color: rgba(#6b6c7e, 0.2),
	ball-5-color: rgba(#6b6c7e, 0.1),
	display: block,
	font-size: $loading-icon-font-size,
	height: 1em,
	margin-left: auto,
	margin-right: auto,
	position: relative,
	text-align: left,
	vertical-align: middle,
	width: 1em,
	before: (),
	after: (
		animation: 1.2s ease-out infinite,
		animation-name: loading-animation,
		background-color: clay-unset,
		border-radius: 50%,
		color: #6b6c7e,
		content: '',
		display: block,
		height: 1em,
		left: 0,
		-webkit-mask: clay-unset,
		-webkit-mask-composite: clay-unset,
		mask-composite: clay-unset,
		padding: clay-unset,
		position: absolute,
		top: 0,
		transform: scale(0.33334),
		width: 1em,
	),
) !default;

$loading-animation-sizes: (
	loading-animation-sm: (
		font-size: $loading-icon-font-size-sm,
	),
) !default;

$loading-animation-palette: () !default;
$loading-animation-palette: map-deep-merge(
	(
		'%loading-animation-light': (
			mixin-name: 'clay-loading-animation-variant',
			ball-0-color: rgba(#fff, 1),
			ball-1-color: rgba(#fff, 0.8),
			ball-2-color: rgba(#fff, 0.6),
			ball-3-color: rgba(#fff, 0.4),
			ball-4-color: rgba(#fff, 0.2),
			ball-5-color: rgba(#fff, 0.1),
			after: (
				animation-name: loading-animation-light,
				color: #fff,
			),
		),
		'.loading-animation.loading-animation-light': (
			mixin-name: 'clay-loading-animation-variant',
			ball-0-color: rgba(#fff, 1),
			ball-1-color: rgba(#fff, 0.8),
			ball-2-color: rgba(#fff, 0.6),
			ball-3-color: rgba(#fff, 0.4),
			ball-4-color: rgba(#fff, 0.2),
			ball-5-color: rgba(#fff, 0.1),
			after: (
				animation-name: loading-animation-light,
				color: #fff,
			),
		),
	),
	$loading-animation-palette
);
```
