---
title: Images, Thumbnails, and Aspect Ratios
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Responsive Image

> Use `.img-fluid` to make an image fit with its container.

<div class="row">
	<div class="col-6 col-sm-3">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
	</div>
	<div class="col-3 col-sm-2">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
	</div>
</div>

```xml
<div class="row">
	<div class="col-6 col-sm-3">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
	</div>

	<div class="col-3 col-sm-2">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
	</div>
</div>
```

</article>

<article id="2">

### Image Shapes

> Use `.rounded`, `.rounded-circle`, or `.img-thumbnail` on ````<img>```` to quickly style the borders.

> `.rounded-0` will remove the `border-radius` styles.

<div class="row">
	<div class="col-4">
		<img alt="responsive image with rounded edges" class="img-fluid rounded" src="/images/thumbnail_placeholder.gif">
	</div>
	<div class="col-4">
		<img alt="responsive circle image" class="img-fluid rounded-circle" src="/images/thumbnail_placeholder.gif">
	</div>
	<div class="col-4">
		<img alt="responsive thumbnail image" class="img-fluid img-thumbnail" src="/images/thumbnail_placeholder.gif">
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<img alt="responsive image with rounded edges" class="img-fluid rounded" src="/images/thumbnail_placeholder.gif">
	</div>

	<div class="col-4">
		<img alt="responsive circle image" class="img-fluid rounded-circle" src="/images/thumbnail_placeholder.gif">
	</div>

	<div class="col-4">
		<img alt="responsive thumbnail image" class="img-fluid img-thumbnail" src="/images/thumbnail_placeholder.gif">
	</div>
</div>
```

</article>

<article id="3">

### Image Aspect Ratios

> Sometimes you can't control the size of an image, define a specific size for your images with aspect-ratios. The base class `aspect-ratio` maintains a 1 to 1 ratio relative to its container's width, add class `aspect-ratio-vertical` to maintain a 1 to 1 ratio relative to its container's height.

> Use `aspect-ratio-3-to-2`, `aspect-ratio-4-to-3`, `aspect-ratio-8-to-5`, or `aspect-ratio-16-to-9` to maintain the specific ratio relative to its container or create your own by setting `padding-bottom` to the ratio you want e.g. 2 to 1 `.aspect-ratio-2-to-1 {lb} padding-bottom: 50% {rb}`.

</article>

<article id="4">

### Horizontal Aspect Ratio

<div class="row">
	<div class="col-3">
		<p>1:1</p>
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>3:2</p>
		<div class="aspect-ratio aspect-ratio-3-to-2">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>4:3</p>
		<div class="aspect-ratio aspect-ratio-4-to-3">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>8:5</p>
		<div class="aspect-ratio aspect-ratio-8-to-5">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

<div class="row">
	<div class="col-3">
		<p>16:9</p>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-3">
		<p>1:1</p>
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>3:2</p>
		<div class="aspect-ratio aspect-ratio-3-to-2">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>4:3</p>
		<div class="aspect-ratio aspect-ratio-4-to-3">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>8:5</p>
		<div class="aspect-ratio aspect-ratio-8-to-5">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

<div class="row">
	<div class="col-3">
		<p>16:9</p>
		<div class="aspect-ratio aspect-ratio-16-to-9">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>
```

</article>

<article id="5">

### Vertical Aspect Ratio

<div class="row">
	<div class="col-3">
		<p>1:1</p>
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>3:2</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-3-to-2">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>4:3</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-4-to-3">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>8:5</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-8-to-5">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

<div class="row">
	<div class="col-3">
		<p>16:9</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-16-to-9">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-3">
		<p>1:1</p>
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>3:2</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-3-to-2">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>4:3</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-4-to-3">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-3">
		<p>8:5</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-8-to-5">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

<div class="row">
	<div class="col-3">
		<p>16:9</p>
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-16-to-9">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>
```

</article>

<article id="6">

### Horizontal 1:1 Aspect Ratio with Varying Image Sizes

<div class="row">
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_graph1.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_graph2.png">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_graph1.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_graph2.png">
		</div>
	</div>
</div>
```

> Images inside `aspect-ratio` are aligned bottom by default. Use class `aspect-ratio-top` or `aspect-ratio-middle` to align top or vertically center, respectively.

<div class="row">
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_graph1.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-top">
			<img alt="thumbnail" src="/images/thumbnail_graph1.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-middle">
			<img alt="thumbnail" src="/images/thumbnail_graph2.png">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<div class="aspect-ratio">
			<img alt="thumbnail" src="/images/thumbnail_graph1.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-top">
			<img alt="thumbnail" src="/images/thumbnail_graph1.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-middle">
			<img alt="thumbnail" src="/images/thumbnail_graph2.png">
		</div>
	</div>
</div>
```

</article>

<article id="7">

### Vertical 1:1 Aspect Ratio with Varying Image Sizes

<div class="row">
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/thumbnail_graph2.png">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/thumbnail_graph2.png">
		</div>
	</div>
</div>
```

> Images inside `aspect-ratio-vertical` are aligned left by default. Use class `aspect-ratio-right` or `aspect-ratio-center` to align right or horizontally center, respectively.

<div class="row">
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-right ">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-center">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-right ">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
	<div class="col-4">
		<div class="aspect-ratio aspect-ratio-vertical aspect-ratio-center">
			<img alt="thumbnail" src="/images/switch_components.png">
		</div>
	</div>
</div>
```

</article>

<article id="8">

### Crop Img

> Use the component `crop-img` to crop an image based on its container size, the container's position must be set to relative, absolute, or fixed, or set width and height on `crop-img` directly.

<div class="crop-img" style="width:150px;height:150px;">
	<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
</div>

```xml
<div class="crop-img" style="width:150px;height:150px;">
	<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
</div>
```

</article>

<article id="9">

### Horizontal Crop Img Alignment

> Horizontally align the image inside crop-img with classes `crop-img-center` and `crop-img-right`, default alignment is to the left.

<div class="row">
	<div class="col-4">
		<h6>Default</h6>
		<div class="crop-img" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<h6>Center</h6>
		<div class="crop-img crop-img-center" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<h6>Right</h6>
		<div class="crop-img crop-img-right" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<h6>Default</h6>
		<div class="crop-img" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>

	<div class="col-4">
		<h6>Center</h6>
		<div class="crop-img crop-img-center" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>

	<div class="col-4">
		<h6>Right</h6>
		<div class="crop-img crop-img-right" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>
```

</article>

<article id="10">

### Vertical Crop Img Alignment

> Vertically align the image inside crop-img with classes `crop-img-middle` and `crop-img-bottom`, default alignment is to the top.

<div class="row">
	<div class="col-4">
		<h6>Default</h6>
		<div class="crop-img" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<h6>Middle</h6>
		<div class="crop-img crop-img-middle" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
	<div class="col-4">
		<h6>Bottom</h6>
		<div class="crop-img crop-img-bottom" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>

```xml
<div class="row">
	<div class="col-4">
		<h6>Default</h6>
		<div class="crop-img" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>

	<div class="col-4">
		<h6>Middle</h6>
		<div class="crop-img crop-img-middle" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>

	<div class="col-4">
		<h6>Bottom</h6>
		<div class="crop-img crop-img-bottom" style="width:150px;height:150px;">
			<img alt="thumbnail" src="/images/thumbnail_hot_air_ballon.jpg">
		</div>
	</div>
</div>
```

</article>

