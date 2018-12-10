---
title: "Table View Template"
---

<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1">
					<svg class="lexicon-icon lexicon-icon-product-menu-closed" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#product-menu-closed" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>

<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">
	<div class="container-fluid container-fluid-max-xl">
		<a aria-controls="navigationBarCollapse01" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse01" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="collapse navbar-collapse" id="navigationBarCollapse01">
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#1">
							<span class="navbar-text-truncate">App Section 1</span>
						</a>
					</li>
					<li aria-label="Current Page" class="nav-item">
						<a class="active nav-link" href="#1">
							<span class="navbar-text-truncate">App Section 2</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#1">
							<span class="navbar-text-truncate">App Section 3</span>
						</a>
					</li>
					<li class="dropdown nav-item show-dropdown-on-collapse">
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
							<span class="navbar-text-truncate">More</span>
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu">
							<li><a class="dropdown-item" href="#1">App Section 4</a></li>
							<li><a class="dropdown-item" href="#1">App Section 5</a></li>
							<li><a class="dropdown-item" href="#1">App Section 6</a></li>
							<li><a class="dropdown-item" href="#1">App Section 7</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox"/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</a>
				<a aria-expanded="false" class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#filter" />
					</svg>
				</a>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#1">Filter Action 1</a></li>
					<li><a class="dropdown-item" href="#1">Filter Action 2</a></li>
					<li><a class="dropdown-item" href="#1">Filter Action 3</a></li>
				</ul>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced order-arrow-up-active" href="#1">
					<svg class="lexicon-icon lexicon-icon-order-arrow" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#order-arrow" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
			<div class="container-fluid container-fluid-max-xl">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text"/>
							<span class="input-group-inset-item input-group-inset-item-after">
								<button class="btn btn-unstyled" type="submit">
									<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#search" />
									</svg>
								</button>
								<button class="btn btn-unstyled d-none" type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-d-none">
				<a class="nav-link nav-link-monospaced clay-site-open-overlay-sm-down" href="#1">
					<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#search" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#uniqueSidenavCollapseId1" id="uniqueSidenavToggler1" role="button">
					<svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#table" />
					</svg>
				</a>
				<ul class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start">
					<li>
						<a class="dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#list" />
								</svg>
							</span>
							List View
						</a>
					</li>
					<li>
						<a class="active dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#table" />
								</svg>
							</span>
							Table View
						</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-cards2" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#cards2" />
								</svg>
							</span>
							Card View
						</a>
					</li>
				</ul>
			</li>
			<li class="nav-item">
				<a class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" href="#1">
					<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#plus" />
					</svg>
				</a>
			</li>
		</ul>
	</div>
</nav>

<nav class="tbar subnav-tbar subnav-tbar-primary">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-text text-truncate-inline">
						<span class="text-truncate">8 results for <strong>Everything</strong></span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<button class="btn btn-unstyled component-link tbar-link" type="button">Clear</button>
			</li>
		</ul>
	</div>
</nav>

