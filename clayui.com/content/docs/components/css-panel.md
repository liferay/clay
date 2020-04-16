---
title: 'Panel'
description: 'Panel provides an expandable details-summary view.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Basic Usage](#basic-usage)
-   [Collapsable](#collapsable)
-   [Groups](#groups)
-   [With Sheets](#with-sheets)

</div>
</div>

## Basic Usage

<div class="sheet-example">
    <div class="panel" role="tablist">
        <div class="panel-header">
            <span class="panel-title">Title</span>
        </div>
        <div class="panel-header">Header!</div>
        <div class="panel-body">Body!</div>
        <div class="panel-footer">Footer!</div>
    </div>
</div>

```html
<div class="panel" role="tablist">
	<div class="panel-header">
		<span class="panel-title">Title</span>
	</div>
	<div class="panel-header">Header!</div>
	<div class="panel-body">Body!</div>
	<div class="panel-footer">Footer!</div>
</div>
```

## Collapsable

Collapsable panels provide you with the ability to expand and collapse content as needed. They can simplify the interface by hiding content until it is needed.

<div class="sheet-example">
	<div class="panel" role="tablist">
		<button
			aria-controls="collapsePanel"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
            data-target="#collapsablePanel" 
            data-toggle="collapse"
			role="tab"
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
		<div class="panel-collapse collapse" id="collapsablePanel" role="tabpanel">
			<div class="panel-header">Header!</div>
			<div class="panel-body">Body!</div>
			<div class="panel-footer">Footer!</div>
		</div>
	</div>
</div>

```html
<div class="panel" role="tablist">
	<button
		aria-controls="collapsePanel"
		aria-expanded="false"
		class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
		data-target="#collapsablePanel"
		data-toggle="collapse"
		role="tab"
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
	<div class="panel-collapse collapse" id="collapsablePanel" role="tabpanel">
		<div class="panel-header">Header!</div>
		<div class="panel-body">Body!</div>
		<div class="panel-footer">Footer!</div>
	</div>
</div>
```

## Groups

Grouped panels provide you with the ability of making accordion-like elements with multiple collapsable panels.

<div class="sheet-example">
    <div aria-orientation="vertical" class="panel-group" role="tablist">
        <div class="panel" role="tablist">
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
        <div class="panel" role="tablist">
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
        <div class="panel" role="tablist">
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
</div>

```html
<div aria-orientation="vertical" class="panel-group" role="tablist">
	<div class="panel" role="tablist">
		<button
			aria-controls="collapsePanelOne"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsePanelOne"
			data-toggle="collapse"
			role="tab"
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
		<div
			class="panel-collapse collapse"
			id="collapsePanelOne"
			role="tabpanel"
		>
			<div class="panel-body">
				Here is some content inside for number One
			</div>
		</div>
	</div>
	<div class="panel" role="tablist">
		<button
			aria-controls="collapsePanelTwo"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsePanelTwo"
			data-toggle="collapse"
			role="tab"
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
		<div
			class="panel-collapse collapse"
			id="collapsePanelTwo"
			role="tabpanel"
		>
			<div class="panel-body">
				Here is some content inside for number Two
			</div>
		</div>
	</div>
	<div class="panel" role="tablist">
		<button
			aria-controls="collapsePanelThree"
			aria-expanded="false"
			class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
			data-target="#collapsePanelThree"
			data-toggle="collapse"
			role="tab"
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
		<div
			class="panel-collapse collapse"
			id="collapsePanelThree"
			role="tabpanel"
		>
			<div class="panel-body">
				Here is some content inside for number Three
			</div>
		</div>
	</div>
</div>
```

## With Sheets

Sometimes you might want to place a panel inside of a card or a sheet, in that case, wrap the Panel component in a `sheet` wrapper like below.

<div class="sheet-example">
    <div class="sheet">
        <div aria-orientation="vertical" class="panel-group panel-group-fluid" role="tablist">
            <div class="panel panel-secondary" role="tablist">
                <button aria-controls="collapseSheetPanelOne" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapseSheetPanelOne" data-toggle="collapse" role="tab">
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
                <div class="panel-collapse collapse" id="collapseSheetPanelOne" role="tabpanel">
                    <div class="panel-body">Here is some content inside for number One</div>
                </div>
            </div>
            <div class="panel panel-secondary" role="tablist">
                <button aria-controls="collapseSheetPanelTwo" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapseSheetPanelTwo" data-toggle="collapse" role="tab">
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
                <div class="panel-collapse collapse" id="collapseSheetPanelTwo" role="tabpanel">
                    <div class="panel-body">Here is some content inside for number Two</div>
                </div>
            </div>
            <div class="panel panel-secondary" role="tablist">
                <button aria-controls="collapseSheetPanelThree" aria-expanded="false" class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed" data-target="#collapseSheetPanelThree" data-toggle="collapse" role="tab">
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
                <div class="panel-collapse collapse" id="collapseSheetPanelThree" role="tabpanel">
                    <div class="panel-body">Here is some content inside for number Three</div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="sheet">
	<div
		aria-orientation="vertical"
		class="panel-group panel-group-fluid"
		role="tablist"
	>
		<div class="panel panel-secondary" role="tablist">
			<button
				aria-controls="collapseSheetPanelOne"
				aria-expanded="false"
				class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
				data-target="#collapseSheetPanelOne"
				data-toggle="collapse"
				role="tab"
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
			<div
				class="panel-collapse collapse"
				id="collapseSheetPanelOne"
				role="tabpanel"
			>
				<div class="panel-body">
					Here is some content inside for number One
				</div>
			</div>
		</div>
		<div class="panel panel-secondary" role="tablist">
			<button
				aria-controls="collapseSheetPanelTwo"
				aria-expanded="false"
				class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
				data-target="#collapseSheetPanelTwo"
				data-toggle="collapse"
				role="tab"
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
			<div
				class="panel-collapse collapse"
				id="collapseSheetPanelTwo"
				role="tabpanel"
			>
				<div class="panel-body">
					Here is some content inside for number Two
				</div>
			</div>
		</div>
		<div class="panel panel-secondary" role="tablist">
			<button
				aria-controls="collapseSheetPanelThree"
				aria-expanded="false"
				class="btn btn-unstyled panel-header panel-header-link collapse-icon collapse-icon-middle collapsed"
				data-target="#collapseSheetPanelThree"
				data-toggle="collapse"
				role="tab"
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
			<div
				class="panel-collapse collapse"
				id="collapseSheetPanelThree"
				role="tabpanel"
			>
				<div class="panel-body">
					Here is some content inside for number Three
				</div>
			</div>
		</div>
	</div>
</div>
```
