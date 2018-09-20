---
title: "Dropdown Menu"
---

<article>

### Dropdown wide / full

<p>Use <code>.dropdown-wide</code> with <code>.dropdown</code> to make the dropdown menu big. The default width is 500px. Use <code class="code">.dropdown-full</code> to create a dropdown menu as wide as its relative parent. See dropdown examples.</p>

<div class="clay-site-dropdown-display">
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
					<li><a class="dropdown-item" href="#1">Updates: Service Packs & Fixes</a></li>
					<li><a class="dropdown-item" href="#1">Install, Upgrade, & Activate</a></li>
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

```html
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
					<li><a class="dropdown-item" href="#1">Updates: Service Packs & Fixes</a></li>
					<li><a class="dropdown-item" href="#1">Install, Upgrade, & Activate</a></li>
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
```

</article>

<article>

### Dropdown Alignment

<p>Align a dropdown menu on the top or bottom side with classes <code class="code">dropdown-menu</code>, <code class="code">dropdown-menu-right</code>, <code class="code">dropdown-menu-top</code>, or <code class="code">dropdown-menu-top-right</code></p>

<div class="dropdown" style="display: inline-block;">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownAlignment1" type="button">
		Default
		<span aria-hidden="true" class="icon-caret-down"></span>
	</button>
	<ul aria-labelledby="dropdownAlignment1" class="dropdown-menu">
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

<p>Align a dropdown menu on the left or right side with classes <code class="code">dropdown-menu-right-side</code>, <code class="code">dropdown-menu-left-side</code>, <code class="code">dropdown-menu-right-side-bottom</code>, or <code class="code">dropdown-menu-left-side-bottom</code>.</p>

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
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</li>
	</ul>
</div>

<p>We've also added the option to center the dropdown to its trigger in the 4 different dropdown-menu positions with classes <code class="code">dropdown-menu-center</code>, <code class="code">dropdown-menu-top-center</code>, <code class="code">dropdown-menu-left-side-middle</code>, or <code class="code">dropdown-menu-right-side-middle</code>.</p>

<p>You can center the dropdown menu in browsers that don't support css transforms by setting a negative <code class="code">margin-left</code> equal to the width of the dropdown-menu divided by 2. For left-side and right-side dropdown-menus vertically align them by setting a negative <code class="code">margin-top</code> equal to the height of the dropdown-menu divided by 2.</p>

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

</article>