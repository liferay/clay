---
title: Sidebar
description: Components
layout: "guide"
weight: 100
---

<article id="1">

<div class="alert alert-warning">
	Documentation for the Sidebar CSS component, for the Sidenav javascript component see <a href="../sidenav">Sidenav</a>.
</div>

### Sidebar

> An opinionated container to display related content.

<div class="col-md-6">
	<div class="sidebar">
		<div class="sidebar-header">
			Sidebar Header
		</div>
		<div class="sidebar-body">
			Sidebar Body
		</div>
		<div class="sidebar-footer">
			Sidebar Footer
		</div>
	</div>
</div>

```xml
<div class="sidebar">
	<div class="sidebar-header">
		Sidebar Header
	</div>
	<div class="sidebar-body">
		Sidebar Body
	</div>
	<div class="sidebar-footer">
		Sidebar Footer
	</div>
</div>
```

</article>

<article id="2">

### Sidebar Light

> Add classes <code>sidebar-light sidebar-light-bg</code> to <code>sidebar</code> to apply a light theme.

<div class="col-md-6">
	<div class="sidebar sidebar-light sidebar-light-bg">
		<div class="sidebar-header">
			<div class="sidebar-section-d-flex">
				<div class="flex-col flex-col-expand">
					<h4 class="sidebar-title"><a class="sidebar-link" href="#1">Image1.jpg</a></h4>
				</div>
				<div class="flex-col">
					<ul class="nav sidebar-actions">
						<li class="nav-item">
							<a class="nav-link-monospaced sidebar-link" href="#1">
								<svg class="lexicon-icon lexicon-icon-star-o">
									<use xlink:href="/vendor/lexicon/icons.svg#star-o" />
								</svg>
							</a>
						</li>
						<li class="dropdown nav-item">
							<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link-monospaced sidebar-link" href="#1">
								<svg class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="sidebar-section">
				<h5>Approved</h5>
				<h6 class="sidebar-caption">Users are allowed to <a href="#1">request</a> membership. The request is accepted automatically.</h6>
			</div>
		</div>
		<nav class="navbar navbar-expand navbar-light navbar-light-bg">
			<ul class="navbar-nav">
				<li class="dropdown nav-item">
					<a aria-expanded="true" class="active dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button">
						Details
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</a>
					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" href="#1">Details</a>
						<a class="dropdown-item" href="#1">Versions</a>
						<a class="dropdown-item" href="#1">Comments (17)</a>
					</div>
				</li>
			</ul>
		</nav>
		<div class="sidebar-body">
			<div class="crop-img crop-img-center crop-img-middle sidebar-panel">
				<img alt="thumbnail" class="img-fluid" src="/images/DeathtoStock_Desk4.jpg">
				<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
			</div>
			<ul class="list-group list-group-unstyled sidebar-section">
				<li class="list-group-item">
					<div class="sidebar-section-d-flex">
						<div class="flex-col flex-col-expand">
							<div class="h4 sidebar-title">Version 1.1</div>
						</div>
						<div class="flex-col">
							<ul class="nav sidebar-actions">
								<li class="dropdown nav-item">
									<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
											<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
										</svg>
									</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#1">Download</a>
										<a class="dropdown-item" href="#1">Edit</a>
										<a class="dropdown-item" href="#1">Move</a>
										<a class="dropdown-item" href="#1">Checkout</a>
										<a class="dropdown-item" href="#1">Permissions</a>
										<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-section">
						<div class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a>, on 10/27/16 12:26 AM</div>
					</div>
				</li>
				<li class="list-group-item">
					<div class="sidebar-section-d-flex">
						<div class="flex-col flex-col-expand">
							<h4 class="sidebar-title">Version 1.0</h4>
						</div>
						<div class="flex-col">
							<ul class="nav sidebar-actions">
								<li class="dropdown nav-item">
									<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
											<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
										</svg>
									</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#1">Download</a>
										<a class="dropdown-item" href="#1">Edit</a>
										<a class="dropdown-item" href="#1">Move</a>
										<a class="dropdown-item" href="#1">Checkout</a>
										<a class="dropdown-item" href="#1">Permissions</a>
										<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-section">
						<h6 class="sidebar-caption">By <a class="sidebar-link" href="#1">Joe Bloggs</a>, on 05/11/16 01:26 PM</h6>
					</div>
				</li>
			</ul>
			<dl class="sidebar-section">
				<dt class="h5">Size</dt>
				<dd class="h6 sidebar-caption">136 KB</dd>
				<dt class="h5">Dimensions</dt>
				<dd class="h6 sidebar-caption">1024 x 768</dd>
				<dt class="h5">Created</dt>
				<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
				<dt class="h5">Last Modification</dt>
				<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
			</dl>
			<div class="sidebar-section">
				<span>Tags: </span>
				<span class="badge badge-default badge-sm">
					History
					<a href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</span>
				<span class="badge badge-default badge-sm">
					Flat
					<a href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</span>
				<span class="badge badge-default badge-sm">
					Default
					<a href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</span>
				<div style="margin-bottom: 20px;margin-top:20px;">
					<a class="btn btn-secondary btn-sm" href="#1" id="addNewTagButton">Add new tag</a>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="sidebar sidebar-light sidebar-light-bg">
	<div class="sidebar-header">
		<div class="sidebar-section-d-flex">
			<div class="flex-col flex-col-expand">
				<h4 class="sidebar-title"><a class="sidebar-link" href="#1">Image1.jpg</a></h4>
			</div>
			<div class="flex-col">
				<ul class="nav sidebar-actions">
					<li class="nav-item">
						<a class="nav-link-monospaced sidebar-link" href="#1">
							<svg class="lexicon-icon lexicon-icon-star-o">
								<use xlink:href="/vendor/lexicon/icons.svg#star-o" />
							</svg>
						</a>
					</li>
					<li class="dropdown nav-item">
						<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link-monospaced sidebar-link" href="#1">
							<svg class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="sidebar-section">
			<h5>Approved</h5>

			<h6 class="sidebar-caption">Users are allowed to <a href="#1">request</a> membership. The request is accepted automatically.</h6>
		</div>
	</div>

	<nav class="navbar navbar-expand navbar-light navbar-light-bg">
		<ul class="navbar-nav">
			<li class="dropdown nav-item">
				<a aria-expanded="true" class="active dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button">
					Details
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu" role="menu">
					<a class="dropdown-item" href="#1">Details</a>
					<a class="dropdown-item" href="#1">Versions</a>
					<a class="dropdown-item" href="#1">Comments (17)</a>
				</div>
			</li>
		</ul>
	</nav>

	<div class="sidebar-body">
		<div class="crop-img crop-img-center crop-img-middle sidebar-panel">
			<img alt="thumbnail" class="img-fluid" src="/images/DeathtoStock_Desk4.jpg">
			<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
		</div>

		<ul class="list-group list-group-unstyled sidebar-section">
			<li class="list-group-item">
				<div class="sidebar-section-d-flex">
					<div class="flex-col flex-col-expand">
						<div class="h4 sidebar-title">Version 1.1</div>
					</div>
					<div class="flex-col">
						<ul class="nav sidebar-actions">
							<li class="dropdown nav-item">
								<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="sidebar-section">
					<div class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a>, on 10/27/16 12:26 AM</div>
				</div>
			</li>
			<li class="list-group-item">
				<div class="sidebar-section-d-flex">
					<div class="flex-col flex-col-expand">
						<h4 class="sidebar-title">Version 1.0</h4>
					</div>
					<div class="flex-col">
						<ul class="nav sidebar-actions">
							<li class="dropdown nav-item">
								<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="sidebar-section">
					<h6 class="sidebar-caption">By <a class="sidebar-link" href="#1">Joe Bloggs</a>, on 05/11/16 01:26 PM</h6>
				</div>
			</li>
		</ul>

		<dl class="sidebar-section">
			<dt class="h5">Size</dt>
			<dd class="h6 sidebar-caption">136 KB</dd>
			<dt class="h5">Dimensions</dt>
			<dd class="h6 sidebar-caption">1024 x 768</dd>
			<dt class="h5">Created</dt>
			<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
			<dt class="h5">Last Modification</dt>
			<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
		</dl>

		<div class="sidebar-section">
			<span>Tags: </span>
			<span class="badge badge-default badge-sm">
				History
				<a href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</a>
			</span>
			<span class="badge badge-default badge-sm">
				Flat
				<a href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</a>
			</span>
			<span class="badge badge-default badge-sm">
				Default
				<a href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</a>
			</span>

			<div style="margin-bottom: 20px;margin-top:20px;">
				<a class="btn btn-secondary btn-sm" href="#1" id="addNewTagButton">Add new tag</a>
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="3">

