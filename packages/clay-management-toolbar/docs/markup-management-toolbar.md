---
title: 'Management Toolbar'
description: 'Management toolbar is an extension of Toolbar. It is a combination of different components, including filters, orders, search, visualization select, and other actions that let users manage a dataset.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/toolbars/management-bar/'
mainTabURL: 'docs/components/management-toolbar.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Light](#css-light)
-   [Primary](#css-primary)
-   [Overlay](#css-overlay)
    -   [Breakpoints](#css-breakpoints)
-   [Only Search](#css-only-search)
    -   [Always Open](#css-always-open)
    -   [Collapses in Mobile](#css-collapses-in-mobile)
-   [Search](#css-markup-search)
    -   [Summary](#css-summary)
    -   [Results](#css-results)
    -   [Results with Filter](#css-results-with-filter)
-   [Using Buttons](#css-using-buttons)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
    Collapsing the Search Input in mobile requires additional javascript to add and remove the show class on <code class="gatsby-code-text">navbar-overlay-sm-down</code>.
</div>

<div class="clay-site-alert alert alert-warning">
    Bootstrap 4 doesn't support Dropdown Menu's with Popper.js positioning inside Navbars. They align them manually via CSS classes. See <a href="/docs/components/drop-down.html#alignment">Dropdown Alignment</a>.
</div>

## Light(#css-light)

<div class="sheet-example">
    <nav class="management-bar management-bar-light navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" aria-label="Select all" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true"
                        class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1"
                        role="button">
                        <span class="navbar-text-truncate">Filter and Order</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <a aria-label="Order" aria-expanded="false" aria-haspopup="true"
                        class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown"
                        href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#filter"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#1" role="button">Filter Action 1</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Filter Action 2</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Filter Action 3</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a aria-label="Order" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-order-list-up" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#order-list-up"></use>
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                <div class="container-fluid container-fluid-max-xl">
                    <form role="search">
                        <div class="input-group">
                            <div class="input-group-item">
                                <input class="form-control input-group-inset input-group-inset-after"
                                    placeholder="Search for..." type="text">
                                <span class="input-group-inset-item input-group-inset-item-after">
                                    <button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
                                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#search"></use>
                                        </svg>
                                    </button>
                                    <button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
                                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#times"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item navbar-breakpoint-d-none">
                    <a aria-label="Search" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#search"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a aria-label="Open" class="nav-link nav-link-monospaced" href="#uniqueSidenavCollapseId2" id="uniqueSidenavToggler2"
                        role="button">
                        <svg class="lexicon-icon lexicon-icon-circle-open" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#circle-open"></use>
                        </svg>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-label="Display view" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced"
                        data-toggle="dropdown" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#list"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start">
                        <li>
                            <a class="active dropdown-item" href="#1">
                                <span class="dropdown-item-indicator-start">
                                    <svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#list"></use>
                                    </svg>
                                </span>
                                List View
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#1">
                                <span class="dropdown-item-indicator-start">
                                    <svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#table"></use>
                                    </svg>
                                </span>
                                Table View
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#1">
                                <span class="dropdown-item-indicator-start">
                                    <svg class="lexicon-icon lexicon-icon-cards2" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#cards2"></use>
                                    </svg>
                                </span>
                                Card View
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a aria-label="Add" class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" href="#1">
                        <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#plus"></use>
                        </svg>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-label="More Actions" aria-expanded="false" aria-haspopup="true"
                        class="btn btn-primary dropdown-toggle nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none"
                        data-toggle="dropdown" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#plus"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a class="active dropdown-item" href="#1">Option 1</a></li>
                        <li><a class="dropdown-item" href="#1">Option 2</a></li>
                        <li><a class="dropdown-item" href="#1">Option 3</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	...
</nav>
```

## Primary(#css-primary)

<div class="sheet-example">
    <nav class="management-bar management-bar-primary navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav navbar-expand">
                <li class="nav-item">
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input aria-label="Select all" aria-describedby="checkbox-description-1" class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </li>
                <li class="nav-item nav-item-shrink">
                    <span class="navbar-text" id="checkbox-description-1">
                        3 of 7
                        <span class="navbar-breakpoint-down-d-none">items selected</span>
                    </span>
                </li>
                <li class="nav-item nav-item-shrink">
                    <button class="btn btn-link nav-btn" type="button">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Select All</span>
                        </span>
                    </button>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a aria-label="Delete" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#trash"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a aria-label="Paste" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-paste" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#paste"></use>
                        </svg>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-label="More Actions" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced"
                        data-toggle="dropdown" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start">
                        <li>
                            <a class="active dropdown-item" href="#1">
                                <span class="dropdown-item-indicator-start">
                                    <svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#list"></use>
                                    </svg>
                                </span>
                                List View
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#1">
                                <span class="dropdown-item-indicator-start">
                                    <svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#table"></use>
                                    </svg>
                                </span>
                                Table View
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#1">
                                <span class="dropdown-item-indicator-start">
                                    <svg class="lexicon-icon lexicon-icon-cards2" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#cards2"></use>
                                    </svg>
                                </span>
                                Card View
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item nav-divider">
                    <a aria-label="Info" class="nav-link nav-link-monospaced" href="#1">
                        <svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#info-circle-open"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-primary navbar navbar-expand-md">
	...
</nav>
```

## Overlay(#css-overlay)

Use `navbar-overlay navbar-overlay-up` on any direct descendant of navbar to create an overlay on top of the navbar with alternate content, useful for expanding search bars or an alternate navbar that depends on some state in your application. Toggle the `navbar-overlay`'s visibility by adding or removing the class `show` to `navbar-overlay`.

<div class="sheet-example">
    <nav class="management-bar management-bar-light navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input aria-label="Select all" class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a aria-label="Order" aria-expanded="false" aria-haspopup="true"
                        class="dropdown-toggle nav-link nav-link-monospaced navbar-breakpoint-d-none" data-toggle="dropdown"
                        href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#filter"></use>
                        </svg>
                    </a>
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-d-block"
                        data-toggle="dropdown" href="#1" role="button">
                        <span class="navbar-text-truncate">Filter and Order</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#1">Action</a></li>
                        <li><a class="dropdown-item" href="#1">Another action</a></li>
                        <li><a class="dropdown-item" href="#1">Something else here</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Separated link</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">One more separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a aria-label="Order" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-order-list-up" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#order-list-up"></use>
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                <div class="container-fluid container-fluid-max-xl">
                    <form role="search">
                        <div class="input-group">
                            <div class="input-group-item">
                                <input class="form-control input-group-inset input-group-inset-after"
                                    placeholder="Search for..." type="text">
                                <span class="input-group-inset-item input-group-inset-item-after">
                                    <button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
                                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#search"></use>
                                        </svg>
                                    </button>
                                    <button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
                                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#times"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item navbar-breakpoint-d-none">
                    <a aria-label="Search" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#search"></use>
                        </svg>
                    </a>
                </li>
                <li aria-label="View" class="nav-item navbar-breakpoint-down-d-none">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#view"></use>
                        </svg>
                    </a>
                </li>
                <li aria-label="Table" class="nav-item navbar-breakpoint-down-d-none">
                    <a class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#table"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-secondary clay-site-open-overlay-up nav-btn" type="button">
                        Open Overlay
                    </button>
                </li>
            </ul>
            <div class="navbar-overlay navbar-overlay-up">
                <div class="container-fluid container-fluid-max-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="custom-control custom-checkbox">
                                <label>
                                    <input class="custom-control-input" type="checkbox">
                                    <span class="custom-control-label"></span>
                                </label>
                            </div>
                        </li>
                        <li class="dropdown nav-item nav-item-shrink">
                            <span class="navbar-text">3 of 25</span>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-link nav-btn" type="button">
                                Select All
                            </button>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="dropdown nav-item">
                            <a aria-label="More Actions" aria-expanded="false" aria-haspopup="true"
                                class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1"
                                role="button">
                                <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1" role="button">Delete</a></li>
                                <li><a class="dropdown-item" href="#1" role="button">Copy</a></li>
                                <li><a class="dropdown-item" href="#1" role="button">Info</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-secondary clay-site-close-overlay-up nav-btn" type="button">
                                Close Overlay
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox" />
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-label="Filter"
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link nav-link-monospaced navbar-breakpoint-d-none"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-filter"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#filter"></use>
					</svg>
				</a>
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link navbar-breakpoint-d-block"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul class="dropdown-menu">
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
					<li class="dropdown-divider"></li>
					<li>
						<a class="dropdown-item" href="#1"
							>One more separated link</a
						>
					</li>
				</ul>
			</li>
			<li class="nav-item">
				<a
					aria-label="Order"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-order-list-up"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#order-list-up"></use>
					</svg>
				</a>
			</li>
		</ul>
		<div
			class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down"
		>
			<div class="container-fluid container-fluid-max-xl">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input
								class="form-control input-group-inset input-group-inset-after"
								placeholder="Search for..."
								type="text"
							/>
							<span
								class="input-group-inset-item input-group-inset-item-after"
							>
								<button
									aria-label="search"
									class="btn btn-monospaced btn-unstyled"
									type="submit"
								>
									<svg
										class="lexicon-icon lexicon-icon-search"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#search"
										></use>
									</svg>
								</button>
								<button
									aria-label="Close search"
									class="btn btn-monospaced btn-unstyled d-none"
									type="button"
								>
									<svg
										class="lexicon-icon lexicon-icon-times"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#times"
										></use>
									</svg>
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-d-none">
				<a
					aria-label="Search"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-search"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#search"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a
					aria-label="View"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-view"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#view"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a
					aria-label="Table"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-table"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#table"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<button
					class="btn btn-secondary clay-site-open-overlay-up nav-btn"
					type="button"
				>
					Open Overlay
				</button>
			</li>
		</ul>
		<div class="navbar-overlay navbar-overlay-up">
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</li>
					<li class="dropdown nav-item nav-item-shrink">
						<span class="navbar-text">3 of 25</span>
					</li>
					<li class="nav-item">
						<button class="btn btn-link nav-btn" type="button">
							Select All
						</button>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li class="dropdown nav-item">
						<a
							aria-label="More Actions"
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
								<use
									href="/images/icons/icons.svg#ellipsis-v"
								></use>
							</svg>
						</a>
						<ul class="dropdown-menu dropdown-menu-right">
							<li>
								<a class="dropdown-item" href="#1" role="button"
									>Delete</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1" role="button"
									>Copy</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1" role="button"
									>Info</a
								>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<button
							class="btn btn-secondary clay-site-close-overlay-up nav-btn"
							type="button"
						>
							Close Overlay
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
```

### Breakpoints(#css-breakpoints)

`navbar-overlay-up` overlays the navbar at all screen widths.
`navbar-overlay-lg-down`: 1199px and below
`navbar-overlay-md-down`: 991px and below
`navbar-overlay-sm-down`: 767px and below
`navbar-overlay-xs-down`: 575px and below

<div class="sheet-example">
    <nav class="management-bar management-bar-light navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a aria-label="Filter" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#filter"></use>
                        </svg>
                    </a>
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-d-block" data-toggle="dropdown" href="#1" role="button">
                        <span class="navbar-text-truncate">Filter and Order</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#1">Action</a></li>
                        <li><a class="dropdown-item" href="#1">Another action</a></li>
                        <li><a class="dropdown-item" href="#1">Something else here</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Separated link</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">One more separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a aria-label="Order" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-order-list-up" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#order-list-up"></use>
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                <div class="container-fluid container-fluid-max-xl">
                    <form role="search">
                        <div class="input-group">
                            <div class="input-group-item">
                                <input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
                                <span class="input-group-inset-item input-group-inset-item-after">
                                    <button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
                                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#search"></use>
                                        </svg>
                                    </button>
                                    <button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
                                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#times"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item navbar-breakpoint-d-none">
                    <a aria-label="Search" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#search"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item navbar-breakpoint-down-d-none">
                    <a aria-label="View" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#view"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item navbar-breakpoint-down-d-none">
                    <a aria-label="Table" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#table"></use>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-secondary clay-site-open-overlay-up nav-btn" type="button">
                        Open Overlay
                    </button>
                </li>
            </ul>
            <div class="navbar-overlay navbar-overlay-up">
                <div class="container-fluid container-fluid-max-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="custom-control custom-checkbox">
                                <label>
                                    <input class="custom-control-input" type="checkbox">
                                    <span class="custom-control-label"></span>
                                </label>
                            </div>
                        </li>
                        <li class="dropdown nav-item nav-item-shrink">
                            <span class="navbar-text">3 of 25</span>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-link nav-btn" type="button">
                                Select All
                            </button>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="dropdown nav-item">
                            <a aria-label="More Actions" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
                                <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                </svg>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1" role="button">Delete</a></li>
                                <li><a class="dropdown-item" href="#1" role="button">Copy</a></li>
                                <li><a class="dropdown-item" href="#1" role="button">Info</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-secondary clay-site-close-overlay-up nav-btn" type="button">
                                Close Overlay
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox" />
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-label="Filter"
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link nav-link-monospaced navbar-breakpoint-d-none"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-filter"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#filter"></use>
					</svg>
				</a>
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link navbar-breakpoint-d-block"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul class="dropdown-menu">
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
					<li class="dropdown-divider"></li>
					<li>
						<a class="dropdown-item" href="#1"
							>One more separated link</a
						>
					</li>
				</ul>
			</li>
			<li class="nav-item">
				<a
					aria-label="Order"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-order-list-up"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#order-list-up"></use>
					</svg>
				</a>
			</li>
		</ul>
		<div
			class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down"
		>
			<div class="container-fluid container-fluid-max-xl">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input
								class="form-control input-group-inset input-group-inset-after"
								placeholder="Search for..."
								type="text"
							/>
							<span
								class="input-group-inset-item input-group-inset-item-after"
							>
								<button
									aria-label="Search"
									class="btn btn-monospaced btn-unstyled"
									type="submit"
								>
									<svg
										class="lexicon-icon lexicon-icon-search"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#search"
										></use>
									</svg>
								</button>
								<button
									aria-label="Close search"
									class="btn btn-monospaced btn-unstyled d-none"
									type="button"
								>
									<svg
										class="lexicon-icon lexicon-icon-times"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#times"
										></use>
									</svg>
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-d-none">
				<a
					aria-label="Search"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-search"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#search"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a
					aria-label="View"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-view"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#view"></use>
					</svg>
				</a>
			</li>
			<li
				aria-label="Table"
				class="nav-item navbar-breakpoint-down-d-none"
			>
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg
						class="lexicon-icon lexicon-icon-table"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#table"></use>
					</svg>
				</a>
			</li>
			<li class="nav-item">
				<button
					class="btn btn-secondary clay-site-open-overlay-up nav-btn"
					type="button"
				>
					Open Overlay
				</button>
			</li>
		</ul>
		<div class="navbar-overlay navbar-overlay-up">
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</li>
					<li class="dropdown nav-item nav-item-shrink">
						<span class="navbar-text">3 of 25</span>
					</li>
					<li class="nav-item">
						<button class="btn btn-link nav-btn" type="button">
							Select All
						</button>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li class="dropdown nav-item">
						<a
							aria-label="More Actions"
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
								<use
									href="/images/icons/icons.svg#ellipsis-v"
								></use>
							</svg>
						</a>
						<ul class="dropdown-menu dropdown-menu-right">
							<li>
								<a class="dropdown-item" href="#1" role="button"
									>Delete</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1" role="button"
									>Copy</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1" role="button"
									>Info</a
								>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<button
							class="btn btn-secondary clay-site-close-overlay-up nav-btn"
							type="button"
						>
							Close Overlay
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
```

## Only Search(#css-only-search)

### Always Open(#css-always-open)

<div class="sheet-example">
    <nav class="management-bar management-bar-light navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <div class="navbar-form navbar-form-autofit">
                <form role="search">
                    <div class="input-group">
                        <div class="input-group-item">
                            <input class="form-control input-group-inset input-group-inset-after"
                                placeholder="Search for..." type="text">
                            <span class="input-group-inset-item input-group-inset-item-after">
                                <button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
                                    <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#search"></use>
                                    </svg>
                                </button>
                                <button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
                                    <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#times"></use>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<div class="navbar-form navbar-form-autofit">
			<form role="search">
				<div class="input-group">
					<div class="input-group-item">
						<input
							class="form-control input-group-inset input-group-inset-after"
							placeholder="Search for..."
							type="text"
						/>
						<span
							class="input-group-inset-item input-group-inset-item-after"
						>
							<button
								aria-label="Search"
								class="btn btn-monospaced btn-unstyled"
								type="submit"
							>
								<svg
									class="lexicon-icon lexicon-icon-search"
									focusable="false"
									role="presentation"
								>
									<use
										href="/images/icons/icons.svg#search"
									></use>
								</svg>
							</button>
							<button
								aria-label="Close search"
								class="btn btn-monospaced btn-unstyled d-none"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										href="/images/icons/icons.svg#times"
									></use>
								</svg>
							</button>
						</span>
					</div>
				</div>
			</form>
		</div>
	</div>
</nav>
```

### Collapses in Mobile(#css-collapses-in-mobile)

<div class="sheet-example">
    <nav class="management-bar management-bar-light navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                <div class="container-fluid container-fluid-max-xl">
                    <form role="search">
                        <div class="input-group">
                            <div class="input-group-item">
                                <input class="form-control input-group-inset input-group-inset-after"
                                    placeholder="Search for..." type="text">
                                <span class="input-group-inset-item input-group-inset-item-after">
                                    <button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
                                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#search"></use>
                                        </svg>
                                    </button>
                                    <button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
                                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#times"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ul class="navbar-nav navbar-nav-last">
                <li class="nav-item navbar-breakpoint-d-none">
                    <a aria-label="Search" class="nav-link nav-link-monospaced" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#search"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<div
			class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down"
		>
			<div class="container-fluid container-fluid-max-xl">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input
								class="form-control input-group-inset input-group-inset-after"
								placeholder="Search for..."
								type="text"
							/>
							<span
								class="input-group-inset-item input-group-inset-item-after"
							>
								<button
									aria-label="Search"
									class="btn btn-monospaced btn-unstyled"
									type="submit"
								>
									<svg
										class="lexicon-icon lexicon-icon-search"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#search"
										></use>
									</svg>
								</button>
								<button
									aria-label="Close search"
									class="btn btn-monospaced btn-unstyled d-none"
									type="button"
								>
									<svg
										class="lexicon-icon lexicon-icon-times"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#times"
										></use>
									</svg>
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav navbar-nav-last">
			<li class="nav-item navbar-breakpoint-d-none">
				<a
					aria-label="Search"
					class="nav-link nav-link-monospaced"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-search"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#search"></use>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</nav>
```

## Search(#css-markup-search)

### Summary(#css-summary)

<div class="sheet-example">
    <nav class="tbar subnav-tbar subnav-tbar-primary">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="tbar-nav">
                <li class="tbar-item tbar-item-expand">
                    <div class="tbar-section">
                        <span class="component-title text-truncate-inline">
                                <span class="text-truncate">Results for Master (19 Items)</span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="tbar subnav-tbar subnav-tbar-primary">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-title text-truncate-inline">
						<span class="text-truncate"
							>Results for Master (19 Items)</span
						>
					</span>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

### Results(#css-results)

<div class="sheet-example">
    <nav class="tbar subnav-tbar subnav-tbar-primary">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="tbar-nav">
                <li class="tbar-item tbar-item-expand">
                    <div class="tbar-section">
                        <span class="component-text text-truncate-inline">
                            <span class="text-truncate">25,392 results for
                                <strong>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</strong></span>
                        </span>
                    </div>
                </li>
                <li class="tbar-item">
                    <button class="btn btn-unstyled component-link tbar-link" type="button">Clear</button>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="tbar subnav-tbar subnav-tbar-primary">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-text text-truncate-inline">
						<span class="text-truncate"
							>25,392 results for
							<strong
								>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</strong
							></span
						>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<button
					class="btn btn-unstyled component-link tbar-link"
					type="button"
				>
					Clear
				</button>
			</li>
		</ul>
	</div>
</nav>
```

### Results with Filter(#css-results-with-filter)

<div class="sheet-example">
    <nav class="tbar tbar-inline-md-down subnav-tbar subnav-tbar-primary">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="tbar-nav tbar-nav-wrap">
                <li class="tbar-item">
                    <div class="tbar-section">
                        <span class="component-text text-truncate-inline">
                            <span class="text-truncate">6 results for "<strong>red</strong>"</span>
                        </span>
                    </div>
                </li>
                <li class="tbar-item">
                    <div class="tbar-section">
                        <span class="label component-label tbar-label">
                            <span class="label-item label-item-expand">
                                <div class="label-section">Filter 1</div>
                            </span>
                        </span>
                    </div>
                </li>
                <li class="tbar-item">
                    <div class="tbar-section">
                        <span class="label label-dismissible component-label tbar-label">
                            <span class="label-item label-item-expand">
                                <div class="label-section">Filter 2</div>
                            </span>
                            <span class="label-item label-item-after">
                                <button class="btn close" aria-label="close" type="button">
                                    <svg class="lexicon-icon lexicon-icon-times-small" focusable="false" role="presentation">
                                        <title>times</title>
                                        <use href="/images/icons/icons.svg#times-small"></use>
                                    </svg>
                                </button>
                            </span>
                        </span>
                    </div>
                </li>
                <li class="tbar-item tbar-item-expand">
                    <div class="tbar-section">
                        <span class="label label-dismissible component-label tbar-label">
                            <span class="label-item label-item-expand">
                                <div class="label-section">Category: <strong>Label 3</strong></div>
                            </span>
                            <span class="label-item label-item-after">
                                <button class="btn close" aria-label="close" type="button">
                                    <svg class="lexicon-icon lexicon-icon-times-small" focusable="false" role="presentation">
                                        <title>times</title>
                                        <use href="/images/icons/icons.svg#times-small"></use>
                                    </svg>
                                </button>
                            </span>
                        </span>
                    </div>
                </li>
                <li class="tbar-item">
                    <div class="tbar-section">
                        <a class=" component-link tbar-link" href="#clear">clear</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="tbar tbar-inline-md-down subnav-tbar subnav-tbar-primary">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav tbar-nav-wrap">
			<li class="tbar-item">
				<div class="tbar-section">
					<span class="component-text text-truncate-inline">
						<span class="text-truncate"
							>6 results for "<strong>red</strong>"</span
						>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<span class="label component-label tbar-label">
						<span class="label-item label-item-expand">
							<div class="label-section">Filter 1</div>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<span
						class="label label-dismissible component-label tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">Filter 2</div>
						</span>
						<span class="label-item label-item-after">
							<button
								class="btn close"
								aria-label="close"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times-small"
									focusable="false"
									role="presentation"
								>
									<title>times</title>
									<use
										href="/images/icons/icons.svg#times-small"
									></use>
								</svg>
							</button>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span
						class="label label-dismissible component-label tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Category: <strong>Label 3</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								class="btn close"
								aria-label="close"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times-small"
									focusable="false"
									role="presentation"
								>
									<title>times</title>
									<use
										href="/images/icons/icons.svg#times-small"
									></use>
								</svg>
							</button>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<a class=" component-link tbar-link" href="#clear">clear</a>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

## Using Buttons(#css-using-buttons)

<div class="sheet-example">
    <nav class="management-bar management-bar-primary navbar navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input aria-label="Select all" class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <button aria-expanded="false" aria-haspopup="true"
                        class="btn btn-unstyled dropdown-toggle nav-link navbar-breakpoint-down-d-none"
                        data-toggle="dropdown" type="button">
                        <span class="navbar-text-truncate">Filter and Order</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </button>
                    <button aria-label="Filter" aria-expanded="false" aria-haspopup="true"
                        class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced navbar-breakpoint-d-none"
                        data-toggle="dropdown" type="button">
                        <svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#filter"></use>
                        </svg>
                    </button>
                </li>
                <li class="nav-item">
                    <button aria-label="Order" class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                    <svg class="lexicon-icon lexicon-icon-order-list-up" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#order-list-up"></use>
                    </svg>
                    </button>
                </li>
            </ul>
            <div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
                <div class="container-fluid container-fluid-max-xl">
                    <form role="search">
                        <div class="input-group">
                            <div class="input-group-item">
                                <input class="form-control input-group-inset input-group-inset-after"
                                    placeholder="Search for..." type="text">
                                <span class="input-group-inset-item input-group-inset-item-after">
                                    <button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
                                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#search"></use>
                                        </svg>
                                    </button>
                                    <button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
                                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                                            <use href="/images/icons/icons.svg#times"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item navbar-breakpoint-d-none">
                    <button aria-label="Search" class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
                        <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#search"></use>
                        </svg>
                    </button>
                </li>
                <li class="dropdown nav-item">
                    <button aria-label="List" aria-expanded="false" aria-haspopup="true"
                        class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced" data-toggle="dropdown"
                        type="button">
                        <svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#list"></use>
                        </svg>
                    </button>
                </li>
                <li class="nav-item">
                    <button aria-label="Add" class="btn btn-secondary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none"
                        type="button">
                        <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#plus"></use>
                        </svg>
                    </button>
                </li>
                <li class="nav-item">
                    <button aria-label="Add" class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" type="button">
                        <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#plus"></use>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</div>

```html
<nav class="management-bar management-bar-primary navbar navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input
							aria-label="Select all"
							class="custom-control-input"
							type="checkbox"
						/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<button
					aria-expanded="false"
					aria-haspopup="true"
					class="btn btn-unstyled dropdown-toggle nav-link navbar-breakpoint-down-d-none"
					data-toggle="dropdown"
					type="button"
				>
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</button>
				<button
					aria-label="Filter"
					aria-expanded="false"
					aria-haspopup="true"
					class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced navbar-breakpoint-d-none"
					data-toggle="dropdown"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-filter"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#filter"></use>
					</svg>
				</button>
			</li>
			<li class="nav-item">
				<button
					aria-label="Order"
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-order-list-up"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#order-list-up"></use>
					</svg>
				</button>
			</li>
		</ul>
		<div
			class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down"
		>
			<div class="container-fluid container-fluid-max-xl">
				<form role="search">
					<div class="input-group">
						<div class="input-group-item">
							<input
								class="form-control input-group-inset input-group-inset-after"
								placeholder="Search for..."
								type="text"
							/>
							<span
								class="input-group-inset-item input-group-inset-item-after"
							>
								<button
									aria-label="Search"
									class="btn btn-monospaced btn-unstyled"
									type="submit"
								>
									<svg
										class="lexicon-icon lexicon-icon-search"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#search"
										></use>
									</svg>
								</button>
								<button
									aria-label="Close search"
									class="btn btn-monospaced btn-unstyled d-none"
									type="button"
								>
									<svg
										class="lexicon-icon lexicon-icon-times"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#times"
										></use>
									</svg>
								</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-d-none">
				<button
					aria-label="Search"
					class="btn btn-unstyled nav-btn nav-btn-monospaced"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-search"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#search"></use>
					</svg>
				</button>
			</li>
			<li class="dropdown nav-item">
				<button
					aria-label="List"
					aria-expanded="false"
					aria-haspopup="true"
					class="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced"
					data-toggle="dropdown"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-list"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#list"></use>
					</svg>
				</button>
			</li>
			<li class="nav-item">
				<button
					aria-label="Add"
					class="btn btn-secondary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none"
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
					aria-label="Add"
					class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none"
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
		</ul>
	</div>
</nav>
```
