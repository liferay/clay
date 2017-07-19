---
title: Dropdowns
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Default

<div class="dropdown-menu">
	<div class="dropdown-header">Order by:</div>
	<a class="active dropdown-item" href="#">Author</a>
	<a class="disabled dropdown-item" href="#">Title Entry</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#">Date</a>
	<a class="dropdown-item" href="#">Description</a>
	<a class="dropdown-item" href="#">Status</a>
</div>

```xml
<div class="dropdown-menu">
	<div class="dropdown-header">Order by:</div>
	<a class="active dropdown-item" href="#">Author</a>
	<a class="disabled dropdown-item" href="#">Title Entry</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#">Date</a>
	<a class="dropdown-item" href="#">Description</a>
	<a class="dropdown-item" href="#">Status</a>
</div>
```

</article>

<article id="2">

### Scrolling Content

> Nest `<div class="inline-scroller"></div>` inside a `.dropdown-menu` list item to create a scrollable dropdown. The default height is 125px.

<ul class="dropdown-menu">
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
</ul>

</article>

<article id="3">

### Dropdown wide / full

> Use `.dropdown-wide` with `.dropdown` to make the dropdown menu big. The default width is 500px. Use `.dropdown-full` to create a dropdown menu as wide as its relative parent. See dropdown examples.

<div class="dropdown-wide dropdown-wide-container">
	<div class="dropdown-menu">
		<div class="row">
			<div class="col-sm-4">
				<div class="dropdown-header">By Resource</div>
				<a class="dropdown-item" href="#1">Support Home</a>
				<a class="disabled dropdown-item" href="#1">Disabled Link</a>
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
</div>

```xml
<div class="dropdown-wide dropdown-wide-container">
	<div class="dropdown-menu">
		<div class="row">
			<div class="col-sm-4">
				<div class="dropdown-header">By Resource</div>
				<a class="dropdown-item" href="#1">Support Home</a>
				<a class="disabled dropdown-item" href="#1">Disabled Link</a>
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
</div>
```

</article>

<article id="4">

### Dropdown Alignment

> Align a dropdown menu on the top or bottom side with classes `dropdown-menu`, `dropdown-menu-right`, `dropdown-menu-top`, or `dropdown-menu-top-right`

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Default <span class="icon-caret-down"></span></button>
	<div class="dropdown-menu">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right <span class="icon-caret-down"></span></button>
	<div class="dropdown-menu dropdown-menu-right">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Top <span class="icon-caret-up"></span></button>
	<div class="dropdown-menu dropdown-menu-top">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Top Right <span class="icon-caret-up"></span></button>
	<div class="dropdown-menu dropdown-menu-top-right">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

```xml
<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Default <span class="icon-caret-down"></span></button>
	<div class="dropdown-menu">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right <span class="icon-caret-down"></span></button>
	<div class="dropdown-menu dropdown-menu-right">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Top <span class="icon-caret-up"></span></button>
	<div class="dropdown-menu dropdown-menu-top">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Top Right <span class="icon-caret-up"></span></button>
	<div class="dropdown-menu dropdown-menu-top-right">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
```

> Align a dropdown menu on the left or right side with classes `dropdown-menu-right-side`, `dropdown-menu-left-side`, `dropdown-menu-right-side-bottom`, or `dropdown-menu-left-side-bottom`.

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right Side <span class="icon-caret-right"></span></button>
	<div class="dropdown-menu dropdown-menu-right-side">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="icon-caret-left"></span> Left Side</button>
	<div class="dropdown-menu dropdown-menu-left-side">
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
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right Side Bottom <span class="icon-caret-right"></span></button>
	<div class="dropdown-menu dropdown-menu-right-side-bottom">
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
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="icon-caret-left"></span> Left Side Bottom</button>
	<div class="dropdown-menu dropdown-menu-left-side-bottom">
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

```xml
<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right Side <span class="icon-caret-right"></span></button>
	<div class="dropdown-menu dropdown-menu-right-side">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="icon-caret-left"></span> Left Side</button>
	<div class="dropdown-menu dropdown-menu-left-side">
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
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right Side Bottom <span class="icon-caret-right"></span></button>
	<div class="dropdown-menu dropdown-menu-right-side-bottom">
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
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="icon-caret-left"></span> Left Side Bottom</button>
	<div class="dropdown-menu dropdown-menu-left-side-bottom">
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
```

