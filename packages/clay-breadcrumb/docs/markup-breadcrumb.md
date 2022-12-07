---
title: 'Breadcrumb'
description: 'Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/navigation/breadcrumb/'
mainTabURL: 'docs/components/breadcrumb.html'
---

A navigation aid for your site, provide a quick way to jump back to previously viewed pages or sections.

Use `<span class="breadcrumb-text-truncate"></span>` inside breadcrumb links to truncate text based on a max-width.

<div class="clay-site-alert alert alert-warning">
    Breadcrumb will use <code class="gatsby-code-text">$breadcrumb-divider-svg-icon</code> by default, set $breadcrumb-divider-svg-icon: none; if you wish to use the UTF-8 charset or third-party icon font.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">WAI-ARIA</a> accessibility pratices for alerts when writting your markup.
</div>

<div class="sheet-example">
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="Home">
                <span class="breadcrumb-text-truncate">Home</span>
            </a>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="Components">
                <span class="breadcrumb-text-truncate">Components</span>
            </a>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="Breadcrumbs and Paginations">
                <span class="breadcrumb-text-truncate">Breadcrumbs and Paginations</span>
            </a>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="Page">
                <span class="breadcrumb-text-truncate">Page</span>
            </a>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                <span class="breadcrumb-text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
            </a>
        </li>
        <li class="active breadcrumb-item">
            <span class="breadcrumb-text-truncate" title="Active">Active</span>
        </li>
    </ol>
</div>

```html
<ol class="breadcrumb">
	<li class="breadcrumb-item">
		<a class="breadcrumb-link" href="#1" title="Home">
			<span class="breadcrumb-text-truncate">Home</span>
		</a>
	</li>
	<li class="breadcrumb-item">
		<a class="breadcrumb-link" href="#1" title="Components">
			<span class="breadcrumb-text-truncate">Components</span>
		</a>
	</li>
	<li class="breadcrumb-item">
		<a
			class="breadcrumb-link"
			href="#1"
			title="Breadcrumbs and Paginations"
		>
			<span class="breadcrumb-text-truncate"
				>Breadcrumbs and Paginations</span
			>
		</a>
	</li>
	<li class="breadcrumb-item">
		<a class="breadcrumb-link" href="#1" title="Page">
			<span class="breadcrumb-text-truncate">Page</span>
		</a>
	</li>
	<li class="breadcrumb-item">
		<a
			class="breadcrumb-link"
			href="#1"
			title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
		>
			<span class="breadcrumb-text-truncate"
				>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
			>
		</a>
	</li>
	<li class="active breadcrumb-item">
		<span class="breadcrumb-text-truncate" title="Active">Active</span>
	</li>
</ol>
```

<div class="sheet-example">
    <ol class="breadcrumb">
        <li class="breadcrumb-item dropdown">
            <a aria-expanded="false" aria-label="More" aria-haspopup="true" class="breadcrumb-link dropdown-toggle" data-toggle="dropdown" href="" id="breadcrumb2Dropdown1" role="button">
                <svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#ellipsis-h"></use>
                </svg>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <ul aria-labelledby="breadcrumb2Dropdown1" class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">Home</a></li>
                <li><a class="dropdown-item" href="#1">Components</a></li>
                <li><a class="dropdown-item" href="#1">Breadcrumbs and Paginations</a></li>
            </ul>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="Page">
                <span class="breadcrumb-text-truncate">Page</span>
            </a>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                <span class="breadcrumb-text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
            </a>
        </li>
        <li class="active breadcrumb-item">
            <span class="breadcrumb-text-truncate" title="Active">Active</span>
        </li>
    </ol>
</div>

```html
<ol class="breadcrumb">
	<li class="breadcrumb-item dropdown">
		<a
			aria-label="More"
			aria-expanded="false"
			aria-haspopup="true"
			class="breadcrumb-link dropdown-toggle"
			data-toggle="dropdown"
			href=""
			id="breadcrumb2Dropdown1"
			role="button"
		>
			<svg
				class="lexicon-icon lexicon-icon-ellipsis-h"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#ellipsis-h"></use>
			</svg>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<ul aria-labelledby="breadcrumb2Dropdown1" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Home</a></li>
			<li><a class="dropdown-item" href="#1">Components</a></li>
			<li>
				<a class="dropdown-item" href="#1"
					>Breadcrumbs and Paginations</a
				>
			</li>
		</ul>
	</li>
	<li class="breadcrumb-item">
		<a class="breadcrumb-link" href="#1" title="Page">
			<span class="breadcrumb-text-truncate">Page</span>
		</a>
	</li>
	<li class="breadcrumb-item">
		<a
			class="breadcrumb-link"
			href="#1"
			title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
		>
			<span class="breadcrumb-text-truncate"
				>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
			>
		</a>
	</li>
	<li class="active breadcrumb-item">
		<span class="breadcrumb-text-truncate" title="Active">Active</span>
	</li>
</ol>
```

