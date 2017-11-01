---
title: Navbar (Navigation Bar)
description: Components
layout: "guide"
weight: 100
---

<article id="navbar-navigation-bar">

### Navbar (Navigation Bar)

<nav class="navbar navigation-bar navbar-collapse-absolute navbar-light navbar-expand-md navbar-underline">
	<div class="container">
		<button aria-expanded="false" aria-label="Toggle navigation" class="collapsed navbar-toggler navbar-toggler-link" data-target="#navigationBarCollapse00" data-toggle="collapse" type="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div aria-expanded="false" class="collapse navbar-collapse" id="navigationBarCollapse00">
			<div class="container">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
							<span class="navbar-text-truncate">More</span>
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
							</svg>
						</a>
						<div aria-labelledby="" class="dropdown-menu">
							<a class="dropdown-item" href="#1">App Section 4</a>
							<a class="dropdown-item" href="#1">App Section 5</a>
							<a class="dropdown-item" href="#1">App Section 6</a>
							<a class="dropdown-item" href="#1">App Section 7</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<nav class="navbar navigation-bar navbar-collapse-absolute navbar-secondary navbar-expand-md navbar-underline">
	<div class="container">
		<button aria-expanded="false" aria-label="Toggle navigation" class="collapsed navbar-toggler navbar-toggler-link" data-target="#navigationBarCollapse01" data-toggle="collapse" type="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div aria-expanded="false" class="collapse navbar-collapse" id="navigationBarCollapse01">
			<div class="container">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
							<span class="navbar-text-truncate">More</span>
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
							</svg>
						</a>
						<div aria-labelledby="" class="dropdown-menu">
							<a class="dropdown-item" href="#1">App Section 4</a>
							<a class="dropdown-item" href="#1">App Section 5</a>
							<a class="dropdown-item" href="#1">App Section 6</a>
							<a class="dropdown-item" href="#1">App Section 7</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>

```text/html
<nav class="navbar navigation-bar navbar-collapse-absolute navbar-secondary navbar-expand-md navbar-underline">
	<div class="container">
		<button aria-expanded="false" aria-label="Toggle navigation" class="collapsed navbar-toggler navbar-toggler-link" data-target="#navigationBarCollapse01" data-toggle="collapse" type="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div aria-expanded="false" class="collapse navbar-collapse" id="navigationBarCollapse01">
			<div class="container">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
							<span class="navbar-text-truncate">More</span>
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
							</svg>
						</a>
						<div aria-labelledby="" class="dropdown-menu">
							<a class="dropdown-item" href="#1">App Section 4</a>
							<a class="dropdown-item" href="#1">App Section 5</a>
							<a class="dropdown-item" href="#1">App Section 6</a>
							<a class="dropdown-item" href="#1">App Section 7</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
```

</article>