---
title: Cards
description: "Cards are a very specific visual representation of data."
layout: "guide"
pattern: "cards"
weight: 100
---


### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="card-type-asset-image-card">

### Image card

> Used in image/document galleries.

#### Default

<div class="row">
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<div class="card">
						<div class="aspect-ratio bg-checkered card-item-first">
							<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
							<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
						</div>
						<div class="card-body">
							<div class="card-row">
								<div class="flex-col flex-col-expand">
									<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
									<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
									<div class="card-detail">
										<span class="label label-success">Approved</span>
									</div>
								</div>
								<div class="flex-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

```text/html
<div class="card-type-asset form-check form-check-card form-check-top-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
			<span class="custom-control-indicator"></span>
			<div class="card">
				<div class="aspect-ratio bg-checkered card-item-first">
					<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
					<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col flex-col-expand">
							<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
							<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
							<div class="card-detail">
								<span class="label label-success">Approved</span>
							</div>
						</div>
						<div class="flex-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

#### Active

<div class="row">
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" checked="true">
					<span class="custom-control-indicator"></span>
					<div class="card">
						<div class="aspect-ratio bg-checkered card-item-first">
							<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
							<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
						</div>
						<div class="card-body">
							<div class="card-row">
								<div class="flex-col flex-col-expand">
									<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
									<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
									<div class="card-detail">
										<span class="label label-success">Approved</span>
									</div>
								</div>
								<div class="flex-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

```text/html
<div class="card-type-asset form-check form-check-card form-check-top-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox" checked="true">
			<span class="custom-control-indicator"></span>
			<div class="card">
				<div class="aspect-ratio bg-checkered card-item-first">
					<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
					<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col flex-col-expand">
							<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
							<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
							<div class="card-detail">
								<span class="label label-success">Approved</span>
							</div>
						</div>
						<div class="flex-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

#### Empty

<div class="row">
	<div class="col-md-4">
		<div class="card card-type-asset">
			<div class="aspect-ratio bg-checkered card-item-first">
				<span class="sticker sticker-bottom-left sticker-info">PNG</span>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col flex-col-expand">
						<div class="card-title text-truncate" title="empty-background.png">empty-background.png</div>
						<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
						<div class="card-detail">
							<span class="label label-danger">Rejected</span>
						</div>
					</div>
					<div class="flex-col">
						<div class="dropdown dropdown-action">
							<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

```text/html
<div class="card card-type-asset">
	<div class="aspect-ratio bg-checkered card-item-first">
		<span class="sticker sticker-bottom-left sticker-info">PNG</span>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="flex-col flex-col-expand">
				<div class="card-title text-truncate" title="empty-background.png">empty-background.png</div>
				<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
				<div class="card-detail">
					<span class="label label-danger">Rejected</span>
				</div>
			</div>
			<div class="flex-col">
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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
		<div class="card-type-asset form-check form-check-card form-check-top-left">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<div class="card">
						<div class="aspect-ratio bg-checkered card-item-first">
							<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-camera">
									<use xlink:href="/vendor/lexicon/icons.svg#camera" />
								</svg>
							</div>
							<span class="sticker sticker-bottom-left sticker-warning">SVG</span>
						</div>
						<div class="card-body">
							<div class="card-row">
								<div class="flex-col flex-col-expand">
									<div class="card-title text-truncate" title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg">lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg</div>
									<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
									<div class="card-detail">
										<span class="label label-success">Approved</span>
									</div>
								</div>
								<div class="flex-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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
	<div class="col-md-4">
		<div class="card card-type-asset">
			<div class="aspect-ratio bg-checkered card-item-first">
				<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
				<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col flex-col-expand">
						<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
						<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="card-type-asset form-check form-check-card form-check-top-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
			<span class="custom-control-indicator"></span>
			<div class="card">
				<div class="aspect-ratio bg-checkered card-item-first">
					<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-camera">
							<use xlink:href="/vendor/lexicon/icons.svg#camera" />
						</svg>
					</div>
					<span class="sticker sticker-bottom-left sticker-warning">SVG</span>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col flex-col-expand">
							<div class="card-title text-truncate" title="lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg">lexicon_icon_camera_av93ii2oofffmmmsjf2332.svg</div>
							<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
							<div class="card-detail">
								<span class="label label-success">Approved</span>
							</div>
						</div>
						<div class="flex-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

<div class="card card-type-asset">
	<div class="aspect-ratio bg-checkered card-item-first">
		<img alt="thumbnail"class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/thumbnail_coffee.jpg">
		<span class="sticker sticker-bottom-left sticker-danger">JPG</span>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="flex-col flex-col-expand">
				<div class="card-title text-truncate" title="thumbnail_coffee.jpg">thumbnail_coffee.jpg</div>
				<div class="card-subtitle text-truncate" title="Author Action">Author Action</div>
			</div>
		</div>
	</div>
</div>
```

</article>


<article id="card-type-asset-file-card">

### User card

> User card is used to represent users. The user can be represented by its user image or up to two initials extracted from the uses name or name + surname.

