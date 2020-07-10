---
title: 'Links'
description: 'Also known as a hyperlink, a link is a clickable (text or image) element used for navigation purposes.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/link/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Styles](#styles)
-   [Single Link](#single-link)
-   [Component Links](#component-links)
-   [Component Action](#component-action)
    -   [Anchor](#anchor)
    -   [Button](#button)
-   [Outline](#outline)
-   [Outline Borderless](#outline-borderless)
-   [External Link](#external-link)
-   [Monospaced](#monospaced)
-   [Title Link](#title-link)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#link">WAI-ARIA</a> accessibility pratices for links when writting your markup.
</div>

These elements should be used to style links based on the global link, primary, and secondary colors.

## Styles

<div class="sheet-example">
	<div><a href="#1">Regular Anchor Tag</a></div>
	<div><a class="link-primary" href="#1">.link-primary</a></div>
	<div><a class="link-secondary" href="#1">.link-secondary</a></div>
</div>

```html
<div><a href="#1">Regular Anchor Tag</a></div>
<div><a class="link-primary" href="#1">.link-primary</a></div>
<div><a class="link-secondary" href="#1">.link-secondary</a></div>
```

## Single Link

Use `.single-link` on an anchor to add a semi-bold style to the link and should be used for standalone links defined by https://liferay.design/lexicon/core-components/link/.

<div class="sheet-example">
	<a class="link-primary single-link" href="#1"> .link-primary.single-link </a>
	<a class="link-secondary single-link" href="#1"> .link-secondary.single-link </a>
</div>

```html
<a class="link-primary single-link" href="#1">.link-primary.single-link</a>
<a class="link-secondary single-link" href="#1">.link-secondary.single-link</a>
```

## Component Links

Use these patterns for links, titles, subtitles in components.

The colors, sizing, and other CSS Properties can change for these items depending on the component you put them in (requires custom CSS).

<div class="sheet-example">
	<a class="component-link" href="#1">.component-link</a>
	<h4 class="component-title">.component-title</h4>
	<h4 class="component-title"><a href="#1">.component-title a</a></h4>
	<p class="component-subtitle">.component-subtitle</p>
	<p class="component-subtitle"><a href="#1">.component-subtitle a</a></p>
</div>

```html
<a class="component-link" href="#1">.component-link</a>
<h4 class="component-title">.component-title</h4>
<h4 class="component-title"><a href="#1">.component-title a</a></h4>
<p class="component-subtitle">.component-subtitle</p>
<p class="component-subtitle"><a href="#1">.component-subtitle a</a></p>
```

## Component Action

Use these patterns for actions in components.

### Anchor

<div class="sheet-example">
	<a class="component-action" href="#1" role="button">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</a>
	<a class="component-action disabled" href="#1" role="button" tabindex="-1">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</a>
</div>

```html
<a class="component-action" href="#1" role="button">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
<a class="component-action disabled" href="#1" role="button" tabindex="-1">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
```

### Button

<div class="sheet-example">
	<button class="component-action" role="button">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</button>
	<button class="component-action" disabled type="button" tabindex="-1">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</button>
</div>

```html
<button class="component-action" role="button">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
<button class="component-action" disabled type="button" tabindex="-1">
	<svg
		class="lexicon-icon lexicon-icon-times"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
```

## Outline

<div class="sheet-example">
	<a class="link-outline link-outline-primary" href="#1">Primary</a>
	<a class="link-outline link-outline-secondary" href="#1">Secondary</a>
</div>

```html
<a class="link-outline link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-secondary" href="#1">Secondary</a>
```

## Outline Borderless

<div class="sheet-example">
	<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
	<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>
</div>

```html
<a class="link-outline link-outline-borderless link-outline-primary" href="#1"
	>Primary</a
>
<a class="link-outline link-outline-borderless link-outline-secondary" href="#1"
	>Secondary</a
>
```

## External Link

<div class="sheet-example">
	<a aria-label="External Link" class="link-secondary" href="#link-styles" title="External Link">
		External Link
	</a>
</div>

```html
<a
	aria-label="External Link"
	class="link-secondary"
	href="#link-styles"
	title="External Link"
>
	External Link
</a>
```

## Monospaced

<div class="sheet-example">
	<a class="link-monospaced link-outline link-outline-primary" href="#1">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#add-cell" />
			</svg>
		</span>
	</a>
	<a class="link-monospaced link-outline link-outline-borderless link-outline-primary" href="#1">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#add-cell" />
			</svg>
		</span>
	</a>
	<a class="link-monospaced link-outline link-outline-secondary" href="#1">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture" />
			</svg>
		</span>
	</a>
	<a class="link-monospaced link-outline link-outline-borderless link-outline-secondary" href="#1">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture" />
			</svg>
		</span>
	</a>
</div>

```html
<a class="link-monospaced link-outline link-outline-primary" href="#1">
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-add-cell"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#add-cell" />
		</svg>
	</span>
</a>

<a
	class="link-monospaced link-outline link-outline-borderless link-outline-primary"
	href="#1"
>
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-add-cell"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#add-cell" />
		</svg>
	</span>
</a>

<a class="link-monospaced link-outline link-outline-secondary" href="#1">
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-picture"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#picture" />
		</svg>
	</span>
</a>

<a
	class="link-monospaced link-outline link-outline-borderless link-outline-secondary"
	href="#1"
>
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-picture"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#picture" />
		</svg>
	</span>
</a>
```

## Title Link

<div class="sheet-example">
	<a aria-label="Title Link" class="component-title link-secondary" href="#title-link" title="Title">
		Title Link
	</a>
</div>

```html
<a
	aria-label="Title Link"
	class="component-title link-secondary"
	href="#title-link"
	title="Title"
>
	Title Link
</a>
```
