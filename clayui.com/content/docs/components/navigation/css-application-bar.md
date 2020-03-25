---
title: 'Application Bar'
description: 'This component is used as the main navigation of Liferay DXP.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Light](#light)
-   [Secondary](#secondary)
-   [Using Buttons](#using-buttons)

</div>
</div>

<div class="clay-site-alert alert alert-info">Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/satellite-components/navigation/">Application Bar Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<div class="clay-site-alert alert alert-warning">
    Bootstrap 4 doesn't support Dropdown Menu's with Popper.js positioning inside Navbars. They align them manually via CSS classes. See <a href="/docs/components/drop-down.html#alignment">Dropdown Alignment</a>.
</div>

## Default

<div class="sheet-example">
    <nav class="application-bar application-bar-dark navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-product-menu-closed" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#product-menu-closed"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#angle-left"></use>
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="navbar-title navbar-text-truncate">My Application Name</div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#cog"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#plus"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-simulation-menu-closed" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#simulation-menu-closed"></use>
                        </svg>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced"
                        data-toggle="dropdown" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v"></use>
                        </svg>
                    </a>
                    <ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1">Action</a></li>
                        <li><a class="dropdown-item" href="#1">Another action</a></li>
                        <li><a class="dropdown-item" href="#1">Something else here</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg
						class="lexicon-icon lexicon-icon-product-menu-closed"
						focusable="false"
						role="presentation"
					>
						<use
							href="/images/icons/icons.svg#product-menu-closed"
						></use>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg
						class="lexicon-icon lexicon-icon-angle-left"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#angle-left"></use>
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg
						class="lexicon-icon lexicon-icon-cog"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#cog"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg
						class="lexicon-icon lexicon-icon-plus"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#plus"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg
						class="lexicon-icon lexicon-icon-simulation-menu-closed"
						focusable="false"
						role="presentation"
					>
						<use
							href="/images/icons/icons.svg#simulation-menu-closed"
						></use>
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link nav-link-monospaced"
					data-toggle="dropdown"
					href="#1"
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
				<ul
					aria-labelledby="navbarDropdownMenuLink"
					class="dropdown-menu dropdown-menu-right"
				>
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li>
						<a class="dropdown-item" href="#1">Another action</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Something else here</a
						>
					</li>
					<li class="dropdown-divider"></li>
					<li>
						<a class="dropdown-item" href="#1">Separated link</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</nav>
```

## Using Buttons

<div class="sheet-example">
    <nav class="application-bar application-bar-dark navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                        <svg class="lexicon-icon lexicon-icon-product-menu-closed" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#product-menu-closed"></use>
                        </svg>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                        <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#angle-left"></use>
                        </svg>
                    </button>
                </li>
            </ul>
            <div class="navbar-title navbar-text-truncate">My Application Name</div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                        <svg class="lexicon-icon lexicon-icon-cog" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#cog"></use>
                        </svg>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                        <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#plus"></use>
                        </svg>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                        <svg class="lexicon-icon lexicon-icon-simulation-menu-closed" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#simulation-menu-closed"></use>
                        </svg>
                    </button>
                </li>
                <li class="dropdown nav-item">
                    <button aria-expanded="false" aria-haspopup="true"
                        class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced" data-toggle="dropdown"
                        type="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v"></use>
                        </svg>
                    </button>
                    <ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1">Action</a></li>
                        <li><a class="dropdown-item" href="#1">Another action</a></li>
                        <li><a class="dropdown-item" href="#1">Something else here</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<button
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-product-menu-closed"
						focusable="false"
						role="presentation"
					>
						<use
							href="/images/icons/icons.svg#product-menu-closed"
						></use>
					</svg>
				</button>
			</li>
			<li class="nav-item">
				<button
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-angle-left"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#angle-left"></use>
					</svg>
				</button>
			</li>
		</ul>
		<div class="navbar-title navbar-text-truncate">My Application Name</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<button
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-cog"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#cog"></use>
					</svg>
				</button>
			</li>
			<li class="nav-item">
				<button
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-plus"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#plus"></use>
					</svg>
				</button>
			</li>
			<li class="nav-item">
				<button
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-simulation-menu-closed"
						focusable="false"
						role="presentation"
					>
						<use
							href="/images/icons/icons.svg#simulation-menu-closed"
						></use>
					</svg>
				</button>
			</li>
			<li class="dropdown nav-item">
				<button
					aria-expanded="false"
					aria-haspopup="true"
					class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced"
					data-toggle="dropdown"
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
				<ul
					aria-labelledby="navbarDropdownMenuLink"
					class="dropdown-menu dropdown-menu-right"
				>
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li>
						<a class="dropdown-item" href="#1">Another action</a>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Something else here</a
						>
					</li>
					<li class="dropdown-divider"></li>
					<li>
						<a class="dropdown-item" href="#1">Separated link</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</nav>
```
