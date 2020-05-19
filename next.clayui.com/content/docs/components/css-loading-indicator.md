---
title: 'Loading Indicator'
description: 'The loading indicator shows the user that an external process, like a connection, is being executed.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sizes](#sizes)
-   [Variations](#variations)
    -   [Regular](#regular)
    -   [Light](#light)
-   [Compositions](#compositions)
    -   [Button](#button)
    -   [Autocomplete](#autocomplete)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/loading-indicator/">Loading Indicator Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/loading-indicator.html">Loading Indicator component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/loading-indicator/">Loading Indicator Pattern</a>.
</div>

<div class="clay-site-alert alert alert-info">
	These animations are made using only CSS.
</div>

## Sizes

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

## Variations

### Regular

<div class="sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation"></span>
</div>

```html
<span aria-hidden="true" class="loading-animation loading-animation"></span>
```

### Light

<div class="bg-dark sheet-example">
	<span aria-hidden="true" class="loading-animation loading-animation-light"></span>
</div>

```html
<span
	aria-hidden="true"
	class="loading-animation loading-animation-light"
></span>
```

## Compositions

### Button

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
