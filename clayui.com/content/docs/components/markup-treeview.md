---
title: 'Treeview'
description: 'A tree view is a component-based on nodes that are shown in a hierarchical structure.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/tree-view/'
mainTabURL: 'docs/components/treeview.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Treeview](#css-treeview)

    -   [Group](#css-treeview-group)
    -   [Item](#css-treeview-item)
    -   [Link](#css-treeview-link)
    -   [Link Disabled](#css-treeview-link-disabled)
    -   [Component Expander](#css-treeview-component-expander)
    -   [Component Action](#css-treeview-component-action)
    -   [Dragging](#css-treeview-dragging)
    -   [Dropping Bottom](#css-treeview-dropping-bottom)
    -   [Dropping Top](#css-treeview-dropping-top)
    -   [Dropping Middle](#css-treeview-dropping-middle)

-   [Variations](#css-variations)
    -   [Expander on Hover](#css-treeview-expander-on-hover)
    -   [Quick Actions on Hover](#css-treeview-show-quick-actions-on-hover)
    -   [Light](#css-treeview-light)
    -   [Dark](#css-treeview-dark)

</div>
</div>

## Treeview(#css-treeview)

The treeview provides a way to display information in a hierarchical structure by using collapsible items (nodes). You can navigate between these items using either your mouse device or keyboard. The most common example of a treeview is a folder structure for file systems, but it can be used for showing any hierarchical relationships.

<div class="clay-site-alert alert alert-info">
	See <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-2/treeview-2a.html" rel="noreferrer noopener" target="_blank">https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-2/treeview-2a.html</a> for accessibility patterns.
</div>

<div class="clay-site-alert alert alert-warning">
	Treeview Link indentation must be provided by javascript through inline styles, use the styles `padding-left: 24px;` on `.treeview-link` and `margin-left: -24px` on `.treeview-link > .c-inner`. Increase the indentation for each level by increasing or decreasing `padding-left` or `margin-left` by 24px.
</div>

<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewCollapse01" aria-expanded="true" class="treeview-link" data-target="#treeviewCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div aria-controls="treeviewCollapse02" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewCollapse02" data-toggle="collapse" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col">
									<button aria-controls="treeviewCollapse02" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewCollapse02" data-toggle="collapse" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-down" />
											</svg>
											<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-right" />
											</svg>
										</span>
									</button>
								</span>
								<span class="autofit-col">
									<span class="component-icon">
										<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#folder" />
										</svg>
									</span>
								</span>
								<span class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span class="text-truncate-inline" title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"><span class="text-truncate">Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span></span>
									</span>
								</span>
							</span>
						</span>
					</div>
					<div class="collapse" id="treeviewCollapse02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Details"><span class="text-truncate">Details</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Categorization"><span class="text-truncate">Categorization</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Site Template"><span class="text-truncate">Site Template</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewCollapse03" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewCollapse03" data-toggle="collapse" role="treeitem" tabindex="-1">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewCollapse03" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewCollapse03" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Repositories"><span class="text-truncate">Repositories</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="treeviewCollapse03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Site Map"><span class="text-truncate">Sitemap</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Robots"><span class="text-truncate">Robots</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewCollapse04" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewCollapse04" data-toggle="collapse" role="treeitem" tabindex="-1">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewCollapse04" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewCollapse04" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="treeviewCollapse04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Default User Associations"><span class="text-truncate">Default User Associations</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Staging"><span class="text-truncate">Staging</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Analytics"><span class="text-truncate">Analytics</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Maps"><span class="text-truncate">Maps</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewCollapse01"
			aria-expanded="true"
			class="treeview-link"
			data-target="#treeviewCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="treeviewCollapse01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewCollapse01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Liferay Drive"
								><span class="text-truncate"
									>Liferay Drive</span
								></span
							>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						aria-controls="treeviewCollapse02"
						aria-expanded="false"
						class="collapsed treeview-link"
						data-target="#treeviewCollapse02"
						data-toggle="collapse"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col">
									<button
										aria-controls="treeviewCollapse02"
										aria-expanded="false"
										class="btn btn-monospaced component-expander"
										data-target="#treeviewCollapse02"
										data-toggle="collapse"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-angle-down"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-down"
												/>
											</svg>
											<svg
												class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-right"
												/>
											</svg>
										</span>
									</button>
								</span>
								<span class="autofit-col">
									<span class="component-icon">
										<svg
											class="lexicon-icon lexicon-icon-folder"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#folder"
											/>
										</svg>
									</span>
								</span>
								<span class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span
											class="text-truncate-inline"
											title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"
											><span class="text-truncate"
												>Liferay Drive
												(ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span
											></span
										>
									</span>
								</span>
							</span>
						</span>
					</div>
					<div class="collapse" id="treeviewCollapse02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Details"
														><span
															class="text-truncate"
															>Details</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Categorization"
														><span
															class="text-truncate"
															>Categorization</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Documents and Media"
														><span
															class="text-truncate"
															>Documents and
															Media</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Site Template"
														><span
															class="text-truncate"
															>Site Template</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewCollapse03"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#treeviewCollapse03"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="treeviewCollapse03"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewCollapse03"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Repositories"
								><span class="text-truncate"
									>Repositories</span
								></span
							>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="treeviewCollapse03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Site Map"
											><span class="text-truncate"
												>Sitemap</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Robots"
											><span class="text-truncate"
												>Robots</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewCollapse04"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#treeviewCollapse04"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="treeviewCollapse04"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewCollapse04"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Documents and Media"
								><span class="text-truncate"
									>Documents and Media</span
								></span
							>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="treeviewCollapse04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Default User Associations"
											><span class="text-truncate"
												>Default User Associations</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Staging"
											><span class="text-truncate"
												>Staging</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Analytics"
											><span class="text-truncate"
												>Analytics</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Maps"
											><span class="text-truncate"
												>Maps</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Treeview Group(#css-treeview-group)

The class `treeview-group` must be applied to all nested `ul` elements inside `treeview`. This class helps provide the proper spacing for nested `treeview-link`s.

```html
<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewExpanderCollapse01"
			aria-expanded="false"
			class="treeview-link"
			data-target="#treeviewExpanderCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			...
		</div>
		<div class="collapse" id="treeviewExpanderCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
							><span class="component-text">Tree Item</span></span
						>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Treeview Item(#css-treeview-item)

The class `treeview-item` must be applied to all `li` elements. This class helps provide the proper spacing for nested `treeview-link`s.

```html
<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewExpanderCollapse01"
			aria-expanded="false"
			class="treeview-link"
			data-target="#treeviewExpanderCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			...
		</div>
	</li>
</ul>
```

### Treeview Link(#css-treeview-link)

This is the container for all nodes inside `treeview`. If there are auxiliary controls inside the `treeview-link` (e.g., `a` or `button`) it is recommended to use a `div` element with the `tabindex` attribute.

```html
<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewExpanderCollapse01"
			aria-expanded="false"
			class="treeview-link"
			data-target="#treeviewExpanderCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			...
		</div>
	</li>
</ul>
```

### Treeview Link Disabled(#css-treeview-link-disabled)

The modifier class `disabled` adds disabled styles to `treeview-link`. The class does not add disabled styles to form elements, links, or buttons inside. Those must be disabled individually.

<div class="row">
	<div class="col-md-4">
		<ul class="treeview treeview-light treeview-nested show-quick-actions-on-hover" role="tree">
			<li class="treeview-item" role="none">
				<div aria-controls="treeviewItemDisabledCollapse02" aria-expanded="true" class="treeview-link disabled hover" data-target="#treeviewItemDisabledCollapse02" data-toggle="collapse" role="treeitem" tabindex="-1">
					<span class="c-inner" tabindex="-2">
						<span class="autofit-row">
							<span class="autofit-col">
								<button aria-controls="treeviewItemDisabledCollapse02" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewItemDisabledCollapse02" data-toggle="collapse" type="button">
									<span class="c-inner" tabindex="-2">
										<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#angle-down" />
										</svg>
										<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#angle-right" />
										</svg>
									</span>
								</button>
							</span>
							<span class="autofit-col">
								<span class="custom-control custom-checkbox">
									<label>
										<input class="custom-control-input" disabled tabindex="-1" type="checkbox">
										<span class="custom-control-label"></span>
									</label>
								</span>
							</span>
							<span class="autofit-col">
								<span class="component-icon">
									<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#folder" />
									</svg>
								</span>
							</span>
							<span class="autofit-col autofit-col-expand">
								<span class="component-text">
									<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
								</span>
							</span>
							<span class="autofit-col">
								<button class="btn btn-monospaced component-action quick-action-item" disabled tabindex="-1" type="button">
									<span class="c-inner" tabindex="-2">
										<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#times-circle-full" />
										</svg>
									</span>
								</button>
							</span>
							<span class="autofit-col">
								<button class="btn btn-monospaced component-action quick-action-item" disabled tabindex="-1" type="button">
									<span class="c-inner" tabindex="-2">
										<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
										</svg>
									</span>
								</button>
							</span>
						</span>
					</span>
				</div>
				<div class="collapse show" id="treeviewItemDisabledCollapse02">
					<ul class="treeview-group" role="group">
						<li class="treeview-item" role="none">
							<a class="treeview-link disabled" href="#1" role="treeitem" tabindex="-1" style="padding-left:24px;">
								<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Anchor 1</span></span>
							</a>
						</li>
						<li class="treeview-item" role="none">
							<a class="treeview-link disabled" href="#1" role="treeitem" tabindex="-1" style="padding-left:24px;">
								<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Anchor 2</span></span>
							</a>
						</li>
						<li class="treeview-item" role="none">
							<a class="treeview-link disabled" href="#1" role="treeitem" tabindex="-1" style="padding-left:24px;">
								<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Anchor 3</span></span>
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
	<div class="col-md-4">
		<div class="bg-dark">
			<ul class="treeview treeview-dark treeview-nested show-quick-actions-on-hover" role="tree">
				<li class="treeview-item" role="none">
					<div aria-controls="treeviewItemDisabledDarkCollapse01" aria-expanded="true" class="treeview-link disabled hover" data-target="#treeviewItemDisabledDarkCollapse01" data-toggle="collapse" role="treeitem" tabindex="-1">
						<span class="c-inner" tabindex="-2">
							<span class="autofit-row">
								<span class="autofit-col">
									<button aria-controls="treeviewItemDisabledDarkCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewItemDisabledDarkCollapse01" data-toggle="collapse" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-down" />
											</svg>
											<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-right" />
											</svg>
										</span>
									</button>
								</span>
								<span class="autofit-col">
									<span class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" disabled tabindex="-1" type="checkbox">
											<span class="custom-control-label"></span>
										</label>
									</span>
								</span>
								<span class="autofit-col">
									<span class="component-icon">
										<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#folder" />
										</svg>
									</span>
								</span>
								<span class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
									</span>
								</span>
								<span class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" disabled tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</span>
								<span class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" disabled tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</span>
							</span>
						</span>
					</div>
					<div class="collapse show" id="treeviewItemDisabledDarkCollapse01">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<button class="treeview-link" disabled role="treeitem" tabindex="-1" type="button" style="padding-left:24px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Button 1</span></span>
								</button>
							</li>
							<li class="treeview-item" role="none">
								<button class="treeview-link" disabled role="treeitem" tabindex="-1"  type="button" style="padding-left:24px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Button 2</span></span>
								</button>
							</li>
							<li class="treeview-item" role="none">
								<button class="treeview-link" disabled role="treeitem" tabindex="-1"  type="button" style="padding-left:24px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Button 3</span></span>
								</button>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

```html
<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewItemDisabledCollapse02"
			aria-expanded="true"
			class="treeview-link disabled hover"
			data-target="#treeviewItemDisabledCollapse02"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			...
		</div>
	</li>
</ul>

<div class="bg-dark">
	<ul class="treeview treeview-dark treeview-nested" role="tree">
		<li class="treeview-item" role="none">
			<div
				aria-controls="treeviewItemDisabledDarkCollapse01"
				aria-expanded="true"
				class="treeview-link disabled hover"
				data-target="#treeviewItemDisabledDarkCollapse01"
				data-toggle="collapse"
				role="treeitem"
				tabindex="-1"
			>
				...
			</div>
		</li>
	</ul>
</div>
```

### Component Expander(#css-treeview-component-expander)

The expander is used to expand or collapse the nodes and serves as an indicator for those states. The class `component-expander` marks the button as the toggle. The class `component-expanded-d-none` on `lexicon-icon` hides the icon when tree node is expanded.

<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewExpanderCollapse01" aria-expanded="false" class="treeview-link" data-target="#treeviewExpanderCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewExpanderCollapse01" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewExpanderCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="treeviewExpanderCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Tree Item</span></span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<button
	aria-controls="treeviewExpanderCollapse01"
	aria-expanded="false"
	class="btn btn-monospaced component-expander"
	data-target="#treeviewExpanderCollapse01"
	data-toggle="collapse"
	tabindex="-1"
	type="button"
>
	<span class="c-inner" tabindex="-2">
		<svg
			class="lexicon-icon lexicon-icon-angle-down"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#angle-down" />
		</svg>
		<svg
			class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#angle-right" />
		</svg>
	</span>
</button>
```

### Component Action(#css-treeview-component-action)

The action button(s) are monospaced buttons used to supply additional features to a tree node, such as removal or a dropdown.

<ul class="treeview treeview-light treeview-nested" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewActionButtonCollapse01" aria-expanded="true" class="treeview-link" data-target="#treeviewActionButtonCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewActionButtonCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewActionButtonCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewActionButtonCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Tree Item</span></span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<button class="btn btn-monospaced component-action" tabindex="-1" type="button">
	<span class="c-inner" tabindex="-2">
		<svg
			class="lexicon-icon lexicon-icon-ellipsis-v"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
		</svg>
	</span>
</button>
```

### Treeview Dragging(#css-treeview-dragging)

The modifier class `treeview-dragging` displays an indicator showing the item being dragged.

<div class="treeview-dragging">Liferay Drive</div>

### Treeview Dropping Bottom(#css-treeview-dropping-bottom)

The modifier class `treeview-dropping-bottom` adds a visual indicator to the bottom of `treeview-link` to show where a dragged `treeview-link` will be inserted.

<ul class="treeview treeview-light treeview-nested show-quick-actions-on-hover" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewDroppoingBottomCollapse01" aria-expanded="true" class="treeview-dropping-bottom treeview-link" data-target="#treeviewDroppoingBottomCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewDroppoingBottomCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewDroppoingBottomCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewDroppoingBottomCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Tree Item</span></span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul
	class="treeview treeview-light treeview-nested show-quick-actions-on-hover"
	role="tree"
>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewDroppoingBottomCollapse01"
			aria-expanded="true"
			class="treeview-dropping-bottom treeview-link"
			data-target="#treeviewDroppoingBottomCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="treeviewDroppoingBottomCollapse01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewDroppoingBottomCollapse01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Liferay Drive"
								><span class="text-truncate"
									>Liferay Drive</span
								></span
							>
						</span>
					</span>
					<span class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-times-circle-full"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times-circle-full"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-ellipsis-v"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#ellipsis-v"
									/>
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewDroppoingBottomCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
							><span class="component-text">Tree Item</span></span
						>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Treeview Dropping Top(#css-treeview-dropping-top)

The modifier class `treeview-dropping-top` adds a visual indicator to the bottom of `treeview-link` to show where a dragged `treeview-link` will be inserted.

<ul class="treeview treeview-light treeview-nested show-quick-actions-on-hover" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewDroppingTopCollapse01" aria-expanded="true" class="treeview-dropping-top treeview-link" data-target="#treeviewDroppingTopCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewDroppingTopCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewDroppingTopCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewDroppingTopCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Tree Item</span></span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul
	class="treeview treeview-light treeview-nested show-quick-actions-on-hover"
	role="tree"
>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewDroppingTopCollapse01"
			aria-expanded="true"
			class="treeview-dropping-top treeview-link"
			data-target="#treeviewDroppingTopCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="treeviewDroppingTopCollapse01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewDroppingTopCollapse01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Liferay Drive"
								><span class="text-truncate"
									>Liferay Drive</span
								></span
							>
						</span>
					</span>
					<span class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-times-circle-full"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times-circle-full"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-ellipsis-v"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#ellipsis-v"
									/>
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewDroppingTopCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
							><span class="component-text">Tree Item</span></span
						>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Treeview Dropping Middle(#css-treeview-dropping-middle)

The modifier class `treeview-dropping-middle` adds a visual indicator around the `treeview-link` to show where a dragged `treeview-link` will be nested.

<ul class="treeview treeview-light treeview-nested show-quick-actions-on-hover" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewDroppingMiddleCollapse01" aria-expanded="true" class="treeview-dropping-middle treeview-link" data-target="#treeviewDroppingMiddleCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="treeviewDroppingMiddleCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewDroppingMiddleCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewDroppingMiddleCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;"><span class="component-text">Tree Item</span></span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul
	class="treeview treeview-light treeview-nested show-quick-actions-on-hover"
	role="tree"
>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewDroppingMiddleCollapse01"
			aria-expanded="true"
			class="treeview-dropping-middle treeview-link"
			data-target="#treeviewDroppingMiddleCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="treeviewDroppingMiddleCollapse01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewDroppingMiddleCollapse01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Liferay Drive"
								><span class="text-truncate"
									>Liferay Drive</span
								></span
							>
						</span>
					</span>
					<span class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-times-circle-full"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times-circle-full"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-ellipsis-v"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#ellipsis-v"
									/>
								</svg>
							</span>
						</button>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="treeviewDroppingMiddleCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
							><span class="component-text">Tree Item</span></span
						>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

## Variations(#css-variations)

### Show Component Expander on Hover(#css-treeview-expander-on-hover)

The class `show-component-expander-on-hover` displays the `component-expander` when the mouse hovers over the `treeview` component.

<ul class="show-component-expander-on-hover treeview treeview-nested treeview-light" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="showComponentExpanderCollapse01" aria-expanded="true" class="treeview-link" data-target="#showComponentExpanderCollapse01" data-toggle="collapse" role="treeitem" tabindex="0">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="showComponentExpanderCollapse01" aria-expanded="true" class="btn btn-monospaced component-expander show" data-target="#showComponentExpanderCollapse01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" data-toggle="tooltip" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="showComponentExpanderCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div aria-controls="showComponentExpanderCollapse02" aria-expanded="false" class="collapsed treeview-link" data-target="#showComponentExpanderCollapse02" data-toggle="collapse" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col">
									<button aria-controls="showComponentExpanderCollapse02" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#showComponentExpanderCollapse02" data-toggle="collapse" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-down" />
											</svg>
											<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-right" />
											</svg>
										</span>
									</button>
								</span>
								<span class="autofit-col">
									<span class="component-icon">
										<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#folder" />
										</svg>
									</span>
								</span>
								<span class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span class="text-truncate-inline" data-toggle="tooltip" title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"><span class="text-truncate">Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span></span>
									</span>
								</span>
							</span>
						</span>
					</div>
					<div class="collapse" id="showComponentExpanderCollapse02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline"><span class="text-truncate" data-toggle="tooltip" title="Details">Details</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Categorization"><span class="text-truncate">Categorization</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<span class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Site Template"><span class="text-truncate">Site Template</span></span></span>
											</span>
										</span>
									</span>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="showComponentExpanderCollapse03" aria-expanded="false" class="collapsed treeview-link" data-target="#showComponentExpanderCollapse03" data-toggle="collapse" role="treeitem" tabindex="-1">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="showComponentExpanderCollapse03" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#showComponentExpanderCollapse03" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" data-toggle="tooltip" title="Repositories"><span class="text-truncate">Repositories</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="showComponentExpanderCollapse03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Sitemap"><span class="text-truncate">Sitemap</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Robots"><span class="text-truncate">Robots</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="showComponentExpanderCollapse04" aria-expanded="false" class="collapsed treeview-link" data-target="#showComponentExpanderCollapse04" data-toggle="collapse" role="treeitem" tabindex="-1">
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button aria-controls="showComponentExpanderCollapse04" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#showComponentExpanderCollapse04" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" data-toggle="tooltip" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="showComponentExpanderCollapse04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Default User Associations"><span class="text-truncate">Default User Associations</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Staging"><span class="text-truncate">Staging</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Analytics"><span class="text-truncate">Analytics</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<span class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Maps"><span class="text-truncate">Maps</span></span></span>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul
	class="show-component-expander-on-hover treeview treeview-nested treeview-light"
	role="tree"
>
	<li class="treeview-item" role="none">
		<div
			aria-controls="showComponentExpanderCollapse01"
			aria-expanded="true"
			class="treeview-link"
			data-target="#showComponentExpanderCollapse01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="showComponentExpanderCollapse01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander show"
							data-target="#showComponentExpanderCollapse01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								data-toggle="tooltip"
								title="Liferay Drive"
								><span class="text-truncate"
									>Liferay Drive</span
								></span
							>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse show" id="showComponentExpanderCollapse01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						aria-controls="showComponentExpanderCollapse02"
						aria-expanded="false"
						class="collapsed treeview-link"
						data-target="#showComponentExpanderCollapse02"
						data-toggle="collapse"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col">
									<button
										aria-controls="showComponentExpanderCollapse02"
										aria-expanded="false"
										class="btn btn-monospaced component-expander"
										data-target="#showComponentExpanderCollapse02"
										data-toggle="collapse"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-angle-down"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-down"
												/>
											</svg>
											<svg
												class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-right"
												/>
											</svg>
										</span>
									</button>
								</span>
								<span class="autofit-col">
									<span class="component-icon">
										<svg
											class="lexicon-icon lexicon-icon-folder"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#folder"
											/>
										</svg>
									</span>
								</span>
								<span class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"
											><span class="text-truncate"
												>Liferay Drive
												(ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span
											></span
										>
									</span>
								</span>
							</span>
						</span>
					</div>
					<div class="collapse" id="showComponentExpanderCollapse02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														><span
															class="text-truncate"
															data-toggle="tooltip"
															title="Details"
															>Details</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														data-toggle="tooltip"
														title="Categorization"
														><span
															class="text-truncate"
															>Categorization</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														data-toggle="tooltip"
														title="Documents and Media"
														><span
															class="text-truncate"
															>Documents and
															Media</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<span
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														data-toggle="tooltip"
														title="Site Template"
														><span
															class="text-truncate"
															>Site Template</span
														></span
													></span
												>
											</span>
										</span>
									</span>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="showComponentExpanderCollapse03"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#showComponentExpanderCollapse03"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="showComponentExpanderCollapse03"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#showComponentExpanderCollapse03"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								data-toggle="tooltip"
								title="Repositories"
								><span class="text-truncate"
									>Repositories</span
								></span
							>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="showComponentExpanderCollapse03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Sitemap"
											><span class="text-truncate"
												>Sitemap</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Robots"
											><span class="text-truncate"
												>Robots</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="showComponentExpanderCollapse04"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#showComponentExpanderCollapse04"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<span class="c-inner" tabindex="-2">
				<span class="autofit-row">
					<span class="autofit-col">
						<button
							aria-controls="showComponentExpanderCollapse04"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#showComponentExpanderCollapse04"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</span>
					<span class="autofit-col">
						<span class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</span>
					</span>
					<span class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								data-toggle="tooltip"
								title="Documents and Media"
								><span class="text-truncate"
									>Documents and Media</span
								></span
							>
						</span>
					</span>
				</span>
			</span>
		</div>
		<div class="collapse" id="showComponentExpanderCollapse04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Default User Associations"
											><span class="text-truncate"
												>Default User Associations</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Staging"
											><span class="text-truncate"
												>Staging</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Analytics"
											><span class="text-truncate"
												>Analytics</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<span
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<span class="autofit-row">
								<span class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Maps"
											><span class="text-truncate"
												>Maps</span
											></span
										></span
									>
								</span>
							</span>
						</span>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Show Quick Actions on Hover(#css-treeview-show-quick-actions-on-hover)

The class `show-quick-actions-on-hover` on `treeview` will hide all `quick-action-item`'s except when `treeview-link` is hovered or focused.

<ul class="treeview treeview-nested treeview-light show-quick-actions-on-hover" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewCollapseCheckboxHoverBtn01" aria-expanded="true" class="treeview-link show" data-target="#treeviewCollapseCheckboxHoverBtn01" data-toggle="collapse" role="treeitem" tabindex="0">
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button aria-controls="treeviewCollapseCheckboxHoverBtn01" aria-expanded="true" class="btn btn-monospaced component-expander show" data-target="#treeviewCollapseCheckboxHoverBtn01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" tabindex="-1" type="checkbox" />
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-shrink">
									<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
								</span>
								<span class="autofit-col">
									<button class="btn btn-secondary quick-action-item ml-4" tabindex="-1" type="button"><span class="c-inner" tabindex="-2">Check child nodes</span></button>
								</span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse show" id="treeviewCollapseCheckboxHoverBtn01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div aria-controls="treeviewCollapseCheckboxHoverBtn02" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewCollapseCheckboxHoverBtn02" data-toggle="collapse" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<button aria-controls="treeviewCollapseCheckboxHoverBtn02" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewCollapseCheckboxHoverBtn02" data-toggle="collapse" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-down" />
											</svg>
											<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-right" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col">
									<div class="component-icon">
										<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#folder" />
										</svg>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span class="autofit-row">
											<span class="autofit-col autofit-col-shrink">
												<span class="text-truncate-inline" title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"><span class="text-truncate">Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span></span>
											</span>
											<span class="autofit-col">
												<button class="btn btn-secondary quick-action-item ml-4" tabindex="-1" type="button"><span class="c-inner" tabindex="-2">Check child nodes</span></button>
											</span>
										</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="collapse" id="treeviewCollapseCheckboxHoverBtn02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline"><span class="text-truncate" title="Details">Details</span></span></span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Categorization"><span class="text-truncate">Categorization</span></span></span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span></span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Site Template"><span class="text-truncate">Site Template</span></span></span>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewCollapseCheckboxHoverBtn03" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewCollapseCheckboxHoverBtn03" data-toggle="collapse" role="treeitem" tabindex="-1">
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button aria-controls="treeviewCollapseCheckboxHoverBtn03" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewCollapseCheckboxHoverBtn03" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" tabindex="-1" type="checkbox" />
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-shrink">
									<span class="text-truncate-inline" data-toggle="tooltip" title="Repositories"><span class="text-truncate">Repositories</span></span>
								</span>
								<span class="autofit-col">
									<button class="btn btn-secondary quick-action-item ml-4" tabindex="-1" type="button"><span class="c-inner" tabindex="-2">Check child nodes</span></button>
								</span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewCollapseCheckboxHoverBtn03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Sitemap"><span class="text-truncate">Sitemap</span></span></span>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Robots"><span class="text-truncate">Robots</span></span></span>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewCollapseCheckboxHoverBtn04" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewCollapseCheckboxHoverBtn04" data-toggle="collapse" role="treeitem" tabindex="-1">
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button aria-controls="treeviewCollapseCheckboxHoverBtn04" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewCollapseCheckboxHoverBtn04" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" tabindex="-1" type="checkbox" />
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-shrink">
									<span class="text-truncate-inline" data-toggle="tooltip" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span>
								</span>
								<span class="autofit-col">
									<button class="btn btn-secondary quick-action-item ml-4" tabindex="-1" type="button"><span class="c-inner" tabindex="-2">Check child nodes</span></button>
								</span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewCollapseCheckboxHoverBtn04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Default User Associations"><span class="text-truncate">Default User Associations</span></span></span>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Staging"><span class="text-truncate">Staging</span></span></span>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Analytics"><span class="text-truncate">Analytics</span></span></span>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" data-toggle="tooltip" title="Maps"><span class="text-truncate">Maps</span></span></span>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul
	class="treeview treeview-nested treeview-light show-quick-actions-on-hover"
	role="tree"
>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewCollapseCheckboxHoverBtn01"
			aria-expanded="true"
			class="treeview-link show"
			data-target="#treeviewCollapseCheckboxHoverBtn01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button
							aria-controls="treeviewCollapseCheckboxHoverBtn01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander show"
							data-target="#treeviewCollapseCheckboxHoverBtn01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									tabindex="-1"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-shrink">
									<span
										class="text-truncate-inline"
										title="Liferay Drive"
										><span class="text-truncate"
											>Liferay Drive</span
										></span
									>
								</span>
								<span class="autofit-col">
									<button
										class="btn btn-secondary quick-action-item ml-4"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2"
											>Check child nodes</span
										>
									</button>
								</span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse show" id="treeviewCollapseCheckboxHoverBtn01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						aria-controls="treeviewCollapseCheckboxHoverBtn02"
						aria-expanded="false"
						class="collapsed treeview-link"
						data-target="#treeviewCollapseCheckboxHoverBtn02"
						data-toggle="collapse"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<button
										aria-controls="treeviewCollapseCheckboxHoverBtn02"
										aria-expanded="false"
										class="btn btn-monospaced component-expander"
										data-target="#treeviewCollapseCheckboxHoverBtn02"
										data-toggle="collapse"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-angle-down"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-down"
												/>
											</svg>
											<svg
												class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-right"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col">
									<div class="component-icon">
										<svg
											class="lexicon-icon lexicon-icon-folder"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#folder"
											/>
										</svg>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span class="autofit-row">
											<span
												class="autofit-col autofit-col-shrink"
											>
												<span
													class="text-truncate-inline"
													title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"
													><span class="text-truncate"
														>Liferay Drive
														(ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span
													></span
												>
											</span>
											<span class="autofit-col">
												<button
													class="btn btn-secondary quick-action-item ml-4"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
														>Check child nodes</span
													>
												</button>
											</span>
										</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div
						class="collapse"
						id="treeviewCollapseCheckboxHoverBtn02"
					>
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														><span
															class="text-truncate"
															title="Details"
															>Details</span
														></span
													></span
												>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Categorization"
														><span
															class="text-truncate"
															>Categorization</span
														></span
													></span
												>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Documents and Media"
														><span
															class="text-truncate"
															>Documents and
															Media</span
														></span
													></span
												>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Site Template"
														><span
															class="text-truncate"
															>Site Template</span
														></span
													></span
												>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewCollapseCheckboxHoverBtn03"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#treeviewCollapseCheckboxHoverBtn03"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button
							aria-controls="treeviewCollapseCheckboxHoverBtn03"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewCollapseCheckboxHoverBtn03"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									tabindex="-1"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-shrink">
									<span
										class="text-truncate-inline"
										data-toggle="tooltip"
										title="Repositories"
										><span class="text-truncate"
											>Repositories</span
										></span
									>
								</span>
								<span class="autofit-col">
									<button
										class="btn btn-secondary quick-action-item ml-4"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2"
											>Check child nodes</span
										>
									</button>
								</span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewCollapseCheckboxHoverBtn03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Sitemap"
											><span class="text-truncate"
												>Sitemap</span
											></span
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Robots"
											><span class="text-truncate"
												>Robots</span
											></span
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewCollapseCheckboxHoverBtn04"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#treeviewCollapseCheckboxHoverBtn04"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button
							aria-controls="treeviewCollapseCheckboxHoverBtn04"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewCollapseCheckboxHoverBtn04"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									tabindex="-1"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="autofit-row">
								<span class="autofit-col autofit-col-shrink">
									<span
										class="text-truncate-inline"
										data-toggle="tooltip"
										title="Documents and Media"
										><span class="text-truncate"
											>Documents and Media</span
										></span
									>
								</span>
								<span class="autofit-col">
									<button
										class="btn btn-secondary quick-action-item ml-4"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2"
											>Check child nodes</span
										>
									</button>
								</span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewCollapseCheckboxHoverBtn04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Default User Associations"
											><span class="text-truncate"
												>Default User Associations</span
											></span
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Staging"
											><span class="text-truncate"
												>Staging</span
											></span
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Analytics"
											><span class="text-truncate"
												>Analytics</span
											></span
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											data-toggle="tooltip"
											title="Maps"
											><span class="text-truncate"
												>Maps</span
											></span
										></span
									>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Treeview Light(#css-treeview-light)

A `treeview` variation for light colored backgrounds.

<ul class="treeview treeview-nested treeview-light show-quick-actions-on-hover" role="tree">
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewLightCollapseCheckbox01" aria-expanded="true" class="treeview-link" data-target="#treeviewLightCollapseCheckbox01" data-toggle="collapse" role="treeitem" tabindex="0">
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button aria-controls="treeviewLightCollapseCheckbox01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewLightCollapseCheckbox01" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" tabindex="-1" type="checkbox" />
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
						</span>
					</div>
					<div class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse show" id="treeviewLightCollapseCheckbox01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div aria-controls="treeviewLightCollapseCheckbox02" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewLightCollapseCheckbox02" data-toggle="collapse" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<button aria-controls="treeviewLightCollapseCheckbox02" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewLightCollapseCheckbox02" data-toggle="collapse" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-down" />
											</svg>
											<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#angle-right" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col">
									<div class="component-icon">
										<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#folder" />
										</svg>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span class="text-truncate-inline" title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"><span class="text-truncate">Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span></span>
									</span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="collapse" id="treeviewLightCollapseCheckbox02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline"><span class="text-truncate" title="Details">Details</span></span></span>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#times-circle-full" />
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Categorization"><span class="text-truncate">Categorization</span></span></span>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#times-circle-full" />
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span></span>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#times-circle-full" />
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
									<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
										<div class="autofit-row">
											<div class="autofit-col">
												<div class="custom-control custom-checkbox">
													<label>
														<input class="custom-control-input" tabindex="-1" type="checkbox" />
														<span class="custom-control-label"></span>
													</label>
												</div>
											</div>
											<div class="autofit-col autofit-col-expand">
												<span class="component-text"><span class="text-truncate-inline" title="Site Template"><span class="text-truncate">Site Template</span></span></span>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#times-circle-full" />
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
													<span class="c-inner" tabindex="-2">
														<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
															<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewLightCollapseCheckbox03" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewLightCollapseCheckbox03" data-toggle="collapse" role="treeitem" tabindex="-1">
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button aria-controls="treeviewLightCollapseCheckbox03" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewLightCollapseCheckbox03" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" tabindex="-1" type="checkbox" />
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Repositories"><span class="text-truncate">Repositories</span></span>
						</span>
					</div>
					<div class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewLightCollapseCheckbox03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Sitemap"><span class="text-truncate">Sitemap</span></span></span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Robots"><span class="text-truncate">Robots</span></span></span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div aria-controls="treeviewLightCollapseCheckbox04" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewLightCollapseCheckbox04" data-toggle="collapse" role="treeitem" tabindex="-1">
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button aria-controls="treeviewLightCollapseCheckbox04" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewLightCollapseCheckbox04" data-toggle="collapse" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-down" />
								</svg>
								<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#angle-right" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" tabindex="-1" type="checkbox" />
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#folder" />
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span>
						</span>
					</div>
					<div class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times-circle-full" />
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
							<span class="c-inner" tabindex="-2">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewLightCollapseCheckbox04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Default User Associations"><span class="text-truncate">Default User Associations</span></span></span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Staging"><span class="text-truncate">Staging</span></span></span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Analytics"><span class="text-truncate">Analytics</span></span></span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
						<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input class="custom-control-input" tabindex="-1" type="checkbox" />
											<span class="custom-control-label"></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"><span class="text-truncate-inline" title="Maps"><span class="text-truncate">Maps</span></span></span>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#times-circle-full" />
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
										<span class="c-inner" tabindex="-2">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>

```html
<ul
	class="treeview treeview-nested treeview-light show-quick-actions-on-hover"
	role="tree"
>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewLightCollapseCheckbox01"
			aria-expanded="true"
			class="treeview-link"
			data-target="#treeviewLightCollapseCheckbox01"
			data-toggle="collapse"
			role="treeitem"
			tabindex="0"
		>
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button
							aria-controls="treeviewLightCollapseCheckbox01"
							aria-expanded="true"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewLightCollapseCheckbox01"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									tabindex="-1"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Liferay Drive"
								><span class="text-truncate"
									>Liferay Drive</span
								></span
							>
						</span>
					</div>
					<div class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-times-circle-full"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times-circle-full"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-ellipsis-v"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#ellipsis-v"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse show" id="treeviewLightCollapseCheckbox01">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						aria-controls="treeviewLightCollapseCheckbox02"
						aria-expanded="false"
						class="collapsed treeview-link"
						data-target="#treeviewLightCollapseCheckbox02"
						data-toggle="collapse"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<button
										aria-controls="treeviewLightCollapseCheckbox02"
										aria-expanded="false"
										class="btn btn-monospaced component-expander"
										data-target="#treeviewLightCollapseCheckbox02"
										data-toggle="collapse"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-angle-down"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-down"
												/>
											</svg>
											<svg
												class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#angle-right"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col">
									<div class="component-icon">
										<svg
											class="lexicon-icon lexicon-icon-folder"
											focusable="false"
											role="presentation"
										>
											<use
												xlink:href="/images/icons/icons.svg#folder"
											/>
										</svg>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text">
										<span
											class="text-truncate-inline"
											title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"
											><span class="text-truncate"
												>Liferay Drive
												(ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span
											></span
										>
									</span>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="collapse" id="treeviewLightCollapseCheckbox02">
						<ul class="treeview-group" role="group">
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														><span
															class="text-truncate"
															title="Details"
															>Details</span
														></span
													></span
												>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-times-circle-full"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#times-circle-full"
															/>
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-ellipsis-v"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#ellipsis-v"
															/>
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Categorization"
														><span
															class="text-truncate"
															>Categorization</span
														></span
													></span
												>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-times-circle-full"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#times-circle-full"
															/>
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-ellipsis-v"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#ellipsis-v"
															/>
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Documents and Media"
														><span
															class="text-truncate"
															>Documents and
															Media</span
														></span
													></span
												>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-times-circle-full"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#times-circle-full"
															/>
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-ellipsis-v"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#ellipsis-v"
															/>
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="treeview-item" role="none">
								<div
									class="treeview-link"
									role="treeitem"
									tabindex="-1"
									style="padding-left:48px;"
								>
									<div
										class="c-inner"
										tabindex="-2"
										style="margin-left:-48px;"
									>
										<div class="autofit-row">
											<div class="autofit-col">
												<div
													class="custom-control custom-checkbox"
												>
													<label>
														<input
															class="custom-control-input"
															tabindex="-1"
															type="checkbox"
														/>
														<span
															class="custom-control-label"
														></span>
													</label>
												</div>
											</div>
											<div
												class="autofit-col autofit-col-expand"
											>
												<span class="component-text"
													><span
														class="text-truncate-inline"
														title="Site Template"
														><span
															class="text-truncate"
															>Site Template</span
														></span
													></span
												>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-times-circle-full"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#times-circle-full"
															/>
														</svg>
													</span>
												</button>
											</div>
											<div class="autofit-col">
												<button
													class="btn btn-monospaced component-action quick-action-item"
													tabindex="-1"
													type="button"
												>
													<span
														class="c-inner"
														tabindex="-2"
													>
														<svg
															class="lexicon-icon lexicon-icon-ellipsis-v"
															focusable="false"
															role="presentation"
														>
															<use
																xlink:href="/images/icons/icons.svg#ellipsis-v"
															/>
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewLightCollapseCheckbox03"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#treeviewLightCollapseCheckbox03"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button
							aria-controls="treeviewLightCollapseCheckbox03"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewLightCollapseCheckbox03"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									tabindex="-1"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Repositories"
								><span class="text-truncate"
									>Repositories</span
								></span
							>
						</span>
					</div>
					<div class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-times-circle-full"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times-circle-full"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-ellipsis-v"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#ellipsis-v"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewLightCollapseCheckbox03">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Sitemap"
											><span class="text-truncate"
												>Sitemap</span
											></span
										></span
									>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Robots"
											><span class="text-truncate"
												>Robots</span
											></span
										></span
									>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<li class="treeview-item" role="none">
		<div
			aria-controls="treeviewLightCollapseCheckbox04"
			aria-expanded="false"
			class="collapsed treeview-link"
			data-target="#treeviewLightCollapseCheckbox04"
			data-toggle="collapse"
			role="treeitem"
			tabindex="-1"
		>
			<div class="c-inner" tabindex="-2">
				<div class="autofit-row">
					<div class="autofit-col">
						<button
							aria-controls="treeviewLightCollapseCheckbox04"
							aria-expanded="false"
							class="btn btn-monospaced component-expander"
							data-target="#treeviewLightCollapseCheckbox04"
							data-toggle="collapse"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-down"
									/>
								</svg>
								<svg
									class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#angle-right"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<div class="custom-control custom-checkbox">
							<label>
								<input
									class="custom-control-input"
									tabindex="-1"
									type="checkbox"
								/>
								<span class="custom-control-label"></span>
							</label>
						</div>
					</div>
					<div class="autofit-col">
						<div class="component-icon">
							<svg
								class="lexicon-icon lexicon-icon-folder"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#folder"
								/>
							</svg>
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<span class="component-text">
							<span
								class="text-truncate-inline"
								title="Documents and Media"
								><span class="text-truncate"
									>Documents and Media</span
								></span
							>
						</span>
					</div>
					<div class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-times-circle-full"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#times-circle-full"
									/>
								</svg>
							</span>
						</button>
					</div>
					<div class="autofit-col">
						<button
							class="btn btn-monospaced component-action quick-action-item"
							tabindex="-1"
							type="button"
						>
							<span class="c-inner" tabindex="-2">
								<svg
									class="lexicon-icon lexicon-icon-ellipsis-v"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#ellipsis-v"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="collapse" id="treeviewLightCollapseCheckbox04">
			<ul class="treeview-group" role="group">
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Default User Associations"
											><span class="text-truncate"
												>Default User Associations</span
											></span
										></span
									>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Staging"
											><span class="text-truncate"
												>Staging</span
											></span
										></span
									>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Analytics"
											><span class="text-truncate"
												>Analytics</span
											></span
										></span
									>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li class="treeview-item" role="none">
					<div
						class="treeview-link"
						role="treeitem"
						tabindex="-1"
						style="padding-left:24px;"
					>
						<div
							class="c-inner"
							tabindex="-2"
							style="margin-left:-24px;"
						>
							<div class="autofit-row">
								<div class="autofit-col">
									<div class="custom-control custom-checkbox">
										<label>
											<input
												class="custom-control-input"
												tabindex="-1"
												type="checkbox"
											/>
											<span
												class="custom-control-label"
											></span>
										</label>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<span class="component-text"
										><span
											class="text-truncate-inline"
											title="Maps"
											><span class="text-truncate"
												>Maps</span
											></span
										></span
									>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-times-circle-full"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times-circle-full"
												/>
											</svg>
										</span>
									</button>
								</div>
								<div class="autofit-col">
									<button
										class="btn btn-monospaced component-action quick-action-item"
										tabindex="-1"
										type="button"
									>
										<span class="c-inner" tabindex="-2">
											<svg
												class="lexicon-icon lexicon-icon-ellipsis-v"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#ellipsis-v"
												/>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</li>
</ul>
```

### Treeview Dark(#css-treeview-dark)

A `treeview` variation for dark colored backgrounds.

<div class="bg-dark">
	<ul class="treeview treeview-dark treeview-nested show-quick-actions-on-hover" role="tree">
		<li class="treeview-item" role="none">
			<div aria-controls="treeviewDarkCollapseCheckbox01" aria-expanded="true" class="treeview-link" data-target="#treeviewDarkCollapseCheckbox01" data-toggle="collapse" role="treeitem" tabindex="0">
				<div class="c-inner" tabindex="-2">
					<div class="autofit-row">
						<div class="autofit-col">
							<button aria-controls="treeviewDarkCollapseCheckbox01" aria-expanded="true" class="btn btn-monospaced component-expander" data-target="#treeviewDarkCollapseCheckbox01" data-toggle="collapse" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
									<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<div class="custom-control custom-checkbox">
								<label>
									<input class="custom-control-input" tabindex="-1" type="checkbox" />
									<span class="custom-control-label"></span>
								</label>
							</div>
						</div>
						<div class="autofit-col">
							<div class="component-icon">
								<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#folder" />
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<span class="component-text">
								<span class="text-truncate-inline" title="Liferay Drive"><span class="text-truncate">Liferay Drive</span></span>
							</span>
						</div>
						<div class="autofit-col">
							<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times-circle-full" />
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse show" id="treeviewDarkCollapseCheckbox01">
				<ul class="treeview-group" role="group">
					<li class="treeview-item" role="none">
						<div aria-controls="treeviewDarkCollapseCheckbox02" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewDarkCollapseCheckbox02" data-toggle="collapse" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<button aria-controls="treeviewDarkCollapseCheckbox02" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewDarkCollapseCheckbox02" data-toggle="collapse" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#angle-down" />
												</svg>
												<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#angle-right" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col">
										<div class="component-icon">
											<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
												<use xlink:href="/images/icons/icons.svg#folder" />
											</svg>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text">
											<span class="text-truncate-inline" title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"><span class="text-truncate">Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span></span>
										</span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="collapse" id="treeviewDarkCollapseCheckbox02">
							<ul class="treeview-group" role="group">
								<li class="treeview-item" role="none">
									<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
										<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
											<div class="autofit-row">
												<div class="autofit-col">
													<div class="custom-control custom-checkbox">
														<label>
															<input class="custom-control-input" tabindex="-1" type="checkbox" />
															<span class="custom-control-label"></span>
														</label>
													</div>
												</div>
												<div class="autofit-col autofit-col-expand">
													<span class="component-text"><span class="text-truncate-inline"><span class="text-truncate" title="Details">Details</span></span></span>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#times-circle-full" />
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="treeview-item" role="none">
									<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
										<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
											<div class="autofit-row">
												<div class="autofit-col">
													<div class="custom-control custom-checkbox">
														<label>
															<input class="custom-control-input" tabindex="-1" type="checkbox" />
															<span class="custom-control-label"></span>
														</label>
													</div>
												</div>
												<div class="autofit-col autofit-col-expand">
													<span class="component-text"><span class="text-truncate-inline" title="Categorization"><span class="text-truncate">Categorization</span></span></span>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#times-circle-full" />
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="treeview-item" role="none">
									<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
										<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
											<div class="autofit-row">
												<div class="autofit-col">
													<div class="custom-control custom-checkbox">
														<label>
															<input class="custom-control-input" tabindex="-1" type="checkbox" />
															<span class="custom-control-label"></span>
														</label>
													</div>
												</div>
												<div class="autofit-col autofit-col-expand">
													<span class="component-text"><span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span></span>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#times-circle-full" />
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="treeview-item" role="none">
									<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:48px;">
										<div class="c-inner" tabindex="-2" style="margin-left:-48px;">
											<div class="autofit-row">
												<div class="autofit-col">
													<div class="custom-control custom-checkbox">
														<label>
															<input class="custom-control-input" tabindex="-1" type="checkbox" />
															<span class="custom-control-label"></span>
														</label>
													</div>
												</div>
												<div class="autofit-col autofit-col-expand">
													<span class="component-text"><span class="text-truncate-inline" title="Site Template"><span class="text-truncate">Site Template</span></span></span>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#times-circle-full" />
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
														<span class="c-inner" tabindex="-2">
															<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
																<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</li>
		<li class="treeview-item" role="none">
			<div aria-controls="treeviewDarkCollapseCheckbox03" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewDarkCollapseCheckbox03" data-toggle="collapse" role="treeitem" tabindex="-1">
				<div class="c-inner" tabindex="-2">
					<div class="autofit-row">
						<div class="autofit-col">
							<button aria-controls="treeviewDarkCollapseCheckbox03" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewDarkCollapseCheckbox03" data-toggle="collapse" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
									<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<div class="custom-control custom-checkbox">
								<label>
									<input class="custom-control-input" tabindex="-1" type="checkbox" />
									<span class="custom-control-label"></span>
								</label>
							</div>
						</div>
						<div class="autofit-col">
							<div class="component-icon">
								<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#folder" />
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<span class="component-text">
								<span class="text-truncate-inline" title="Repositories"><span class="text-truncate">Repositories</span></span>
							</span>
						</div>
						<div class="autofit-col">
							<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times-circle-full" />
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse" id="treeviewDarkCollapseCheckbox03">
				<ul class="treeview-group" role="group">
					<li class="treeview-item" role="none">
						<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"><span class="text-truncate-inline" title="Sitemap"><span class="text-truncate">Sitemap</span></span></span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"><span class="text-truncate-inline" title="Robots"><span class="text-truncate">Robots</span></span></span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</li>
		<li class="treeview-item" role="none">
			<div aria-controls="treeviewDarkCollapseCheckbox04" aria-expanded="false" class="collapsed treeview-link" data-target="#treeviewDarkCollapseCheckbox04" data-toggle="collapse" role="treeitem" tabindex="-1">
				<div class="c-inner" tabindex="-2">
					<div class="autofit-row">
						<div class="autofit-col">
							<button aria-controls="treeviewDarkCollapseCheckbox04" aria-expanded="false" class="btn btn-monospaced component-expander" data-target="#treeviewDarkCollapseCheckbox04" data-toggle="collapse" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
									<svg class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<div class="custom-control custom-checkbox">
								<label>
									<input class="custom-control-input" tabindex="-1" type="checkbox" />
									<span class="custom-control-label"></span>
								</label>
							</div>
						</div>
						<div class="autofit-col">
							<div class="component-icon">
								<svg class="lexicon-icon lexicon-icon-folder" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#folder" />
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<span class="component-text">
								<span class="text-truncate-inline" title="Documents and Media"><span class="text-truncate">Documents and Media</span></span>
							</span>
						</div>
						<div class="autofit-col">
							<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#times-circle-full" />
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
								<span class="c-inner" tabindex="-2">
									<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse" id="treeviewDarkCollapseCheckbox04">
				<ul class="treeview-group" role="group">
					<li class="treeview-item" role="none">
						<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"><span class="text-truncate-inline" title="Default User Associations"><span class="text-truncate">Default User Associations</span></span></span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"><span class="text-truncate-inline" title="Staging"><span class="text-truncate">Staging</span></span></span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"><span class="text-truncate-inline" title="Analytics"><span class="text-truncate">Analytics</span></span></span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div class="treeview-link" role="treeitem" tabindex="-1" style="padding-left:24px;">
							<div class="c-inner" tabindex="-2" style="margin-left:-24px;">
								<div class="autofit-row">
									<div class="autofit-col">
										<div class="custom-control custom-checkbox">
											<label>
												<input class="custom-control-input" tabindex="-1" type="checkbox" />
												<span class="custom-control-label"></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"><span class="text-truncate-inline" title="Maps"><span class="text-truncate">Maps</span></span></span>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-times-circle-full" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times-circle-full" />
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button class="btn btn-monospaced component-action quick-action-item" tabindex="-1" type="button">
											<span class="c-inner" tabindex="-2">
												<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</div>

```html
<div class="bg-dark">
	<ul
		class="treeview treeview-dark treeview-nested show-quick-actions-on-hover"
		role="tree"
	>
		<li class="treeview-item" role="none">
			<div
				aria-controls="treeviewDarkCollapseCheckbox01"
				aria-expanded="true"
				class="treeview-link"
				data-target="#treeviewDarkCollapseCheckbox01"
				data-toggle="collapse"
				role="treeitem"
				tabindex="0"
			>
				<div class="c-inner" tabindex="-2">
					<div class="autofit-row">
						<div class="autofit-col">
							<button
								aria-controls="treeviewDarkCollapseCheckbox01"
								aria-expanded="true"
								class="btn btn-monospaced component-expander"
								data-target="#treeviewDarkCollapseCheckbox01"
								data-toggle="collapse"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-angle-down"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#angle-down"
										/>
									</svg>
									<svg
										class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#angle-right"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<div class="custom-control custom-checkbox">
								<label>
									<input
										class="custom-control-input"
										tabindex="-1"
										type="checkbox"
									/>
									<span class="custom-control-label"></span>
								</label>
							</div>
						</div>
						<div class="autofit-col">
							<div class="component-icon">
								<svg
									class="lexicon-icon lexicon-icon-folder"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#folder"
									/>
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<span class="component-text">
								<span
									class="text-truncate-inline"
									title="Liferay Drive"
									><span class="text-truncate"
										>Liferay Drive</span
									></span
								>
							</span>
						</div>
						<div class="autofit-col">
							<button
								class="btn btn-monospaced component-action quick-action-item"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-times-circle-full"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#times-circle-full"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<button
								class="btn btn-monospaced component-action quick-action-item"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-ellipsis-v"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#ellipsis-v"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse show" id="treeviewDarkCollapseCheckbox01">
				<ul class="treeview-group" role="group">
					<li class="treeview-item" role="none">
						<div
							aria-controls="treeviewDarkCollapseCheckbox02"
							aria-expanded="false"
							class="collapsed treeview-link"
							data-target="#treeviewDarkCollapseCheckbox02"
							data-toggle="collapse"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<button
											aria-controls="treeviewDarkCollapseCheckbox02"
											aria-expanded="false"
											class="btn btn-monospaced component-expander"
											data-target="#treeviewDarkCollapseCheckbox02"
											data-toggle="collapse"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-angle-down"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#angle-down"
													/>
												</svg>
												<svg
													class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#angle-right"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col">
										<div class="component-icon">
											<svg
												class="lexicon-icon lexicon-icon-folder"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#folder"
												/>
											</svg>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text">
											<span
												class="text-truncate-inline"
												title="Liferay Drive (ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)"
												><span class="text-truncate"
													>Liferay Drive
													(ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual)</span
												></span
											>
										</span>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div
							class="collapse"
							id="treeviewDarkCollapseCheckbox02"
						>
							<ul class="treeview-group" role="group">
								<li class="treeview-item" role="none">
									<div
										class="treeview-link"
										role="treeitem"
										tabindex="-1"
										style="padding-left:48px;"
									>
										<div
											class="c-inner"
											tabindex="-2"
											style="margin-left:-48px;"
										>
											<div class="autofit-row">
												<div class="autofit-col">
													<div
														class="custom-control custom-checkbox"
													>
														<label>
															<input
																class="custom-control-input"
																tabindex="-1"
																type="checkbox"
															/>
															<span
																class="custom-control-label"
															></span>
														</label>
													</div>
												</div>
												<div
													class="autofit-col autofit-col-expand"
												>
													<span class="component-text"
														><span
															class="text-truncate-inline"
															><span
																class="text-truncate"
																title="Details"
																>Details</span
															></span
														></span
													>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-times-circle-full"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#times-circle-full"
																/>
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-ellipsis-v"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#ellipsis-v"
																/>
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="treeview-item" role="none">
									<div
										class="treeview-link"
										role="treeitem"
										tabindex="-1"
										style="padding-left:48px;"
									>
										<div
											class="c-inner"
											tabindex="-2"
											style="margin-left:-48px;"
										>
											<div class="autofit-row">
												<div class="autofit-col">
													<div
														class="custom-control custom-checkbox"
													>
														<label>
															<input
																class="custom-control-input"
																tabindex="-1"
																type="checkbox"
															/>
															<span
																class="custom-control-label"
															></span>
														</label>
													</div>
												</div>
												<div
													class="autofit-col autofit-col-expand"
												>
													<span class="component-text"
														><span
															class="text-truncate-inline"
															title="Categorization"
															><span
																class="text-truncate"
																>Categorization</span
															></span
														></span
													>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-times-circle-full"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#times-circle-full"
																/>
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-ellipsis-v"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#ellipsis-v"
																/>
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="treeview-item" role="none">
									<div
										class="treeview-link"
										role="treeitem"
										tabindex="-1"
										style="padding-left:48px;"
									>
										<div
											class="c-inner"
											tabindex="-2"
											style="margin-left:-48px;"
										>
											<div class="autofit-row">
												<div class="autofit-col">
													<div
														class="custom-control custom-checkbox"
													>
														<label>
															<input
																class="custom-control-input"
																tabindex="-1"
																type="checkbox"
															/>
															<span
																class="custom-control-label"
															></span>
														</label>
													</div>
												</div>
												<div
													class="autofit-col autofit-col-expand"
												>
													<span class="component-text"
														><span
															class="text-truncate-inline"
															title="Documents and Media"
															><span
																class="text-truncate"
																>Documents and
																Media</span
															></span
														></span
													>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-times-circle-full"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#times-circle-full"
																/>
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-ellipsis-v"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#ellipsis-v"
																/>
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="treeview-item" role="none">
									<div
										class="treeview-link"
										role="treeitem"
										tabindex="-1"
										style="padding-left:48px;"
									>
										<div
											class="c-inner"
											tabindex="-2"
											style="margin-left:-48px;"
										>
											<div class="autofit-row">
												<div class="autofit-col">
													<div
														class="custom-control custom-checkbox"
													>
														<label>
															<input
																class="custom-control-input"
																tabindex="-1"
																type="checkbox"
															/>
															<span
																class="custom-control-label"
															></span>
														</label>
													</div>
												</div>
												<div
													class="autofit-col autofit-col-expand"
												>
													<span class="component-text"
														><span
															class="text-truncate-inline"
															title="Site Template"
															><span
																class="text-truncate"
																>Site
																Template</span
															></span
														></span
													>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-times-circle-full"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#times-circle-full"
																/>
															</svg>
														</span>
													</button>
												</div>
												<div class="autofit-col">
													<button
														class="btn btn-monospaced component-action quick-action-item"
														tabindex="-1"
														type="button"
													>
														<span
															class="c-inner"
															tabindex="-2"
														>
															<svg
																class="lexicon-icon lexicon-icon-ellipsis-v"
																focusable="false"
																role="presentation"
															>
																<use
																	xlink:href="/images/icons/icons.svg#ellipsis-v"
																/>
															</svg>
														</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</li>
		<li class="treeview-item" role="none">
			<div
				aria-controls="treeviewDarkCollapseCheckbox03"
				aria-expanded="false"
				class="collapsed treeview-link"
				data-target="#treeviewDarkCollapseCheckbox03"
				data-toggle="collapse"
				role="treeitem"
				tabindex="-1"
			>
				<div class="c-inner" tabindex="-2">
					<div class="autofit-row">
						<div class="autofit-col">
							<button
								aria-controls="treeviewDarkCollapseCheckbox03"
								aria-expanded="false"
								class="btn btn-monospaced component-expander"
								data-target="#treeviewDarkCollapseCheckbox03"
								data-toggle="collapse"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-angle-down"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#angle-down"
										/>
									</svg>
									<svg
										class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#angle-right"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<div class="custom-control custom-checkbox">
								<label>
									<input
										class="custom-control-input"
										tabindex="-1"
										type="checkbox"
									/>
									<span class="custom-control-label"></span>
								</label>
							</div>
						</div>
						<div class="autofit-col">
							<div class="component-icon">
								<svg
									class="lexicon-icon lexicon-icon-folder"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#folder"
									/>
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<span class="component-text">
								<span
									class="text-truncate-inline"
									title="Repositories"
									><span class="text-truncate"
										>Repositories</span
									></span
								>
							</span>
						</div>
						<div class="autofit-col">
							<button
								class="btn btn-monospaced component-action quick-action-item"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-times-circle-full"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#times-circle-full"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<button
								class="btn btn-monospaced component-action quick-action-item"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-ellipsis-v"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#ellipsis-v"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse" id="treeviewDarkCollapseCheckbox03">
				<ul class="treeview-group" role="group">
					<li class="treeview-item" role="none">
						<div
							class="treeview-link"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"
											><span
												class="text-truncate-inline"
												title="Sitemap"
												><span class="text-truncate"
													>Sitemap</span
												></span
											></span
										>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div
							class="treeview-link"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"
											><span
												class="text-truncate-inline"
												title="Robots"
												><span class="text-truncate"
													>Robots</span
												></span
											></span
										>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</li>
		<li class="treeview-item" role="none">
			<div
				aria-controls="treeviewDarkCollapseCheckbox04"
				aria-expanded="false"
				class="collapsed treeview-link"
				data-target="#treeviewDarkCollapseCheckbox04"
				data-toggle="collapse"
				role="treeitem"
				tabindex="-1"
			>
				<div class="c-inner" tabindex="-2">
					<div class="autofit-row">
						<div class="autofit-col">
							<button
								aria-controls="treeviewDarkCollapseCheckbox04"
								aria-expanded="false"
								class="btn btn-monospaced component-expander"
								data-target="#treeviewDarkCollapseCheckbox04"
								data-toggle="collapse"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-angle-down"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#angle-down"
										/>
									</svg>
									<svg
										class="lexicon-icon lexicon-icon-angle-right component-expanded-d-none"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#angle-right"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<div class="custom-control custom-checkbox">
								<label>
									<input
										class="custom-control-input"
										tabindex="-1"
										type="checkbox"
									/>
									<span class="custom-control-label"></span>
								</label>
							</div>
						</div>
						<div class="autofit-col">
							<div class="component-icon">
								<svg
									class="lexicon-icon lexicon-icon-folder"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#folder"
									/>
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<span class="component-text">
								<span
									class="text-truncate-inline"
									title="Documents and Media"
									><span class="text-truncate"
										>Documents and Media</span
									></span
								>
							</span>
						</div>
						<div class="autofit-col">
							<button
								class="btn btn-monospaced component-action quick-action-item"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-times-circle-full"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#times-circle-full"
										/>
									</svg>
								</span>
							</button>
						</div>
						<div class="autofit-col">
							<button
								class="btn btn-monospaced component-action quick-action-item"
								tabindex="-1"
								type="button"
							>
								<span class="c-inner" tabindex="-2">
									<svg
										class="lexicon-icon lexicon-icon-ellipsis-v"
										focusable="false"
										role="presentation"
									>
										<use
											xlink:href="/images/icons/icons.svg#ellipsis-v"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="collapse" id="treeviewDarkCollapseCheckbox04">
				<ul class="treeview-group" role="group">
					<li class="treeview-item" role="none">
						<div
							class="treeview-link"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"
											><span
												class="text-truncate-inline"
												title="Default User Associations"
												><span class="text-truncate"
													>Default User
													Associations</span
												></span
											></span
										>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div
							class="treeview-link"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"
											><span
												class="text-truncate-inline"
												title="Staging"
												><span class="text-truncate"
													>Staging</span
												></span
											></span
										>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div
							class="treeview-link"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"
											><span
												class="text-truncate-inline"
												title="Analytics"
												><span class="text-truncate"
													>Analytics</span
												></span
											></span
										>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="treeview-item" role="none">
						<div
							class="treeview-link"
							role="treeitem"
							tabindex="-1"
							style="padding-left:24px;"
						>
							<div
								class="c-inner"
								tabindex="-2"
								style="margin-left:-24px;"
							>
								<div class="autofit-row">
									<div class="autofit-col">
										<div
											class="custom-control custom-checkbox"
										>
											<label>
												<input
													class="custom-control-input"
													tabindex="-1"
													type="checkbox"
												/>
												<span
													class="custom-control-label"
												></span>
											</label>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<span class="component-text"
											><span
												class="text-truncate-inline"
												title="Maps"
												><span class="text-truncate"
													>Maps</span
												></span
											></span
										>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-times-circle-full"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#times-circle-full"
													/>
												</svg>
											</span>
										</button>
									</div>
									<div class="autofit-col">
										<button
											class="btn btn-monospaced component-action quick-action-item"
											tabindex="-1"
											type="button"
										>
											<span class="c-inner" tabindex="-2">
												<svg
													class="lexicon-icon lexicon-icon-ellipsis-v"
													focusable="false"
													role="presentation"
												>
													<use
														xlink:href="/images/icons/icons.svg#ellipsis-v"
													/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</div>
```
