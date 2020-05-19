---
title: "Tables"
description: "A table is a specific pattern for comparing datasets in a very direct and analytical way."
---

<div class="nav-toc-absolute">
<div class="nav-toc">

- [Variants](#variants)
    - [Striped](#striped)
    - [Bordered](#bordered)
    - [Hoverable](#hoverable)
    - [Small](#small)
- [Responsiveness](#responsiveness)
    - [Always Responsive](#always-responsive)
    - [Breakpoints](#breakpoints)
- [Helpers](#helpers)
    - [Autofit](#autofit)
    - [Alignment](#alignment)
        - [Vertical](#vertical)
        - [Horizontal](#horizontal)
    - [Cell Utilities](#cell-utilities)
    - [Heading No Wrap](#heading-no-wrap)
    - [Table No Wrap](#table-no-wrap)
    - [Image](#image)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/table/table/">Tables Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/tables.html">Tables component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/table/table/">Tables Pattern</a>.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#table">WAI-ARIA</a> accessibility pratices for tables when writting your markup.
</div>

<div class="clay-site-alert alert alert-warning">
    <code class="gatsby-code-text">show-quick-actions-on-hover</code> will need Javascript to add class table-focus on the table row when an item inside is focused to make it keyboard accessible.
</div>

A table is styled like a list. The active state can be invoked by adding class `table-active` to the `<tr></tr>` element.

<div class="sheet-example">
    <table class="show-quick-actions-on-hover table table-autofit table-list table-nowrap">
        <thead>
            <tr>
                <th></th>
                <th class="table-head-title">
                    <span class="inline-item inline-item-before">
                        <a href="#1">
                            <svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#drag"></use>
                            </svg>
                        </a>
                    </span><a class="inline-item text-truncate-inline" href="#1">
                        <span class="text-truncate" title="ID">ID</span><span class="inline-item inline-item-after">
                            <svg class="lexicon-icon lexicon-icon-arrow-down" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#arrow-down"></use>
                            </svg>
                        </span>
                    </a>
                </th>
                <th class="table-cell-expand table-head-title">
                    <a class="inline-item text-truncate-inline" href="#1">
                        <span class="text-truncate" title="Title">Title</span>
                    </a>
                </th>
                <th class="table-head-title">
                    <a class="inline-item text-truncate-inline" href="#1">
                        <span class="text-truncate" title="Modified Date">Modified Date</span>
                    </a>
                </th>
                <th class="table-head-title">
                    <a class="inline-item text-truncate-inline" href="#1">
                        <span class="text-truncate" title="Author">Author</span>
                    </a>
                </th>
                <th><span class="inline-item">Type</span></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-divider">
                <td colspan="9">Group 1</td>
            </tr>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td>21146</td>
                <td class="table-cell-expand">
                    <div class="table-list-title">
                        .table-list-title (not a link)
                    </div>
                    <div class="table-list-title">
                        <a href="#1">.table-list-title a</a>
                    </div>
                    <div><a class="table-list-link" href="#1">.table-list-link</a></div>
                    <div><a href="#1">link</a></div>
                    <div>Some regular text</div>
                </td>
                <td>2 Hours Ago</td>
                <td>Stanley Nelson</td>
                <td>Folder</td>
                <td>
                    <div class="quick-action-menu">
                        <a class="component-action quick-action-item" href="#1" role="button">
                            <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#trash"></use>
                            </svg>
                        </a>
                        <a class="component-action quick-action-item" href="#1" role="button">
                            <svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#download"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="dropdown dropdown-action">
                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                            </svg>
                        </a>
                        <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                            <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr class="table-active">
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input checked="" class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td>
                    21148
                </td>
                <td class="table-cell-expand">
                    <div class="table-list-title">
                        <a class="text-truncate-inline" href="#1">
                            <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                        </a>
                    </div>
                </td>
                <td>2 Hours Ago</td>
                <td>Stanley Nelson</td>
                <td>Folder</td>
                <td>
                    <div class="quick-action-menu">
                        <a class="component-action quick-action-item" href="#1" role="button">
                            <svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#trash"></use>
                            </svg>
                        </a>
                        <a class="component-action quick-action-item" href="#1" role="button">
                            <svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#download"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="dropdown dropdown-action">
                        <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                            <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#ellipsis-v"></use>
                            </svg>
                        </a>
                        <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                            <li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Download</a></li>
                            <li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="show-quick-actions-on-hover table table-autofit table-list table-nowrap">
    <thead>
        <tr>
            <th></th>
            <th class="table-head-title">
                <span class="inline-item inline-item-before">
                    <a href="#1">
                        <svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#drag"></use>
                        </svg>
                    </a>
                </span><a class="inline-item text-truncate-inline" href="#1">
                    <span class="text-truncate" title="ID">ID</span><span class="inline-item inline-item-after">
                        <svg class="lexicon-icon lexicon-icon-arrow-down" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#arrow-down"></use>
                        </svg>
                    </span>
                </a>
            </th>
            <th class="table-cell-expand table-head-title">
                <a class="inline-item text-truncate-inline" href="#1">
                    <span class="text-truncate" title="Title">Title</span>
                </a>
            </th>
            <th><span class="inline-item">Status</span></th>
            <th class="table-head-title">
                <a class="inline-item text-truncate-inline" href="#1">
                    <span class="text-truncate" title="Modified Date">Modified Date</span>
                </a>
            </th>
            <th><span class="inline-item">Display Date</span></th>
            <th class="table-head-title">
                <a class="inline-item text-truncate-inline" href="#1">
                    <span class="text-truncate" title="Author">Author</span>
                </a>
            </th>
            <th><span class="inline-item">Type</span></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-divider">
            <td colspan="9">Group 1</td>
        </tr>
        <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td>21146</td>
            <td class="table-cell-expand">
                <div class="table-list-title">
                    .table-list-title (not a link)
                </div>
                <div class="table-list-title">
                    <a href="#1">.table-list-title a</a>
                </div>
                <div><a class="table-list-link" href="#1">.table-list-link</a></div>
                <div><a href="#1">link</a></div>
                <div>Some regular text</div>
            </td>
            <td>2 Hours Ago</td>
            <td>Stanley Nelson</td>
            <td>Folder</td>
            <td>
                <div class="quick-action-menu">
                    <a class="component-action quick-action-item" href="#1" role="button">
                        ...
                    </a>
                    <a class="component-action quick-action-item" href="#1" role="button">
                        ...
                    </a>
                </div>
                <div class="dropdown dropdown-action">
                    ...
                </div>
            </td>
        </tr>
        <tr class="table-active">
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input checked="" class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td>
                21148
            </td>
            <td class="table-cell-expand">
                <div class="table-list-title">
                    <a class="text-truncate-inline" href="#1">
                        <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                    </a>
                </div>
            </td>
            <td>2 Hours Ago</td>
            <td>Stanley Nelson</td>
            <td>Folder</td>
            <td>
                <div class="quick-action-menu">
                    <a class="component-action quick-action-item" href="#1" role="button">
                        ...
                    </a>
                    <a class="component-action quick-action-item" href="#1" role="button">
                        ...
                    </a>
                </div>
                <div class="dropdown dropdown-action">
                    ...
                </div>
            </td>
        </tr>
    </tbody>
</table>
```

## Variants

### Striped

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

<div class="sheet-example">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Country</th>
                <th>Purchasing Power Parity</th>
                <th>Official Exchange Rate</th>
                <th>Real Growth Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Afganistan</a>
                    </div>
                </td>
                <td>$45.3 billion</td>
                <td>$20.65 billion</td>
                <td>3.1%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Brazil</a>
                    </div>
                </td>
                <td>$2.416 trillion</td>
                <td>$2.19 trillion</td>
                <td>2.3%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Congo, Democratic Republic of the</a>
                    </div>
                </td>
                <td>$29.39 billion</td>
                <td>$18.56 billion</td>
                <td>6.2%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Spain</a>
                    </div>
                </td>
                <td>$1.389 trillion</td>
                <td>$1.356 trillion</td>
                <td>-1.3%</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-striped">
    <thead>
        <tr>
            <th>Country</th>
            <th>Purchasing Power Parity</th>
            <th>Official Exchange Rate</th>
            <th>Real Growth Rate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Afganistan</a>
                </div>
            </td>
            <td>$45.3 billion</td>
            <td>$20.65 billion</td>
            <td>3.1%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Brazil</a>
                </div>
            </td>
            <td>$2.416 trillion</td>
            <td>$2.19 trillion</td>
            <td>2.3%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Congo, Democratic Republic of the</a>
                </div>
            </td>
            <td>$29.39 billion</td>
            <td>$18.56 billion</td>
            <td>6.2%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Spain</a>
                </div>
            </td>
            <td>$1.389 trillion</td>
            <td>$1.356 trillion</td>
            <td>-1.3%</td>
        </tr>
    </tbody>
</table>
```

### Bordered

Add `.table-bordered` for borders on all sides of the table and cells.

<div class="sheet-example">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Country</th>
                <th>Purchasing Power Parity</th>
                <th>Official Exchange Rate</th>
                <th>Real Growth Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Afganistan</a>
                    </div>
                </td>
                <td>$45.3 billion</td>
                <td>$20.65 billion</td>
                <td>3.1%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Brazil</a>
                    </div>
                </td>
                <td>$2.416 trillion</td>
                <td>$2.19 trillion</td>
                <td>2.3%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Congo, Democratic Republic of the</a>
                    </div>
                </td>
                <td>$29.39 billion</td>
                <td>$18.56 billion</td>
                <td>6.2%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Spain</a>
                    </div>
                </td>
                <td>$1.389 trillion</td>
                <td>$1.356 trillion</td>
                <td>-1.3%</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Country</th>
            <th>Purchasing Power Parity</th>
            <th>Official Exchange Rate</th>
            <th>Real Growth Rate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Afganistan</a>
                </div>
            </td>
            <td>$45.3 billion</td>
            <td>$20.65 billion</td>
            <td>3.1%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Brazil</a>
                </div>
            </td>
            <td>$2.416 trillion</td>
            <td>$2.19 trillion</td>
            <td>2.3%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Congo, Democratic Republic of the</a>
                </div>
            </td>
            <td>$29.39 billion</td>
            <td>$18.56 billion</td>
            <td>6.2%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Spain</a>
                </div>
            </td>
            <td>$1.389 trillion</td>
            <td>$1.356 trillion</td>
            <td>-1.3%</td>
        </tr>
    </tbody>
</table>
```

### Hoverable

<div class="sheet-example">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Country</th>
                <th>Purchasing Power Parity</th>
                <th>Official Exchange Rate</th>
                <th>Real Growth Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Afganistan</a>
                    </div>
                </td>
                <td>$45.3 billion</td>
                <td>$20.65 billion</td>
                <td>3.1%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Brazil</a>
                    </div>
                </td>
                <td>$2.416 trillion</td>
                <td>$2.19 trillion</td>
                <td>2.3%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Congo, Democratic Republic of the</a>
                    </div>
                </td>
                <td>$29.39 billion</td>
                <td>$18.56 billion</td>
                <td>6.2%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Spain</a>
                    </div>
                </td>
                <td>$1.389 trillion</td>
                <td>$1.356 trillion</td>
                <td>-1.3%</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-hover">
    <thead>
        <tr>
            <th>Country</th>
            <th>Purchasing Power Parity</th>
            <th>Official Exchange Rate</th>
            <th>Real Growth Rate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Afganistan</a>
                </div>
            </td>
            <td>$45.3 billion</td>
            <td>$20.65 billion</td>
            <td>3.1%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Brazil</a>
                </div>
            </td>
            <td>$2.416 trillion</td>
            <td>$2.19 trillion</td>
            <td>2.3%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Congo, Democratic Republic of the</a>
                </div>
            </td>
            <td>$29.39 billion</td>
            <td>$18.56 billion</td>
            <td>6.2%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Spain</a>
                </div>
            </td>
            <td>$1.389 trillion</td>
            <td>$1.356 trillion</td>
            <td>-1.3%</td>
        </tr>
    </tbody>
</table>
```

### Small

Add `.table-sm` to make tables more compact by cutting cell padding in half.

<div class="sheet-example">
    <table class="table table-sm">
        <thead>
            <tr>
                <th>Country</th>
                <th>Purchasing Power Parity</th>
                <th>Official Exchange Rate</th>
                <th>Real Growth Rate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Afganistan</a>
                    </div>
                </td>
                <td>$45.3 billion</td>
                <td>$20.65 billion</td>
                <td>3.1%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Brazil</a>
                    </div>
                </td>
                <td>$2.416 trillion</td>
                <td>$2.19 trillion</td>
                <td>2.3%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Congo, Democratic Republic of the</a>
                    </div>
                </td>
                <td>$29.39 billion</td>
                <td>$18.56 billion</td>
                <td>6.2%</td>
            </tr>
            <tr>
                <td>
                    <div class="table-title">
                        <a href="#1">Spain</a>
                    </div>
                </td>
                <td>$1.389 trillion</td>
                <td>$1.356 trillion</td>
                <td>-1.3%</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-sm">
    <thead>
        <tr>
            <th>Country</th>
            <th>Purchasing Power Parity</th>
            <th>Official Exchange Rate</th>
            <th>Real Growth Rate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Afganistan</a>
                </div>
            </td>
            <td>$45.3 billion</td>
            <td>$20.65 billion</td>
            <td>3.1%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Brazil</a>
                </div>
            </td>
            <td>$2.416 trillion</td>
            <td>$2.19 trillion</td>
            <td>2.3%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Congo, Democratic Republic of the</a>
                </div>
            </td>
            <td>$29.39 billion</td>
            <td>$18.56 billion</td>
            <td>6.2%</td>
        </tr>
        <tr>
            <td>
                <div class="table-title">
                    <a href="#1">Spain</a>
                </div>
            </td>
            <td>$1.389 trillion</td>
            <td>$1.356 trillion</td>
            <td>-1.3%</td>
        </tr>
    </tbody>
</table>
```

## Inline Edit Table

<div class="sheet-example">
    <table class="table table-autofit table-list table-nowrap table-responsive">
        <thead>
            <tr>
                <th>
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title=""></span>
                    </span>
                </th>
                <th class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Title">Title</span>
                    </span>
                </th>
                <th class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Modified Date">Modified Date</span>
                    </span>
                </th>
                <th class="table-column-text-end"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td class="table-cell-expand">
                    <div class="table-list-title">
                        <a class="text-truncate-inline" href="#1">
                            <span class="text-truncate" title="Web Content 342122-322-abcdefg">Web Content 342122-322-abcdefg</span>
                        </a>
                    </div>
                </td>
                <td class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="35 Seconds Ago">35 Seconds Ago</span>
                    </span>
                </td>
                <td class="table-column-text-end">
                    <div class="btn-group btn-group-nowrap">
                        <div class="btn-group-item">
                            <button class="btn btn-secondary btn-sm" type="button">Edit</button>
                        </div>
                        <div class="btn-group-item">
                            <div class="dropdown dropdown-action">
                                <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                                    <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                        <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                    </svg>
                                </a>
                                <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                                    <li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
                                    <li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td class="table-cell-expand">
                    <input class="form-control form-control-sm" type="text" value="Web Content B">
                </td>
                <td class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="20 Minutes Ago">20 Minutes Ago</span>
                    </span>
                </td>
                <td class="table-column-text-end">
                    <div class="btn-group btn-group-nowrap">
                        <div class="btn-group-item">
                            <button class="btn btn-primary btn-sm" type="button">Save</button>
                        </div>
                        <div class="btn-group-item">
                            <button class="btn btn-secondary btn-sm" type="button">Cancel</button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-autofit table-list table-nowrap table-responsive">
    <thead>
        <tr>
            <th>
                <span class="text-truncate-inline">
                    <span class="text-truncate" title=""></span>
                </span>
            </th>
            <th class="table-cell-expand">
                <span class="text-truncate-inline">
                    <span class="text-truncate" title="Title">Title</span>
                </span>
            </th>
            <th class="table-cell-expand">
                <span class="text-truncate-inline">
                    <span class="text-truncate" title="Modified Date">Modified Date</span>
                </span>
            </th>
            <th class="table-column-text-end"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td class="table-cell-expand">
                <div class="table-list-title">
                    <a class="text-truncate-inline" href="#1">
                        <span class="text-truncate" title="Web Content 342122-322-abcdefg">Web Content 342122-322-abcdefg</span>
                    </a>
                </div>
            </td>
            <td class="table-cell-expand">
                <span class="text-truncate-inline">
                    <span class="text-truncate" title="35 Seconds Ago">35 Seconds Ago</span>
                </span>
            </td>
            <td class="table-column-text-end">
                <div class="btn-group btn-group-nowrap">
                    <div class="btn-group-item">
                        <button class="btn btn-secondary btn-sm" type="button">Edit</button>
                    </div>
                    <div class="btn-group-item">
                        <div class="dropdown dropdown-action">
                            <a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
                                <svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
                                    <use href="/images/icons/icons.svg#ellipsis-v"></use>
                                </svg>
                            </a>
                            <ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
                                <li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td class="table-cell-expand">
                <input class="form-control form-control-sm" type="text" value="Web Content B">
            </td>
            <td class="table-cell-expand">
                <span class="text-truncate-inline">
                    <span class="text-truncate" title="20 Minutes Ago">20 Minutes Ago</span>
                </span>
            </td>
            <td class="table-column-text-end">
                <div class="btn-group btn-group-nowrap">
                    <div class="btn-group-item">
                        <button class="btn btn-primary btn-sm" type="button">Save</button>
                    </div>
                    <div class="btn-group-item">
                        <button class="btn btn-secondary btn-sm" type="button">Cancel</button>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
```

## Responsiveness

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl}`.

### Always Responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

<div class="sheet-example">
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

### Breakpoints

Use `.table-responsive{-sm|-md|-lg|-xl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

<div class="table-responsive-sm">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive-md">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive-lg">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive-xl">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="table-responsive-sm">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-md">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-lg">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xl">
  <table class="table">
    ...
  </table>
</div>
```

## Helpers

### Autofit

`table-autofit` constrains table columns to be only as wide as its content, but must be used with `table-cell-expand`. `table-cell-expand` will fill the remaining space.

### Alignment

#### Vertical

We have added some classes to help vertically align contents inside a table. The classes `table-valign-bottom`, `table-valign-middle`, and `table-valign-top` on `<table>` will vertically align table cell contents on the bottom, middle, and top, respectively.

The classes `thead-valign-bottom`, `thead-valign-middle`, and `thead-valign-top` on `<table>` will vertically align the contents inside the table head.

The classes `tbody-valign-bottom`, `tbody-valign-middle`, and `tbody-valign-top` on `<table>` will vertically align the contents inside the table body.

#### Horizontal

We have added some classes to help horizontally align contents inside a table column. The classes `table-column-text-start`, `table-column-text-center`, and `table-column-text-end` will align text left, center, and right respectively.

### Cell Utilities

Use `table-cell-expand-small`, `table-cell-expand-smaller`, `table-cell-expand-smallest` with `table-cell-expand` to size columns smaller relative to the widest column.

We have added `table-cell-minw-50`, `table-cell-minw-75`, `table-cell-minw-100`, `table-cell-minw-150`, `table-cell-minw-200`, `table-cell-minw-250`, `table-cell-minw-300`, `table-cell-minw-350`, `table-cell-minw-400` to set min-width 50px, 75px, 100px, 150px, 200px, 250px, 300px, 350px, 400px on a specific table column, respectively.

The helpers `table-cell-ws-normal` and `table-cell-ws-nowrap` sets `white-space` to normal or nowrap on a specific table column, respectively.

<div class="sheet-example">
    <table class="table table-autofit">
        <thead>
            <tr>
                <th></th>
                <th>ID</th>
                <th class="table-cell-minw-300 table-cell-expand">
                    <a class="inline-item text-truncate-inline" href="#1">
                        <span class="text-truncate" title="Description">Title</span>
                    </a>
                </th>
                <th class="table-cell-expand-small table-cell-ws-nowrap">Modified Date</th>
                <th class="table-cell-expand-smaller">Display Date</th>
                <th class="table-cell-minw-150 table-cell-expand-smallest">Author</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td>21146</td>
                <td class="table-cell-minw-300 table-cell-expand">
                    <div class="table-title">
                        <span class="text-truncate-inline">
                            <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                        </span>
                    </div>
                </td>
                <td class="table-cell-expand-small table-cell-ws-nowrap">2 Hours Ago</td>
                <td class="table-cell-expand-smaller">--</td>
                <td class="table-cell-minw-150 table-cell-expand-smallest">Stanley Nelson</td>
                <td>Folder</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-autofit">
    <thead>
        <tr>
            <th></th>
            <th>ID</th>
            <th class="table-cell-minw-300 table-cell-expand">
                <a class="inline-item text-truncate-inline" href="#1">
                    <span class="text-truncate" title="Description">Title</span>
                </a>
            </th>
            <th class="table-cell-expand-small table-cell-ws-nowrap">Modified Date</th>
            <th class="table-cell-expand-smaller">Display Date</th>
            <th class="table-cell-minw-150 table-cell-expand-smallest">Author</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td>21146</td>
            <td class="table-cell-minw-300 table-cell-expand">
                <div class="table-title">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                    </span>
                </div>
            </td>
            <td class="table-cell-expand-small table-cell-ws-nowrap">2 Hours Ago</td>
            <td class="table-cell-expand-smaller">--</td>
            <td class="table-cell-minw-150 table-cell-expand-smallest">Stanley Nelson</td>
            <td>Folder</td>
        </tr>
    </tbody>
</table>
```

### Heading No Wrap

`table-heading-nowrap` keeps headings on one line.

<div class="sheet-example">
    <table class="table table-autofit table-heading-nowrap">
        <thead>
            <tr>
                <th></th>
                <th>ID</th>
                <th class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Description">Title</span>
                    </span>
                </th>
                <th>Status</th>
                <th>Modified Date</th>
                <th>Display Date</th>
                <th>Author</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td>21146</td>
                <td class="table-cell-expand">
                    <div class="table-title">
                        <span class="text-truncate-inline">
                            <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                        </span>
                    </div>
                </td>
                <td>--</td>
                <td>2 Hours Ago</td>
                <td>--</td>
                <td>Stanley Nelson</td>
                <td>Folder</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-autofit table-heading-nowrap">
    <thead>
        <tr>
            <th></th>
            <th>ID</th>
            <th class="table-cell-expand">
                <span class="text-truncate-inline">
                    <span class="text-truncate" title="Description">Title</span>
                </span>
            </th>
            <th>Status</th>
            <th>Modified Date</th>
            <th>Display Date</th>
            <th>Author</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td>21146</td>
            <td class="table-cell-expand">
                <div class="table-title">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                    </span>
                </div>
            </td>
            <td>--</td>
            <td>2 Hours Ago</td>
            <td>--</td>
            <td>Stanley Nelson</td>
            <td>Folder</td>
        </tr>
    </tbody>
</table>
```

### Table No Wrap

`table-nowrap` keeps everything on one line.

<div class="sheet-example">
    <table class="table table-autofit table-nowrap">
        <thead>
            <tr>
                <th></th>
                <th>ID</th>
                <th class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Description">Title</span>
                    </span>
                </th>
                <th>Status</th>
                <th>Modified Date</th>
                <th>Display Date</th>
                <th>Author</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td>21146</td>
                <td class="table-cell-expand">
                    <div class="table-title">
                        <span class="text-truncate-inline">
                            <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                        </span>
                    </div>
                </td>
                <td>--</td>
                <td>2 Hours Ago</td>
                <td>--</td>
                <td>Stanley Nelson</td>
                <td>Folder</td>
            </tr>
        </tbody>
    </table>
</div>

### Image

`table-img` is a helper that sets the max-height to 100px on an image inside a table. Depending on your use case, you may need to use it with the `autofit-row` pattern.

<div class="sheet-example">
    <table class="table table-autofit table-nowrap">
        <thead>
            <tr>
                <th></th>
                <th>ID</th>
                <th class="table-cell-expand">
                    <span class="text-truncate-inline">
                        <span class="text-truncate" title="Description">Title</span>
                    </span>
                </th>
                <th>Status</th>
                <th>Modified Date</th>
                <th>Display Date</th>
                <th>Author</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="custom-control custom-checkbox">
                        <label>
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-label"></span>
                        </label>
                    </div>
                </td>
                <td>21146</td>
                <td class="table-cell-expand">
                    <div class="autofit-row">
                        <div class="autofit-col">
                            <img alt="thumbnail" class="table-img" src="/images/thumbnail_coffee.jpg">
                        </div>
                        <div class="autofit-col autofit-col-expand">
                            <div class="table-title">
                                <span class="text-truncate-inline">
                                    <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </td>
                <td>--</td>
                <td>2 Hours Ago</td>
                <td>--</td>
                <td>Stanley Nelson</td>
                <td>Folder</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table table-autofit table-nowrap">
    <thead>
        <tr>
            <th></th>
            <th>ID</th>
            <th class="table-cell-expand">
                <span class="text-truncate-inline">
                    <span class="text-truncate" title="Description">Title</span>
                </span>
            </th>
            <th>Status</th>
            <th>Modified Date</th>
            <th>Display Date</th>
            <th>Author</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="custom-control custom-checkbox">
                    <label>
                        <input class="custom-control-input" type="checkbox">
                        <span class="custom-control-label"></span>
                    </label>
                </div>
            </td>
            <td>21146</td>
            <td class="table-cell-expand">
                <div class="autofit-row">
                    <div class="autofit-col">
                        <img alt="thumbnail" class="table-img" src="/images/thumbnail_coffee.jpg">
                    </div>
                    <div class="autofit-col autofit-col-expand">
                        <div class="table-title">
                            <span class="text-truncate-inline">
                                <span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td>--</td>
            <td>2 Hours Ago</td>
            <td>--</td>
            <td>Stanley Nelson</td>
            <td>Folder</td>
        </tr>
    </tbody>
</table>
```
