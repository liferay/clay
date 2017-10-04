---
title: Dropdowns
description: Components
layout: "guide"
weight: 100
---

<article id="dropdown-action">

### Dropdown Action

> A monospaced `dropdown-toggle` for a dropdown containing several actions, add `dropdown-action` to `dropdown`.

<div class="dropdown dropdown-action">
	<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
			<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
		</svg>
	</a>
	<div aria-labelledby="dropdownAction1" class="dropdown-menu">
		<a class="dropdown-item" href="#1">Download</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">Move</a>
		<a class="dropdown-item" href="#1">Checkout</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
	</div>
</div>

<div class="dropdown dropdown-action">
	<button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" id="dropdownAction2" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
			<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAction2" class="dropdown-menu">
		<button class="dropdown-item" type="button">Button</button>
		<button class="btn btn-link dropdown-item" type="button">Btn Link</button>
		<button class="btn btn-unstyled dropdown-item" type="button">Btn Unstyled</button>
		<a class="dropdown-item" href="#1">Checkout</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
	</div>
</div>

<div class="dropdown dropdown-action">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle" data-toggle="dropdown" id="dropdownAction3" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
			<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAction3" class="dropdown-menu">
		<a class="dropdown-item" href="#1">Download</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">Move</a>
		<a class="dropdown-item" href="#1">Checkout</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
	</div>
</div>

```text/html
<div class="dropdown dropdown-action">
	<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
			<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
		</svg>
	</a>
	<div aria-labelledby="dropdownAction1" class="dropdown-menu">
		<a class="dropdown-item" href="#1">Download</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">Move</a>
		<a class="dropdown-item" href="#1">Checkout</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
	</div>
</div>
```

</article>


<article id="dropdown-menu">

### Dropdown Menu

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu">
		<div class="dropdown-subheader">Order by</div>
		<a class="active dropdown-item" href="#">Author</a>
		<a class="disabled dropdown-item" href="#">Title Entry</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Date</a>
		<a class="dropdown-item" href="#">Description</a>
		<a class="dropdown-item" href="#">Status</a>
	</div>
</div>

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu">
		<form>
			<div class="dropdown-section">
				<div class="input-group input-group-inset input-group-sm">
					<div class="input-group-input">
						<input class="form-control" placeholder="Search for..." type="text">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-unstyled" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
								<use xlink:href="/vendor/lexicon/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
			<div class="dropdown-subheader">Filter by</div>
			<div class="active dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Selected Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Normal Option</span>
					</label>
				</div>
			</div>
			<div class="disabled dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input disabled class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Disabled Option</span>
					</label>
				</div>
			</div>
		</form>
	</div>
</div>

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu">
		<form>
			<div class="dropdown-subheader">Order by</div>
			<div class="active dropdown-item">
				<div class="custom-control custom-radio">
					<label>
						<input checked class="custom-control-input" id="dropdownRadio1" name="dropdownRadio" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Selected Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-item">
				<div class="custom-control custom-radio">
					<label>
						<input class="custom-control-input" id="dropdownRadio2" name="dropdownRadio" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Normal Option</span>
					</label>
				</div>
			</div>
			<div class="disabled dropdown-item">
				<div class="custom-control custom-radio">
					<label>
						<input disabled class="custom-control-input" id="dropdownRadio3" name="dropdownRadio" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Disabled Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-section">
				<button class="btn btn-block btn-primary" type="submit">Done</button>
			</div>
		</form>
	</div>
</div>

```text/html
<div aria-labelledby="" class="dropdown-menu">
	<div class="dropdown-subheader">Order by</div>
	<a class="active dropdown-item" href="#">Author</a>
	<a class="disabled dropdown-item" href="#">Title Entry</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#">Date</a>
	<a class="dropdown-item" href="#">Description</a>
	<a class="dropdown-item" href="#">Status</a>
</div>
```

</article>


<article id="dropdown-menu-indicator-start">

### Dropdown Menu Indicator Start

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu dropdown-menu-indicator-start">
		<div class="dropdown-header">Dropdown Header</div>
		<div class="dropdown-divider"></div>
		<div class="dropdown-subheader">Dropdown Sub Header</div>
		<a class="dropdown-item" href="#1">
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
			Ticket Buyer Information
		</a>
		<a class="dropdown-item" href="#1">
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
			Attendee Information
		</a>
		<a class="dropdown-item" href="#1">
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
			Seat Assignment
		</a>
		<a class="active dropdown-item" href="#1">Dinner Preference</a>
		<a class="dropdown-item" href="#1">Submit Payment</a>
		<div class="dropdown-caption">Dropdown Caption</div>
	</div>
