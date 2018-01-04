---
title: Pagination
description: Components
layout: "guide"
weight: 100
---

<article id="pagination">

### Pagination

> Preset pagination styles helps divide up large blocks of content on your site or app.

<ul class="pagination">
	<li class="disabled page-item">
		<a class="page-link" href="#1" role="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
			</svg>
			<span class="sr-only">Previous</span>
		</a>
	</li>
	<li class="active page-item"><a class="page-link" href="#1">1</a></li>
	<li class="page-item"><a class="page-link" href="#1">2</a></li>
	<li class="page-item"><a class="page-link" href="#1">3</a></li>
	<li class="page-item"><a class="page-link" href="#1">4</a></li>
	<li class="page-item"><a class="page-link" href="#1">5</a></li>
	<li class="page-item"><a class="page-link" href="#1">6</a></li>
	<li class="page-item"><a class="page-link" href="#1">7</a></li>
	<li class="page-item"><a class="page-link" href="#1">8</a></li>
	<li class="page-item"><a class="page-link" href="#1">9</a></li>
	<li class="page-item"><a class="page-link" href="#1">10</a></li>
	<li class="dropdown page-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
		<div class="dropdown-menu dropdown-menu-top-center">
			<div class="inline-scroller">
				<a class="dropdown-item" href="#1">11</a>
				<a class="dropdown-item" href="#1">12</a>
				<a class="dropdown-item" href="#1">13</a>
				<a class="dropdown-item" href="#1">14</a>
				<a class="dropdown-item" href="#1">15</a>
			</div>
		</div>
	</li>
	<li class="page-item"><a class="page-link" href="#1">16</a></li>
	<li class="page-item">
		<a class="page-link" href="#1" role="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
			</svg>
			<span class="sr-only">Next</span>
		</a>
	</li>
</ul>

```text/html
<ul class="pagination">
	<li class="disabled page-item">
		<a class="page-link" href="#1" role="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
			</svg>
			<span class="sr-only">Previous</span>
		</a>
	</li>
	<li class="active page-item"><a class="page-link" href="#1">1</a></li>
	<li class="page-item"><a class="page-link" href="#1">2</a></li>
	<li class="page-item"><a class="page-link" href="#1">3</a></li>
	<li class="page-item"><a class="page-link" href="#1">4</a></li>
	<li class="page-item"><a class="page-link" href="#1">5</a></li>
	<li class="page-item"><a class="page-link" href="#1">6</a></li>
	<li class="page-item"><a class="page-link" href="#1">7</a></li>
	<li class="page-item"><a class="page-link" href="#1">8</a></li>
	<li class="page-item"><a class="page-link" href="#1">9</a></li>
	<li class="page-item"><a class="page-link" href="#1">10</a></li>
	<li class="dropdown page-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
		<div class="dropdown-menu dropdown-menu-top-center">
			<div class="inline-scroller">
				<a class="dropdown-item" href="#1">11</a>
				<a class="dropdown-item" href="#1">12</a>
				<a class="dropdown-item" href="#1">13</a>
				<a class="dropdown-item" href="#1">14</a>
				<a class="dropdown-item" href="#1">15</a>
			</div>
		</div>
	</li>
	<li class="page-item"><a class="page-link" href="#1">16</a></li>
	<li class="page-item">
		<a class="page-link" href="#1" role="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
			</svg>
			<span class="sr-only">Next</span>
		</a>
	</li>
</ul>
```

</article>


<article id="pagination-bar">

### Pagination Bar

> Use `pagination-bar`'s preset styles to give your users more control over the content being displayed on the page.

<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
			10 entries
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-double-l">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-double-l" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-top">
			<a class="dropdown-item" href="#1">5</a>
			<a class="dropdown-item" href="#1">10</a>
			<a class="dropdown-item" href="#1">20</a>
			<a class="dropdown-item" href="#1">30</a>
			<a class="dropdown-item" href="#1">50</a>
		</div>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<a class="page-link" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
			<div class="dropdown-menu dropdown-menu-top-center">
				<div class="inline-scroller">
					<a class="dropdown-item" href="#1">3</a>
					<a class="dropdown-item" href="#1">4</a>
					<a class="dropdown-item" href="#1">5</a>
					<a class="dropdown-item" href="#1">6</a>
					<a class="dropdown-item" href="#1">7</a>
					<a class="dropdown-item" href="#1">8</a>
					<a class="dropdown-item" href="#1">9</a>
					<a class="dropdown-item" href="#1">10</a>
					<a class="dropdown-item" href="#1">11</a>
					<a class="dropdown-item" href="#1">12</a>
					<a class="dropdown-item" href="#1">13</a>
					<a class="dropdown-item" href="#1">14</a>
					<a class="dropdown-item" href="#1">15</a>
				</div>
			</div>
		</li>
		<li class="page-item"><a class="page-link" href="#1">16</a></li>
		<li class="page-item">
			<a class="page-link" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>

```text/html
<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
			10 entries
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-double-l">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-double-l" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-top">
			<a class="dropdown-item" href="#1">5</a>
			<a class="dropdown-item" href="#1">10</a>
			<a class="dropdown-item" href="#1">20</a>
			<a class="dropdown-item" href="#1">30</a>
			<a class="dropdown-item" href="#1">50</a>
		</div>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<a class="page-link" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
			<div class="dropdown-menu dropdown-menu-top-center">
				<div class="inline-scroller">
					<a class="dropdown-item" href="#1">3</a>
					<a class="dropdown-item" href="#1">4</a>
					<a class="dropdown-item" href="#1">5</a>
					<a class="dropdown-item" href="#1">6</a>
					<a class="dropdown-item" href="#1">7</a>
					<a class="dropdown-item" href="#1">8</a>
					<a class="dropdown-item" href="#1">9</a>
					<a class="dropdown-item" href="#1">10</a>
					<a class="dropdown-item" href="#1">11</a>
					<a class="dropdown-item" href="#1">12</a>
					<a class="dropdown-item" href="#1">13</a>
					<a class="dropdown-item" href="#1">14</a>
					<a class="dropdown-item" href="#1">15</a>
				</div>
			</div>
		</li>
		<li class="page-item"><a class="page-link" href="#1">16</a></li>
		<li class="page-item">
			<a class="page-link" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

</article>