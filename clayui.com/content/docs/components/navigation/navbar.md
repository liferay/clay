---
title: "Navigation Bar"
---

### Description

A navigation bar, navbar, is an horizontal bar that provides several access points to different parts of a system.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Navigation/horizontalNav.html">Navigation Bar Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### DEFAULT

> The positive navigation bar is defined for Sites. It displays navigation items in a light background with dark text.

<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
	<div class="container">
		<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#caret-bottom" />
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
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
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
{call ClayNavigationBar.render}
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
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-navigation-bar
	items='[
		{"title": "App Section 1", "url": "#1"},
		{"title": "App Section 2", "url": "#1"},
		{"title": "App Section 3", "url": "#1"},
		{"title": "App Section 4", "url": "#1"},
		{"title": "App Section 5", "url": "#1"},
		{"title": "App Section 6", "url": "#1"},
		{"title": "App Section 7", "url": "#1"}
	]'
	spritemap="/images/icons/icons.svg">
</clay-navigation-bar>
```
```html
<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
	<div class="container">
		<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#caret-bottom" />
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
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
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

### INVERTED

> The negative navigation bar is defined for Admin controls. It displays navigation items in a dark background with light text. It is always placed right below the header.

<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">
	<div class="container">
		<a aria-controls="navigationBarCollapse01" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse01" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#caret-bottom" />
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
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
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
{call ClayNavigationBar.render}
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
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-navigation-bar
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
	spritemap="/images/icons/icons.svg">
</clay-navigation-bar>
```
```html
<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-secondary">
	<div class="container">
		<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
			<span class="navbar-text-truncate">App Section 2</span>
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#caret-bottom" />
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
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
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

### API

<div>
	[APITable "clay-navigation-bar/src/ClayNavigationBar.js"]
</div>