<div class="closed sidenav-container" id="uniqueSidenavCollapseId1">
	<div class="sidenav-menu-slider">
		<div class="sidebar sidebar-light sidenav-menu">
			<nav class="component-tbar tbar">
				<div class="container-fluid">
					<ul class="tbar-nav">
						<li class="tbar-item">
							<a class="component-action disabled" href="#disabled" role="button" tabindex="-1">
								<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#angle-left" />
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
								<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#angle-right" />
								</svg>
							</a>
						</li>
						<li class="tbar-item">
							<a class="component-action sidenav-close" href="#1" role="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times" />
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
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#ellipsis-v" />
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
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
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
							<img alt="thumbnail" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/images/DeathtoStock_Desk4.jpg" />
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
													<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
														<use href="/images/icons/icons.svg#folder" />
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
													<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
														<use href="/images/icons/icons.svg#folder" />
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
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use href="/images/icons/icons.svg#ellipsis-v" />
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
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use href="/images/icons/icons.svg#ellipsis-v" />
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
	<div class="container-fluid container-fluid-max-xl container-no-gutters-sm-down container-view sidenav-content">
		<form>
			<div class="table-responsive">
				<table class="show-quick-actions-on-hover table table-autofit table-nowrap table-list">
					<thead>
						<tr>
							<th></th>
							<th class="table-cell-expand table-head-title">
								<span class="inline-item inline-item-before">
									<a href="#1">
										<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#drag" />
										</svg>
									</a></span><a class="inline-item text-truncate-inline" href="#1"><span class="text-truncate" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span><span class="inline-item inline-item-after">
										<svg class="lexicon-icon lexicon-icon-order-arrow-down" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#order-arrow-down" />
										</svg>
									</span>
								</a>
							</th>
							<th><span class="inline-item">Size</span></th>
							<th><span class="inline-item">Status</span></th>
							<th><span class="inline-item">Creation Date</span></th>
							<th><span class="inline-item">Modification Date</span></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div class="custom-control custom-checkbox">
									<label>
										<input class="custom-control-input" type="checkbox"/>
										<span class="custom-control-label"></span>
									</label>
								</div>
							</td>
							<td class="table-cell-expand">
								<div class="autofit-row">
									<div class="autofit-col">
										<span class="sticker sticker-danger">PNG</span>
									</div>
									<div class="autofit-col autofit-col-expand">
										<div class="table-list-title">
											<span class="text-truncate-inline">
												<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
											</span>
										</div>
									</div>
								</div>
							</td>
							<td>700KB</td>
							<td>
								<span class="label label-success">
									<span class="label-item label-item-expand">Approved</span>
								</span>
							</td>
							<td>6 days ago</td>
							<td>4 days ago</td>
							<td>
								<div class="quick-action-menu">
									<a class="component-action quick-action-item" href="#1">
										<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#trash" />
										</svg>
									</a>
									<a class="component-action quick-action-item" href="#1">
										<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#download" />
										</svg>
									</a>
									<a class="component-action quick-action-item" href="#1">
										<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#expand" />
										</svg>
									</a>
								</div>
								<div class="dropdown dropdown-action">
									<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
										<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
											<use href="/images/icons/icons.svg#ellipsis-v" />
										</svg>
									</a>
									<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
										<li><a class="dropdown-item" href="#1">Remove</a></li>
										<li><a class="dropdown-item" href="#1">Download</a></li>
										<li><a class="dropdown-item" href="#1">Checkout</a></li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>
		<div class="alert alert-warning">
			Because of the dynamic nature of content in tables, we left it to the developer to size and align columns inside tables. Add a unique class to each column, and use min-width / max-width to space the tables to your specific requirements.
		</div>
		<div class="table-responsive">
			<table class="show-quick-actions-on-hover table table-autofit table-nowrap table-list">
				<thead>
					<tr>
						<th></th>
						<th class="table-cell-expand table-head-title">
							<span class="inline-item inline-item-before">
								<a href="#1">
									<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#drag" />
									</svg>
								</a>
							</span><a class="inline-item text-truncate-inline" href="#1"><span class="text-truncate" title="Title">Title</span><span class="inline-item inline-item-after">
									<svg class="lexicon-icon lexicon-icon-order-arrow-up" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#order-arrow-up" />
									</svg>
								</span>
							</a>
						</th>
						<th><span class="inline-item">Status</span></th>
						<th><span class="inline-item">Items</span></th>
						<th><span class="inline-item">Start Date</span></th>
						<th><span class="inline-item">Duration</span></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr class="table-divider">
						<td colspan="8">In Progress</td>
					</tr>
					<tr>
						<td>
							<div class="custom-control custom-checkbox">
								<label>
									<input class="custom-control-input" type="checkbox"/>
									<span class="custom-control-label"></span>
								</label>
							</div>
						</td>
						<td class="table-cell-expand">
							<div class="autofit-row">
								<div class="autofit-col">
									<span class="sticker sticker-circle sticker-danger">MT</span>
								</div>
								<div class="autofit-col autofit-col-expand">
									<div class="table-list-title">
										<a class="text-truncate-inline" href="#1">
											<span class="text-truncate" title="Publication Title">Publication Title</span>
										</a>
									</div>
								</div>
							</div>
						</td>
						<td>
							<span class="label label-warning">
								<span class="label-item label-item-expand">In Progress</span>
							</span>
						</td>
						<td>100,000</td>
						<td>2017.11.24 - 17:15</td>
						<td>4 minutes</td>
						<td>
							<div class="progress-group">
								<div class="progress">
									<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
								</div>
								<div class="progress-group-addon">30%</div>
							</div>
						</td>
						<td>
							<div class="quick-action-menu">
								<a class="component-action quick-action-item" href="#1">
									<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#trash" />
									</svg>
								</a>
								<a class="component-action quick-action-item" href="#1">
									<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#download" />
									</svg>
								</a>
								<a class="component-action quick-action-item" href="#1">
									<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#expand" />
									</svg>
								</a>
							</div>
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
									<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
									<li><a class="dropdown-item" href="#1">Remove</a></li>
									<li><a class="dropdown-item" href="#1">Download</a></li>
									<li><a class="dropdown-item" href="#1">Checkout</a></li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>