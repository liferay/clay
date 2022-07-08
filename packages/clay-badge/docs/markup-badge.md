---
title: 'Badge'
description: 'Badges help highlight important information, such as notifications or new and unread messages. Badges have circular borders and are only used to specify a number.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/badges/'
mainTabURL: 'docs/components/badge.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Variations](#css-variations)
    -   [Sass API](#css-badge-sass-api)
-   [Pill Badges](#css-pill-badges)
-   [Anchor](#css-anchor)
-   [Links Inside](#css-links-inside)
-   [Text Truncate](#css-text-truncate)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	Badge Sizes have been removed. Use the <a href="https://github.com/liferay/clay/blob/master/packages/clay-css/src/scss/mixins/_badges.scss#L19">clay-badge-size($map) mixin</a> to create custom badge sizes for your app.
</div>

## Variations(#css-variations)

Add any of the below mentioned modifier classes to change the appearance of a badge.

<div class="sheet-example">
	<span class="badge badge-primary">
		<span class="badge-item badge-item-expand">Primary</span>
	</span>
	<span class="badge badge-secondary">
		<span class="badge-item badge-item-expand">Secondary</span>
	</span>
	<span class="badge badge-success">
		<span class="badge-item badge-item-expand">Success</span>
	</span>
	<span class="badge badge-info">
		<span class="badge-item badge-item-expand">Info</span>
	</span>
	<span class="badge badge-warning">
		<span class="badge-item badge-item-expand">Warning</span>
	</span>
	<span class="badge badge-danger">
		<span class="badge-item badge-item-expand">Danger</span>
	</span>
	<span class="badge badge-ligth">
		<span class="badge-item badge-item-expand">Light</span>
	</span>
	<span class="badge badge-dark">
		<span class="badge-item badge-item-expand">Dark</span>
	</span>
</div>

```html
<span class="badge badge-primary">
	<span class="badge-item badge-item-expand">Primary</span>
</span>

<span class="badge badge-secondary">
	<span class="badge-item badge-item-expand">Secondary</span>
</span>

<span class="badge badge-success">
	<span class="badge-item badge-item-expand">Success</span>
</span>

<span class="badge badge-info">
	<span class="badge-item badge-item-expand">Info</span>
</span>

<span class="badge badge-warning">
	<span class="badge-item badge-item-expand">Warning</span>
</span>

<span class="badge badge-danger">
	<span class="badge-item badge-item-expand">Danger</span>
</span>

<span class="badge badge-ligth">
	<span class="badge-item badge-item-expand">Light</span>
</span>

<span class="badge badge-dark">
	<span class="badge-item badge-item-expand">Dark</span>
</span>
```

### Badge Sass API(#css-badge-sass-api)

The map `$badge-palette` allows generating any number of badge variants. If a key starts with `.`, `#`, or '%' Clay will output it as is, otherwise we will prepend `.badge-` to the key (e.g., `.badge-primary`). It will also generate a Sass placeholder prefixed by `%badge-` (e.g., `%badge-primary`).

```scss{expanded}
$badge-palette: (
    primary: (
        background-color: $primary,
    ),
    '.badge-primary-2': (
        extend: '%badge-primary',
    ),
    '%badge-tertiary': (
        background-color: green,
    ),
    '.badge-tertiary': (
        extend: '%badge-tertiary',
    ),
    '.badge-quaternary': (
        extend: '%badge-tertiary',
    ),
);
```

Outputs:

```css{expanded}
.badge-primary, .badge-primary-2 {
    background-color: #0b5fff;
}

.badge-tertiary, .badge-quaternary {
    background-color: green;
}
```

## Pill Badges(#css-pill-badges)

Use the `.badge-pill` modifier class to make badges more rounded.

<div class="sheet-example">
	<span class="badge badge-primary badge-pill">
		<span class="badge-item badge-item-expand">Primary</span>
	</span>
	<span class="badge badge-secondary badge-pill">
		<span class="badge-item badge-item-expand">Secondary</span>
	</span>
	<span class="badge badge-success badge-pill">
		<span class="badge-item badge-item-expand">Success</span>
	</span>
	<span class="badge badge-info badge-pill">
		<span class="badge-item badge-item-expand">Info</span>
	</span>
	<span class="badge badge-warning badge-pill">
		<span class="badge-item badge-item-expand">Warning</span>
	</span>
	<span class="badge badge-danger badge-pill">
		<span class="badge-item badge-item-expand">Danger</span>
	</span>
	<span class="badge badge-ligth badge-pill">
		<span class="badge-item badge-item-expand">Light</span>
	</span>
	<span class="badge badge-dark badge-pill">
		<span class="badge-item badge-item-expand">Dark</span>
	</span>
</div>

```html
<span class="badge badge-primary badge-pill">
	<span class="badge-item badge-item-expand">Primary</span>
</span>

<span class="badge badge-secondary badge-pill">
	<span class="badge-item badge-item-expand">Secondary</span>
</span>

<span class="badge badge-success badge-pill">
	<span class="badge-item badge-item-expand">Success</span>
</span>

<span class="badge badge-info badge-pill">
	<span class="badge-item badge-item-expand">Info</span>
</span>

<span class="badge badge-warning badge-pill">
	<span class="badge-item badge-item-expand">Warning</span>
</span>

<span class="badge badge-danger badge-pill">
	<span class="badge-item badge-item-expand">Danger</span>
</span>

<span class="badge badge-ligth badge-pill">
	<span class="badge-item badge-item-expand">Light</span>
</span>

<span class="badge badge-dark badge-pill">
	<span class="badge-item badge-item-expand">Dark</span>
</span>
```

## Anchor(#css-anchor)

<div class="sheet-example">
	<a class="badge badge-primary" href="#1">
		<span class="badge-item badge-item-expand">Primary</span>
	</a>
</div>

```html
<a class="badge badge-primary" href="#1">
	<span class="badge-item badge-item-expand">Primary</span>
</a>
```

## Links Inside(#css-links-inside)

<div class="sheet-example">
	<span class="badge badge-secondary badge-pill">
		<span class="badge-item badge-item-before">
			<a href="#1">
				<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times-circle"></use>
				</svg>
			</a>
		</span>
		<span class="badge-item badge-item-expand">
			<a href="#1">Secondary</a>
		</span>
		<span class="badge-item badge-item-after">
			<button aria-label="Close" class="close" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times"></use>
				</svg>
			</button>
		</span>
	</span>
</div>

```html
<span class="badge badge-secondary badge-pill">
	<span class="badge-item badge-item-before">
		<a href="#1">
			<svg
				class="lexicon-icon lexicon-icon-times-circle"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</a>
	</span>
	<span class="badge-item badge-item-expand">
		<a href="#1">Primary</a>
	</span>
	<span class="badge-item badge-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg
				class="lexicon-icon lexicon-icon-times"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>
```

## Text Truncate(#css-text-truncate)

Wrap the text inside the `.text-truncate-inline` and `.text-truncate` modifier class.

<div class="sheet-example">
	<span class="badge badge-secondary">
		<span class="badge-item badge-item-expand">
			<span class="text-truncate-inline">
				<span class="text-truncate">
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre
				</span>
			</span>
		</span>
	</span>
</div>

```html
<span class="badge badge-secondary">
	<span class="badge-item badge-item-expand">
		<span class="text-truncate-inline">
			<span class="text-truncate">
				ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre
				ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre
			</span>
		</span>
	</span>
</span>
```
