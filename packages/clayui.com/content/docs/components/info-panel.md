---
title: "Info Panel"
---

### Description

Information panel is an information container where to display relevant information that does not fit into the table, list, card or any other visualization. This information can be the type you want. Usually it is used to show detail information of an element without navigating deeper in the navigation hierarchy.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Sidebar/infopanel.html">Info Panel Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="sidebar-light">
<h3 class="component-title">
	<a href="#sidebar-light">Sidebar Light</a>
</h3>

> Add classes `sidebar-light` to `sidebar` to apply a light theme.

<div class="row">
	<div class="col-md-6">
		<div class="sidebar sidebar-light">
			<nav class="component-tbar tbar">
				<div class="container-fluid">
					<ul class="tbar-nav">
						<li class="tbar-item">
							<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
									<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
								</svg>
							</a>
						</li>
						<li class="tbar-item tbar-item-expand">
							<div class="tbar-section">
								<span class="text-truncate-inline">
									<span class="text-truncate">Item 1 of 3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span>
								</span>
							</div>
						</li>
						<li class="tbar-item">
							<a class="component-action" href="#1" role="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
									<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
								</svg>
							</a>
						</li>
						<li class="tbar-item">
							<a class="component-action" href="#1" role="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="sidebar-header">
				<div class="autofit-row sidebar-section">
					<div class="autofit-col autofit-col-expand">
						<h4 class="component-title">
							<span class="text-truncate-inline">
								<a class="text-truncate" href="#1">Image1.jpg</a>
							</span>
						</h4>
						<p class="component-subtitle">Basic Document</p>
					</div>
					<div class="autofit-col">
						<div class="dropdown dropdown-action">
							<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
								</svg>
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
								<li><a class="dropdown-item" href="#1">Edit</a></li>
								<li><a class="dropdown-item" href="#1">Move</a></li>
								<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
								<li><a class="dropdown-item" href="#1">Permissions</a></li>
								<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="sidebar-body">
				<nav class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline">
					<a aria-controls="sidebarLightCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#sidebarLightCollapse00" role="button">
						<span class="navbar-text-truncate">Details</span>
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</a>
					<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
						<ul class="nav navbar-nav" role="tablist">
							<li class="nav-item">
								<a aria-controls="sidebarLightDetails" class="active nav-link" data-toggle="tab" href="#sidebarLightDetails" id="sidebarLightDetailsTab" role="tab">
									<span class="navbar-text-truncate">Details</span>
								</a>
							</li>
							<li class="nav-item">
								<a aria-controls="sidebarLightVersions" class="nav-link" data-toggle="tab" href="#sidebarLightVersions" id="sidebarLightVersionsTab" role="tab">
									<span class="navbar-text-truncate">Versions</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div class="tab-content">
					<div aria-labelledby="sidebarLightDetailsTab" class="active fade show tab-pane" id="sidebarLightDetails" role="tabpanel">
						<div class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel" style="margin-top:1.5rem;">
							<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/DeathtoStock_Desk4.jpg">
							<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
						</div>
						<dl class="sidebar-dl sidebar-section">
							<dt class="sidebar-dt">Url</dt>
							<dd class="sidebar-dd">
								<a href="#1">http://localhost:8080/documents/20140/</a>
							</dd>
							<dt class="sidebar-dt">Webdav Url</dt>
							<dd class="sidebar-dd">
								<a href="#1">http://localhost:8080/webdav/guest/</a>
							</dd>
							<dt class="sidebar-dt">Created</dt>
							<dd class="sidebar-dd">
								<a href="#1">Helen Smith</a>
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
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag One</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Two</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Three</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Four</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Five</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Six</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Seven</span>
								</span>
								<span class="label label-lg label-secondary">
									<span class="label-item label-item-expand">Tag Eight</span>
								</span>
							</dd>
							<dt class="sidebar-dt">Related Assets</dt>
							<dd class="sidebar-dd">
								<ul class="list-group sidebar-list-group">
									<li class="list-group-item list-group-item-flex">
										<div class="autofit-col">
											<div class="sticker sticker-secondary">
												<span class="inline-item">
													<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
														<use xlink:href="/vendor/lexicon/icons.svg#folder" />
													</svg>
												</span>
											</div>
										</div>
										<div class="autofit-col autofit-col-expand">
											<section class="autofit-section">
												<div class="list-group-title text-truncate-inline">
													<a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
												</div>
											</section>
										</div>
									</li>
									<li class="list-group-item list-group-item-flex">
										<div class="autofit-col">
											<div class="sticker sticker-secondary">
												<span class="inline-item">
													<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
														<use xlink:href="/vendor/lexicon/icons.svg#folder" />
													</svg>
												</span>
											</div>
										</div>
										<div class="autofit-col autofit-col-expand">
											<section class="autofit-section">
												<div class="list-group-title text-truncate-inline">
													<a class="text-truncate" href="#1">Surf Blog Entry Two</a>
												</div>
											</section>
										</div>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div aria-labelledby="sidebarLightVersionsTab" class="fade tab-pane" id="sidebarLightVersions" role="tabpanel">
						<ul class="list-group sidebar-list-group">
							<li class="list-group-item list-group-item-flex">
								<div class="autofit-col autofit-col-expand">
									<div class="list-group-title">Version 1.2</div>
									<div class="list-group-subtitle">By Helen, on 8/31/17 9:15am</div>
									<div class="list-group-subtext">No Change Log</div>
								</div>
								<div class="autofit-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId01" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
											</svg>
										</a>
										<ul aria-labelledBy="sidebarLightListDropdownId01" class="dropdown-menu">
											<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
											<li><a class="dropdown-item" href="#1">Edit</a></li>
											<li><a class="dropdown-item" href="#1">Move</a></li>
											<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
											<li><a class="dropdown-item" href="#1">Permissions</a></li>
											<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
										</ul>
									</div>
								</div>
							</li>
							<li class="list-group-item list-group-item-flex">
								<div class="autofit-col autofit-col-expand">
									<div class="list-group-title">Version 1.1</div>
									<div class="list-group-subtitle">By Helen, on 8/31/17 8:00am</div>
									<div class="list-group-subtext">No Change Log</div>
								</div>
								<div class="autofit-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId02" role="button">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
												<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
											</svg>
										</a>
										<ul aria-labelledBy="sidebarLightListDropdownId02" class="dropdown-menu">
											<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
											<li><a class="dropdown-item" href="#1">Edit</a></li>
											<li><a class="dropdown-item" href="#1">Move</a></li>
											<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
											<li><a class="dropdown-item" href="#1">Permissions</a></li>
											<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="sidebar sidebar-light">
	<nav class="component-tbar tbar">
		<div class="container-fluid">
			<ul class="tbar-nav">
				<li class="tbar-item">
					<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
							<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
						</svg>
					</a>
				</li>
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="text-truncate-inline">
							<span class="text-truncate">Item 1 of 3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<a class="component-action" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
							<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
						</svg>
					</a>
				</li>
				<li class="tbar-item">
					<a class="component-action" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use xlink:href="/vendor/lexicon/icons.svg#times" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="sidebar-header">
		<div class="autofit-row sidebar-section">
			<div class="autofit-col autofit-col-expand">
				<h4 class="component-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1">Image1.jpg</a>
					</span>
				</h4>
				<p class="component-subtitle">Basic Document</p>
			</div>
			<div class="autofit-col">
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
						<li><a class="dropdown-item" href="#1">Edit</a></li>
						<li><a class="dropdown-item" href="#1">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						<li><a class="dropdown-item" href="#1">Permissions</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<nav class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline">
			<a aria-controls="sidebarLightCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#sidebarLightCollapse00" role="button">
				<span class="navbar-text-truncate">Details</span>
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
					<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
				</svg>
			</a>
			<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
				<ul class="nav navbar-nav" role="tablist">
					<li class="nav-item">
						<a aria-controls="sidebarLightDetails" class="active nav-link" data-toggle="tab" href="#sidebarLightDetails" id="sidebarLightDetailsTab" role="tab">
							<span class="navbar-text-truncate">Details</span>
						</a>
					</li>
					<li class="nav-item">
						<a aria-controls="sidebarLightVersions" class="nav-link" data-toggle="tab" href="#sidebarLightVersions" id="sidebarLightVersionsTab" role="tab">
							<span class="navbar-text-truncate">Versions</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="tab-content">
			<div aria-labelledby="sidebarLightDetailsTab" class="active fade show tab-pane" id="sidebarLightDetails" role="tabpanel">
				<div class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel" style="margin-top:1.5rem;">
					<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/DeathtoStock_Desk4.jpg">
					<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
				</div>
				<dl class="sidebar-dl sidebar-section">
					<dt class="sidebar-dt">Url</dt>
					<dd class="sidebar-dd">
						<a href="#1">http://localhost:8080/documents/20140/</a>
					</dd>
					<dt class="sidebar-dt">Webdav Url</dt>
					<dd class="sidebar-dd">
						<a href="#1">http://localhost:8080/webdav/guest/</a>
					</dd>
					<dt class="sidebar-dt">Created</dt>
					<dd class="sidebar-dd">
						<a href="#1">Helen Smith</a>
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
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag One</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Two</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Three</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Four</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Five</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Six</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Seven</span>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand">Tag Eight</span>
						</span>
					</dd>
					<dt class="sidebar-dt">Related Assets</dt>
					<dd class="sidebar-dd">
						<ul class="list-group sidebar-list-group">
							<li class="list-group-item list-group-item-flex">
								<div class="autofit-col">
									<div class="sticker sticker-secondary">
										<span class="inline-item">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
												<use xlink:href="/vendor/lexicon/icons.svg#folder" />
											</svg>
										</span>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<section class="autofit-section">
										<div class="list-group-title text-truncate-inline">
											<a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
										</div>
									</section>
								</div>
							</li>
							<li class="list-group-item list-group-item-flex">
								<div class="autofit-col">
									<div class="sticker sticker-secondary">
										<span class="inline-item">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
												<use xlink:href="/vendor/lexicon/icons.svg#folder" />
											</svg>
										</span>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<section class="autofit-section">
										<div class="list-group-title text-truncate-inline">
											<a class="text-truncate" href="#1">Surf Blog Entry Two</a>
										</div>
									</section>
								</div>
							</li>
						</ul>
					</dd>
				</dl>
			</div>
			<div aria-labelledby="sidebarLightVersionsTab" class="fade tab-pane" id="sidebarLightVersions" role="tabpanel">
				<ul class="list-group sidebar-list-group">
					<li class="list-group-item list-group-item-flex">
						<div class="autofit-col autofit-col-expand">
							<div class="list-group-title">Version 1.2</div>
							<div class="list-group-subtitle">By Helen, on 8/31/17 9:15am</div>
							<div class="list-group-subtext">No Change Log</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId01" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<ul aria-labelledBy="sidebarLightListDropdownId01" class="dropdown-menu">
									<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
									<li><a class="dropdown-item" href="#1">Edit</a></li>
									<li><a class="dropdown-item" href="#1">Move</a></li>
									<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
									<li><a class="dropdown-item" href="#1">Permissions</a></li>
									<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-flex">
						<div class="autofit-col autofit-col-expand">
							<div class="list-group-title">Version 1.1</div>
							<div class="list-group-subtitle">By Helen, on 8/31/17 8:00am</div>
							<div class="list-group-subtext">No Change Log</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId02" role="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
										<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<ul aria-labelledBy="sidebarLightListDropdownId02" class="dropdown-menu">
									<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
									<li><a class="dropdown-item" href="#1">Edit</a></li>
									<li><a class="dropdown-item" href="#1">Move</a></li>
									<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
									<li><a class="dropdown-item" href="#1">Permissions</a></li>
									<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
```

</article>