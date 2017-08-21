---
title: List Groups
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### List Group Item Flex

> Align content inside `.list-group-item` with flexbox with `.list-group-item-flex`.

> Use a combination of `.flex-col` and `.flex-col.flex-col-expand` to control the size of each cell.

> Add the class `show-dropdown-action-on-active` to display `dropdown-menu`'s on active in List Groups.

<div class="alert alert-warning">
	Direct descendants of <code>flex-col</code> become block level elements by default, see <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">https://www.w3.org/TR/css-flexbox-1/#flex-items</a>. If you want to display content using <code>floats</code>, <code>inline</code>, or <code>inline-block</code> wrap the content with a block level element such as a div.
</div>

<ul class="list-group show-dropdown-action-on-active">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div>
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example Two</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div>
				<span class="label label-danger">Rejected</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>

```xml
<ul class="list-group show-dropdown-action-on-active">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div>
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example Two</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div>
				<span class="label label-danger">Rejected</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="2">

### List Group Bordered

> Use `.list-group-bordered` on `.list-group` to style `.list-group-item-flex` like a table.

<ul class="list-group list-group-bordered show-dropdown-action-on-active">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title truncate-text">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle truncate-text">Second Level Text</p>
			<div>
				<span class="label label-warning">Pending</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example Two</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div>
				<span class="label label-info">Info</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>

```xml
<ul class="list-group list-group-bordered show-dropdown-action-on-active">
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title truncate-text">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle truncate-text">Second Level Text</p>
			<div>
				<span class="label label-warning">Pending</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example Two</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div>
				<span class="label label-info">Info</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="3">

### List Group Header

<ul class="list-group show-dropdown-action-on-active">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 1</h3>
	</li>
	<li class="list-group-item">List Item 1</li>
	<li class="list-group-item">List Item 2</li>
	<li class="list-group-item">List Item 3</li>
	<li class="list-group-item">List Item 4</li>
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 2</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div>
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div>
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>

```xml
<ul class="list-group show-dropdown-action-on-active">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 1</h3>
	</li>
	<li class="list-group-item">List Item 1</li>
	<li class="list-group-item">List Item 2</li>
	<li class="list-group-item">List Item 3</li>
	<li class="list-group-item">List Item 4</li>
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 2</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div>
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="checkbox">
				<label>
					<input type="checkbox" />
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div>
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="4">

### List Group Unstyled

> Use `.list-group-unstyled` on `.list-group` to remove default styles.

<ul class="list-group list-group-unstyled">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 1</h3>
	</li>
	<li class="list-group-item">List Item 1</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col flex-col-expand">
			<div class="h5">Larry Bird the best power forward in Celtic's history.</div>
			<div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
			<div class="h6">
				<span>5 Folders</span>
				<span>4 Entries</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 2</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col flex-col-expand">
			<div class="h5">Karl Malone the best power forward in Jazz history.</div>
			<div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
			<div class="h6">
				<span>5 Folders</span>
				<span>4 Entries</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>

```xml
<ul class="list-group list-group-unstyled">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 1</h3>
	</li>
	<li class="list-group-item">List Item 1</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col flex-col-expand">
			<div class="h5">Larry Bird the best power forward in Celtic's history.</div>
			<div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
			<div class="h6">
				<span>5 Folders</span>
				<span>4 Entries</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header 2</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col flex-col-expand">
			<div class="h5">Karl Malone the best power forward in Jazz history.</div>
			<div class="h6"><a class="list-group-link" href="#1">Monica Bellucci</a></div>
			<div class="h6">
				<span>5 Folders</span>
				<span>4 Entries</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle">
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="dropdown-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="5">

### List Group with Links and Buttons

<div class="list-group">
	<a class="list-group-item list-group-item-action" href="#1">List Item 1</a>
	<a class="list-group-item list-group-item-action" href="#1">List Item 2</a>
	<button class="list-group-item list-group-item-action" type="button">List Item 3</button>
	<a class="list-group-item list-group-item-action" href="#1">List Item 4</a>
</div>

```xml
<div class="list-group">
	<a class="list-group-item list-group-item-action" href="#1">List Item 1</a>
	<a class="list-group-item list-group-item-action" href="#1">List Item 2</a>
	<button class="list-group-item list-group-item-action" type="button">List Item 3</button>
	<a class="list-group-item list-group-item-action" href="#1">List Item 4</a>
</div>
```

</article>

<article id="6">

### Contextual List Group

