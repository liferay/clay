---
title: 'Buttons'
description: 'Buttons communicate an action to happen on user interaction.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/buttons/'
mainTabURL: 'docs/components/button.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Examples](#css-examples)
    -   [Sass API](#css-button-variant-sass-api)
-   [Sizes](#css-sizes)
    -   [Sass API](#css-button-size-sass-api)
-   [Active state](#css-active-state)
-   [Disabled State](#css-disabled-state)
-   [Icons](#css-icons)
    -   [Sass API](#css-button-monospaced-sass-api)
    -   [With text button](#css-with-text-button)
-   [Shapes](#css-shapes)
    -   [Rounded](#css-rounded)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#button">WAI-ARIA</a> accessibility pratices for buttons when writting your markup.
</div>

## Examples(#css-examples)

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

### Button Variant Sass API(#css-button-variant-sass-api)

The map `$btn-palette` allows generating any number of button variants. If a key starts with `.`, `#` or `%`, Clay will output it as is, otherwise we will prepend `.btn-` to the key (e.g., `.btn-primary`). It will also generate Sass placeholders prefix/appended by `%btn-` and `%btn-{color}-focus` (e.g., `%btn-primary` and `%btn-primary-focus`), respectively.

```scss{expanded}
$btn-palette: (
    primary: (
        background-color: $primary,
    ),
    '%btn-tertiary': (
        background-color: green,
    ),
    '.btn-tertiary': (
        extend: '%btn-tertiary',
    ),
    '.btn-quaternary': (
        extend: '%btn-tertiary',
    ),
);
```

Outputs:

```css{expanded}
.btn-primary {
    background-color: #0b5fff;
}

.btn-tertiary, .btn-quaternary {
    background-color: green;
}
```

## Sizes(#css-sizes)

<div class="sheet-example">
	<button class="btn btn-primary" type="button">Default</button>
	<button class="btn btn-primary btn-sm" type="button">Small</button>
	<button class="btn btn-primary btn-xs" type="button">Extra Small</button>
</div>

```html
<button class="btn btn-primary" type="button">Default</button>
<button class="btn btn-primary btn-sm" type="button">Small</button>
<button class="btn btn-primary btn-xs" type="button">Extra Small</button>
```

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

<div class="sheet-example">
	<button class="btn btn-block btn-secondary btn-xs" type="button">Extra Small Block Level Button</button>
	<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>
	<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
</div>

```html
<button class="btn btn-block btn-secondary btn-xs" type="button">
	Extra Small Block Level Button
</button>
<button class="btn btn-block btn-secondary btn-sm" type="button">
	Small Block Level Button
</button>
<button class="btn btn-block btn-secondary" type="button">
	Normal Block Level Button
</button>
```

### Button Size Sass API(#css-button-size-sass-api)

The map `$btn-sizes` allows generating any number of button size variants. If a key starts with `btn-` Clay will prepend `.` to the key (e.g., `.btn-sm`). It will also generate a Sass placeholder prefixed by `%clay-` (e.g., `%clay-btn-sm`).

```scss{expanded}
$btn-sizes: (
    btn-sm: (
        font-size: 14px,
    ),
    '.btn-xs': (
        extend: '%clay-btn-sm',
    ),
    '%btn-xxs': (
        font-size: 12px,
    ),
    '.btn-xxs': (
        extend: '%btn-xxs',
    ),
);
```

Outputs:

```css{expanded}
.btn-sm, .btn-xs {
    font-size: 14px;
}

.btn-xxs {
    font-size: 12px;
}
```

## Active State(#css-active-state)

Buttons will appear pressed when active. However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.

<div class="sheet-example">
	<button class="active btn btn-primary" type="button">Primary</button>
	<button class="active btn btn-secondary" type="button">Secondary</button>
</div>

```html
<button class="active btn btn-primary" type="button">Primary</button>
<button class="active btn btn-secondary" type="button">Secondary</button>
```

## Disabled State(#css-disabled-state)

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

<div class="sheet-example">
	<button class="btn btn-primary" disabled="" type="button">Primary</button>
	<button class="btn btn-secondary" disabled="" type="button">Secondary</button>
</div>

```html
<button class="btn btn-primary" disabled="" type="button">Primary</button>
<button class="btn btn-secondary" disabled="" type="button">Secondary</button>
```

## Icons(#css-icons)

Buttons can display icons instead of text. The icons, however, must be monospaced inside the button. Lexicon doesn't use buttons with text and icons or text and loading indicators. Icon buttons are used primarily in management bars. This button variation can be primary, secondary, or borderless type.

Try adding the modifier class `.btn-monospaced`.

<div class="sheet-example">
	<div class="mb-2">
		<button aria-label="Blogs" title="Blogs" class="btn btn-monospaced btn-primary btn-xs" type="button">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#blogs"></use>
			</svg>
		</button>
		<button aria-label="Blogs" title="Blogs" class="btn btn-monospaced btn-secondary btn-xs" type="button">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#blogs"></use>
			</svg>
		</button>
	</div>
	<div class="mb-2">
		<button aria-label="Blogs" title="Blogs" class="btn btn-monospaced btn-primary btn-sm" type="button">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#blogs"></use>
			</svg>
		</button>
		<button aria-label="Blogs" title="Blogs" class="btn btn-monospaced btn-secondary btn-sm" type="button">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#blogs"></use>
			</svg>
		</button>
	</div>
	<div>
		<button aria-label="Blogs" title="Blogs" class="btn btn-monospaced btn-primary" type="button">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#blogs"></use>
			</svg>
		</button>
		<button aria-label="Blogs" title="Blogs" class="btn btn-monospaced btn-secondary" type="button">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#blogs"></use>
			</svg>
		</button>
	</div>
</div>

```html
<button
	aria-label="Blogs"
	title="Blogs"
	class="btn btn-monospaced btn-primary btn-xs"
	type="button"
>
	<svg
		class="lexicon-icon lexicon-icon-blogs"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>

<button
	aria-label="Blogs"
	title="Blogs"
	class="btn btn-monospaced btn-secondary btn-xs"
	type="button"
>
	<svg
		class="lexicon-icon lexicon-icon-blogs"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>

<button
	aria-label="Blogs"
	title="Blogs"
	class="btn btn-monospaced btn-primary btn-sm"
	type="button"
>
	<svg
		class="lexicon-icon lexicon-icon-blogs"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>

<button
	aria-label="Blogs"
	title="Blogs"
	class="btn btn-monospaced btn-secondary btn-sm"
	type="button"
>
	<svg
		class="lexicon-icon lexicon-icon-blogs"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>

<button
	aria-label="Blogs"
	title="Blogs"
	class="btn btn-monospaced btn-primary"
	type="button"
>
	<svg
		class="lexicon-icon lexicon-icon-blogs"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>

<button
	aria-label="Blogs"
	title="Blogs"
	class="btn btn-monospaced btn-secondary"
	type="button"
>
	<svg
		class="lexicon-icon lexicon-icon-blogs"
		focusable="false"
		role="presentation"
	>
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
```

### Button Monospaced Sass API(#css-button-monospaced-sass-api)

The map `$btn-monospaced-sizes` allows generating any number of button monospaced size variants. If a key starts with `btn-monospaced-` Clay will replace it with `.btn-monospaced.btn` (e.g., `.btn-monospaced.btn-sm`). It will also generate a Sass placeholder prefixed by `%clay-` (e.g., `%clay-btn-monospaced-sm`).

```scss{expanded}
$btn-monospaced-sizes: (
    btn-monospaced-sm: (
        font-size: 14px,
    ),
    '.btn-monospaced.btn-xs': (
        extend: '%clay-btn-monospaced-sm',
    ),
    '%btn-monospaced-xxs': (
        font-size: 12px,
    ),
    '.btn-monospaced.btn-xxs': (
        extend: '%btn-monospaced-xxs',
    ),
);
```

Outputs:

```css{expanded}
.btn-monospaced.btn-sm, .btn-monospaced.btn-xs {
    font-size: 14px;
}

.btn-monospaced.btn-xxs {
    font-size: 12px;
}
```

### With Text Button(#css-with-text-button)

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
	<button class="btn btn-secondary btn-sm" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share"></use>
			</svg>
		</span>
		Share
	</button>
	<button class="btn btn-secondary btn-xs" type="button">
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
		<svg
			class="lexicon-icon lexicon-icon-blogs"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>

<button class="btn btn-secondary btn-sm" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-blogs"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>

<button class="btn btn-secondary btn-xs" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-blogs"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
```

## Shapes(#css-shapes)

### Rounded(#css-rounded)

The class `rounded-pill` will make the button pill shaped.

<div class="sheet-example">
	<button class="btn btn-secondary rounded-pill" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share"></use>
			</svg>
		</span>
		Share
	</button>
	<button class="btn btn-secondary btn-sm rounded-pill" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share"></use>
			</svg>
		</span>
		Share
	</button>
	<button class="btn btn-secondary btn-xs rounded-pill" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share"></use>
			</svg>
		</span>
		Share
	</button>
</div>

```html
<button class="btn btn-secondary rounded-pill" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-blogs"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
<button class="btn btn-secondary btn-sm rounded-pill" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-blogs"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
<button class="btn btn-secondary btn-xs rounded-pill" type="button">
	<span class="inline-item inline-item-before">
		<svg
			class="lexicon-icon lexicon-icon-blogs"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
```
