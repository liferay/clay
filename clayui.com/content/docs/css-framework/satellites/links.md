---
title: "Links"
---

### Links

These elements should be used to style links based on the global link, primary, and secondary colors.

<div><a href="#1">Regular Anchor Tag</a></div>
<div><a class="link-primary" href="#1">.link-primary</a></div>
<div><a class="link-secondary" href="#1">.link-secondary</a></div>

```html
<div>
	<a href="#1">Regular Anchor Tag</a>
</div>
<div>
	<a class="link-primary" href="#1">
		.link-primary
	</a>
</div>

<div>
	<a class="link-secondary" href="#1">
		.link-secondary
	</a>
</div>
```

### Single Link

Add the <code>.single-link</code> class to an anchor to add a semi-bold style to the link. This should be used for stand alone links defined by https://lexicondesign.io/docs/patterns/link.html.

<div><a class="link-primary single-link" href="#1">.link-primary.single-link</a></div>

<div><a class="link-secondary single-link" href="#1">.link-secondary.single-link</a></div>

```html
<div>
	<a class="link-primary single-link" href="#1">
		.link-primary.single-link
	</a>
</div>

<div>
	<a class="link-secondary single-link" href="#1">
		.link-secondary.single-link
	</a>
</div>
```

### Component Links

Use these patterns for links, titles, and subtitles in components.

<div class="alert alert-warning">
	Color, sizing, and other CSS Properties may differ for an item depending on the component you put them in (requires custom CSS).
</div>
<div class="">
	<div><a class="component-link" href="#1">.component-link</a></div>
	<h4 class="component-title">.component-title</h4>
	<h4 class="component-title"><a href="#1">.component-title a</a></h4>
	<p class="component-subtitle">.component-subtitle</p>
	<p class="component-subtitle"><a href="#1">.component-subtitle a</a></p>
</div>

```html
<div><a class="component-link" href="#1">.component-link</a></div>
<h4 class="component-title">.component-title</h4>
<h4 class="component-title"><a href="#1">.component-title a</a></h4>
<p class="component-subtitle">.component-subtitle</p>
<p class="component-subtitle"><a href="#1">.component-subtitle a</a></p>
```

### Component Action

Use these patterns for actions in components:

#### Anchor

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

<button class="component-action" type="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>

<button class="component-action" disabled="" type="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>

```html
<button class="component-action" type="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>

<button class="component-action" disabled="" type="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
```

### Link Outline

<a class="link-outline link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-secondary" href="#1">Secondary</a>

```html
<a class="link-outline link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-secondary" href="#1">Secondary</a>
```

### Link Outline Borderless

<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>

```html
<a class="link-outline link-outline-borderless link-outline-primary" href="#1">Primary</a>
<a class="link-outline link-outline-borderless link-outline-secondary" href="#1">Secondary</a>
```

### Link Monospaced

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
