---
title: 'Toolbar'
description: 'Toolbar used as part of some Clay components like Management Toolbar and Modal'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/toolbars/'
mainTabURL: 'docs/components/toolbar.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Subnav](#css-subnav)
    -   [Subnav Light](#css-subnav-light)
    -   [Subnav Primary](#css-subnav-primary)
    -   [Subnav Primary Disabled](#css-subnav-primary-disabled)
-   [Helper Classes](#css-helper-classes)

</div>
</div>

<div class="sheet-example">
	<nav class="component-tbar tbar">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="tbar-nav">
				<li class="tbar-item">
					<a aria-label="Previous" title="Previous" class="component-action disabled" href="#1" role="button" tabindex="-1">
						<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#angle-left" />
						</svg>
					</a>
				</li>
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="text-truncate-inline">
							<span class="text-truncate">Item 1 of 3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<a aria-label="Next" title="Next" class="component-action" href="#1" role="button">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#angle-right" />
						</svg>
					</a>
				</li>
				<li class="tbar-item">
					<a aria-label="Close" title="Close" class="component-action" href="#1" role="button">
						<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#times" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

```html
<nav class="component-tbar tbar">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item">
				<a
					aria-label="Previous"
					title="Previous"
					class="component-action disabled"
					href="#1"
					role="button"
					tabindex="-1"
				>
					<svg
						class="lexicon-icon lexicon-icon-angle-left"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#angle-left" />
					</svg>
				</a>
			</li>
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="text-truncate-inline">
						<span class="text-truncate"
							>Item 1 of
							3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span
						>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<a
					aria-label="Next"
					title="Next"
					class="component-action"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-angle-right"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#angle-right" />
					</svg>
				</a>
			</li>
			<li class="tbar-item">
				<a
					aria-label="Close"
					title="Close"
					class="component-action"
					href="#1"
					role="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</a>
			</li>
		</ul>
	</div>
</nav>
```

## Subnav(#css-subnav)

Subnavigation to use with main navigations such as [Management Toolbar](/docs/components/management-toolbar.html).

<div class="sheet-example">
	<nav class="tbar subnav-tbar">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="tbar-nav">
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="text-truncate-inline">
							<span class="text-truncate">25,392 results for <strong>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</strong></span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<a class="component-link tbar-link" href="#1" role="button">Clear</a>
				</li>
				<li class="tbar-item">
					<button class="btn btn-unstyled component-link tbar-link" type="button">Clear</button>
				</li>
			</ul>
		</div>
	</nav>
</div>

```html
<nav class="tbar subnav-tbar">
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav">
			<li class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="text-truncate-inline">
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
				<a class="component-link tbar-link" href="#1" role="button"
					>Clear</a
				>
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

### Subnav Light(#css-subnav-light)

Subnavigation used in [Modals](/docs/components/modal.html)

<div class="sheet-example">
	<div class="tbar subnav-tbar subnav-tbar-light">
		<div class="container-fluid container-fluid-max-xl">
			<div class="tbar-nav">
				<div class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="component-text text-truncate-inline">
							<span class="text-truncate">User Information</span>
						</span>
					</div>
				</div>
				<div class="tbar-item">
					<span class="component-text">Step 1 of 2</span>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="tbar subnav-tbar subnav-tbar-light">
	<div class="container-fluid container-fluid-max-xl">
		<div class="tbar-nav">
			<div class="tbar-item tbar-item-expand">
				<div class="tbar-section">
					<span class="component-text text-truncate-inline">
						<span class="text-truncate">User Information</span>
					</span>
				</div>
			</div>
			<div class="tbar-item">
				<span class="component-text">Step 1 of 2</span>
			</div>
		</div>
	</div>
</div>
```

### Subnav Primary(#css-subnav-primary)

Subnavigation used in [Management Toolbar](/docs/components/management-toolbar.html).

<div class="sheet-example">
	<nav class="tbar tbar-inline-md-down subnav-tbar subnav-tbar-primary">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="tbar-nav tbar-nav-wrap">
				<li class="tbar-item">
					<div class="tbar-section">
						<span class="component-text">7 results for "<strong>banner</strong>"</span>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<span class="component-label label label-dismissible tbar-label">
							<span class="label-item label-item-expand">
								<div class="label-section">Category: <strong>Productivity</strong></div>
							</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times"></use>
									</svg>
								</button>
							</span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<span class="component-label label label-dismissible tbar-label">
							<span class="label-item label-item-expand">
								<div class="label-section">Status: <strong>Approved</strong></div>
							</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times"></use>
									</svg>
								</button>
							</span>
						</span>
					</div>
				</li>
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="component-label label label-dismissible tbar-label">
							<span class="label-item label-item-expand">
								<div class="label-section">Type: <strong>png</strong></div>
							</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" disabled type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times"></use>
									</svg>
								</button>
							</span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<a class="component-link disabled tbar-link" href="#1" role="button" tabindex="-1">Apply to Root</a>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<button class="btn btn-unstyled component-link tbar-link" type="button">Clear All</button>
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
					<span class="component-text"
						>7 results for "<strong>banner</strong>"</span
					>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<span
						class="component-label label label-dismissible tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Category: <strong>Productivity</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times"
									></use>
								</svg>
							</button>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<span
						class="component-label label label-dismissible tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Status: <strong>Approved</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times"
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
						class="component-label label label-dismissible tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Type: <strong>png</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								disabled
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times"
									></use>
								</svg>
							</button>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<a
						class="component-link disabled tbar-link"
						href="#1"
						role="button"
						tabindex="-1"
						>Apply to Root</a
					>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<button
						class="btn btn-unstyled component-link tbar-link"
						type="button"
					>
						Clear All
					</button>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

### Subnav Primary Disabled(#css-subnav-primary-disabled)

Disabled sub-navigation used in [Management Toolbar](/docs/components/management-toolbar.html), just add `subnav-tbar-disabled`. The `disabled` attribute must be added to any `button` tag. The class `disabled` and attribute `tabindex="-1"` must be added to any `anchor` tag and clicks disabled via javascript.

<div class="sheet-example">
	<nav class="tbar tbar-inline-md-down subnav-tbar subnav-tbar-disabled subnav-tbar-primary">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="tbar-nav tbar-nav-wrap">
				<li class="tbar-item">
					<div class="tbar-section">
						<span class="component-text">7 results for "<strong>banner</strong>"</span>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<span class="component-label label label-dismissible tbar-label">
							<span class="label-item label-item-expand">
								<div class="label-section">Category: <strong>Productivity</strong></div>
							</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" disabled type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times"></use>
									</svg>
								</button>
							</span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<span class="component-label label label-dismissible tbar-label">
							<span class="label-item label-item-expand">
								<div class="label-section">Status: <strong>Approved</strong></div>
							</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" disabled type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times"></use>
									</svg>
								</button>
							</span>
						</span>
					</div>
				</li>
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="component-label label label-dismissible tbar-label">
							<span class="label-item label-item-expand">
								<div class="label-section">Type: <strong>png</strong></div>
							</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" disabled type="button">
									<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times"></use>
									</svg>
								</button>
							</span>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<a class="component-link disabled tbar-link" href="#1" role="button" tabindex="-1">Apply to Root</a>
					</div>
				</li>
				<li class="tbar-item">
					<div class="tbar-section">
						<button class="btn btn-unstyled component-link tbar-link" disabled type="button">Clear All</button>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</div>

```html
<nav
	class="tbar tbar-inline-md-down subnav-tbar subnav-tbar-disabled subnav-tbar-primary"
>
	<div class="container-fluid container-fluid-max-xl">
		<ul class="tbar-nav tbar-nav-wrap">
			<li class="tbar-item">
				<div class="tbar-section">
					<span class="component-text"
						>7 results for "<strong>banner</strong>"</span
					>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<span
						class="component-label label label-dismissible tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Category: <strong>Productivity</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								disabled
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times"
									></use>
								</svg>
							</button>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<span
						class="component-label label label-dismissible tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Status: <strong>Approved</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								disabled
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times"
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
						class="component-label label label-dismissible tbar-label"
					>
						<span class="label-item label-item-expand">
							<div class="label-section">
								Type: <strong>png</strong>
							</div>
						</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								disabled
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times"
									></use>
								</svg>
							</button>
						</span>
					</span>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<a
						class="component-link disabled tbar-link"
						href="#1"
						role="button"
						tabindex="-1"
						>Apply to Root</a
					>
				</div>
			</li>
			<li class="tbar-item">
				<div class="tbar-section">
					<button
						class="btn btn-unstyled component-link tbar-link"
						disabled
						type="button"
					>
						Clear All
					</button>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

## Helper Classes(#css-helper-classes)

**`tbar-inline-{xs|sm|md|lg|xl}-down`**

A helper class on `tbar` that turns `tbar-nav`, `tbar-item`, `tbar-section`, and `component-title` inline at specific breakpoints.

**`tbar-nav-wrap`**

A helper class on `tbar-nav` that breaks `tbar-nav` content to new line when the container becomes too small.

**`tbar-nav-shrink`**

A helper class on `tbar-nav` that makes it only as wide as its content, use with other `tbar-nav`'s.
