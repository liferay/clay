---
title: 'Stickers'
description: 'Stickers are a visual way to quickly identify content.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/stickers/'
mainTabLink: 'docs/components/sticker.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Colors](#css-colors)
-   [Position](#css-position)
-   [Sizes](#css-sizes)
-   [Variations](#css-variations)
    -   [Overlay](#css-overlay)
    -   [Outside](#css-outside)
    -   [User Icon](#css-user-icon)

</div>
</div>

## Colors(#css-colors)

Lexicon adopts in its design system the following colors below:

<div class="sheet-example">
    <span class="sticker sticker-primary">133</span>
    <span class="sticker sticker-secondary">133</span>
    <span class="sticker sticker-success">133</span>
    <span class="sticker sticker-info">133</span>
    <span class="sticker sticker-warning">133</span>
    <span class="sticker sticker-danger">133</span>
</div>

```html
<span class="sticker sticker-primary">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-success">133</span>
<span class="sticker sticker-info">133</span>
<span class="sticker sticker-warning">133</span>
<span class="sticker sticker-danger">133</span>
```

## Position(#css-position)

Place them anywhere relative to your container using positional sticker classes `sticker-top-left`, `sticker-bottom-left`, `sticker-top-right`, and `sticker-bottom-right`.

<div class="sheet-example">
    <div class="row">
        <div class="col-md-3 col-6">
            <div class="clay-site-positional-sticker">
                <div class="aspect-ratio">
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
                    <span class="sticker sticker-danger sticker-top-left">PDF</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-6">
            <div class="clay-site-positional-sticker">
                <div class="aspect-ratio">
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
                    <span class="sticker sticker-bottom-left sticker-danger">PDF</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-6">
            <div class="clay-site-positional-sticker">
                <div class="aspect-ratio">
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
                    <span class="sticker sticker-danger sticker-top-right">PDF</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-6">
            <div class="clay-site-positional-sticker">
                <div class="aspect-ratio">
                    <img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg">
                    <span class="sticker sticker-bottom-right sticker-danger">PDF</span>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="clay-site-positional-sticker">
	<div class="aspect-ratio">
		<img
			alt="thumbnail"
			class="aspect-ratio-item aspect-ratio-item-fluid"
			src="/images/thumbnail_hot_air_ballon.jpg"
		/>
		<span class="sticker sticker-danger sticker-top-left">PDF</span>
	</div>
</div>
<div class="clay-site-positional-sticker">
	<div class="aspect-ratio">
		<img
			alt="thumbnail"
			class="aspect-ratio-item aspect-ratio-item-fluid"
			src="/images/thumbnail_hot_air_ballon.jpg"
		/>
		<span class="sticker sticker-bottom-left sticker-danger">PDF</span>
	</div>
</div>
<div class="clay-site-positional-sticker">
	<div class="aspect-ratio">
		<img
			alt="thumbnail"
			class="aspect-ratio-item aspect-ratio-item-fluid"
			src="/images/thumbnail_hot_air_ballon.jpg"
		/>
		<span class="sticker sticker-danger sticker-top-right">PDF</span>
	</div>
</div>
<div class="clay-site-positional-sticker">
	<div class="aspect-ratio">
		<img
			alt="thumbnail"
			class="aspect-ratio-item aspect-ratio-item-fluid"
			src="/images/thumbnail_hot_air_ballon.jpg"
		/>
		<span class="sticker sticker-bottom-right sticker-danger">PDF</span>
	</div>
</div>
```

## Sizes(#css-sizes)

Stickers come in 4 sizes `sm`, default, `lg`, and `xl`. Create your own custom size with the `sticker-size` mixin.

<div class="sheet-example">
    <span class="sticker sticker-primary sticker-sm">133</span>
    <span class="sticker sticker-secondary">133</span>
    <span class="sticker sticker-lg sticker-success">133</span>
    <span class="sticker sticker-danger sticker-xl">133</span>
    <span class="sticker sticker-primary sticker-xl">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-format" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#format"></use>
            </svg>
        </span>
    </span>
    <span class="sticker sticker-lg sticker-secondary">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-format" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#format"></use>
            </svg>
        </span>
    </span>
    <span class="sticker sticker-success">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-format" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#format"></use>
            </svg>
        </span>
    </span>
    <span class="sticker sticker-danger sticker-sm">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-format" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#format"></use>
            </svg>
        </span>
    </span>
</div>

```html
<span class="sticker sticker-primary sticker-sm">133</span>
<span class="sticker sticker-secondary">133</span>
<span class="sticker sticker-lg sticker-success">133</span>
<span class="sticker sticker-danger sticker-xl">133</span>
<span class="sticker sticker-primary sticker-xl">
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-format"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#format"></use>
		</svg>
	</span>
</span>
<span class="sticker sticker-lg sticker-secondary">
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-format"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#format"></use>
		</svg>
	</span>
</span>
<span class="sticker sticker-success">
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-format"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#format"></use>
		</svg>
	</span>
</span>
<span class="sticker sticker-danger sticker-sm">
	<span class="inline-item">
		<svg
			class="lexicon-icon lexicon-icon-format"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#format"></use>
		</svg>
	</span>
</span>
```

## Variations(#css-variations)

### Overlay(#css-overlay)

Overlay content over stickers by nesting `sticker-overlay` inside `sticker`.

<div class="sheet-example">
    <div class="col-md-12">
        <span class="sticker sticker-dark sticker-sm">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg">
            </span>
            <span class="sticker-overlay">JB</span>
        </span>
        <span class="sticker sticker-dark">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_hot_air_ballon.jpg">
            </span>
            <span class="sticker-overlay">TT</span>
        </span>
        <span class="sticker sticker-dark sticker-lg">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/tv-at-beach.png">
            </span>
            <span class="sticker-overlay">SP</span>
        </span>
        <span class="sticker sticker-dark sticker-xl">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png">
            </span>
            <span class="sticker-overlay">BC</span>
        </span>
    </div>
</div>

```html
<span class="sticker sticker-dark sticker-sm">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/thumbnail_coffee.jpg"
		/>
	</span>
	<span class="sticker-overlay">JB</span>
</span>
<span class="sticker sticker-dark">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/thumbnail_hot_air_ballon.jpg"
		/>
	</span>
	<span class="sticker-overlay">TT</span>
</span>
<span class="sticker sticker-dark sticker-lg">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/tv-at-beach.png"
		/>
	</span>
	<span class="sticker-overlay">SP</span>
</span>
<span class="sticker sticker-dark sticker-xl">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/long_user_image.png"
		/>
	</span>
	<span class="sticker-overlay">BC</span>
</span>
```

### Outside(#css-outside)

Add class `sticker-outside` in conjunction with sticker positions to position the sticker on the outside corners.

<div class="sheet-example">
    <div class="row">
        <div class="col-md-3 col-6">
            <button class="btn btn-primary" style="position:relative;">
                Email
                <span class="sticker sticker-circle sticker-danger sticker-outside sticker-top-left">133</span>
            </button>
        </div>
        <div class="col-md-3 col-6">
            <button class="btn btn-primary" style="position:relative;">
                Email
                <span class="sticker sticker-circle sticker-bottom-left sticker-danger sticker-outside">133</span>
            </button>
	    </div>
        <div class="col-md-3 col-6">
            <button class="btn btn-primary" style="position:relative;">
                Email
                <span class="sticker sticker-circle sticker-danger sticker-outside sticker-top-right">133</span>
            </button>
	    </div>
        <div class="col-md-3 col-6">
            <button class="btn btn-primary" style="position:relative;">
                Email
                <span class="sticker sticker-circle sticker-bottom-right sticker-danger sticker-outside">133</span>
            </button>
	    </div>
    </div>
</div>

```html
<button class="btn btn-primary" style="position:relative;">
	Email
	<span
		class="sticker sticker-circle sticker-danger sticker-outside sticker-top-left"
		>133</span
	>
</button>
<button class="btn btn-primary" style="position:relative;">
	Email
	<span
		class="sticker sticker-circle sticker-bottom-left sticker-danger sticker-outside"
		>133</span
	>
</button>
<button class="btn btn-primary" style="position:relative;">
	Email
	<span
		class="sticker sticker-circle sticker-danger sticker-outside sticker-top-right"
		>133</span
	>
</button>
<button class="btn btn-primary" style="position:relative;">
	Email
	<span
		class="sticker sticker-circle sticker-bottom-right sticker-danger sticker-outside"
		>133</span
	>
</button>
```

### User Icon(#css-user-icon)

<div class="sheet-example">
    <div class="col-md-12">
        <span class="sticker sticker-sm sticker-user-icon">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
            </span>
        </span>
        <span class="sticker sticker-user-icon">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg">
            </span>
        </span>
        <span class="sticker sticker-lg sticker-user-icon">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_hot_air_ballon.jpg">
            </span>
        </span>
        <span class="sticker sticker-user-icon sticker-xl">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg">
            </span>
        </span>
        <span class="sticker sticker-user-icon sticker-xl">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png">
            </span>
        </span>
        <span class="sticker sticker-primary sticker-user-icon sticker-xl">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/tv-at-beach.png">
            </span>
        </span>
        <span class="sticker sticker-danger sticker-user-icon sticker-xl">JB</span>
        <span class="sticker sticker-lg sticker-success sticker-user-icon">TT</span>
        <span class="sticker sticker-secondary sticker-user-icon">SP</span>
        <span class="sticker sticker-primary sticker-sm sticker-user-icon">BC</span>
    </div>
</div>

```html
<span class="sticker sticker-sm sticker-user-icon">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/thumbnail_dock.jpg"
		/>
	</span>
</span>
<span class="sticker sticker-user-icon">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/thumbnail_coffee.jpg"
		/>
	</span>
</span>
<span class="sticker sticker-lg sticker-user-icon">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/thumbnail_hot_air_ballon.jpg"
		/>
	</span>
</span>
<span class="sticker sticker-user-icon sticker-xl">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/thumbnail_coffee.jpg"
		/>
	</span>
</span>
<span class="sticker sticker-user-icon sticker-xl">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/long_user_image.png"
		/>
	</span>
</span>
<span class="sticker sticker-primary sticker-user-icon sticker-xl">
	<span class="sticker-overlay">
		<img
			alt="thumbnail"
			class="sticker-img"
			src="/images/tv-at-beach.png"
		/>
	</span>
</span>
<span class="sticker sticker-danger sticker-user-icon sticker-xl">JB</span>
<span class="sticker sticker-lg sticker-success sticker-user-icon">TT</span>
<span class="sticker sticker-secondary sticker-user-icon">SP</span>
<span class="sticker sticker-primary sticker-sm sticker-user-icon">BC</span>
```
