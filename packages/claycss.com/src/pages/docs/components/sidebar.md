---
title: Sidebar
description: Components
layout: "guide"
weight: 100
---

<article id="sidebar">

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

```text/html
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

<article id="sidebar-light">

### Sidebar Light

> Add classes `sidebar-light sidebar-light-bg` to `sidebar` to apply a light theme.

<div class="col-md-6">
	<div class="sidebar sidebar-light">
		<div class="sidebar-header">
			<div class="sidebar-section-flex">
				<div class="flex-col flex-col-expand">
					<h4 class="sidebar-title">
						<a class="sidebar-link text-truncate" href="#1">Image1.jpg</a>
					</h4>
				</div>
				<div class="flex-col">
					<ul class="nav nav-unstyled sidebar-actions">
						<li class="dropdown nav-item">
							<a class="dropdown-toggle nav-link nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
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
							<a class="nav-link nav-link-monospaced sidebar-link" href="#1">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="sidebar-section">
				<h5 class="sidebar-subtitle">Basic Document</h5>
			</div>
		</div>
		<div class="sidebar-body">
			<nav class="navbar navigation-bar navbar-collapse-absolute navbar-transparent navbar-expand-md navbar-underline">
				<div class="container-fluid container-fluid-max-xl">
					<button aria-expanded="false" aria-label="Toggle navigation" class="collapsed navbar-toggler navbar-toggler-link" data-target="#sidebarLightCollapse00" data-toggle="collapse" type="button">
						<span class="navbar-text-truncate">Versions</span>
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</button>
					<div aria-expanded="false" class="collapse navbar-collapse" id="sidebarLightCollapse00">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link" href="#1">
									<span class="navbar-text-truncate">Details</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="active nav-link" href="#1">
									<span class="navbar-text-truncate">Versions</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<ul class="sidebar-list">
				<li class="sidebar-list-item">
					<div class="flex-col flex-col-expand">
						<div class="h5 sidebar-title">Version 1.2</div>
						<div class="sidebar-caption">By Helen, on 8/31/17 9:15am</div>
						<div class="sidebar-caption">No Change Log</div>
					</div>
					<div class="flex-col">
						<div class="dropdown dropdown-action">
							<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId01">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div aria-labelledBy="sidebarLightListDropdownId01" class="dropdown-menu">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</li>
				<li class="sidebar-list-item">
					<div class="flex-col flex-col-expand">
						<div class="h5 sidebar-title">Version 1.1</div>
						<div class="sidebar-caption">By Helen, on 8/31/17 8:00am</div>
						<div class="sidebar-caption">No Change Log</div>
					</div>
					<div class="flex-col">
						<div class="dropdown dropdown-action">
							<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId02">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div aria-labelledBy="sidebarLightListDropdownId02" class="dropdown-menu">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</li>
				<li class="sidebar-list-item">
					<div class="flex-col flex-col-expand">
						<div class="h5 sidebar-title">Version 1.0</div>
						<div class="sidebar-caption">By Helen, on 8/31/17 7:47am</div>
						<div class="sidebar-caption">No Change Log</div>
					</div>
					<div class="flex-col">
						<div class="dropdown dropdown-action">
							<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId03">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<div aria-labelledBy="sidebarLightListDropdownId03" class="dropdown-menu">
								<a class="dropdown-item" href="#1">Download</a>
								<a class="dropdown-item" href="#1">Edit</a>
								<a class="dropdown-item" href="#1">Move</a>
								<a class="dropdown-item" href="#1">Checkout</a>
								<a class="dropdown-item" href="#1">Permissions</a>
								<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel">
				<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/DeathtoStock_Desk4.jpg">
				<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
			</div>
			<dl class="sidebar-dl sidebar-section">
				<dt class="sidebar-dt">Url</dt>
				<dd class="sidebar-dd">
					<a class="sidebar-link" href="#1">http://localhost:8080/documents/20140/</a>
				</dd>
				<dt class="sidebar-dt">Webdav Url</dt>
				<dd class="sidebar-dd">
					<a class="sidebar-link" href="#1">http://localhost:8080/webdav/guest/</a>
				</dd>
				<dt class="sidebar-dt">Created</dt>
				<dd class="sidebar-dd">
					<a class="sidebar-link" href="#1">Helen Smith</a>
				</dd>
				<dt class="sidebar-dt">Description</dt>
				<dd class="sidebar-dd">A picture of a person using a ruler and exacto knife to cut construction paper.</dd>
				<dt class="sidebar-dt">Size</dt>
				<dd class="sidebar-dd">745KB</dd>
				<dt class="sidebar-dt">Extension</dt>
				<dd class="sidebar-dd">PNG</dd>
				<dt class="sidebar-dt">Version</dt>
				<dd class="sidebar-dd">2.0</dd>
				<dt class="sidebar-dt">Tags</dt>
				<dd class="sidebar-dd">
					<span class="label label-lg label-secondary">Tag One</span>
					<span class="label label-lg label-secondary">Tag Two</span>
					<span class="label label-lg label-secondary">Tag Three</span>
					<span class="label label-lg label-secondary">Tag Four</span>
					<span class="label label-lg label-secondary">Tag Five</span>
					<span class="label label-lg label-secondary">Tag Six</span>
					<span class="label label-lg label-secondary">Tag Seven</span>
					<span class="label label-lg label-secondary">Tag Eight</span>
				</dd>
				<dt class="sidebar-dt">Related Assets</dt>
				<dd class="sidebar-dd">
					<ul class="sidebar-list">
						<li class="sidebar-list-item">
							<div class="flex-col">
								<span class="sticker sticker-secondary sticker-sm">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
										<use xlink:href="/vendor/lexicon/icons.svg#folder" />
									</svg>
								</span>
							</div>
							<div class="flex-col flex-col-expand">
								<a class="sidebar-link text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
							</div>
						</li>
						<li class="sidebar-list-item">
							<div class="flex-col">
								<span class="sticker sticker-secondary sticker-sm">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
										<use xlink:href="/vendor/lexicon/icons.svg#folder" />
									</svg>
								</span>
							</div>
							<div class="flex-col flex-col-expand">
								<a class="sidebar-link text-truncate" href="#1">Surf Blog Entry Two</a>
							</div>
						</li>
					</ul>
				</dd>
			</dl>
		</div>
	</div>
</div>

```text/html
<div class="sidebar sidebar-light">
	<div class="sidebar-header">
		<div class="sidebar-section-flex">
			<div class="flex-col flex-col-expand">
				<h4 class="sidebar-title">
					<a class="sidebar-link text-truncate" href="#1">Image1.jpg</a>
				</h4>
			</div>
			<div class="flex-col">
				<ul class="nav nav-unstyled sidebar-actions">
					<li class="dropdown nav-item">
						<a class="dropdown-toggle nav-link nav-link-monospaced sidebar-link" data-toggle="dropdown" href="#1">
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
						<a class="nav-link nav-link-monospaced sidebar-link" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="sidebar-section">
			<h5 class="sidebar-subtitle">Basic Document</h5>
		</div>
	</div>
	<div class="sidebar-body">
		<nav class="navbar navigation-bar navbar-collapse-absolute navbar-transparent navbar-expand-md navbar-underline">
			<div class="container-fluid container-fluid-max-xl">
				<button aria-expanded="false" aria-label="Toggle navigation" class="collapsed navbar-toggler navbar-toggler-link" data-target="#sidebarLightCollapse00" data-toggle="collapse" type="button">
					<span class="navbar-text-truncate">Versions</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</button>
				<div aria-expanded="false" class="collapse navbar-collapse" id="sidebarLightCollapse00">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="#1">
								<span class="navbar-text-truncate">Details</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="active nav-link" href="#1">
								<span class="navbar-text-truncate">Versions</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<ul class="sidebar-list">
			<li class="sidebar-list-item">
				<div class="flex-col flex-col-expand">
					<div class="h5 sidebar-title">Version 1.2</div>
					<div class="sidebar-caption">By Helen, on 8/31/17 9:15am</div>
					<div class="sidebar-caption">No Change Log</div>
				</div>
				<div class="flex-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId01">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div aria-labelledBy="sidebarLightListDropdownId01" class="dropdown-menu">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</li>
			<li class="sidebar-list-item">
				<div class="flex-col flex-col-expand">
					<div class="h5 sidebar-title">Version 1.1</div>
					<div class="sidebar-caption">By Helen, on 8/31/17 8:00am</div>
					<div class="sidebar-caption">No Change Log</div>
				</div>
				<div class="flex-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId02">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div aria-labelledBy="sidebarLightListDropdownId02" class="dropdown-menu">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</li>
			<li class="sidebar-list-item">
				<div class="flex-col flex-col-expand">
					<div class="h5 sidebar-title">Version 1.0</div>
					<div class="sidebar-caption">By Helen, on 8/31/17 7:47am</div>
					<div class="sidebar-caption">No Change Log</div>
				</div>
				<div class="flex-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId03">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
								<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<div aria-labelledBy="sidebarLightListDropdownId03" class="dropdown-menu">
							<a class="dropdown-item" href="#1">Download</a>
							<a class="dropdown-item" href="#1">Edit</a>
							<a class="dropdown-item" href="#1">Move</a>
							<a class="dropdown-item" href="#1">Checkout</a>
							<a class="dropdown-item" href="#1">Permissions</a>
							<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel">
			<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/DeathtoStock_Desk4.jpg">
			<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
		</div>
		<dl class="sidebar-dl sidebar-section">
			<dt class="sidebar-dt">Url</dt>
			<dd class="sidebar-dd">
				<a class="sidebar-link" href="#1">http://localhost:8080/documents/20140/</a>
			</dd>
			<dt class="sidebar-dt">Webdav Url</dt>
			<dd class="sidebar-dd">
				<a class="sidebar-link" href="#1">http://localhost:8080/webdav/guest/</a>
			</dd>
			<dt class="sidebar-dt">Created</dt>
			<dd class="sidebar-dd">
				<a class="sidebar-link" href="#1">Helen Smith</a>
			</dd>
			<dt class="sidebar-dt">Description</dt>
			<dd class="sidebar-dd">A picture of a person using a ruler and exacto knife to cut construction paper.</dd>
			<dt class="sidebar-dt">Size</dt>
			<dd class="sidebar-dd">745KB</dd>
			<dt class="sidebar-dt">Extension</dt>
			<dd class="sidebar-dd">PNG</dd>
			<dt class="sidebar-dt">Version</dt>
			<dd class="sidebar-dd">2.0</dd>
			<dt class="sidebar-dt">Tags</dt>
			<dd class="sidebar-dd">
				<span class="label label-lg label-secondary">Tag One</span>
				<span class="label label-lg label-secondary">Tag Two</span>
				<span class="label label-lg label-secondary">Tag Three</span>
				<span class="label label-lg label-secondary">Tag Four</span>
				<span class="label label-lg label-secondary">Tag Five</span>
				<span class="label label-lg label-secondary">Tag Six</span>
				<span class="label label-lg label-secondary">Tag Seven</span>
				<span class="label label-lg label-secondary">Tag Eight</span>
			</dd>
			<dt class="sidebar-dt">Related Assets</dt>
			<dd class="sidebar-dd">
				<ul class="sidebar-list">
					<li class="sidebar-list-item">
						<div class="flex-col">
							<span class="sticker sticker-secondary sticker-sm">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
									<use xlink:href="/vendor/lexicon/icons.svg#folder" />
								</svg>
							</span>
						</div>
						<div class="flex-col flex-col-expand">
							<a class="sidebar-link text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
						</div>
					</li>
					<li class="sidebar-list-item">
						<div class="flex-col">
							<span class="sticker sticker-secondary sticker-sm">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
									<use xlink:href="/vendor/lexicon/icons.svg#folder" />
								</svg>
							</span>
						</div>
						<div class="flex-col flex-col-expand">
							<a class="sidebar-link text-truncate" href="#1">Surf Blog Entry Two</a>
						</div>
					</li>
				</ul>
			</dd>
		</dl>
	</div>
</div>
```

</article>