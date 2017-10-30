---
title: Multi Step Nav
description: Components
layout: "guide"
weight: 100
---

<article id="multi-step-nav">

### Multi Step Nav

> Multi Step Progress Bar replacement for Clay V2.

<div class="form-container">
	<ol class="multi-step-nav">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-icon" data-multi-step-icon="1"></div>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-icon" data-multi-step-icon="2"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
						</svg>
					</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#1">Step 1</a>
						<a class="dropdown-item" href="#1">Step 2</a>
					</div>
				</div>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 1</a>
					<a class="dropdown-item" href="#1">Step 2</a>
				</div>
			</div>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
	</li>
</ol>
```

<div class="form-container">
	<ol class="multi-step-nav multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<div class="multi-step-icon" data-multi-step-icon="1"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
						</svg>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#1">Step 5</a>
						<a class="dropdown-item" href="#1">Step 6</a>
						<a class="dropdown-item" href="#1">Step 7</a>
						<a class="dropdown-item" href="#1">Step 8</a>
					</div>
				</div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<button aria-expanded="false" aria-haspopup="true" class="btn btn-link dropdown-toggle multi-step-link" data-toggle="dropdown" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
						</svg>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#1">Step 5</a>
						<a class="dropdown-item" href="#1">Step 6</a>
						<a class="dropdown-item" href="#1">Step 7</a>
						<a class="dropdown-item" href="#1">Step 8</a>
					</div>
				</div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle multi-step-link" data-toggle="dropdown" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
						</svg>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#1">Step 5</a>
						<a class="dropdown-item" href="#1">Step 6</a>
						<a class="dropdown-item" href="#1">Step 7</a>
						<a class="dropdown-item" href="#1">Step 8</a>
					</div>
				</div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
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
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<div class="multi-step-icon" data-multi-step-icon="9"></div>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<div class="multi-step-icon" data-multi-step-icon="10"></div>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-link dropdown-toggle multi-step-link" data-toggle="dropdown" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle multi-step-link" data-toggle="dropdown" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Step 5</a>
					<a class="dropdown-item" href="#1">Step 6</a>
					<a class="dropdown-item" href="#1">Step 7</a>
					<a class="dropdown-item" href="#1">Step 8</a>
				</div>
			</div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
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
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="10"></div>
		</div>
	</li>
</ol>
```

<div class="form-container">
	<ol class="multi-step-nav multi-step-indicator-label-bottom">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">01</div>
				<div class="multi-step-icon" data-multi-step-icon="1"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">02</div>
				<div class="multi-step-icon" data-multi-step-icon="2"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">03</div>
				<div class="multi-step-icon" data-multi-step-icon="3"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">04</div>
				<div class="multi-step-icon" data-multi-step-icon="4"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">05</div>
				<div class="multi-step-icon" data-multi-step-icon="5"></div>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">06</div>
				<div class="multi-step-icon" data-multi-step-icon="6"></div>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">07</div>
				<div class="multi-step-icon" data-multi-step-icon="7"></div>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<div class="multi-step-icon" data-multi-step-icon="5"></div>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">06</div>
			<div class="multi-step-icon" data-multi-step-icon="6"></div>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">07</div>
			<div class="multi-step-icon" data-multi-step-icon="7"></div>
		</div>
	</li>
</ol>
```

</article>


<article id="multi-step-nav-fix-width-items">

### Multi Step Nav Fixed Width Items

<div class="form-container">
	<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">01</div>
				<div class="multi-step-icon" data-multi-step-icon="1"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">02</div>
				<div class="multi-step-icon" data-multi-step-icon="2"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">03</div>
				<div class="multi-step-icon" data-multi-step-icon="3"></div>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">04</div>
				<div class="multi-step-icon" data-multi-step-icon="4"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Submit Payment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">05</div>
				<div class="multi-step-icon" data-multi-step-icon="5"></div>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-indicator-label-bottom multi-step-item-fixed-width">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Submit Payment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">05</div>
			<div class="multi-step-icon" data-multi-step-icon="5"></div>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
	</li>
</ol>
```

</article>


<article id="multi-step-nav-collapse-sm-md-lg-xl">

### Multi Step Nav Collapse (sm, md, lg, xl)

<div class="form-container">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<div class="multi-step-icon" data-multi-step-icon="1"></div>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<div class="multi-step-icon" data-multi-step-icon="2"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<div class="multi-step-icon" data-multi-step-icon="3"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<div class="multi-step-icon" data-multi-step-icon="4"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
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
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<div class="multi-step-icon" data-multi-step-icon="9"></div>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<div class="multi-step-icon" data-multi-step-icon="10"></div>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
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
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="10"></div>
		</div>
	</li>
</ol>
```

<div class="form-container">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Ticket Buyer Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<div class="multi-step-icon" data-multi-step-icon="1"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Attendee Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<div class="multi-step-icon" data-multi-step-icon="2"></div>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Seat Assignment</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<div class="multi-step-icon" data-multi-step-icon="3"></div>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Dinner Preference</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<div class="multi-step-icon" data-multi-step-icon="4"></div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="dropdown multi-step-icon">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
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
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-title">Payment Information</div>
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<div class="multi-step-icon" data-multi-step-icon="9"></div>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
			</div>
		</li>
	</ol>
</div>

```text/html
<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom">
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Ticket Buyer Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 01</div>
			<div class="multi-step-icon" data-multi-step-icon="1"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Attendee Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<div class="multi-step-icon" data-multi-step-icon="2"></div>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Seat Assignment</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<div class="multi-step-icon" data-multi-step-icon="3"></div>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Dinner Preference</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<div class="multi-step-icon" data-multi-step-icon="4"></div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="dropdown multi-step-icon">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-link" data-toggle="dropdown" href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
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
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-title">Payment Information</div>
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<div class="multi-step-icon" data-multi-step-icon="9"></div>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<div class="multi-step-icon" data-multi-step-icon="Fin"></div>
		</div>
	</li>
</ol>
```

</article>


<article id="multi-step-nav-simplified">

### Multi Step Nav Simplified

> See [/subnav/#subnav](Subnav)

</article>