---
title: Nav Pills
description: Components
layout: "guide"
weight: 100
---

<article id="nav-pills">

### Nav Pills

> Add `.nav-pills` to `.nav` to add background colors and border styles.

<ul class="nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>

```xml
<ul class="nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>
```

</article>


<article id="nav-pills-justified">

### Nav Pills Justified

> Add `.nav-justified` to make nav-pills equal width relative to its parent container.

<ul class="nav nav-justified nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>

```xml
<ul class="nav nav-justified nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>
```

</article>


<article id="vertical-nav-pills">

### Vertical Nav Pills

<div class="row">
	<div class="col-md-4">
		<ul class="flex-column nav nav-pills">
			<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
			<li class="nav-item">
				<a class="nav-link" href="#1">
					Fields with Badge&nbsp;
					<span class="badge badge-warning">2</span>
				</a>
			</li>
			<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
			<li class="dropdown nav-item">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
					Configuration
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#1">Setup</a>
					<a class="dropdown-item" href="#1">Supported Clients</a>
					<a class="dropdown-item" href="#1">Permissions</a>
					<a class="dropdown-item" href="#1">Sharing</a>
					<div class="dropdown-divider" role="separator"></div>
					<a class="dropdown-item" href="#1">Scope</a>
				</div>
			</li>
		</ul>
	</div>
</div>

```xml
<ul class="flex-column nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item">
		<a class="nav-link" href="#1">
			Fields with Badge
			<span class="badge badge-warning">2</span>
		</a>
	</li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider" role="separator"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>
```

</article>


<article id="vertical-nested-nav-pills">

### Vertical Nested Nav Pills

<div class="row">
	<div class="col-md-4">
		<ul class="flex-column nav nav-nested nav-pills">
			<li class="nav-item">
				<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navPillsCollapse01">
					Basic Information
					<span class="collapse-icon-closed">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
							<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-down">
							<use xlink:href="/vendor/lexicon/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
				<div class="collapse show" id="navPillsCollapse01">
					<ul class="flex-column nav">
						<li class="nav-item"><a class="nav-link" href="#">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Catagorization</a></li>
						<li class="nav-item">
							<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navPillsCollapse02">
								Documents and Media
								<span class="collapse-icon-closed">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
										<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-down">
										<use xlink:href="/vendor/lexicon/icons.svg#angle-down" />
									</svg>
								</span>
							</a>
							<div class="collapse" id="navPillsCollapse02">
								<ul class="flex-column nav">
									<li class="nav-item"><a class="nav-link" href="#">Details</a></li>
									<li class="nav-item"><a class="nav-link" href="#">Catagorization</a></li>
									<li class="nav-item"><a class="nav-link" href="#">Documents and Media</a></li>
									<li class="nav-item"><a class="nav-link" href="#">Site Template</a></li>
								</ul>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="#">Site Template</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</div>

```xml
<ul class="flex-column nav nav-nested nav-pills">
	<li class="nav-item">
		<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navPillsCollapse01">
			Basic Information
			<span class="collapse-icon-closed">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-down">
					<use xlink:href="/vendor/lexicon/icons.svg#angle-down" />
				</svg>
			</span>
		</a>
		<div class="collapse show" id="navPillsCollapse01">
			<ul class="flex-column nav">
				<li class="nav-item"><a class="nav-link" href="#">Details</a></li>
				<li class="nav-item"><a class="nav-link" href="#">Catagorization</a></li>
				<li class="nav-item">
					<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navPillsCollapse02">
						Documents and Media
						<span class="collapse-icon-closed">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-right">
								<use xlink:href="/vendor/lexicon/icons.svg#angle-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-down">
								<use xlink:href="/vendor/lexicon/icons.svg#angle-down" />
							</svg>
						</span>
					</a>
					<div class="collapse" id="navPillsCollapse02">
						<ul class="flex-column nav">
							<li class="nav-item"><a class="nav-link" href="#">Details</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Catagorization</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Documents and Media</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Site Template</a></li>
						</ul>
					</div>
				</li>
				<li class="nav-item"><a class="nav-link" href="#">Site Template</a></li>
			</ul>
		</div>
	</li>
</ul>
```

</article>