<ul class="list-group">
	<li class="list-group-item">List Item Normal</li>
	<li class="list-group-item list-group-item-success">List Item Success</li>
	<li class="list-group-item list-group-item-info">List Item Info</li>
	<li class="list-group-item list-group-item-warning">List Item Warning</li>
	<li class="list-group-item list-group-item-danger">List Item Danger</li>
	<li class="list-group-item list-group-item-light">List Item Light</li>
	<li class="list-group-item list-group-item-dark">List Item Dark</li>
</ul>

```xml
<ul class="list-group">
	<li class="list-group-item">List Item Normal</li>
	<li class="list-group-item list-group-item-success">List Item Success</li>
	<li class="list-group-item list-group-item-info">List Item Info</li>
	<li class="list-group-item list-group-item-warning">List Item Warning</li>
	<li class="list-group-item list-group-item-danger">List Item Danger</li>
	<li class="list-group-item list-group-item-light">List Item Light</li>
	<li class="list-group-item list-group-item-dark">List Item Dark</li>
</ul>
```

</article>

<article id="7">

### Linked Contextual List Groups

<div class="row">
	<div class="col-sm-6">
		<div class="list-group">
			<a class="list-group-item list-group-item-action" href="#1">List Item Action Normal</a>
			<a class="list-group-item list-group-item-action list-group-item-success" href="#1">List Item Action Success</a>
			<a class="list-group-item list-group-item-action list-group-item-info" href="#1">List Item Action Info</a>
			<a class="list-group-item list-group-item-action list-group-item-warning" href="#1">List Item Action Warning</a>
			<a class="list-group-item list-group-item-action list-group-item-danger" href="#1">List Item Action Danger</a>
			<a class="list-group-item list-group-item-action list-group-item-light" href="#1">List Item Action Light</a>
			<a class="list-group-item list-group-item-action list-group-item-dark" href="#1">List Item Action Dark</a>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="list-group">
			<a class="active list-group-item list-group-item-action" href="#1">List Item Action Normal Active</a>
			<a class="active list-group-item list-group-item-action list-group-item-success" href="#1">List Item Action Success Active</a>
			<a class="active list-group-item list-group-item-action list-group-item-info" href="#1">List Item Action Info Active</a>
			<a class="active list-group-item list-group-item-action list-group-item-warning" href="#1">List Item Action Warning Active</a>
			<a class="active list-group-item list-group-item-action list-group-item-danger" href="#1">List Item Action Danger Active</a>
			<a class="active list-group-item list-group-item-action list-group-item-light" href="#1">List Item Action Light Active</a>
			<a class="active list-group-item list-group-item-action list-group-item-dark" href="#1">List Item Action Dark Active</a>
		</div>
	</div>
</div>

```xml
<div class="list-group">
	<a class="list-group-item list-group-item-action" href="#1">List Item Action Normal</a>
	<a class="list-group-item list-group-item-action list-group-item-success" href="#1">List Item Action Success</a>
	<a class="list-group-item list-group-item-action list-group-item-info" href="#1">List Item Action Info</a>
	<a class="list-group-item list-group-item-action list-group-item-warning" href="#1">List Item Action Warning</a>
	<a class="list-group-item list-group-item-action list-group-item-danger" href="#1">List Item Action Danger</a>
	<a class="list-group-item list-group-item-action list-group-item-light" href="#1">List Item Action Light</a>
	<a class="list-group-item list-group-item-action list-group-item-dark" href="#1">List Item Action Dark</a>
</div>

<div class="list-group">
	<a class="active list-group-item list-group-item-action" href="#1">List Item Action Normal Active</a>
	<a class="active list-group-item list-group-item-action list-group-item-success" href="#1">List Item Action Success Active</a>
	<a class="active list-group-item list-group-item-action list-group-item-info" href="#1">List Item Action Info Active</a>
	<a class="active list-group-item list-group-item-action list-group-item-warning" href="#1">List Item Action Warning Active</a>
	<a class="active list-group-item list-group-item-action list-group-item-danger" href="#1">List Item Action Danger Active</a>
	<a class="active list-group-item list-group-item-action list-group-item-light" href="#1">List Item Action Light Active</a>
	<a class="active list-group-item list-group-item-action list-group-item-dark" href="#1">List Item Action Dark Active</a>
</div>
```

<script>
{literal}
var onClick = function(node) {
    console.log('clicked');
    $(node).closest('.list-group-item').toggleClass('active');
};
{/literal}
</script>

</article>