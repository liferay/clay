---
title: Nav
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Base Nav

<ul class="nav">
    <li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
    <li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>

```xml
<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

</article>

<article id="2">

### Veritcal Nav

<ul class="flex-column nav">
    <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
    <li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
    <li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
</ul>

</article>

<article id="3">

### Nested Vertical Nav

> Nested navigation, also collapsible (requires <a href="http://getbootstrap.com/javascript/#collapse">Bootstrap Collapse Plugin</a>). Add class nav-nested to the outermost nav to indent each nested nav.

<div class="col-md-6">
    <ul class="flex-column nav nav-nested">
        <li class="nav-item">
            <a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse01">
                Basic Information
                <span class="collapse-icon-closed">
                    <span class="icon-caret-right"></span>
                </span>
                <span class="collapse-icon-open">
                    <span class="icon-caret-down"></span>
                </span>
            </a>
            <div class="collapse show" id="navCollapse01">
                <ul class="flex-column nav">
                    <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
                    <li class="nav-item">
                        <a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse02">
                            Documents and Media
                            <span class="collapse-icon-closed">
                                <span class="icon-caret-right"></span>
                            </span>
                            <span class="collapse-icon-open">
                                <span class="icon-caret-down"></span>
                            </span>
                        </a>
                        <div class="collapse" id="navCollapse02">
                            <ul class="flex-column nav">
                                <li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Documents and Media</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse03">
                SEO
                <span class="collapse-icon-closed">
                    <span class="icon-caret-right"></span>
                </span>
                <span class="collapse-icon-open">
                    <span class="icon-caret-down"></span>
                </span>
            </a>
            <div class="collapse" id="navCollapse03">
                <ul class="flex-column nav">
                    <li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse04">
                Advanced
                <span class="collapse-icon-closed">
                    <span class="icon-caret-right"></span>
                </span>
                <span class="collapse-icon-open">
                    <span class="icon-caret-down"></span>
                </span>
            </a>
            <div class="collapse" id="navCollapse04">
                <ul class="flex-column nav">
                    <li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>

```xml
<div class="col-md-6">
    <ul class="flex-column nav nav-nested">
        <li class="nav-item">
            <a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse01">
                Basic Information
                <span class="collapse-icon-closed">
                    <span class="icon-caret-right"></span>
                </span>
                <span class="collapse-icon-open">
                    <span class="icon-caret-down"></span>
                </span>
            </a>
            <div class="collapse show" id="navCollapse01">
                <ul class="flex-column nav">
                    <li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
                    <li class="nav-item">
                        <a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse02">
                            Documents and Media
                            <span class="collapse-icon-closed">
                                <span class="icon-caret-right"></span>
                            </span>
                            <span class="collapse-icon-open">
                                <span class="icon-caret-down"></span>
                            </span>
                        </a>
                        <div class="collapse" id="navCollapse02">
                            <ul class="flex-column nav">
                                <li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Documents and Media</a></li>
                                <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse03">
                SEO
                <span class="collapse-icon-closed">
                    <span class="icon-caret-right"></span>
                </span>
                <span class="collapse-icon-open">
                    <span class="icon-caret-down"></span>
                </span>
            </a>
            <div class="collapse" id="navCollapse03">
                <ul class="flex-column nav">
                    <li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse04">
                Advanced
                <span class="collapse-icon-closed">
                    <span class="icon-caret-right"></span>
                </span>
                <span class="collapse-icon-open">
                    <span class="icon-caret-down"></span>
                </span>
            </a>
            <div class="collapse" id="navCollapse04">
                <ul class="flex-column nav">
                    <li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div>
