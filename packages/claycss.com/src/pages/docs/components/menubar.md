---
title: Menubar (Vertical)
description: Components
layout: "guide"
weight: 100
---

<article id="menubar-vertical-expand-md">

### Menubar Vertical Expand Md

<div class="clay-site-row-spacer row">
	<div class="col-md-6">
		<nav class="menubar menubar-transparent menubar-vertical-expand-md">
			<button class="menubar-toggler" data-target="#menubarVerticalCollapse01" data-toggle="collapse">
				Details
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
					<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="collapse menubar-collapse" id="menubarVerticalCollapse01">
				<ul class="nav nav-nested">
					<li class="nav-item">
						<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse01">
							Basic Information
							<span class="collapse-icon-closed">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
									<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
									<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
								</svg>
							</span>
						</a>
						<div class="collapse show" id="menubarVerticalNestedCollapse01">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
								<li class="nav-item">
									<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse02">
										Documents and Media
										<span class="collapse-icon-closed">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
												<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
											</svg>
										</span>
										<span class="collapse-icon-open">
											<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
												<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
											</svg>
										</span>
									</a>
									<div class="collapse" id="menubarVerticalNestedCollapse02">
										<ul class="nav nav-stacked">
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
						<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse03">
							SEO
							<span class="collapse-icon-closed">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
									<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
									<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
								</svg>
							</span>
						</a>
						<div class="collapse" id="menubarVerticalNestedCollapse03">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
							</ul>
						</div>
					</li>
					<li class="nav-item">
						<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse04">
							Advanced
							<span class="collapse-icon-closed">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
									<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
									<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
								</svg>
							</span>
						</a>
						<div class="collapse" id="menubarVerticalNestedCollapse04">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</div>

```text/html
<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<button class="menubar-toggler" data-target="#menubarVerticalCollapse01" data-toggle="collapse">
		Details
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="collapse menubar-collapse" id="menubarVerticalCollapse01">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse01">
					Basic Information
					<span class="collapse-icon-closed">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse show" id="menubarVerticalNestedCollapse01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
						<li class="nav-item">
							<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse02">
								Documents and Media
								<span class="collapse-icon-closed">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
									</svg>
								</span>
							</a>
							<div class="collapse" id="menubarVerticalNestedCollapse02">
								<ul class="nav nav-stacked">
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
				<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse03">
					SEO
					<span class="collapse-icon-closed">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalNestedCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse04">
					Advanced
					<span class="collapse-icon-closed">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
							<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalNestedCollapse04">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>
```
</article>