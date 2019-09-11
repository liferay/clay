---
title: "Buttons"
description: "Buttons communicate an action to happen on user interaction."
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Examples](#examples)
- [Sizes](#sizes)
- [Active state](#active-state)
- [Disabled State](#disabled-state)
- [Icons](#icons)
  - [With text button](#with-text-button)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/buttons/">Buttons Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#button">WAI-ARIA</a> accessibility pratices for buttons when writting your markup.
</div>

## Examples

<div class="sheet-example">
	<button class="btn btn-primary" type="button">Primary</button>
	<button class="btn btn-secondary" type="button">Secondary</button>
	<button class="btn btn-info" type="button">Info</button>
	<button class="btn btn-success" type="button">Success</button>
	<button class="btn btn-warning" type="button">Warning</button>
	<button class="btn btn-danger" type="button">Danger</button>
	<button class="btn btn-link" type="button">Link</button>
</div>

```html
<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-info" type="button">Info</button>
<button class="btn btn-success" type="button">Success</button>
<button class="btn btn-warning" type="button">Warning</button>
<button class="btn btn-danger" type="button">Danger</button>
<button class="btn btn-link" type="button">Link</button>
```

## Sizes

<div class="sheet-example">
	<button class="btn btn-primary" type="button">Default</button>
	<button class="btn btn-primary btn-sm" type="button">Small</button>
</div>

```html
<button class="btn btn-primary" type="button">Default</button>
<button class="btn btn-primary btn-sm" type="button">Small</button>
```

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

<div class="sheet-example">
	<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>
	<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
</div>

```html
<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>
<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
```

## Active state

Buttons will appear pressed when active. However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.

<div class="sheet-example">
	<button class="active btn btn-primary" type="button">Primary</button>
	<button class="active btn btn-secondary" type="button">Secondary</button>
</div>

```html
<button class="active btn btn-primary" type="button">Primary</button>
<button class="active btn btn-secondary" type="button">Secondary</button>
```

## Disabled State

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

<div class="sheet-example">
	<button class="btn btn-primary" disabled="" type="button">Primary</button>
	<button class="btn btn-secondary" disabled="" type="button">Secondary</button>
</div>

```html
<button class="btn btn-primary" disabled="" type="button">Primary</button>
<button class="btn btn-secondary" disabled="" type="button">Secondary</button>
```

## Icons

Buttons can display icons instead of text. The icons, however, must be monospaced inside the button. Lexicon doesn't use buttons with text and icons or text and loading indicators. Icon buttons are used primarily in management bars. This button variation can be primary, secondary, or borderless type.

Try adding the modifier class `.btn-monospaced`.

<div class="sheet-example">
	<button class="btn btn-monospaced btn-primary" type="button">
		<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#blogs"></use>
		</svg>
	</button>
	<button class="btn btn-monospaced btn-secondary" type="button">
		<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#blogs"></use>
		</svg>
	</button>
</div>

```html
<button class="btn btn-monospaced btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
```

### With text button

This button type is only used in sites, outside of administration. The icon emphasizes and helps communicate the action. The label must match the icon's purpose.

Wrap the icon with the `<span />` tag and adding the [Inline Item](/docs/css/utilities/inline-item.html) utilities, try adding the `.inline-item.inline-item-(before|after)` modifier class.

<div class="sheet-example">
	<button class="btn btn-secondary" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share"></use>
			</svg>
		</span>
		Share
	</button>
</div>

```html
<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
```