```

</article>

<article id="4">

### Nested Vertical Nav (Margins)

`nav-nested-margins` uses margins instead of padding to indent.

<div class="col-md-6">
	<ul class="flex-column nav nav-nested-margins">
		<li class="nav-item">
			<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse001">
				Basic Information
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div class="collapse show" id="navCollapse001">
				<ul class="flex-column nav">
					<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
					<li class="nav-item">
						<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse002">
							Documents and Media
							<span class="collapse-icon-closed">
								<svg class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#angle-right" />
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#angle-down" />
								</svg>
							</span>
						</a>
						<div class="collapse" id="navCollapse002">
							<ul class="flex-column nav">
								<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Documents and Media</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
							</ul>
						</div>
					</li>
					<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
				</ul>
			</div>
		</li>
		<li class="nav-item">
			<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse003">
				SEO
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div class="collapse" id="navCollapse003">
				<ul class="flex-column nav">
					<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
				</ul>
			</div>
		</li>
		<li class="nav-item">
			<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse004">
				Advanced
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div class="collapse" id="navCollapse004">
				<ul class="flex-column nav">
					<li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
				</ul>
			</div>
		</li>
	</ul>
</div>

```xml
<div class="col-md-6">
	<ul class="flex-column nav nav-nested-margins">
		<li class="nav-item">
			<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse001">
				Basic Information
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div class="collapse show" id="navCollapse001">
				<ul class="flex-column nav">
					<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
					<li class="nav-item">
						<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse002">
							Documents and Media
							<span class="collapse-icon-closed">
								<svg class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#angle-right" />
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg class="lexicon-icon">
									<use xlink:href="/vendor/clay/icons.svg#angle-down" />
								</svg>
							</span>
						</a>
						<div class="collapse" id="navCollapse002">
							<ul class="flex-column nav">
								<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Documents and Media</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
							</ul>
						</div>
					</li>
					<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
				</ul>
			</div>
		</li>
		<li class="nav-item">
			<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse003">
				SEO
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div class="collapse" id="navCollapse003">
				<ul class="flex-column nav">
					<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
				</ul>
			</div>
		</li>
		<li class="nav-item">
			<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse004">
				Advanced
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon">
						<use xlink:href="/vendor/clay/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div class="collapse" id="navCollapse004">
				<ul class="flex-column nav">
					<li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
					<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
				</ul>
			</div>
		</li>
	</ul>
</div>
```

</article>

<article id="5">

### Nav Pills

> Add <code>.nav-pills</code> to <code>.nav</code> to add background colors and border styles.

<ul class="nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider"></div>
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
				<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
			</svg>
		</a>

		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>
```

</article>

<article id="6">

### Nav Pills Justified

> Add <code>.nav-justified</code> to make nav-pills equal width relative to its parent container.

<ul class="nav nav-justified nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider"></div>
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
				<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
			</svg>
		</a>

		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>
```

</article>

<article id="7">

### Vertical Nav Pills

<div class="col-md-4">
	<ul class="flex-column nav nav-pills">
		<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
		<li class="nav-item">
			<a class="nav-link" href="#1">
				<span class="badge pull-right">2</span>
				Fields with Badge
			</a>
		</li>
		<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
		<li class="dropdown nav-item">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
				Configuration
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
					<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
				</svg>
			</a>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#1">Setup</a>
				<a class="dropdown-item" href="#1">Supported Clients</a>
				<a class="dropdown-item" href="#1">Permissions</a>
				<a class="dropdown-item" href="#1">Sharing</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="#1">Scope</a>
			</div>
		</li>
	</ul>
</div>

```xml
<ul class="flex-column nav nav-pills">
	<li class="nav-item"><a class="active nav-link" href="#1">Fields</a></li>
	<li class="nav-item">
		<a class="nav-link" href="#1">
			<span class="badge pull-right">2</span>
			Fields with Badge
		</a>
	</li>
	<li class="nav-item"><a class="nav-link" href="#1">Settings</a></li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/clay/icons.svg#caret-bottom" />
			</svg>
		</a>

		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Setup</a>
			<a class="dropdown-item" href="#1">Supported Clients</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Sharing</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#1">Scope</a>
		</div>
	</li>
</ul>
```

</article>

<article id="8">

### Vertical Nested Nav Pills

<div class="col-md-4">
	<ul class="flex-column nav nav-nested nav-pills">
		<li class="nav-item">
			<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navPillsCollapse01">
				Basic Information
				<span class="collapse-icon-closed">
					<span class="icon-caret-right"></span>
				</span>
				<span class="collapse-icon-open">
					<span class="icon-caret-down"></span>
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
								<span class="icon-caret-right"></span>
							</span>
							<span class="collapse-icon-open">
								<span class="icon-caret-down"></span>
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

```xml
<ul class="flex-column nav nav-nested nav-pills">
	<li class="nav-item">
		<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navPillsCollapse01">
			Basic Information
			<span class="collapse-icon-closed">
				<span class="icon-caret-right"></span>
			</span>
			<span class="collapse-icon-open">
				<span class="icon-caret-down"></span>
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
							<span class="icon-caret-right"></span>
						</span>
						<span class="collapse-icon-open">
							<span class="icon-caret-down"></span>
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