</div>

```text/html
<div aria-labelledby="" class="dropdown-menu dropdown-menu-indicator-start">
	<div class="dropdown-header">Dropdown Header</div>
	<div class="dropdown-divider"></div>
	<div class="dropdown-subheader">Dropdown Sub Header</div>
	<a class="dropdown-item" href="#1">
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
		Ticket Buyer Information
	</a>
	<a class="dropdown-item" href="#1">
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
		Attendee Information
	</a>
	<a class="dropdown-item" href="#1">
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
		Seat Assignment
	</a>
	<a class="active dropdown-item" href="#1">Dinner Preference</a>
	<a class="dropdown-item" href="#1">Submit Payment</a>
	<div class="dropdown-caption">Dropdown Caption</div>
</div>
```

### Dropdown Menu Indicator End

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu dropdown-menu-indicator-end">
		<div class="dropdown-header">Folder</div>
		<div class="dropdown-divider"></div>
		<div class="dropdown-subheader">Order By</div>
		<a class="active dropdown-item" href="#1">
			Step 01
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
		</a>
		<a class="disabled dropdown-item" href="#1">
			Step 02
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
		</a>
		<a class="dropdown-item" href="#1">
			Step 03
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use xlink:href="/vendor/lexicon/icons.svg#times" />
				</svg>
			</div>
		</a>
		<a class="dropdown-item" href="#1">Step 04</a>
		<a class="dropdown-item" href="#1">Step 05</a>
		<div class="dropdown-caption">Showing 190,722 of 192,842 Things</div>
	</div>
</div>

```text/html
<div aria-labelledby="" class="dropdown-menu dropdown-menu-indicator-end">
	<div class="dropdown-header">Folder</div>
	<div class="dropdown-divider"></div>
	<div class="dropdown-subheader">Order By</div>
	<a class="active dropdown-item" href="#1">
		Step 01
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
	</a>
	<a class="disabled dropdown-item" href="#1">
		Step 02
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
	</a>
	<a class="dropdown-item" href="#1">
		Step 03
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</div>
	</a>
	<a class="dropdown-item" href="#1">Step 04</a>
	<a class="dropdown-item" href="#1">Step 05</a>
	<div class="dropdown-caption">Showing 190,722 of 192,842 Things</div>
</div>
```

</article>


<article id="scrolling-content">

### Scrolling Content

> Nest `<div class="inline-scroller"></div>` inside a `.dropdown-menu` list item to create a scrollable dropdown. The maximum height is 200px on screen sizes 768px and above, on screen sizes 767px and below the overflow is handled by `.dropdown-menu`.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu">
		<div class="dropdown-header">Dropdown Header</div>
		<div class="inline-scroller">
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
		</div>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu">
		<div class="alert alert-fluid alert-info" role="alert">
			You can customize this menu or see all you have by pressing "more".
		</div>
		<div class="dropdown-header">Folder</div>
		<div class="dropdown-divider"></div>
		<div class="dropdown-subheader">Favorites</div>
		<div class="inline-scroller">
			<a class="dropdown-item" href="#1">D Structure</a>
			<a class="dropdown-item" href="#1">F Structure</a>
			<a class="disabled dropdown-item" href="#1">H Structure</a>
			<a class="dropdown-item" href="#1">J Structure</a>
			<a class="dropdown-item" href="#1">L Structure</a>
			<a class="dropdown-item" href="#1">M Structure</a>
			<a class="dropdown-item" href="#1">P Structure</a>
			<a class="dropdown-item" href="#1">Q Structure</a>
			<a class="dropdown-item" href="#1">R Structure</a>
			<a class="dropdown-item" href="#1">S Structure</a>
			<a class="dropdown-item" href="#1">T Structure</a>
			<a class="dropdown-item" href="#1">U Structure</a>
		</div>
		<div class="dropdown-caption">Showing 7 of 203 Structures</div>
		<div class="dropdown-section">
			<button class="btn btn-block btn-secondary">More</button>
		</div>
	</div>
</div>

```text/html
<div aria-labelledby="" class="dropdown-menu">
	<div class="dropdown-header">Dropdown Header</div>
	<div class="inline-scroller">
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
	</div>
	<a class="disabled dropdown-item" href="#">Disabled</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#">Scope</a>
</div>
```

</article>


<article id="dropdown-wide-full">

### Dropdown Wide / Full

