---
title: "Images (Aspect Ratios)"
---

### Image Aspect Ratios

> Sometimes you can't control the size of an image. Constrain your images with aspect-ratios. The base class `aspect-ratio` maintains a one-to-one ratio relative to its container's width.

> Use `aspect-ratio-3-to-2`, `aspect-ratio-4-to-3`, `aspect-ratio-8-to-5`, or `aspect-ratio-16-to-9` to maintain the specific ratio relative to its container, or set `padding-bottom` to the ratio you want to create your own aspect ratio, e.g. 2 to 1 `{literal}.aspect-ratio-2-to-1 { padding-bottom: 50% }{/literal}`.

### Aspect Ratio Item Fluid

##### Original Image

<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg" style="max-width:300px;width:100%;" />

<div class="row">
	<div class="col-3">
		<h6>1:1</h6>
		<div class="aspect-ratio">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>3:2</h6>
		<div class="aspect-ratio aspect-ratio-3-to-2">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>4:3</h6>
		<div class="aspect-ratio aspect-ratio-4-to-3">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>8:5</h6>
		<div class="aspect-ratio aspect-ratio-8-to-5">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>16:9</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
</div>

```html
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-3-to-2">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-4-to-3">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-8-to-5">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>
```

### Aspect Ratio Item Vertical Fluid

<div class="row">
	<div class="col-3">
		<h6>1:1</h6>
		<div class="aspect-ratio">
			<img alt="thumbnail" class="aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>3:2</h6>
		<div class="aspect-ratio aspect-ratio-3-to-2">
			<img alt="thumbnail" class="aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>4:3</h6>
		<div class="aspect-ratio aspect-ratio-4-to-3">
			<img alt="thumbnail" class="aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>8:5</h6>
		<div class="aspect-ratio aspect-ratio-8-to-5">
			<img alt="thumbnail" class=" aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
	<div class="col-3">
		<h6>16:9</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class=" aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
</div>

```html
<div class="aspect-ratio">
	<img alt="thumbnail" class="aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-3-to-2">
	<img alt="thumbnail" class="aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-4-to-3">
	<img alt="thumbnail" class="aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-8-to-5">
	<img alt="thumbnail" class=" aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class=" aspect-ratio-item-vertical-fluid" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>
```

### Aspect Ratio Item

> Add the `aspect-ratio-item` class to an image to keep the content's original size and crop the visible area.

<div class="row">
	<div class="col-3">
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class=" aspect-ratio-item aspect-ratio-item-center aspect-ratio-item-middle" src="/images/thumbnail_hot_air_ballon.jpg" />
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class=" aspect-ratio-item aspect-ratio-item-center aspect-ratio-item-middle" src="/images/thumbnail_hot_air_ballon.jpg" />
</div>
```

### Aspect Ratio Item Helper Classes

<div class="row">
	<div class="col-3">
		<h6>aspect-ratio-item-center-middle</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-fluid</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-top-center</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-top-center aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-top-right</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-fluid aspect-ratio-item-top-right" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-right-middle</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-fluid aspect-ratio-item-right-middle" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-bottom-right</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-bottom-right aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-bottom-center</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-bottom-center aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-bottom-left</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-bottom-left aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-item-left-middle</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" class="aspect-ratio-item-left-middle aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-top-center aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-fluid aspect-ratio-item-top-right" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-bottom-right aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-bottom-center aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-bottom-left aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="thumbnail" class="aspect-ratio-item-left-middle aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png"/>
</div>
```

### Aspect Ratio Background Images

<div class="row">
	<div class="col-3">
		<h6>aspect-ratio-bg-cover</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-cover" style="background-image: url(/images/thumbnail_hot_air_ballon.jpg);">
		</div>
	</div>
	<div class="col-3">
		<h6>aspect-ratio-bg-center</h6>
		<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-center" style="background-image: url(/images/liferay_logo_tagline.png);">
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-cover" style="background-image: url(/images/thumbnail_hot_air_ballon.jpg);">
</div>

<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-center" style="background-image: url(/images/liferay_logo_tagline.png);">
</div>
```

### Aspect Ratio with Other Things

<div class="row">
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
				<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#folder" />
				</svg>
			</div>
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
				Some ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossible Text?
			</div>
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
				<span class="rounded-circle sticker sticker-danger">133</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
		<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#folder" />
		</svg>
	</div>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
		Some ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossible Text?
	</div>
</div>

<div class="aspect-ratio aspect-ratio-16-to-9">
	<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
		<span class="rounded-circle sticker sticker-danger">133</span>
	</div>
</div>
```
