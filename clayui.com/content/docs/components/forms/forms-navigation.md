---
title: "Forms Navigation"
---

### Description

Form navigation can be displayed in two different ways: a left navigation menu or a wizard.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/formsNavigation.html">Forms Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Left navigation menu

For more information on this component and how to use it, see the [Vertical Navigation](/docs/components/navigation/vertical-navigation.html) page.

<div class="sheet">
	<div class="form-group">
		<nav class="menubar menubar-transparent menubar-vertical-expand-lg">
			<a aria-controls="menubarVerticalLgCollapse01" aria-expanded="false" class="menubar-toggler" data-toggle="collapse" href="#menubarVerticalLgCollapse01" role="button">
				Details
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</a>
			<div class="collapse menubar-collapse" id="menubarVerticalLgCollapse01">
				<ul class="nav nav-nested">
					<li class="nav-item">
						<a aria-controls="menubarVerticalLgNestedCollapse01" aria-expanded="true" class="collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse01" role="button">
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
						<div class="collapse show" id="menubarVerticalLgNestedCollapse01">
							<ul class="nav nav-stacked">
								<li class="nav-item"><a class="active nav-link" href="#1">Details</a></li>
								<li class="nav-item"><a class="nav-link" href="#1">Categorization</a></li>
								<li class="nav-item">
									<a aria-controls="menubarVerticalLgNestedCollapse02" aria-expanded="false" class="collapsed collapse-icon nav-link" data-toggle="collapse" href="#menubarVerticalLgNestedCollapse02" role="button">
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



>

### Wizards

#### Multi Step Form

For more information on this component and how to use it, see the [Multi Step Form](/docs/components/forms/multi-step-form.html) page.

<div class="sheet">
	<ol class="multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-top">
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 01</div>
				<a class="multi-step-icon" data-multi-step-icon="1" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 02</div>
				<a class="multi-step-icon" data-multi-step-icon="2" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 03</div>
				<a class="multi-step-icon" data-multi-step-icon="3" href="#1"></a>
			</div>
		</li>
		<li class="complete multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 04</div>
				<a class="multi-step-icon" data-multi-step-icon="4" href="#1"></a>
			</div>
		</li>
		<li class="active multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="dropdown multi-step-indicator">
				<div class="multi-step-indicator-label">Step 05</div>
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle multi-step-icon" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-h" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-h"></use>
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-indicator-end">
					<a class="active complete dropdown-item" href="#1">
						5. Step Five
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						6. Step Six
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="complete dropdown-item" href="#1">
						7. Step Seven
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a class="dropdown-item" href="#1">
						8. Step Eight
						<span aria-hidden="true" class="dropdown-item-indicator">
							<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</div>
			</div>
		</li>
		<li class="disabled multi-step-item multi-step-item-expand">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 09</div>
				<a class="multi-step-icon" data-multi-step-icon="9" href="#1"></a>
			</div>
		</li>
		<li class="multi-step-item">
			<div class="multi-step-divider"></div>
			<div class="multi-step-indicator">
				<div class="multi-step-indicator-label">Step 10</div>
				<a class="multi-step-icon" data-multi-step-icon="10" href="#1"></a>
			</div>
		</li>
	</ol>
</div>

#### Multi Step form Simplified

For more information on this component and how to use it, see the [Multi Step form Simplified](/docs/components/forms/multi-step-form-simplified.html) page.

<div class="sheet">
	<div class="form-group">
		<div class="tbar subnav-tbar subnav-tbar-light">
			<div class="container-fluid container-fluid-max-xl">
				<div class="tbar-nav">
					<div class="tbar-item tbar-item-expand">
						<div class="tbar-section">
							<span class="component-text text-truncate-inline">
								<span class="text-truncate">User Information</span>
							</span>
						</div>
					</div>
					<div class="tbar-item">
						<span class="component-text">Step 1 of 2</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

