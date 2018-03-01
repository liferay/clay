---
title: Navigation Bar
description: "A navigation bar, navbar, is an horizontal bar that provides several access points to different parts of a system."
layout: "guide"
pattern: "Navigation/horizontalNav"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-navbar-navigation-bar">

### DEFAULT

> Positive navigation bar is defined for Sites.

<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
	<div class="container">
		<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="collapse navbar-collapse" id="navigationBarCollapse00">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
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

```soy
{call ClayNavbar.render}
	{param items: [
		[
			'title': 'App Section 1',
			'url': '#1'
		],
		[
			'active'; true,
			'title': 'App Section 2',
			'url': '#1'
		],
		[
			'title': 'App Section 3',
			'url': '#1'
		],
		[
			'title': 'App Section 4',
			'url': '#1'
		],
		[
			'title': 'App Section 5',
			'url': '#1'
		],
		[
			'title': 'App Section 6',
			'url': '#1'
		],
		[
			'title': 'App Section 7',
			'url': '#1'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
<clay-navbar
	items='[
		{"title": "App Section 1", "url": "#1"},
		{"title": "App Section 2", "url": "#1"},
		{"title": "App Section 3", "url": "#1"},
		{"title": "App Section 4", "url": "#1"},
		{"title": "App Section 5", "url": "#1"},
		{"title": "App Section 6", "url": "#1"},
		{"title": "App Section 7", "url": "#1"}
	]'
	spritemap="/vendor/lexicon/icons.svg">
</clay-navbar>
```
```text/html
<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
	<div class="container">
		<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="collapse navbar-collapse" id="navigationBarCollapse00">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
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

<article id="clay-navbar-navigation-bar">

### INVERTED

> Negative navigation bar is defined for Admin. It is always placed right below the header.

<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">
	<div class="container">
		<a aria-controls="navigationBarCollapse01" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse01" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="collapse navbar-collapse" id="navigationBarCollapse01">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
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

```soy
{call ClayNavbar.render}
	{param inverted: true /}
	{param items: [
		[
			'title': 'App Section 1',
			'url': '#1'
		],
		[
			'active'; true,
			'title': 'App Section 2',
			'url': '#1'
		],
		[
			'title': 'App Section 3',
			'url': '#1'
		],
		[
			'title': 'App Section 4',
			'url': '#1'
		],
		[
			'title': 'App Section 5',
			'url': '#1'
		],
		[
			'title': 'App Section 6',
			'url': '#1'
		],
		[
			'title': 'App Section 7',
			'url': '#1'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
<clay-navbar
	inverted="true"
	items='[
		{"title": "App Section 1", "url": "#1"},
		{"title": "App Section 2", "url": "#1"},
		{"title": "App Section 3", "url": "#1"},
		{"title": "App Section 4", "url": "#1"},
		{"title": "App Section 5", "url": "#1"},
		{"title": "App Section 6", "url": "#1"},
		{"title": "App Section 7", "url": "#1"}
	]'
	spritemap="/vendor/lexicon/icons.svg">
</clay-navbar>
```
```text/html
<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">
	<div class="container">
		<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="collapse navbar-collapse" id="navigationBarCollapse00">
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
						<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
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
