---
title: 'C Prefers Reduced Motion'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Introduction](#css-c-prefers-reduced-motion-introduction)
-   [Accordion](#css-c-prefers-reduced-motion-accordion)

</div>
</div>

## Introduction(#css-c-prefers-reduced-motion-introduction)

The class `c-prefers-reduced-motion` removes transitions from child elements. It allows the site creator to remove any CSS transition in a specific section or on the whole page without having to depend on the operating system's non-essential motion setting.

It also removes `scroll-behavior: smooth` if it is enabled. You can place `c-prefers-reduced-motion` on whatever element has the CSS property `scroll-behavior: smooth` to remove it. If this class is placed on the `html` element, it will remove all CSS transitions for the page.

## Accordion(#css-c-prefers-reduced-motion-accordion)

The example below is an accordion with transitions enabled.

<div class="sheet-example">
	<div aria-orientation="vertical" class="panel-group" role="tablist">
		<div class="panel panel-secondary" role="tablist">
			<button aria-controls="collapsePanelOne" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelOne" data-toggle="collapse" role="tab">
				<span class="panel-title">One</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-down"></use>
					</svg>
				</span>
			</button>
			<div class="panel-collapse collapse" id="collapsePanelOne" role="tabpanel">
				<div class="panel-body">Here is some content inside for number One</div>
			</div>
		</div>
		<div class="panel panel-secondary" role="tablist">
			<button aria-controls="collapsePanelTwo" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelTwo" data-toggle="collapse" role="tab">
				<span class="panel-title">Two</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-down"></use>
					</svg>
				</span>
			</button>
			<div class="panel-collapse collapse" id="collapsePanelTwo" role="tabpanel">
				<div class="panel-body">Here is some content inside for number Two</div>
			</div>
		</div>
		<div class="panel panel-secondary" role="tablist">
			<button aria-controls="collapsePanelThree" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelThree" data-toggle="collapse" role="tab">
				<span class="panel-title">Three</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-down"></use>
					</svg>
				</span>
			</button>
			<div class="panel-collapse collapse" id="collapsePanelThree" role="tabpanel">
				<div class="panel-body">Here is some content inside for number Three</div>
			</div>
		</div>
	</div>
	<div class="mt-3">
		<button class="btn btn-primary" onclick="event.currentTarget.closest('.sheet-example').classList.toggle('c-prefers-reduced-motion');" type="button">Toggle C Prefers Reduced Motion</button>
	</div>
</div>
