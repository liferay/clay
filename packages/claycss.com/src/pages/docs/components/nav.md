---
title: Nav
description: Components
layout: "guide"
weight: 100
---

<article id="base-nav">

### Base Nav

<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>

```text/html
<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
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

```text/html
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

```text/html
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

```text/html
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


<article id="nav-unstyled">

### Nav Unstyled

> Add `nav-unstyled` to your nav to remove spacing around `nav-link` and `nav-btn`.

<ul class="nav nav-unstyled">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>

```text/html
<ul class="nav nav-unstyled">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

</article>


<article id="how-to-use-nav-helper-classes">

### How to use Nav Helper Classes

> Dropdown toggle with anchor: `dropdown-toggle nav-link`
> Dropdown toggle with button: `btn btn-unstyled dropdown-toggle nav-link`
> An anchor in Nav Item styled like btn: `btn btn-primary nav-btn nav-btn-monospaced`
> A button in Nav Item styled like nav-link: `btn btn-unstyled nav-link`
> A button in Nav Item: `btn btn-primary nav-btn`
> A monospaced anchor in Nav Item: `nav-link nav-link-monospaced`
> A monospaced button in Nav Item: `btn btn-primary nav-btn nav-btn-monospaced`

<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
	<li class="nav-item">
		<button class="btn btn-unstyled nav-link" type="button">Details</button>
	</li>
	<li class="nav-item">
		<button class="btn btn-primary nav-btn" type="button">Details</button>
	</li>
	<li class="nav-item">
		<button class="btn btn-link nav-btn" type="button">
			Details
		</button>
	</li>
	<li class="nav-item">
		<button class="btn btn-primary nav-btn nav-btn-monospaced" type="button">De</button>
	</li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Catagorization</a></li>
	<li class="dropdown nav-item">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-unstyled dropdown-toggle nav-link" data-toggle="dropdown" type="button">
			More
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div aria-labelledby="" class="dropdown-menu">
			<a class="dropdown-item" href="#1">App Section 4</a>
			<a class="dropdown-item" href="#1">App Section 5</a>
			<a class="dropdown-item" href="#1">App Section 6</a>
			<a class="dropdown-item" href="#1">App Section 7</a>
		</div>
	</li>
	<li class="nav-item">
		<a class="nav-link nav-link-monospaced" href="#1">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
				<use xlink:href="/vendor/lexicon/icons.svg#cog" />
			</svg>
		</a>
	</li>
	<li class="nav-item">
		<a class="btn btn-primary nav-btn nav-btn-monospaced" href="#1">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
				<use xlink:href="/vendor/lexicon/icons.svg#cog" />
			</svg>
		</a>
	</li>
	<li class="nav-item">
		<button class="btn btn-unstyled nav-btn nav-btn-monospaced" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
				<use xlink:href="/vendor/lexicon/icons.svg#cog" />
			</svg>
		</button>
	</li>
</ul>

</article>