### Sidebar Inverse

> Add class <code>sidebar-inverse sidebar-inverse-bg</code> to <code>sidebar</code> to apply a darker theme.

<div class="col-md-6">
	<div class="sidebar sidebar-inverse sidebar-inverse-bg">
		<div class="sidebar-header">
			<div class="sidebar-section-d-flex">
				<div class="flex-col flex-col-expand">
					<h4 class="sidebar-title"><a class="sidebar-link" href="#1">Image1.jpg</a></h4>
				</div>
				<div class="flex-col">
					<ul class="nav sidebar-actions">
						<li class="nav-item">
							<a class="nav-link-monospaced sidebar-link" href="#1">
								<svg class="lexicon-icon lexicon-icon-star-o">
									<use xlink:href="/vendor/lexicon/icons.svg#star-o" />
								</svg>
							</a>
						</li>
						<li class="dropdown nav-item">
							<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div class="dropdown-menu">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link-monospaced sidebar-link" href="#1">
								<svg class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="sidebar-section">
				<h5>Approved</h5>
				<h6 class="sidebar-caption">Users are allowed to <a class="sidebar-link" href="#1">request</a> membership. The request is accepted automatically.</h6>
			</div>
		</div>
		<nav class="navbar navbar-expand navbar-inverse navbar-inverse-bg">
			<ul class="navbar-nav">
				<li class="dropdown nav-item">
					<a aria-expanded="true" class="active dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button">
						Details
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</a>
					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" href="#1">Details</a>
						<a class="dropdown-item" href="#1">Versions</a>
						<a class="dropdown-item" href="#1">Comments (17)</a>
					</div>
				</li>
			</ul>
		</nav>
		<div class="sidebar-body">
			<div class="crop-img crop-img-center crop-img-middle sidebar-panel">
				<img alt="thumbnail" class="img-fluid" src="/images/DeathtoStock_Spring10.jpg">
				<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
			</div>
			<ul class="list-group list-group-unstyled sidebar-section">
				<li class="list-group-item">
					<div class="sidebar-section-d-flex">
						<div class="flex-col flex-col-expand">
							<div class="h4 sidebar-title">Version 1.1</div>
						</div>
						<div class="flex-col">
							<ul class="nav sidebar-actions">
								<li class="dropdown nav-item">
									<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
											<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
										</svg>
									</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#1">Download</a>
										<a class="dropdown-item" href="#1">Edit</a>
										<a class="dropdown-item" href="#1">Move</a>
										<a class="dropdown-item" href="#1">Checkout</a>
										<a class="dropdown-item" href="#1">Permissions</a>
										<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-section">
						<div class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a>, on 10/27/16 12:26 AM</div>
					</div>
				</li>
				<li class="list-group-item">
					<div class="sidebar-section-d-flex">
						<div class="flex-col flex-col-expand">
							<h4 class="sidebar-title">Version 1.0</h4>
						</div>
						<div class="flex-col">
							<ul class="nav sidebar-actions">
								<li class="dropdown nav-item">
									<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
											<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
										</svg>
									</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#1">Download</a>
										<a class="dropdown-item" href="#1">Edit</a>
										<a class="dropdown-item" href="#1">Move</a>
										<a class="dropdown-item" href="#1">Checkout</a>
										<a class="dropdown-item" href="#1">Permissions</a>
										<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-section">
						<h6 class="sidebar-caption">By <a class="sidebar-link" href="#1">Joe Bloggs</a>, on 05/11/16 01:26 PM</h6>
					</div>
				</li>
			</ul>
			<dl class="sidebar-section">
				<dt class="h5">Size</dt>
				<dd class="h6 sidebar-caption">136 KB</dd>
				<dt class="h5">Dimensions</dt>
				<dd class="h6 sidebar-caption">1024 x 768</dd>
				<dt class="h5">Created</dt>
				<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
				<dt class="h5">Last Modification</dt>
				<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
			</dl>
			<div class="sidebar-section">
				<span>Tags: </span>
				<span class="badge badge-default badge-sm">
					History
					<a href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</span>
				<span class="badge badge-default badge-sm">
					Flat
					<a href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</span>
				<span class="badge badge-default badge-sm">
					Default
					<a href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</span>
				<div style="margin-bottom: 20px;margin-top:20px;">
					<a class="btn btn-secondary btn-sm" href="#1" id="addNewTagButton">Add new tag</a>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="sidebar sidebar-inverse sidebar-inverse-bg">
	<div class="sidebar-header">
		<div class="sidebar-section-d-flex">
			<div class="flex-col flex-col-expand">
				<h4 class="sidebar-title"><a class="sidebar-link" href="#1">Image1.jpg</a></h4>
			</div>
			<div class="flex-col">
				<ul class="nav sidebar-actions">
					<li class="nav-item">
						<a class="nav-link-monospaced sidebar-link" href="#1">
							<svg class="lexicon-icon lexicon-icon-star-o">
								<use xlink:href="/vendor/lexicon/icons.svg#star-o" />
							</svg>
						</a>
					</li>
					<li class="dropdown nav-item">
						<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link-monospaced sidebar-link" href="#1">
							<svg class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="sidebar-section">
			<h5>Approved</h5>

			<h6 class="sidebar-caption">Users are allowed to <a class="sidebar-link" href="#1">request</a> membership. The request is accepted automatically.</h6>
		</div>
	</div>

	<nav class="navbar navbar-expand navbar-inverse navbar-inverse-bg">
		<ul class="navbar-nav">
			<li class="dropdown nav-item">
				<a aria-expanded="true" class="active dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button">
					Details
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu" role="menu">
					<a class="dropdown-item" href="#1">Details</a>
					<a class="dropdown-item" href="#1">Versions</a>
					<a class="dropdown-item" href="#1">Comments (17)</a>
				</div>
			</li>
		</ul>
	</nav>

	<div class="sidebar-body">
		<div class="crop-img crop-img-center crop-img-middle sidebar-panel">
			<img alt="thumbnail" class="img-fluid" src="/images/DeathtoStock_Spring10.jpg">
			<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
		</div>

		<ul class="list-group list-group-unstyled sidebar-section">
			<li class="list-group-item">
				<div class="sidebar-section-d-flex">
					<div class="flex-col flex-col-expand">
						<div class="h4 sidebar-title">Version 1.1</div>
					</div>
					<div class="flex-col">
						<ul class="nav sidebar-actions">
							<li class="dropdown nav-item">
								<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="sidebar-section">
					<div class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a>, on 10/27/16 12:26 AM</div>
				</div>
			</li>
			<li class="list-group-item">
				<div class="sidebar-section-d-flex">
					<div class="flex-col flex-col-expand">
						<h4 class="sidebar-title">Version 1.0</h4>
					</div>
					<div class="flex-col">
						<ul class="nav sidebar-actions">
							<li class="dropdown nav-item">
								<a class="dropdown-toggle nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<div class="dropdown-menu">
									<a class="dropdown-item" href="#1">Download</a>
									<a class="dropdown-item" href="#1">Edit</a>
									<a class="dropdown-item" href="#1">Move</a>
									<a class="dropdown-item" href="#1">Checkout</a>
									<a class="dropdown-item" href="#1">Permissions</a>
									<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="sidebar-section">
					<h6 class="sidebar-caption">By <a class="sidebar-link" href="#1">Joe Bloggs</a>, on 05/11/16 01:26 PM</h6>
				</div>
			</li>
		</ul>

		<dl class="sidebar-section">
			<dt class="h5">Size</dt>
			<dd class="h6 sidebar-caption">136 KB</dd>
			<dt class="h5">Dimensions</dt>
			<dd class="h6 sidebar-caption">1024 x 768</dd>
			<dt class="h5">Created</dt>
			<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
			<dt class="h5">Last Modification</dt>
			<dd class="h6 sidebar-caption">By <a class="sidebar-link" href="#1">Helen Smith</a> on Feb 15 2015, 10:15am</dd>
		</dl>

		<div class="sidebar-section">
			<span>Tags: </span>
			<span class="badge badge-default badge-sm">
				History
				<a href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</a>
			</span>
			<span class="badge badge-default badge-sm">
				Flat
				<a href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</a>
			</span>
			<span class="badge badge-default badge-sm">
				Default
				<a href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</a>
			</span>

			<div style="margin-bottom: 20px;margin-top:20px;">
				<a class="btn btn-secondary btn-sm" href="#1" id="addNewTagButton">Add new tag</a>
			</div>
		</div>
	</div>
</div>
```

</article>

