---
title: Multi Step Nav
description: Components
layout: "guide"
weight: 100
---

<article id="1">

> Multi Step Progress Bar replacement for Clay V2.

<ol class="multi-step-nav">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 1</a>
					<a class="dropdown-item" href="#1">Step 2</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

```xml
<ol class="multi-step-nav">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 1</a>
					<a class="dropdown-item" href="#1">Step 2</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>
```

</article>

<article id="2">

<ol class="multi-step-nav multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="10"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

```xml
<ol class="multi-step-nav multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="10"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>
```

</article>

<article id="3">

<ol class="multi-step-nav multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<div class="multi-step-icon" data-multi-step-icon="5"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">06</div>
			<div class="multi-step-icon" data-multi-step-icon="6"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">07</div>
			<div class="multi-step-icon" data-multi-step-icon="7"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

```xml
<ol class="multi-step-nav multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<div class="multi-step-icon" data-multi-step-icon="5"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">06</div>
			<div class="multi-step-icon" data-multi-step-icon="6"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">07</div>
			<div class="multi-step-icon" data-multi-step-icon="7"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>
```

</article>

<article id="4">

### Multi Step Nav Fixed Width Items

<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Submit Payment</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<div class="multi-step-icon" data-multi-step-icon="5"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

```xml
<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Submit Payment</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<div class="multi-step-icon" data-multi-step-icon="5"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>
```

</article>

<article id="5">

### Multi Step Nav Collapse (sm, md, lg, xl)

<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="10"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Payment Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

```xml
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="10"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>

<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Payment Information</div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
		<div class="multi-step-divider"></div>
	</li>
</ol>
```

</article>

