---
title: "Header"
---

### Description

Header is toolbar that allows identification, navigation and display actions.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Navigation/header.html">Header Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="header">
<h3 class="component-title">
	<a href="#header">Header</a>
</h3>
<div class="alert alert-warning">Bootstrap 4 doesn't support Dropdown Menu's with Popper.js positioning inside Navbars. They align them manually via CSS classes.</div>
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
						<use xlink:href="/images/icons/icons.svg#product-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
						<use xlink:href="/images/icons/icons.svg#angle-left" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
						<use xlink:href="/images/icons/icons.svg#cog" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
						<use xlink:href="/images/icons/icons.svg#plus" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-simulation-menu-closed">
						<use xlink:href="/images/icons/icons.svg#simulation-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
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

```text/html
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
						<use xlink:href="/images/icons/icons.svg#product-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
						<use xlink:href="/images/icons/icons.svg#angle-left" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
						<use xlink:href="/images/icons/icons.svg#cog" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
						<use xlink:href="/images/icons/icons.svg#plus" />
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-simulation-menu-closed">
						<use xlink:href="/images/icons/icons.svg#simulation-menu-closed" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
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

</article>