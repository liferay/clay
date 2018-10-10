---
title: "Images and Thumbnails"
---

### Responsive Image

<p>Add the <code>.img-fluid</code> class to an image to make it expand to the width of its container.</p>

<div class="row">
	<div class="col-6 col-sm-3">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif" />
	</div>
	<div class="col-3 col-sm-2">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif" />
	</div>
</div>

```html
<div class="col-6 col-sm-3">
	<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif" />
</div>
<div class="col-3 col-sm-2">
	<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif" />
</div>
```

### Image Shapes

<p>Add the <code>.rounded</code>, <code>.rounded-circle</code>, or <code>.img-thumbnail</code> classes to an <code>img</code> to quickly style the borders.</p>

<p>The <code>.rounded-0</code> class removes the <code>border-radius</code> styles.</p>

<div class="row">
	<div class="col-4">
		<img alt="responsive image with rounded edges" class="img-fluid rounded" src="/images/thumbnail_placeholder.gif"/>
	</div>
	<div class="col-4">
		<img alt="responsive circle image" class="img-fluid rounded-circle" src="/images/thumbnail_placeholder.gif"/>
	</div>
	<div class="col-4">
		<img alt="responsive thumbnail image" class="img-fluid img-thumbnail" src="/images/thumbnail_placeholder.gif"/>
	</div>
</div>

```html
<div class="col-4">
	<img alt="responsive image with rounded edges" class="img-fluid rounded" src="/images/thumbnail_placeholder.gif"/>
</div>
<div class="col-4">
	<img alt="responsive circle image" class="img-fluid rounded-circle" src="/images/thumbnail_placeholder.gif"/>
</div>
<div class="col-4">
	<img alt="responsive thumbnail image" class="img-fluid img-thumbnail" src="/images/thumbnail_placeholder.gif"/>
</div>
```
