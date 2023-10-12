---
title: 'Sidebar'
description: 'A vertical panel that appears from the right or the left side of the screen, triggered by a button.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/sidebar/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Structure](#css-structure)
-   [Size](#css-sidebar-size)
-   [Variations](#css-variation)
    -   [Light](#css-light)
    -   [Dark](#css-sidebar-dark)
    -   [Dark L2](#css-sidebar-dark-l2)

</div>
</div>

## Structure(#css-structure)

Sidebar is an opinionated container to display related content.

Is composed by:

```html{expanded}
<div class="sidebar-header">
	Sidebar Header
</div>
```

```html{expanded}
<div class="sidebar-body">
	Sidebar Body
</div>
```

```html{expanded}
<div class="sidebar-footer">
	Sidebar Footer
</div>
```

## Size(#css-sidebar-size)

<div class="sheet-example">
	<div class="sidebar sidebar-light sidebar-sm" style="max-width:320px;">
		<div class="sidebar-header">
			<div class="autofit-row sidebar-section">
				<div class="autofit-col autofit-col-expand">
					<div class="component-title">
						<span class="text-truncate-inline">
							<a class="text-truncate" href="#1">Builder</a>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-body">
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-item-focusable input-group-item">
						<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text">
						<div class="input-group-inset-item input-group-inset-item-after">
							<button class="btn btn-unstyled d-md-none" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
							<button class="btn btn-unstyled d-none d-md-inline-block" type="button">
								<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#search"></use>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<nav class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline">
				<a aria-controls="sidebarLightCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#sidebarLightCollapse00" role="button">
					<span class="navbar-text-truncate">Fields</span>
					<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
					<ul class="nav navbar-nav" role="tablist">
						<li class="nav-item">
							<a aria-controls="_0s8m4jws3" aria-selected="true" class="active nav-link" data-toggle="tab" href="#_0s8m4jws3" id="_ox1e8zux2" role="tab">
								<span class="navbar-text-truncate">Fields</span>
							</a>
						</li>
						<li class="nav-item">
							<a aria-controls="_4wdljab4m" aria-selected="false" class="nav-link" data-toggle="tab" href="#_4wdljab4m" id="_2jths9m33" role="tab">
								<span class="navbar-text-truncate">Interface</span>
							</a>
						</li>
						<li class="nav-item">
							<a aria-controls="_v6guc3g9e" aria-selected="false" class="nav-link" data-toggle="tab" href="#_v6guc3g9e" id="_msfbj8ppk" role="tab">
								<span class="navbar-text-truncate">Fieldsets</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="tab-content">
				<div aria-labelledby="_ox1e8zux2" class="active fade show tab-pane" id="_0s8m4jws3" role="tabpanel">
					<ul class="list-group sidebar-list-group">
						<li class="list-group-item list-group-item-flex">
							<div class="autofit-col">
								<button class="component-action" type="button">
									<span class="inline-item">
										<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#drag" />
										</svg>
									</span>
								</button>
							</div>
							<div class="autofit-col">
								<div class="sticker">
									<span class="inline-item">
										<svg class="lexicon-icon lexicon-icon-text" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#text" />
										</svg>
									</span>
								</div>
							</div>
							<div class="autofit-col autofit-col-expand">
								<div class="list-group-title">Text</div>
								<div class="list-group-subtitle">Single line or multiline text area</div>
							</div>
						</li>
						<li class="list-group-item list-group-item-flex">
							<div class="autofit-col">
								<button class="component-action" type="button">
									<span class="inline-item">
										<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#drag" />
										</svg>
									</span>
								</button>
							</div>
							<div class="autofit-col">
								<div class="sticker">
									<span class="inline-item">
										<svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#list" />
										</svg>
									</span>
								</div>
							</div>
							<div class="autofit-col autofit-col-expand">
								<div class="list-group-title">Select from List</div>
								<div class="list-group-subtitle">Select options from a list</div>
							</div>
						</li>
						<li class="list-group-item list-group-item-flex">
							<div class="autofit-col">
								<button class="component-action" type="button">
									<span class="inline-item">
										<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#drag" />
										</svg>
									</span>
								</button>
							</div>
							<div class="autofit-col">
								<div class="sticker">
									<span class="inline-item">
										<svg class="lexicon-icon lexicon-icon-radio-button" focusable="false" role="presentation">
											<use xlink:href="/images/icons/icons.svg#radio-button" />
										</svg>
									</span>
								</div>
							</div>
							<div class="autofit-col autofit-col-expand">
								<div class="list-group-title">Single Selection</div>
								<div class="list-group-subtitle">Select only one option</div>
							</div>
						</li>
					</ul>
				</div>
				<div aria-labelledby="_2jths9m33" class="fade tab-pane" id="_4wdljab4m" role="tabpanel">
					<nav class="management-bar management-bar-light navbar navbar-expand-md">
						<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
							<div class="container-fluid container-fluid-max-xl">
								<form role="search">
									<div class="input-group">
										<div class="input-group-item-focusable input-group-item">
											<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
											<span class="input-group-inset-item input-group-inset-item-after">
												<button class="btn btn-monospaced btn-unstyled" type="submit">
													<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
														<use xlink:href="/images/icons/icons.svg#search" />
													</svg>
												</button>
												<button class="btn btn-monospaced btn-unstyled d-none" type="button">
													<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
														<use xlink:href="/images/icons/icons.svg#times" />
													</svg>
												</button>
											</span>
										</div>
									</div>
								</form>
							</div>
						</div>
						<ul class="navbar-nav">
							<li class="nav-item navbar-breakpoint-d-none">
								<a class="nav-link nav-link-monospaced" href="#1" role="button">
									<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#search" />
									</svg>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link nav-link-monospaced" href="#uniqueSidenavCollapseId2" id="uniqueSidenavToggler2" role="button">
									<svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#info-circle-open" />
									</svg>
								</a>
							</li>
							<li class="nav-item">
								<a class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" href="#1">
									<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#plus" />
									</svg>
								</a>
							</li>
						</ul>
					</nav>
					<div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist">
						<div class="panel panel-unstyled">
							<a aria-controls="accordion04CollapseTwo" aria-expanded="true" class="collapse-icon panel-header panel-header-link" data-toggle="collapse" href="#accordion04CollapseTwo" id="accordion04HeadingTwo" role="tab">
								<span class="panel-title">Password</span>
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
								</span>
							</a>
							<div aria-labelledby="accordion04HeadingTwo" class="panel-collapse collapse show" id="accordion04CollapseTwo" role="tabpanel">
								<div class="panel-body">
									<div class="form-group">
										<label>
											Current Password
											<span class="reference-mark">
												<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#asterisk" />
												</svg>
											</span>
										</label>
										<input class="form-control" placeholder="Current Password" type="password" value="my-secret">
									</div>
									<div class="form-group">
										<label>
											New Password
											<span class="reference-mark">
												<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#asterisk" />
												</svg>
											</span>
										</label>
										<input class="form-control" placeholder="New Password" type="password" value="my-new-secret">
									</div>
									<div class="form-group">
										<label>
											Confirm New Password
											<span class="reference-mark">
												<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#asterisk" />
												</svg>
											</span>
										</label>
										<input class="form-control" placeholder="Confirm New Password" type="password" value="my-new-secret">
									</div>
									<div class="form-group">
										<label for="regularSelectElement">Regular Select Element</label>
										<select class="form-control" id="regularSelectElement">
											<option>Sample 1</option>
											<option>Sample 2</option>
											<option>Sample 3</option>
											<option>Sample 4</option>
											<option>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</option>
										</select>
									</div>
									<div class="form-group">
										<label>A Button Styled Like a Select Element</label>
										<button class="form-control form-control-select" type="button">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</button>
									</div>
									<div class="form-group">
										<div class="input-group">
											<div class="input-group-item input-group-item-shrink input-group-prepend">
												<button class="btn btn-secondary" type="button">Search</button>
											</div>
											<div class="input-group-append input-group-item">
												<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="tagsField2">Tags</label>
										<div class="input-group input-group-stacked-sm-down">
											<div class="input-group-item">
												<div class="form-control form-control-tag-group input-group">
													<div class="input-group-item">
														<span class="label label-dismissible label-secondary" tabindex="0">
															<span class="label-item label-item-before">
																<span class="sticker">
																	<span class="sticker-overlay">
																		<img alt="thumbnail" class="sticker-img" src="/content/site-images/thumbnail_dock.jpg">
																	</span>
																</span>
															</span>
															<span class="label-item label-item-expand">wall</span>
															<span class="label-item label-item-after">
																<button aria-label="Close" class="close" tabindex="-1" type="button">
																	<svg class="lexicon-icon lexicon-icon-times-small" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#times-small"></use>
																	</svg>
																</button>
															</span>
														</span>
														<span class="label label-dismissible label-secondary" tabindex="0">
															<span class="label-item label-item-before">
																<span class="sticker">
																	<span class="sticker-overlay">
																		<img alt="thumbnail" class="sticker-img" src="/content/site-images/thumbnail_dock.jpg">
																	</span>
																</span>
															</span>
															<span class="label-item label-item-expand">wallpaper</span>
															<span class="label-item label-item-after">
																<button aria-label="Close" class="close" tabindex="-1" type="button">
																	<svg class="lexicon-icon lexicon-icon-times-small" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#times-small"></use>
																	</svg>
																</button>
															</span>
														</span>
														<span class="label label-dismissible label-secondary" tabindex="0">
															<span class="label-item label-item-before">
																<span class="sticker">
																	<span class="sticker-overlay">
																		<img alt="thumbnail" class="sticker-img" src="/content/site-images/thumbnail_dock.jpg">
																	</span>
																</span>
															</span>
															<span class="label-item label-item-expand">wonderwall</span>
															<span class="label-item label-item-after">
																<button aria-label="Close" class="close" tabindex="-1" type="button">
																	<svg class="lexicon-icon lexicon-icon-times-small" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#times-small"></use>
																	</svg>
																</button>
															</span>
														</span>
														<span class="label label-dismissible label-secondary" tabindex="0">
															<span class="label-item label-item-expand">winterfell</span>
															<span class="label-item label-item-after">
																<button aria-label="Close" class="close" tabindex="-1" type="button">
																	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#times"></use>
																	</svg>
																</button>
															</span>
														</span>
														<span class="label label-dismissible label-secondary" tabindex="0">
															<span class="label-item label-item-expand">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</span>
															<span class="label-item label-item-after">
																<button aria-label="Close" class="close" tabindex="-1" type="button">
																	<svg class="lexicon-icon lexicon-icon-times-small" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#times-small"></use>
																	</svg>
																</button>
															</span>
														</span>
														<input class="form-control-inset" id="tagsField2" type="text" value="some value">
													</div>
												</div>
												<div class="form-feedback-group">
													<div class="form-text">You can use a comma to enter tags. ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</div>
												</div>
											</div>
											<div class="input-group-item input-group-item-shrink">
												<button class="btn btn-secondary" type="button">Select All the Things</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="panel panel-unstyled">
							<a aria-controls="accordion04CollapseOne" aria-expanded="false" class="collapse-icon collapsed panel-header panel-header-link" data-toggle="collapse" href="#accordion04CollapseOne" id="accordion04HeadingOne" role="tab">
								<span class="panel-title">Organizations</span>
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
								</span>
							</a>
							<div aria-labelledby="accordion04HeadingOne" class="panel-collapse collapse" id="accordion04CollapseOne" role="tabpanel">
								<div class="panel-body">
									In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
								</div>
							</div>
						</div>
						<div class="panel panel-unstyled">
							<a aria-controls="accordion04CollapseThree" aria-expanded="false" class="collapse-icon collapsed panel-header panel-header-link" data-toggle="collapse" href="#accordion04CollapseThree" id="accordion04HeadingThree" role="tab">
								<span class="panel-title">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual User Groups</span>
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
								</span>
							</a>
							<div aria-labelledby="accordion04HeadingThree" class="panel-collapse collapse" id="accordion04CollapseThree" role="tabpanel">
								<div class="panel-body">
									Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
								</div>
							</div>
						</div>
						<div class="panel panel-unstyled">
							<a aria-controls="accordion04CollapseFour" aria-expanded="false" class="collapse-icon collapsed panel-header panel-header-link" data-toggle="collapse" href="#accordion04CollapseFour" id="accordion04HeadingFour" role="tab">
								<span class="panel-title">Roles</span>
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-right" />
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#angle-down" />
									</svg>
								</span>
							</a>
							<div aria-labelledby="accordion04HeadingFour" class="panel-collapse collapse" id="accordion04CollapseFour" role="tabpanel">
								<div class="panel-body">
									Eu ristretto ut sugar rich saucer milk aftertaste, froth dark, cultivar blue mountain as coffee cappuccino. Saucer grounds mocha, aroma, half and half coffee eu robusta roast, doppio skinny galão, extraction, frappuccino aromatic breve crema frappuccino aroma. Froth half and half so java, grounds half and half, macchiato at est sugar mug redeye, strong, cream seasonal qui doppio robusta. Wings, at, cup dark, a, breve french press decaffeinated acerbic, black extra, and, saucer barista rich seasonal barista blue mountain. Roast mazagran a and id mug in est trifecta pumpkin spice coffee and mug trifecta, ut breve, mug frappuccino mug, breve mocha qui aged aftertaste.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div aria-labelledby="_msfbj8ppk" class="fade tab-pane" id="_v6guc3g9e" role="tabpanel">
					Fieldsets
					<div>
						<button class="btn btn-primary" type="button">Primary</button>
						<button class="btn btn-secondary" type="button">Secondary</button>
						<button class="btn btn-info" type="button">Info</button>
						<button class="btn btn-success" type="button">Success</button>
						<button class="btn btn-warning" type="button">Warning</button>
						<button class="btn btn-danger" type="button">Danger</button>
						<div class="clay-site-light-container">
							<button class="btn btn-light" type="button">Light</button>
						</div>
						<button class="btn btn-dark" type="button">Dark</button>
						<button class="btn btn-link" type="button">Link</button>
						<button class="btn btn-beta btn-xs rounded-circle" type="button">
							<span class="inline-item">Beta</span>
							<span class="inline-item inline-item-after">
								<svg class="lexicon-icon lexicon-icon-info-panel-open" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#info-panel-open" />
								</svg>
							</span>
						</button>
					</div>
					<div>
						<button class="btn btn-monospaced btn-primary" type="button">A</button>
						<button class="btn btn-monospaced btn-secondary" type="button">B</button>
						<button class="btn btn-monospaced btn-info" type="button">C</button>
						<button class="btn btn-monospaced btn-success" type="button">D</button>
						<button class="btn btn-monospaced btn-warning" type="button">E</button>
						<button class="btn btn-monospaced btn-danger" type="button">F</button>
						<div class="clay-site-light-container">
							<button class="btn btn-monospaced btn-light" type="button">G</button>
						</div>
						<button class="btn btn-monospaced btn-dark" type="button">H</button>
						<button class="btn btn-monospaced btn-link" type="button">I</button>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-footer"></div>
	</div>
</div>

## Variations(#css-variations)

### Sidebar Light(#css-sidebar-light)

Just add `sidebar-light` class on the same element that you are using `sidebar`.

<div class="sheet-example">
	<div class="sidebar sidebar-light">
		<nav class="component-tbar tbar">
			<div class="container-fluid">
				<ul class="tbar-nav">
					<li class="tbar-item">
						<a class="component-action disabled" href="#1" role="button" tabindex="-1">
							<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-left"></use>
							</svg>
						</a>
					</li>
					<li class="tbar-item tbar-item-expand">
						<div class="tbar-section">
							<span class="text-truncate-inline">
								<span class="text-truncate">Item 1 of
									3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span>
							</span>
						</div>
					</li>
					<li class="tbar-item">
						<a class="component-action" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#angle-right"></use>
							</svg>
						</a>
					</li>
					<li class="tbar-item">
						<a class="component-action" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="sidebar-header">
			<div class="autofit-row sidebar-section">
				<div class="autofit-col autofit-col-expand">
					<h4 class="component-title">
						<span class="text-truncate-inline">
							<a class="text-truncate" href="#1">Image1.jpg</a>
						</span>
					</h4>
					<p class="component-subtitle">Basic Document</p>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle"
							data-toggle="dropdown" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v"></use>
							</svg>
						</a>
						<ul class="dropdown-menu" x-placement="bottom-start"
							style="position: absolute; transform: translate3d(-197px, 32px, 0px); top: 0px; left: 0px; will-change: transform;">
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-body">
			<nav
				class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline">
				<a aria-controls="sidebarLightCollapse00" aria-expanded="false" aria-label="Toggle Navigation"
					class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse"
					href="#sidebarLightCollapse00" role="button">
					<span class="navbar-text-truncate">Details</span>
					<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#caret-bottom"></use>
					</svg>
				</a>
				<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
					<ul class="nav navbar-nav" role="tablist">
						<li class="nav-item">
							<a aria-controls="sidebarLightDetails" class="nav-link active" data-toggle="tab"
								href="#sidebarLightDetails" id="sidebarLightDetailsTab" role="tab" aria-selected="true">
								<span class="navbar-text-truncate">Details</span>
							</a>
						</li>
						<li class="nav-item">
							<a aria-controls="sidebarLightVersions" class="nav-link" data-toggle="tab"
								href="#sidebarLightVersions" id="sidebarLightVersionsTab" role="tab" aria-selected="false">
								<span class="navbar-text-truncate">Versions</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="tab-content">
				<div aria-labelledby="sidebarLightDetailsTab" class="fade tab-pane active show" id="sidebarLightDetails"
					role="tabpanel">
					<div class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel" style="margin-top:1.5rem;">
						<img alt="thumbnail"
							class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
							src="/images/DeathtoStock_Desk4.jpg">
						<div class="sticker sticker-bottom-left sticker-danger">JPG</div>
					</div>
					<dl class="sidebar-dl sidebar-section">
						<dt class="sidebar-dt">Url</dt>
						<dd class="sidebar-dd">
							<a href="#1">http://localhost:8080/documents/20140/</a>
						</dd>
						<dt class="sidebar-dt">Created</dt>
						<dd class="sidebar-dd">
							<a href="#1">Helen Smith</a>
						</dd>
						<dt class="sidebar-dt">Description</dt>
						<dd class="sidebar-dd">A picture of a person using a ruler and exacto knife to cut construction
							paper.</dd>
						<dt class="sidebar-dt">Size</dt>
						<dd class="sidebar-dd">745KB</dd>
						<dt class="sidebar-dt">Tags</dt>
						<dd class="sidebar-dd">
							<span class="label label-lg label-secondary">
								<span class="label-item label-item-expand">Tag One</span>
							</span>
							<span class="label label-lg label-secondary">
								<span class="label-item label-item-expand">Tag Two</span>
							</span>
						</dd>
						<dt class="sidebar-dt">Related Assets</dt>
						<dd class="sidebar-dd">
							<ul class="list-group sidebar-list-group">
								<li class="list-group-item list-group-item-flex">
									<div class="autofit-col">
										<div class="sticker sticker-secondary">
											<span class="inline-item">
												<svg class="lexicon-icon lexicon-icon-blogs" focusable="false"
													role="presentation">
													<use href="/images/icons/icons.svg#blogs"></use>
												</svg>
											</span>
										</div>
									</div>
									<div class="autofit-col autofit-col-expand">
										<section class="autofit-section">
											<div class="list-group-title text-truncate-inline">
												<a class="text-truncate"
													href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
											</div>
										</section>
									</div>
								</li>
							</ul>
						</dd>
					</dl>
					<div aria-orientation="vertical" class="panel-group panel-group-flush panel-group-sm" role="tablist">
						<div class="panel panel-unstyled">
							<a aria-controls="collapseOne" aria-expanded="false"
								class="collapse-icon panel-header panel-header-link collapsed" data-toggle="collapse"
								href="#collapseOne" id="headingOne" role="tab">
								<span class="panel-title">Collapsible Group Item #1</span>
								<span class="collapse-icon-closed">
									<svg class="lexicon-icon lexicon-icon-angle-left" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#angle-left"></use>
									</svg>
								</span>
								<span class="collapse-icon-open">
									<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#angle-down"></use>
									</svg>
								</span>
							</a>
							<div aria-labelledby="headingOne" class="panel-collapse collapse" id="collapseOne"
								role="tabpanel">
								<div class="panel-body">
									In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte
									extra cup white.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div aria-labelledby="sidebarLightVersionsTab" class="fade tab-pane" id="sidebarLightVersions"
					role="tabpanel">
					<ul class="list-group sidebar-list-group">
						<li class="list-group-item list-group-item-flex">
							<div class="autofit-col autofit-col-expand">
								<div class="list-group-title">Version 1.2</div>
								<div class="list-group-subtitle">By Helen, on 8/31/17 9:15am</div>
								<div class="list-group-subtext">No Change Log</div>
							</div>
							<div class="autofit-col">
								<div class="dropdown dropdown-action">
									<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle"
										data-toggle="dropdown" href="#1" id="sidebarLightListDropdownId01" role="button">
										<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false"
											role="presentation">
											<use href="/images/icons/icons.svg#ellipsis-v"></use>
										</svg>
									</a>
									<ul aria-labelledby="sidebarLightListDropdownId01" class="dropdown-menu"
										x-placement="bottom-start"
										style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 811px, 0px);"
										x-out-of-boundaries="">
										<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
										<li><a class="dropdown-item" href="#1">Edit</a></li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sidebar sidebar-light">
	<nav class="component-tbar tbar">
		<div class="container-fluid">
			<ul class="tbar-nav">
				<li class="tbar-item">
					<a
						class="component-action disabled"
						href="#1"
						role="button"
						tabindex="-1"
					>
						<svg
							class="lexicon-icon lexicon-icon-angle-left"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#angle-left"
							></use>
						</svg>
					</a>
				</li>
				<li class="tbar-item tbar-item-expand">
					<div class="tbar-section">
						<span class="text-truncate-inline">
							<span class="text-truncate"
								>Item 1 of
								3,138,732,873,467,182,321,341,231,234,342,559,827,334,424</span
							>
						</span>
					</div>
				</li>
				<li class="tbar-item">
					<a class="component-action" href="#1" role="button">
						<svg
							class="lexicon-icon lexicon-icon-angle-right"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#angle-right"
							></use>
						</svg>
					</a>
				</li>
				<li class="tbar-item">
					<a class="component-action" href="#1" role="button">
						<svg
							class="lexicon-icon lexicon-icon-times"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#times"></use>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="sidebar-header">
		<div class="autofit-row sidebar-section">
			<div class="autofit-col autofit-col-expand">
				<h4 class="component-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1">Image1.jpg</a>
					</span>
				</h4>
				<p class="component-subtitle">Basic Document</p>
			</div>
			<div class="autofit-col">
				<div class="dropdown dropdown-action">
					<a
						aria-expanded="false"
						aria-haspopup="true"
						class="component-action dropdown-toggle"
						data-toggle="dropdown"
						href="#1"
						role="button"
					>
						<svg
							class="lexicon-icon lexicon-icon-ellipsis-v"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#ellipsis-v"
							></use>
						</svg>
					</a>
					<ul
						class="dropdown-menu"
						x-placement="bottom-start"
						style="position: absolute; transform: translate3d(-197px, 32px, 0px); top: 0px; left: 0px; will-change: transform;"
					>
						<li>
							<a class="dropdown-item" href="#1" role="button"
								>Download</a
							>
						</li>
						<li>
							<a class="dropdown-item" href="#1" role="button"
								>Move to Recycle Bin</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<nav
			class="component-navigation-bar navbar navigation-bar navbar-collapse-absolute navbar-expand-md navbar-underline"
		>
			<a
				aria-controls="sidebarLightCollapse00"
				aria-expanded="false"
				aria-label="Toggle Navigation"
				class="collapsed navbar-toggler navbar-toggler-link"
				data-toggle="collapse"
				href="#sidebarLightCollapse00"
				role="button"
			>
				<span class="navbar-text-truncate">Details</span>
				<svg
					class="lexicon-icon lexicon-icon-caret-bottom"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#caret-bottom"></use>
				</svg>
			</a>
			<div class="collapse navbar-collapse" id="sidebarLightCollapse00">
				<ul class="nav navbar-nav" role="tablist">
					<li class="nav-item">
						<a
							aria-controls="sidebarLightDetails"
							class="nav-link active"
							data-toggle="tab"
							href="#sidebarLightDetails"
							id="sidebarLightDetailsTab"
							role="tab"
							aria-selected="true"
						>
							<span class="navbar-text-truncate">Details</span>
						</a>
					</li>
					<li class="nav-item">
						<a
							aria-controls="sidebarLightVersions"
							class="nav-link"
							data-toggle="tab"
							href="#sidebarLightVersions"
							id="sidebarLightVersionsTab"
							role="tab"
							aria-selected="false"
						>
							<span class="navbar-text-truncate">Versions</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="tab-content">
			<div
				aria-labelledby="sidebarLightDetailsTab"
				class="fade tab-pane active show"
				id="sidebarLightDetails"
				role="tabpanel"
			>
				<div
					class="aspect-ratio aspect-ratio-16-to-9 sidebar-panel"
					style="margin-top:1.5rem;"
				>
					<img
						alt="thumbnail"
						class="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
						src="/images/DeathtoStock_Desk4.jpg"
					/>
					<div class="sticker sticker-bottom-left sticker-danger">
						JPG
					</div>
				</div>
				<dl class="sidebar-dl sidebar-section">
					<dt class="sidebar-dt">Url</dt>
					<dd class="sidebar-dd">
						<a href="#1">http://localhost:8080/documents/20140/</a>
					</dd>
					<dt class="sidebar-dt">Created</dt>
					<dd class="sidebar-dd">
						<a href="#1">Helen Smith</a>
					</dd>
					<dt class="sidebar-dt">Description</dt>
					<dd class="sidebar-dd">
						A picture of a person using a ruler and exacto knife to
						cut construction paper.
					</dd>
					<dt class="sidebar-dt">Size</dt>
					<dd class="sidebar-dd">745KB</dd>
					<dt class="sidebar-dt">Tags</dt>
					<dd class="sidebar-dd">
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand"
								>Tag One</span
							>
						</span>
						<span class="label label-lg label-secondary">
							<span class="label-item label-item-expand"
								>Tag Two</span
							>
						</span>
					</dd>
					<dt class="sidebar-dt">Related Assets</dt>
					<dd class="sidebar-dd">
						<ul class="list-group sidebar-list-group">
							<li class="list-group-item list-group-item-flex">
								<div class="autofit-col">
									<div class="sticker sticker-secondary">
										<span class="inline-item">
											<svg
												class="lexicon-icon lexicon-icon-blogs"
												focusable="false"
												role="presentation"
											>
												<use
													href="/images/icons/icons.svg#blogs"
												></use>
											</svg>
										</span>
									</div>
								</div>
								<div class="autofit-col autofit-col-expand">
									<section class="autofit-section">
										<div
											class="list-group-title text-truncate-inline"
										>
											<a class="text-truncate" href="#1"
												>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a
											>
										</div>
									</section>
								</div>
							</li>
						</ul>
					</dd>
				</dl>
				<div
					aria-orientation="vertical"
					class="panel-group panel-group-flush panel-group-sm"
					role="tablist"
				>
					<div class="panel panel-unstyled">
						<a
							aria-controls="collapseOne"
							aria-expanded="false"
							class="collapse-icon panel-header panel-header-link collapsed"
							data-toggle="collapse"
							href="#collapseOne"
							id="headingOne"
							role="tab"
						>
							<span class="panel-title"
								>Collapsible Group Item #1</span
							>
							<span class="collapse-icon-closed">
								<svg
									class="lexicon-icon lexicon-icon-angle-left"
									focusable="false"
									role="presentation"
								>
									<use
										href="/images/icons/icons.svg#angle-left"
									></use>
								</svg>
							</span>
							<span class="collapse-icon-open">
								<svg
									class="lexicon-icon lexicon-icon-angle-down"
									focusable="false"
									role="presentation"
								>
									<use
										href="/images/icons/icons.svg#angle-down"
									></use>
								</svg>
							</span>
						</a>
						<div
							aria-labelledby="headingOne"
							class="panel-collapse collapse"
							id="collapseOne"
							role="tabpanel"
						>
							<div class="panel-body">
								In organic dripper so, body, robust medium
								pumpkin spice cup, in aged dripper latte extra
								cup white.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				aria-labelledby="sidebarLightVersionsTab"
				class="fade tab-pane"
				id="sidebarLightVersions"
				role="tabpanel"
			>
				<ul class="list-group sidebar-list-group">
					<li class="list-group-item list-group-item-flex">
						<div class="autofit-col autofit-col-expand">
							<div class="list-group-title">Version 1.2</div>
							<div class="list-group-subtitle">
								By Helen, on 8/31/17 9:15am
							</div>
							<div class="list-group-subtext">No Change Log</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a
									aria-expanded="false"
									aria-haspopup="true"
									class="component-action dropdown-toggle"
									data-toggle="dropdown"
									href="#1"
									id="sidebarLightListDropdownId01"
									role="button"
								>
									<svg
										class="lexicon-icon lexicon-icon-ellipsis-v"
										focusable="false"
										role="presentation"
									>
										<use
											href="/images/icons/icons.svg#ellipsis-v"
										></use>
									</svg>
								</a>
								<ul
									aria-labelledby="sidebarLightListDropdownId01"
									class="dropdown-menu"
									x-placement="bottom-start"
									style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 811px, 0px);"
									x-out-of-boundaries=""
								>
									<li>
										<a
											class="dropdown-item"
											href="#1"
											role="button"
											>Download</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#1"
											>Edit</a
										>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
```

### Sidebar Dark(#css-sidebar-dark)

Just add `sidebar-dark` class on the same element that you are using `sidebar`.

<div class="sheet-example">
	<div class="row">
		<div class="col-md-6">
			<div class="sidebar sidebar-dark">
				<div class="sidebar-header">
					<div class="autofit-row sidebar-section">
						<div class="autofit-col autofit-col-expand">
							<div class="component-title">
								<span class="text-truncate-inline">
									<a class="text-truncate" href="#1">Site Configuration</a>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="sidebar-body">
					<ul class="nav nav-nested">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
						<li class="nav-item"><a class="disabled nav-link" href="#1" tabindex="-1">Documents and Media</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sidebar sidebar-dark">
	<div class="sidebar-header">
		<div class="autofit-row sidebar-section">
			<div class="autofit-col autofit-col-expand">
				<div class="component-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>Site Configuration</a
						>
					</span>
				</div>
			</div>
			<div class="autofit-col">
				<button aria-label="Close" class="close" type="button">
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a class="active nav-link" href="#1">Details</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Categorization</a>
			</li>
			<li class="nav-item">
				<a class="disabled nav-link" href="#1" tabindex="-1"
					>Documents and Media</a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Site Template</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Configuration</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Identification</a>
			</li>
		</ul>
	</div>
</div>
```

### Sidebar Dark L2(#css-sidebar-dark-l2)

Just add `sidebar-dark-l2` class on the same element that you are using `sidebar`.

<div class="sheet-example">
	<div class="row">
		<div class="col-md-6">
			<div class="sidebar sidebar-dark-l2">
				<div class="sidebar-header">
					<div class="autofit-row sidebar-section">
						<div class="autofit-col autofit-col-expand">
							<div class="component-title">
								<span class="text-truncate-inline">
									<a class="text-truncate" href="#1">Site Configuration</a>
								</span>
							</div>
						</div>
						<div class="autofit-col">
							<button aria-label="Close" class="close" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="sidebar-body">
					<ul class="nav nav-nested">
						<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
						<li class="nav-item"><a class="disabled nav-link" href="#1" tabindex="-1">Documents and Media</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Configuration</a></li>
						<li class="nav-item"><a class="nav-link" href="#1">Identification</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sidebar sidebar-dark-l2">
	<div class="sidebar-header">
		<div class="autofit-row sidebar-section">
			<div class="autofit-col autofit-col-expand">
				<div class="component-title">
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1"
							>Site Configuration</a
						>
					</span>
				</div>
			</div>
			<div class="autofit-col">
				<button aria-label="Close" class="close" type="button">
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="sidebar-body">
		<ul class="nav nav-nested">
			<li class="nav-item">
				<a class="active nav-link" href="#1">Details</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Categorization</a>
			</li>
			<li class="nav-item">
				<a class="disabled nav-link" href="#1" tabindex="-1"
					>Documents and Media</a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Site Template</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Configuration</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#1">Identification</a>
			</li>
		</ul>
	</div>
</div>
```
