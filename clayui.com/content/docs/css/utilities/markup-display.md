---
title: 'Display'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Display](#css-display)
    -   [Sm](#css-display-sm)
    -   [Md](#css-display-md)
    -   [Lg](#css-display-lg)
    -   [Xl](#css-display-xl)
-   [Hiding Elements](#css-display-hiding-elements)

</div>
</div>

## Display(#css-display)

The utility `d-*` sets the `display` property.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Description</th>
					<th class="table-cell-expand">Example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">d-none</td>
					<td class="table-cell-expand">none</td>
					<td class="table-cell-expand"><div class="d-none bg-secondary text-white">This is none text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-inline</td>
					<td class="table-cell-expand">inline</td>
					<td class="table-cell-expand"><div class="d-inline bg-secondary text-white">This is inline text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-inline-block</td>
					<td class="table-cell-expand">inline-block</td>
					<td class="table-cell-expand"><div class="d-inline bg-secondary text-white">This is inline-block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-block</td>
					<td class="table-cell-expand">block</td>
					<td class="table-cell-expand"><div class="d-block bg-secondary text-white">This is block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-inline-flex</td>
					<td class="table-cell-expand">inline-flex</td>
					<td class="table-cell-expand"><div class="d-inline-flex bg-secondary text-white">This is inline-flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-flex</td>
					<td class="table-cell-expand">flex</td>
					<td class="table-cell-expand"><div class="d-flex bg-secondary text-white">This is flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-grid</td>
					<td class="table-cell-expand">grid</td>
					<td class="table-cell-expand"><div class="d-flex bg-secondary text-white">This is grid text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-table</td>
					<td class="table-cell-expand">table</td>
					<td class="table-cell-expand"><div class="d-table bg-secondary text-white">This is table text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-table-row</td>
					<td class="table-cell-expand">table-row</td>
					<td class="table-cell-expand"><div class="d-table-row bg-secondary text-white">This is table-row text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-table-cell</td>
					<td class="table-cell-expand">table-cell</td>
					<td class="table-cell-expand"><div class="d-table-cell bg-secondary text-white">This is table-cell text.</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="d-none">This is none text.</div>
<div class="d-inline">This is inline text.</div>
<div class="d-inline">This is inline-block text.</div>
<div class="d-block">This is block text.</div>
<div class="d-inline-flex">This is inline-flex text.</div>
<div class="d-flex">This is flex text.</div>
<div class="d-grid">This is grid text.</div>
<div class="d-table">This is table text.</div>
<div class="d-table-row">This is table-row text.</div>
<div class="d-table-cell">This is table-cell text.</div>
```

### Sm(#css-display-sm)

The utility `d-sm-*` sets the `display` property for screen sizes 576px(sm) and up.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Description</th>
					<th class="table-cell-expand">Example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">d-sm-none</td>
					<td class="table-cell-expand">Hidden on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-sm-none bg-secondary text-white">This is visible between 0 and 576px.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-inline</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `inline` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-inline bg-secondary text-white">This is inline text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-inline-block</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `inline-block` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-inline bg-secondary text-white">This is inline-block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-block</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `block` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-block bg-secondary text-white">This is block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-inline-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `inline-flex` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-inline-flex bg-secondary text-white">This is inline-flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `flex` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-flex bg-secondary text-white">This is flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-grid</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `grid` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-flex bg-secondary text-white">This is grid text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-table</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `table` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-table bg-secondary text-white">This is table text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-table-row</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `table-row` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-table-row bg-secondary text-white">This is table-row text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-sm-table-cell</td>
					<td class="table-cell-expand">Hidden between 0 and 575px and `table-cell` on min-width: 576px (sm)</td>
					<td class="table-cell-expand"><div class="d-none d-sm-table-cell bg-secondary text-white">This is table-cell text.</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="d-sm-none">This is none text.</div>
<div class="d-none d-sm-inline">This is inline text.</div>
<div class="d-none d-sm-inline">This is inline-block text.</div>
<div class="d-none d-sm-block">This is block text.</div>
<div class="d-none d-sm-inline-flex">This is inline-flex text.</div>
<div class="d-none d-sm-flex">This is flex text.</div>
<div class="d-none d-sm-grid">This is grid text.</div>
<div class="d-none d-sm-table">This is table text.</div>
<div class="d-none d-sm-table-row">This is table-row text.</div>
<div class="d-none d-sm-table-cell">This is table-cell text.</div>
```

### Md(#css-display-md)

The utility `d-md-*` sets the `display` property for screen sizes 768px(md) and up.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Description</th>
					<th class="table-cell-expand">Example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">d-md-none</td>
					<td class="table-cell-expand">Hidden on min-width 768px (md)</td>
					<td class="table-cell-expand"><div class="d-md-none bg-secondary text-white">This is should be hidden on min-width 768px.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-inline</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `inline` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-inline bg-secondary text-white">This is inline text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-inline-block</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `inline-block` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-inline bg-secondary text-white">This is inline-block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-block</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `block` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-block bg-secondary text-white">This is block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-inline-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `inline-flex` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-inline-flex bg-secondary text-white">This is inline-flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `flex` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-flex bg-secondary text-white">This is flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-grid</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `grid` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-flex bg-secondary text-white">This is grid text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-table</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `table` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-table bg-secondary text-white">This is table text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-table-row</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `table-row` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-table-row bg-secondary text-white">This is table-row text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-md-table-cell</td>
					<td class="table-cell-expand">Hidden between 0 and 767px and `table-cell` on min-width: 768px (md)</td>
					<td class="table-cell-expand"><div class="d-none d-md-table-cell bg-secondary text-white">This is table-cell text.</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="d-md-none">This is should be hidden on min-width 768px.</div>
<div class="d-none d-md-inline">This is inline text.</div>
<div class="d-none d-md-inline">This is inline-block text.</div>
<div class="d-none d-md-block">This is block text.</div>
<div class="d-none d-md-inline-flex">This is inline-flex text.</div>
<div class="d-none d-md-flex">This is flex text.</div>
<div class="d-none d-md-grid">This is grid text.</div>
<div class="d-none d-md-table">This is table text.</div>
<div class="d-none d-md-table-row">This is table-row text.</div>
<div class="d-none d-md-table-cell">This is table-cell text.</div>
```

### Lg(#css-display-lg)

The utility `d-lg-*` sets the `display` property for screen sizes 992px(lg) and up.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Description</th>
					<th class="table-cell-expand">Example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">d-lg-none</td>
					<td class="table-cell-expand">Hidden on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-lg-none bg-secondary text-white">This is none text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-inline</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `inline` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-inline bg-secondary text-white">This is inline text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-inline-block</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `inline-block` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-inline bg-secondary text-white">This is inline-block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-block</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `block` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-block bg-secondary text-white">This is block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-inline-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `inline-flex` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-inline-flex bg-secondary text-white">This is inline-flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `flex` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-flex bg-secondary text-white">This is flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-grid</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `grid` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-flex bg-secondary text-white">This is grid text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-table</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `table` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-table bg-secondary text-white">This is table text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-table-row</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `table-row` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-table-row bg-secondary text-white">This is table-row text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-lg-table-cell</td>
					<td class="table-cell-expand">Hidden between 0 and 991px and `table-cell` on min-width: 992px (lg)</td>
					<td class="table-cell-expand"><div class="d-none d-lg-table-cell bg-secondary text-white">This is table-cell text.</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="d-lg-none">This is none text.</div>
<div class="d-none d-lg-inline">This is inline text.</div>
<div class="d-none d-lg-inline">This is inline-block text.</div>
<div class="d-none d-lg-block">This is block text.</div>
<div class="d-none d-lg-inline-flex">This is inline-flex text.</div>
<div class="d-none d-lg-flex">This is flex text.</div>
<div class="d-none d-lg-grid">This is grid text.</div>
<div class="d-none d-lg-table">This is table text.</div>
<div class="d-none d-lg-table-row">This is table-row text.</div>
<div class="d-none d-lg-table-cell">This is table-cell text.</div>
```

### Xl(#css-display-xl)

The utility `d-xl-*` sets the `display` property for screen sizes 1280px(xl) and up.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit">
			<thead>
				<tr>
					<th class="table-cell-minw-150">Utility</th>
					<th class="table-cell-expand">Description</th>
					<th class="table-cell-expand">Example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-cell-minw-150">d-xl-none</td>
					<td class="table-cell-expand">Hidden on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-xl-none bg-secondary text-white">This is none text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-inline</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `inline` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-inline bg-secondary text-white">This is inline text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-inline-block</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `inline-block` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-inline bg-secondary text-white">This is inline-block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-block</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `block` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-block bg-secondary text-white">This is block text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-inline-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `inline-flex` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-inline-flex bg-secondary text-white">This is inline-flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-flex</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `flex` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-flex bg-secondary text-white">This is flex text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-grid</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `grid` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-flex bg-secondary text-white">This is grid text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-table</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `table` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-table bg-secondary text-white">This is table text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-table-row</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `table-row` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-table-row bg-secondary text-white">This is table-row text.</div></td>
				</tr>
				<tr>
					<td class="table-cell-minw-150">d-none d-xl-table-cell</td>
					<td class="table-cell-expand">Hidden between 0 and 1279px and `table-cell` on min-width: 1280px (xl)</td>
					<td class="table-cell-expand"><div class="d-none d-xl-table-cell bg-secondary text-white">This is table-cell text.</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

```html
<div class="d-xl-none">This is none text.</div>
<div class="d-none d-xl-inline">This is inline text.</div>
<div class="d-none d-xl-inline">This is inline-block text.</div>
<div class="d-none d-xl-block">This is block text.</div>
<div class="d-none d-xl-inline-flex">This is inline-flex text.</div>
<div class="d-none d-xl-flex">This is flex text.</div>
<div class="d-none d-xl-grid">This is grid text.</div>
<div class="d-none d-xl-table">This is table text.</div>
<div class="d-none d-xl-table-row">This is table-row text.</div>
<div class="d-none d-xl-table-cell">This is table-cell text.</div>
```

## Hiding Elements(#css-display-hiding-elements)

Hide elements for specific screen size ranges by combining `d-{breakpoint}-none` with `d-{breakpoint}-*` utilities.

<div class="sheet-example">
	<div class="table-responsive">
		<table class="table table-autofit table-nowrap">
			<thead>
				<tr>
					<th>Utility</th>
					<th>Screen Size</th>
					<th class="table-cell-expand">Description</th>
					<th>Example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>d-none</td>
					<td>-</td>
					<td class="table-cell-expand">Hidden everywhere</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-none" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-none d-sm-inline-flex</td>
					<td>0px - 575px</td>
					<td class="table-cell-expand">Hidden only on xs</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-none d-sm-inline-flex" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-sm-none d-md-inline-flex</td>
					<td>576px - 767px</td>
					<td class="table-cell-expand">Hidden only on sm</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-sm-none d-md-inline-flex" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-md-none d-lg-inline-flex</td>
					<td>768px - 991px</td>
					<td class="table-cell-expand">Hidden only on md</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-md-none d-lg-inline-flex" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-lg-none d-xl-inline-flex</td>
					<td>992px - 1279px</td>
					<td class="table-cell-expand">Hidden only on lg</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-lg-none d-xl-inline-flex" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-xl-none</td>
					<td>1280px+</td>
					<td class="table-cell-expand">Hidden only on xl</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-xl-none" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-inline-flex d-sm-none</td>
					<td>0px - 575px</td>
					<td class="table-cell-expand">Visible only on xs</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-inline-flex d-sm-none" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-none d-sm-inline-flex d-md-none</td>
					<td>575px - 767px</td>
					<td class="table-cell-expand">Visible only on sm</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-none d-sm-inline-flex d-md-none" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-none d-md-inline-flex d-lg-none</td>
					<td>768px - 991px</td>
					<td class="table-cell-expand">Visible only on md</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-none d-md-inline-flex d-lg-none" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-none d-lg-inline-flex d-xl-none</td>
					<td>992px - 1279px</td>
					<td class="table-cell-expand">Visible only on lg</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-none d-lg-inline-flex d-xl-none" type="button">D</button></td>
				</tr>
				<tr>
					<td>d-none d-xl-inline-flex</td>
					<td>1280px</td>
					<td class="table-cell-expand">Visible only on xl</td>
					<td><button class="btn btn-sm btn-primary btn-monospaced d-none d-xl-inline-flex" type="button">D</button></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
