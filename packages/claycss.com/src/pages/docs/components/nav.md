---
title: Nav
description: Components
layout: "guide"
weight: 100
---

<article id="base-nav">

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


<article id="vertical-nav">

### Vertical Nav

<div class="row">
	<div class="col-md-4">
		<ul class="flex-column nav">
			<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
			<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
		</ul>
	</div>
</div>

```xml
<ul class="flex-column nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
</ul>
```

</article>


<article id="nav-underline">

### Nav Underline

<ul class="nav nav-underline">
	<li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>

```xml
<ul class="nav nav-underline">
	<li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

</article>


<article id="nav-nested">

### Nav Nested

> Add class `nav-nested` to the outermost nav to use padding to indent each nested nav.

> Also collapsible when used with (http://getbootstrap.com/javascript/#collapse)[Bootstrap Collapse Plugin].

<div class="row">
	<div class="col-md-6">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse01">
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
				<div class="collapse show" id="navCollapse01">
					<ul class="flex-column nav">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
						<li class="nav-item">
							<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse02">
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
</div>

```xml
<ul class="nav nav-nested">
	<li class="nav-item">
		<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse01">
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
		<div class="collapse show" id="navCollapse01">
			<ul class="flex-column nav">
				<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
				<li class="nav-item">
					<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse02">
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
```

</article>


<article id="nav-nested-margins">

### Nav Nested Margins

> `nav-nested-margins` uses margins instead of padding to indent.

<div class="row">
	<div class="col-md-6">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse001">
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
				<div class="collapse show" id="navCollapse001">
					<ul class="flex-column nav">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
						<li class="nav-item">
							<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse002">
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
</div>

```xml
<ul class="nav nav-nested-margins">
	<li class="nav-item">
		<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse001">
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
		<div class="collapse show" id="navCollapse001">
			<ul class="flex-column nav">
				<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
				<li class="nav-item">
					<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse002">
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
```

</article>