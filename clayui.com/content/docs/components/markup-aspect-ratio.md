---
title: 'Aspect Ratio'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Aspect Ratio](#css-aspect-ratio)
    -   [Sass API](#css-aspect-ratio-sass-api)
    -   [Bg Contain](#css-aspect-ratio-bg-contain)
    -   [Bg Cover](#css-aspect-ratio-bg-cover)
    -   [Bg Center](#css-aspect-ratio-bg-center)
-   [Aspect Ratio Item](#css-aspect-ratio-item)
    -   [Fluid](#css-aspect-ratio-item-fluid)
    -   [Vertical Fluid](#css-aspect-ratio-item-vertical-fluid)
    -   [Flush](#css-aspect-ratio-item-flush)
    -   [Vertical Flush](#css-aspect-ratio-item-vertical-flush)
    -   [Center Middle](#css-aspect-ratio-item-center-middle)
    -   [Top Center](#css-aspect-ratio-item-top-center)
    -   [Top Right](#css-aspect-ratio-item-top-right)
    -   [Right Middle](#css-aspect-ratio-item-right-middle)
    -   [Bottom Right](#css-aspect-ratio-item-bottom-right)
    -   [Bottom Center](#css-aspect-ratio-item-bottom-center)
    -   [Bottom Left](#css-aspect-ratio-item-bottom-left)
    -   [Left Middle](#css-aspect-ratio-item-left-middle)

</div>
</div>

## Aspect Ratio(#css-aspect-ratio)

Sometimes you can't control the size of an image, you can constrain your images with aspect-ratios. The base class `aspect-ratio` maintains a 1 to 1 ratio relative to its container's width.

Use `aspect-ratio-3-to-2`, `aspect-ratio-4-to-3`, `aspect-ratio-8-to-3`, `aspect-ratio-8-to-5`, or `aspect-ratio-16-to-9` to maintain the specific ratio relative to its container or create your own by setting `padding-bottom` to the ratio you want e.g. 2 to 1 `.aspect-ratio-2-to-1 { padding-bottom: 50% }`.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<h6>1:1</h6>
			<div class="aspect-ratio bg-light"></div>
		</div>
		<div class="col-3">
			<h6>3:2</h6>
			<div class="aspect-ratio aspect-ratio-3-to-2 bg-light"></div>
		</div>
		<div class="col-3">
			<h6>4:3</h6>
			<div class="aspect-ratio aspect-ratio-4-to-3 bg-light"></div>
		</div>
		<div class="col-3">
			<h6>8:3</h6>
			<div class="aspect-ratio aspect-ratio-8-to-3 bg-light"></div>
		</div>
		<div class="col-3">
			<h6>8:5</h6>
			<div class="aspect-ratio aspect-ratio-8-to-5 bg-light"></div>
		</div>
		<div class="col-3">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light"></div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio"></div>
<div class="aspect-ratio aspect-ratio-3-to-2"></div>
<div class="aspect-ratio aspect-ratio-4-to-3"></div>
<div class="aspect-ratio aspect-ratio-8-to-3"></div>
<div class="aspect-ratio aspect-ratio-8-to-5"></div>
<div class="aspect-ratio aspect-ratio-16-to-9"></div>
```

### Aspect Ratio Sass API(#css-aspect-ratio-sass-api)

The map `$aspect-ratio-sizes` allows generating any number of aspect ratio variants. If a key starts with `.`, `#`, or '%' Clay will output it as is, otherwise we will prepend `.` to the key (e.g., `.aspect-ratio-16-to-9`). It will also generate a Sass placeholder prefixed by `%` (e.g., `%aspect-ratio-16-to-9`).

```scss{expanded}
$aspect-ratio-sizes: (
    aspect-ratio-16-to-9: (
        height: 9,
        width: 16,
    ),
    '.card .aspect-ratio': (
        extend: '%aspect-ratio-16-to-9',
    ),
    '%aspect-ratio-4-to-1': (
        height: 1,
        width: 4,
    ),
    '.aspect-ratio-4-to-1': (
        extend: '%aspect-ratio-4-to-1',
    ),
);
```

Outputs:

```css{expanded}
.aspect-ratio-16-to-9, .card .aspect-ratio {
    padding-bottom: calc(9 / 16 * 100%);
}

.aspect-ratio-4-to-1 {
    padding-bottom: calc(1 / 4 * 100%);
}
```

### Aspect Ratio Bg Contain(#css-aspect-ratio-bg-contain)

The class `aspect-ratio-bg-contain` on `aspect-ratio` centers the `background-image` and scales the image as large as possible without cropping or stretching the image.

<div class="sheet-example">
	<div class="row">
		<div class="col-12">
			<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-contain bg-light" style="background-image: url(/images/thumbnail_hot_air_ballon.jpg);"></div>
		</div>
	</div>
</div>

```html
<div
	class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-contain"
	style="background-image: url(/images/thumbnail_hot_air_ballon.jpg);"
></div>
```

### Aspect Ratio Bg Cover(#css-aspect-ratio-bg-cover)

The class `aspect-ratio-bg-cover` on `aspect-ratio` centers the `background-image` and scales the image to fill the container. It will stretch and change the proportions of the image to achieve this.

<div class="sheet-example">
	<div class="row">
		<div class="col-12">
			<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-cover bg-light" style="background-image: url(/images/thumbnail_hot_air_ballon.jpg);"></div>
		</div>
	</div>
</div>

```html
<div
	class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-cover bg-light"
	style="background-image: url(/images/thumbnail_hot_air_ballon.jpg);"
></div>
```

### Aspect Ratio Bg Center(#css-aspect-ratio-bg-center)

The class `aspect-ratio-bg-center` on `aspect-ratio` will center the `background-image`.

<div class="sheet-example">
	<div class="row">
		<div class="col-12">
			<div class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-center bg-light" style="background-image: url(/images/liferay_logo_tagline.png);"></div>
		</div>
	</div>
</div>

```html
<div
	class="aspect-ratio aspect-ratio-16-to-9 aspect-ratio-bg-center"
	style="background-image: url(/images/liferay_logo_tagline.png);"
></div>
```

## Aspect Ratio Item(#css-aspect-ratio-item)

Use `aspect-ratio-item` on the nested `img` if you want to keep the content's original size and crop the visible area.

<div class="sheet-example">
	<div class="row">
		<div class="col-5">
			<div class="aspect-ratio aspect-ratio-4-to-3 bg-light">
				<img alt="thumbnail" class=" aspect-ratio-item" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-4-to-3">
	<img
		alt="thumbnail"
		class=" aspect-ratio-item"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
```

### Aspect Ratio Item Fluid(#css-aspect-ratio-item-fluid)

The class `aspect-ratio-item-fluid` should be used on `aspect-ratio-item` to keep wide images viewable inside the `aspect-ratio` container. It sets the max-width to be 100%, similar to `img-fluid`.

<div class="sheet-example">
	<h6>Original Image</h6>
	<img alt="thumbnail of a hot air balloon" class="img-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
	<div class="row">
		<div class="col-3">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
		<div class="col-3">
			<h6>1:1</h6>
			<div class="aspect-ratio bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
		<div class="col-3">
			<h6>3:2</h6>
			<div class="aspect-ratio aspect-ratio-3-to-2 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
		<div class="col-3">
			<h6>4:3</h6>
			<div class="aspect-ratio aspect-ratio-4-to-3 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
		<div class="col-3">
			<h6>8:3</h6>
			<div class="aspect-ratio aspect-ratio-8-to-3 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
		<div class="col-3">
			<h6>8:5</h6>
			<div class="aspect-ratio aspect-ratio-8-to-5 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
		<div class="col-3">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/thumbnail_hot_air_ballon.jpg"/>
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio aspect-ratio-3-to-2">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio aspect-ratio-4-to-3">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio aspect-ratio-8-to-3">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio aspect-ratio-8-to-5">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
```

### Aspect Ratio Item Vertical Fluid(#css-aspect-ratio-item-vertical-fluid)

The class `aspect-ratio-item-vertical-fluid` should be used on `aspect-ratio-item` to keep tall images viewable inside the `aspect-ratio` container. It sets the max-height to be 100%.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<h6>1:1</h6>
			<div class="aspect-ratio bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-vertical-fluid" src="/images/long_user_image.png">
			</div>
		</div>
		<div class="col-3">
			<h6>3:2</h6>
			<div class="aspect-ratio aspect-ratio-3-to-2 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-vertical-fluid" src="/images/long_user_image.png">
			</div>
		</div>
		<div class="col-3">
			<h6>4:3</h6>
			<div class="aspect-ratio aspect-ratio-4-to-3 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-vertical-fluid" src="/images/long_user_image.png">
			</div>
		</div>
		<div class="col-3">
			<h6>8:3</h6>
			<div class="aspect-ratio aspect-ratio-8-to-3 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-vertical-fluid" src="/images/long_user_image.png">
			</div>
		</div>
		<div class="col-3">
			<h6>8:5</h6>
			<div class="aspect-ratio aspect-ratio-8-to-5 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-vertical-fluid" src="/images/long_user_image.png">
			</div>
		</div>
		<div class="col-3">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-vertical-fluid" src="/images/long_user_image.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-vertical-fluid"
		src="/images/long_user_image.png"
	/>
</div>
<div class="aspect-ratio aspect-ratio-3-to-2">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-vertical-fluid"
		src="/images/long_user_image.png"
	/>
</div>
<div class="aspect-ratio aspect-ratio-4-to-3">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-vertical-fluid"
		src="/images/long_user_image.png"
	/>
</div>
<div class="aspect-ratio aspect-ratio-8-to-3">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-vertical-fluid"
		src="/images/long_user_image.png"
	/>
</div>
<div class="aspect-ratio aspect-ratio-8-to-5">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-vertical-fluid"
		src="/images/long_user_image.png"
	/>
</div>
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-vertical-fluid"
		src="/images/long_user_image.png"
	/>
</div>
```

### Aspect Ratio Item Flush(#css-aspect-ratio-item-flush)

The class `aspect-ratio-item-flush` should be used for images that are too narrow and want it to fill the remaining space. It forces the width to be 100.6%.

<div class="clay-site-alert alert alert-info">
	The 100.6% width is to account for browser subpixel rendering issues.
</div>

<div class="sheet-example">
	<div class="row">
		<div class="col-6">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush" src="/images/thumbnail_hot_air_ballon.jpg">
			</div>
		</div>
		<div class="col-6">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush"
		src="/images/thumbnail_hot_air_ballon.jpg"
	/>
</div>
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Vertical Flush(#css-aspect-ratio-item-vertical-flush)

The class `aspect-ratio-item-vertical-flush` should be used for images that are too short and want it to fill the remaining vertical space. It forces the height to be 100.6%.

<div class="clay-site-alert alert alert-info">
	The 100.6% height is to account for browser subpixel rendering issues.
</div>

<div class="sheet-example">
	<div class="row">
		<div class="col-6">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-vertical-flush" src="/images/thumbnail_dock.jpg">
			</div>
		</div>
		<div class="col-6">
			<h6>16:9</h6>
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-vertical-flush" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-vertical-flush"
		src="/images/thumbnail_graph2.png"
	/>
</div>
<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-vertical-flush"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Center Middle(#css-aspect-ratio-item-center-middle)

The class `aspect-ratio-item-center-middle` centers an item horizontally and vertically.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Top Center(#css-aspect-ratio-item-top-center)

The class `aspect-ratio-item-top-center` vertically aligns the item at the top and centers it horizontally.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-top-center aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-top-center aspect-ratio-item-fluid"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Top Right(#css-aspect-ratio-item-top-right)

The class `aspect-ratio-item-top-right` aligns the item at the top right corner.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid aspect-ratio-item-top-right" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid aspect-ratio-item-top-right"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Right Middle(#css-aspect-ratio-item-right-middle)

The class `aspect-ratio-item-right-middle` aligns an item in the middle vertically and right side horizontally.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-fluid aspect-ratio-item-right-middle" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-fluid aspect-ratio-item-right-middle"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Bottom Right(#css-aspect-ratio-item-bottom-right)

The class `aspect-ratio-item-bottom-right` aligns an item at the bottom right corner.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-bottom-right aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-bottom-right aspect-ratio-item-fluid"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Bottom Center(#css-aspect-ratio-item-bottom-center)

The class `aspect-ratio-item-bottom-center` aligns an item at the bottom vertically and centers it horizontally.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-bottom-center aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-bottom-center aspect-ratio-item-fluid"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Bottom Left(#css-aspect-ratio-item-bottom-left)

The class `aspect-ratio-item-bottom-left` aligns an item at the bottom left corner.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-bottom-left aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-bottom-left aspect-ratio-item-fluid"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```

### Aspect Ratio Item Left Middle(#css-aspect-ratio-item-left-middle)

The class `aspect-ratio-item-left-middle` aligns an item on the left horizontally and in the middle vertically.

<div class="sheet-example">
	<div class="row">
		<div class="col-3">
			<div class="aspect-ratio aspect-ratio-16-to-9 bg-light">
				<img alt="thumbnail" class="aspect-ratio-item aspect-ratio-item-left-middle aspect-ratio-item-fluid" src="/images/liferay_logo_tagline.png">
			</div>
		</div>
	</div>
</div>

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img
		alt="thumbnail"
		class="aspect-ratio-item aspect-ratio-item-left-middle aspect-ratio-item-fluid"
		src="/images/liferay_logo_tagline.png"
	/>
</div>
```