> Use `.dropdown-wide` with `.dropdown` to make the dropdown menu big. The default width is 500px. Use `.dropdown-full` to create a dropdown menu as wide as its relative parent. See dropdown examples.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-wide dropdown-wide-container">
		<div class="dropdown-menu">
			<div class="row">
				<div class="col-sm-4">
					<div class="dropdown-subheader">By Resource</div>
					<a class="dropdown-item" href="#1">Support Home</a>
					<a class="disabled dropdown-item" href="#1">Disabled Link</a>
					<a class="dropdown-item" href="#1">Chat or Call</a>
					<div class="dropdown-subheader">By Product</div>
					<a class="active dropdown-item" href="#1">Developing for the Platform</a>
					<a class="dropdown-item" href="#1">Mastering Fundamentals</a>
					<a class="dropdown-item" href="#1">Styling with Themes</a>
					<a class="dropdown-item" href="#1">Managing Content</a>
				</div>
				<div class="col-sm-4">
					<div class="dropdown-subheader">Popular Picks</div>
					<a class="dropdown-item" href="#1">Error Messages</a>
					<a class="dropdown-item" href="#1">Updates: Service Packs & Fixes</a>
					<a class="dropdown-item" href="#1">Install, Upgrade, & Activate</a>
					<a class="dropdown-item" href="#1">Regular Drivers</a>
					<a class="dropdown-item" href="#1">Hardware Drivers</a>
					<div class="dropdown-subheader">Security</div>
					<a class="dropdown-item" href="#1">Security Home</a>
					<a class="dropdown-item" href="#1">Security Essentials</a>
					<a class="dropdown-item" href="#1">Protecting Your Data</a>
					<a class="dropdown-item" href="#1">Securing Your Browser</a>
				</div>
				<div class="col-sm-4">
					<div class="dropdown-subheader">By Audience</div>
					<a class="dropdown-item" href="#1">For Home Users</a>
					<a class="dropdown-item" href="#1">For Small Business</a>
					<a class="dropdown-item" href="#1">For IT Professionals</a>
					<a class="dropdown-item" href="#1">For Developers</a>
				</div>
			</div>
		</div>
	</div>
</div>

```text/html
<div aria-labelledby="" class="dropdown-wide dropdown-wide-container">
	<div class="dropdown-menu">
		<div class="row">
			<div class="col-sm-4">
				<div class="dropdown-subheader">By Resource</div>
				<a class="dropdown-item" href="#1">Support Home</a>
				<a class="disabled dropdown-item" href="#1">Disabled Link</a>
				<a class="dropdown-item" href="#1">Chat or Call</a>
				<div class="dropdown-subheader">By Product</div>
				<a class="active dropdown-item" href="#1">Developing for the Platform</a>
				<a class="dropdown-item" href="#1">Mastering Fundamentals</a>
				<a class="dropdown-item" href="#1">Styling with Themes</a>
				<a class="dropdown-item" href="#1">Managing Content</a>
			</div>
			<div class="col-sm-4">
				<div class="dropdown-subheader">Popular Picks</div>
				<a class="dropdown-item" href="#1">Error Messages</a>
				<a class="dropdown-item" href="#1">Updates: Service Packs & Fixes</a>
				<a class="dropdown-item" href="#1">Install, Upgrade, & Activate</a>
				<a class="dropdown-item" href="#1">Regular Drivers</a>
				<a class="dropdown-item" href="#1">Hardware Drivers</a>
				<div class="dropdown-subheader">Security</div>
				<a class="dropdown-item" href="#1">Security Home</a>
				<a class="dropdown-item" href="#1">Security Essentials</a>
				<a class="dropdown-item" href="#1">Protecting Your Data</a>
				<a class="dropdown-item" href="#1">Securing Your Browser</a>
			</div>
			<div class="col-sm-4">
				<div class="dropdown-subheader">By Audience</div>
				<a class="dropdown-item" href="#1">For Home Users</a>
				<a class="dropdown-item" href="#1">For Small Business</a>
				<a class="dropdown-item" href="#1">For IT Professionals</a>
				<a class="dropdown-item" href="#1">For Developers</a>
			</div>
		</div>
	</div>
</div>
```

</article>


<article id="dropdown-menu-horizontal">

### Dropdown Menu Horizontal

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal">
		<div class="dropdown-subheader">Order by</div>
		<a class="active dropdown-item" href="#1">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
				<use xlink:href="/vendor/lexicon/icons.svg#trash" />
			</svg>
		</a>
		<a class="disabled dropdown-item" href="#1">
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

```text/html
<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal">
	<div class="dropdown-subheader">Order by</div>
	<a class="active dropdown-item" href="#1">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
			<use xlink:href="/vendor/lexicon/icons.svg#trash" />
		</svg>
	</a>
	<a class="disabled dropdown-item" href="#1">
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
```

</article>


<article id="dropdown-alignment">

### Dropdown Alignment

