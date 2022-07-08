---
title: 'Text'
lexiconDefinition: 'https://liferay.design/lexicon/foundations/typography/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sizes](#css-text-sizes)
    -   [Sass API](#css-text-sizes-sass-api)
-   [Weights](#css-text-weights)
-   [Styles](#css-text-styles)
-   [Alignment](#css-text-alignment)
-   [Wrap](#css-text-wrap)
-   [Transform](#css-text-transform)
-   [Miscellaneous](#css-text-misc)

</div>
</div>

## Sizes(#css-text-sizes)

Utility classes for changing the `font-size` of text.

<div class="sheet-example">
	<table class="table table-autofit">
		<thead>
			<th class="table-cell-ws-nowrap">Utility</th>
			<th>Rem</th>
			<th>Px</th>
			<th class="table-cell-expand">Example</th>
		</thead>
		<tbody>
			<tr>
				<td class="table-cell-ws-nowrap">text-11</td>
				<td>2.5rem</td>
				<td>40px</td>
				<td class="table-cell-expand"><span class="text-11">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-10</td>
				<td>2.25rem</td>
				<td>36px</td>
				<td class="table-cell-expand"><span class="text-10">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-9</td>
				<td>2rem</td>
				<td>32px</td>
				<td class="table-cell-expand"><span class="text-9">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-8</td>
				<td>1.75rem</td>
				<td>28px</td>
				<td class="table-cell-expand"><span class="text-8">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-7</td>
				<td>1.5rem</td>
				<td>24px</td>
				<td class="table-cell-expand"><span class="text-7">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-6</td>
				<td>1.25rem</td>
				<td>20px</td>
				<td class="table-cell-expand"><span class="text-6">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-5</td>
				<td>1.125rem</td>
				<td>18px</td>
				<td class="table-cell-expand"><span class="text-5">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-4</td>
				<td>1rem</td>
				<td>16px</td>
				<td class="table-cell-expand"><span class="text-4">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-3</td>
				<td>0.875rem</td>
				<td>14px</td>
				<td class="table-cell-expand"><span class="text-3">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-2</td>
				<td>0.75rem</td>
				<td>12px</td>
				<td class="table-cell-expand"><span class="text-2">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-1</td>
				<td>0.625rem</td>
				<td>10px</td>
				<td class="table-cell-expand"><span class="text-1">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
		</tbody>
	</table>
</div>

```html
<span class="text-11">The quick brown fox jumped over the lazy dog.</span>
<span class="text-10">The quick brown fox jumped over the lazy dog.</span>
<span class="text-9">The quick brown fox jumped over the lazy dog.</span>
<span class="text-8">The quick brown fox jumped over the lazy dog.</span>
<span class="text-7">The quick brown fox jumped over the lazy dog.</span>
<span class="text-6">The quick brown fox jumped over the lazy dog.</span>
<span class="text-5">The quick brown fox jumped over the lazy dog.</span>
<span class="text-4">The quick brown fox jumped over the lazy dog.</span>
<span class="text-3">The quick brown fox jumped over the lazy dog.</span>
<span class="text-2">The quick brown fox jumped over the lazy dog.</span>
<span class="text-1">The quick brown fox jumped over the lazy dog.</span>
```

### Text Sizes Sass API(#css-text-sizes-sass-api)

The map `$font-sizes` allows generating any number of text size variants. If a key starts with `.`, `#` or `%`, Clay will output it as is, otherwise we will prepend `.` to the key (e.g., `.text-100`).

```scss{expanded}
$bg-theme-colors: (
    text-100: (
        font-size: 100px,
    ),
    '%text-200': (
        font-size: 200px,
    ),
    '.text-200': (
        extend: '%text-200',
    ),
    '.text-250': (
        extend: '%text-200',
    ),
);
```

Outputs:

```css{expanded}
.text-100 {
    font-size: 100px;
}

.text-200, .text-250 {
    font-size: 200px;
}
```

## Weights(#css-text-weights)

Utility classes for changing the `font-weight` of text.

<div class="sheet-example">
	<table class="table table-autofit">
		<thead>
			<th class="table-cell-ws-nowrap">Utility</th>
			<th>Value</th>
			<th class="table-cell-expand">Example</th>
		</thead>
		<tbody>
			<tr>
				<td class="table-cell-ws-nowrap">text-weight-lighter</td>
				<td>lighter</td>
				<td class="table-cell-expand"><span class="text-weight-lighter">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-weight-light</td>
				<td>300</td>
				<td class="table-cell-expand"><span class="text-weight-light">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-weight-normal</td>
				<td>400</td>
				<td class="table-cell-expand"><span class="text-weight-normal">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-weight-semi-bold</td>
				<td>500</td>
				<td class="table-cell-expand"><span class="text-weight-semi-bold">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-weight-bold</td>
				<td>700</td>
				<td class="table-cell-expand"><span class="text-weight-bold">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-weight-bolder</td>
				<td>900</td>
				<td class="table-cell-expand"><span class="text-weight-bolder">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
		</tbody>
	</table>
</div>

```html
<span class="text-weight-lighter"
	>The quick brown fox jumped over the lazy dog.</span
>
<span class="text-weight-light"
	>The quick brown fox jumped over the lazy dog.</span
>
<span class="text-weight-normal"
	>The quick brown fox jumped over the lazy dog.</span
>
<span class="text-weight-semi-bold"
	>The quick brown fox jumped over the lazy dog.</span
>
<span class="text-weight-bold"
	>The quick brown fox jumped over the lazy dog.</span
>
<span class="text-weight-bolder"
	>The quick brown fox jumped over the lazy dog.</span
>
```

## Styles(#css-text-styles)

Utility classes for changing the `font-style` of text.

<div class="sheet-example">
	<table class="table table-autofit">
		<thead>
			<th class="table-cell-ws-nowrap">Utility</th>
			<th class="table-cell-minw-200">Value</th>
			<th class="table-cell-expand">Example</th>
		</thead>
		<tbody>
			<tr>
				<td class="table-cell-ws-nowrap">text-italic</td>
				<td class="table-cell-minw-200">italic</td>
				<td class="table-cell-expand"><span class="text-italic">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
			<tr>
				<td class="table-cell-ws-nowrap">text-monospace</td>
				<td class="table-cell-minw-200">SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace</td>
				<td class="table-cell-expand"><span class="text-monospace">The quick brown fox jumped over the lazy dog.</span></td>
			</tr>
		</tbody>
	</table>
</div>

```html
<span class="text-italic">The quick brown fox jumped over the lazy dog.</span>
<span class="text-monospace"
	>The quick brown fox jumped over the lazy dog.</span
>
```

## Alignment(#css-text-alignment)

Text Alignment Utilities set the `text-align` property. Only the left, right, and center values have responsive alignment, use the format `text-{sm|md|lg|xl}-{left|right|center}` to target specific screen sizes (e.g., `text-md-center`).

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit table-nowrap">
			<thead>
				<tr>
					<th>Utility</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>text-justify</td>
					<td>justify</td>
				</tr>
				<tr>
					<td>text-left</td>
					<td>left</td>
				</tr>
				<tr>
					<td>text-right</td>
					<td>right</td>
				</tr>
				<tr>
					<td>text-center</td>
					<td>center</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Wrap(#css-text-wrap)

Text Wrap Utilities set the `white-space` property.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit table-nowrap">
			<thead>
				<tr>
					<th>Utility</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>text-wrap</td>
					<td>normal</td>
				</tr>
				<tr>
					<td>text-nowrap</td>
					<td>nowrap</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Transform(#css-text-transform)

Text Transform Utilities set the `text-transform` property.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit table-nowrap">
			<thead>
				<tr>
					<th>Utility</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>text-lowercase</td>
					<td>lowercase</td>
				</tr>
				<tr>
					<td>text-uppercase</td>
					<td>uppercase</td>
				</tr>
				<tr>
					<td>text-capitalize</td>
					<td>capitalize</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Miscellaneous(#css-text-misc)

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit table-nowrap">
			<thead>
				<tr>
					<th>Utility</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>text-hide</td>
					<td>background-color: transparent;<br/>border: 0;<br/>color: transparent;<br/>font: 0/0 a;<br/>text-shadow: none;</td>
				</tr>
				<tr>
					<td>text-decoration-none</td>
					<td>text-decoration: none !important;</td>
				</tr>
				<tr>
					<td>text-break</td>
					<td>overflow-wrap: break-word !important;<br/>word-wrap: break-word !important;</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
