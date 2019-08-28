---
title: "Badges"
description: "Badges help highlight important information, such as notifications or new and unread messages. Badges have circular borders and are only used to specify a number."
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Variations](#variations)
- [Pill badges](#pill-badges)
- [Anchor](#anchor)
- [Links inside](#links-inside)
- [Text truncate](#text-truncate)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon/">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/badges/">Badges Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	Badge Sizes have been removed. Use the <a href="https://github.com/liferay/clay/blob/master/packages/clay/src/scss/mixins/_badges.scss#L1">clay-badge-size($sassMap) mixin</a> to create custom badge sizes for your app.
</div>

## Variations

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

## Pill badges

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

## Anchor

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

## Links inside

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
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</a>
	</span>
	<span class="badge-item badge-item-expand">
		<a href="#1">Primary</a>
	</span>
	<span class="badge-item badge-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>
```

## Text truncate

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
				ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre
			</span>
		</span>
	</span>
</span>
```