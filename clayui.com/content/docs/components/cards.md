---
title: "Cards"
---

### Description

Cards are a very specific visual representation of data.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/cards.html">Cards Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-image-card">

### Image card

> Used in image/document galleries.

#### Default

<div class="row">
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
							<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
							<span class="sticker sticker-bottom-left sticker-danger rounded-circle">JPG</span>
						</label>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col autofit-col-expand">
							<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
							<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
							<div class="card-detail">
								<span class="label label-success">
									<span class="label-item label-item-expand">Approved</span>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayImageCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param imageAlt: 'thumbnail' /}
	{param imageSrc: '/images/thumbnail_coffee.jpg' /}
	{param labels: [
		[
			'label': 'Approved',
			'style': 'success'
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param stickerLabel: 'JPG' /}
	{param stickerShape: 'danger' /}
	{param stickerStyle: 'danger' /}
	{param subtitle: 'Author Action' /}
	{param title: 'thumbnail_coffee.jpg' /}
{/call}
```
```html
<clay-image-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	imageAlt="thumbnail"
	imageSrc="/images/thumbnail_coffee.jpg"
	labels='[{"label": "Approved", "style": "success"}]'
	selectable="true"
	spritemap="/images/icons/icons.svg"
	stickerLabel="JPG"
	stickerShape="circle"
	stickerStyle="danger"
	subtitle="Author Action"
	title="thumbnail_coffee.jpg">
</clay-image-card>
```
```html
<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
	<div class="card">
		<div class="aspect-ratio card-item-first">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
					<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
					<span class="sticker sticker-bottom-left sticker-danger rounded-circle">JPG</span>
				</label>
			</div>
		</div>
		<div class="card-body">
			<div class="card-row">
				<div class="autofit-col autofit-col-expand">
					<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
					<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
					<div class="card-detail">
						<span class="label label-success">
							<span class="label-item label-item-expand">Approved</span>
						</span>
					</div>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Active

<div class="row">
	<div class="col-md-4">
		<div class="active card-type-asset form-check form-check-card form-check-top-left image-card">
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" checked="true">
							<span class="custom-control-label"></span>
							<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
							<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
						</label>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col autofit-col-expand">
							<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
							<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
							<div class="card-detail">
								<span class="label label-success">
									<span class="label-item label-item-expand">Approved</span>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayImageCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param imageAlt: 'thumbnail' /}
	{param imageSrc: '/images/thumbnail_coffee.jpg' /}
	{param labels: [
		[
			'label': 'Approved',
			'style': 'success'
		]
	] /}
	{param selectable: true /}
	{param selected: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param subtitle: 'Author Action' /}
	{param stickerLabel: 'JPG' /}
	{param stickerStyle: 'danger' /}
	{param title: 'thumbnail_coffee.jpg' /}
{/call}
```
```html
<clay-image-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	imageAlt="thumbnail"
	imageSrc="/images/thumbnail_coffee.jpg"
	labels='[{"label": "Approved", "style": "success"}]'
	selectable="true"
	selected="true"
	spritemap="/images/icons/icons.svg"
	stickerLabel="JPG"
	stickerStyle="danger"
	subtitle="Author Action"
	title="thumbnail_coffee.jpg">
</clay-image-card>
```
```html
<div class="active card-type-asset form-check form-check-card form-check-top-left image-card">
	<div class="card">
		<div class="aspect-ratio card-item-first">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" checked="true">
					<span class="custom-control-label"></span>
					<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
					<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
				</label>
			</div>
		</div>
		<div class="card-body">
			<div class="card-row">
				<div class="autofit-col autofit-col-expand">
					<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
					<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
					<div class="card-detail">
						<span class="label label-success">
							<span class="label-item label-item-expand">Approved</span>
						</span>
					</div>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Empty

<div class="row">
	<div class="col-md-4">
		<div class="card card-type-asset image-card">
			<div class="aspect-ratio card-item-first">
				<span class="sticker sticker-bottom-left sticker-info">PNG</span>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="autofit-col autofit-col-expand">
						<div class="card-title text-truncate" title="empty-background.png">empty-background.png</div>
						<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
						<div class="card-detail">
							<span class="label label-danger">
								<span class="label-item label-item-expand">Rejected</span>
							</span>
						</div>
					</div>
					<div class="autofit-col">
						<div class="dropdown dropdown-action">
							<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayImageCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param labels: [
		[
			'label': 'Rejected',
			'style': 'danger'
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param stickerLabel: 'PNG' /}
	{param stickerStyle: 'info' /}
	{param subtitle: 'Author Action' /}
	{param title: 'empty-background.png' /}
{/call}
```
```html
<clay-image-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	labels='[{"label": "Rejected", "style": "danger"}]'
	selectable="true"
	spritemap="/images/icons/icons.svg"
	stickerLabel="PNG"
	stickerStyle="info"
	subtitle="Author Action"
	title="thumbnail_coffee.jpg">
</clay-image-card>
```
```html
<div class="card card-type-asset image-card">
	<div class="aspect-ratio card-item-first">
		<span class="sticker sticker-bottom-left sticker-info">PNG</span>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="autofit-col autofit-col-expand">
				<div class="card-title text-truncate" title="empty-background.png">empty-background.png</div>
				<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
				<div class="card-detail">
					<span class="label label-danger">
						<span class="label-item label-item-expand">Rejected</span>
					</span>
				</div>
			</div>
			<div class="autofit-col">
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### IMAGE WITH DIFFERENT RATIOS

> It is important to highlight that images can have different sizes. To provide the end user with that relevant data about the image Lexicon incorporates cards that allow this feature.

<div class="row">
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
							<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-camera">
									<use xlink:href="/images/icons/icons.svg#camera" />
								</svg>
							</div>
							<span class="sticker sticker-bottom-left sticker-warning">SVG</span>
						</label>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col autofit-col-expand">
							<div class="card-title text-truncate" title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg">lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg</div>
							<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
							<div class="card-detail">
								<span class="label label-success">
									<span class="label-item label-item-expand">Approved</span>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card card-type-asset image-card">
			<div class="aspect-ratio bg-checkered card-item-first">
				<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
				<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="autofit-col autofit-col-expand">
						<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
						<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayImageCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param icon: 'camera' /}
	{param labels: [
		[
			'label': 'Approved',
			'style': 'success'
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param stickerLabel: 'SVG' /}
	{param stickerStyle: 'warning' /}
	{param subtitle: 'Author Action' /}
	{param title: 'lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg' /}
{/call}

{call ClayImageCard.render}
	{param imageAlt: 'thumbnail' /}
	{param imageSrc: '/images/thumbnail_coffee.jpg' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param stickerLabel: 'JPG' /}
	{param stickerStyle: 'danger' /}
	{param subtitle: 'Author Action' /}
	{param title: 'thumbnail_coffee.jpg' /}
{/call}
```
```html
<clay-image-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	icon="camera"
	labels='[{"label": "Approved", "style": "success"}]'
	selectable="true"
	spritemap="/images/icons/icons.svg"
	stickerLabel="SVG"
	stickerStyle="warning"
	subtitle="Author Action"
	title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.jpg">
</clay-image-card>

<clay-image-card
	imageAlt="thumbnail"
	imageSrc="/images/thumbnail_coffee.jpg"
	spritemap="/images/icons/icons.svg"
	stickerLabel="JPG"
	stickerStyle="danger"
	subtitle="Author Action"
	title="thumbnail_coffee.jpg">
</clay-image-card>
```
```html
<div class="card-type-asset form-check form-check-card form-check-top-left image-card">
	<div class="card">
		<div class="aspect-ratio card-item-first">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
					<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-camera">
							<use xlink:href="/images/icons/icons.svg#camera" />
						</svg>
					</div>
					<span class="sticker sticker-bottom-left sticker-warning">SVG</span>
				</label>
			</div>
		</div>
		<div class="card-body">
			<div class="card-row">
				<div class="autofit-col autofit-col-expand">
					<div class="card-title text-truncate" title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg">lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg</div>
					<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
					<div class="card-detail">
						<span class="label label-success">
							<span class="label-item label-item-expand">Approved</span>
						</span>
					</div>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="card card-type-asset">
	<div class="aspect-ratio bg-checkered card-item-first">
		<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
		<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="autofit-col autofit-col-expand">
				<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
				<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="clay-image-card-api">

#### API

<div>
	[APITable "clay-card/src/ClayImageCard.js"]
</div>

</article>

<article id="clay-user-card">

### User card

> User card is used to represent users. The user can be represented by its user image or up to two initials extracted from the uses name or name + surname.

<div class="row">
	<div class="col-md-4">
		<div class="card card-type-asset user-card">
			<div class="aspect-ratio card-item-first">
				<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
					<span class="sticker sticker-danger sticker-xl">
						<span class="sticker-overlay">HS</span>
					</span>
				</div>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="autofit-col autofit-col-expand">
						<div class="card-title text-truncate" title="User Name">User Name</div>
						<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left user-card">
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
							<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<span class="sticker sticker-danger sticker-xl">
									<span class="sticker-overlay">HS</span>
								</span>
							</div>
						</label>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col autofit-col-expand">
							<div class="card-title text-truncate" title="User Name">User Name</div>
							<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayUserCard.render}
	{param initials: 'HS' /}
	{param name: 'User Name' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param subtitle: 'Latest Action' /}
	{param userColor: 'danger' /}
{/call}

{call ClayUserCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param initials: 'HS' /}
	{param name: 'User Name' /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param subtitle: 'Latest Action' /}
	{param userColor: 'danger' /}
{/call}
```
```html
<clay-user-card
	initials="HS"
	name="User Name"
	spritemap="/images/icons/icons.svg"
	subtitle="Latest Action"
	userColor="danger">
</clay-user-card>

<clay-user-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	initials="HS"
	name="User Name"
	selectable="true"
	spritemap="/images/icons/icons.svg"
	subtitle="Latest Action"
	userColor="danger">
</clay-user-card>
```
```html
<div class="card card-type-asset user-card">
	<div class="aspect-ratio card-item-first">
		<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
			<span class="sticker sticker-danger sticker-xl">
				<span class="sticker-overlay">HS</span>
			</span>
		</div>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="autofit-col autofit-col-expand">
				<div class="card-title text-truncate" title="User Name">User Name</div>
				<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
			</div>
		</div>
	</div>
</div>

<div class="card-type-asset form-check form-check-card form-check-top-left user-card">
	<div class="card">
		<div class="aspect-ratio card-item-first">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
					<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<span class="sticker sticker-danger sticker-xl">
							<span class="sticker-overlay">HS</span>
						</span>
					</div>
				</label>
			</div>
		</div>
		<div class="card-body">
			<div class="card-row">
				<div class="autofit-col autofit-col-expand">
					<div class="card-title text-truncate" title="User Name">User Name</div>
					<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="clay-user-card-api">

#### API

<div>
	[APITable "clay-card/src/ClayUserCard.js"]
</div>

</article>

<article id="clay-file-card">

### File card

> File card is used to represent files different to images.

<div class="row">
	<div class="col-md-4">
		<div class="card card-type-asset file-card">
			<div class="aspect-ratio card-item-first">
				<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
						<use xlink:href="/images/icons/icons.svg#documents-and-media" />
					</svg>
				</div>
				<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="autofit-col autofit-col-expand">
						<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
						<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
						<div class="card-detail">
							<span class="label label-success">
								<span class="label-item label-item-expand">Approved</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left file-card">
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
							<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
									<use xlink:href="/images/icons/icons.svg#documents-and-media" />
								</svg>
							</div>
							<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
						</label>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col autofit-col-expand">
							<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
							<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
							<div class="card-detail">
								<span class="label label-success">
									<span class="label-item label-item-expand">Approved</span>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayFileCard.render}
	{param icon: 'documents-and-media' /}
	{param labels: [
		[
			'label': 'Approved',
			'style': 'success'
		]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param stickerLabel: 'DOC' /}
	{param stickerStyle: 'danger' /}
	{param subtitle: 'Stevie Ray Vaughn' /}
	{param title: 'deliverable.doc' /}
{/call}

{call ClayFileCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param icon: 'documents-and-media' /}
	{param labels: [
		[
			'label': 'Approved',
			'style': 'success'
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param stickerLabel: 'DOC' /}
	{param stickerStyle: 'danger' /}
	{param subtitle: 'Stevie Ray Vaughn' /}
	{param title: 'deliverable.doc' /}
{/call}
```
```html
<clay-file-card
	icon="documents-and-media"
	labels='[{"label": "Approved", "style": "success"}]'
	spritemap="/images/icons/icons.svg"
	stickerLabel="DOC"
	stickerStyle="danger"
	subtitle="Stevie Ray Vaughn"
	title="deliverable.doc">
</clay-file-card>

<clay-file-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	icon="documents-and-media"
	labels='[{"label": "Approved", "style": "success"}]'
	selectable="true"
	spritemap="/images/icons/icons.svg"
	stickerLabel="DOC"
	stickerStyle="danger"
	subtitle="Stevie Ray Vaughn"
	title="deliverable.doc">
</clay-file-card>
```
```html
<div class="card card-type-asset file-card">
	<div class="aspect-ratio card-item-first">
		<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
				<use xlink:href="/images/icons/icons.svg#documents-and-media" />
			</svg>
		</div>
		<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="autofit-col autofit-col-expand">
				<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
				<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
				<div class="card-detail">
					<span class="label label-success">
						<span class="label-item label-item-expand">Approved</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="card-type-asset form-check form-check-card form-check-top-left file-card">
	<div class="card">
		<div class="aspect-ratio card-item-first">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
					<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
							<use xlink:href="/images/icons/icons.svg#documents-and-media" />
						</svg>
					</div>
					<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
				</label>
			</div>
		</div>
		<div class="card-body">
			<div class="card-row">
				<div class="autofit-col autofit-col-expand">
					<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
					<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
					<div class="card-detail">
						<span class="label label-success">
							<span class="label-item label-item-expand">Approved</span>
						</span>
					</div>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="clay-file-card-api">

#### API

<div>
	[APITable "clay-card/src/ClayFileCard.js"]
</div>

</article>

<article id="clay-folder-card">

### Folder card

> This card variation is meant to have horizontal representations of information. This card has the same amount of elements as the previous explained. The main purpose of this card is to represent folders, therefore we allow to remove the image in this card type. In this case, only the checkbox is used to select.

<div class="row">
	<div class="col-md-4">
		<div class="card card-horizontal card-type-directory">
			<div class="card-body">
				<div class="card-row">
					<div class="autofit-col">
						<span class="sticker">
							<span class="inline-item">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
									<use xlink:href="/images/icons/icons.svg#folder" />
								</svg>
							</span>
						</span>
					</div>
					<div class="autofit-col autofit-col-expand autofit-col-gutters">
						<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card-type-directory form-check form-check-card form-check-middle-left">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
					<div class="card card-horizontal">
						<div class="card-body">
							<div class="card-row">
								<div class="autofit-col">
									<span class="sticker">
										<span class="inline-item">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
												<use xlink:href="/images/icons/icons.svg#folder" />
											</svg>
										</span>
									</span>
								</div>
								<div class="autofit-col autofit-col-expand autofit-col-gutters">
									<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
								</div>
								<div class="autofit-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#1">Download</a>
											<a class="dropdown-item" href="#1">Edit</a>
											<a class="dropdown-item" href="#1">Move</a>
											<a class="dropdown-item" href="#1">Checkout</a>
											<a class="dropdown-item" href="#1">Permissions</a>
											<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</label>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayHorizontalCard.render}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual' /}
{/call}

{call ClayHorizontalCard.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Save'
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual' /}
{/call}
```
```html
<clay-horizontal-card
	spritemap="/images/icons/icons.svg"
	title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
</clay-horizontal-card>

<clay-horizontal-card
	actionItems='[{"href": "#1", "label": "Edit", "separator": true}, {"href": "#1", "label": "Save"}]'
	selectable="true"
	spritemap="/images/icons/icons.svg"
	title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
</clay-horizontal-card>
```
```html
<div class="card card-horizontal card-type-directory">
	<div class="card-body">
		<div class="card-row">
			<div class="flex-col">
				<span class="sticker">
					<span class="inline-item">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
							<use xlink:href="/images/icons/icons.svg#folder" />
						</svg>
					</span>
				</span>
			</div>
			<div class="autofit-col autofit-col-expand autofit-col-gutters">
				<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
			</div>
		</div>
	</div>
</div>

<div class="card-type-directory form-check form-check-card form-check-middle-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
			<span class="custom-control-label"></span>
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="autofit-col">
							<span class="sticker">
								<span class="inline-item">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
										<use xlink:href="/images/icons/icons.svg#folder" />
									</svg>
								</span>
							</span>
						</div>
						<div class="autofit-col autofit-col-expand autofit-col-gutters">
							<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</label>
	</div>
</div>
```

</article>

<article id="clay-horizontal-card-api">

#### API

<div>
	[APITable "clay-card/src/ClayHorizontalCard.js"]
</div>

</article>