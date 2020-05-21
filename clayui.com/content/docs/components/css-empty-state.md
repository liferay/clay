---
title: 'Empty State'
description: 'Empty states provide users with feedback on the reasons behind the empty state and what they can do to move out of the empty state.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/empty-states/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Without Animation](#css-without-animation)
-   [Empty State](#empty-state)
-   [Search State](#search-state)
-   [Success State](#success-state)
-   [With imageProps](#with-imageprops)

</div>
</div>

## Without Animation(#css-without-animation)

<div class="sheet-example">
	<div class="c-empty-state">
		<div class="c-empty-state-title">
			<span class="text-truncate-inline">
				<span class="text-truncate">No results found</span>
			</span>
		</div>
		<div class="c-empty-state-text">Sorry, there are no results found</div>
		<div class="c-empty-state-footer">
			<button class="btn btn-primary" type="button">Button</button>
		</div>
	</div>
</div>

```html
<div class="c-empty-state">
	<div class="c-empty-state-title">
		<span class="text-truncate-inline">
			<span class="text-truncate">No results found</span>
		</span>
	</div>
	<div class="c-empty-state-text">Sorry, there are no results found</div>
	<div class="c-empty-state-footer">
		<button class="btn btn-primary" type="button">Button</button>
	</div>
</div>
```

## Empty State

<div class="sheet-example">
	<div class="c-empty-state c-empty-state-animation">
		<div class="c-empty-state-image">
			<div class="c-empty-state-aspect-ratio">
				<img
					alt="empty-state-image"
					class="aspect-ratio-item aspect-ratio-item-fluid"
					src="/images/empty_state.gif"
				/>
			</div>
		</div>
		<div class="c-empty-state-title">
			<span class="text-truncate-inline"
				><span class="text-truncate">No results found</span></span
			>
		</div>
		<div class="c-empty-state-text">Sorry, there are no results found</div>
		<div class="c-empty-state-footer">
			<button class="btn btn-secondary" type="button">Button</button>
		</div>
	</div>
</div>

```html
<div class="c-empty-state c-empty-state-animation">
	<div class="c-empty-state-image">
		<div class="c-empty-state-aspect-ratio">
			<img
				alt="empty-state-image"
				class="aspect-ratio-item aspect-ratio-item-fluid"
				src="/images/empty_state.gif"
			/>
		</div>
	</div>
	<div class="c-empty-state-title">
		<span class="text-truncate-inline"
			><span class="text-truncate">No results found</span></span
		>
	</div>
	<div class="c-empty-state-text">Sorry, there are no results found</div>
	<div class="c-empty-state-footer">
		<button class="btn btn-secondary" type="button">Button</button>
	</div>
</div>
```

## Search State

<div class="sheet-example">
	<div class="c-empty-state c-empty-state-animation">
		<div class="c-empty-state-image">
			<div class="c-empty-state-aspect-ratio">
				<img
					alt="empty-state-image"
					class="aspect-ratio-item aspect-ratio-item-fluid"
					src="/images/search_state.gif"
				/>
			</div>
		</div>
		<div class="c-empty-state-title">
			<span class="text-truncate-inline"
				><span class="text-truncate">No content yet</span></span
			>
		</div>
		<div class="c-empty-state-text">
			This is a description of what the button will allow you to do
		</div>
	</div>
</div>

```html
<div class="c-empty-state c-empty-state-animation">
	<div class="c-empty-state-image">
		<div class="c-empty-state-aspect-ratio">
			<img
				alt="empty-state-image"
				class="aspect-ratio-item aspect-ratio-item-fluid"
				src="/images/search_state.gif"
			/>
		</div>
	</div>
	<div class="c-empty-state-title">
		<span class="text-truncate-inline"
			><span class="text-truncate">No content yet</span></span
		>
	</div>
	<div class="c-empty-state-text">
		This is a description of what the button will allow you to do
	</div>
</div>
```

## Success State

<div class="sheet-example">
	<div class="c-empty-state c-empty-state-animation">
		<div class="c-empty-state-image">
			<div class="c-empty-state-aspect-ratio">
				<img
					alt="empty-state-image"
					class="aspect-ratio-item aspect-ratio-item-fluid"
					src="/images/success_state.gif"
				/>
			</div>
		</div>
		<div class="c-empty-state-title">
			<span class="text-truncate-inline"
				><span class="text-truncate">Hurray</span></span
			>
		</div>
		<div class="c-empty-state-text">
			You don't have more notifications to review
		</div>
	</div>
</div>

```html
<div class="c-empty-state c-empty-state-animation">
	<div class="c-empty-state-image">
		<div class="c-empty-state-aspect-ratio">
			<img
				alt="empty-state-image"
				class="aspect-ratio-item aspect-ratio-item-fluid"
				src="/images/success_state.gif"
			/>
		</div>
	</div>
	<div class="c-empty-state-title">
		<span class="text-truncate-inline"
			><span class="text-truncate">Hurray</span></span
		>
	</div>
	<div class="c-empty-state-text">
		You don't have more notifications to review
	</div>
</div>
```

## With imageProps

<div class="sheet-example">
	<div class="c-empty-state c-empty-state-animation">
		<div class="c-empty-state-image">
			<div class="c-empty-state-aspect-ratio">
				<img
					alt="Alternative Text"
					class="aspect-ratio-item aspect-ratio-item-fluid"
					src="/images/success_state.gif"
					title="Hello World!"
				/>
			</div>
		</div>
		<div class="c-empty-state-title">
			<span class="text-truncate-inline"
				><span class="text-truncate">Hurray</span></span
			>
		</div>
		<div class="c-empty-state-text">
			You don't have more notifications to review
		</div>
	</div>
</div>

```html
<div class="c-empty-state c-empty-state-animation">
	<div class="c-empty-state-image">
		<div class="c-empty-state-aspect-ratio">
			<img
				alt="Alternative Text"
				class="aspect-ratio-item aspect-ratio-item-fluid"
				src="/images/success_state.gif"
				title="Hello World!"
			/>
		</div>
	</div>
	<div class="c-empty-state-title">
		<span class="text-truncate-inline"
			><span class="text-truncate">Hurray</span></span
		>
	</div>
	<div class="c-empty-state-text">
		You don't have more notifications to review
	</div>
</div>
```
