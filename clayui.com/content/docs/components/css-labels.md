---
title: 'Labels'
description: 'Labels categorize information, providing quick recognition.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Colors](#colors)
-   [Sizes](#sizes)
-   [Variations](#variations)
    -   [Simple](#simple)
    -   [Dismissible](#dismissible)
    -   [Link](#link)
    -   [Interactive](#interactive)
    -   [Anchor Tag](#anchor-tag)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/labels/">Labels Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/labels.html">Labels component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/labels/">Labels Pattern</a>.
</div>

## Colors

<div class="sheet-example">
	<span class="label label-primary"><span class="label-item label-item-expand">Primary</span></span>
	<span class="label label-secondary"><span class="label-item label-item-expand">Secondary</span></span>
	<span class="label label-info"><span class="label-item label-item-expand">Info</span></span>
	<span class="label label-warning"><span class="label-item label-item-expand">Warning</span></span>
	<span class="label label-danger"><span class="label-item label-item-expand">Danger</span></span>
	<span class="label label-success"><span class="label-item label-item-expand">Success</span></span>
	<span class="label label-light"><span class="label-item label-item-expand">Light</span></span>
	<span class="label label-dark"><span class="label-item label-item-expand">Dark</span></span>
</div>

```html
<span class="label label-primary"
	><span class="label-item label-item-expand">Primary</span></span
>
<span class="label label-secondary"
	><span class="label-item label-item-expand">Secondary</span></span
>
<span class="label label-info"
	><span class="label-item label-item-expand">Info</span></span
>
<span class="label label-warning"
	><span class="label-item label-item-expand">Warning</span></span
>
<span class="label label-danger"
	><span class="label-item label-item-expand">Danger</span></span
>
<span class="label label-success"
	><span class="label-item label-item-expand">Success</span></span
>
<span class="label label-light"
	><span class="label-item label-item-expand">Light</span></span
>
<span class="label label-dark"
	><span class="label-item label-item-expand">Dark</span></span
>
```

## Sizes

Use `label-lg` to make the label larger, or use the mixin `label-size($sassMap)` to create a custom sized label:

<div class="sheet-example">
	<span class="label label-secondary"><span class="label-item label-item-expand">Normal Label</span></span>
	<span class="label label-lg label-success"><span class="label-item label-item-expand">Large Label</span></span>
</div>

```html
<span class="label label-secondary">
	<span class="label-item label-item-expand">
		Normal Label
	</span>
</span>
<span class="label label-lg label-success">
	<span class="label-item label-item-expand">
		Large Label
	</span>
</span>
```

## Variations

### Simple

<div class="sheet-example">
	<span class="label label-secondary"><span class="label-item label-item-expand">Simple Label</span></span>
</div>

```html
<span class="label label-secondary">
	<span class="label-item label-item-expand">
		Simple Label
	</span>
</span>
```

### Dismissible

<div class="sheet-example">
	<span class="label label-dismissible label-secondary">
		<span class="label-item label-item-before">
			<span class="sticker">
				<span class="sticker-overlay">
					<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
				</span>
			</span>
		</span>
		<span class="label-item label-item-before">
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</span>
		<span class="label-item label-item-before">
			<button class="btn btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
					<use xlink:href="/images/icons/icons.svg#add-cell"></use>
				</svg>
			</button>
		</span>
		<span class="label-item label-item-expand">
			<a href="#1">Label Dismissible</a>
		</span>
		<span class="label-item label-item-after">
			<button aria-label="Close" class="close" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use xlink:href="/images/icons/icons.svg#times"></use>
				</svg>
			</button>
		</span>
	</span>
</div>

```html
<span class="label label-dismissible label-secondary">
	<span class="label-item label-item-before">
		<span class="sticker">
			...
		</span>
	</span>
	<span class="label-item label-item-before">
		...
	</span>
	<span class="label-item label-item-before">
		...
	</span>
	<span class="label-item label-item-expand">
		<a href="#1">Label Dismissible</a>
	</span>
	<span class="label-item label-item-after">
		<button aria-label="Close" class="close" type="button">
			...
		</button>
	</span>
</span>
```

### Link

<div class="sheet-example">
	<span class="label label-dismissible label-lg label-success">
		<span class="label-item label-item-before">
			<span class="sticker">
				<span class="sticker-overlay">
					<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
				</span>
			</span>
		</span>
		<span class="label-item label-item-before">
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</span>
		<span class="label-item label-item-before">
			<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#add-cell"></use>
			</svg>
		</span>
		<span class="label-item label-item-expand">
			<a href="#1">Label with Link</a>
		</span>
		<span class="label-item label-item-after">
			<button aria-label="Close" class="close" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use xlink:href="/images/icons/icons.svg#times"></use>
				</svg>
			</button>
		</span>
	</span>
</div>

```html
<span class="label label-dismissible label-lg label-success">
	<span class="label-item label-item-before">
		<span class="sticker">
			...
		</span>
	</span>
	<span class="label-item label-item-before">
		...
	</span>
	<span class="label-item label-item-before">
		...
	</span>
	<span class="label-item label-item-expand">
		<a href="#1">Label with Link</a>
	</span>
	<span class="label-item label-item-after">
		<button aria-label="Close" class="close" type="button">
			...
		</button>
	</span>
</span>
```

### Interactive

Add the `tabindex="0"` attribute to the `.label` element to create an interactive label with multiple controls inside. The inner controls should have the attribute `tabindex="-1"` to remove them from the tab order. The inner controls can be placed back in the tab order by changing back to `tabindex="0"` with javascript.

Implementing Interactive Labels require custom javascript.

<div class="sheet-example">
	<span class="label label-dismissible label-secondary" tabindex="0">
		<span class="label-item label-item-before">
			<span class="sticker">
				<span class="sticker-overlay">
					<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
				</span>
			</span>
		</span>
		<span class="label-item label-item-before">
			<button class="btn btn-unstyled" type="button" tabindex="-1">
				<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
					<use xlink:href="/images/icons/icons.svg#times-circle"></use>
				</svg>
			</button>
		</span>
		<span class="label-item label-item-before">
			<a href="#1" role="button" tabindex="-1">
				<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
					<use xlink:href="/images/icons/icons.svg#add-cell"></use>
				</svg>
			</a>
		</span>
		<span class="label-item label-item-expand">
			<a href="#1" tabindex="-1">Interactive Label</a>
		</span>
		<span class="label-item label-item-after">
			<button aria-label="Close" class="close" tabindex="-1" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use xlink:href="/images/icons/icons.svg#times"></use>
				</svg>
			</button>
		</span>
	</span>
</div>

```html
<span class="label label-dismissible label-secondary" tabindex="0">
	<span class="label-item label-item-before">
		<span class="sticker">
			<span class="sticker-overlay">
				<img
					alt="thumbnail"
					class="sticker-img"
					src="/images/thumbnail_dock.jpg"
				/>
			</span>
		</span>
	</span>
	<span class="label-item label-item-before">
		<button class="btn btn-unstyled" type="button" tabindex="-1">
			<svg
				class="lexicon-icon lexicon-icon-times-circle"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</button>
	</span>
	<span class="label-item label-item-before">
		<a href="#1" role="button" tabindex="-1">
			<svg
				class="lexicon-icon lexicon-icon-add-cell"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#add-cell"></use>
			</svg>
		</a>
	</span>
	<span class="label-item label-item-expand">
		<a href="#1" tabindex="-1">Interactive Label</a>
	</span>
	<span class="label-item label-item-after">
		<button aria-label="Close" class="close" tabindex="-1" type="button">
			<svg
				class="lexicon-icon lexicon-icon-times"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>
```

### Anchor Tag

<div class="sheet-example">
	<a class="label label-primary" href="#1">
		<span class="label-item label-item-expand">Primary</span>
	</a>
	<a class="label label-secondary" href="#1">
		<span class="label-item label-item-expand">Secondary</span>
	</a>
	<a class="label label-success" href="#1">
		<span class="label-item label-item-expand">Success</span>
	</a>
	<a class="label label-info" href="#1">
		<span class="label-item label-item-expand">Info</span>
	</a>
	<a class="label label-warning" href="#1">
		<span class="label-item label-item-expand">Warning</span>
	</a>
	<a class="label label-danger" href="#1">
		<span class="label-item label-item-expand">Danger</span>
	</a>
	<a class="label label-light" href="#1">
		<span class="label-item label-item-expand">Light</span>
	</a>
	<a class="label label-dark" href="#1">
		<span class="label-item label-item-expand">Dark</span>
	</a>
</div>

```html
<a class="label label-primary" href="#1">
	<span class="label-item label-item-expand">Primary</span>
</a>
<a class="label label-secondary" href="#1">
	<span class="label-item label-item-expand">Secondary</span>
</a>
<a class="label label-success" href="#1">
	<span class="label-item label-item-expand">Success</span>
</a>
<a class="label label-info" href="#1">
	<span class="label-item label-item-expand">Info</span>
</a>
<a class="label label-warning" href="#1">
	<span class="label-item label-item-expand">Warning</span>
</a>
<a class="label label-danger" href="#1">
	<span class="label-item label-item-expand">Danger</span>
</a>
<a class="label label-light" href="#1">
	<span class="label-item label-item-expand">Light</span>
</a>
<a class="label label-dark" href="#1">
	<span class="label-item label-item-expand">Dark</span>
</a>
```
