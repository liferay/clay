---
title: "Management Toolbar"
path: "/docs/management-toolbar.html"
---

### Description

Management toolbar is an extension of Toolbar. A combination of different components as filters, orders, search, visualization select and other actions, that allow to manage dataset.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Toolbars/management_bar.html">Management Toolbar Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-management-bar">

<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
					<span class="navbar-text-truncate">Filter and Order</span>{sp}
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<a aria-expanded="false" aria-haspopup="true" class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-filter">
						<use xlink:href="/vendor/lexicon/icons.svg#filter" />
					</svg>
				</a>
				<div class="dropdown-menu" role="menu">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Filter Action 1</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Filter Action 2</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Filter Action 3</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a class="btn nav-link nav-link-monospaced order-arrow-down-active btn-unstyled" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow">
						<use xlink:href="/vendor/lexicon/icons.svg#order-arrow" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
			<div class="container">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
							<span class="input-group-inset-item input-group-inset-item-after">
								<button class="btn btn-unstyled navbar-breakpoint-d-none" type="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use xlink:href="/vendor/lexicon/icons.svg#times" />
									</svg>
								</button>
								<button class="btn btn-unstyled navbar-breakpoint-d-block" type="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
										<use xlink:href="/vendor/lexicon/icons.svg#search" />
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
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
						<use xlink:href="/vendor/lexicon/icons.svg#search" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
						<use xlink:href="/vendor/lexicon/icons.svg#list" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start" role="menu">
					<ul class="list-unstyled">
						<li><a class="active dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
									<use xlink:href="/vendor/lexicon/icons.svg#list" />
								</svg>
							</span>
							List View
						</a></li>
						<li><a class="dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-table">
									<use xlink:href="/vendor/lexicon/icons.svg#table" />
								</svg>
							</span>
							Table View
						</a></li>
						<li><a class="dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cards2">
									<use xlink:href="/vendor/lexicon/icons.svg#cards2" />
								</svg>
							</span>
							Card View
						</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<button class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
						<use xlink:href="/vendor/lexicon/icons.svg#plus" />
					</svg>
				</button>
			</li>
		</ul>
	</div>
</nav>

<nav class="management-bar management-bar-primary navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="nav-item">
				<span class="navbar-text">
					3 of 7
					<span class="navbar-breakpoint-down-d-none"> items selected</span>
				</span>
			</li>
			<li class="nav-item">
				<button class="btn btn-link nav-btn" type="button">
					Select all
				</button>
			</li>
		</ul>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
			</li>
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-paste">
						<use xlink:href="/vendor/lexicon/icons.svg#paste" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right" role="menu">
					<ul class="list-unstyled">
						<li><a class="active dropdown-item" href="#1">Remove</a></li>
						<li><a class="dropdown-item">Download</a></li>
						<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
						<li><a class="dropdown-item" href="#1">Edit</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>