<div class="row">
	<div class="col-md-4">
		<div class="card card-type-asset">
			<div class="aspect-ratio card-item-first">
				<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
					<span class="sticker sticker-danger sticker-xl">HS</span>
				</div>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col flex-col-expand">
						<div class="card-title text-truncate" title="User Name">User Name</div>
						<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<div class="card">
						<div class="aspect-ratio card-item-first">
							<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
								<span class="sticker sticker-danger sticker-xl">HS</span>
							</div>
						</div>
						<div class="card-body">
							<div class="card-row">
								<div class="flex-col flex-col-expand">
									<div class="card-title text-truncate" title="User Name">User Name</div>
									<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
								</div>
								<div class="flex-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

```text/html
<div class="card card-type-asset">
	<div class="aspect-ratio card-item-first">
		<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
			<span class="sticker sticker-danger sticker-xl">HS</span>
		</div>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="flex-col flex-col-expand">
				<div class="card-title text-truncate" title="User Name">User Name</div>
				<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
			</div>
		</div>
	</div>
</div>

<div class="card-type-asset form-check form-check-card form-check-top-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
			<span class="custom-control-indicator"></span>
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
						<span class="sticker sticker-danger sticker-xl">HS</span>
					</div>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col flex-col-expand">
							<div class="card-title text-truncate" title="User Name">User Name</div>
							<div class="card-subtitle text-truncate" title="Latest Action">Latest Action</div>
						</div>
						<div class="flex-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

<article id="card-type-asset-file-card">

### File card

> File card is used to represent files different to images.

<div class="row">
	<div class="col-md-4">
		<div class="card card-type-asset">
			<div class="aspect-ratio card-item-first">
				<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
						<use xlink:href="/vendor/lexicon/icons.svg#documents-and-media" />
					</svg>
				</div>
				<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
			</div>
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col flex-col-expand">
						<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
						<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
						<div class="card-detail">
							<span class="label label-success">Approved</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card-type-asset form-check form-check-card form-check-top-left">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<div class="card">
						<div class="aspect-ratio card-item-first">
							<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
									<use xlink:href="/vendor/lexicon/icons.svg#documents-and-media" />
								</svg>
							</div>
							<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
						</div>
						<div class="card-body">
							<div class="card-row">
								<div class="flex-col flex-col-expand">
									<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
									<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
									<div class="card-detail">
										<span class="label label-success">Approved</span>
									</div>
								</div>
								<div class="flex-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

```text/html
<div class="card card-type-asset">
	<div class="aspect-ratio card-item-first">
		<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
				<use xlink:href="/vendor/lexicon/icons.svg#documents-and-media" />
			</svg>
		</div>
		<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
	</div>
	<div class="card-body">
		<div class="card-row">
			<div class="flex-col flex-col-expand">
				<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
				<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
				<div class="card-detail">
					<span class="label label-success">Approved</span>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="card-type-asset form-check form-check-card form-check-top-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
			<span class="custom-control-indicator"></span>
			<div class="card">
				<div class="aspect-ratio card-item-first">
					<div class="aspect-ratio-item-center-middle aspect-ratio-item-fluid">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-documents-and-media">
							<use xlink:href="/vendor/lexicon/icons.svg#documents-and-media" />
						</svg>
					</div>
					<span class="sticker sticker-bottom-left sticker-danger">DOC</span>
				</div>
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col flex-col-expand">
							<div class="card-title text-truncate" title="deliverable.doc">deliverable.doc</div>
							<div class="card-subtitle text-truncate" title="Stevie Ray Vaughn">Stevie Ray Vaughn</div>
							<div class="card-detail">
								<span class="label label-success">Approved</span>
							</div>
						</div>
						<div class="flex-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

<article id="card-type-directory">

### Folder card

> This card variation is meant to have horizontal representations of information. This card has the same amount of elements as the previous explained. The main purpose of this card is to represent folders, therefore we allow to remove the image in this card type. In this case, only the checkbox is used to select.

<div class="row">
	<div class="col-md-4">
		<div class="card card-horizontal card-type-directory">
			<div class="card-body">
				<div class="card-row">
					<div class="flex-col">
						<span class="sticker">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
								<use xlink:href="/vendor/lexicon/icons.svg#folder" />
							</svg>
						</span>
					</div>
					<div class="flex-col flex-col-expand flex-col-gutters">
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
					<span class="custom-control-indicator"></span>
					<div class="card card-horizontal">
						<div class="card-body">
							<div class="card-row">
								<div class="flex-col">
									<span class="sticker">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
											<use xlink:href="/vendor/lexicon/icons.svg#folder" />
										</svg>
									</span>
								</div>
								<div class="flex-col flex-col-expand flex-col-gutters">
									<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
								</div>
								<div class="flex-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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

```text/html
<div class="card card-horizontal card-type-directory">
	<div class="card-body">
		<div class="card-row">
			<div class="flex-col">
				<span class="sticker">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/vendor/lexicon/icons.svg#folder" />
					</svg>
				</span>
			</div>
			<div class="flex-col flex-col-expand flex-col-gutters">
				<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
			</div>
		</div>
	</div>
</div>

<div class="card-type-directory form-check form-check-card form-check-middle-left">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
			<span class="custom-control-indicator"></span>
			<div class="card card-horizontal">
				<div class="card-body">
					<div class="card-row">
						<div class="flex-col">
							<span class="sticker">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
									<use xlink:href="/vendor/lexicon/icons.svg#folder" />
								</svg>
							</span>
						</div>
						<div class="flex-col flex-col-expand flex-col-gutters">
							<div class="card-title text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
						</div>
						<div class="flex-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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
