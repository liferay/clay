---
title: 'Vertical Navigation'
description: 'An alternative navigation pattern that displays navigation items vertically.'
order: 5
lexiconDefinition: 'https://liferay.design/lexicon/core-components/navigation/vertical-nav/'
mainTabURL: 'docs/components/vertical-nav.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Menubar Vertical Expand Md](#css-menubar-vertical-expand-md)
    -   [Menubar Vertical Expand Md with Buttons](#menubar-vertical-expand-md-with-buttons)
-   [Menubar Vertical Expand Lg](#css-menubar-vertical-expand-lg)

</div>
</div>

## Menubar Vertical Expand Md(#css-menubar-vertical-expand-md)

A pattern for collapsing vertical navigations, collapses at 767px. For vertical navigations that don't collapse use <a href="../../../docs/components/nav/markup.html#css-nav-stacked">Nav Stacked</a> or <a href="../../../docs/components/nav/markup.html#css-nav-nested">Nav Nested</a>.

<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<a aria-controls="menubarVerticalMdCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalMdCollapse01" role="button">
		<span class="c-inner" tabindex="-1">
			Details
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</a>
	<div class="collapse menubar-collapse" id="menubarVerticalMdCollapse01">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<a aria-controls="menubarVerticalMdNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalMdNestedCollapse01" role="button">
					<span class="c-inner" tabindex="-1">
						Basic Information
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse show" id="menubarVerticalMdNestedCollapse01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1"><span class="c-inner" tabindex="-1">Details</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Categorization</span></a></li>
						<li class="nav-item">
							<a aria-controls="menubarVerticalMdNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalMdNestedCollapse02" role="button">
								<span class="c-inner" tabindex="-1">
									Documents and Media
									<span class="collapse-icon-closed">
										<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#caret-right" />
										</svg>
									</span>
									<span class="collapse-icon-open">
										<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#caret-bottom" />
										</svg>
									</span>
								</span>
							</a>
							<div class="collapse" id="menubarVerticalMdNestedCollapse02">
								<ul class="nav nav-stacked">
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Details</span></a></li>
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Categorization</span></a></li>
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Documents and Media</span></a></li>
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Site Template</span></a></li>
								</ul>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Site Template</span></a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="menubarVerticalMdNestedCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalMdNestedCollapse03" role="button">
					<span class="c-inner" tabindex="-1">
						SEO
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalMdNestedCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Sitemap</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Robots</span></a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="menubarVerticalMdNestedCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalMdNestedCollapse04" role="button">
					<span class="c-inner" tabindex="-1">
						Advanced
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalMdNestedCollapse04">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Default User Associations</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Staging</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Analytics</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Maps</span></a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>

```html
<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<a
		aria-controls="menubarVerticalMdCollapse01"
		aria-expanded="false"
		class="menubar-toggler"
		data-toggle="collapse"
		href="#menubarVerticalMdCollapse01"
		role="button"
	>
		<span class="c-inner" tabindex="-1">
			Details
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</a>
	<div class="collapse menubar-collapse" id="menubarVerticalMdCollapse01">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<a
					aria-controls="menubarVerticalMdNestedCollapse01"
					aria-expanded="true"
					class="collapse-icon nav-link"
					data-toggle="collapse"
					href="#menubarVerticalMdNestedCollapse01"
					role="button"
				>
					<span class="c-inner" tabindex="-1">
						Basic Information
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-right"
								/>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-bottom"
								/>
							</svg>
						</span>
					</span>
				</a>
				<div
					class="collapse show"
					id="menubarVerticalMdNestedCollapse01"
				>
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="active nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Details</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Categorization</span
								></a
							>
						</li>
						<li class="nav-item">
							<a
								aria-controls="menubarVerticalMdNestedCollapse02"
								aria-expanded="false"
								class="collapsed collapse-icon nav-link"
								data-toggle="collapse"
								href="#menubarVerticalMdNestedCollapse02"
								role="button"
							>
								<span class="c-inner" tabindex="-1">
									Documents and Media
									<span class="collapse-icon-closed">
										<svg
											class="lexicon-icon lexicon-icon-caret-right"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#caret-right"
											/>
										</svg>
									</span>
									<span class="collapse-icon-open">
										<svg
											class="lexicon-icon lexicon-icon-caret-bottom"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#caret-bottom"
											/>
										</svg>
									</span>
								</span>
							</a>
							<div
								class="collapse"
								id="menubarVerticalMdNestedCollapse02"
							>
								<ul class="nav nav-stacked">
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Details</span
											></a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Categorization</span
											></a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Documents and Media</span
											></a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Site Template</span
											></a
										>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Site Template</span
								></a
							>
						</li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a
					aria-controls="menubarVerticalMdNestedCollapse03"
					aria-expanded="false"
					class="collapsed collapse-icon nav-link"
					data-toggle="collapse"
					href="#menubarVerticalMdNestedCollapse03"
					role="button"
				>
					<span class="c-inner" tabindex="-1">
						SEO
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-right"
								/>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-bottom"
								/>
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalMdNestedCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Sitemap</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Robots</span
								></a
							>
						</li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a
					aria-controls="menubarVerticalMdNestedCollapse04"
					aria-expanded="false"
					class="collapsed collapse-icon nav-link"
					data-toggle="collapse"
					href="#menubarVerticalMdNestedCollapse04"
					role="button"
				>
					<span class="c-inner" tabindex="-1">
						Advanced
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-right"
								/>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-bottom"
								/>
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalMdNestedCollapse04">
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Default User Associations</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Staging</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Analytics</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Maps</span
								></a
							>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

### Menubar Vertical Expand Md with Buttons

<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<button aria-controls="menubarVerticalMdButtonsCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" data-target="#menubarVerticalMdButtonsCollapse01" role="button">
		Details
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="collapse menubar-collapse" id="menubarVerticalMdButtonsCollapse01">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<button aria-controls="menubarVerticalMdNestedCollapseButton01" aria-expanded="true" class="btn btn-unstyled collapse-icon nav-link" data-toggle="collapse" data-target="#menubarVerticalMdNestedCollapseButton01" type="button">
					Basic Information
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</button>
				<div class="collapse show" id="menubarVerticalMdNestedCollapseButton01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
						<li class="nav-item">
							<button aria-controls="menubarVerticalMdNestedCollapseButton02" aria-expanded="false" class="btn btn-unstyled collapsed collapse-icon nav-link" data-toggle="collapse" data-target="#menubarVerticalMdNestedCollapseButton02" type="button">
								Documents and Media
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#caret-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#caret-bottom" />
									</svg>
								</span>
							</button>
							<div class="collapse" id="menubarVerticalMdNestedCollapseButton02">
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
				<button aria-controls="menubarVerticalMdNestedCollapseButton03" aria-expanded="false" class="btn btn-unstyled collapsed collapse-icon nav-link" data-toggle="collapse" data-target="#menubarVerticalMdNestedCollapseButton03" type="button">
					SEO
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</button>
				<div class="collapse" id="menubarVerticalMdNestedCollapseButton03">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1">Sitemap</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Robots</a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<button aria-controls="menubarVerticalMdNestedCollapseButton04" aria-expanded="false" class="btn btn-unstyled collapsed collapse-icon nav-link" data-toggle="collapse" data-target="#menubarVerticalMdNestedCollapseButton04" type="button">
					Advanced
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
							<use xlink:href="{{rootPath}}/images/icons/icons.svg#caret-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use xlink:href="{{rootPath}}/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</button>
				<div class="collapse" id="menubarVerticalMdNestedCollapseButton04">
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

```html
<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<button
		aria-controls="menubarVerticalMdButtonsCollapse01"
		aria-expanded="false"
		class="menubar-toggler"
		data-toggle="collapse"
		data-target="#menubarVerticalMdButtonsCollapse01"
		role="button"
	>
		Details
		<svg
			class="lexicon-icon lexicon-icon-caret-bottom"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div
		class="collapse menubar-collapse"
		id="menubarVerticalMdButtonsCollapse01"
	>
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<button
					aria-controls="menubarVerticalMdNestedCollapseButton01"
					aria-expanded="true"
					class="btn btn-unstyled collapse-icon nav-link"
					data-toggle="collapse"
					data-target="#menubarVerticalMdNestedCollapseButton01"
					type="button"
				>
					Basic Information
					<span class="collapse-icon-closed">
						<svg
							class="lexicon-icon lexicon-icon-caret-right"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#caret-right"
							/>
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg
							class="lexicon-icon lexicon-icon-caret-bottom"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#caret-bottom"
							/>
						</svg>
					</span>
				</button>
				<div
					class="collapse show"
					id="menubarVerticalMdNestedCollapseButton01"
				>
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="active nav-link" href="#1">Details</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1">Categorization</a>
						</li>
						<li class="nav-item">
							<button
								aria-controls="menubarVerticalMdNestedCollapseButton02"
								aria-expanded="false"
								class="btn btn-unstyled collapsed collapse-icon nav-link"
								data-toggle="collapse"
								data-target="#menubarVerticalMdNestedCollapseButton02"
								type="button"
							>
								Documents and Media
								<span class="collapse-icon-closed">
									<svg
										class="lexicon-icon lexicon-icon-caret-right"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#caret-right"
										/>
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg
										class="lexicon-icon lexicon-icon-caret-bottom"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#caret-bottom"
										/>
									</svg>
								</span>
							</button>
							<div
								class="collapse"
								id="menubarVerticalMdNestedCollapseButton02"
							>
								<ul class="nav nav-stacked">
									<li class="nav-item">
										<a class="nav-link" href="#1"
											>Details</a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											>Categorization</a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											>Documents and Media</a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											>Site Template</a
										>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1">Site Template</a>
						</li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<button
					aria-controls="menubarVerticalMdNestedCollapseButton03"
					aria-expanded="false"
					class="btn btn-unstyled collapsed collapse-icon nav-link"
					data-toggle="collapse"
					data-target="#menubarVerticalMdNestedCollapseButton03"
					type="button"
				>
					SEO
					<span class="collapse-icon-closed">
						<svg
							class="lexicon-icon lexicon-icon-caret-right"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#caret-right"
							/>
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg
							class="lexicon-icon lexicon-icon-caret-bottom"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#caret-bottom"
							/>
						</svg>
					</span>
				</button>
				<div
					class="collapse"
					id="menubarVerticalMdNestedCollapseButton03"
				>
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="nav-link" href="#1">Sitemap</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1">Robots</a>
						</li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<button
					aria-controls="menubarVerticalMdNestedCollapseButton04"
					aria-expanded="false"
					class="btn btn-unstyled collapsed collapse-icon nav-link"
					data-toggle="collapse"
					data-target="#menubarVerticalMdNestedCollapseButton04"
					type="button"
				>
					Advanced
					<span class="collapse-icon-closed">
						<svg
							class="lexicon-icon lexicon-icon-caret-right"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="{{rootPath}}/images/icons/icons.svg#caret-right"
							/>
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg
							class="lexicon-icon lexicon-icon-caret-bottom"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="{{rootPath}}/images/icons/icons.svg#caret-bottom"
							/>
						</svg>
					</span>
				</button>
				<div
					class="collapse"
					id="menubarVerticalMdNestedCollapseButton04"
				>
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="nav-link" href="#1"
								>Default User Associations</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1">Staging</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1">Analytics</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1">Maps</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

## Menubar Vertical Expand Lg(#css-menubar-vertical-expand-lg)

Collapses at 991px.

<nav class="menubar menubar-transparent menubar-vertical-expand-lg">
	<a aria-controls="menubarVerticalLgCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalLgCollapse01" role="button">
		<span class="c-inner" tabindex="-1">
			Details
			<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</a>
	<div class="collapse menubar-collapse" id="menubarVerticalLgCollapse01">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<a aria-controls="menubarVerticalLgNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse01" role="button">
					<span class="c-inner" tabindex="-1">
						Basic Information
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse show" id="menubarVerticalLgNestedCollapse01">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="active nav-link" href="#1"><span class="c-inner" tabindex="-1">Details</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Categorization</span></a></li>
						<li class="nav-item">
							<a aria-controls="menubarVerticalLgNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse02" role="button">
								<span class="c-inner" tabindex="-1">
									Documents and Media
									<span class="collapse-icon-closed">
										<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#caret-right" />
										</svg>
									</span>
									<span class="collapse-icon-open">
										<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#caret-bottom" />
										</svg>
									</span>
								</span>
							</a>
							<div class="collapse" id="menubarVerticalLgNestedCollapse02">
								<ul class="nav nav-stacked">
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Details</span></a></li>
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Categorization</span></a></li>
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Documents and Media</span></a></li>
									<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Site Template</span></a></li>
								</ul>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Site Template</span></a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="menubarVerticalLgNestedCollapse03" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse03" role="button">
					<span class="c-inner" tabindex="-1">
						SEO
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalLgNestedCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Sitemap</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Robots</span></a></li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a aria-controls="menubarVerticalLgNestedCollapse04" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse04" role="button">
					<span class="c-inner" tabindex="-1">
						Advanced
						<span class="collapse-icon-closed">
							<svg class="lexicon-icon lexicon-icon-caret-right" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-right" />
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalLgNestedCollapse04">
					<ul class="nav nav-stacked">
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Default User Associations</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Staging</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Analytics</span></a></li>
						<li class="nav-item"><a class="nav-link" href="#1"><span class="c-inner" tabindex="-1">Maps</span></a></li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>

```html
<nav class="menubar menubar-transparent menubar-vertical-expand-lg">
	<a
		aria-controls="menubarVerticalLgCollapse01"
		aria-expanded="false"
		class="menubar-toggler"
		data-toggle="collapse"
		href="#menubarVerticalLgCollapse01"
		role="button"
	>
		<span class="c-inner" tabindex="-1">
			Details
			<svg
				class="lexicon-icon lexicon-icon-caret-bottom"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#caret-bottom" />
			</svg>
		</span>
	</a>
	<div class="collapse menubar-collapse" id="menubarVerticalLgCollapse01">
		<ul class="nav nav-nested-margins">
			<li class="nav-item">
				<a
					aria-controls="menubarVerticalLgNestedCollapse01"
					aria-expanded="true"
					class="collapse-icon nav-link"
					data-toggle="collapse"
					href="#menubarVerticalLgNestedCollapse01"
					role="button"
				>
					<span class="c-inner" tabindex="-1">
						Basic Information
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-right"
								/>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-bottom"
								/>
							</svg>
						</span>
					</span>
				</a>
				<div
					class="collapse show"
					id="menubarVerticalLgNestedCollapse01"
				>
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="active nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Details</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Categorization</span
								></a
							>
						</li>
						<li class="nav-item">
							<a
								aria-controls="menubarVerticalLgNestedCollapse02"
								aria-expanded="false"
								class="collapsed collapse-icon nav-link"
								data-toggle="collapse"
								href="#menubarVerticalLgNestedCollapse02"
								role="button"
							>
								<span class="c-inner" tabindex="-1">
									Documents and Media
									<span class="collapse-icon-closed">
										<svg
											class="lexicon-icon lexicon-icon-caret-right"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#caret-right"
											/>
										</svg>
									</span>
									<span class="collapse-icon-open">
										<svg
											class="lexicon-icon lexicon-icon-caret-bottom"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#caret-bottom"
											/>
										</svg>
									</span>
								</span>
							</a>
							<div
								class="collapse"
								id="menubarVerticalLgNestedCollapse02"
							>
								<ul class="nav nav-stacked">
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Details</span
											></a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Categorization</span
											></a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Documents and Media</span
											></a
										>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#1"
											><span class="c-inner" tabindex="-1"
												>Site Template</span
											></a
										>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Site Template</span
								></a
							>
						</li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a
					aria-controls="menubarVerticalLgNestedCollapse03"
					aria-expanded="false"
					class="collapsed collapse-icon nav-link"
					data-toggle="collapse"
					href="#menubarVerticalLgNestedCollapse03"
					role="button"
				>
					<span class="c-inner" tabindex="-1">
						SEO
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-right"
								/>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-bottom"
								/>
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalLgNestedCollapse03">
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Sitemap</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Robots</span
								></a
							>
						</li>
					</ul>
				</div>
			</li>
			<li class="nav-item">
				<a
					aria-controls="menubarVerticalLgNestedCollapse04"
					aria-expanded="false"
					class="collapsed collapse-icon nav-link"
					data-toggle="collapse"
					href="#menubarVerticalLgNestedCollapse04"
					role="button"
				>
					<span class="c-inner" tabindex="-1">
						Advanced
						<span class="collapse-icon-closed">
							<svg
								class="lexicon-icon lexicon-icon-caret-right"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-right"
								/>
							</svg>
						</span>
						<span class="collapse-icon-open">
							<svg
								class="lexicon-icon lexicon-icon-caret-bottom"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#caret-bottom"
								/>
							</svg>
						</span>
					</span>
				</a>
				<div class="collapse" id="menubarVerticalLgNestedCollapse04">
					<ul class="nav nav-stacked">
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Default User Associations</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Staging</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Analytics</span
								></a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#1"
								><span class="c-inner" tabindex="-1"
									>Maps</span
								></a
							>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</nav>
```
