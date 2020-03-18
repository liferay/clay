---
title: 'C Inner'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Examples](#examples)
    -   [Buttons](#buttons)
    -   [Links](#links)
    -   [Close](#close)
    -   [Badge](#badge)
    -   [Label](#label)
    -   [Breadcrumb](#breadcrumb)
    -   [Card Interactive](#card-interactive)
    -   [Dropdown](#dropdown)

</div>
</div>

A utility to help manage focus styles in an interactive component. Wrap the contents of your component in `<span class="c-inner" tabindex="-1">Text</span>` or `<div class="c-inner" tabindex="-1">Text</div>` to only show focus styles on keyboard interaction and not click.

<div class="clay-site-alert alert alert-warning">
    To disable style output from this utility set <code>$enable-c-inner: false;</code>.
</div>

## Examples

### Buttons

<button class="btn btn-unstyled" type="button">
    <span class="c-inner" tabindex="-1">.btn.btn-unstyled</span>
</button>
<button class="btn btn-primary" type="button">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#share" /></svg></span><span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#plus" /></svg></span>Primary<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#camera" /></svg></span><span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#picture" /></svg></span>
    </span>
</button>
<button class="btn btn-secondary" type="button">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#share" /></svg></span>Secondary<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#picture" /></svg></span>
    </span>
</button>
<a class="btn btn-success" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">Anchor</span>
</a>
<a class="btn btn-warning" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">Anchor</span>
</a>
<a class="btn btn-danger" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">Anchor</span>
</a>
<a class="btn btn-light" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">Anchor</span>
</a>
<a class="btn btn-dark" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">Anchor</span>
</a>
<a class="btn btn-link" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">Anchor</span>
</a>
<button class="btn btn-secondary btn-sm" type="button">
    <span class="c-inner" tabindex="-1">Small</span>
</button>
<button class="btn btn-secondary btn-lg" type="button">
    <span class="c-inner" tabindex="-1">Large</span>
</button>
<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#blogs"></use>
            </svg>
        </span>
    </span>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#plus"></use>
            </svg>
        </span>
    </span>
</button>
<button class="btn btn-monospaced btn-secondary btn-lg" type="button">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#share"></use>
            </svg>
        </span>
    </span>
</button>
<a class="btn btn-monospaced btn-secondary btn-sm" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#es-es"></use>
            </svg>
        </span>
        <span class="btn-section">es-ES</span>
    </span>
</a>
<a class="btn btn-monospaced btn-secondary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#es-es"></use>
            </svg>
        </span>
        <span class="btn-section">es-ES</span>
    </span>
</a>
<a class="btn btn-monospaced btn-secondary btn-lg" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#es-es"></use>
            </svg>
        </span>
        <span class="btn-section">es-ES</span>
    </span>
</a>

```html
<button class="btn btn-primary" type="button">
	<span class="c-inner" tabindex="-1">Primary</span>
</button>
```

### Links

<div><a href="javascript:;"><span class="c-inner" tabindex="-1">Regular Anchor Tag</span></a></div>
<div><a class="link-primary" href="javascript:;"><span class="c-inner" tabindex="-1">.link-primary</span></a></div>
<div><a class="link-secondary" href="javascript:;"><span class="c-inner" tabindex="-1">.link-secondary</span></a></div>
<div><a class="link-primary single-link" href="javascript:;"><span class="c-inner" tabindex="-1">.link-primary.single-link</span></a></div>
<div><a class="link-secondary single-link" href="javascript:;"><span class="c-inner" tabindex="-1">.link-secondary.single-link</span></a></div>
<div><a class="component-link" href="javascript:;"><span class="c-inner" tabindex="-1">.component-link</span></a></div>
<h4 class="component-title"><a href="javascript:;"><span class="c-inner" tabindex="-1">.component-title a</span></a></h4>
<p class="component-subtitle"><a href="javascript:;"><span class="c-inner" tabindex="-1">.component-subtitle a</span></a></p>
<a class="link-outline link-outline-primary" href="javascript:;"><span class="c-inner" tabindex="-1">Primary</span></a>
<a class="link-outline link-outline-secondary" href="javascript:;"><span class="c-inner" tabindex="-1">Secondary</span></a>
<a class="link-outline link-outline-borderless link-outline-primary" href="javascript:;"><span class="c-inner" tabindex="-1">Primary</span></a>
<a class="link-outline link-outline-borderless link-outline-secondary" href="javascript:;"><span class="c-inner" tabindex="-1">Secondary</span></a>
<a class="link-monospaced link-outline link-outline-primary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#add-cell" />
            </svg>
        </span>
    </span>
</a>
<a class="link-monospaced link-outline link-outline-borderless link-outline-primary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#add-cell" />
            </svg>
        </span>
    </span>
</a>
<a class="link-monospaced link-outline link-outline-secondary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#picture" />
            </svg>
        </span>
    </span>
</a>
<a class="link-monospaced link-outline link-outline-borderless link-outline-secondary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="inline-item">
            <svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
                <use xlink:href="/images/icons/icons.svg#picture" />
            </svg>
        </span>
    </span>
</a>

```html
<a href="/">
	<span class="c-inner" tabindex="-1">Regular Anchor Tag</span>
</a>
```

### Close

<button aria-label="Close" class="close" type="button">
    <span class="c-inner" tabindex="-1">
        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#times" />
        </svg>
    </span>
</button>
<button aria-label="Close" class="close" disabled type="button">
    <span class="c-inner" tabindex="-1">
        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#times" />
        </svg>
    </span>
</button>
<button aria-label="Close" class="close" type="button">
    <span class="c-inner" tabindex="-1">
        <span aria-hidden="true">×</span>
    </span>
</button>
<button aria-label="Close" class="close" disabled type="button">
    <span class="c-inner" tabindex="-1">
        <span aria-hidden="true">×</span>
    </span>
</button>
<a aria-label="Close" class="close" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">
        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#times" />
        </svg>
    </span>
</a>
<a aria-label="Close" class="close disabled" href="javascript:;" role="button" tabindex="-1">
    <span class="c-inner" tabindex="-1">
        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#times" />
        </svg>
    </span>
</a>
<a aria-label="Close" class="close" href="javascript:;" role="button">
    <span class="c-inner" tabindex="-1">
        <span aria-hidden="true">×</span>
    </span>
</a>
<a aria-label="Close" class="close disabled" href="javascript:;" role="button" tabindex="-1">
    <span class="c-inner" tabindex="-1">
        <span aria-hidden="true">×</span>
    </span>
</a>

```html
<button aria-label="Close" class="close" type="button">
	<span class="c-inner" tabindex="-1">
		<svg
			class="lexicon-icon lexicon-icon-times"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#times" />
		</svg>
	</span>
</button>
<a aria-label="Close" class="close" href="javascript:;" role="button">
	<span class="c-inner" tabindex="-1">
		<svg
			class="lexicon-icon lexicon-icon-times"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#times" />
		</svg>
	</span>
</a>
```

### Badge

<a class="badge badge-primary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="badge-item badge-item-expand">Primary</span>
    </span>
</a>
<span class="badge badge-danger">
    <span class="badge-item badge-item-before">
        <a href="javascript:;">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#times-circle"></use>
                </svg>
            </span>
        </a>
    </span>
    <span class="badge-item badge-item-before">
        <button class="btn btn-unstyled" type="button">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-picture" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#picture"></use>
                </svg>
            </span>
        </button>
    </span>
    <span class="badge-item badge-item-expand">
        <a href="javascript:;">
            <span class="c-inner" tabindex="-1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</span>
        </a>
    </span>
    <span class="badge-item badge-item-after">
        <svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#camera"></use>
        </svg>
    </span>
    <span class="badge-item badge-item-after">
        <button aria-label="Close" class="close" type="button">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#times"></use>
                </svg>
            </span>
        </button>
    </span>
</span>

```html
<a class="badge badge-primary" href="javascript:;">
	<span class="c-inner" tabindex="-1">
		<span class="badge-item badge-item-expand">Primary</span>
	</span>
</a>
```

### Label

<a class="label label-primary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="label-item label-item-expand">Primary</span>
    </span>
</a>
<a class="label label-lg label-secondary" href="javascript:;">
    <span class="c-inner" tabindex="-1">
        <span class="label-item label-item-expand">Secondary</span>
    </span>
</a>
<span class="label label-dismissible label-secondary">
    <span class="label-item label-item-before">
        <span class="sticker">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
            </span>
        </span>
    </span>
    <span class="label-item label-item-before">
        <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#times-circle"></use>
        </svg>
    </span>
    <span class="label-item label-item-before">
        <button class="btn btn-unstyled" type="button">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#add-cell"></use>
                </svg>
            </span>
        </button>
    </span>
    <span class="label-item label-item-expand">
        <a href="javascript:;">
            <span class="c-inner" tabindex="-1">Normal Label</span>
        </a>
    </span>
    <span class="label-item label-item-after">
        <button aria-label="Close" class="close" type="button">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#times"></use>
                </svg>
            </span>
        </button>
    </span>
</span>
<span class="label label-dismissible label-lg label-success">
    <span class="label-item label-item-before">
        <span class="sticker">
            <span class="sticker-overlay">
                <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
            </span>
        </span>
    </span>
    <span class="label-item label-item-before">
        <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#times-circle"></use>
        </svg>
    </span>
    <span class="label-item label-item-before">
        <svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
            <use xlink:href="/images/icons/icons.svg#add-cell"></use>
        </svg>
    </span>
    <span class="label-item label-item-expand">
        <a href="javascript:;">
            <span class="c-inner" tabindex="-1">Label Lg</span>
        </a>
    </span>
    <span class="label-item label-item-after">
        <button aria-label="Close" class="close" type="button">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#times"></use>
                </svg>
            </span>
        </button>
    </span>
</span>
<span class="label label-dismissible label-secondary" tabindex="0">
    <span class="c-inner" tabindex="-1">
        <span class="label-item label-item-before">
            <span class="sticker">
                <span class="sticker-overlay">
                    <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
                </span>
            </span>
        </span>
        <span class="label-item label-item-before">
            <button class="btn btn-unstyled" type="button" tabindex="-1">
                <span class="c-inner" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
                        <use xlink:href="/images/icons/icons.svg#times-circle"></use>
                    </svg>
                </span>
            </button>
        </span>
        <span class="label-item label-item-before">
            <a href="javascript:;" role="button" tabindex="-1">
                <span class="c-inner" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
                        <use xlink:href="/images/icons/icons.svg#add-cell"></use>
                    </svg>
                </span>
            </a>
        </span>
        <span class="label-item label-item-expand">
            <a href="javascript:;" tabindex="-1">
                <span class="c-inner" tabindex="-1">Label Secondary</span>
            </a>
        </span>
        <span class="label-item label-item-after">
            <button aria-label="Close" class="close" tabindex="-1" type="button">
                <span class="c-inner" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                        <use xlink:href="/images/icons/icons.svg#times"></use>
                    </svg>
                </span>
            </button>
        </span>
    </span>
</span>
<span class="label label-dismissible label-lg label-primary" tabindex="0">
    <span class="c-inner" tabindex="-1">
        <span class="label-item label-item-before">
            <span class="sticker">
                <span class="sticker-overlay">
                    <img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
                </span>
            </span>
        </span>
        <span class="label-item label-item-before">
            <button class="btn btn-unstyled" type="button" tabindex="-1">
                <span class="c-inner" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
                        <use xlink:href="/images/icons/icons.svg#times-circle"></use>
                    </svg>
                </span>
            </button>
        </span>
        <span class="label-item label-item-before">
            <a href="javascript:;" role="button" tabindex="-1">
                <span class="c-inner" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation">
                        <use xlink:href="/images/icons/icons.svg#add-cell"></use>
                    </svg>
                </span>
            </a>
        </span>
        <span class="label-item label-item-expand">
            <a href="javascript:;" tabindex="-1">
                <span class="c-inner" tabindex="-1">Label Primary</span>
            </a>
        </span>
        <span class="label-item label-item-after">
            <button aria-label="Close" class="close" tabindex="-1" type="button">
                <span class="c-inner" tabindex="-1">
                    <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                        <use xlink:href="/images/icons/icons.svg#times"></use>
                    </svg>
                </span>
            </button>
        </span>
    </span>
</span>

```html
<a class="label label-primary" href="javascript:;">
	<span class="c-inner" tabindex="-1">
		<span class="label-item label-item-expand">Primary</span>
	</span>
</a>
```

### Breadcrumb

<ol class="breadcrumb">
    <li class="breadcrumb-item dropdown">
        <a aria-expanded="false" aria-haspopup="true" class="breadcrumb-link dropdown-toggle" data-toggle="dropdown" href="" id="breadcrumb2Dropdown1" role="button">
            <span class="c-inner" tabindex="-1">
                <svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#ellipsis-h"></use>
                </svg>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </span>
        </a>
        <ul aria-labelledby="breadcrumb2Dropdown1" class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="javascript:;">
                    <span class="c-inner" tabindex="-1">Home</span>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="javascript:;">
                    <span class="c-inner" tabindex="-1">Components</span>
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="javascript:;">
                    <span class="c-inner" tabindex="-1">Breadcrumbs and Paginations</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="javascript:;" title="Page">
            <span class="c-inner" tabindex="-1">
                <span class="breadcrumb-text-truncate">Page</span>
            </span>
        </a>
    </li>
    <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="javascript:;" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
            <span class="c-inner" tabindex="-1">
                <span class="breadcrumb-text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
            </span>
        </a>
    </li>
    <li class="active breadcrumb-item">
        <span class="breadcrumb-text-truncate" title="Active">Active</span>
    </li>
</ol>

### Card Interactive

<div class="row">
    <div class="col-md-4">
        <div class="card card-interactive card-type-template template-card" tabindex="0">
            <div class="c-inner" tabindex="-1">
                <div class="aspect-ratio">
                    <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
                        <img src="/content/site-images/portlet.svg" />
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Widget Page</h3>
                    <div class="card-text">Build a page by adding widgets and content.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-interactive card-interactive-primary card-type-template template-card" tabindex="0">
            <div class="c-inner" tabindex="-1">
                <div class="aspect-ratio">
                    <div class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
                        <img src="/content/site-images/portlet.svg" />
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Widget Page</h3>
                    <div class="card-text">Build a page by adding widgets and content.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <a class="card card-interactive card-interactive-secondary" href="javascript:;">
            <span class="c-inner" tabindex="-1">
                <span class="card-body">
                    <label>Textarea</label>
                    <span class="form-control form-control-textarea"></span>
                </span>
            </span>
        </a>
    </div>
</div>

### Dropdown

<div class="clay-site-alert alert alert-warning">
    Bootstrap's Dropdown Plugin focuses <code>dropdown-toggle</code> on show. You will need to manually undo the focus via blur or focus <code>c-inner</code> on show.
</div>

<div class="d-inline-block">
    <div class="dropdown">
        <button aria-expanded="false" aria-haspopup="true" class="link-outline link-outline-primary dropdown-toggle" data-toggle="dropdown" id="dropdownSites1" type="button">
            <span class="c-inner" tabindex="-1">
                Dropdown
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use xlink:href="/images/icons/icons.svg#caret-bottom" />
                </svg>
            </span>
        </button>
        <ul aria-labelledby="dropdownSites1" class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:;"><span class="c-inner" tabindex="-1">Download</span></a></li>
            <li><a class="dropdown-item" href="javascript:;"><span class="c-inner" tabindex="-1">Edit</span></a></li>
            <li><a class="dropdown-item" href="javascript:;"><span class="c-inner" tabindex="-1">Move</span></a></li>
            <li><a class="dropdown-item" href="javascript:;"><span class="c-inner" tabindex="-1">Checkout</span></a></li>
            <li><a class="dropdown-item" href="javascript:;"><span class="c-inner" tabindex="-1">Permissions</span></a></li>
            <li><a class="dropdown-item" href="javascript:;"><span class="c-inner" tabindex="-1">Move to Recycle Bin</span></a></li>
        </ul>
    </div>
</div>

```html
<div class="dropdown">
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="link-outline link-outline-primary dropdown-toggle"
		data-toggle="dropdown"
		id="dropdownSites1"
		type="button"
	>
		<span class="c-inner" tabindex="-1">
			Dropdown
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</button>
	<ul aria-labelledby="dropdownSites1" class="dropdown-menu">
		<li>
			<a class="dropdown-item" href="javascript:;"
				><span class="c-inner" tabindex="-1">Download</span></a
			>
		</li>
		<li>
			<a class="dropdown-item" href="javascript:;"
				><span class="c-inner" tabindex="-1">Edit</span></a
			>
		</li>
		<li>
			<a class="dropdown-item" href="javascript:;"
				><span class="c-inner" tabindex="-1">Move</span></a
			>
		</li>
		<li>
			<a class="dropdown-item" href="javascript:;"
				><span class="c-inner" tabindex="-1">Checkout</span></a
			>
		</li>
		<li>
			<a class="dropdown-item" href="javascript:;"
				><span class="c-inner" tabindex="-1">Permissions</span></a
			>
		</li>
		<li>
			<a class="dropdown-item" href="javascript:;"
				><span class="c-inner" tabindex="-1"
					>Move to Recycle Bin</span
				></a
			>
		</li>
	</ul>
</div>
```
