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
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<div class="dropdown-subheader">Order by</div>
		<a class="active dropdown-item" href="#">Author</a>
		<a class="disabled dropdown-item" href="#">Title Entry</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Date</a>
		<a class="dropdown-item" href="#">Description</a>
		<a class="dropdown-item" href="#">Status</a>
	</div>
</div>

```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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


<article id="dropdown-menu-with-form-elements">

### Dropdown Menu with Form Elements

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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
```

</article>


<article id="dropdown-menu-indicator-start">

### Dropdown Menu Indicator Start

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
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
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
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
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
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
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
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
	<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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
		<a class="disabled dropdown-item" href="#1">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</ul>
</div>

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
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
	<a class="disabled dropdown-item" href="#1">Disabled</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#1">Scope</a>
</ul>
```

</article>