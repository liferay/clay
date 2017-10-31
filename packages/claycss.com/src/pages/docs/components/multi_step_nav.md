---
title: Multi Step Nav
description: Components
layout: "guide"
weight: 100
---

<article id="multi-step-nav-collapsed-sm">

### Multi Step Nav Collapsed Sm

<div class="form-container">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="dropdown multi-step-indicator">
				<div class="multi-step-indicator-label">Step 05</div>
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-indicator-end">
					<a class="active complete dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
								<use xlink:href="/vendor/lexicon/icons.svg#check" />
							</svg>
						</span>
					</a>
				</div>
			</div>
		</li>
		<li class="multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
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
			<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 02</div>
			<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 03</div>
			<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
		</div>
	</li>
	<li class="complete multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 04</div>
			<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
		</div>
	</li>
	<li class="active multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="dropdown multi-step-indicator">
			<div class="multi-step-indicator-label">Step 05</div>
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-h">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-h"></use>
				</svg>
			</a>
			<div class="dropdown-menu dropdown-menu-indicator-end">
				<a class="active complete dropdown-item" href="#1">
					5. Step Five
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					6. Step Six
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="complete dropdown-item" href="#1">
					7. Step Seven
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
				<a class="dropdown-item" href="#1">
					8. Step Eight
					<span aria-hidden="true" class="dropdown-item-indicator">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
							<use xlink:href="/vendor/lexicon/icons.svg#check" />
						</svg>
					</span>
				</a>
			</div>
		</div>
	</li>
	<li class="multi-step-item multi-step-item-expand">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 09</div>
			<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
		</div>
	</li>
	<li class="multi-step-item">
		<div class="multi-step-divider"></div>
		<div class="multi-step-indicator">
			<div class="multi-step-indicator-label">Step 10</div>
			<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
		</div>
	</li>
</ol>
```

</article>


<article id="multi-step-nav-simplified">

### Multi Step Nav Simplified

> See [/subnav/#subnav](Subnav)

</article>