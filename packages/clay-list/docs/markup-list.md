---
title: 'List'
description: 'List is a visual representation of a dataset that provides more flexibility for arranging the data than a table and is less visually explicit than a card view.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/list/'
mainTabURL: 'docs/components/list.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#css-example)
-   [Variations](#css-variations)
    -   [Bordered](#css-bordered)
    -   [Default](#css-default)
    -   [Notification](#css-notification)
-   [Group Elements](#css-group-elements)
    -   [Header](#css-header)
    -   [Items](#css-items)
        -   [Colors](#css-colors)
        -   [Active Colors](#css-active-colors)
        -   [Items as Links and Buttons](#css-items-as-links-and-buttons)
        -   [Actions on Hover](#css-actions-on-hover)
            -   [Anchors](#css-anchors)
            -   [Buttons](#css-buttons)
        -   [Active](#css-active)

</div>
</div>

<div class="alert alert-info">Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/list/">List Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

List sections help separate content by a specific category or type.

## Example(#css-example)

Align content inside a `.list-group-item` element with a flexbox with `.list-group-item-flex`.

Use a combination of `.flex-col` and `.flex-col.flex-col-expand` to control the size of each cell.

Add the class `show-dropdown-action-on-active` to display `dropdown-menu`s when active in List Groups.

<div class="alert alert-warning">
	Direct descendants of <code>flex-col</code> become block level elements by default. See <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">https://www.w3.org/TR/css-flexbox-1/#flex-items</a>. If you want to display content using <code>floats</code>, <code>inline</code>, or <code>inline-block</code>, wrap the content with a block level element such as a div.
</div>

<div class="sheet-example">
    <ul class="list-group show-quick-actions-on-hover">
        <li class="list-group-header">
            <h3 class="list-group-header-title">List Section</h3>
        </li>
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox"/>
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <p class="list-group-title text-truncate">
                    <a href="#1">Account Example One</a>
                </p>
                <p class="list-group-text text-truncate">Second Level Text</p>
                <p class="list-group-subtext">Third Level Text</p>
                <div class="list-group-detail">
                    <span class="label label-success">
                        <span class="label-item label-item-expand">Approved</span>
                    </span>
                </div>
            </div>
            <div class="autofit-col">
                <div class="quick-action-menu">
                    <a aria-label="Delete" title="Delete" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#trash" />
                        </svg>
                    </a>
                    <a aria-label="Download" title="Download" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#download" />
                        </svg>
                    </a>
                    <a aria-label="Info" title="Info" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#info-circle-open" />
                        </svg>
                    </a>
                </div>
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Move</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li class="list-group-item list-group-item-flex active">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input checked class="custom-control-input" type="checkbox"/>
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <p class="list-group-title">
                    <a href="#1">Account Example One</a>
                </p>
                <p class="list-group-text">Second Level Text</p>
                <p class="list-group-subtext">Third Level Text</p>
                <div class="list-group-detail">
                    <span class="label label-success">
                        <span class="label-item label-item-expand">Approved</span>
                    </span>
                </div>
            </div>
            <div class="autofit-col">
                <div class="quick-action-menu">
                    <a aria-label="Delete" title="Delete" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#trash" />
                        </svg>
                    </a>
                    <a aria-label="Download" title="Download" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#download" />
                        </svg>
                    </a>
                    <a aria-label="Info" title="Info" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#info-circle-open" />
                        </svg>
                    </a>
                </div>
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Move</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<p class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</p>
			<p class="list-group-text text-truncate">Second Level Text</p>
			<p class="list-group-subtext">Third Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
			</div>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a
					aria-label="Delete"
					title="Delete"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
				<a
					aria-label="Download"
					title="Download"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
				<a
					aria-label="Info"
					title="Info"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
			</div>
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex active">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input
						checked
						class="custom-control-input"
						type="checkbox"
					/>
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<p class="list-group-title">
				<a href="#1">Account Example One</a>
			</p>
			<p class="list-group-text">Second Level Text</p>
			<p class="list-group-subtext">Third Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
			</div>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a
					aria-label="Delete"
					title="Delete"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
				<a
					aria-label="Download"
					title="Download"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
				<a
					aria-label="Info"
					title="Info"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
			</div>
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
</ul>
```

## Variations(#css-variations)

### Bordered(#css-bordered)

Use `.list-group-bordered` on `.list-group` to style `.list-group-item-flex` like a table.

<div class="sheet-example">
    <ul class="list-group list-group-bordered">
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">Text Truncate Example</a>
                        </span>
                    </div>
                    <p class="list-group-subtitle">.list-group-subtitle</p>
                    <p class="list-group-subtitle"><a href="#1">.list-group-subtitle a</a></p>
                    <p class="list-group-text">This is an example of .list-group-text and a <a href="#1">link</a>.</p>
                    <p class="list-group-text">
                        <a class="list-group-text-link" href="#1">a.list-group-text-link</a>
                    </p>
                    <p class="list-group-text">
                        <span class="text-truncate-inline">
                            <a class="list-group-text-link text-truncate" href="#1">Truncated a.list-group-text-link</a> and another <a href="#1">link</a>
                        </span>
                    </p>
                    <p class="list-group-subtext">This is .list-group-subtext and a <a href="#1">link</a>.</p>
                    <p class="list-group-subtext">
                        <a class="list-group-subtext-link" href="#1">Regular a.list-group-subtext-link</a>
                    </p>
                    <p class="list-group-subtext">
                        <span class="text-truncate-inline">
                            <a class="list-group-subtext-link text-truncate" href="#1">Truncated a.list-group-subtext-link</a> and another <a href="#1">link</a>
                        </span>
                    </p>
                    <div class="list-group-detail">
                        <span class="label label-warning">
                            <span class="label-item label-item-expand">Pending</span>
                        </span>
                    </div>
                </section>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <a href="#1">Account Example Two</a>
                    </div>
                    <p class="list-group-subtext">List Group Subtext</p>
                    <div class="list-group-detail">
                        <span class="label label-info">
                            <span class="label-item label-item-expand">Info</span>
                        </span>
                    </div>
                </section>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group list-group-bordered">
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>Text Truncate Example</a
						>
					</span>
				</div>
				<p class="list-group-subtitle">.list-group-subtitle</p>
				<p class="list-group-subtitle">
					<a href="#1">.list-group-subtitle a</a>
				</p>
				<p class="list-group-text">
					This is an example of .list-group-text and a
					<a href="#1">link</a>.
				</p>
				<p class="list-group-text">
					<a class="list-group-text-link" href="#1"
						>a.list-group-text-link</a
					>
				</p>
				<p class="list-group-text">
					<span class="text-truncate-inline">
						<a class="list-group-text-link text-truncate" href="#1"
							>Truncated a.list-group-text-link</a
						>
						and another <a href="#1">link</a>
					</span>
				</p>
				<p class="list-group-subtext">
					This is .list-group-subtext and a <a href="#1">link</a>.
				</p>
				<p class="list-group-subtext">
					<a class="list-group-subtext-link" href="#1"
						>Regular a.list-group-subtext-link</a
					>
				</p>
				<p class="list-group-subtext">
					<span class="text-truncate-inline">
						<a
							class="list-group-subtext-link text-truncate"
							href="#1"
							>Truncated a.list-group-subtext-link</a
						>
						and another <a href="#1">link</a>
					</span>
				</p>
				<div class="list-group-detail">
					<span class="label label-warning">
						<span class="label-item label-item-expand"
							>Pending</span
						>
					</span>
				</div>
			</section>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<a href="#1">Account Example Two</a>
				</div>
				<p class="list-group-subtext">List Group Subtext</p>
				<div class="list-group-detail">
					<span class="label label-info">
						<span class="label-item label-item-expand">Info</span>
					</span>
				</div>
			</section>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
</ul>
```

### Default(#css-default)

<div class="sheet-example">
    <ul class="list-group">
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox"/>
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <p class="list-group-title text-truncate">
                    <a href="#1">Account Example One</a>
                </p>
                <p class="list-group-subtitle text-truncate">Second Level Text</p>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Move</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-indicator"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">...</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<p class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</p>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
</ul>
```

### Notification(#css-notification)

<div class="sheet-example">
    <ul class="list-group list-group-notification">
        <li class="list-group-item list-group-item-flex list-group-item-primary">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <a href="#1">Account Example One</a>
                    </div>
                    <p class="list-group-text">Second Level Text</p>
                </section>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <a href="#1">Account Example Two</a>
                    </div>
                    <p class="list-group-text">Second Level Text</p>
                </section>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group list-group-notification">
	<li class="list-group-item list-group-item-flex list-group-item-primary">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">...</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<a href="#1">Account Example One</a>
				</div>
				<p class="list-group-text">Second Level Text</p>
			</section>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<a href="#1">Account Example Two</a>
				</div>
				<p class="list-group-text">Second Level Text</p>
			</section>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
</ul>
```

## Group Elements(#css-group-elements)

### Header(#css-header)

Use the `.list-group-header` and `.list-group-header-title` class.

<div class="sheet-example">
    <ul class="list-group">
        <li class="list-group-header">
            <h3 class="list-group-header-title">List Group Header</h3>
        </li>
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
                        </span>
                    </div>
                    <p class="list-group-text">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Second Level Text</span>
                        </span>
                    </p>
                    <div class="list-group-detail">
                        <span class="label label-success">
                            <span class="label-item label-item-expand">Approved</span>
                        </span>
                    </div>
                </section>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Group Header</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a
						>
					</span>
				</div>
				<p class="list-group-text">
					<span class="text-truncate-inline">
						<span class="text-truncate">Second Level Text</span>
					</span>
				</p>
				<div class="list-group-detail">
					<span class="label label-success">
						<span class="label-item label-item-expand"
							>Approved</span
						>
					</span>
				</div>
			</section>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
</ul>
```

### Items(#css-items)

#### Colors(#css-colors)

<div class="sheet-example">
    <ul class="list-group">
        <li class="list-group-item">List Item Normal</li>
        <li class="list-group-item list-group-item-success">List Item Success</li>
        <li class="list-group-item list-group-item-info">List Item Info</li>
        <li class="list-group-item list-group-item-warning">List Item Warning</li>
        <li class="list-group-item list-group-item-danger">List Item Danger</li>
        <li class="list-group-item list-group-item-light">List Item Light</li>
        <li class="list-group-item list-group-item-dark">List Item Dark</li>
    </ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item">List Item Normal</li>
	<li class="list-group-item list-group-item-success">List Item Success</li>
	<li class="list-group-item list-group-item-info">List Item Info</li>
	<li class="list-group-item list-group-item-warning">List Item Warning</li>
	<li class="list-group-item list-group-item-danger">List Item Danger</li>
	<li class="list-group-item list-group-item-light">List Item Light</li>
	<li class="list-group-item list-group-item-dark">List Item Dark</li>
</ul>
```

#### Active Colors(#css-active-colors)

<div class="sheet-example">
    <div class="list-group">
        <a class="active list-group-item list-group-item-action" href="#1">List Item Action Normal Active</a>
        <a class="active list-group-item list-group-item-action list-group-item-success" href="#1">List Item Action Success Active</a>
        <a class="active list-group-item list-group-item-action list-group-item-info" href="#1">List Item Action Info Active</a>
        <a class="active list-group-item list-group-item-action list-group-item-warning" href="#1">List Item Action Warning Active</a>
        <a class="active list-group-item list-group-item-action list-group-item-danger" href="#1">List Item Action Danger Active</a>
        <a class="active list-group-item list-group-item-action list-group-item-light" href="#1">List Item Action Light Active</a>
        <a class="active list-group-item list-group-item-action list-group-item-dark" href="#1">List Item Action Dark Active</a>
    </div>
</div>

```html
<div class="list-group">
	<a class="active list-group-item list-group-item-action" href="#1"
		>List Item Action Normal Active</a
	>
	<a
		class="active list-group-item list-group-item-action list-group-item-success"
		href="#1"
		>List Item Action Success Active</a
	>
	<a
		class="active list-group-item list-group-item-action list-group-item-info"
		href="#1"
		>List Item Action Info Active</a
	>
	<a
		class="active list-group-item list-group-item-action list-group-item-warning"
		href="#1"
		>List Item Action Warning Active</a
	>
	<a
		class="active list-group-item list-group-item-action list-group-item-danger"
		href="#1"
		>List Item Action Danger Active</a
	>
	<a
		class="active list-group-item list-group-item-action list-group-item-light"
		href="#1"
		>List Item Action Light Active</a
	>
	<a
		class="active list-group-item list-group-item-action list-group-item-dark"
		href="#1"
		>List Item Action Dark Active</a
	>
</div>
```

#### Items as Links and Buttons(#css-items-as-links-and-buttons)

<div class="sheet-example">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="#1">List Item 1</a>
        <a class="list-group-item list-group-item-action" href="#1">List Item 2</a>
        <button class="list-group-item list-group-item-action" type="button">List Item 3</button>
        <a class="list-group-item list-group-item-action" href="#1">List Item 4</a>
    </div>
</div>

```html
<div class="list-group">
	<a class="list-group-item list-group-item-action" href="#1">List Item 1</a>
	<a class="list-group-item list-group-item-action" href="#1">List Item 2</a>
	<button class="list-group-item list-group-item-action" type="button">
		List Item 3
	</button>
	<a class="list-group-item list-group-item-action" href="#1">List Item 4</a>
</div>
```

#### Actions on Hover(#css-actions-on-hover)

##### Anchors(#css-anchors)

<div class="sheet-example">
    <ul class="list-group show-quick-actions-on-hover">
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#folder"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <a href="#1">Anchors</a>
                    </div>
                </section>
            </div>
            <div class="autofit-col">
                <div class="quick-action-menu">
                    <a aria-label="Delete" title="Delete" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#trash"></use>
                        </svg>
                    </a>
                    <a aria-label="Download" title="Download" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#download"></use>
                        </svg>
                    </a>
                    <a aria-label="Expand" title="Expand" class="component-action quick-action-item" href="#1" role="button">
                        <svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#expand"></use>
                        </svg>
                    </a>
                </div>
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#ellipsis-v"></use>
                        </svg>
                    </a>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                        <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<a href="#1">Anchors</a>
				</div>
			</section>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a
					aria-label="Delete"
					title="Delete"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
				<a
					aria-label="Download"
					title="Download"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
				<a
					aria-label="Expand"
					title="Expand"
					class="component-action quick-action-item"
					href="#1"
					role="button"
				>
					...
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a
					aria-label="More Actions"
					title="More Actions"
					aria-expanded="false"
					aria-haspopup="true"
					class="component-action dropdown-toggle"
					data-toggle="dropdown"
					href="#1"
					id="dropdownAction1"
					role="button"
				>
					...
				</a>
				<ul
					aria-labelledby=""
					class="dropdown-menu dropdown-menu-right"
				>
					<li>
						<a class="dropdown-item" href="#1" role="button"
							>Remove</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1" role="button"
							>Download</a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1" role="button"
							>Checkout</a
						>
					</li>
				</ul>
			</div>
		</div>
	</li>
</ul>
```

##### Buttons(#css-buttons)

<div class="sheet-example">
    <ul class="list-group show-quick-actions-on-hover">
        <li class="list-group-item list-group-item-flex">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#folder"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <section class="autofit-section">
                    <div class="list-group-title">
                        <span class="text-truncate-inline">
                            <a class="text-truncate" href="#1">Account Example One</a>
                        </span>
                    </div>
                    <p class="list-group-text">
                        <span class="text-truncate-inline">
                            <span class="text-truncate">Second Level Text</span>
                        </span>
                    </p>
                </section>
            </div>
            <div class="autofit-col">
                <div class="quick-action-menu">
                    <button aria-label="Delete" title="Delete" class="component-action quick-action-item" type="button">
                        <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#trash"></use>
                        </svg>
                    </button>
                    <button aria-label="Download" title="Download" class="component-action quick-action-item" type="button">
                        <svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#download"></use>
                        </svg>
                    </button>
                    <button aria-label="Expand" title="Expand" class="component-action quick-action-item" type="button">
                        <svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#expand"></use>
                        </svg>
                    </button>
                </div>
                <div class="dropdown dropdown-action">
                    <button aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" id="dropdownAction1" type="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use xlink:href="/images/icons/icons.svg#ellipsis-v"></use>
                        </svg>
                    </button>
                    <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <li>
                            <button class="dropdown-item" type="button">Remove</button>
                        </li>
                        <li>
                            <button class="dropdown-item" type="button">Download</button>
                        </li>
                        <li>
                            <button class="dropdown-item" type="button">Checkout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox" />
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<section class="autofit-section">
				<div class="list-group-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>Account Example One</a
						>
					</span>
				</div>
				<p class="list-group-text">
					<span class="text-truncate-inline">
						<span class="text-truncate">Second Level Text</span>
					</span>
				</p>
			</section>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<button
					aria-label="Delete"
					title="Delete"
					class="component-action quick-action-item"
					type="button"
				>
					...
				</button>
				<button
					aria-label="Download"
					title="Download"
					class="component-action quick-action-item"
					type="button"
				>
					...
				</button>
				<button
					aria-label="Expand"
					title="Expand"
					class="component-action quick-action-item"
					type="button"
				>
					...
				</button>
			</div>
			<div class="dropdown dropdown-action">
				<button
					aria-label="More Actions"
					title="More Actions"
					aria-expanded="false"
					aria-haspopup="true"
					class="component-action dropdown-toggle"
					data-toggle="dropdown"
					id="dropdownAction1"
					type="button"
				>
					...
				</button>
				<ul
					aria-labelledby=""
					class="dropdown-menu dropdown-menu-right"
				>
					<li>
						<button class="dropdown-item" type="button">
							Remove
						</button>
					</li>
					<li>
						<button class="dropdown-item" type="button">
							Download
						</button>
					</li>
					<li>
						<button class="dropdown-item" type="button">
							Checkout
						</button>
					</li>
				</ul>
			</div>
		</div>
	</li>
</ul>
```

#### Active(#css-active)

Use the `.active` class on the same element that you putted `.list-group-item`.

<div class="sheet-example">
    <ul class="list-group">
        <li class="list-group-item list-group-item-flex active">
            <div class="autofit-col">
                <div class="custom-control custom-checkbox">
                    <label>
                        <input checked class="custom-control-input" type="checkbox"/>
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </div>
            <div class="autofit-col">
                <div class="sticker sticker-secondary">
                    <span class="inline-item">
                        <svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#folder" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="autofit-col autofit-col-expand">
                <p class="list-group-title text-truncate">
                    <a href="#1">Account Example One</a>
                </p>
                <p class="list-group-text text-truncate">Second Level Text</p>
            </div>
            <div class="autofit-col">
                <div class="dropdown dropdown-action">
                    <a aria-label="More Actions" title="More Actions" aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                        <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#ellipsis-v" />
                        </svg>
                    </a>
                    <div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Move</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

```html
<ul class="list-group">
	<li class="list-group-item list-group-item-flex active">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input
						checked
						class="custom-control-input"
						type="checkbox"
					/>
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item"> ... </span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<p class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</p>
			<p class="list-group-text text-truncate">Second Level Text</p>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">...</div>
		</div>
	</li>
</ul>
```
