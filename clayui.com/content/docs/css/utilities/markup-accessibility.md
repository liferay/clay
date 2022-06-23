---
title: 'Accessibility'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sr Only](#css-sr-only)
-   [Sr Only Focusable](#css-sr-only-focusable)

</div>
</div>

## Sr Only(#css-sr-only)

The `sr-only` utility only shows an element to screen readers. It is hidden on all other devices.

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
					<td>sr-only</td>
					<td>border:0;<br/>clip:rect(0, 0, 0, 0);<br/>height:1px;<br/>margin:-1px;<br/>overflow:hidden;<br/>padding:0;<br/>position:absolute;<br/>white-space:nowrap;<br/>width:1px;</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Sr Only Focusable(#css-sr-only-focusable)

The `sr-only-focusable` utility should be used with `sr-only`. It only displays an element when focused by a keyboard.

<div class="sheet-example">
	<a class="btn btn-link sr-only sr-only-focusable" href="#skip-to-content">Skip to Content</a>
</div>

```html
<a class="btn btn-link sr-only sr-only-focusable" href="#skip-to-content"
	>Skip to Content</a
>
```