<div class="sheet-example">
    <ol class="breadcrumb">
        <li class="breadcrumb-item dropdown">
            <a aria-expanded="false" aria-haspopup="true" class="breadcrumb-link dropdown-toggle" data-toggle="dropdown" href="#1" id="breadcrumb3Dropdown1" role="button" title="Dropdown">
                <span class="breadcrumb-text-truncate">Dropdown</span>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </a>
            <ul aria-labelledby="breadcrumb3Dropdown1" class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">Home</a></li>
                <li><a class="dropdown-item" href="#1">Components</a></li>
                <li><a class="dropdown-item" href="#1">Breadcrumbs and Paginations</a></li>
            </ul>
        </li>
        <li class="breadcrumb-item dropdown">
            <button aria-expanded="false" aria-haspopup="true" class="breadcrumb-link btn btn-unstyled dropdown-toggle" data-toggle="dropdown" id="breadcrumb3Dropdown2" title="Dropdown" type="button">
                <span class="breadcrumb-text-truncate">Dropdown</span>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </button>
            <ul aria-labelledby="breadcrumb3Dropdown2" class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">Home</a></li>
                <li><a class="dropdown-item" href="#1">Components</a></li>
                <li><a class="dropdown-item" href="#1">Breadcrumbs and Paginations</a></li>
            </ul>
        </li>
        <li class="breadcrumb-item dropdown">
            <button aria-expanded="false" aria-label="More" aria-haspopup="true" class="breadcrumb-link btn btn-unstyled dropdown-toggle" data-toggle="dropdown" id="breadcrumb2Dropdown2" type="button">
                <svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#ellipsis-h"></use>
                </svg>
                <svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
                    <use href="/images/icons/icons.svg#caret-bottom"></use>
                </svg>
            </button>
            <ul aria-labelledby="breadcrumb2Dropdown2" class="dropdown-menu">
                <li><a class="dropdown-item" href="#1">Home</a></li>
                <li><a class="dropdown-item" href="#1">Components</a></li>
                <li><a class="dropdown-item" href="#1">Breadcrumbs and Paginations</a></li>
            </ul>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="Page">
                <span class="breadcrumb-text-truncate">Page</span>
            </a>
        </li>
        <li class="breadcrumb-item">
            <a class="breadcrumb-link" href="#1" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">
                <span class="breadcrumb-text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
            </a>
        </li>
        <li class="active breadcrumb-item">
            <span class="breadcrumb-text-truncate" title="Active">Active</span>
        </li>
    </ol>
</div>

```html
<ol class="breadcrumb">
	<li class="breadcrumb-item dropdown">
		<a
			aria-expanded="false"
			aria-haspopup="true"
			class="breadcrumb-link dropdown-toggle"
			data-toggle="dropdown"
			href="#1"
			id="breadcrumb3Dropdown1"
			role="button"
			title="Dropdown"
		>
			<span class="breadcrumb-text-truncate">Dropdown</span>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<ul aria-labelledby="breadcrumb3Dropdown1" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Home</a></li>
			<li><a class="dropdown-item" href="#1">Components</a></li>
			<li>
				<a class="dropdown-item" href="#1"
					>Breadcrumbs and Paginations</a
				>
			</li>
		</ul>
	</li>
	<li class="breadcrumb-item dropdown">
		<button
			aria-expanded="false"
			aria-haspopup="true"
			class="breadcrumb-link btn btn-unstyled dropdown-toggle"
			data-toggle="dropdown"
			id="breadcrumb3Dropdown2"
			title="Dropdown"
			type="button"
		>
			<span class="breadcrumb-text-truncate">Dropdown</span>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</button>
		<ul aria-labelledby="breadcrumb3Dropdown2" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Home</a></li>
			<li><a class="dropdown-item" href="#1">Components</a></li>
			<li>
				<a class="dropdown-item" href="#1"
					>Breadcrumbs and Paginations</a
				>
			</li>
		</ul>
	</li>
	<li class="breadcrumb-item dropdown">
		<button
			aria-label="More"
			aria-expanded="false"
			aria-haspopup="true"
			class="breadcrumb-link btn btn-unstyled dropdown-toggle"
			data-toggle="dropdown"
			id="breadcrumb2Dropdown2"
			type="button"
		>
			<svg
				class="lexicon-icon lexicon-icon-ellipsis-h"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#ellipsis-h"></use>
			</svg>
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use href="/images/icons/icons.svg#caret-bottom"></use>
			</svg>
		</button>
		<ul aria-labelledby="breadcrumb2Dropdown2" class="dropdown-menu">
			<li><a class="dropdown-item" href="#1">Home</a></li>
			<li><a class="dropdown-item" href="#1">Components</a></li>
			<li>
				<a class="dropdown-item" href="#1"
					>Breadcrumbs and Paginations</a
				>
			</li>
		</ul>
	</li>
	<li class="breadcrumb-item">
		<a class="breadcrumb-link" href="#1" title="Page">
			<span class="breadcrumb-text-truncate">Page</span>
		</a>
	</li>
	<li class="breadcrumb-item">
		<a
			class="breadcrumb-link"
			href="#1"
			title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
		>
			<span class="breadcrumb-text-truncate"
				>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
			>
		</a>
	</li>
	<li class="active breadcrumb-item">
		<span class="breadcrumb-text-truncate" title="Active">Active</span>
	</li>
</ol>
```
