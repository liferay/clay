---
title: Navbar (Management Bar)
description: Components
layout: "guide"
weight: 100
---

<article id="navbar-management-bar">

### Navbar (Management Bar)

<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<a aria-expanded="false" aria-haspopup="true" class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-filter">
						<use xlink:href="/vendor/lexicon/icons.svg#filter" />
					</svg>
				</a>
				<div class="dropdown-menu" role="menu">
					<a class="dropdown-item" href="#1" role="button">Filter Action 1</a>
					<a class="dropdown-item" href="#1" role="button">Filter Action 2</a>
					<a class="dropdown-item" href="#1" role="button">Filter Action 3</a>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow">
						<use xlink:href="/vendor/lexicon/icons.svg#order-arrow" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
			<div class="container">
				<form role="search">
					<div class="input-group input-group-inset">
						<div class="input-group-input">
							<input class="form-control" placeholder="Search for..." type="text">
						</div>
						<span class="input-group-inset-item">
							<button class="btn btn-unstyled clay-site-close-overlay-sm-down navbar-breakpoint-d-none" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</button>
							<button class="btn btn-unstyled navbar-breakpoint-d-block" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
									<use xlink:href="/vendor/lexicon/icons.svg#search" />
								</svg>
							</button>
						</span>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-d-none">
				<a class="nav-link nav-link-monospaced clay-site-open-overlay-sm-down" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
						<use xlink:href="/vendor/lexicon/icons.svg#search" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
						<use xlink:href="/vendor/lexicon/icons.svg#list" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start" role="menu">
					<a class="active dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
								<use xlink:href="/vendor/lexicon/icons.svg#list" />
							</svg>
						</span>
						List View
					</a>
					<a class="dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-table">
								<use xlink:href="/vendor/lexicon/icons.svg#table" />
							</svg>
						</span>
						Table View
					</a>
					<a class="dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cards2">
								<use xlink:href="/vendor/lexicon/icons.svg#cards2" />
							</svg>
						</span>
						Card View
					</a>
				</div>
			</li>
			<li class="nav-item">
				<button class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
						<use xlink:href="/vendor/lexicon/icons.svg#plus" />
					</svg>
				</button>
			</li>
		</ul>
	</div>
</nav>

<nav class="management-bar management-bar-primary navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</li>
			<li class="nav-item">
				<span class="navbar-text">
					3 of 7
					<span class="navbar-breakpoint-down-d-none">items selected</span>
				</span>
			</li>
			<li class="nav-item">
				<button class="btn btn-link nav-btn" type="button">
					Select all
				</button>
			</li>
		</ul>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
			</li>
			<li class="nav-item navbar-breakpoint-down-d-none">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-paste">
						<use xlink:href="/vendor/lexicon/icons.svg#paste" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start" role="menu">
					<a class="active dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
								<use xlink:href="/vendor/lexicon/icons.svg#list" />
							</svg>
						</span>
						List View
					</a>
					<a class="dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-table">
								<use xlink:href="/vendor/lexicon/icons.svg#table" />
							</svg>
						</span>
						Table View
					</a>
					<a class="dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cards2">
								<use xlink:href="/vendor/lexicon/icons.svg#cards2" />
							</svg>
						</span>
						Card View
					</a>
				</div>
			</li>
		</ul>
	</div>
</nav>

```text/html
<nav class="management-bar management-bar-light navbar navbar-expand-md">
	<div class="container">
		<ul class="navbar-nav">
			<li class="nav-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
					<span class="navbar-text-truncate">Filter and Order</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<a aria-expanded="false" aria-haspopup="true" class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-filter">
						<use xlink:href="/vendor/lexicon/icons.svg#filter" />
					</svg>
				</a>
				<div class="dropdown-menu" role="menu">
					<a class="dropdown-item" href="#1" role="button">Filter Action 1</a>
					<a class="dropdown-item" href="#1" role="button">Filter Action 2</a>
					<a class="dropdown-item" href="#1" role="button">Filter Action 3</a>
				</div>
			</li>
			<li class="nav-item">
				<a class="nav-link nav-link-monospaced" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow">
						<use xlink:href="/vendor/lexicon/icons.svg#order-arrow" />
					</svg>
				</a>
			</li>
		</ul>
		<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
			<div class="container">
				<form role="search">
					<div class="input-group input-group-inset">
						<div class="input-group-input">
							<input class="form-control" placeholder="Search for..." type="text">
						</div>
						<span class="input-group-inset-item">
							<button class="btn btn-unstyled clay-site-close-overlay-sm-down navbar-breakpoint-d-none" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/vendor/lexicon/icons.svg#times" />
								</svg>
							</button>
							<button class="btn btn-unstyled navbar-breakpoint-d-block" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
									<use xlink:href="/vendor/lexicon/icons.svg#search" />
								</svg>
							</button>
						</span>
					</div>
				</form>
			</div>
		</div>
		<ul class="navbar-nav">
			<li class="nav-item navbar-breakpoint-d-none">
				<a class="nav-link nav-link-monospaced clay-site-open-overlay-sm-down" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
						<use xlink:href="/vendor/lexicon/icons.svg#search" />
					</svg>
				</a>
			</li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
						<use xlink:href="/vendor/lexicon/icons.svg#list" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start" role="menu">
					<a class="active dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-list">
								<use xlink:href="/vendor/lexicon/icons.svg#list" />
							</svg>
						</span>
						List View
					</a>
					<a class="dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-table">
								<use xlink:href="/vendor/lexicon/icons.svg#table" />
							</svg>
						</span>
						Table View
					</a>
					<a class="dropdown-item" href="#1">
						<span class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cards2">
								<use xlink:href="/vendor/lexicon/icons.svg#cards2" />
							</svg>
						</span>
						Card View
					</a>
				</div>
			</li>
			<li class="nav-item">
				<button class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
						<use xlink:href="/vendor/lexicon/icons.svg#plus" />
					</svg>
				</button>
			</li>
		</ul>
	</div>
</nav>
```

</article>


<script>
{literal}
window.onload = function() {
	$('.clay-site-open-overlay-sm-down').on('click', function(event) {
		$(this).closest('.navbar').find('.navbar-overlay-sm-down').addClass('show');
	});
	$('.clay-site-close-overlay-sm-down').on('click', function(event) {
		$(this).closest('.navbar-overlay-sm-down').removeClass('show');
	});
	$('.clay-site-open-overlay-up').on('click', function(event) {
		$(this).closest('.navbar').find('.navbar-overlay-up').addClass('show');
	});
	$('.clay-site-close-overlay-up').on('click', function(event) {
		$(this).closest('.navbar-overlay-up').removeClass('show');
	});
}
{/literal}
</script>