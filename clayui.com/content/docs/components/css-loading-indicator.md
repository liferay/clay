---
title: 'Loading Indicator'
description: 'The loading indicator shows the user that an external process, like a connection, is being executed.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/loading-indicator/'
mainTabLink: 'docs/components/loading-indicator.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sizes](#css-sizes)
-   [Variations](#css-variations)
    -   [Regular](#css-regular)
    -   [Light](#css-light)
-   [Compositions](#css-compositions)
    -   [Button](#css-button)
    -   [Autocomplete](#css-autocomplete)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	These animations are made using only CSS.
</div>

## Sizes(#css-sizes)

<div class="sheet-example">
	<div class="row">
		<span aria-hidden="true" class="loading-animation loading-animation-sm"></span>
		<span aria-hidden="true" class="loading-animation"></span>
	</div>
</div>

```html
<span aria-hidden="true" class="loading-animation loading-animation-sm"></span>
<span aria-hidden="true" class="loading-animation"></span>
```

## Variations(#css-variations)

### Regular(#css-regular)

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation"></span>
</div>

```html
<span aria-hidden="true" class="loading-animation loading-animation"></span>
```

### Light(#css-light)

<div class="bg-dark sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation-light"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-light"
></span>
```

## Compositions(#css-compositions)

### Button(#css-button)

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
