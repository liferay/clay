---
title: 'Pagination'
description: 'Preset pagination styles helps divide up large blocks of content on your site or app.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/pagination/'
mainTabURL: 'docs/components/pagination-bar.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sizes](#css-sizes)
    -   [Small](#css-small)
    -   [Default](#css-default)
    -   [Large](#css-large)
-   [Using Buttons](#css-using-buttons)

</div>
</div>

Use `pagination-bar`'s preset styles to give your users more control over the content being displayed on the page.

<div class="sheet-example">
    <div class="pagination-bar">
        <div class="dropdown pagination-items-per-page">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                10 entries
                <svg class="lexicon-icon lexicon-icon-caret-double-l" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-double-l"></use>
                </svg>
            </a>
            <ul class="dropdown-menu dropdown-menu-top">
                <li><a class="dropdown-item" href="#1">5</a></li>
                <li><a class="dropdown-item" href="#1">10</a></li>
                <li><a class="dropdown-item" href="#1">20</a></li>
                <li><a class="dropdown-item" href="#1">30</a></li>
                <li><a class="dropdown-item" href="#1">50</a></li>
            </ul>
        </div>
        <div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
        <ul class="pagination">
            <li class="disabled page-item">
                <a class="page-link" href="#1" role="button" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-left"></use>
                    </svg>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="active page-item"><a class="page-link" href="#1" tabindex="-1">1</a></li>
            <li class="page-item"><a class="page-link" href="#1">2</a></li>
            <li class="dropdown page-item">
                <a aria-label="More" title="More" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
                <ul class="dropdown-menu dropdown-menu-top-center">
                    <li>
                        <ul class="inline-scroller">
                            <li><a class="dropdown-item" href="#1">3</a></li>
                            <li><a class="dropdown-item" href="#1">4</a></li>
                            <li><a class="dropdown-item" href="#1">5</a></li>
                            <li><a class="dropdown-item" href="#1">6</a></li>
                            <li><a class="dropdown-item" href="#1">7</a></li>
                            <li><a class="dropdown-item" href="#1">8</a></li>
                            <li><a class="dropdown-item" href="#1">9</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page-item"><a class="page-link" href="#1">16</a></li>
            <li class="page-item">
                <a class="page-link" href="#1" role="button">
                    <svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-right"></use>
                    </svg>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </div>
</div>

```html
<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			10 entries
			<svg
				class="lexicon-icon lexicon-icon-caret-double-l"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-double-l"></use>
			</svg>
		</a>
		<ul class="dropdown-menu dropdown-menu-top">
			<li><a class="dropdown-item" href="#1">5</a></li>
			<li><a class="dropdown-item" href="#1">10</a></li>
			<li><a class="dropdown-item" href="#1">20</a></li>
			<li><a class="dropdown-item" href="#1">30</a></li>
			<li><a class="dropdown-item" href="#1">50</a></li>
		</ul>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<a class="page-link" href="#1" role="button" tabindex="-1">
				<svg
					class="lexicon-icon lexicon-icon-angle-left"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-left"></use>
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item">
			<a class="page-link" href="#1" tabindex="-1">1</a>
		</li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a
				aria-label="More"
				title="More"
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle page-link"
				data-toggle="dropdown"
				href="#1"
				role="button"
				>...</a
			>
			<ul class="dropdown-menu dropdown-menu-top-center">
				<li>
					<ul class="inline-scroller">
						<li><a class="dropdown-item" href="#1">3</a></li>
						<li><a class="dropdown-item" href="#1">4</a></li>
						<li><a class="dropdown-item" href="#1">5</a></li>
						<li><a class="dropdown-item" href="#1">6</a></li>
						<li><a class="dropdown-item" href="#1">7</a></li>
						<li><a class="dropdown-item" href="#1">8</a></li>
						<li><a class="dropdown-item" href="#1">9</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="page-item"><a class="page-link" href="#1">16</a></li>
		<li class="page-item">
			<a class="page-link" href="#1" role="button">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-right"></use>
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

## Sizes(#css-sizes)

More sizing options, add `pagination-sm` or `pagination-lg` to any pagination component to make it smaller or larger. It can be added to the parent container, such as `pagination-bar`, to size all the pagination components that reside within.

### Small(#css-small)

<div class="sheet-example">
    <div class="pagination-bar pagination-sm">
        <div class="dropdown pagination-items-per-page">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                10 entries
                <svg class="lexicon-icon lexicon-icon-caret-double-l" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-double-l"></use>
                </svg>
            </a>
            <ul class="dropdown-menu dropdown-menu-top">
                <li><a class="dropdown-item" href="#1">5</a></li>
                <li><a class="dropdown-item" href="#1">10</a></li>
                <li><a class="dropdown-item" href="#1">20</a></li>
                <li><a class="dropdown-item" href="#1">30</a></li>
                <li><a class="dropdown-item" href="#1">50</a></li>
            </ul>
        </div>
        <div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
        <ul class="pagination">
            <li class="disabled page-item">
                <a class="page-link" href="#1" role="button" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-left"></use>
                    </svg>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="active page-item"><a class="page-link" href="#1" tabindex="-1">1</a></li>
            <li class="page-item"><a class="page-link" href="#1">2</a></li>
            <li class="dropdown page-item">
                <a aria-label="More" title="More" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
                <ul class="dropdown-menu dropdown-menu-top-center">
                    <li>
                        <ul class="inline-scroller">
                            <li><a class="dropdown-item" href="#1">3</a></li>
                            <li><a class="dropdown-item" href="#1">4</a></li>
                            <li><a class="dropdown-item" href="#1">5</a></li>
                            <li><a class="dropdown-item" href="#1">6</a></li>
                            <li><a class="dropdown-item" href="#1">7</a></li>
                            <li><a class="dropdown-item" href="#1">8</a></li>
                            <li><a class="dropdown-item" href="#1">9</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page-item"><a class="page-link" href="#1">16</a></li>
            <li class="page-item">
                <a class="page-link" href="#1" role="button">
                    <svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-right"></use>
                    </svg>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </div>
</div>

```html
<div class="pagination-bar pagination-sm">
	<div class="dropdown pagination-items-per-page">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			10 entries
			<svg
				class="lexicon-icon lexicon-icon-caret-double-l"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-double-l"></use>
			</svg>
		</a>
		<ul class="dropdown-menu dropdown-menu-top">
			<li><a class="dropdown-item" href="#1">5</a></li>
			<li><a class="dropdown-item" href="#1">10</a></li>
			<li><a class="dropdown-item" href="#1">20</a></li>
			<li><a class="dropdown-item" href="#1">30</a></li>
			<li><a class="dropdown-item" href="#1">50</a></li>
		</ul>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<a class="page-link" href="#1" role="button" tabindex="-1">
				<svg
					class="lexicon-icon lexicon-icon-angle-left"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-left"></use>
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item">
			<a class="page-link" href="#1" tabindex="-1">1</a>
		</li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a
				aria-label="More"
				title="More"
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle page-link"
				data-toggle="dropdown"
				href="#1"
				role="button"
				>...</a
			>
			<ul class="dropdown-menu dropdown-menu-top-center">
				<li>
					<ul class="inline-scroller">
						<li><a class="dropdown-item" href="#1">3</a></li>
						<li><a class="dropdown-item" href="#1">4</a></li>
						<li><a class="dropdown-item" href="#1">5</a></li>
						<li><a class="dropdown-item" href="#1">6</a></li>
						<li><a class="dropdown-item" href="#1">7</a></li>
						<li><a class="dropdown-item" href="#1">8</a></li>
						<li><a class="dropdown-item" href="#1">9</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="page-item"><a class="page-link" href="#1">16</a></li>
		<li class="page-item">
			<a class="page-link" href="#1" role="button">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-right"></use>
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

### Default(#css-default)

<div class="sheet-example">
    <div class="pagination-bar">
        <div class="dropdown pagination-items-per-page">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                10 entries
                <svg class="lexicon-icon lexicon-icon-caret-double-l" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-double-l"></use>
                </svg>
            </a>
            <ul class="dropdown-menu dropdown-menu-top">
                <li><a class="dropdown-item" href="#1">5</a></li>
                <li><a class="dropdown-item" href="#1">10</a></li>
                <li><a class="dropdown-item" href="#1">20</a></li>
                <li><a class="dropdown-item" href="#1">30</a></li>
                <li><a class="dropdown-item" href="#1">50</a></li>
            </ul>
        </div>
        <div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
        <ul class="pagination">
            <li class="disabled page-item">
                <a class="page-link" href="#1" role="button" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-left"></use>
                    </svg>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="active page-item"><a class="page-link" href="#1" tabindex="-1">1</a></li>
            <li class="page-item"><a class="page-link" href="#1">2</a></li>
            <li class="dropdown page-item">
                <a aria-label="More" title="More" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
                <ul class="dropdown-menu dropdown-menu-top-center">
                    <li>
                        <ul class="inline-scroller">
                            <li><a class="dropdown-item" href="#1">3</a></li>
                            <li><a class="dropdown-item" href="#1">4</a></li>
                            <li><a class="dropdown-item" href="#1">5</a></li>
                            <li><a class="dropdown-item" href="#1">6</a></li>
                            <li><a class="dropdown-item" href="#1">7</a></li>
                            <li><a class="dropdown-item" href="#1">8</a></li>
                            <li><a class="dropdown-item" href="#1">9</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page-item"><a class="page-link" href="#1">16</a></li>
            <li class="page-item">
                <a class="page-link" href="#1" role="button">
                    <svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-right"></use>
                    </svg>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </div>
</div>

```html
<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			10 entries
			<svg
				class="lexicon-icon lexicon-icon-caret-double-l"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-double-l"></use>
			</svg>
		</a>
		<ul class="dropdown-menu dropdown-menu-top">
			<li><a class="dropdown-item" href="#1">5</a></li>
			<li><a class="dropdown-item" href="#1">10</a></li>
			<li><a class="dropdown-item" href="#1">20</a></li>
			<li><a class="dropdown-item" href="#1">30</a></li>
			<li><a class="dropdown-item" href="#1">50</a></li>
		</ul>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<a class="page-link" href="#1" role="button" tabindex="-1">
				<svg
					class="lexicon-icon lexicon-icon-angle-left"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-left"></use>
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item">
			<a class="page-link" href="#1" tabindex="-1">1</a>
		</li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a
				aria-label="More"
				title="More"
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle page-link"
				data-toggle="dropdown"
				href="#1"
				role="button"
				>...</a
			>
			<ul class="dropdown-menu dropdown-menu-top-center">
				<li>
					<ul class="inline-scroller">
						<li><a class="dropdown-item" href="#1">3</a></li>
						<li><a class="dropdown-item" href="#1">4</a></li>
						<li><a class="dropdown-item" href="#1">5</a></li>
						<li><a class="dropdown-item" href="#1">6</a></li>
						<li><a class="dropdown-item" href="#1">7</a></li>
						<li><a class="dropdown-item" href="#1">8</a></li>
						<li><a class="dropdown-item" href="#1">9</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="page-item"><a class="page-link" href="#1">16</a></li>
		<li class="page-item">
			<a class="page-link" href="#1" role="button">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-right"></use>
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

### Large(#css-large)

<div class="sheet-example">
    <div class="pagination-bar pagination-lg">
        <div class="dropdown pagination-items-per-page">
            <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
                10 entries
                <svg class="lexicon-icon lexicon-icon-caret-double-l" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-double-l"></use>
                </svg>
            </a>
            <ul class="dropdown-menu dropdown-menu-top">
                <li><a class="dropdown-item" href="#1">5</a></li>
                <li><a class="dropdown-item" href="#1">10</a></li>
                <li><a class="dropdown-item" href="#1">20</a></li>
                <li><a class="dropdown-item" href="#1">30</a></li>
                <li><a class="dropdown-item" href="#1">50</a></li>
            </ul>
        </div>
        <div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
        <ul class="pagination">
            <li class="disabled page-item">
                <a class="page-link" href="#1" role="button" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-left"></use>
                    </svg>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="active page-item"><a class="page-link" href="#1" tabindex="-1">1</a></li>
            <li class="page-item"><a class="page-link" href="#1">2</a></li>
            <li class="dropdown page-item">
                <a aria-label="More" title="More" aria-expanded="false" aria-haspopup="true" class="dropdown-toggle page-link" data-toggle="dropdown" href="#1" role="button">...</a>
                <ul class="dropdown-menu dropdown-menu-top-center">
                    <li>
                        <ul class="inline-scroller">
                            <li><a class="dropdown-item" href="#1">3</a></li>
                            <li><a class="dropdown-item" href="#1">4</a></li>
                            <li><a class="dropdown-item" href="#1">5</a></li>
                            <li><a class="dropdown-item" href="#1">6</a></li>
                            <li><a class="dropdown-item" href="#1">7</a></li>
                            <li><a class="dropdown-item" href="#1">8</a></li>
                            <li><a class="dropdown-item" href="#1">9</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page-item"><a class="page-link" href="#1">16</a></li>
            <li class="page-item">
                <a class="page-link" href="#1" role="button">
                    <svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-right"></use>
                    </svg>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </div>
</div>

```html
<div class="pagination-bar pagination-lg">
	<div class="dropdown pagination-items-per-page">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="dropdown-toggle"
			data-toggle="dropdown"
			href="#1"
			role="button"
		>
			10 entries
			<svg
				class="lexicon-icon lexicon-icon-caret-double-l"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-double-l"></use>
			</svg>
		</a>
		<ul class="dropdown-menu dropdown-menu-top">
			<li><a class="dropdown-item" href="#1">5</a></li>
			<li><a class="dropdown-item" href="#1">10</a></li>
			<li><a class="dropdown-item" href="#1">20</a></li>
			<li><a class="dropdown-item" href="#1">30</a></li>
			<li><a class="dropdown-item" href="#1">50</a></li>
		</ul>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<a class="page-link" href="#1" role="button" tabindex="-1">
				<svg
					class="lexicon-icon lexicon-icon-angle-left"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-left"></use>
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</li>
		<li class="active page-item">
			<a class="page-link" href="#1" tabindex="-1">1</a>
		</li>
		<li class="page-item"><a class="page-link" href="#1">2</a></li>
		<li class="dropdown page-item">
			<a
				aria-label="More"
				title="More"
				aria-expanded="false"
				aria-haspopup="true"
				class="dropdown-toggle page-link"
				data-toggle="dropdown"
				href="#1"
				role="button"
				>...</a
			>
			<ul class="dropdown-menu dropdown-menu-top-center">
				<li>
					<ul class="inline-scroller">
						<li><a class="dropdown-item" href="#1">3</a></li>
						<li><a class="dropdown-item" href="#1">4</a></li>
						<li><a class="dropdown-item" href="#1">5</a></li>
						<li><a class="dropdown-item" href="#1">6</a></li>
						<li><a class="dropdown-item" href="#1">7</a></li>
						<li><a class="dropdown-item" href="#1">8</a></li>
						<li><a class="dropdown-item" href="#1">9</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="page-item"><a class="page-link" href="#1">16</a></li>
		<li class="page-item">
			<a class="page-link" href="#1" role="button">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-right"></use>
				</svg>
				<span class="sr-only">Next</span>
			</a>
		</li>
	</ul>
</div>
```

### Using Buttons(#css-using-buttons)

<div class="sheet-example">
    <div class="pagination-bar">
        <div class="dropdown pagination-items-per-page">
            <button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle" data-toggle="dropdown" type="button">
                10 entries
                <svg class="lexicon-icon lexicon-icon-caret-double-l" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-double-l"></use>
                </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-top">
                <li><a class="dropdown-item" href="#1">5</a></li>
                <li><a class="dropdown-item" href="#1">10</a></li>
                <li><a class="dropdown-item" href="#1">20</a></li>
                <li><a class="dropdown-item" href="#1">30</a></li>
                <li><a class="dropdown-item" href="#1">50</a></li>
            </ul>
        </div>
        <div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
        <ul class="pagination">
            <li class="disabled page-item">
                <button class="btn btn-unstyled page-link" disabled="" type="button">
                    <svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-left"></use>
                    </svg>
                    <span class="sr-only">Previous</span>
                </button>
            </li>
            <li class="active page-item">
                <button class="btn btn-unstyled page-link" tabindex="-1" type="button">1</button>
            </li>
            <li class="page-item">
                <button class="btn btn-unstyled page-link" type="button">2</button>
            </li>
            <li class="dropdown page-item">
                <button aria-label="More" title="More" aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle page-link" data-toggle="dropdown" type="button">...</button>
                <ul class="dropdown-menu dropdown-menu-top-center">
                    <li>
                        <ul class="inline-scroller">
                            <li><a class="dropdown-item" href="#1">3</a></li>
                            <li><a class="dropdown-item" href="#1">4</a></li>
                            <li><a class="dropdown-item" href="#1">5</a></li>
                            <li><a class="dropdown-item" href="#1">6</a></li>
                            <li><a class="dropdown-item" href="#1">7</a></li>
                            <li><a class="dropdown-item" href="#1">8</a></li>
                            <li><a class="dropdown-item" href="#1">9</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page-item">
                <button class="btn btn-unstyled page-link" type="button">16</button>
            </li>
            <li class="page-item">
                <button class="btn btn-unstyled page-link" type="button">
                    <svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
                        <use href="/images/icons/icons.svg#angle-right"></use>
                    </svg>
                    <span class="sr-only">Next</span>
                </button>
            </li>
        </ul>
    </div>
</div>

```html
<div class="pagination-bar">
	<div class="dropdown pagination-items-per-page">
		<button
			aria-expanded="false"
			aria-haspopup="true"
			class="btn btn-unstyled dropdown-toggle"
			data-toggle="dropdown"
			type="button"
		>
			10 entries
			<svg
				class="lexicon-icon lexicon-icon-caret-double-l"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-double-l"></use>
			</svg>
		</button>
		<ul class="dropdown-menu dropdown-menu-top">
			<li><a class="dropdown-item" href="#1">5</a></li>
			<li><a class="dropdown-item" href="#1">10</a></li>
			<li><a class="dropdown-item" href="#1">20</a></li>
			<li><a class="dropdown-item" href="#1">30</a></li>
			<li><a class="dropdown-item" href="#1">50</a></li>
		</ul>
	</div>
	<div class="pagination-results">Showing 1 to 20 of 203 entries.</div>
	<ul class="pagination">
		<li class="disabled page-item">
			<button
				class="btn btn-unstyled page-link"
				disabled=""
				type="button"
			>
				<svg
					class="lexicon-icon lexicon-icon-angle-left"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-left"></use>
				</svg>
				<span class="sr-only">Previous</span>
			</button>
		</li>
		<li class="active page-item">
			<button
				class="btn btn-unstyled page-link"
				tabindex="-1"
				type="button"
			>
				1
			</button>
		</li>
		<li class="page-item">
			<button class="btn btn-unstyled page-link" type="button">2</button>
		</li>
		<li class="dropdown page-item">
			<button
				aria-label="More"
				title="More"
				aria-expanded="false"
				aria-haspopup="true"
				class="btn btn-unstyled dropdown-toggle page-link"
				data-toggle="dropdown"
				type="button"
			>
				...
			</button>
			<ul class="dropdown-menu dropdown-menu-top-center">
				<li>
					<ul class="inline-scroller">
						<li><a class="dropdown-item" href="#1">3</a></li>
						<li><a class="dropdown-item" href="#1">4</a></li>
						<li><a class="dropdown-item" href="#1">5</a></li>
						<li><a class="dropdown-item" href="#1">6</a></li>
						<li><a class="dropdown-item" href="#1">7</a></li>
						<li><a class="dropdown-item" href="#1">8</a></li>
						<li><a class="dropdown-item" href="#1">9</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="page-item">
			<button class="btn btn-unstyled page-link" type="button">16</button>
		</li>
		<li class="page-item">
			<button class="btn btn-unstyled page-link" type="button">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#angle-right"></use>
				</svg>
				<span class="sr-only">Next</span>
			</button>
		</li>
	</ul>
</div>
```
