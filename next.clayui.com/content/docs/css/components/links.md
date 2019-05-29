---
title: "Links"
description: "Also known as a hyperlink, a link is a clickable (text or image) element used for navigation purposes."
---

<div class="nav-toc">

- [Link Styles](#link-styles)
- [Single Link](#single-link)
- [Component Links](#component-links)
- [Component Action](#component-action)
	- [Anchor](#anchor)
	- [Button](#button)
- [Link Outline](#link-outline)
- [Link Outline Borderless](#link-outline-borderless)
- [Link Monospaced](#link-monospaced)

</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/link/">Links Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/links.html">Links component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/link/">Links Pattern</a>.
</div>

These elements should be used to style links based on the global link, primary, and secondary colors.

### Link Styles

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

### Single Link

Use `.single-link` on an anchor to add a semi-bold style to the link and should be used for standalone links defined by https://liferay.design/lexicon/core-components/link/.

<div class="sheet-example">
	<a class="link-primary single-link" href="#1"> .link-primary.single-link </a>
	<a class="link-secondary single-link" href="#1"> .link-secondary.single-link </a>
</div>

```html
<a class="link-primary single-link" href="#1">.link-primary.single-link</a>
<a class="link-secondary single-link" href="#1">.link-secondary.single-link</a>
```

### Component Links

Use these patterns for links, titles, subtitles in components.

> The colors, sizing, and other CSS Properties can change for these items depending on the component you put them in (requires custom CSS).

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

### Component Action

Use these patterns for actions in components.

#### Anchor

<div class="sheet-example">
	<a class="component-action" href="#1" role="button">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</a>
	<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
		<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#times" />
		</svg>
	</a>
</div>

```html
<a class="component-action" href="#1" role="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
```

#### Button

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
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
<button class="component-action" disabled type="button" tabindex="-1">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
```

### Link Outline

<div class="sheet-example">
	<a class="link-outline link-outline-primary" href="#1">Primary</a>
	<a class="link-outline link-outline-secondary" href="#1">Secondary</a>
</div>

```html
<a class="link-outline link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-secondary" href="#1">Secondary</a>
```

### Link Outline Borderless

<div class="sheet-example">
	<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
	<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>
</div>

```html
<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>
```

### External Link

<div class="sheet-example">
	<a aria-label="External Link" class="link-secondary" href="#link-styles" title="External Link">
		External Link
	</a>
</div>

```html
<a aria-label="External Link" class="link-secondary" href="#link-styles" title="External Link">
	External Link
</a>
```

### Link Monospaced

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
```

### Title Link

<div class="sheet-example">
	<a aria-label="Title Link" class="component-title link-secondary" href="#title-link" title="Title">
		Title Link
	</a>
</div>

```html
<a aria-label="Title Link" class="component-title link-secondary" href="#title-link" title="Title">
	Title Link
</a>
```
