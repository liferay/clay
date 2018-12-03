---
title: "Badges"
---

### Badge Sizes

<div class="alert alert-warning">
	Badge Sizes have been removed. Use the <a href="https://github.com/liferay/clay/blob/master/packages/clay-css/src/scss/mixins/_badges.scss#L1">clay-badge-size($sassMap) mixin</a> to create custom badge sizes for your app.
</div>

### Badge Pill

<div class="col-md-12">
	<span class="badge badge-pill badge-primary">
		<span class="badge-item badge-item-expand">Primary</span>
	</span>
	<span class="badge badge-pill badge-secondary">
		<span class="badge-item badge-item-expand">Secondary</span>
	</span>
	<span class="badge badge-pill badge-success">
		<span class="badge-item badge-item-expand">Success</span>
	</span>
	<span class="badge badge-info badge-pill">
		<span class="badge-item badge-item-expand">Info</span>
	</span>
	<span class="badge badge-pill badge-warning">
		<span class="badge-item badge-item-expand">Warning</span>
	</span>
	<span class="badge badge-danger badge-pill">
		<span class="badge-item badge-item-expand">Danger</span>
	</span>
	<span class="badge badge-light badge-pill">
		<span class="badge-item badge-item-expand">Light</span>
	</span>
	<span class="badge badge-dark badge-pill">
		<span class="badge-item badge-item-expand">Dark</span>
	</span>
</div>

```html
<span class="badge badge-pill badge-primary">
	<span class="badge-item badge-item-expand">Primary</span>
</span>
<span class="badge badge-pill badge-secondary">
	<span class="badge-item badge-item-expand">Secondary</span>
</span>
<span class="badge badge-pill badge-success">
	<span class="badge-item badge-item-expand">Success</span>
</span>
<span class="badge badge-info badge-pill">
	<span class="badge-item badge-item-expand">Info</span>
</span>
<span class="badge badge-pill badge-warning">
	<span class="badge-item badge-item-expand">Warning</span>
</span>
<span class="badge badge-danger badge-pill">
	<span class="badge-item badge-item-expand">Danger</span>
</span>
<span class="badge badge-light badge-pill">
	<span class="badge-item badge-item-expand">Light</span>
</span>
<span class="badge badge-dark badge-pill">
	<span class="badge-item badge-item-expand">Dark</span>
</span>
```

### Badges as Anchor Tag

<a class="badge badge-primary" href="#1">
	<span class="badge-item badge-item-expand">badge badge-primary</span>
</a>
<a class="badge badge-secondary" href="#1">
	<span class="badge-item badge-item-expand">badge badge-secondary</span>
</a>
<a class="badge badge-success" href="#1">
	<span class="badge-item badge-item-expand">badge badge-success</span>
</a>
<a class="badge badge-info" href="#1">
	<span class="badge-item badge-item-expand">badge badge-info</span>
</a>
<a class="badge badge-warning" href="#1">
	<span class="badge-item badge-item-expand">badge badge-warning</span>
</a>
<a class="badge badge-danger" href="#1">
	<span class="badge-item badge-item-expand">badge badge-danger</span>
</a>
<a class="badge badge-light" href="#1">
	<span class="badge-item badge-item-expand">badge badge-light</span>
</a>
<a class="badge badge-dark" href="#1">
	<span class="badge-item badge-item-expand">badge badge-dark</span>
</a>

```html
<a class="badge badge-primary" href="#1">
	<span class="badge-item badge-item-expand">badge badge-primary</span>
</a>
```

### Badge with Links Inside

<span class="badge badge-primary">
	<span class="badge-item badge-item-before">
		<a href="#1">
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</a>
	</span>
	<span class="badge-item badge-item-before">
		<button class="btn btn-unstyled" type="button">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture"></use>
			</svg>
		</button>
	</span>
	<span class="badge-item badge-item-expand">
		<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</a>
	</span>
	<span class="badge-item badge-item-after">
		<svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#camera"></use>
		</svg>
	</span>
	<span class="badge-item badge-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>

```html
<span class="badge badge-primary">
	<span class="badge-item badge-item-before">
		<a href="#1">
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</a>
	</span>
	<span class="badge-item badge-item-before">
		<button class="btn btn-unstyled" type="button">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture"></use>
			</svg>
		</button>
	</span>
	<span class="badge-item badge-item-expand">
		<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</a>
	</span>
	<span class="badge-item badge-item-after">
		<svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#camera"></use>
		</svg>
	</span>
	<span class="badge-item badge-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>
```

### Badge with Text Truncate

<span class="badge badge-success">
	<span class="badge-item badge-item-before">
		<a href="#1">
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</a>
	</span>
	<span class="badge-item badge-item-before">
		<button class="btn btn-unstyled" type="button">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture"></use>
			</svg>
		</button>
	</span>
	<span class="badge-item badge-item-expand">
		<a class="text-truncate-inline" href="#1">
			<span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</span>
		</a>
	</span>
	<span class="badge-item badge-item-after">
		<svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#camera"></use>
		</svg>
	</span>
	<span class="badge-item badge-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>

```html
<span class="badge badge-success">
	<span class="badge-item badge-item-before">
		<a href="#1">
			<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times-circle"></use>
			</svg>
		</a>
	</span>
	<span class="badge-item badge-item-before">
		<button class="btn btn-unstyled" type="button">
			<svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#picture"></use>
			</svg>
		</button>
	</span>
	<span class="badge-item badge-item-expand">
		<a class="text-truncate-inline" href="#1">
			<span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</span>
		</a>
	</span>
	<span class="badge-item badge-item-after">
		<svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#camera"></use>
		</svg>
	</span>
	<span class="badge-item badge-item-after">
		<button aria-label="Close" class="close" type="button">
			<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times"></use>
			</svg>
		</button>
	</span>
</span>
```
