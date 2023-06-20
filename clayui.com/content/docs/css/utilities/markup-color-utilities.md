---
title: 'Color Utilities'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Text Color](#css-text-color)
    -   [Link Color](#css-link-color)
    -   [Sass API](#css-text-color-sass-api)
-   [Background Color](#css-background-color)
    -   [Sass API](#css-background-color-sass-api)

</div>
</div>

## Text Color(#css-text-color)

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
					<td class="table-cell-minw-150">text-blue</td>
					<td class="table-cell-expand"><div class="text-blue">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-indigo</td>
					<td class="table-cell-expand"><div class="text-indigo">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-purple</td>
					<td class="table-cell-expand"><div class="text-purple">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-pink</td>
					<td class="table-cell-expand"><div class="text-pink">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-red</td>
					<td class="table-cell-expand"><div class="text-red">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-orange</td>
					<td class="table-cell-expand"><div class="text-orange">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-yellow</td>
					<td class="table-cell-expand"><div class="text-yellow">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-green</td>
					<td class="table-cell-expand"><div class="text-green">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-teal</td>
					<td class="table-cell-expand"><div class="text-teal">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-cyan</td>
					<td class="table-cell-expand"><div class="text-cyan">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-primary</td>
					<td class="table-cell-expand"><div class="text-primary">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-secondary</td>
					<td class="table-cell-expand"><div class="text-secondary">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-success</td>
					<td class="table-cell-expand"><div class="text-success">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-info</td>
					<td class="table-cell-expand"><div class="text-info">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-warning</td>
					<td class="table-cell-expand"><div class="text-warning">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-danger</td>
					<td class="table-cell-expand"><div class="text-danger">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-dark</td>
					<td class="table-cell-expand"><div class="text-dark">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-light</td>
					<td class="table-cell-expand bg-dark"><div class="text-light">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-muted</td>
					<td class="table-cell-expand"><div class="text-muted">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-white</td>
					<td class="table-cell-expand bg-dark"><div class="text-white">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-black-50</td>
					<td class="table-cell-expand"><div class="text-black-50">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-white-50</td>
					<td class="table-cell-expand bg-dark"><div class="text-white-50">The quick brown fox jumped over the lazy dog.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-reset</td>
					<td class="table-cell-expand"><div class="text-reset">The quick brown fox jumped over the lazy dog. This sets `color: inherit !important`.</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="text-blue" href="#1"></div>
<div class="text-indigo" href="#1"></div>
<div class="text-purple" href="#1"></div>
<div class="text-pink" href="#1"></div>
<div class="text-red" href="#1"></div>
<div class="text-orange" href="#1"></div>
<div class="text-yellow" href="#1"></div>
<div class="text-green" href="#1"></div>
<div class="text-teal" href="#1"></div>
<div class="text-cyan" href="#1"></div>
<div class="text-primary"></div>
<div class="text-secondary"></div>
<div class="text-success"></div>
<div class="text-info"></div>
<div class="text-warning"></div>
<div class="text-danger"></div>
<div class="text-dark"></div>
<div class="text-light"></div>
<div class="text-muted"></div>
<div class="text-white"></div>
<div class="text-black-50"></div>
<div class="text-white-50"></div>
<div class="text-reset"></div>
```

### Link Color(#css-link-color)

Text color utilities applied to anchor tags. These styles will only be output if a text color has `hover` state styles.

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
					<td class="table-cell-minw-150">text-blue</td>
					<td class="table-cell-expand"><a class="text-blue" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-indigo</td>
					<td class="table-cell-expand"><a class="text-indigo" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-purple</td>
					<td class="table-cell-expand"><a class="text-purple" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-pink</td>
					<td class="table-cell-expand"><a class="text-pink" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-red</td>
					<td class="table-cell-expand"><a class="text-red" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-orange</td>
					<td class="table-cell-expand"><a class="text-orange" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-yellow</td>
					<td class="table-cell-expand"><a class="text-yellow" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-green</td>
					<td class="table-cell-expand"><a class="text-green" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-teal</td>
					<td class="table-cell-expand"><a class="text-teal" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-cyan</td>
					<td class="table-cell-expand"><a class="text-cyan" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-primary</td>
					<td class="table-cell-expand"><a class="text-primary" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-secondary</td>
					<td class="table-cell-expand"><a class="text-secondary" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-success</td>
					<td class="table-cell-expand"><a class="text-success" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-info</td>
					<td class="table-cell-expand"><a class="text-info" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-warning</td>
					<td class="table-cell-expand"><a class="text-warning" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-danger</td>
					<td class="table-cell-expand"><a class="text-danger" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-dark</td>
					<td class="table-cell-expand"><a class="text-dark" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-light</td>
					<td class="table-cell-expand bg-dark"><a class="text-light" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-muted</td>
					<td class="table-cell-expand"><a class="text-muted" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-white</td>
					<td class="table-cell-expand bg-dark"><a class="text-white" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-black-50</td>
					<td class="table-cell-expand"><a class="text-black-50" href="#1">Link to Somewhere</a></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">text-white-50</td>
					<td class="table-cell-expand bg-dark"><a class="text-white-50" href="#1">Link to Somewhere</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<a class="text-blue" href="#1"></a>
<a class="text-indigo" href="#1"></a>
<a class="text-purple" href="#1"></a>
<a class="text-pink" href="#1"></a>
<a class="text-red" href="#1"></a>
<a class="text-orange" href="#1"></a>
<a class="text-yellow" href="#1"></a>
<a class="text-green" href="#1"></a>
<a class="text-teal" href="#1"></a>
<a class="text-cyan" href="#1"></a>
<a class="text-primary" href="#1"></a>
<a class="text-secondary" href="#1"></a>
<a class="text-success" href="#1"></a>
<a class="text-info" href="#1"></a>
<a class="text-warning" href="#1"></a>
<a class="text-danger" href="#1"></a>
<a class="text-dark" href="#1"></a>
<a class="text-light" href="#1"></a>
<a class="text-muted" href="#1"></a>
<a class="text-white" href="#1"></a>
<a class="text-black-50" href="#1"></a>
<a class="text-white-50" href="#1"></a>
```

### Text Color Sass API(#css-text-color-sass-api)

The map `$text-theme-colors` allows generating any number of text color variants. If a key starts with `.`, `#` or `%`, Clay will output it as is, otherwise we will prepend `.text-` to the key (e.g., `.text-primary`).

```scss{expanded}
$text-theme-colors: (
    'primary': (
        color: $primary !important,
    ),
    '%text-tertiary': (
        color: green !important,
    ),
    '.text-tertiary': (
        extend: '%text-tertiary',
    ),
    '.text-quaternary': (
        extend: '%text-tertiary',
    ),
);
```

Outputs:

```css{expanded}
.text-primary {
    color: #0b5fff !important;
}

.text-tertiary, .text-quaternary {
    color: green !important;
}
```

## Background Color(#css-background-color)

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
					<td class="table-cell-minw-150">bg-blue</td>
					<td class="table-cell-expand bg-blue text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-indigo</td>
					<td class="table-cell-expand bg-indigo text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-purple</td>
					<td class="table-cell-expand bg-purple text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-pink</td>
					<td class="table-cell-expand bg-pink text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-red</td>
					<td class="table-cell-expand bg-red text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-orange</td>
					<td class="table-cell-expand bg-orange text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-yellow</td>
					<td class="table-cell-expand bg-yellow text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-green</td>
					<td class="table-cell-expand bg-green text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-teal</td>
					<td class="table-cell-expand bg-teal text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-cyan</td>
					<td class="table-cell-expand bg-cyan text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-primary</td>
					<td class="table-cell-expand bg-primary text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-secondary</td>
					<td class="table-cell-expand bg-secondary text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-success</td>
					<td class="table-cell-expand bg-success text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-info</td>
					<td class="table-cell-expand bg-info text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-warning</td>
					<td class="table-cell-expand bg-warning text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-danger</td>
					<td class="table-cell-expand bg-danger text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-dark</td>
					<td class="table-cell-expand bg-dark text-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-light</td>
					<td class="table-cell-expand bg-light">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-white</td>
					<td class="table-cell-expand bg-white">The quick brown fox jumped over the lazy dog.</td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">bg-transparent</td>
					<td class="table-cell-expand bg-transparent">The quick brown fox jumped over the lazy dog.</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="bg-blue"></div>
<div class="bg-indigo"></div>
<div class="bg-purple"></div>
<div class="bg-pink"></div>
<div class="bg-red"></div>
<div class="bg-orange"></div>
<div class="bg-yellow"></div>
<div class="bg-green"></div>
<div class="bg-teal"></div>
<div class="bg-cyan"></div>
<div class="bg-primary"></div>
<div class="bg-secondary"></div>
<div class="bg-success"></div>
<div class="bg-info"></div>
<div class="bg-warning"></div>
<div class="bg-danger"></div>
<div class="bg-dark"></div>
<div class="bg-light"></div>
<div class="bg-white"></div>
<div class="bg-transparent"></div>
```

### Background Color Sass API(#css-background-color-sass-api)

The map `$bg-theme-colors` allows generating any number of background color variants. If a key starts with `.`, `#` or `%`, Clay will output it as is, otherwise we will prepend `.bg-` to the key (e.g., `.bg-primary`).

```scss{expanded}
$bg-theme-colors: (
    'primary': (
        background-color: $primary !important,
    ),
    '%bg-tertiary': (
        background-color: green !important,
    ),
    '.bg-tertiary': (
        extend: '%bg-tertiary',
    ),
    '.bg-quaternary': (
        extend: '%bg-tertiary',
    ),
);
```

Outputs:

```css{expanded}
.bg-primary {
    background-color: #0b5fff !important;
}

.bg-tertiary, .bg-quaternary {
    background-color: green !important;
}
```
