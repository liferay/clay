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
					<span aria-label="icon-product-menu-closed" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
							<use href="/images/icons/icons.svg#product-menu-closed" />
						</svg>
					</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-angle-left" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
							<use href="/images/icons/icons.svg#angle-left" />
						</svg>
					</span>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-cog" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
							<use href="/images/icons/icons.svg#cog" />
						</svg>
					</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-plus" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
							<use href="/images/icons/icons.svg#plus" />
						</svg>
					</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-simulation-menu-closed" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-simulation-menu-closed">
							<use href="/images/icons/icons.svg#simulation-menu-closed" />
						</svg>
					</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use href="/images/icons/icons.svg#ellipsis-v" />
						</svg>
					</span>
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
					<span aria-label="icon-product-menu-closed" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
							<use href="/images/icons/icons.svg#product-menu-closed" />
						</svg>
					</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-angle-left" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
							<use href="/images/icons/icons.svg#angle-left" />
						</svg>
					</span>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-cog" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
							<use href="/images/icons/icons.svg#cog" />
						</svg>
					</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-plus" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
							<use href="/images/icons/icons.svg#plus" />
						</svg>
					</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<span aria-label="icon-simulation-menu-closed" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-simulation-menu-closed">
							<use href="/images/icons/icons.svg#simulation-menu-closed" />
						</svg>
					</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use href="/images/icons/icons.svg#ellipsis-v" />
						</svg>
					</span>
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
