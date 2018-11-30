---
title: "Header"
---

### Description

Header is a toolbar that supports identification, navigation, and display actions.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/satellites/Navigation/header.html">Header Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Header

<div class="alert alert-warning">Bootstrap 4 doesn't support Dropdown Menus with Popper.js positioning inside Navbars. They align them manually via CSS classes.</div>
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-product-menu-closed" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#product-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-left" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#cog" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#plus" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-simulation-menu-closed" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#simulation-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#1">Action</a>
					<a class="dropdown-item" href="#1">Another action</a>
					<a class="dropdown-item" href="#1">Something else here</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#1">Separated link</a>
				</div>
			</li>
		</ul>
	</div>
</nav>

```html
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-product-menu-closed" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#product-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-left" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#cog" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#plus" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-simulation-menu-closed" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#simulation-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#1">Action</a>
					<a class="dropdown-item" href="#1">Another action</a>
					<a class="dropdown-item" href="#1">Something else here</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#1">Separated link</a>
				</div>
			</li>
		</ul>
	</div>
</nav>
```
