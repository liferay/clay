---
title: "Nav"
---

### Base Nav

<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>

```html
<ul class="nav">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

### Nav Stacked

<div class="row">
	<div class="col-md-4">
		<ul class="nav nav-stacked">
			<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
			<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
			<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
		</ul>
	</div>
</div>

```html
<ul class="nav nav-stacked">
	<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
</ul>
```

### Nav Nested

> Add the `nav-nested` class to the outermost nav to indent each nested nav with padding.

> You can also use the (http://getbootstrap.com/javascript/#collapse)[Bootstrap Collapse Plugin] to make the nav collapsible.

<div class="row">
	<div class="col-md-6">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a aria-controls="navCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse01" role="button">
					Basic Information
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse show" id="navCollapse01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
						<li class="nav-item">
							<a aria-controls="navCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse02" role="button">
								Documents and Media
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</a>
							<div class="collapse" id="navCollapse02">
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
				<a aria-controls="navCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse03" role="button">
					SEO
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse" id="navCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="navCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse04" role="button">
					Advanced
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse" id="navCollapse04">
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
</div>

```html
<ul class="nav nav-nested">
	<li class="nav-item">
		<a aria-controls="navCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse01" role="button">
			Basic Information
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</span>
		</a>
		<div class="collapse show" id="navCollapse01">
			<ul class="nav nav-stacked">
				<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
				<li class="nav-item">
					<a aria-controls="navCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse02" role="button">
						Documents and Media
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</a>
					<div class="collapse" id="navCollapse02">
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
		<a aria-controls="navCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse03" role="button">
			SEO
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</span>
		</a>
		<div class="collapse" id="navCollapse03">
			<ul class="nav nav-stacked">
				<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
			</ul>
		</div>
	</li>
	<li class="nav-item">
		<a aria-controls="navCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse04" role="button">
			Advanced
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</span>
		</a>
		<div class="collapse" id="navCollapse04">
			<ul class="nav nav-stacked">
				<li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
			</ul>
		</div>
	</li>
</ul>
```

### Nav Nested Margins

> Add the `nav-nested-margins` class to the outermost nav to indent each nested nav with margins instead of padding.

<div class="row">
	<div class="col-md-6">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<a aria-controls="navCollapse001" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse001" role="button">
					Basic Information
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse show" id="navCollapse001">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
						<li class="nav-item">
							<a aria-controls="navCollapse002" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse002" role="button">
								Documents and Media
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</a>
							<div class="collapse" id="navCollapse002">
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
				<a aria-controls="navCollapse003" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse003" role="button">
					SEO
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse" id="navCollapse003">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="navCollapse004" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse004" role="button">
					Advanced
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</a>
				<div class="collapse" id="navCollapse004">
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
</div>

```html
<ul class="nav nav-nested-margins">
	<li class="nav-item">
		<a aria-controls="navCollapse001" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#navCollapse001" role="button">
			Basic Information
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</span>
		</a>
		<div class="collapse show" id="navCollapse001">
			<ul class="nav nav-stacked">
				<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
				<li class="nav-item">
					<a aria-controls="navCollapse002" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse002" role="button">
						Documents and Media
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</a>
					<div class="collapse" id="navCollapse002">
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
		<a aria-controls="navCollapse003" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse003" role="button">
			SEO
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</span>
		</a>
		<div class="collapse" id="navCollapse003">
			<ul class="nav nav-stacked">
				<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
			</ul>
		</div>
	</li>
	<li class="nav-item">
		<a aria-controls="navCollapse004" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#navCollapse004" role="button">
			Advanced
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</span>
		</a>
		<div class="collapse" id="navCollapse004">
			<ul class="nav nav-stacked">
				<li class="nav-item"><a class="nav-link" href="#1">Default User Associations</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Staging</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Analytics</a></li>
				<li class="nav-item"><a class="nav-link" href="#1">Maps</a></li>
			</ul>
		</div>
	</li>
</ul>
```
