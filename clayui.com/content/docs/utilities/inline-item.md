---
title: 'Inline Item'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Link Without Whitespace](#css-link-without-whitespace)
-   [Link With Whitespace](#css-link-with-whitespace)
-   [Button Without Whitespace](#css-button-without-whitespace)
-   [Button With Whitespace](#css-button-with-whitespace)
-   [Close](#css-close)
    -   [Anchor](#css-anchor)
    -   [Button](#css-button)

</div>
</div>

Use the `inline-item inline-item-before`, `inline-item inline-item-middle`, and `inline-item inline-item-after` classes to provide consistent spacing between text and icons in elements such as links or buttons. This can also be used in other components that have inline content (e.g., `badge` and `label`).

<div class="clay-site-alert alert alert-warning">
	For this component to function and space properly, the white space must be removed between text and icons from the markup inside the component. It's generally easier to remove all white space inside the link, button, or component. In the examples below, whitespaces in button and link are slightly off and the link underline on hover is a bit wide.
</div>

## Link Without Whitespace(#css-link-without-whitespace)

<div class="sheet-example">
	<a href="#1">
		<span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation"><use href="/images/icons/icons.svg#share" /></svg></span>link<span class="inline-item inline-item-middle"><svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation"><use href="/images/icons/icons.svg#question-circle" /></svg></span><span class="inline-item inline-item-middle"><svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation"><use href="/images/icons/icons.svg#question-circle" /></svg></span><span class="inline-item inline-item-middle"><svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation"><use href="/images/icons/icons.svg#question-circle" /></svg></span>why, but ok.<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation"><use href="/images/icons/icons.svg#add-cell" /></svg></span>
	</a>
</div>

```html
<a href="#1">
	<span class="inline-item inline-item-before"
		><svg
			class="lexicon-icon lexicon-icon-share"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share" /></svg></span
	>link<span class="inline-item inline-item-middle"
		><svg
			class="lexicon-icon lexicon-icon-question-circle"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#question-circle" /></svg></span
	><span class="inline-item inline-item-middle"
		><svg
			class="lexicon-icon lexicon-icon-question-circle"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#question-circle" /></svg></span
	><span class="inline-item inline-item-middle"
		><svg
			class="lexicon-icon lexicon-icon-question-circle"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#question-circle" /></svg></span
	>why, but ok.<span class="inline-item inline-item-after"
		><svg
			class="lexicon-icon lexicon-icon-add-cell"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#add-cell" /></svg
	></span>
</a>
```

## Link With Whitespace(#css-link-with-whitespace)

<div class="sheet-example">
	<a href="#1">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share" />
			</svg>
		</span>
		link
		<span class="inline-item inline-item-after">
			<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#add-cell" />
			</svg>
		</span>
	</a>
</div>

```html
<a href="#1">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-share"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share" />
		</svg>
	</span>
	link
	<span class="inline-item inline-item-after">
		<svg
			class="lexicon-icon lexicon-icon-add-cell"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#add-cell" />
		</svg>
	</span>
</a>
```

## Button Without Whitespace(#css-button-without-whitespace)

<div class="sheet-example">
	<button class="btn btn-secondary" type="button"><span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation"><use href="/images/icons/icons.svg#plus" /></svg></span>Secondary<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation"><use href="/images/icons/icons.svg#camera" /></svg></span></button>
</div>

```html
<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-plus"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#plus" />
		</svg>
	</span>
	Secondary
	<span class="inline-item inline-item-after">
		<svg
			class="lexicon-icon lexicon-icon-camera"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#camera" />
		</svg>
	</span>
</button>
```

## Button With Whitespace(#css-button-with-whitespace)

<div class="sheet-example">
	<button class="btn btn-secondary" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#plus" /></svg>
		</span>
		Secondary
		<span class="inline-item inline-item-after">
			<svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#camera" /></svg>
		</span>
	</button>
</div>

```html
<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-plus"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#plus" />
		</svg>
	</span>
	Secondary
	<span class="inline-item inline-item-after">
		<svg
			class="lexicon-icon lexicon-icon-camera"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#camera" />
		</svg>
	</span>
</button>
```

## Close(#css-close)

A Button or Link for closing stuff.

### Anchor(#css-anchor)

<div class="sheet-example">
	<a aria-label="Close" class="close" href="#1" role="button">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</a>
	<a aria-label="Close" class="close disabled" href="#1" role="button" tabindex="-1">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</a>
	<a aria-label="Close" class="close" href="#1" role="button">
		<span aria-hidden="true">×</span>
	</a>
	<a aria-label="Close" class="close disabled" href="#1" role="button" tabindex="-1">
		<span aria-hidden="true">×</span>
	</a>
</div>

```html
<a aria-label="Close" class="close" href="#1" role="button">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
<a
	aria-label="Close"
	class="close disabled"
	href="#1"
	role="button"
	tabindex="-1"
>
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
<a aria-label="Close" class="close" href="#1" role="button">
	<span aria-hidden="true">×</span>
</a>
<a
	aria-label="Close"
	class="close disabled"
	href="#1"
	role="button"
	tabindex="-1"
>
	<span aria-hidden="true">×</span>
</a>
```

### Button(#css-button)

<div class="sheet-example">
	<button aria-label="Close" class="close" type="button">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</button>
	<button aria-label="Close" class="close" disabled type="button">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</button>
	<button aria-label="Close" class="close" type="button">
		<span aria-hidden="true">×</span>
	</button>
	<button aria-label="Close" class="close" disabled type="button">
		<span aria-hidden="true">×</span>
	</button>
</div>

```html
<button aria-label="Close" class="close" type="button">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
<button aria-label="Close" class="close" disabled type="button">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
<button aria-label="Close" class="close" type="button">
	<span aria-hidden="true">×</span>
</button>
<button aria-label="Close" class="close" disabled type="button">
	<span aria-hidden="true">×</span>
</button>
```
