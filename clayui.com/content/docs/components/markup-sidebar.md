---
title: 'Sidebar'
description: 'A vertical panel that appears from the right or the left side of the screen, triggered by a button.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/sidebar/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Structure](#css-structure)
-   [Variations](#css-variation)
    -   [Light](#css-light)
    -   [Dark](#css-sidebar-dark)
    -   [Dark L2](#css-sidebar-dark-l2)

</div>
</div>

## Structure(#css-structure)

Sidebar is an opinionated container to display related content.

Is composed by:

```html{expanded}
<div class="sidebar-header">
	Sidebar Header
</div>
```

```html{expanded}
<div class="sidebar-body">
	Sidebar Body
</div>
```

```html{expanded}
<div class="sidebar-footer">
	Sidebar Footer
</div>
```

## Variations(#css-variations)

### Sidebar Light(#css-sidebar-light)

Just add `sidebar-light` class on the same element that you are using `sidebar`.

<div class="sheet-example">
	<div class="sidebar sidebar-light">
		<nav class="component-tbar tbar">
			<div class="container-fluid">
				<ul class="tbar-nav">
					<li class="tbar-item">
						<a class="component-action disabled" href="#1" role="button" tabindex="-1">
							<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-left"></use>
							</svg>
						</a>
					</li>
					<li class="tbar-item tbar-item-expand">
						<div class="tbar-section">
							<span class="text-truncate-inline">
								<span class="text-truncate">Item 1 of
									3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span>
							</span>
						</div>
					</li>
					<li class="tbar-item">
						<a class="component-action" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-right"></use>
							</svg>
						</a>
					</li>
					<li class="tbar-item">
						<a class="component-action" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
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
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle"
							data-toggle="dropdown" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v"></use>
							</svg>
						</a>
						<ul class="dropdown-menu" x-placement="bottom-start"
							style="position: absolute; transform: translate3d(-197px, 32px, 0px); top: 0px; left: 0px; will-change: transform;">
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-body">
			<nav
				class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline">
				<a aria-controls="sidebarLightCollapse00" aria-expanded="false" aria-label="Toggle Navigation"
					class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse"
					href="#sidebarLightCollapse00" role="button">
					<span class="navbar-text-truncate">Details</span>
					<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
					<ul class="nav navbar-nav" role="tablist">
						<li class="nav-item">
							<a aria-controls="sidebarLightDetails" class="nav-link active" data-toggle="tab"
								href="#sidebarLightDetails" id="sidebarLightDetailsTab" role="tab" aria-selected="true">
								<span class="navbar-text-truncate">Details</span>
							</a>
						</li>
						<li class="nav-item">
							<a aria-controls="sidebarLightVersions" class="nav-link" data-toggle="tab"
								href="#sidebarLightVersions" id="sidebarLightVersionsTab" role="tab" aria-selected="false">
								<span class="navbar-text-truncate">Versions</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="tab-content">
				<div aria-labelledby="sidebarLightDetailsTab" class="fade tab-pane active show" id="sidebarLightDetails"
					role="tabpanel">
					<div class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel" style="margin-top:1.5rem;">
						<img alt="thumbnail"
							class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
							src="/images/DeathtoStock_Desk4.jpg">
						<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
					</div>
					<dl class="sidebar-dl sidebar-section">
						<dt class="sidebar-dt">Url</dt>
						<dd class="sidebar-dd">
							<a href="#1">http://localhost:8080/documents/20140/</a>
						</dd>
						<dt class="sidebar-dt">Created</dt>
						<dd class="sidebar-dd">
							<a href="#1">Helen Smith</a>
						</dd>
						<dt class="sidebar-dt">Description</dt>
						<dd class="sidebar-dd">A picture of a person using a ruler and exacto knife to cut construction
							paper.</dd>
						<dt class="sidebar-dt">Size</dt>
						<dd class="sidebar-dd">745KB</dd>
						<dt class="sidebar-dt">Tags</dt>
						<dd class="sidebar-dd">
							<span class="label label-lg label-secondary">
								<span class="label-item label-item-expand">Tag One</span>
							</span>
							<span class="label label-lg label-secondary">
								<span class="label-item label-item-expand">Tag Two</span>
							</span>
						</dd>
						<dt class="sidebar-dt">Related Assets</dt>
						<dd class="sidebar-dd">
							<ul class="list-group sidebar-list-group">
								<li class="list-group-item list-group-item-flex">
									<div class="autofit-col">
										<div class="sticker sticker-secondary">
											<span class="inline-item">
												<svg class="lexicon-icon lexicon-icon-blogs" focusable="false"
													role="presentation">
													<use href="/images/icons/icons.svg#blogs"></use>
												</svg>
											</span>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<section class="autofit-section">
											<div class="list-group-title text-truncate-inline">
												<a class="text-truncate"
													href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
											</div>
										</section>
									</div>
								</li>
							</ul>
						</dd>
					</dl>
					<div aria-orientation="vertical" class="panel-group panel-group-flush panel-group-sm" role="tablist">
						<div class="panel panel-unstyled">
							<a aria-controls="collapseOne" aria-expanded="false"
								class="collapse-icon panel-header panel-header-link collapsed" data-toggle="collapse"
								href="#collapseOne" id="headingOne" role="tab">
								<span class="panel-title">Collapsible Group Item #1</span>
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#angle-left"></use>
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#angle-down"></use>
									</svg>
								</span>
							</a>
							<div aria-labelledby="headingOne" class="panel-collapse collapse" id="collapseOne"
								role="tabpanel">
								<div class="panel-body">
									In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte
									extra cup white.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div aria-labelledby="sidebarLightVersionsTab" class="fade tab-pane" id="sidebarLightVersions"
					role="tabpanel">
					<ul class="list-group sidebar-list-group">
						<li class="list-group-item list-group-item-flex">
							<div class="autofit-col autofit-col-expand">
								<div class="list-group-title">Version 1.2</div>
								<div class="list-group-subtitle">By Helen, on 8/31/17 9:15am</div>
								<div class="list-group-subtext">No Change Log</div>
							</div>
							<div class="autofit-col">
								<div class="dropdown dropdown-action">
									<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle"
										data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId01" role="button">
										<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false"
											role="presentation">
											<use href="/images/icons/icons.svg#ellipsis-v"></use>
										</svg>
									</a>
									<ul aria-labelledby="sidebarLightListDropdownId01" class="dropdown-menu"
										x-placement="bottom-start"
										style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 811px, 0px);"
										x-out-of-boundaries="">
										<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
										<li><a class="dropdown-item" href="#1">Edit</a></li>
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

```html
<div class="sidebar sidebar-light">
	<nav class="component-tbar tbar">
		<div class="container-fluid">
			<ul class="tbar-nav">
				<li class="tbar-item">
					<a
						class="component-action disabled"
						href="#1"
						role="button"
						tabindex="-1"
					>
						<svg
							class="lexicon-icon lexicon-icon-angle-left"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#angle-left"
							></use>
						</svg>
					</a>
				</li>
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="text-truncate-inline">
							<span class="text-truncate"
								>Item 1 of
								3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span
							>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<a class="component-action" href="#1" role="button">
						<svg
							class="lexicon-icon lexicon-icon-angle-right"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#angle-right"
							></use>
						</svg>
					</a>
				</li>
				<li class="tbar-item">
					<a class="component-action" href="#1" role="button">
						<svg
							class="lexicon-icon lexicon-icon-times"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#times"></use>
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
					<a
						aria-expanded="false"
						aria-haspopup="true"
						class="component-action dropdown-toggle"
						data-toggle="dropdown"
						href="#1"
						role="button"
					>
						<svg
							class="lexicon-icon lexicon-icon-ellipsis-v"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#ellipsis-v"
							></use>
						</svg>
					</a>
					<ul
						class="dropdown-menu"
						x-placement="bottom-start"
						style="position: absolute; transform: translate3d(-197px, 32px, 0px); top: 0px; left: 0px; will-change: transform;"
					>
						<li>
							<a class="dropdown-item" href="#1" role="button"
								>Download</a
							>
						</li>
						<li>
							<a class="dropdown-item" href="#1" role="button"
								>Move to Recycle Bin</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<nav
			class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline"
		>
			<a
				aria-controls="sidebarLightCollapse00"
				aria-expanded="false"
				aria-label="Toggle Navigation"
				class="collapsed navbar-toggler navbar-toggler-link"
				data-toggle="collapse"
				href="#sidebarLightCollapse00"
				role="button"
			>
				<span class="navbar-text-truncate">Details</span>
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</a>
			<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
				<ul class="nav navbar-nav" role="tablist">
					<li class="nav-item">
						<a
							aria-controls="sidebarLightDetails"
							class="nav-link active"
							data-toggle="tab"
							href="#sidebarLightDetails"
							id="sidebarLightDetailsTab"
							role="tab"
							aria-selected="true"
						>
							<span class="navbar-text-truncate">Details</span>
						</a>
					</li>
					<li class="nav-item">
						<a
							aria-controls="sidebarLightVersions"
							class="nav-link"
							data-toggle="tab"
							href="#sidebarLightVersions"
							id="sidebarLightVersionsTab"
							role="tab"
							aria-selected="false"
						>
							<span class="navbar-text-truncate">Versions</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="tab-content">
			<div
				aria-labelledby="sidebarLightDetailsTab"
				class="fade tab-pane active show"
				id="sidebarLightDetails"
				role="tabpanel"
			>
				<div
					class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel"
					style="margin-top:1.5rem;"
				>
					<img
						alt="thumbnail"
						class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
						src="/images/DeathtoStock_Desk4.jpg"
					/>
					<div class="sticker sticker-bottom-left sticker-danger">
						JPG
					</div>
				</div>
				<dl class="sidebar-dl sidebar-section">
					<dt class="sidebar-dt">Url</dt>
					<dd class="sidebar-dd">
						<a href="#1">http://localhost:8080/documents/20140/</a>
					</dd>
					<dt class="sidebar-dt">Created</dt>
					<dd class="sidebar-dd">
						<a href="#1">Helen Smith</a>
					</dd>
					<dt class="sidebar-dt">Description</dt>
					<dd class="sidebar-dd">
						A picture of a person using a ruler and exacto knife to
						cut construction paper.
					</dd>
					<dt class="sidebar-dt">Size</dt>
					<dd class="sidebar-dd">745KB</dd>
					<dt class="sidebar-dt">Tags</dt>
					<dd class="sidebar-dd">
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand"
								>Tag One</span
							>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand"
								>Tag Two</span
							>
						</span>
					</dd>
					<dt class="sidebar-dt">Related Assets</dt>
					<dd class="sidebar-dd">
						<ul class="list-group sidebar-list-group">
							<li class="list-group-item list-group-item-flex">
								<div class="autofit-col">
									<div class="sticker sticker-secondary">
										<span class="inline-item">
											<svg
												class="lexicon-icon lexicon-icon-blogs"
												focusable="false"
												role="presentation"
											>
												<use
													href="/images/icons/icons.svg#blogs"
												></use>
											</svg>
										</span>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<section class="autofit-section">
										<div
											class="list-group-title text-truncate-inline"
										>
											<a class="text-truncate" href="#1"
												>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a
											>
										</div>
									</section>
								</div>
							</li>
						</ul>
					</dd>
				</dl>
				<div
					aria-orientation="vertical"
					class="panel-group panel-group-flush panel-group-sm"
					role="tablist"
				>
					<div class="panel panel-unstyled">
						<a
							aria-controls="collapseOne"
							aria-expanded="false"
							class="collapse-icon panel-header panel-header-link collapsed"
							data-toggle="collapse"
							href="#collapseOne"
							id="headingOne"
							role="tab"
						>
							<span class="panel-title"
								>Collapsible Group Item #1</span
							>
							<span class="collapse-icon-closed">
								<svg
									class="lexicon-icon lexicon-icon-angle-left"
									focusable="false"
									role="presentation"
								>
									<use
										href="/images/icons/icons.svg#angle-left"
									></use>
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										href="/images/icons/icons.svg#angle-down"
									></use>
								</svg>
							</span>
						</a>
						<div
							aria-labelledby="headingOne"
							class="panel-collapse collapse"
							id="collapseOne"
							role="tabpanel"
						>
							<div class="panel-body">
								In organic dripper so, body, robust medium
								pumpkin spice cup, in aged dripper latte extra
								cup white.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				aria-labelledby="sidebarLightVersionsTab"
				class="fade tab-pane"
				id="sidebarLightVersions"
				role="tabpanel"
			>
				<ul class="list-group sidebar-list-group">
					<li class="list-group-item list-group-item-flex">
						<div class="autofit-col autofit-col-expand">
							<div class="list-group-title">Version 1.2</div>
							<div class="list-group-subtitle">
								By Helen, on 8/31/17 9:15am
							</div>
							<div class="list-group-subtext">No Change Log</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a
									aria-expanded="false"
									aria-haspopup="true"
									class="component-action dropdown-toggle"
									data-toggle="dropdown"
									href="#1"
									id="sidebarLightListDropdownId01"
									role="button"
								>
									<svg
										class="lexicon-icon lexicon-icon-ellipsis-v"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#ellipsis-v"
										></use>
									</svg>
								</a>
								<ul
									aria-labelledby="sidebarLightListDropdownId01"
									class="dropdown-menu"
									x-placement="bottom-start"
									style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 811px, 0px);"
									x-out-of-boundaries=""
								>
									<li>
										<a
											class="dropdown-item"
											href="#1"
											role="button"
											>Download</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#1"
											>Edit</a
										>
									</li>
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

### Sidebar Dark(#css-sidebar-dark)

Just add `sidebar-dark` class on the same element that you are using `sidebar`.

<div class="sheet-example">
	<div class="row">
		<div class="col-md-6">
			<div class="sidebar sidebar-dark">
				<div class="sidebar-header">
					<div class="autofit-row sidebar-section">
						<div class="autofit-col autofit-col-expand">
							<div class="component-title">
								<span class="text-truncate-inline">
									<a class="text-truncate" href="#1">Site Configuration</a>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="sidebar-body">
					<ul class="nav nav-nested">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
						<li class="nav-item"><a class="disabled nav-link" href="#1" tabindex="-1">Documents and Media</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sidebar sidebar-dark">
	<div class="sidebar-header">
		<div class="autofit-row sidebar-section">
			<div class="autofit-col autofit-col-expand">
				<div class="component-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>Site Configuration</a
						>
					</span>
				</div>
			</div>
			<div class="autofit-col">
				<button aria-label="Close" class="close" type="button">
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a class="active nav-link" href="#1">Details</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Categorization</a>
			</li>
			<li class="nav-item">
				<a class="disabled nav-link" href="#1" tabindex="-1"
					>Documents and Media</a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Site Template</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Configuration</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Identification</a>
			</li>
		</ul>
	</div>
</div>
```

### Sidebar Dark L2(#css-sidebar-dark-l2)

Just add `sidebar-dark-l2` class on the same element that you are using `sidebar`.

<div class="sheet-example">
	<div class="row">
		<div class="col-md-6">
			<div class="sidebar sidebar-dark-l2">
				<div class="sidebar-header">
					<div class="autofit-row sidebar-section">
						<div class="autofit-col autofit-col-expand">
							<div class="component-title">
								<span class="text-truncate-inline">
									<a class="text-truncate" href="#1">Site Configuration</a>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="sidebar-body">
					<ul class="nav nav-nested">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
						<li class="nav-item"><a class="disabled nav-link" href="#1" tabindex="-1">Documents and Media</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sidebar sidebar-dark-l2">
	<div class="sidebar-header">
		<div class="autofit-row sidebar-section">
			<div class="autofit-col autofit-col-expand">
				<div class="component-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>Site Configuration</a
						>
					</span>
				</div>
			</div>
			<div class="autofit-col">
				<button aria-label="Close" class="close" type="button">
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a class="active nav-link" href="#1">Details</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Categorization</a>
			</li>
			<li class="nav-item">
				<a class="disabled nav-link" href="#1" tabindex="-1"
					>Documents and Media</a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Site Template</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Configuration</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Identification</a>
			</li>
		</ul>
	</div>
</div>
```
