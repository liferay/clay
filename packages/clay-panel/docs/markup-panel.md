---
title: 'Panel'
description: 'Panel provides an expandable details-summary view.'
mainTabURL: 'docs/components/panel.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Basic Usage](#css-basic-usage)
    -   [Secondary](#css-panel-secondary)
    -   [Unstyled](#css-panel-unstyled)
-   [Collapsible](#css-collapsible)
-   [Groups](#css-groups)
-   [With Sheets](#css-with-sheets)
-   [With a Custom Title](#css-with-a-custom-title)

</div>
</div>

## Basic Usage(#css-basic-usage)

<div class="sheet-example">
	<div class="panel" >
		<div class="panel-header">
			<span class="panel-title">Title</span>
		</div>
		<div class="panel-header">Header!</div>
		<div class="panel-body">Body!</div>
		<div class="panel-footer">Footer!</div>
	</div>
</div>

```html
<div class="panel">
	<div class="panel-header">
		<span class="panel-title">Title</span>
	</div>
	<div class="panel-header">Header!</div>
	<div class="panel-body">Body!</div>
	<div class="panel-footer">Footer!</div>
</div>
```

### Secondary(#css-panel-secondary)

<div class="sheet-example">
	<div class="panel panel-secondary" >
		<div class="panel-header">
			<span class="panel-title">Title</span>
		</div>
		<div class="panel-body">Body!</div>
		<div class="panel-footer">Footer!</div>
	</div>
</div>

```html
<div class="panel panel-secondary">
	<div class="panel-header">
		<span class="panel-title">Title</span>
	</div>
	<div class="panel-body">Body!</div>
	<div class="panel-footer">Footer!</div>
</div>
```

### Unstyled(#css-panel-unstyled)

<div class="sheet-example">
	<div class="panel panel-unstyled" >
		<div class="panel-header">
			<span class="panel-title">Title</span>
		</div>
		<div class="panel-body">Body!</div>
		<div class="panel-footer">Footer!</div>
	</div>
</div>

```html
<div class="panel panel-unstyled">
	<div class="panel-header">
		<span class="panel-title">Title</span>
	</div>
	<div class="panel-body">Body!</div>
	<div class="panel-footer">Footer!</div>
</div>
```

## Collapsible(#css-collapsible)

Collapsable panels provide you with the ability to expand and collapse content as needed. They can simplify the interface by hiding content until it is needed.

<div class="clay-site-alert alert alert-warning">
	This page uses Bootstrap's collapse plugin which requires JQuery. Liferay 7.4 no longer includes JQuery by default. We have included a standalone collapse plugin in 7.4, just replace the attribute <code>data-toggle="collapse"</code> with <code>data-toggle="liferay-collapse"</code> on the trigger.
</div>

<div class="sheet-example">
	<div class="panel" >
		<button
			aria-controls="collapsePanel"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsablePanel" 
			data-toggle="collapse"
			
		>
			<span class="panel-title">Toggle me for expanding!</span>
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					role="presentation"
				>
					<use
						xlink:href="/images/icons/icons.svg#angle-right"
					></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-angle-down"
					role="presentation"
				>
					<use
						xlink:href="/images/icons/icons.svg#angle-down"
					></use>
				</svg>
			</span>
		</button>
		<div class="panel-collapse collapse" id="collapsablePanel" >
			<div class="panel-header">Header!</div>
			<div class="panel-body">Body!</div>
			<div class="panel-footer">Footer!</div>
		</div>
	</div>
</div>

```html
<div class="panel">
	<button
		aria-controls="collapsePanel"
		aria-expanded="false"
		class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
		data-target="#collapsablePanel"
		data-toggle="collapse"
	>
		<span class="panel-title">Toggle me for expanding!</span>
		<span class="collapse-icon-closed">
			<svg
				class="lexicon-icon lexicon-icon-angle-right"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#angle-right"></use>
			</svg>
		</span>
		<span class="collapse-icon-open">
			<svg
				class="lexicon-icon lexicon-icon-angle-down"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#angle-down"></use>
			</svg>
		</span>
	</button>
	<div class="panel-collapse collapse" id="collapsablePanel">
		<div class="panel-header">Header!</div>
		<div class="panel-body">Body!</div>
		<div class="panel-footer">Footer!</div>
	</div>
</div>
```

## Groups(#css-groups)

Grouped panels provide you with the ability of making accordion-like elements with multiple collapsable panels.

<div class="sheet-example">
	<div  class="panel-group" >
		<div class="panel panel-secondary" >
			<button aria-controls="collapsePanelOne" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelOne" data-toggle="collapse" >
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
			<div class="panel-collapse collapse" id="collapsePanelOne" >
				<div class="panel-body">Here is some content inside for number One</div>
			</div>
		</div>
		<div class="panel panel-secondary" >
			<button aria-controls="collapsePanelTwo" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelTwo" data-toggle="collapse" >
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
			<div class="panel-collapse collapse" id="collapsePanelTwo" >
				<div class="panel-body">Here is some content inside for number Two</div>
			</div>
		</div>
		<div class="panel panel-secondary" >
			<button aria-controls="collapsePanelThree" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelThree" data-toggle="collapse" >
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
			<div class="panel-collapse collapse" id="collapsePanelThree" >
				<div class="panel-body">Here is some content inside for number Three</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="panel-group">
	<div class="panel panel-secondary">
		<button
			aria-controls="collapsePanelOne"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsePanelOne"
			data-toggle="collapse"
		>
			<span class="panel-title">One</span>
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#angle-right"></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-angle-down"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#angle-down"></use>
				</svg>
			</span>
		</button>
		<div class="panel-collapse collapse" id="collapsePanelOne">
			<div class="panel-body">
				Here is some content inside for number One
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<button
			aria-controls="collapsePanelTwo"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsePanelTwo"
			data-toggle="collapse"
		>
			<span class="panel-title">Two</span>
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#angle-right"></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-angle-down"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#angle-down"></use>
				</svg>
			</span>
		</button>
		<div class="panel-collapse collapse" id="collapsePanelTwo">
			<div class="panel-body">
				Here is some content inside for number Two
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<button
			aria-controls="collapsePanelThree"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsePanelThree"
			data-toggle="collapse"
		>
			<span class="panel-title">Three</span>
			<span class="collapse-icon-closed">
				<svg
					class="lexicon-icon lexicon-icon-angle-right"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#angle-right"></use>
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg
					class="lexicon-icon lexicon-icon-angle-down"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#angle-down"></use>
				</svg>
			</span>
		</button>
		<div class="panel-collapse collapse" id="collapsePanelThree">
			<div class="panel-body">
				Here is some content inside for number Three
			</div>
		</div>
	</div>
</div>
```

## With Sheets(#css-with-sheets)

Sometimes you might want to place a panel inside of a card or a sheet, in that case, wrap the Panel component in a `sheet` wrapper like below.

<div class="sheet-example">
	<div class="sheet">
		<div class="sheet-header">
			<h4 class="sheet-title">Sheet Title</h4>
		</div>
		<div  class="panel-group panel-group-flush" >
			<div class="panel panel-unstyled" >
				<button aria-controls="collapseSheetPanelOne" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapseSheetPanelOne" data-toggle="collapse" >
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
				<div class="panel-collapse collapse" id="collapseSheetPanelOne" >
					<div class="panel-body">Here is some content inside for number One</div>
				</div>
			</div>
			<div class="panel panel-unstyled" >
				<button aria-controls="collapseSheetPanelTwo" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapseSheetPanelTwo" data-toggle="collapse" >
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
				<div class="panel-collapse collapse" id="collapseSheetPanelTwo" >
					<div class="panel-body">Here is some content inside for number Two</div>
				</div>
			</div>
			<div class="panel panel-unstyled" >
				<button aria-controls="collapseSheetPanelThree" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapseSheetPanelThree" data-toggle="collapse" >
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
				<div class="panel-collapse collapse" id="collapseSheetPanelThree" >
					<div class="panel-body">Here is some content inside for number Three</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet">
	<div class="sheet-header">
		<h4 class="sheet-title">Sheet Title</h4>
	</div>
	<div class="panel-group panel-group-flush">
		<div class="panel panel-unstyled">
			<button
				aria-controls="collapseSheetPanelOne"
				aria-expanded="false"
				class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
				data-target="#collapseSheetPanelOne"
				data-toggle="collapse"
			>
				<span class="panel-title">One</span>
				<span class="collapse-icon-closed">
					<svg
						class="lexicon-icon lexicon-icon-angle-right"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#angle-right"
						></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg
						class="lexicon-icon lexicon-icon-angle-down"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#angle-down"
						></use>
					</svg>
				</span>
			</button>
			<div class="panel-collapse collapse" id="collapseSheetPanelOne">
				<div class="panel-body">
					Here is some content inside for number One
				</div>
			</div>
		</div>
		<div class="panel panel-unstyled">
			<button
				aria-controls="collapseSheetPanelTwo"
				aria-expanded="false"
				class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
				data-target="#collapseSheetPanelTwo"
				data-toggle="collapse"
			>
				<span class="panel-title">Two</span>
				<span class="collapse-icon-closed">
					<svg
						class="lexicon-icon lexicon-icon-angle-right"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#angle-right"
						></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg
						class="lexicon-icon lexicon-icon-angle-down"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#angle-down"
						></use>
					</svg>
				</span>
			</button>
			<div class="panel-collapse collapse" id="collapseSheetPanelTwo">
				<div class="panel-body">
					Here is some content inside for number Two
				</div>
			</div>
		</div>
		<div class="panel panel-unstyled">
			<button
				aria-controls="collapseSheetPanelThree"
				aria-expanded="false"
				class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
				data-target="#collapseSheetPanelThree"
				data-toggle="collapse"
			>
				<span class="panel-title">Three</span>
				<span class="collapse-icon-closed">
					<svg
						class="lexicon-icon lexicon-icon-angle-right"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#angle-right"
						></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg
						class="lexicon-icon lexicon-icon-angle-down"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#angle-down"
						></use>
					</svg>
				</span>
			</button>
			<div class="panel-collapse collapse" id="collapseSheetPanelThree">
				<div class="panel-body">
					Here is some content inside for number Three
				</div>
			</div>
		</div>
	</div>
</div>
```

## With a Custom Title(#css-with-a-custom-title)

Sometimes you want to have some custom content that's not a string or a number in your title, that's where `ClayPanel.Title` comes in handy. It allows you to add custom content to the title of the panel as seen in this example using `ClayLabels`.

<div class="sheet-example">
	<div class="panel panel-secondary" >
		<button aria-controls="panelWithCustomTitle" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapsePanelWithCustomTitle" data-toggle="collapse" >
			<div>
				<h3>Title</h3>
				<span>If field </span>
				<span class="label label-success">
					<span class="label-item label-item-expand">Country</span>
				</span>
				<span class="label label-secondary">
					<span class="label-item label-item-expand">Is Equal To</span>
				</span>
				<span>value </span>
				<span class="label label-info">
					<span class="label-item label-item-expand">Brazil</span>
				</span>
				<span>enable </span>
				<span class="label label-success">
					<span class="label-item label-item-expand">State</span>
				</span>
			</div>
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
		<div class="panel-collapse collapse" id="collapsePanelWithCustomTitle" >
			<div class="panel-body">Body!</div>
		</div>
	</div>
</div>

```html
<div class="panel panel-secondary">
	<button
		aria-controls="panelWithCustomTitle"
		aria-expanded="false"
		class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
		data-target="#collapsePanelWithCustomTitle"
		data-toggle="collapse"
	>
		<div>
			<h3>Title</h3>
			<span>If field </span>
			<span class="label label-success">
				<span class="label-item label-item-expand">Country</span>
			</span>
			<span class="label label-secondary">
				<span class="label-item label-item-expand">Is Equal To</span>
			</span>
			<span>value </span>
			<span class="label label-info">
				<span class="label-item label-item-expand">Brazil</span>
			</span>
			<span>enable </span>
			<span class="label label-success">
				<span class="label-item label-item-expand">State</span>
			</span>
		</div>
		<span class="collapse-icon-closed">
			<svg
				class="lexicon-icon lexicon-icon-angle-right"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#angle-right"></use>
			</svg>
		</span>
		<span class="collapse-icon-open">
			<svg
				class="lexicon-icon lexicon-icon-angle-down"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#angle-down"></use>
			</svg>
		</span>
	</button>
	<div class="panel-collapse collapse" id="collapsePanelWithCustomTitle">
		<div class="panel-body">Body!</div>
	</div>
</div>
```
