---
title: Breadcrumbs
description: "Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy."
layout: "guide"
pattern: "Navigation/breadcrumb"
weight: 100
---

### Description
{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="breadcrumbs">
<h3 class="component-title">
	<a href="#breadcrumbs">Breadcrumbs</a>
</h3>

> A navigation aid for your site, provide a quick way to jump back to previously viewed pages or sections.

> Use `<span class="breadcrumb-text-truncate"></span>` inside breadcrumb links to truncate text based on a max-width.

<div class="alert alert-warning">
	Breadcrumb will use <code>$breadcrumb-divider-svg-icon</code> by default, set <code>$breadcrumb-divider-svg-icon: none;</code> if you wish to use the UTF-8 charset or third-party icon font.
</div>

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

```text/html
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
```

<ol class="breadcrumb">
	<li class="breadcrumb-item dropdown">
		<a aria-expanded="false" aria-haspopup="true" class="breadcrumb-link dropdown-toggle" data-toggle="dropdown" href="#1" id="breadcrumb2Dropdown1" role="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
				<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
			</svg>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<div aria-labelledby="breadcrumb2Dropdown1" class="dropdown-menu">
			<a class="dropdown-item" href="#1">Home</a>
			<a class="dropdown-item" href="#1">Components</a>
			<a class="dropdown-item" href="#1">Breadcrumbs and Paginations</a>
		</div>
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

```text/html
<ol class="breadcrumb">
	<li class="breadcrumb-item dropdown">
		<a aria-expanded="false" aria-haspopup="true" class="breadcrumb-link dropdown-toggle" data-toggle="dropdown" href="" id="breadcrumb2Dropdown1" role="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
				<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
			</svg>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom"></use>
			</svg>
		</a>
		<div aria-labelledby="breadcrumb2Dropdown1" class="dropdown-menu">
			<a class="dropdown-item" href="#1">Home</a>
			<a class="dropdown-item" href="#1">Components</a>
			<a class="dropdown-item" href="#1">Breadcrumbs and Paginations</a>
		</div>
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
```

</article>
