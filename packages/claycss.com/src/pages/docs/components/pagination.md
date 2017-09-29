---
title: Pagination
description: Components
layout: "guide"
weight: 100
---

<article id="pagination">

### Pagination

> Preset pagination styles helps divide up large blocks of content on your site or app. Use class `ellipsis` or `dropdown` on a pagination list item to separate pagination controls from page numbers.

<ul class="pagination">
	<li class="disabled page-item">
		<a class="page-link" href="#1">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
			</svg>
			<span class="sr-only">Previous</span>
		</a>
	</li>
	<li class="disabled page-item">
		<a class="page-link" href="#1">
			<span aria-hidden="true">&laquo;</span>
			<span class="sr-only">First Page</span>
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
		<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
		<a class="page-link" href="#1">
			<span aria-hidden="true">&raquo;</span>
			<span class="sr-only">Last Page</span>
		</a>
	</li>
	<li class="page-item">
		<a class="page-link" href="#1">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
			</svg>
			<span class="sr-only">Next</span>
		</a>
	</li>
</ul>

```xml
<ul class="pagination">
	<li class="disabled page-item">
		<a class="page-link" href="#1">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
				<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
			</svg>
			<span class="sr-only">Previous</span>
		</a>
	</li>
	<li class="disabled page-item">
		<a class="page-link" href="#1">
			<span aria-hidden="true">&laquo;</span>
			<span class="sr-only">First Page</span>
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
		<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
		<a class="page-link" href="#1">
			<span aria-hidden="true">&raquo;</span>
			<span class="sr-only">Last Page</span>
		</a>
	</li>
	<li class="page-item">
		<a class="page-link" href="#1">
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
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>

```xml
<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
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


<article id="pagination-sizes">

### Pagination Sizes

> More sizing options, add `pagination-sm` or `pagination-lg` to any pagination component to make it smaller or larger. It can be added to the parent container, such as `pagination-bar`, to size all the pagination components that reside within.

##### Small

<div class="pagination-bar pagination-sm">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>

```xml
<div class="pagination-bar pagination-sm">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

##### Default

<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>

```xml
<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

##### Large

<div class="pagination-bar pagination-lg">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>

```xml
<div class="pagination-bar pagination-lg">
	<div class="dropdown pagination-items-per-page">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
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
			<a class="page-link" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item"><a class="page-link" href="#1">1</a></li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a class="dropdown-toggle page-link" data-toggle="dropdown" href="#1">...</a>
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
			<a class="page-link" href="#1">
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