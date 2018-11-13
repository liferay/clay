---
title: "Loading Indicator"
---

### Description

The loading indicator shows the user that	an external process, like a connection, is being executed.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/loading_indicator.html">Loading Indicator Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Size

<div class="row">
	<div class="col-md-3">
		<span aria-hidden="true" class="loading-animation loading-animation-sm"></span>
	</div>
	<div class="col-md-3">
		<span aria-hidden="true" class="loading-animation"></span>
	</div>
</div>

```soy
{call ClayLoadingIndicator.render}
	{param small: true /}
{/call}

{call ClayLoadingIndicator.render /}
```
```html
<clay-loading-indicator small="true"></clay-loading-indicator>
<clay-loading-indicator></clay-loading-indicator>
```
```html
<span aria-hidden="true" class="loading-animation loading-animation-sm"></span>
<span aria-hidden="true" class="loading-animation"></span>
```

### Variations

#### Positive

<span aria-hidden="true" class="loading-animation"></span>

```soy
{call ClayLoadingIndicator.render /}
```
```html
<clay-loading-indicator></clay-loading-indicator>
```
```html
<span aria-hidden="true" class="loading-animation"></span>
```

#### Negative

<span class="bg-dark" style="display:inline-block;padding:5px;">
	<span aria-hidden="true" class="loading-animation loading-animation-light"></span>
</span>

```soy
{call ClayLoadingIndicator.render}
	{param light: true /}
{/call}
```
```html
<clay-loading-indicator light="true"></clay-loading-indicator>
```
```html
<span aria-hidden="true" class="loading-animation loading-animation-light"></span>
```

