---
title: "Stickers"
---

### Sticker Overlay

Overlay content over stickers by nesting <code>sticker-overlay</code> inside <code>sticker</code>.

<div class="col-md-12">
	<span class="sticker sticker-primary sticker-sm">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg"/>
		</span>
		<span class="sticker-overlay">JB</span>
	</span>
	<span class="sticker sticker-primary">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_hot_air_ballon.jpg"/>
		</span>
		<span class="sticker-overlay">TT</span>
	</span>
	<span class="sticker sticker-primary sticker-lg">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/tv-at-beach.png"/>
		</span>
		<span class="sticker-overlay">SP</span>
	</span>
	<span class="sticker sticker-primary sticker-xl">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png"/>
		</span>
		<span class="sticker-overlay">BC</span>
	</span>
</div>

```html
<span class="sticker sticker-primary sticker-sm">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg"/>
	</span>
	<span class="sticker-overlay">JB</span>
</span>
<span class="sticker sticker-primary">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_hot_air_ballon.jpg"/>
	</span>
	<span class="sticker-overlay">TT</span>
</span>
<span class="sticker sticker-primary sticker-lg">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/tv-at-beach.png"/>
	</span>
	<span class="sticker-overlay">SP</span>
</span>
<span class="sticker sticker-primary sticker-xl">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png"/>
	</span>
	<span class="sticker-overlay">BC</span>
</span>
```

### Sticker Outside

Use the <code>sticker-outside</code> class along with sticker positions to position the sticker on the outside corners.

<div class="clay-site-row-spacer row">
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

```html
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
```

<div class="clay-site-row-spacer row">
	<div class="col-md-3 col-6">
		<span class="sticker sticker-dark">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#picture" />
				</svg>
			</span>
			<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-top-left">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-sun" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#sun" />
					</svg>
				</span>
			</span>
		</span>
	</div>
	<div class="col-md-3 col-6">
		<span class="sticker sticker-info">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#picture" />
				</svg>
			</span>
			<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-bottom-left">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-magic" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#magic" />
					</svg>
				</span>
			</span>
		</span>
	</div>
	<div class="col-md-3 col-6">
		<span class="sticker sticker-danger">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#picture" />
				</svg>
			</span>
			<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-top-right">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-transform" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#transform" />
					</svg>
				</span>
			</span>
		</span>
	</div>
	<div class="col-md-3 col-6">
		<span class="sticker sticker-success">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#picture" />
				</svg>
			</span>
			<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-bottom-right">
				<span class="inline-item">
					<svg class="lexicon-icon lexicon-icon-undo" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#undo" />
					</svg>
				</span>
			</span>
		</span>
	</div>
</div>

```html
<div class="col-md-3 col-6">
	<span class="sticker sticker-dark">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture" />
			</svg>
		</span>
		<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-top-left">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-sun" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#sun" />
				</svg>
			</span>
		</span>
	</span>
</div>
<div class="col-md-3 col-6">
	<span class="sticker sticker-info">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture" />
			</svg>
		</span>
		<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-bottom-left">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-magic" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#magic" />
				</svg>
			</span>
		</span>
	</span>
</div>
<div class="col-md-3 col-6">
	<span class="sticker sticker-danger">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture" />
			</svg>
		</span>
		<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-top-right">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-transform" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#transform" />
				</svg>
			</span>
		</span>
	</span>
</div>
<div class="col-md-3 col-6">
	<span class="sticker sticker-success">
		<span class="inline-item">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture" />
			</svg>
		</span>
		<span class="sticker sticker-circle sticker-info sticker-sm sticker-outside sticker-bottom-right">
			<span class="inline-item">
				<svg class="lexicon-icon lexicon-icon-undo" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#undo" />
				</svg>
			</span>
		</span>
	</span>
</div>
```

### Sticker User Icon

<div class="col-md-12">
	<span class="sticker sticker-circle sticker-primary sticker-sm">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg" />
		</span>
	</span>
	<span class="sticker sticker-circle sticker-primary">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg" />
		</span>
	</span>
	<span class="sticker sticker-circle sticker-lg sticker-primary">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_hot_air_ballon.jpg" />
		</span>
	</span>
	<span class="sticker sticker-circle sticker-primary sticker-xl">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg" />
		</span>
	</span>
	<span class="sticker sticker-circle sticker-primary sticker-xl">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png" />
		</span>
	</span>
	<span class="sticker sticker-circle sticker-primary sticker-xl">
		<span class="sticker-overlay">
			<img alt="thumbnail" class="sticker-img" src="/images/tv-at-beach.png" />
		</span>
	</span>
	<span class="sticker sticker-circle sticker-danger sticker-xl">JB</span>
	<span class="sticker sticker-circle sticker-lg sticker-success">TT</span>
	<span class="sticker sticker-circle sticker-secondary">SP</span>
	<span class="sticker sticker-circle sticker-primary sticker-sm">BC</span>
</div>

```html
<span class="sticker sticker-circle sticker-primary sticker-sm">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg" />
	</span>
</span>
<span class="sticker sticker-circle sticker-primary">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coyote.jpg" />
	</span>
</span>
<span class="sticker sticker-circle sticker-lg sticker-primary">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_hot_air_ballon.jpg" />
	</span>
</span>
<span class="sticker sticker-circle sticker-primary sticker-xl">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_coffee.jpg" />
	</span>
</span>
<span class="sticker sticker-circle sticker-primary sticker-xl">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/long_user_image.png" />
	</span>
</span>
<span class="sticker sticker-circle sticker-primary sticker-xl">
	<span class="sticker-overlay">
		<img alt="thumbnail" class="sticker-img" src="/images/tv-at-beach.png" />
	</span>
</span>
<span class="sticker sticker-circle sticker-danger sticker-xl">JB</span>
<span class="sticker sticker-circle sticker-lg sticker-success">TT</span>
<span class="sticker sticker-circle sticker-secondary">SP</span>
<span class="sticker sticker-circle sticker-primary sticker-sm">BC</span>
```