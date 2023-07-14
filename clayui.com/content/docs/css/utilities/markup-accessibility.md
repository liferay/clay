---
title: 'Accessibility'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sr Only](#css-sr-only)
-   [Sr Only Focusable](#css-sr-only-focusable)
-   [C Prefers Reduced Motion](#css-c-prefers-reduced-motion)
-   [C Prefers Link Underline](#css-c-prefers-link-underline)
-   [C Prefers Letter Spacing 1](#css-c-prefers-letter-spacing-1)
-   [C Prefers Focus](#css-c-prefers-focus)

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

## C Prefers Reduced Motion(#css-c-prefers-reduced-motion)

The class `c-prefers-reduced-motion` should be added to the `body` tag to remove all CSS animations and transitions even if the user's system setting does prefer motion.

<div class="sheet-example">
	<button class="btn btn-primary" data-toggle="c-prefers-reduced-motion" type="button">Toggle Reduced Motion</button>
</div>

## C Prefers Link Underline(#css-c-prefers-link-underline)

The class `c-prefers-link-underline` should be added to the `body` tag to force all hyperlinks to be underlined. It does not apply underline to links with `role="button"` or the `disabled` class.

<div class="sheet-example">
	<button class="btn btn-primary" data-toggle="c-prefers-link-underline" type="button">Toggle Underline Links</button>
</div>

## C Prefers Letter Spacing 1(#css-c-prefers-letter-spacing-1)

The class `c-prefers-letter-spacing-1` provides more space between characters to make it easier to read. It adds `letter-spacing: 1px` to the document.

<div class="sheet-example">
	<button class="btn btn-primary" data-toggle="c-prefers-letter-spacing-1" type="button">Toggle Letter Spacing</button>
</div>

## C Prefers Expanded Text(#css-c-prefers-expanded-text)

The class `c-prefers-expanded-text` expands all truncated text to be visible.

<div class="sheet-example">
	<button class="btn btn-primary" data-toggle="c-prefers-expanded-text" type="button">Toggle Expanded Text</button>
	<div class="mt-2">
		<span class="text-truncate-inline">
			<span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
		</span>
	</div>
</div>

## C Prefers Focus(#css-c-prefers-focus)

The class `c-prefers-focus` should be added to the `body` element to show the focus outline on mouse click. This is an accessibility feature for users who prefer this style of navigation.

Focus Visible is now <a href="https://caniuse.com/?search=focus-visible" rel="noopener noreferrer" target="_blank">supported in all major browsers</a>. We have enabled it by default in Clay CSS. Using the mouse to click on links, buttons, checkboxes, and other elements no longer show the focus outline. The focus outline will be shown when interacting with elements via keyboard.

<div class="clay-site-alert alert alert-warning">
	The focus ring will always show in Text and Select elements that use the `input` tag. <a href="https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo" rel="noopener noreferrer" target="_blank">It is assumed the user will be interacting with the input via the keyboard</a>.
</div>

<div class="clay-site-alert alert alert-info">
	To disable `:focus-visible`, set the Sass variable `$enable-focus-visible: false;`.
</div>

<div class="sheet-example">
	<button class="btn btn-primary" data-toggle="c-prefers-focus" type="button">Toggle Focus</button>
</div>
