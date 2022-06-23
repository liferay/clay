---
title: 'Flex'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Direction](#css-flex-direction)
-   [Justify Content](#css-justify-content)
-   [Align Items](#css-align-items)
-   [Align Self](#css-align-self)
-   [Align Content](#css-align-content)
-   [Fill](#css-fill)
-   [Grow](#css-grow)
-   [Shrink](#css-shrink)
-   [Wrap](#css-wrap)
-   [Order](#css-order)

</div>
</div>

## Direction(#css-flex-direction)

Flex Direction Utilities set the `flex-direction` property, use the format `flex-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `flex-md-row`).

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
					<td>flex-row</td>
					<td>row</td>
				</tr>
				<tr>
					<td>flex-row-reverse</td>
					<td>row-reverse</td>
				</tr>
				<tr>
					<td>flex-column</td>
					<td>column</td>
				</tr>
				<tr>
					<td>flex-column-reverse</td>
					<td>column-reverse</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Justify Content(#css-justify-content)

Justify Content Utilities set the `justify-content` property, use the format `justify-content-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `justify-content-md-center`).

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
					<td>justify-content-start</td>
					<td>flex-start</td>
				</tr>
				<tr>
					<td>justify-content-center</td>
					<td>center</td>
				</tr>
				<tr>
					<td>justify-content-end</td>
					<td>flex-end</td>
				</tr>
				<tr>
					<td>justify-content-between</td>
					<td>space-between</td>
				</tr>
				<tr>
					<td>justify-content-around</td>
					<td>space-around</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Align Items(#css-align-items)

Align Items Utilities set the `align-items` property, use the format `align-items-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `align-items-md-center`).

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
					<td>align-items-start</td>
					<td>flex-start</td>
				</tr>
				<tr>
					<td>align-items-center</td>
					<td>center</td>
				</tr>
				<tr>
					<td>align-items-end</td>
					<td>flex-end</td>
				</tr>
				<tr>
					<td>align-items-baseline</td>
					<td>baseline</td>
				</tr>
				<tr>
					<td>align-items-stretch</td>
					<td>stretch</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Align Content(#css-align-content)

Align Content Utilities set the `align-content` property, use the format `align-content-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `align-content-md-center`).

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
					<td>align-content-start</td>
					<td>flex-start</td>
				</tr>
				<tr>
					<td>align-content-center</td>
					<td>center</td>
				</tr>
				<tr>
					<td>align-content-end</td>
					<td>flex-end</td>
				</tr>
				<tr>
					<td>align-content-between</td>
					<td>space-between</td>
				</tr>
				<tr>
					<td>align-content-around</td>
					<td>space-around</td>
				</tr>
				<tr>
					<td>align-content-stretch</td>
					<td>stretch</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Align Self(#css-align-self)

Align Self Utilities set the `align-self` property, use the format `align-self-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `align-self-md-center`).

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
					<td>align-self-start</td>
					<td>flex-start</td>
				</tr>
				<tr>
					<td>align-self-center</td>
					<td>center</td>
				</tr>
				<tr>
					<td>align-self-end</td>
					<td>flex-end</td>
				</tr>
				<tr>
					<td>align-self-auto</td>
					<td>auto</td>
				</tr>
				<tr>
					<td>align-self-baseline</td>
					<td>baseline</td>
				</tr>
				<tr>
					<td>align-self-stretch</td>
					<td>stretch</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Fill(#css-fill)

`flex-fill` sets `flex: 1 1 auto !important`. This forces a flex item to fill the remaining space, just becareful using this with long text that has no white space. Use the format `flex-{sm|md|lg|xl}-fill` to target specific screen sizes (e.g., `flex-md-fill`).

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
					<td>flex-fill</td>
					<td>flex: 1 1 auto</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Grow(#css-grow)

Flex Grow Utilities set the `flex-grow` property, use the format `flex-{sm|md|lg|xl}-grow-{value}` to target specific screen sizes (e.g., `flex-md-grow-1`).

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
					<td>flex-grow-0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>flex-grow-1</td>
					<td>1</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Shrink(#css-shrink)

Flex Shrink Utilities set the `flex-shrink` property, use the format `flex-{sm|md|lg|xl}-shrink-{value}` to target specific screen sizes (e.g., `flex-md-shrink-0`).

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
					<td>flex-shrink-0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>flex-shrink-1</td>
					<td>1</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Wrap(#css-wrap)

Flex Wrap Utilities set the `flex-wrap` property, use the format `flex-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `flex-md-nowrap`).

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
					<td>flex-nowrap</td>
					<td>nowrap</td>
				</tr>
				<tr>
					<td>flex-wrap</td>
					<td>wrap</td>
				</tr>
				<tr>
					<td>flex-wrap-reverse</td>
					<td>wrap-reverse</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Order(#css-order)

Order Utilities set the `order` property, use the format `order-{sm|md|lg|xl}-{value}` to target specific screen sizes (e.g., `order-md-5`).

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
					<td>order-first</td>
					<td>-</td>
				</tr>
				<tr>
					<td>order-last</td>
					<td>13</td>
				</tr>
				<tr>
					<td>order-0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>order-1</td>
					<td>1</td>
				</tr>
				<tr>
					<td>order-2</td>
					<td>2</td>
				</tr>
				<tr>
					<td>order-3</td>
					<td>3</td>
				</tr>
				<tr>
					<td>order-4</td>
					<td>4</td>
				</tr>
				<tr>
					<td>order-5</td>
					<td>5</td>
				</tr>
				<tr>
					<td>order-6</td>
					<td>6</td>
				</tr>
				<tr>
					<td>order-7</td>
					<td>7</td>
				</tr>
				<tr>
					<td>order-8</td>
					<td>8</td>
				</tr>
				<tr>
					<td>order-9</td>
					<td>9</td>
				</tr>
				<tr>
					<td>order-10</td>
					<td>10</td>
				</tr>
				<tr>
					<td>order-11</td>
					<td>11</td>
				</tr>
				<tr>
					<td>order-12</td>
					<td>12</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