> Align a dropdown menu on the top or bottom side with classes `dropdown-menu`, `dropdown-menu-right`, `dropdown-menu-top`, or `dropdown-menu-top-right`.

<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment1" type="button">
		Default
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment1" class="dropdown-menu">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment2" type="button">
		Right
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment2" class="dropdown-menu dropdown-menu-right">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment3" type="button">
		Top
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment3" class="dropdown-menu dropdown-menu-top">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment4" type="button">
		Top Right
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment4" class="dropdown-menu dropdown-menu-top-right">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

> Align a dropdown menu on the left or right side with classes `dropdown-menu-right-side`, `dropdown-menu-left-side`, `dropdown-menu-right-side-bottom`, or `dropdown-menu-left-side-bottom`.

<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment5" type="button">
		Right Side
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
			<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment5" class="dropdown-menu dropdown-menu-right-side">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment6" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
			<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
		</svg>
		Left Side
	</button>
	<div aria-labelledby="dropdownAlignment6" class="dropdown-menu dropdown-menu-left-side">
		<div class="dropdown-header">Dropdown Header</div>
		<div class="inline-scroller">
			<a class="dropdown-item" href="#">Action</a>
			<a class="disabled dropdown-item" href="#">Disabled</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
		</div>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment7" type="button">
		Right Side Bottom
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
			<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment7" class="dropdown-menu dropdown-menu-right-side-bottom">
		<div class="inline-scroller">
			<div class="dropdown-header">Dropdown Header</div>
			<a class="dropdown-item" href="#">Action</a>
			<a class="disabled dropdown-item" href="#">Disabled</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
		</div>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment8" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
			<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
		</svg>
		Left Side Bottom
	</button>
	<div aria-labelledby="dropdownAlignment8" class="dropdown-menu dropdown-menu-left-side-bottom">
		<ul class="inline-scroller">
			<div class="dropdown-header">Dropdown Header</div>
			<a class="dropdown-item" href="#">Action</a>
			<a class="disabled dropdown-item" href="#">Disabled</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
		</ul>
	</div>
</div>

> We've also added the option to center the dropdown to its trigger in the 4 different dropdown-menu positions with classes `dropdown-menu-center`, `dropdown-menu-top-center`, `dropdown-menu-left-side-middle`, or `dropdown-menu-right-side-middle`.

<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment9" type="button">
		Center
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment9" class="dropdown-menu dropdown-menu-center">
		<div class="dropdown-header">dropdown-menu-center</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment10" type="button">
		Top Center
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment10" class="dropdown-menu dropdown-menu-top-center">
		<div class="dropdown-header">dropdown-menu-top-center</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment11" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
			<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
		</svg>
		Left Side Middle
	</button>
	<div aria-labelledby="dropdownAlignment11" class="dropdown-menu dropdown-menu-left-side-middle">
		<div class="dropdown-header">Dropdown Header</div>
		<div class="inline-scroller">
			<a class="dropdown-item" href="#">Action</a>
			<a class="disabled dropdown-item" href="#">Disabled</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
			<a class="dropdown-item" href="#">Scope</a>
		</div>
	</div>
</div>
<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment12" type="button">
		Right Side Middle
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
			<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAlignment12" class="dropdown-menu dropdown-menu-right-side-middle">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

</article>


<article id="dropdowns-in-navbar">

### Dropdowns in Navbar