```soy
{call ClayManagementToolbar.render}
	{param creationMenu: [
		'items': [
			[
				'href': '#1',
				'label': 'Add Content 1'
			],
			[
				'href': '#2',
				'label': 'Add Content 2'
			]
		]
	] /}
	{param searchFormName: 'mySearchName' /}
	{param searchInputName: 'mySearchInputName' /}
	{param selectable: true /}
	{param sortingOrder: 'desc' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param viewTypes: [
		[
			'active': true,
			'icon': 'list',
			'label': 'List'
		],
		[
			'disabled': true,
			'icon': 'table',
			'label': 'Table'
		],
		[
			'icon': 'cards2',
			'label': 'Card'
		],
	] /}
{/call}

{call ClayManagementToolbar.render}
	{param actionItems: [
		[
			'href': '#1',
			'label': 'Edit'
		],
		[
			'href': '#2',
			'label': 'Preview'
		]
	] /}
	{param selectable: true /}
	{param selectedItems: 3 /}
	{param sortingOrder: 'desc' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param totalItems: 7 /}
{/call}
```
```text/html
<clay-management-toolbar
	creationMenu='
		"items": [
			{
				"href": "#1",
				"label": "Add Content 1"
			},
			{
				"href": "#2",
				"label": "Add Content 2"
			}
		]
	'
	searchFormName="mySearchName"
	searchInputName="mySearchInputName"
	selectable="true"
	sortingOrder="desc"
	spritemap="/vendor/lexicon/icons.svg"
	viewTypes='[
		{
			"active": true,
			"icon": "list",
			"label": "List"
		},
		{
			"disabled": true,
			"icon": "table",
			"label": "Table"
		},
		{
			"icon": "cards2",
			"label": "Card"
		}
	]'>
</clay-management-toolbar>

<clay-management-toolbar
	actionItems='[
		{
			"href": "#1",
			"label": "Edit"
		},
		{
			"href": "#2",
			"label": "Preview"
		}
	]'
	selectable="true"
	selectedItems="3"
	sortingOrder="desc"
	spritemap="/vendor/lexicon/icons.svg"
	totalItems="7">
</clay-management-toolbar>
```
```text/html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<a aria-expanded="false" aria-haspopup="true" class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-filter">
						<use xlink:href="/vendor/lexicon/icons.svg#filter" />
					</svg>
				</a>
				<div class="dropdown-menu" role="menu">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Filter Action 1</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Filter Action 2</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Filter Action 3</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a class="btn -link nav-link-monospaced order-arrow-down-active btn-unstyled" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow">
						<use xlink:href="/vendor/lexicon/icons.svg#order-arrow" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
			<div class="container">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
							<span class="input-group-inset-item input-group-inset-item-after">
								<button class="btn btn-unstyled navbar-breakpoint-d-none" type="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use xlink:href="/vendor/lexicon/icons.svg#times" />
									</svg>
								</button>
								<button class="btn btn-unstyled navbar-breakpoint-d-block" type="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
										<use xlink:href="/vendor/lexicon/icons.svg#search" />
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
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
						<use xlink:href="/vendor/lexicon/icons.svg#search" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
						<use xlink:href="/vendor/lexicon/icons.svg#list" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start" role="menu">
					<ul class="list-unstyled">
						<li><a class="active dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
									<use xlink:href="/vendor/lexicon/icons.svg#list" />
								</svg>
							</span>
							List View
						</a></li>
						<li><a class="dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-table">
									<use xlink:href="/vendor/lexicon/icons.svg#table" />
								</svg>
							</span>
							Table View
						</a></li>
						<li><a class="dropdown-item" href="#1">
							<span class="dropdown-item-indicator">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cards2">
									<use xlink:href="/vendor/lexicon/icons.svg#cards2" />
								</svg>
							</span>
							Card View
						</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<button class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
						<use xlink:href="/vendor/lexicon/icons.svg#plus" />
					</svg>
				</button>
			</li>
		</ul>
	</div>
</nav>

<nav class="management-bar management-bar-primary navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="nav-item">
				<span class="navbar-text">
					3 of 7
					<span class="navbar-breakpoint-down-d-none"> items selected</span>
				</span>
			</li>
			<li class="nav-item">
				<button class="btn btn-link nav-btn" type="button">
					Select all
				</button>
			</li>
		</ul>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
			</li>
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-paste">
						<use xlink:href="/vendor/lexicon/icons.svg#paste" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right" role="menu">
					<ul class="list-unstyled">
						<li><a class="active dropdown-item" href="#1">Remove</a></li>
						<li><a class="dropdown-item">Download</a></li>
						<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
						<li><a class="dropdown-item" href="#1">Edit</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

</article>


<article id="management-toolbar-with-only-search">
<h3 class="component-title">
	<a href="#management-toolbar-with-only-search">Management Toolbar with Only Search</a>
</h3>

<div>
	<nav class="management-bar management-bar-light navbar navbar-expand-md">
		<div class="container-fluid container-fluid-max-xl">
			<div class="navbar-form navbar-form-autofit">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
							<span class="input-group-inset-item input-group-inset-item-after">
								<button class="btn btn-unstyled" type="submit">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
										<use xlink:href="/vendor/lexicon/icons.svg#search" />
									</svg>
								</button>
								<button class="btn btn-unstyled d-none" type="button">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use xlink:href="/vendor/lexicon/icons.svg#times" />
									</svg>
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	</nav>
</div>

```text/html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<div class="navbar-form navbar-form-autofit">
			<form role="search">
				<div class="input-group">
					<div class="input-group-item">
						<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
						<span class="input-group-inset-item input-group-inset-item-after">
							<button class="btn btn-unstyled" type="submit">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
									<use xlink:href="/vendor/lexicon/icons.svg#search" />
								</svg>
							</button>
							<button class="btn btn-unstyled d-none" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</button>
						</span>
					</div>
				</div>
			</form>
		</div>
	</div>
</nav>
```

</article>


<article id="management-toolbar-search-summary">
<h3 class="component-title">
	<a href="#management-toolbar-search-summary">Management Toolbar Search Summary</a>
</h3>

<div>
	<nav class="tbar subnav-tbar subnav-tbar-primary">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="tbar-nav">
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="component-title text-truncate-inline">
							<span class="text-truncate">Results for Master (19 Items)</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</div>

```text/html
<nav class="tbar subnav-tbar subnav-tbar-primary">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-title text-truncate-inline">
						<span class="text-truncate">Results for Master (19 Items)</span>
					</span>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

</article>


<article id="management-toolbar-search-results">
<h3 class="component-title">
	<a href="#management-toolbar-search-results">Management Toolbar Seach Results</a>
</h3>

<div>
	<nav class="tbar subnav-tbar subnav-tbar-primary">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="tbar-nav">
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="component-text text-truncate-inline">
							<span class="text-truncate">25,392 results for <strong>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</strong></span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<button class="btn btn-unstyled component-link tbar-link" type="button">Clear</button>
				</li>
			</ul>
		</div>
	</nav>
</div>

```text/html
<nav class="tbar subnav-tbar subnav-tbar-primary">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-text text-truncate-inline">
						<span class="text-truncate">25,392 results for <strong>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</strong></span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<button class="btn btn-unstyled component-link tbar-link" type="button">Clear</button>
			</li>
		</ul>
	</div>
</nav>
```

</article>
