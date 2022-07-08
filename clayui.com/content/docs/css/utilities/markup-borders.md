---
title: 'Border'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Additive](#css-additive)
-   [Subtractive](#css-subtractive)
-   [Border Color](#css-border-color)
    -   [Sass API](#css-border-color-sass-api)
-   [Rounded](#css-rounded)
-   [Rounded Sizes](#css-rounded-sizes)

</div>
</div>

## Additive(#css-additive)

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Example</th>
				<tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">border</td>
					<td class="table-cell-expand"><div class="border" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-top</td>
					<td class="table-cell-expand"><div class="border-top" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-right</td>
					<td class="table-cell-expand"><div class="border-right" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-bottom</td>
					<td class="table-cell-expand"><div class="border-bottom" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-left</td>
					<td class="table-cell-expand"><div class="border-left" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="border"></div>
<div class="border-top"></div>
<div class="border-right"></div>
<div class="border-bottom"></div>
<div class="border-left"></div>
```

## Subtractive(#css-subtractive)

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Example</th>
				<tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">border-0</td>
					<td class="table-cell-expand"><div class="border-0" style="width:100px;height:100px;background-color:#f9f9f9;border:.0625rem solid #e7e7ed ;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-top-0</td>
					<td class="table-cell-expand"><div class="border-top-0" style="width:100px;height:100px;background-color:#f9f9f9;border:.0625rem solid #e7e7ed ;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-right-0</td>
					<td class="table-cell-expand"><div class="border-right-0" style="width:100px;height:100px;background-color:#f9f9f9;border:.0625rem solid #e7e7ed ;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-bottom-0</td>
					<td class="table-cell-expand"><div class="border-bottom-0" style="width:100px;height:100px;background-color:#f9f9f9;border:.0625rem solid #e7e7ed ;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-left-0</td>
					<td class="table-cell-expand"><div class="border-left-0" style="width:100px;height:100px;background-color:#f9f9f9;border:.0625rem solid #e7e7ed ;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="border-0"></div>
<div class="border-top-0"></div>
<div class="border-right-0"></div>
<div class="border-bottom-0"></div>
<div class="border-left-0"></div>
```

## Border Color(#css-border-color)

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Example</th>
				<tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">border-primary</td>
					<td class="table-cell-expand"><div class="border border-primary" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-secondary</td>
					<td class="table-cell-expand"><div class="border border-secondary" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-success</td>
					<td class="table-cell-expand"><div class="border border-success" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-info</td>
					<td class="table-cell-expand"><div class="border border-info" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-warning</td>
					<td class="table-cell-expand"><div class="border border-warning" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-danger</td>
					<td class="table-cell-expand"><div class="border border-danger" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-dark</td>
					<td class="table-cell-expand"><div class="border border-dark" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">border-light</td>
					<td class="table-cell-expand"><div class="border border-light" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="border border-primary"></div>
<div class="border border-secondary"></div>
<div class="border border-success"></div>
<div class="border border-info"></div>
<div class="border border-warning"></div>
<div class="border border-danger"></div>
<div class="border border-dark"></div>
<div class="border border-light"></div>
```

### Border Color Sass API(#css-border-color-sass-api)

The map `$border-theme-colors` allows generating any number of border variants. If a key starts with `.`, `#` or `%`, Clay will output it as is, otherwise we will prepend `.border-` to the key (e.g., `.border-primary`).

```scss{expanded}
$border-theme-colors: (
    'primary': (
        border-color: $primary !important,
    ),
    '%b-tertiary': (
        border-color: green !important,
    ),
    '.b-tertiary': (
        extend: '%border-tertiary',
    ),
    '.b-quaternary': (
        extend: '%border-tertiary',
    ),
);
```

Outputs:

```css{expanded}
.border-primary {
    border-color: #0b5fff !important;
}

.b-tertiary, .b-quaternary {
    border-color: green !important;
}
```

## Rounded(#css-rounded)

These are `border-radius` utility classes.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Example</th>
				<tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">rounded</td>
					<td class="table-cell-expand"><div class="border rounded" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-top</td>
					<td class="table-cell-expand"><div class="border rounded-top" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-right</td>
					<td class="table-cell-expand"><div class="border rounded-right" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-bottom</td>
					<td class="table-cell-expand"><div class="border rounded-bottom" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-left</td>
					<td class="table-cell-expand"><div class="border rounded-left" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-circle</td>
					<td class="table-cell-expand"><div class="border rounded-circle" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-pill</td>
					<td class="table-cell-expand"><div class="border rounded-pill" style="width:150px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">150x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-0</td>
					<td class="table-cell-expand"><div class="border rounded-0" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="rounded"></div>
<div class="rounded-top"></div>
<div class="rounded-right"></div>
<div class="rounded-bottom"></div>
<div class="rounded-left"></div>
<div class="rounded-circle"></div>
<div class="rounded-pill"></div>
<div class="rounded-0"></div>
```

## Rounded Sizes(#css-rounded-sizes)

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Example</th>
				<tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">rounded-sm</td>
					<td class="table-cell-expand"><div class="border rounded-sm" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">rounded-lg</td>
					<td class="table-cell-expand"><div class="border rounded-lg" style="width:100px;height:100px;background-color:#f9f9f9;display:flex;align-items:center;justify-content:center;">100x100</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="rounded-sm"></div>
<div class="rounded-lg"></div>
```
