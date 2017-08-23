---
title: Images and Thumbnails
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
<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">

<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
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
<img alt="responsive image with rounded edges" class="img-fluid rounded" src="/images/thumbnail_placeholder.gif">

<img alt="responsive circle image" class="img-fluid rounded-circle" src="/images/thumbnail_placeholder.gif">

<img alt="responsive thumbnail image" class="img-fluid img-thumbnail" src="/images/thumbnail_placeholder.gif">
```

</article>