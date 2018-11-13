---
title: "Vertical Navigation"
---

### Description

The vertical navigation menu displays navigation items in a vertical menu.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Navigation/verticalNav.html">Vertical Navigation Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Menubar Vertical Expand Lg

> A pattern for collapsing vertical navigations (collapses at 991px). For vertical navigations that don't collapse use <a href="nav.html#nav-stacked">Nav Stacked</a> or <a href="nav.html#nav-nested">Nav Nested</a>.

<div class="row">
	<div class="col-lg-6">
		<nav class="menubar menubar-transparent menubar-vertical-expand-lg">
			<a aria-controls="menubarVerticalLgCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalLgCollapse01" role="button">
				Details
				<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</span>
			</a>
			<div class="collapse menubar-collapse" id="menubarVerticalLgCollapse01">
				<ul class="nav nav-nested">
					<li class="nav-item">
						<a aria-controls="menubarVerticalLgNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse01" role="button">
							Basic Information
							<span class="collapse-icon-closed">
								<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
							</span>
							<span class="collapse-icon-open">
								<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</span>
						</a>
						<div class="collapse show" id="menubarVerticalLgNestedCollapse01">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
								<li class="nav-item">
									<a aria-controls="menubarVerticalLgNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse02" role="button">
										Documents and Media
										<span class="collapse-icon-closed">
											<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
												<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
													<use href="/images/icons/icons.svg#caret-right" />
												</svg>
											</span>
										</span>
										<span class="collapse-icon-open">
											<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
												<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
													<use href="/images/icons/icons.svg#caret-bottom" />
												</svg>
											</span>
										</span>
									</a>
									<div class="collapse" id="menubarVerticalLgNestedCollapse02">
										<ul class="nav nav-stacked">
											<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
											<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
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
						<a aria-controls="menubarVerticalLgNestedCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse03" role="button">
							SEO
							<span class="collapse-icon-closed">
								<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
							</span>
							<span class="collapse-icon-open">
								<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</span>
						</a>
						<div class="collapse" id="menubarVerticalLgNestedCollapse03">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
							</ul>
						</div>
					</li>
					<li class="nav-item">
						<a aria-controls="menubarVerticalLgNestedCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse04" role="button">
							Advanced
							<span class="collapse-icon-closed">
								<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
							</span>
							<span class="collapse-icon-open">
								<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</span>
						</a>
						<div class="collapse" id="menubarVerticalLgNestedCollapse04">
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

```html
<nav class="menubar menubar-transparent menubar-vertical-expand-lg">
	<a aria-controls="menubarVerticalLgCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalLgCollapse01" role="button">
		Details
		<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</a>
	<div class="collapse menubar-collapse" id="menubarVerticalLgCollapse01">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a aria-controls="menubarVerticalLgNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse01" role="button">
					Basic Information
					<span class="collapse-icon-closed">
						<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
					</span>
					<span class="collapse-icon-open">
						<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse show" id="menubarVerticalLgNestedCollapse01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
						<li class="nav-item">
							<a aria-controls="menubarVerticalLgNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse02" role="button">
								Documents and Media
								<span class="collapse-icon-closed">
									<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
											<use href="/images/icons/icons.svg#caret-right" />
										</svg>
									</span>
								</span>
								<span class="collapse-icon-open">
									<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
											<use href="/images/icons/icons.svg#caret-bottom" />
										</svg>
									</span>
								</span>
							</a>
							<div class="collapse" id="menubarVerticalLgNestedCollapse02">
								<ul class="nav nav-stacked">
									<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
									<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
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
				<a aria-controls="menubarVerticalLgNestedCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse03" role="button">
					SEO
					<span class="collapse-icon-closed">
						<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
					</span>
					<span class="collapse-icon-open">
						<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalLgNestedCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="menubarVerticalLgNestedCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse04" role="button">
					Advanced
					<span class="collapse-icon-closed">
						<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
					</span>
					<span class="collapse-icon-open">
						<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalLgNestedCollapse04">
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

### Menubar Vertical Expand Md

> A pattern for collapsing vertical navigations (collapses at 767px). For vertical navigations that don't collapse use <a href="nav.html#nav-stacked">Nav Stacked</a> or <a href="nav.html#nav-nested">Nav Nested</a>.

<div class="row">
	<div class="col-md-6">
		<nav class="menubar menubar-transparent menubar-vertical-expand-md">
			<a aria-controls="menubarVerticalCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalCollapse01" role="button">
				Details
				<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</span>
			</a>
			<div class="collapse menubar-collapse" id="menubarVerticalCollapse01">
				<ul class="nav nav-nested">
					<li class="nav-item">
						<a aria-controls="menubarVerticalNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse01" role="button">
							Basic Information
							<span class="collapse-icon-closed">
								<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
							</span>
							<span class="collapse-icon-open">
								<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</span>
						</a>
						<div class="collapse show" id="menubarVerticalNestedCollapse01">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
								<li class="nav-item">
									<a aria-controls="menubarVerticalNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse02" role="button">
										Documents and Media
										<span class="collapse-icon-closed">
											<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
												<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
													<use href="/images/icons/icons.svg#caret-right" />
												</svg>
											</span>
										</span>
										<span class="collapse-icon-open">
											<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
												<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
													<use href="/images/icons/icons.svg#caret-bottom" />
												</svg>
											</span>
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
						<a aria-controls="menubarVerticalNestedCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse03" role="button">
							SEO
							<span class="collapse-icon-closed">
								<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
							</span>
							<span class="collapse-icon-open">
								<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
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
						<a aria-controls="menubarVerticalNestedCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse04" role="button">
							Advanced
							<span class="collapse-icon-closed">
								<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
							</span>
							<span class="collapse-icon-open">
								<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
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

```html
<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<a aria-controls="menubarVerticalCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalCollapse01" role="button">
		Details
		<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</a>
	<div class="collapse menubar-collapse" id="menubarVerticalCollapse01">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a aria-controls="menubarVerticalNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse01" role="button">
					Basic Information
					<span class="collapse-icon-closed">
						<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
					</span>
					<span class="collapse-icon-open">
						<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse show" id="menubarVerticalNestedCollapse01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
						<li class="nav-item">
							<a aria-controls="menubarVerticalNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse02" role="button">
								Documents and Media
								<span class="collapse-icon-closed">
									<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
											<use href="/images/icons/icons.svg#caret-right" />
										</svg>
									</span>
								</span>
								<span class="collapse-icon-open">
									<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
											<use href="/images/icons/icons.svg#caret-bottom" />
										</svg>
									</span>
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
				<a aria-controls="menubarVerticalNestedCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse03" role="button">
					SEO
					<span class="collapse-icon-closed">
						<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
					</span>
					<span class="collapse-icon-open">
						<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
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
				<a aria-controls="menubarVerticalNestedCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalNestedCollapse04" role="button">
					Advanced
					<span class="collapse-icon-closed">
						<span aria-label="icon-caret-right" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-right">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
					</span>
					<span class="collapse-icon-open">
						<span aria-label="icon-caret-bottom" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
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