> We've also added the option to center the dropdown to its trigger in the 4 different dropdown-menu positions with classes `dropdown-menu-center`, `dropdown-menu-top-center`, `dropdown-menu-left-side-middle`, or `dropdown-menu-right-side-middle`.

> You can center the dropdown menu in browsers that don't support css transforms by setting a negative `margin-left` equal to the width of the dropdown-menu divided by 2. For left-side and right-side dropdown-menus vertically align them by setting a negative `margin-top` equal to the height of the dropdown-menu divided by 2.

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Center <span class="icon-caret-down"></span></button>
	<div class="dropdown-menu dropdown-menu-center">
		<div class="dropdown-header">dropdown-menu-center</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Top Center <span class="icon-caret-up"></span></button>
	<ul class="dropdown-menu dropdown-menu-top-center">
		<div class="dropdown-header">dropdown-menu-top-center</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</ul>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="icon-caret-left"></span> Left Side Middle</button>
	<div class="dropdown-menu dropdown-menu-left-side-middle">
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
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right Side Middle <span class="icon-caret-right"></span></button>
	<div class="dropdown-menu dropdown-menu-right-side-middle">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

```xml
<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Center <span class="icon-caret-down"></span></button>
	<div class="dropdown-menu dropdown-menu-center">
		<div class="dropdown-header">dropdown-menu-center</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Top Center <span class="icon-caret-up"></span></button>
	<ul class="dropdown-menu dropdown-menu-top-center">
		<div class="dropdown-header">dropdown-menu-top-center</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</ul>
</div>

<div class="dropdown" style="display: inline-block;">
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button"><span class="icon-caret-left"></span> Left Side Middle</button>
	<div class="dropdown-menu dropdown-menu-left-side-middle">
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
	<button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">Right Side Middle <span class="icon-caret-right"></span></button>
	<div class="dropdown-menu dropdown-menu-right-side-middle">
		<div class="dropdown-header">Dropdown Header</div>
		<a class="dropdown-item" href="#">Action</a>
		<a class="disabled dropdown-item" href="#">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#">Scope</a>
	</div>
</div>
```

</article>

<article id="5">

### Dropdown Examples

<nav class="navbar navbar-expand navbar-light navbar-light-bg" style="margin-bottom:566px;">
	<div class="container-fluid">
		<ul class="navbar-nav">
			<li class="dropdown nav-item">
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu">
					<form>
						<div class="dropdown-item">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div class="dropdown-item">
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
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown Wide
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu">
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
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown Full
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu">
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
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="dropdownMenu" class="dropdown-menu dropdown-menu-right">
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
					<a class="disabled dropdown-item" href="#1" role="menuitem">Disabled</a>
					<div class="dropdown-divider" role="presentation"></div>
					<a class="dropdown-item" href="#1" role="menuitem">Scope</a>
				</div>
			</li>
		</ul>
	</div>
</nav>

<script>
{literal}
$('#mainContent').on(
	'click',
	'a',
	function(event) {
		event.preventDefault();
	}
);
$('input[type="checkbox"]').change(
	function(event) {
		$(this).closest('.dropdown-item').toggleClass('active', this.checked);
	}
);
{/literal}
</script>

```xml
<nav class="navbar navbar-expand navbar-light navbar-light-bg" style="margin-bottom:566px;">
	<div class="container-fluid">
		<ul class="navbar-nav">
			<li class="dropdown nav-item">
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu">
					<form>
						<div class="dropdown-item">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div class="dropdown-item">
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
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown Wide
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu">
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
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown Full
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu">
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
				<a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Dropdown
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div aria-labelledby="dropdownMenu" class="dropdown-menu dropdown-menu-right">
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
					<a class="disabled dropdown-item" href="#1" role="menuitem">Disabled</a>
					<div class="dropdown-divider" role="presentation"></div>
					<a class="dropdown-item" href="#1" role="menuitem">Scope</a>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

</article>