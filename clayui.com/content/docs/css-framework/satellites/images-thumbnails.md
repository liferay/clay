---
title: "Images and Thumbnails"
---

<article>

### Responsive Image

<p>Use <code>.img-fluid</code> to make an image fit with its container.</p>

<div class="row">
	<div class="col-6 col-sm-3">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
	</div>
	<div class="col-3 col-sm-2">
		<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
	</div>
</div>

```html
<div class="col-6 col-sm-3">
	<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
</div>
<div class="col-3 col-sm-2">
	<img alt="responsive image" class="img-fluid" src="/images/thumbnail_placeholder.gif">
</div>
```

</article>

<article>

### Image Shapes

<p>Use <code>.rounded</code>, <code>.rounded-circle</code>, or <code>.img-thumbnail</code> on <code>img</code> to quickly style the borders.</p>

<p><code>.rounded-0</code> will remove the <code>border-radius</code> styles.</p>

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

```html
<div class="col-4">
	<img alt="responsive image with rounded edges" class="img-fluid rounded" src="/images/thumbnail_placeholder.gif">
</div>
<div class="col-4">
	<img alt="responsive circle image" class="img-fluid rounded-circle" src="/images/thumbnail_placeholder.gif">
</div>
<div class="col-4">
	<img alt="responsive thumbnail image" class="img-fluid img-thumbnail" src="/images/thumbnail_placeholder.gif">
</div>
```

</article>