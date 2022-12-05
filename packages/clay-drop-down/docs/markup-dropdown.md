---
title: 'Dropdown'
description: 'A dropdown menu displays a list of options for the element that triggers it.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/dropdowns/'
mainTabURL: 'docs/components/drop-down.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Variations](#css-variations)
    -   [Default](#css-default)
    -   [Wide](#css-wide)
    -   [Full](#css-full)
    -   [Width Full](#css-width-full)
    -   [Width Sm](#css-width-sm)
    -   [Width Shrink](#css-width-shrink)
    -   [Height Auto](#css-height-auto)
-   [Content Types](#css-content-types)
    -   [Dividers](#css-dividers)
    -   [Form Elements](#css-form-elements)
        -   [Checkbox or Radio](#css-checkbox-or-radio)
        -   [Search](#css-search)
        -   [Form Groups](#css-form-groups)
    -   [Indicators](#css-indicators)
        -   [Start](#css-start)
        -   [End](#css-end)
        -   [Start and End](#css-start-and-end)
    -   [Autofit](#css-autofit)
    -   [Keyboard Shortcuts](#css-keyboard-shortcuts)
    -   [Scrolling Content](#css-scrolling-content)
-   [Actions](#css-actions)
    -   [Buttons](#css-buttons)
    -   [Anchors](#css-anchors)
-   [Alignment](#css-alignment)
    -   [Corners](#css-corners)
    -   [Sides](#css-sides)
    -   [Middle](#css-middle)
    -   [Center](#css-center)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	This page uses Bootstrap's dropdown plugin which requires JQuery. Liferay 7.4 no longer includes JQuery by default. We have included a standalone dropdown plugin in 7.4, just replace the attribute <code>data-toggle="dropdown"</code> with <code>data-toggle="liferay-dropdown"</code> on the <code>dropdown-toggle</code>.
</div>

## Variations(#css-variations)

### Default(#css-default)

The default dropdown is a panel that does not support scrolling of the content inside it. Use this type when the number of options you want to offer is short or the panel is big enough to contain all the elements you want to use.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
			<ul class="list-unstyled">
				<li><a class="active dropdown-item" href="#1">Selected Option</a></li>
				<li><a class="dropdown-item" href="#3">Normal Option</a></li>
				<li><a class="disabled dropdown-item" href="#4" tabindex="-1">Disabled Option</a></li>
			</ul>
		</div>
	</div>
</div>

```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<ul class="list-unstyled">
		<li><a class="active dropdown-item" href="#1">Selected Option</a></li>
		<li><a class="dropdown-item" href="#3">Normal Option</a></li>
		<li>
			<a class="disabled dropdown-item" href="#4" tabindex="-1"
				>Disabled Option</a
			>
		</li>
	</ul>
</div>
```

### Wide(#css-wide)

Use `.dropdown-wide` with `.dropdown` to make the dropdown menu big. The default width is 500px.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<div aria-labelledby="" class="dropdown-wide dropdown-wide-container">
			<div class="dropdown-menu">
				<div class="row">
					<div class="col-sm-4">
						<ul class="list-unstyled">
							<li class="dropdown-subheader">By Resource</li>
							<li><a class="dropdown-item" href="#1">Support Home</a></li>
							<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled Link</a></li>
							<li><a class="dropdown-item" href="#1">Chat or Call</a></li>
						</ul>
						<ul class="list-unstyled">
							<li class="dropdown-subheader">By Product</li>
							<li><a class="active dropdown-item" href="#1">Developing for the Platform</a></li>
							<li><a class="dropdown-item" href="#1">Mastering Fundamentals</a></li>
							<li><a class="dropdown-item" href="#1">Styling with Themes</a></li>
							<li><a class="dropdown-item" href="#1">Managing Content</a></li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="list-unstyled">
							<li class="dropdown-subheader">Popular Picks</li>
							<li><a class="dropdown-item" href="#1">Error Messages</a></li>
							<li><a class="dropdown-item" href="#1">Updates: Service Packs &amp; Fixes</a></li>
							<li><a class="dropdown-item" href="#1">Install, Upgrade, &amp; Activate</a></li>
							<li><a class="dropdown-item" href="#1">Regular Drivers</a></li>
							<li><a class="dropdown-item" href="#1">Hardware Drivers</a></li>
						</ul>
						<ul class="list-unstyled">
							<li class="dropdown-subheader">Security</li>
							<li><a class="dropdown-item" href="#1">Security Home</a></li>
							<li><a class="dropdown-item" href="#1">Security Essentials</a></li>
							<li><a class="dropdown-item" href="#1">Protecting Your Data</a></li>
							<li><a class="dropdown-item" href="#1">Securing Your Browser</a></li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="list-unstyled">
							<li class="dropdown-subheader">By Audience</li>
							<li><a class="dropdown-item" href="#1">For Home Users</a></li>
							<li><a class="dropdown-item" href="#1">For Small Business</a></li>
							<li><a class="dropdown-item" href="#1">For IT Professionals</a></li>
							<li><a class="dropdown-item" href="#1">For Developers</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div aria-labelledby="" class="dropdown-wide dropdown-wide-container">
	<div class="dropdown-menu">
		<div class="row">
			<div class="col-sm-4">
				<ul class="list-unstyled">
					<li class="dropdown-subheader">By Resource</li>
					<li><a class="dropdown-item" href="#1">Support Home</a></li>
					<li>
						<a
							class="disabled dropdown-item"
							href="#1"
							tabindex="-1"
							>Disabled Link</a
						>
					</li>
					<li><a class="dropdown-item" href="#1">Chat or Call</a></li>
				</ul>
				<ul class="list-unstyled">
					<li class="dropdown-subheader">By Product</li>
					<li>
						<a class="active dropdown-item" href="#1"
							>Developing for the Platform</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Mastering Fundamentals</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Styling with Themes</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1">Managing Content</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<ul class="list-unstyled">
					<li class="dropdown-subheader">Popular Picks</li>
					<li>
						<a class="dropdown-item" href="#1">Error Messages</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Updates: Service Packs &amp; Fixes</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Install, Upgrade, &amp; Activate</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1">Regular Drivers</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">Hardware Drivers</a>
					</li>
				</ul>
				<ul class="list-unstyled">
					<li class="dropdown-subheader">Security</li>
					<li>
						<a class="dropdown-item" href="#1">Security Home</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Security Essentials</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Protecting Your Data</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Securing Your Browser</a
						>
					</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<ul class="list-unstyled">
					<li class="dropdown-subheader">By Audience</li>
					<li>
						<a class="dropdown-item" href="#1">For Home Users</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>For Small Business</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>For IT Professionals</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1">For Developers</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
```

### Full(#css-full)

Use `.dropdown-full` to create a dropdown menu as wide as its relative parent.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<div class="dropdown dropdown-full nav-item">
			<ul aria-labelledby="navbarDropdownMenuLink3" class="dropdown-menu">
				<div class="row">
					<div class="col-sm-4">
						<ul class="list-unstyled">
							<li class="dropdown-header">By Resource</li>
							<li><a class="dropdown-item" href="#1">Support Home</a></li>
							<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled Link</a></li>
							<li><a class="dropdown-item" href="#1">Chat or Call</a></li>
						</ul>
						<ul class="list-unstyled">
							<li class="dropdown-header">By Product</li>
							<li><a class="dropdown-item" href="#1">Developing for the Platform</a></li>
							<li><a class="dropdown-item" href="#1">Mastering Fundamentals</a></li>
							<li><a class="dropdown-item" href="#1">Styling with Themes</a></li>
							<li><a class="dropdown-item" href="#1">Managing Content</a></li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="list-unstyled">
							<li class="dropdown-header">Popular Picks</li>
							<li><a class="dropdown-item" href="#1">Error Messages</a></li>
							<li><a class="dropdown-item" href="#1">Updates: Service Packs &amp; Fixes</a></li>
							<li><a class="dropdown-item" href="#1">Install, Upgrade, &amp; Activate</a></li>
							<li><a class="dropdown-item" href="#1">Regular Drivers</a></li>
							<li><a class="dropdown-item" href="#1">Hardware Drivers</a></li>
						</ul>
						<ul class="list-unstyled">
							<li class="dropdown-header">Security</li>
							<li><a class="dropdown-item" href="#1">Security Home</a></li>
							<li><a class="dropdown-item" href="#1">Security Essentials</a></li>
							<li><a class="dropdown-item" href="#1">Protecting Your Data</a></li>
							<li><a class="dropdown-item" href="#1">Securing Your Browser</a></li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="list-unstyled">
							<li class="dropdown-header">By Audience</li>
							<li><a class="active dropdown-item" href="#1">For Home Users</a></li>
							<li><a class="dropdown-item" href="#1">For Small Business</a></li>
							<li><a class="dropdown-item" href="#1">For IT Professionals</a></li>
							<li><a class="dropdown-item" href="#1">For Developers</a></li>
						</ul>
					</div>
				</div>
			</ul>
		</div>
	</div>
</div>

```html
<div class="dropdown dropdown-full nav-item">
	<ul aria-labelledby="navbarDropdownMenuLink3" class="dropdown-menu">
		<div class="row">
			<div class="col-sm-4">
				<ul class="list-unstyled">
					<li class="dropdown-header">By Resource</li>
					<li><a class="dropdown-item" href="#1">Support Home</a></li>
					<li>
						<a
							class="disabled dropdown-item"
							href="#1"
							tabindex="-1"
							>Disabled Link</a
						>
					</li>
					<li><a class="dropdown-item" href="#1">Chat or Call</a></li>
				</ul>
				<ul class="list-unstyled">
					<li class="dropdown-header">By Product</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Developing for the Platform</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Mastering Fundamentals</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Styling with Themes</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1">Managing Content</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<ul class="list-unstyled">
					<li class="dropdown-header">Popular Picks</li>
					<li>
						<a class="dropdown-item" href="#1">Error Messages</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Updates: Service Packs &amp; Fixes</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Install, Upgrade, &amp; Activate</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1">Regular Drivers</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1">Hardware Drivers</a>
					</li>
				</ul>
				<ul class="list-unstyled">
					<li class="dropdown-header">Security</li>
					<li>
						<a class="dropdown-item" href="#1">Security Home</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Security Essentials</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Protecting Your Data</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Securing Your Browser</a
						>
					</li>
				</ul>
			</div>
			<div class="col-sm-4">
				<ul class="list-unstyled">
					<li class="dropdown-header">By Audience</li>
					<li>
						<a class="active dropdown-item" href="#1"
							>For Home Users</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>For Small Business</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>For IT Professionals</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1">For Developers</a>
					</li>
				</ul>
			</div>
		</div>
	</ul>
</div>
```

### Dropdown Menu Width Full(#css-width-full)

<div class="clay-site-alert alert alert-warning">This is a separate component from `.dropdown-full`, use one or the other.</div>

The modifier class `dropdown-menu-width-full` on `dropdown-menu` makes the menu expand the full width of the page. This should be used with the Clay Drop Down plugin which renders the `dropdown-menu` as a direct child of the `body` element.

```html
<ul
	aria-labelledby="theDropdownToggleId"
	class="dropdown-menu dropdown-menu-width-full"
>
	<li class="dropdown-header">Dropdown Header</li>
	<li><a class="dropdown-item" href="#1">Action</a></li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
	</li>
	<li class="dropdown-divider"></li>
	<li><a class="dropdown-item" href="#1">Scope</a></li>
</ul>
```

### Dropdown Menu Width Sm(#css-width-sm)

<div class="clay-site-alert alert alert-warning">This is a separate component from `.dropdown-wide`, use one or the other.</div>

The modifier class `dropdown-menu-width-sm` on `dropdown-menu` makes the menu 500px wide. The `dropdown-menu` becomes 100% wide at screen sizes 767px and below. This should be used with the Clay Drop Down plugin which renders the `dropdown-menu` as a direct child of the `body` element.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="dropdownMenuWide1" class="dropdown-menu dropdown-menu-width-sm show" style="position:static;">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
</div>

```html
<ul
	aria-labelledby="theDropdownToggleId"
	class="dropdown-menu dropdown-menu-width-sm"
>
	<li class="dropdown-header">Dropdown Header</li>
	<li><a class="dropdown-item" href="#1">Action</a></li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
	</li>
	<li class="dropdown-divider"></li>
	<li><a class="dropdown-item" href="#1">Scope</a></li>
</ul>
```

### Dropdown Menu Width Shrink(#css-width-shrink)

The modifier class `dropdown-menu-width-shrink` on `dropdown-menu` makes the menu only be as wide as the text inside and maxes out at 240px wide. This forces `dropdown-item` text to be on one line.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="dropdownMenuWide1" class="dropdown-menu dropdown-menu-width-shrink show" style="position:static;">
			<li class="dropdown-header">Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
</div>

```html
<ul
	aria-labelledby="dropdownMenuWide1"
	class="dropdown-menu dropdown-menu-width-shrink"
>
	<li class="dropdown-header">Header</li>
	<li><a class="dropdown-item" href="#1">Action</a></li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
	</li>
	<li class="dropdown-divider"></li>
	<li><a class="dropdown-item" href="#1">Scope</a></li>
</ul>
```

### Dropdown Menu Height Auto(#css-height-auto)

The modifier class `dropdown-menu-height-auto` on `dropdown-menu` removes the `max-height` on the `dropdown-menu`.

```html
<ul
	aria-labelledby="theDropdownToggleId"
	class="dropdown-menu dropdown-menu-height-auto"
>
	<li class="dropdown-header">Dropdown Header</li>
	<li><a class="dropdown-item" href="#1">Action</a></li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
	</li>
	<li class="dropdown-divider"></li>
	<li><a class="dropdown-item" href="#1">Scope</a></li>
</ul>
```

## Content Types(#css-content-types)

### Dividers(#css-dividers)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
			<li class="dropdown-subheader">Order by</li>
			<li><a class="active dropdown-item" href="#1">Author</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Title Entry</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Date</a></li>
			<li><a class="dropdown-item" href="#1">Description</a></li>
			<li><a class="dropdown-item" href="#1">Status</a></li>
		</ul>
	</div>
</div>

```html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<li class="dropdown-subheader">Order by</li>
	<li><a class="active dropdown-item" href="#1">Author</a></li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1"
			>Title Entry</a
		>
	</li>
	<li class="dropdown-divider"></li>
	<li><a class="dropdown-item" href="#1">Date</a></li>
	<li><a class="dropdown-item" href="#1">Description</a></li>
	<li><a class="dropdown-item" href="#1">Status</a></li>
</ul>
```

### Form Elements(#css-form-elements)

#### Checkbox or Radio(#css-checkbox-or-radio)

<div class="sheet-example">
	<div class="row">
		<div class="clay-site-dropdown-menu-container">
			<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
				<li class="dropdown-subheader">Filter by</li>
				<li>
					<div class="active dropdown-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input checked="" class="custom-control-input" type="checkbox">
								<span class="custom-control-label">
									<span class="custom-control-label-text">Selected Option</span>
								</span>
							</label>
						</div>
					</div>
				</li>
				<li>
					<div class="dropdown-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" type="checkbox">
								<span class="custom-control-label">
									<span class="custom-control-label-text">Normal Option</span>
								</span>
							</label>
						</div>
					</div>
				</li>
				<li>
					<div class="disabled dropdown-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input disabled="" class="custom-control-input" type="checkbox">
								<span class="custom-control-label">
									<span class="custom-control-label-text">Disabled Option</span>
								</span>
							</label>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="clay-site-dropdown-menu-container">
			<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
				<li class="dropdown-subheader">Order by</li>
				<li>
					<div class="active dropdown-item">
						<div class="custom-control custom-radio">
							<label>
								<input checked="" class="custom-control-input" id="dropdownRadio1" name="dropdownRadio" type="radio">
								<span class="custom-control-label">
									<span class="custom-control-label-text">Selected Option</span>
								</span>
							</label>
						</div>
					</div>
				</li>
				<li>
					<div class="dropdown-item">
						<div class="custom-control custom-radio">
							<label>
								<input class="custom-control-input" id="dropdownRadio2" name="dropdownRadio" type="radio">
								<span class="custom-control-label">
									<span class="custom-control-label-text">Normal Option</span>
								</span>
							</label>
						</div>
					</div>
				</li>
				<li>
					<div class="disabled dropdown-item">
						<div class="custom-control custom-radio">
							<label>
								<input disabled="" class="custom-control-input" id="dropdownRadio3" name="dropdownRadio" type="radio">
								<span class="custom-control-label">
									<span class="custom-control-label-text">Disabled Option</span>
								</span>
							</label>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

```html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<li class="dropdown-subheader">Filter by</li>
	<li>
		<div class="active dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input
						checked=""
						class="custom-control-input"
						type="checkbox"
					/>
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Selected Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
	<li>
		<div class="dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Normal Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
	<li>
		<div class="disabled dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input
						disabled=""
						class="custom-control-input"
						type="checkbox"
					/>
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Disabled Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
</ul>
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<li class="dropdown-subheader">Order by</li>
	<li>
		<div class="active dropdown-item">
			<div class="custom-control custom-radio">
				<label>
					<input
						checked=""
						class="custom-control-input"
						id="dropdownRadio1"
						name="dropdownRadio"
						type="radio"
					/>
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Selected Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
	<li>
		<div class="dropdown-item">
			<div class="custom-control custom-radio">
				<label>
					<input
						class="custom-control-input"
						id="dropdownRadio2"
						name="dropdownRadio"
						type="radio"
					/>
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Normal Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
	<li>
		<div class="disabled dropdown-item">
			<div class="custom-control custom-radio">
				<label>
					<input
						disabled=""
						class="custom-control-input"
						id="dropdownRadio3"
						name="dropdownRadio"
						type="radio"
					/>
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Disabled Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
</ul>
```

#### Search(#css-search)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
			<li class="dropdown-section">
				<div class="input-group input-group-sm">
					<div class="input-group-item">
						<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
						<span class="input-group-inset-item input-group-inset-item-after">
							<button class="btn btn-unstyled" type="button">
								<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#search"></use>
								</svg>
							</button>
						</span>
					</div>
				</div>
			</li>
			<li class="dropdown-subheader">Filter by</li>
			<li>
				<div class="active dropdown-item">
					<div class="custom-control custom-checkbox">
						<label>
							<input checked="" class="custom-control-input" type="checkbox">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Selected Option</span>
							</span>
						</label>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>

```html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<li class="dropdown-section">
		<div class="input-group input-group-sm">
			<div class="input-group-item">
				<input
					class="form-control input-group-inset input-group-inset-after"
					placeholder="Search for..."
					type="text"
				/>
				<span
					class="input-group-inset-item input-group-inset-item-after"
				>
					<button class="btn btn-unstyled" type="button">
						<svg
							class="lexicon-icon lexicon-icon-search"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#search"></use>
						</svg>
					</button>
				</span>
			</div>
		</div>
	</li>
	<li class="dropdown-subheader">Filter by</li>
	<li>
		<div class="active dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input
						checked=""
						class="custom-control-input"
						type="checkbox"
					/>
					<span class="custom-control-label">
						<span class="custom-control-label-text"
							>Selected Option</span
						>
					</span>
				</label>
			</div>
		</div>
	</li>
</ul>
```

#### Form Groups(#css-form-groups)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
			<li class="dropdown-section form-group">
				<label for="basicInputTypeText1">
					Text 1
				</label>
				<input class="form-control form-control-sm" id="basicInputTypeText1" placeholder="Placeholder" type="text">
			</li>
			<li class="dropdown-subheader">Form Section</li>
			<li class="dropdown-section">
				<div class="form-group">
					<label for="basicInputTypeText2">
						Text 2
					</label>
					<input class="form-control form-control-sm" id="basicInputTypeText2" placeholder="Placeholder" type="text">
				</div>
			</li>
			<li class="dropdown-section">
				<div class="form-group">
					<label for="basicInputTypeText3">
						Text 3
					</label>
					<input class="form-control form-control-sm" id="basicInputTypeText3" placeholder="Placeholder" type="text">
				</div>
				<div class="form-group">
					<label for="basicInputTypeTextarea">Textarea</label>
					<textarea class="form-control form-control-sm" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
				</div>
			</li>
			<li class="dropdown-subheader">Order by</li>
			<li><a class="active dropdown-item" href="#1">Author</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Title Entry</a></li>
		</ul>
	</div>
</div>

```html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<li class="dropdown-section form-group">
		<label for="basicInputTypeText1"> Text 1 </label>
		<input
			class="form-control form-control-sm"
			id="basicInputTypeText1"
			placeholder="Placeholder"
			type="text"
		/>
	</li>
	<li class="dropdown-subheader">Form Section</li>
	<li class="dropdown-section">
		<div class="form-group">
			<label for="basicInputTypeText2"> Text 2 </label>
			<input
				class="form-control form-control-sm"
				id="basicInputTypeText2"
				placeholder="Placeholder"
				type="text"
			/>
		</div>
	</li>
	<li class="dropdown-section">
		<div class="form-group">
			<label for="basicInputTypeText3"> Text 3 </label>
			<input
				class="form-control form-control-sm"
				id="basicInputTypeText3"
				placeholder="Placeholder"
				type="text"
			/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeTextarea">Textarea</label>
			<textarea
				class="form-control form-control-sm"
				id="basicInputTypeTextarea"
				placeholder="Placeholder"
			></textarea>
		</div>
	</li>
	<li class="dropdown-subheader">Order by</li>
	<li><a class="active dropdown-item" href="#1">Author</a></li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1"
			>Title Entry</a
		>
	</li>
</ul>
```

### Indicators(#css-indicators)

#### Start(#css-start)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
			<li class="dropdown-header">Dropdown Header</li>
			<li class="dropdown-divider"></li>
			<li class="dropdown-subheader">Dropdown Sub Header</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
					Ticket Buyer Information
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
					Attendee Information
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
					Seat Assignment
				</a>
			</li>
			<li><a class="active dropdown-item" href="#1">Dinner Preference</a></li>
			<li><a class="dropdown-item" href="#1">Submit Payment</a></li>
			<li class="dropdown-caption">Dropdown Caption</li>
		</ul>
	</div>
</div>

```html
<ul
	aria-labelledby="theDropdownToggleId"
	class="dropdown-menu dropdown-menu-indicator-start"
>
	<li class="dropdown-header">Dropdown Header</li>
	<li class="dropdown-divider"></li>
	<li class="dropdown-subheader">Dropdown Sub Header</li>
	<li>
		<a class="dropdown-item" href="#1">
			<span class="dropdown-item-indicator-start">
				<svg
					class="lexicon-icon lexicon-icon-check"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check"></use>
				</svg>
			</span>
			Ticket Buyer Information
		</a>
	</li>
	<li>
		<a class="dropdown-item" href="#1">
			<span class="dropdown-item-indicator-start">
				<svg
					class="lexicon-icon lexicon-icon-check"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check"></use>
				</svg>
			</span>
			Attendee Information
		</a>
	</li>
	<li>
		<a class="dropdown-item" href="#1">
			<span class="dropdown-item-indicator-start">
				<svg
					class="lexicon-icon lexicon-icon-check"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check"></use>
				</svg>
			</span>
			Seat Assignment
		</a>
	</li>
	<li><a class="active dropdown-item" href="#1">Dinner Preference</a></li>
	<li><a class="dropdown-item" href="#1">Submit Payment</a></li>
	<li class="dropdown-caption">Dropdown Caption</li>
</ul>
```

#### End(#css-end)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
			<li class="dropdown-header">Folder</li>
			<li class="dropdown-divider"></li>
			<li class="dropdown-subheader">Order By</li>
			<li>
				<a class="active dropdown-item" href="#1">
					Step 01
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a class="disabled dropdown-item" href="#1" tabindex="-1">
					Step 02
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					Step 03
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times"></use>
						</svg>
					</span>
				</a>
			</li>
			<li><a class="dropdown-item" href="#1">Step 04</a></li>
			<li><a class="dropdown-item" href="#1">Step 05</a></li>
			<li class="dropdown-caption">Showing 190,722 of 192,842 Things</li>
		</ul>
	</div>
</div>

```html
<ul
	aria-labelledby="theDropdownToggleId"
	class="dropdown-menu dropdown-menu-indicator-end"
>
	<li class="dropdown-header">Folder</li>
	<li class="dropdown-divider"></li>
	<li class="dropdown-subheader">Order By</li>
	<li>
		<a class="active dropdown-item" href="#1">
			Step 01
			<span class="dropdown-item-indicator-end">
				<svg
					class="lexicon-icon lexicon-icon-check"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check"></use>
				</svg>
			</span>
		</a>
	</li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1">
			Step 02
			<span class="dropdown-item-indicator-end">
				<svg
					class="lexicon-icon lexicon-icon-check"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check"></use>
				</svg>
			</span>
		</a>
	</li>
	<li>
		<a class="dropdown-item" href="#1">
			Step 03
			<span class="dropdown-item-indicator-end">
				<svg
					class="lexicon-icon lexicon-icon-times"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#times"></use>
				</svg>
			</span>
		</a>
	</li>
	<li><a class="dropdown-item" href="#1">Step 04</a></li>
	<li><a class="dropdown-item" href="#1">Step 05</a></li>
	<li class="dropdown-caption">Showing 190,722 of 192,842 Things</li>
</ul>
```

#### Start and End(#css-start-and-end)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end dropdown-menu-indicator-start">
			<li class="dropdown-header">Dropdown Header</li>
			<li class="dropdown-divider"></li>
			<li class="dropdown-subheader">Dropdown Sub Header</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-pencil" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#pencil"></use>
						</svg>
					</span>
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#angle-right"></use>
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#view"></use>
						</svg>
					</span>
					Attendee Information
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check"></use>
						</svg>
					</span>
					Seat Assignment
				</a>
			</li>
			<li><a class="active dropdown-item" href="#1">Dinner Preference</a></li>
			<li><a class="dropdown-item" href="#1">Submit Payment</a></li>
			<li class="dropdown-caption">Dropdown Caption</li>
		</ul>
	</div>
</div>

```html
<ul
	aria-labelledby="theDropdownToggleId"
	class="dropdown-menu dropdown-menu-indicator-end dropdown-menu-indicator-start"
>
	<li class="dropdown-header">Dropdown Header</li>
	<li class="dropdown-divider"></li>
	<li class="dropdown-subheader">Dropdown Sub Header</li>
	<li>
		<a class="dropdown-item" href="#1">
			<span class="dropdown-item-indicator-start">
				<svg
					class="lexicon-icon lexicon-icon-pencil"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#pencil"></use>
				</svg>
			</span>
			ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
			<span class="dropdown-item-indicator-end">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-right"></use>
				</svg>
			</span>
		</a>
	</li>
	<li>
		<a class="dropdown-item" href="#1">
			<span class="dropdown-item-indicator-start">
				<svg
					class="lexicon-icon lexicon-icon-view"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#view"></use>
				</svg>
			</span>
			Attendee Information
		</a>
	</li>
	<li>
		<a class="dropdown-item" href="#1">
			<span class="dropdown-item-indicator">
				<svg
					class="lexicon-icon lexicon-icon-check"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check"></use>
				</svg>
			</span>
			Seat Assignment
		</a>
	</li>
	<li><a class="active dropdown-item" href="#1">Dinner Preference</a></li>
	<li><a class="dropdown-item" href="#1">Submit Payment</a></li>
	<li class="dropdown-caption">Dropdown Caption</li>
</ul>
```

### Autofit(#css-autofit)

Make content expand to fill remaining space in a `dropdown-item` or create equally spaced content with a nested `.autofit-row`, `.autofit-col`, `.autofit-col-shrink`, and `.autofit-col-expand`.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelled-by="theDropdownToggleId" class="dropdown-menu show">
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						<span class="autofit-section">
							<span class="inline-item inline-item-before">
								<svg class="lexicon-icon lexicon-icon-en-us" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#en-us"></use>
								</svg>
							</span>
							en-US
						</span>
					</span>
					<span class="autofit-col">
						<span class="label label-info">
							<span class="label-item label-item-expand">Default</span>
						</span>
					</span>
				</a>
			</li>
			<li>
				<a class="autofit-row disabled dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						<span class="autofit-section">
							<span class="inline-item inline-item-before">
								<svg class="lexicon-icon lexicon-icon-en-gb" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#en-gb"></use>
								</svg>
							</span>
							en-GB
						</span>
					</span>
					<span class="autofit-col">
						<span class="label label-success">
							<span class="label-item label-item-expand">Translated</span>
						</span>
					</span>
				</a>
			</li>
			<li>
				<a class="active autofit-row dropdown-item" href="#1" tabindex="-1">
					<span class="autofit-col autofit-col-expand">
						<span class="autofit-section">
							<span class="inline-item inline-item-before">
								<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#es-es"></use>
								</svg>
							</span>
							es-ES
						</span>
					</span>
					<span class="autofit-col">
						<span class="label label-success">
							<span class="label-item label-item-expand">Translated</span>
						</span>
					</span>
				</a>
			</li>
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						<span class="autofit-section">
							<span class="inline-item inline-item-before">
								<svg class="lexicon-icon lexicon-icon-fr-fr" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#fr-fr"></use>
								</svg>
							</span>
							fr-FR
						</span>
					</span>
					<span class="autofit-col">
						<span class="label label-warning">
							<span class="label-item label-item-expand">Not Translated</span>
						</span>
					</span>
				</a>
			</li>
		</ul>
	</div>
</div>

```html
<ul aria-labelled-by="theDropdownToggleId" class="dropdown-menu show">
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand">
				<span class="autofit-section">
					<span class="inline-item inline-item-before">
						<svg
							class="lexicon-icon lexicon-icon-en-us"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#en-us"
							></use>
						</svg>
					</span>
					en-US
				</span>
			</span>
			<span class="autofit-col">
				<span class="label label-info">
					<span class="label-item label-item-expand">Default</span>
				</span>
			</span>
		</a>
	</li>
	<li>
		<a class="autofit-row disabled dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand">
				<span class="autofit-section">
					<span class="inline-item inline-item-before">
						<svg
							class="lexicon-icon lexicon-icon-en-gb"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#en-gb"
							></use>
						</svg>
					</span>
					en-GB
				</span>
			</span>
			<span class="autofit-col">
				<span class="label label-success">
					<span class="label-item label-item-expand">Translated</span>
				</span>
			</span>
		</a>
	</li>
	<li>
		<a class="active autofit-row dropdown-item" href="#1" tabindex="-1">
			<span class="autofit-col autofit-col-expand">
				<span class="autofit-section">
					<span class="inline-item inline-item-before">
						<svg
							class="lexicon-icon lexicon-icon-es-es"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#es-es"
							></use>
						</svg>
					</span>
					es-ES
				</span>
			</span>
			<span class="autofit-col">
				<span class="label label-success">
					<span class="label-item label-item-expand">Translated</span>
				</span>
			</span>
		</a>
	</li>
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand">
				<span class="autofit-section">
					<span class="inline-item inline-item-before">
						<svg
							class="lexicon-icon lexicon-icon-fr-fr"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#fr-fr"
							></use>
						</svg>
					</span>
					fr-FR
				</span>
			</span>
			<span class="autofit-col">
				<span class="label label-warning">
					<span class="label-item label-item-expand"
						>Not Translated</span
					>
				</span>
			</span>
		</a>
	</li>
</ul>
```

### Keyboard Shortcuts(#css-keyboard-shortcuts)

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu show">
			<li>
				<a class="active autofit-row dropdown-item" href="#1" tabindex="-1">
					<span class="autofit-col autofit-col-expand">
						First Option
					</span>
					<span class="autofit-col">
						<kbd class="c-kbd c-kbd-inline">
							<kbd class="c-kbd">⌘</kbd>
						</kbd>
					</span>
				</a>
			</li>
			<li>
				<a class="autofit-row disabled dropdown-item" href="#1" tabindex="-1">
					<span class="autofit-col autofit-col-expand">
						Second Option
					</span>
					<span class="autofit-col">
						<kbd class="c-kbd c-kbd-inline">
							<kbd class="c-kbd">⌘</kbd
							><kbd class="c-kbd">K</kbd>
						</kbd>
					</span>
				</a>
			</li>
			<li class="dropdown-divider"></li>
			<li>
				<button class="autofit-row dropdown-item" type="button">
					<span class="autofit-col autofit-col-expand">
						Third Option is the Button Option ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
					</span>
					<span class="autofit-col">
						<kbd class="c-kbd c-kbd-inline">
							<kbd class="c-kbd">⌘</kbd
							><span class="c-kbd-separator">+</span
							><kbd class="c-kbd">Shift</kbd
							><span class="c-kbd-separator">+</span
							><kbd class="c-kbd">Y</kbd>
						</kbd>
					</span>
				</button>
			</li>
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						Fourth Option
					</span>
				</a>
			</li>
			<li class="dropdown-divider"></li>
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						Fifth Option
					</span>
				</a>
			</li>
			<li class="dropdown-divider"></li>
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						Sixth Option
					</span>
				</a>
			</li>
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						Seventh Option
					</span>
					<span class="autofit-col">
						<kbd class="c-kbd c-kbd-inline">
							<kbd class="c-kbd">⌘</kbd
							><kbd class="c-kbd">P</kbd>
						</kbd>
					</span>
				</a>
			</li>
			<li class="dropdown-divider"></li>
			<li>
				<a class="autofit-row dropdown-item" href="#1">
					<span class="autofit-col autofit-col-expand">
						Eighth Option
					</span>
				</a>
			</li>
		</ul>
	</div>
</div>

```html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu show">
	<li>
		<a class="active autofit-row dropdown-item" href="#1" tabindex="-1">
			<span class="autofit-col autofit-col-expand"> First Option </span>
			<span class="autofit-col">
				<kbd class="c-kbd c-kbd-inline">
					<kbd class="c-kbd">⌘</kbd>
				</kbd>
			</span>
		</a>
	</li>
	<li>
		<a class="autofit-row disabled dropdown-item" href="#1" tabindex="-1">
			<span class="autofit-col autofit-col-expand"> Second Option </span>
			<span class="autofit-col">
				<kbd class="c-kbd c-kbd-inline">
					<kbd class="c-kbd">⌘</kbd><kbd class="c-kbd">K</kbd>
				</kbd>
			</span>
		</a>
	</li>
	<li class="dropdown-divider"></li>
	<li>
		<button class="autofit-row dropdown-item" type="button">
			<span class="autofit-col autofit-col-expand">
				Third Option is the Button Option
				ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
			</span>
			<span class="autofit-col">
				<kbd class="c-kbd c-kbd-inline">
					<kbd class="c-kbd">⌘</kbd
					><span class="c-kbd-separator">+</span
					><kbd class="c-kbd">Shift</kbd
					><span class="c-kbd-separator">+</span
					><kbd class="c-kbd">Y</kbd>
				</kbd>
			</span>
		</button>
	</li>
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand"> Fourth Option </span>
		</a>
	</li>
	<li class="dropdown-divider"></li>
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand"> Fifth Option </span>
		</a>
	</li>
	<li class="dropdown-divider"></li>
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand"> Sixth Option </span>
		</a>
	</li>
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand"> Seventh Option </span>
			<span class="autofit-col">
				<kbd class="c-kbd c-kbd-inline">
					<kbd class="c-kbd">⌘</kbd><kbd class="c-kbd">P</kbd>
				</kbd>
			</span>
		</a>
	</li>
	<li class="dropdown-divider"></li>
	<li>
		<a class="autofit-row dropdown-item" href="#1">
			<span class="autofit-col autofit-col-expand"> Eighth Option </span>
		</a>
	</li>
</ul>
```

### Scrolling Content(#css-scrolling-content)

Nest `<div class="inline-scroller"></div>` inside a `.dropdown-menu` list item to create a scrollable dropdown. The maximum height is 200px on screen sizes 768px and above, on screen sizes 767px and below the overflow is handled by `.dropdown-menu`.

<div class="sheet-example">
	<div class="clay-site-dropdown-menu-container">
		<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
			<li class="dropdown-header">Dropdown Header</li>
			<li>
				<ul class="inline-scroller">
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
				</ul>
			</li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
</div>

```html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<li class="dropdown-header">Dropdown Header</li>
	<li>
		<ul class="inline-scroller">
			<li><a class="dropdown-item" href="#1">Actions</a></li>
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">View</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Actions</a></li>
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">View</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Actions</a></li>
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">View</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Actions</a></li>
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">View</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
		</ul>
	</li>
	<li>
		<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
	</li>
	<li class="dropdown-divider"></li>
	<li><a class="dropdown-item" href="#1">Scope</a></li>
</ul>
```

## Actions(#css-actions)

A monospaced `dropdown-toggle` for a dropdown containing several actions, add `dropdown-action` to `dropdown`.

### Anchors(#css-anchors)

<div class="sheet-example">
	<div class="dropdown dropdown-action">
		<a aria-label="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
			<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#ellipsis-v"></use>
			</svg>
		</a>
		<ul aria-labelledby="dropdownAction1" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Download</a></li>
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">Move</a></li>
			<li><a class="dropdown-item" href="#1">Checkout</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
		</ul>
	</div>
</div>

```html
<div class="dropdown dropdown-action">
	<a
		aria-expanded="false"
		aria-haspopup="true"
		class="component-action dropdown-toggle"
		data-toggle="dropdown"
		href="#1"
		id="dropdownAction1"
		role="button"
	>
		<svg
			class="lexicon-icon lexicon-icon-ellipsis-v"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#ellipsis-v"></use>
		</svg>
	</a>
	<ul aria-labelledby="dropdownAction1" class="dropdown-menu">
		<li><a class="dropdown-item" href="#1">Download</a></li>
		<li><a class="dropdown-item" href="#1">Edit</a></li>
		<li><a class="dropdown-item" href="#1">Move</a></li>
		<li><a class="dropdown-item" href="#1">Checkout</a></li>
		<li><a class="dropdown-item" href="#1">Permissions</a></li>
		<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
	</ul>
</div>
```

### Buttons(#css-buttons)

<div class="sheet-example">
	<div class="dropdown dropdown-action">
		<button aria-label="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" id="dropdownBtnAction1" type="button">
			<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#ellipsis-v"></use>
			</svg>
		</button>
		<ul aria-labelledby="dropdownBtnAction1" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Download</a></li>
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">Move</a></li>
			<li><a class="dropdown-item" href="#1">Checkout</a></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
		</ul>
	</div>
</div>

```html
<div class="dropdown dropdown-action">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="component-action dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownBtnAction1"
		type="button"
	>
		<svg
			class="lexicon-icon lexicon-icon-ellipsis-v"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#ellipsis-v"></use>
		</svg>
	</button>
	<ul aria-labelledby="dropdownBtnAction1" class="dropdown-menu">
		<li><a class="dropdown-item" href="#1">Download</a></li>
		<li><a class="dropdown-item" href="#1">Edit</a></li>
		<li><a class="dropdown-item" href="#1">Move</a></li>
		<li><a class="dropdown-item" href="#1">Checkout</a></li>
		<li><a class="dropdown-item" href="#1">Permissions</a></li>
		<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
	</ul>
</div>
```

## Alignment(#css-alignment)

### Corners(#css-corners)

Align a dropdown menu on the top or bottom side with classes `dropdown-menu`, `dropdown-menu-right`, `dropdown-menu-top`, or `dropdown-menu-top-right`.

<div class="sheet-example">
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment1" type="button">
			Default
			<span aria-hidden="true" class="icon-caret-down"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment1" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment2" type="button">
			Right
			<span aria-hidden="true" class="icon-caret-down"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment2" class="dropdown-menu dropdown-menu-right">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment3" type="button">
			Top
			<span aria-hidden="true" class="icon-caret-up"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment3" class="dropdown-menu dropdown-menu-top">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment4" type="button">
			Top Right
			<span aria-hidden="true" class="icon-caret-up"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment4" class="dropdown-menu dropdown-menu-top-right">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
</div>

```html
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment1"
		type="button"
	>
		Default
		<span aria-hidden="true" class="icon-caret-down"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment1"
		class="dropdown-menu"
		x-placement="bottom-start"
		style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment2"
		type="button"
	>
		Right
		<span aria-hidden="true" class="icon-caret-down"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment2"
		class="dropdown-menu dropdown-menu-right"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment3"
		type="button"
	>
		Top
		<span aria-hidden="true" class="icon-caret-up"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment3"
		class="dropdown-menu dropdown-menu-top"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment4"
		type="button"
	>
		Top Right
		<span aria-hidden="true" class="icon-caret-up"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment4"
		class="dropdown-menu dropdown-menu-top-right"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
```

### Sides(#css-sides)

Add the `dropdown-menu-right-side`, `dropdown-menu-left-side`, `dropdown-menu-right-side-bottom`, or `dropdown-menu-left-side-bottom` class to a dropdown menu to align it with the right side, left side, bottom-right side, or bottom-left side of the dropdown menu trigger, respectively:

<div class="sheet-example">
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment5" type="button">
			Right Side
			<span class="icon-caret-right"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment5" class="dropdown-menu dropdown-menu-right-side">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment6" type="button">
			<span class="icon-caret-left"></span>
			Left Side
		</button>
		<ul aria-labelledby="dropdownAlignment6" class="dropdown-menu dropdown-menu-left-side">
			<li class="dropdown-header">Dropdown Header</li>
			<ul class="inline-scroller">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment7" type="button">
			Right Side Bottom
			<span class="icon-caret-right"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment7" class="dropdown-menu dropdown-menu-right-side-bottom">
			<li>
				<ul class="inline-scroller">
					<li class="dropdown-header">Dropdown Header</li>
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment8" type="button">
			<span class="icon-caret-left"></span>
			Left Side Bottom
		</button>
		<ul aria-labelledby="dropdownAlignment8" class="dropdown-menu dropdown-menu-left-side-bottom">
			<li>
				<ul class="inline-scroller">
					<li class="dropdown-header">Dropdown Header</li>
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
				</ul>
			</li>
		</ul>
	</div>
</div>

```html
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment5"
		type="button"
	>
		Right Side
		<span class="icon-caret-right"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment5"
		class="dropdown-menu dropdown-menu-right-side"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment6"
		type="button"
	>
		<span class="icon-caret-left"></span>
		Left Side
	</button>
	<ul
		aria-labelledby="dropdownAlignment6"
		class="dropdown-menu dropdown-menu-left-side"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<ul class="inline-scroller">
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li>
				<a class="disabled dropdown-item" href="#1" tabindex="-1"
					>Disabled</a
				>
			</li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</ul>
</div>
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment7"
		type="button"
	>
		Right Side Bottom
		<span class="icon-caret-right"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment7"
		class="dropdown-menu dropdown-menu-right-side-bottom"
	>
		<li>
			<ul class="inline-scroller">
				<li class="dropdown-header">Dropdown Header</li>
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li>
					<a class="disabled dropdown-item" href="#1" tabindex="-1"
						>Disabled</a
					>
				</li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</li>
	</ul>
</div>
<div class="dropdown" style="display: inline-block;">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment8"
		type="button"
	>
		<span class="icon-caret-left"></span>
		Left Side Bottom
	</button>
	<ul
		aria-labelledby="dropdownAlignment8"
		class="dropdown-menu dropdown-menu-left-side-bottom"
	>
		<li>
			<ul class="inline-scroller">
				<li class="dropdown-header">Dropdown Header</li>
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li>
					<a class="disabled dropdown-item" href="#1" tabindex="-1"
						>Disabled</a
					>
				</li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</li>
	</ul>
</div>
```

### Middle(#css-middle)

You can also center the dropdown menu to its trigger with these four helper classes: `dropdown-menu-center`, `dropdown-menu-top-center`, `dropdown-menu-left-side-middle`, or `dropdown-menu-right-side-middle`.

<div class="sheet-example">
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment11" type="button">
			<span class="icon-caret-left"></span>
			Left Side Middle
		</button>
		<ul aria-labelledby="dropdownAlignment11" class="dropdown-menu dropdown-menu-left-side-middle">
			<li class="dropdown-header">Dropdown Header</li>
			<ul class="inline-scroller">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment12" type="button">
			Right Side Middle
			<span class="icon-caret-right"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment12" class="dropdown-menu dropdown-menu-right-side-middle">
			<li class="dropdown-header">Dropdown Header</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
</div>

```html
<div class="dropdown">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment11"
		type="button"
	>
		<span class="icon-caret-left"></span>
		Left Side Middle
	</button>
	<ul
		aria-labelledby="dropdownAlignment11"
		class="dropdown-menu dropdown-menu-left-side-middle"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<ul class="inline-scroller">
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li>
				<a class="disabled dropdown-item" href="#1" tabindex="-1"
					>Disabled</a
				>
			</li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</ul>
</div>
<div class="dropdown">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment12"
		type="button"
	>
		Right Side Middle
		<span class="icon-caret-right"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment12"
		class="dropdown-menu dropdown-menu-right-side-middle"
	>
		<li class="dropdown-header">Dropdown Header</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
```

### Center(#css-center)

To center the dropdown menu in browsers that don't support CSS transforms, set a negative `margin-left` equal to the width of the `dropdown-menu` divided by two. To vertically align left-side and right-side dropdown-menus, set a negative `margin-top` equal to the height of the dropdown-menu divided by two.

<div class="sheet-example">
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment9" type="button">
			Center
			<span class="icon-caret-down"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment9" class="dropdown-menu dropdown-menu-center">
			<li class="dropdown-header">dropdown-menu-center</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
	<div class="dropdown" style="display: inline-block;">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment10" type="button">
			Top Center
			<span class="icon-caret-up"></span>
		</button>
		<ul aria-labelledby="dropdownAlignment10" class="dropdown-menu dropdown-menu-top-center">
			<li class="dropdown-header">dropdown-menu-top-center</li>
			<li><a class="dropdown-item" href="#1">Action</a></li>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item" href="#1">Scope</a></li>
		</ul>
	</div>
</div>

```html
<div class="dropdown">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment9"
		type="button"
	>
		Center
		<span class="icon-caret-down"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment9"
		class="dropdown-menu dropdown-menu-center"
	>
		<li class="dropdown-header">dropdown-menu-center</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
<div class="dropdown">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-secondary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownAlignment10"
		type="button"
	>
		Top Center
		<span class="icon-caret-up"></span>
	</button>
	<ul
		aria-labelledby="dropdownAlignment10"
		class="dropdown-menu dropdown-menu-top-center"
	>
		<li class="dropdown-header">dropdown-menu-top-center</li>
		<li><a class="dropdown-item" href="#1">Action</a></li>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1"
				>Disabled</a
			>
		</li>
		<li class="dropdown-divider"></li>
		<li><a class="dropdown-item" href="#1">Scope</a></li>
	</ul>
</div>
```