<nav class="navbar navbar-expand navbar-light" style="margin-bottom:566px;">
	<div class="container-fluid">
		<ul class="navbar-nav">
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" id="navbarDropdownMenuLink1">
					Dropdown
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink1" class="dropdown-menu">
					<form>
						<div class="dropdown-section">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div class="dropdown-section">
							<label for="exampleInputEmail3">Email address</label>
							<input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
						</div>
						<div class="dropdown-item">
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value=""> Approved
								</label>
							</div>
						</div>
						<div class="dropdown-item">
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value=""> Draft
								</label>
							</div>
						</div>
						<div class="dropdown-item">
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value=""> Pending
								</label>
							</div>
						</div>
						<div class="dropdown-item">
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value=""> Expired
								</label>
							</div>
						</div>
						<div class="dropdown-item">
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value=""> Scheduled
								</label>
							</div>
						</div>
						<div class="dropdown-item">
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value=""> Rejected
								</label>
							</div>
						</div>
					</form>
					<a class="dropdown-item" href="#1">Something Outside</a>
				</div>
			</li>
			<li class="dropdown dropdown-wide nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" id="navbarDropdownMenuLink2">
					Dropdown Wide
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink2" class="dropdown-menu">
					<div class="row">
						<div class="col-sm-4">
							<div class="dropdown-header">By Resource</div>
							<a class="disabled dropdown-item" href="#1">Support Home</a>
							<a class="dropdown-item" href="#1">Ask the Experts</a>
							<a class="dropdown-item" href="#1">Chat or Call</a>
							<div class="dropdown-header">By Product</div>
							<a class="active dropdown-item" href="#1">Developing for the Platform</a>
							<a class="dropdown-item" href="#1">Mastering Fundamentals</a>
							<a class="dropdown-item" href="#1">Styling with Themes</a>
							<a class="dropdown-item" href="#1">Managing Content</a>
						</div>
						<div class="col-sm-4">
							<div class="dropdown-header">Popular Picks</div>
							<a class="dropdown-item" href="#1">Error Messages</a>
							<a class="dropdown-item" href="#1">Updates: Service Packs & Fixes</a>
							<a class="dropdown-item" href="#1">Install, Upgrade, & Activate</a>
							<a class="dropdown-item" href="#1">Regular Drivers</a>
							<a class="dropdown-item" href="#1">Hardware Drivers</a>
							<div class="dropdown-header">Security</div>
							<a class="dropdown-item" href="#1">Security Home</a>
							<a class="dropdown-item" href="#1">Security Essentials</a>
							<a class="dropdown-item" href="#1">Protecting Your Data</a>
							<a class="dropdown-item" href="#1">Securing Your Browser</a>
						</div>
						<div class="col-sm-4">
							<div class="dropdown-header">By Audience</div>
							<a class="dropdown-item" href="#1">For Home Users</a>
							<a class="dropdown-item" href="#1">For Small Business</a>
							<a class="dropdown-item" href="#1">For IT Professionals</a>
							<a class="dropdown-item" href="#1">For Developers</a>
						</div>
					</div>
				</div>
			</li>
			<li class="dropdown dropdown-full nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" id="navbarDropdownMenuLink3">
					Dropdown Full
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink3" class="dropdown-menu">
					<div class="row">
						<div class="col-sm-4">
							<div class="dropdown-header">By Resource</div>
							<a class="dropdown-item" href="#1">Support Home</a>
							<a class="disabled dropdown-item" href="#1">Disabled Link</a>
							<a class="dropdown-item" href="#1">Chat or Call</a>
							<div class="dropdown-header">By Product</div>
							<a class="dropdown-item" href="#1">Developing for the Platform</a>
							<a class="dropdown-item" href="#1">Mastering Fundamentals</a>
							<a class="dropdown-item" href="#1">Styling with Themes</a>
							<a class="dropdown-item" href="#1">Managing Content</a>
						</div>
						<div class="col-sm-4">
							<div class="dropdown-header">Popular Picks</div>
							<a class="dropdown-item" href="#1">Error Messages</a>
							<a class="dropdown-item" href="#1">Updates: Service Packs & Fixes</a>
							<a class="dropdown-item" href="#1">Install, Upgrade, & Activate</a>
							<a class="dropdown-item" href="#1">Regular Drivers</a>
							<a class="dropdown-item" href="#1">Hardware Drivers</a>
							<div class="dropdown-header">Security</div>
							<a class="dropdown-item" href="#1">Security Home</a>
							<a class="dropdown-item" href="#1">Security Essentials</a>
							<a class="dropdown-item" href="#1">Protecting Your Data</a>
							<a class="dropdown-item" href="#1">Securing Your Browser</a>
						</div>
						<div class="col-sm-4">
							<div class="dropdown-header">By Audience</div>
							<a class="active dropdown-item" href="#1">For Home Users</a>
							<a class="dropdown-item" href="#1">For Small Business</a>
							<a class="dropdown-item" href="#1">For IT Professionals</a>
							<a class="dropdown-item" href="#1">For Developers</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit">
			<form>
				<input class="form-control" type="text" />
				<button class="btn btn-secondary" type="submit">Submit</button>
			</form>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item"><a class="nav-link" href="#1">Link</a></li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" id="navbarDropdownMenuLink4">
					Dropdown
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink4" class="dropdown-menu dropdown-menu-right">
					<div class="dropdown-header" role="presentation">Dropdown Header</div>
					<div class="inline-scroller">
						<a class="dropdown-item" href="#1">Actions</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">View</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Actions</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">View</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Actions</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">View</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Actions</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">View</a>
						<a class="dropdown-item" href="#1">Permissions</a>
					</div>
					<a class="disabled dropdown-item" href="#1">Disabled</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#1">Scope</a>
				</div>
			</li>
		</ul>
	</div>
</nav>

</article>