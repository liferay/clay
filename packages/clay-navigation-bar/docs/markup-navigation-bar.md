---
title: 'Navigation Bar'
description: 'A navigation bar, is a horizontal bar that provides several access points to different parts of a system.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/navigation/horizontal-nav/'
mainTabURL: 'docs/components/navigation-bar.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Light](#css-light)
-   [Secondary](#css-secondary)
-   [Using Buttons](#css-using-buttons)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
    You will need to adjust the z-index of <code class="gatsby-code-text">.navbar-collapse</code> in the collapsed state if there are multiple <code class="gatsby-code-text">.navbar-collapse-absolute</code>'s near each other.
</div>

<div class="clay-site-alert alert alert-warning">
    Bootstrap 4 doesn't support Dropdown Menu's with Popper.js positioning inside Navbars. They align them manually via CSS classes. See <a href="/docs/components/drop-down.html#alignment">Dropdown Alignment</a>.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#aria_lh_navigation">WAI-ARIA</a> accessibility pratices for alerts when writting your markup.
</div>

## Light(#css-light)

<div class="sheet-example">
    <nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
        <div class="container-fluid container-fluid-max-xl">
            <a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
                <span class="navbar-text-truncate">App Section 2</span>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <div class="collapse navbar-collapse" id="navigationBarCollapse00" style="z-index: 505;">
                <div class="container-fluid container-fluid-max-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#1">
                                <span class="navbar-text-truncate">App Section 1</span>
                            </a>
                        </li>
                        <li aria-label="Current Page" class="nav-item">
                            <a class="active nav-link" href="#1">
                                <span class="navbar-text-truncate">App Section 2</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#1">
                                <span class="navbar-text-truncate">App Section 3</span>
                            </a>
                        </li>
                        <li class="dropdown nav-item show-dropdown-on-collapse">
                            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
                                <span class="navbar-text-truncate">More</span>
                                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                                </svg>
                            </a>
                            <ul aria-labelledby="" class="dropdown-menu dropdown-menu-width-shrink">
                                <li><a class="dropdown-item" href="#1">App Section 4</a></li>
                                <li><a class="dropdown-item" href="#1">App Section 5</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

```html
<nav
	class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light"
>
	<div class="container-fluid container-fluid-max-xl">
		<a
			aria-controls="navigationBarCollapse00"
			aria-expanded="false"
			aria-label="Toggle Navigation"
			class="collapsed navbar-toggler navbar-toggler-link"
			data-toggle="collapse"
			href="#navigationBarCollapse00"
			role="button"
		>
			<span class="navbar-text-truncate">App Section 2</span>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<div
			class="collapse navbar-collapse"
			id="navigationBarCollapse00"
			style="z-index: 505;"
		>
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#1">
							<span class="navbar-text-truncate"
								>App Section 1</span
							>
						</a>
					</li>
					<li aria-label="Current Page" class="nav-item">
						<a class="active nav-link" href="#1">
							<span class="navbar-text-truncate"
								>App Section 2</span
							>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#1">
							<span class="navbar-text-truncate"
								>App Section 3</span
							>
						</a>
					</li>
					<li class="dropdown nav-item show-dropdown-on-collapse">
						<a
							aria-expanded="false"
							aria-haspopup="true"
							class="dropdown-toggle nav-link"
							data-toggle="dropdown"
							href="#1"
							role="button"
						>
							<span class="navbar-text-truncate">More</span>
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
							aria-labelledby=""
							class="dropdown-menu dropdown-menu-width-shrink"
						>
							<li>
								<a class="dropdown-item" href="#1"
									>App Section 4</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>App Section 5</a
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

## Secondary(#css-secondary)

<div class="sheet-example">
    <nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">
        <div class="container-fluid container-fluid-max-xl">
            <a aria-controls="navigationBarCollapse01" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse01" role="button">
                <span class="navbar-text-truncate">App Section 2</span>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <div class="collapse navbar-collapse" id="navigationBarCollapse01" style="z-index: 504;">
                <div class="container-fluid container-fluid-max-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#1">
                                <span class="navbar-text-truncate">App Section 1</span>
                            </a>
                        </li>
                        <li aria-label="Current Page" class="nav-item">
                            <a class="active nav-link" href="#1">
                                <span class="navbar-text-truncate">App Section 2</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#1">
                                <span class="navbar-text-truncate">App Section 3</span>
                            </a>
                        </li>
                        <li class="dropdown nav-item show-dropdown-on-collapse">
                            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
                                <span class="navbar-text-truncate">More</span>
                                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                                </svg>
                            </a>
                            <ul aria-labelledby="" class="dropdown-menu dropdown-menu-width-shrink">
                                <li><a class="dropdown-item" href="#1">App Section 4</a></li>
                                <li><a class="dropdown-item" href="#1">App Section 5</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

```html
<nav
	class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary"
>
	<div class="container-fluid container-fluid-max-xl">
		<a
			aria-controls="navigationBarCollapse01"
			aria-expanded="false"
			aria-label="Toggle Navigation"
			class="collapsed navbar-toggler navbar-toggler-link"
			data-toggle="collapse"
			href="#navigationBarCollapse01"
			role="button"
		>
			<span class="navbar-text-truncate">App Section 2</span>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<div
			class="collapse navbar-collapse"
			id="navigationBarCollapse01"
			style="z-index: 504;"
		>
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#1">
							<span class="navbar-text-truncate"
								>App Section 1</span
							>
						</a>
					</li>
					<li aria-label="Current Page" class="nav-item">
						<a class="active nav-link" href="#1">
							<span class="navbar-text-truncate"
								>App Section 2</span
							>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#1">
							<span class="navbar-text-truncate"
								>App Section 3</span
							>
						</a>
					</li>
					<li class="dropdown nav-item show-dropdown-on-collapse">
						<a
							aria-expanded="false"
							aria-haspopup="true"
							class="dropdown-toggle nav-link"
							data-toggle="dropdown"
							href="#1"
							role="button"
						>
							<span class="navbar-text-truncate">More</span>
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
							aria-labelledby=""
							class="dropdown-menu dropdown-menu-width-shrink"
						>
							<li>
								<a class="dropdown-item" href="#1"
									>App Section 4</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#1"
									>App Section 5</a
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

## Using Buttons(#css-using-buttons)

<div class="sheet-example">
    <nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
        <div class="container-fluid container-fluid-max-xl">
            <button aria-controls="navigationBarCollapse03" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-target="#navigationBarCollapse03" data-toggle="collapse" type="button">
                <span class="navbar-text-truncate">App Section 2</span>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </button>
            <div class="collapse navbar-collapse" id="navigationBarCollapse03" style="z-index: 503;">
                <div class="container-fluid container-fluid-max-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="btn btn-unstyled nav-link" type="button">
                                <span class="navbar-text-truncate">App Section 1</span>
                            </button>
                        </li>
                        <li aria-label="Current Page" class="nav-item">
                            <button class="active btn btn-unstyled nav-link" type="button">
                                <span class="navbar-text-truncate">App Section 2</span>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-unstyled nav-link" type="button">
                                <span class="navbar-text-truncate">App Section 3</span>
                            </button>
                        </li>
                        <li class="dropdown nav-item show-dropdown-on-collapse">
                            <button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle nav-link" data-toggle="dropdown" type="button">
                                <span class="navbar-text-truncate">More</span>
                                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                                </svg>
                            </button>
                            <ul aria-labelledby="" class="dropdown-menu dropdown-menu-width-shrink">
                                <li>
                                    <button class="dropdown-item" type="button">App Section 4</button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">App Section 5</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>

```html
<nav
	class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light"
>
	<div class="container-fluid container-fluid-max-xl">
		<button
			aria-controls="navigationBarCollapse03"
			aria-expanded="false"
			aria-label="Toggle Navigation"
			class="collapsed navbar-toggler navbar-toggler-link"
			data-target="#navigationBarCollapse03"
			data-toggle="collapse"
			type="button"
		>
			<span class="navbar-text-truncate">App Section 2</span>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</button>
		<div
			class="collapse navbar-collapse"
			id="navigationBarCollapse03"
			style="z-index: 503;"
		>
			<div class="container-fluid container-fluid-max-xl">
				<ul class="navbar-nav">
					<li class="nav-item">
						<button class="btn btn-unstyled nav-link" type="button">
							<span class="navbar-text-truncate"
								>App Section 1</span
							>
						</button>
					</li>
					<li aria-label="Current Page" class="nav-item">
						<button
							class="active btn btn-unstyled nav-link"
							type="button"
						>
							<span class="navbar-text-truncate"
								>App Section 2</span
							>
						</button>
					</li>
					<li class="nav-item">
						<button class="btn btn-unstyled nav-link" type="button">
							<span class="navbar-text-truncate"
								>App Section 3</span
							>
						</button>
					</li>
					<li class="dropdown nav-item show-dropdown-on-collapse">
						<button
							aria-expanded="false"
							aria-haspopup="true"
							class="btn btn-unstyled dropdown-toggle nav-link"
							data-toggle="dropdown"
							type="button"
						>
							<span class="navbar-text-truncate">More</span>
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									href="/images/icons/icons.svg#caret-bottom"
								></use>
							</svg>
						</button>
						<ul
							aria-labelledby=""
							class="dropdown-menu dropdown-menu-width-shrink"
						>
							<li>
								<button class="dropdown-item" type="button">
									App Section 4
								</button>
							</li>
							<li>
								<button class="dropdown-item" type="button">
									App Section 5
								</button>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
```
