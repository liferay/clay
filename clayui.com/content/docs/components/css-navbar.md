---
title: 'Navbar'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Use Cases](#use-cases)
    -   [Navbar Expand](#navbar-expand)
    -   [Navbar with Form](#navbar-with-form)
    -   [Nav Unstyled](#nav-unstyled)
-   [Breakpoints](#breakpoints)
-   [Toggler](#toggler)
-   [Collapse](#collapse)

</div>
</div>

<div class="clay-site-alert alert alert-info">
    Similar to Nav, Navbar is a base component used to create other horizontal navigation like bars (e.g., Navigation Bar, Management Bar, and Application Bar). Navbar on its own doesn't have any special color styling. Colors can be modified using a combination of Bootstrap 4's Navbar color utilities <code class="gatsby-code-text">.navbar-light</code>, <code class="gatsby-code-text">.navbar-dark</code> and background utilities. We don't recommend using color utilities as it's hard to keep track of the colors in large applications, rather we recommend scoping your color class to the component and using the <code class="gatsby-code-text">clay-navbar-variant($map)</code> mixin to customize colors that are not covered by any of the Navbar variants.
</div>

<div class="clay-site-alert alert alert-warning">
    Bootstrap 4 doesn't support Dropdown Menu's with Popper.js positioning inside Navbars. They align them manually via CSS classes. See <a href="/docs/components/drop-down.html#alignment">Dropdown Alignment</a>.
</div>

## Use Cases

### Navbar Expand

Use the `.navbar-expand` class on `.navbar` to preserve desktop navbar styles in mobile. It's useful when there are only one or two links in the navbar; where collapsing doesn't make sense.

<div class="sheet-example">
    <nav class="navbar navbar-expand">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="active nav-link" href="#1">
                    <span class="navbar-text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                </a>
            </li>
            <li class="dropdown nav-item">
                <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
                    <span class="navbar-text-truncate">Blogs</span>
                    <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                    </svg>
                </a>
                <ul aria-labelledby="dropdownMenu" class="dropdown-menu">
                    <li class="dropdown-header">Dropdown Header</li>
                    <li><a class="dropdown-item" href="#1">Actions</a></li>
                    <li><a class="dropdown-item" href="#1">Edit</a></li>
                    <li><a class="dropdown-item" href="#1">View</a></li>
                    <li><a class="dropdown-item" href="#1">Permissions</a></li>
                    <li><a class="disabled dropdown-item" href="#1">Disabled</a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#1">Scope</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>

```html
<nav class="navbar navbar-expand">
	<ul class="navbar-nav">
		<li class="nav-item">
			<a class="active nav-link" href="#1">
				<span class="navbar-text-truncate"
					>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
				>
			</a>
		</li>
		<li class="dropdown nav-item">
			<a
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle nav-link"
				data-toggle="dropdown"
				href="#1"
				role="button"
			>
				<span class="navbar-text-truncate">Blogs</span>
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</a>
			<ul aria-labelledby="dropdownMenu" class="dropdown-menu">
				<li class="dropdown-header">Dropdown Header</li>
				<li><a class="dropdown-item" href="#1">Actions</a></li>
				<li><a class="dropdown-item" href="#1">Edit</a></li>
				<li><a class="dropdown-item" href="#1">View</a></li>
				<li><a class="dropdown-item" href="#1">Permissions</a></li>
				<li>
					<a class="disabled dropdown-item" href="#1">Disabled</a>
				</li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</li>
	</ul>
</nav>
```

<div class="sheet-example">
    <nav class="bg-light navbar navbar-expand navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="active nav-link" href="#1">
                    <span class="navbar-text-truncate">Message Boards</span>
                </a>
            </li>
            <li class="dropdown nav-item">
                <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
                    <span class="navbar-text-truncate">Blogs</span>
                    <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#caret-bottom"></use>
                    </svg>
                </a>
                <ul aria-labelledby="dropdownMenu" class="dropdown-menu">
                    <li class="dropdown-header">Dropdown Header</li>
                    <li><a class="dropdown-item" href="#1">Actions</a></li>
                    <li><a class="dropdown-item" href="#1">Edit</a></li>
                    <li><a class="dropdown-item" href="#1">View</a></li>
                    <li><a class="dropdown-item" href="#1">Permissions</a></li>
                    <li><a class="disabled dropdown-item" href="#1">Disabled</a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#1">Scope</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>

```html
<nav class="bg-light navbar navbar-expand navbar-light">
	<ul class="navbar-nav">
		<li class="nav-item">
			<a class="active nav-link" href="#1">
				<span class="navbar-text-truncate">Message Boards</span>
			</a>
		</li>
		<li class="dropdown nav-item">
			<a
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle nav-link"
				data-toggle="dropdown"
				href="#1"
				role="button"
			>
				<span class="navbar-text-truncate">Blogs</span>
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</a>
			<ul aria-labelledby="dropdownMenu" class="dropdown-menu">
				<li class="dropdown-header">Dropdown Header</li>
				<li><a class="dropdown-item" href="#1">Actions</a></li>
				<li><a class="dropdown-item" href="#1">Edit</a></li>
				<li><a class="dropdown-item" href="#1">View</a></li>
				<li><a class="dropdown-item" href="#1">Permissions</a></li>
				<li>
					<a class="disabled dropdown-item" href="#1">Disabled</a>
				</li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Scope</a></li>
			</ul>
		</li>
	</ul>
</nav>
```

<div class="sheet-example">
    <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#1">
            <span class="navbar-text-truncate">Brand
                ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
        </a>
        <button aria-controls="navbar-collapse-0a" aria-expanded="false" aria-label="Toggle Navigation"
            class="collapsed navbar-toggler" data-target="#navbar-collapse-0a" data-toggle="collapse" type="button">
            <svg class="lexicon-icon lexicon-icon-bars" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#bars"></use>
            </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse-0a">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a aria-label="Current" class="active nav-link" href="#1">
                        <span
                            class="navbar-text-truncate">ActiveReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown"
                        href="#1" role="button">
                        <span class="navbar-text-truncate">Dropdown
                            ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu">
                        <li><a class="dropdown-item" href="#1">Action</a></li>
                        <li><a class="dropdown-item" href="#1">Another action</a></li>
                        <li><a class="dropdown-item" href="#1">Something else here</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Separated link</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
            <div class="navbar-form navbar-form-autofit">
                <form>
                    <div class="input-group">
                        <div class="input-group-item">
                            <input aria-label="Search" class="form-control" placeholder="Search" type="text">
                        </div>
                        <div class="input-group-item input-group-item-shrink">
                            <button class="btn btn-secondary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="disabled nav-link" href="#1">
                        <span class="navbar-text-truncate">Disabled</span>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown"
                        href="#1" role="button">
                        <span class="navbar-text-truncate">Dropdown</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
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
<nav class="navbar navbar-expand-md">
	<a class="navbar-brand" href="#1">
		<span class="navbar-text-truncate"
			>Brand
			ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
		>
	</a>
	<button
		aria-controls="navbar-collapse-0a"
		aria-expanded="false"
		aria-label="Toggle Navigation"
		class="collapsed navbar-toggler"
		data-target="#navbar-collapse-0a"
		data-toggle="collapse"
		type="button"
	>
		<svg
			class="lexicon-icon lexicon-icon-bars"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#bars"></use>
		</svg>
	</button>
	<div class="collapse navbar-collapse" id="navbar-collapse-0a">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a aria-label="Current" class="active nav-link" href="#1">
					<span class="navbar-text-truncate"
						>ActiveReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
					>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate"
						>Dropdown
						ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
					>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul
					aria-labelledby="navbarDropdownMenuLink"
					class="dropdown-menu"
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
					<li class="dropdown-divider"></li>
					<li>
						<a class="dropdown-item" href="#1"
							>One more separated link</a
						>
					</li>
				</ul>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit">
			<form>
				<div class="input-group">
					<div class="input-group-item">
						<input
							aria-label="Search"
							class="form-control"
							placeholder="Search"
							type="text"
						/>
					</div>
					<div class="input-group-item input-group-item-shrink">
						<button class="btn btn-secondary" type="submit">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="disabled nav-link" href="#1">
					<span class="navbar-text-truncate">Disabled</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate">Dropdown</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
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

<div class="sheet-example">
    <nav class="bg-secondary navbar navbar-dark navbar-expand-md">
        <div class="container-fluid container-fluid-max-xl">
            <a class="navbar-brand" href="#1">
                <span class="navbar-text-truncate">Brand</span>
            </a>
            <button aria-controls="navbar-collapse-0c" aria-expanded="false" aria-label="Toggle Navigation"
                class="collapsed navbar-toggler" data-target="#navbar-collapse-0c" data-toggle="collapse" type="button">
                <svg class="lexicon-icon lexicon-icon-bars" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#bars"></use>
                </svg>
            </button>
            <div class="collapse navbar-collapse" id="navbar-collapse-0c">
                <div class="container-fluid container-fluid-max-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a aria-label="Current" class="active nav-link" href="#1">
                                <span class="navbar-text-truncate">Active</span>
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link"
                                data-toggle="dropdown" href="#1" role="button">
                                <span class="navbar-text-truncate">Dropdown</span>
                                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                                </svg>
                            </a>
                            <ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu">
                                <li><a class="dropdown-item" href="#1">Action</a></li>
                                <li><a class="dropdown-item" href="#1">Another action</a></li>
                                <li><a class="dropdown-item" href="#1">Something else here</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#1">Separated link</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#1">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="navbar-form navbar-form-autofit">
                        <form role="search">
                            <div class="input-group">
                                <div class="input-group-item">
                                    <input class="form-control" placeholder="Search" type="text">
                                </div>
                                <div class="input-group-item input-group-item-shrink">
                                    <button class="btn btn-secondary" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="disabled nav-link" href="#1">
                                <span class="navbar-text-truncate">Disabled</span>
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link"
                                data-toggle="dropdown" href="#1" role="button">
                                <span class="navbar-text-truncate">Dropdown</span>
                                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-bottom"></use>
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
            </div>
        </div>
    </nav>
</div>

```html
<nav class="bg-secondary navbar navbar-dark navbar-expand-md">
	<div class="container-fluid container-fluid-max-xl">
		<a class="navbar-brand" href="#1">
			<span class="navbar-text-truncate">Brand</span>
		</a>
		<button
			aria-controls="navbar-collapse-0c"
			aria-expanded="false"
			aria-label="Toggle Navigation"
			class="collapsed navbar-toggler"
			data-target="#navbar-collapse-0c"
			data-toggle="collapse"
			type="button"
		>
			<svg
				class="lexicon-icon lexicon-icon-bars"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#bars"></use>
			</svg>
		</button>
		<div class="collapse navbar-collapse" id="navbar-collapse-0c">
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a
							aria-label="Current"
							class="active nav-link"
							href="#1"
						>
							<span class="navbar-text-truncate">Active</span>
						</a>
					</li>
					<li class="dropdown nav-item">
						<a
							aria-expanded="false"
							aria-haspopup="true"
							class="dropdown-toggle nav-link"
							data-toggle="dropdown"
							href="#1"
							role="button"
						>
							<span class="navbar-text-truncate">Dropdown</span>
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#caret-bottom"
								></use>
							</svg>
						</a>
						<ul
							aria-labelledby="navbarDropdownMenuLink"
							class="dropdown-menu"
						>
							<li>
								<a class="dropdown-item" href="#1">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Another action</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Something else here</a
								>
							</li>
							<li class="dropdown-divider"></li>
							<li>
								<a class="dropdown-item" href="#1"
									>Separated link</a
								>
							</li>
							<li class="dropdown-divider"></li>
							<li>
								<a class="dropdown-item" href="#1"
									>One more separated link</a
								>
							</li>
						</ul>
					</li>
				</ul>
				<div class="navbar-form navbar-form-autofit">
					<form role="search">
						<div class="input-group">
							<div class="input-group-item">
								<input
									class="form-control"
									placeholder="Search"
									type="text"
								/>
							</div>
							<div
								class="input-group-item input-group-item-shrink"
							>
								<button class="btn btn-secondary" type="submit">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="disabled nav-link" href="#1">
							<span class="navbar-text-truncate">Disabled</span>
						</a>
					</li>
					<li class="dropdown nav-item">
						<a
							aria-expanded="false"
							aria-haspopup="true"
							class="dropdown-toggle nav-link"
							data-toggle="dropdown"
							href="#1"
							role="button"
						>
							<span class="navbar-text-truncate">Dropdown</span>
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#caret-bottom"
								></use>
							</svg>
						</a>
						<ul
							aria-labelledby="navbarDropdownMenuLink"
							class="dropdown-menu dropdown-menu-right"
						>
							<li>
								<a class="dropdown-item" href="#1">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Another action</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Something else here</a
								>
							</li>
							<li class="dropdown-divider"></li>
							<li>
								<a class="dropdown-item" href="#1"
									>Separated link</a
								>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
```

### Navbar with Form

The class `.navbar-form` should be wrapped around your form. It adds the proper spacing between your form and other navbar components e.g. `.navbar-nav`.

The class `.navbar-form-autofit` should be added to `.navbar-form` to make the form expand to fill the remaining space.

<div class="sheet-example">
    <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#1">
            <span class="navbar-text-truncate">Brand
                ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
        </a>
        <button aria-controls="navbar-collapse-2a" aria-expanded="false" aria-label="Toggle Navigation"
            class="collapsed navbar-toggler" data-target="#navbar-collapse-2a" data-toggle="collapse" type="button">
            <svg class="lexicon-icon lexicon-icon-bars" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#bars"></use>
            </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse-2a">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="active nav-link" href="#1">
                        <span class="navbar-text-truncate">Link</span>
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#1">
                        <span class="navbar-text-truncate">Link</span>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown"
                        href="#1" role="button">
                        <span
                            class="navbar-text-truncate">DropdownReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu">
                        <li><a class="dropdown-item" href="#1">Action</a></li>
                        <li><a class="dropdown-item" href="#1">Another action</a></li>
                        <li><a class="dropdown-item" href="#1">Something else here</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Separated link</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
            <div class="navbar-form">
                <form>
                    <div class="input-group">
                        <div class="input-group-item input-group-prepend">
                            <input class="form-control" placeholder=" Search..." type="text">
                        </div>
                        <div class="dropdown-wide input-group-item input-group-prepend input-group-item-shrink">
                            <button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary"
                                data-toggle="dropdown" type="button">
                                <svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#angle-down"></use>
                                </svg>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1">Action</a></li>
                                <li><a class="dropdown-item" href="#1">Another action</a></li>
                                <li><a class="dropdown-item" href="#1">Something else here</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#1">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="input-group-append input-group-item input-group-item-shrink">
                            <button class="btn btn-secondary" type="submit">
                                <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#search"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#1">
                        <span class="navbar-text-truncate">Link</span>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown"
                        href="#1" role="button">
                        <span class="navbar-text-truncate">Dropdown</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right" role="menu">
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
<nav class="navbar navbar-expand-md">
	<a class="navbar-brand" href="#1">
		<span class="navbar-text-truncate"
			>Brand
			ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
		>
	</a>
	<button
		aria-controls="navbar-collapse-2a"
		aria-expanded="false"
		aria-label="Toggle Navigation"
		class="collapsed navbar-toggler"
		data-target="#navbar-collapse-2a"
		data-toggle="collapse"
		type="button"
	>
		<svg
			class="lexicon-icon lexicon-icon-bars"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#bars"></use>
		</svg>
	</button>
	<div class="collapse navbar-collapse" id="navbar-collapse-2a">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="active nav-link" href="#1">
					<span class="navbar-text-truncate">Link</span>
					<span class="sr-only">(current)</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">
					<span class="navbar-text-truncate">Link</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate"
						>DropdownReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
					>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul
					aria-labelledby="navbarDropdownMenuLink"
					class="dropdown-menu"
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
					<li class="dropdown-divider"></li>
					<li>
						<a class="dropdown-item" href="#1"
							>One more separated link</a
						>
					</li>
				</ul>
			</li>
		</ul>
		<div class="navbar-form">
			<form>
				<div class="input-group">
					<div class="input-group-item input-group-prepend">
						<input
							class="form-control"
							placeholder=" Search..."
							type="text"
						/>
					</div>
					<div
						class="dropdown-wide input-group-item input-group-prepend input-group-item-shrink"
					>
						<button
							aria-expanded="false"
							aria-haspopup="true"
							class="btn btn-secondary"
							data-toggle="dropdown"
							type="button"
						>
							<svg
								class="lexicon-icon lexicon-icon-angle-down"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#angle-down"
								></use>
							</svg>
						</button>
						<ul class="dropdown-menu dropdown-menu-right">
							<li>
								<a class="dropdown-item" href="#1">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Another action</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Something else here</a
								>
							</li>
							<li class="dropdown-divider"></li>
							<li>
								<a class="dropdown-item" href="#1"
									>Separated link</a
								>
							</li>
						</ul>
					</div>
					<div
						class="input-group-append input-group-item input-group-item-shrink"
					>
						<button class="btn btn-secondary" type="submit">
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
					</div>
				</div>
			</form>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="#1">
					<span class="navbar-text-truncate">Link</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate">Dropdown</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul class="dropdown-menu dropdown-menu-right" role="menu">
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

## Breakpoints

`navbar-breakpoint-d-block` is a helper class to show content at it's expand breakpoint e.g. for `.navbar-expand-md`, `navbar-breakpoint-d-block` will display: `block !important;` at screen widths greater than 767px.

`navbar-breakpoint-down-d-none` is a helper class to hide content at it's expand breakpoint e.g. for `.navbar-expand-md`, `navbar-breakpoint-down-d-none` will display: none; at screen widths less than or equal to 767px.

## Toggler

`navbar-toggler` is the button that opens and closes the navbar in mobile, must be used with the [collapse plugin](https://getbootstrap.com/docs/4.3/components/collapse/). Also, for links, `navbar-toggler-link` styles the `navbar-toggler` like a navbar link.

In mobile screen sizes, style the navbar toggler like a navbar navigation item with `navbar-toggler-link`. Also use this pattern when you want the search bar to be easily accessible in both mobile and desktop.

<div class="sheet-example">
    <nav class="navbar navbar-expand-md navbar-underline">
        <a aria-controls="navbar-collapse-d-001" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navbar-collapse-d-001" role="button">
            <span class="navbar-text-truncate">Message Boards</span>
            <!-- current page name goes here e.g. Message Boards Home -->
            <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#caret-bottom"></use>
            </svg>
        </a>
        <div class="collapse navbar-collapse" id="navbar-collapse-d-001">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="active nav-link" href="#1">
                        <span class="navbar-text-truncate">Message Boards</span>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
                        <span class="navbar-text-truncate">Dropdown</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul aria-labelledby="dropdownMenu" class="dropdown-menu">
                        <li class="dropdown-header">Dropdown Header</li>
                        <li><a class="dropdown-item" href="#1">Actions</a></li>
                        <li><a class="dropdown-item" href="#1">Edit</a></li>
                        <li><a class="dropdown-item" href="#1">View</a></li>
                        <li><a class="dropdown-item" href="#1">Permissions</a></li>
                        <li><a class="disabled dropdown-item" href="#1">Disabled</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Scope</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#1">
                        <span class="navbar-text-truncate">Link</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="disabled nav-link" href="#1">
                        <span class="navbar-text-truncate">Disabled</span>
                    </a>
                </li>
            </ul>
            <div class="navbar-form">
                <form>
                    <div class="input-group">
                        <div class="input-group-item input-group-prepend">
                            <input class="form-control" placeholder=" Search..." type="text">
                        </div>
                        <div class="dropdown-wide input-group-item input-group-prepend input-group-item-shrink">
                            <button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary" data-toggle="dropdown" type="button">
                                <svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#angle-down"></use>
                                </svg>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1">Action</a></li>
                                <li><a class="dropdown-item" href="#1">Another action</a></li>
                                <li><a class="dropdown-item" href="#1">Something else here</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#1">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="input-group-append input-group-item input-group-item-shrink">
                            <button class="btn btn-secondary" type="submit">
                                <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#search"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="navbar navbar-expand-md navbar-underline">
	<a
		aria-controls="navbar-collapse-d-001"
		aria-expanded="false"
		aria-label="Toggle Navigation"
		class="collapsed navbar-toggler navbar-toggler-link"
		data-toggle="collapse"
		href="#navbar-collapse-d-001"
		role="button"
	>
		<span class="navbar-text-truncate">Message Boards</span>
		<!-- current page name goes here e.g. Message Boards Home -->
		<svg
			class="lexicon-icon lexicon-icon-caret-bottom"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#caret-bottom"></use>
		</svg>
	</a>
	<div class="collapse navbar-collapse" id="navbar-collapse-d-001">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="active nav-link" href="#1">
					<span class="navbar-text-truncate">Message Boards</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate">Dropdown</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul aria-labelledby="dropdownMenu" class="dropdown-menu">
					<li class="dropdown-header">Dropdown Header</li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li>
						<a class="disabled dropdown-item" href="#1">Disabled</a>
					</li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
				</ul>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">
					<span class="navbar-text-truncate">Link</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="disabled nav-link" href="#1">
					<span class="navbar-text-truncate">Disabled</span>
				</a>
			</li>
		</ul>
		<div class="navbar-form">
			<form>
				<div class="input-group">
					<div class="input-group-item input-group-prepend">
						<input
							class="form-control"
							placeholder=" Search..."
							type="text"
						/>
					</div>
					<div
						class="dropdown-wide input-group-item input-group-prepend input-group-item-shrink"
					>
						<button
							aria-expanded="false"
							aria-haspopup="true"
							class="btn btn-secondary"
							data-toggle="dropdown"
							type="button"
						>
							<svg
								class="lexicon-icon lexicon-icon-angle-down"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#angle-down"
								></use>
							</svg>
						</button>
						<ul class="dropdown-menu dropdown-menu-right">
							<li>
								<a class="dropdown-item" href="#1">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Another action</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Something else here</a
								>
							</li>
							<li class="dropdown-divider"></li>
							<li>
								<a class="dropdown-item" href="#1"
									>Separated link</a
								>
							</li>
						</ul>
					</div>
					<div
						class="input-group-append input-group-item input-group-item-shrink"
					>
						<button class="btn btn-secondary" type="submit">
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
					</div>
				</div>
			</form>
		</div>
	</div>
</nav>
```

<div class="sheet-example">
    <nav class="bg-light navbar navbar-expand-md navbar-light navbar-underline">
        <a aria-controls="navbar-collapse-001" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navbar-collapse-001" role="button">
            <span class="navbar-text-truncate">Message Boards</span>
            <!-- current page name goes here e.g. Message Boards Home -->
            <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                <use href="/images/icons/icons.svg#caret-bottom"></use>
            </svg>
        </a>
        <div class="collapse navbar-collapse" id="navbar-collapse-001">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="active nav-link" href="#1">
                        <span class="navbar-text-truncate">Message Boards</span>
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
                        <span class="navbar-text-truncate">Dropdown</span>
                        <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#caret-bottom"></use>
                        </svg>
                    </a>
                    <ul aria-labelledby="dropdownMenu" class="dropdown-menu">
                        <li class="dropdown-header">Dropdown Header</li>
                        <li><a class="dropdown-item" href="#1">Actions</a></li>
                        <li><a class="dropdown-item" href="#1">Edit</a></li>
                        <li><a class="dropdown-item" href="#1">View</a></li>
                        <li><a class="dropdown-item" href="#1">Permissions</a></li>
                        <li><a class="disabled dropdown-item" href="#1">Disabled</a></li>
                        <li class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#1">Scope</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#1">
                        <span class="navbar-text-truncate">Link</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="disabled nav-link" href="#1">
                        <span class="navbar-text-truncate">Disabled</span>
                    </a>
                </li>
            </ul>
            <div class="navbar-form">
                <form>
                    <div class="input-group">
                        <div class="input-group-item input-group-prepend">
                            <input class="form-control" placeholder=" Search..." type="text">
                        </div>
                        <div class="dropdown-wide input-group-item input-group-prepend input-group-item-shrink">
                            <button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary" data-toggle="dropdown" type="button">
                                <svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#angle-down"></use>
                                </svg>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1">Action</a></li>
                                <li><a class="dropdown-item" href="#1">Another action</a></li>
                                <li><a class="dropdown-item" href="#1">Something else here</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#1">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="input-group-append input-group-item input-group-item-shrink">
                            <button class="btn btn-secondary" type="submit">
                                <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#search"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</div>

```html
<nav class="bg-light navbar navbar-expand-md navbar-light navbar-underline">
	<a
		aria-controls="navbar-collapse-001"
		aria-expanded="false"
		aria-label="Toggle Navigation"
		class="collapsed navbar-toggler navbar-toggler-link"
		data-toggle="collapse"
		href="#navbar-collapse-001"
		role="button"
	>
		<span class="navbar-text-truncate">Message Boards</span>
		<!-- current page name goes here e.g. Message Boards Home -->
		<svg
			class="lexicon-icon lexicon-icon-caret-bottom"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#caret-bottom"></use>
		</svg>
	</a>
	<div class="collapse navbar-collapse" id="navbar-collapse-001">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="active nav-link" href="#1">
					<span class="navbar-text-truncate">Message Boards</span>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					<span class="navbar-text-truncate">Dropdown</span>
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<ul aria-labelledby="dropdownMenu" class="dropdown-menu">
					<li class="dropdown-header">Dropdown Header</li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li>
						<a class="disabled dropdown-item" href="#1">Disabled</a>
					</li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Scope</a></li>
				</ul>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">
					<span class="navbar-text-truncate">Link</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="disabled nav-link" href="#1">
					<span class="navbar-text-truncate">Disabled</span>
				</a>
			</li>
		</ul>
		<div class="navbar-form">
			<form>
				<div class="input-group">
					<div class="input-group-item input-group-prepend">
						<input
							class="form-control"
							placeholder=" Search..."
							type="text"
						/>
					</div>
					<div
						class="dropdown-wide input-group-item input-group-prepend input-group-item-shrink"
					>
						<button
							aria-expanded="false"
							aria-haspopup="true"
							class="btn btn-secondary"
							data-toggle="dropdown"
							type="button"
						>
							<svg
								class="lexicon-icon lexicon-icon-angle-down"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#angle-down"
								></use>
							</svg>
						</button>
						<ul class="dropdown-menu dropdown-menu-right">
							<li>
								<a class="dropdown-item" href="#1">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Another action</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>Something else here</a
								>
							</li>
							<li class="dropdown-divider"></li>
							<li>
								<a class="dropdown-item" href="#1"
									>Separated link</a
								>
							</li>
						</ul>
					</div>
					<div
						class="input-group-append input-group-item input-group-item-shrink"
					>
						<button class="btn btn-secondary" type="submit">
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
					</div>
				</div>
			</form>
		</div>
	</div>
</nav>
```

## Collapse

`navbar-collapse` is the container for all content that should be collapsed into a collapsible menu in mobile. Add `navbar-collapse-absolute` to `navbar` to turn navbar-collapse from a relative positioned menu into an absolutely positioned collapsible menu.
