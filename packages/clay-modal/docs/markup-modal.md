---
title: 'Modals'
description: 'A modal is a secondary window that communicates or provides an action inside the same process.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/modals/'
mainTabURL: 'docs/components/modal.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Sizes](#css-sizes)
    -   [Small](#css-small)
    -   [Default](#css-default)
    -   [Large](#css-large)
    -   [Full Screen](#css-full-screen)
        -   [All Screen Sizes](#css-all-screen-sizes)
        -   [Sm Down](#css-sm-down)
    -   [Height](#css-height)
        -   [Small](#css-height-small)
        -   [Medium](#css-height-medium)
        -   [Large](#css-height-large)
        -   [Extra Large](#css-height-extra-large)
        -   [Full Screen](#css-height-full-screen)
-   [Configurations](#css-configurations)
    -   [Header, Body and Footer](#css-header,-body-and-footer)
    -   [Header, Nav, Body and Footer](#css-header-nav-body-footer)
    -   [Header and Body](#css-header-and-body)
    -   [Body and Footer](#css-body-and-footer)
-   [Grid](#css-grid)
-   [Iframe](#css-iframe)
-   [Status Messages](#css-status-messages)
    -   [Success](#css-success)
    -   [Info](#css-info)
    -   [Warning](#css-warning)
    -   [Danger](#css-danger)
-   [Helpers](#css-helpers)
    -   [Footer Alignment](#css-footer-alignment)
    -   [Vertically Centered](#css-vertically-centered)
    -   [Remove Animation](#css-remove-animation)
    -   [Inline Scroller](#css-inline-scroller)

</div>
</div>

## Sizes(#css-sizes)

### Small(#css-small)

300px wide modal window, expands full width of screen at 575px and below.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#claySmallModal" data-toggle="modal" type="button">Small Modal</button>
    <div aria-labelledby="claySmallModalLabel" class="fade modal" id="claySmallModal" role="dialog" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="claySmallModalLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" role="button" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group">
                            <div class="btn-group-item">
                                <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                            </div>
                            <div class="btn-group-item">
                                <button class="btn btn-primary" type="button">Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModal"
	data-toggle="modal"
	type="button"
>
	Small Modal
</button>
<div
	aria-labelledby="claySmallModalLabel"
	class="fade modal"
	id="claySmallModal"
	role="dialog"
	tabindex="-1"
	aria-hidden="true"
	style="display: none;"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="claySmallModalLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					role="button"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Default(#css-default)

500px wide modal window, expands full width of screen at 575px and below.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayDefaultModal" data-toggle="modal" type="button">Default Modal</button>
    <div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayDefaultModal" role="dialog" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayDefaultModalLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" role="button" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayDefaultModal"
	data-toggle="modal"
	type="button"
>
	Default Modal
</button>
<div
	aria-labelledby="clayDefaultModalLabel"
	class="fade modal"
	id="clayDefaultModal"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayDefaultModalLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					role="button"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Large(#css-large)

The large modal is an 800px wide window on displays greater than 992px. It is a 500px wide modal on displays between 576px and 991px. It expands full screen width on displays 575px and below.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayLargeModal" data-toggle="modal" type="button">Large Modal</button>
    <div aria-labelledby="clayLargeModalLabel" class="fade modal" id="clayLargeModal" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayLargeModalLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" role="button" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4><a href="#1">Modal Body</a></h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayLargeModal"
	data-toggle="modal"
	type="button"
>
	Large Modal
</button>
<div
	aria-labelledby="clayLargeModalLabel"
	class="fade modal"
	id="clayLargeModal"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayLargeModalLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					role="button"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4><a href="#1">Modal Body</a></h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Full Screen(#css-full-screen)

#### All Screen Sizes(#css-all-screen-sizes)

The full screen modal stretches to fit the browser window, with 45px spacing on every side, and expands to fill the screen on displays 767px and below.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayFullScreenModal" data-toggle="modal" type="button">Full Screen Modal</button>
    <div aria-labelledby="clayLargeModalLabel" class="fade modal" id="clayFullScreenModal" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-full-screen">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayLargeModalLabel">Add Picture to Documents and Media Library in Liferay Seven</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                    <div>
                        <p>
                            <a href="#1">Crema coffee</a> a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
                        </p>
                        <p>
                            Irish coffee, at as cultivar robusta fair trade. Variety, caramelization, sweet, steamed, breve sit, whipped spoon at in caffeine. So latte, half and half, instant café au lait whipped extra at percolator.
                        </p>
                        <p>
                            Skinny extraction, viennese arabica aromatic robust kopi-luwak. Carajillo chicory dark espresso qui iced sugar. To go, at café au lait chicory, qui, fair trade irish, beans seasonal extraction cappuccino kopi-luwak.
                        </p>
                        <p>
                            Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
                        </p>
                        <p>
                            Irish coffee, at as cultivar robusta fair trade. Variety, caramelization, sweet, steamed, breve sit, whipped spoon at in caffeine. So latte, half and half, instant café au lait whipped extra at percolator.
                        </p>
                        <p>
                            Skinny extraction, viennese arabica aromatic robust kopi-luwak. Carajillo chicory dark espresso qui iced sugar. To go, at café au lait chicory, qui, fair trade irish, beans seasonal extraction cappuccino kopi-luwak.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayFullScreenModal"
	data-toggle="modal"
	type="button"
>
	Full Screen Modal
</button>
<div
	aria-labelledby="clayLargeModalLabel"
	class="fade modal"
	id="clayFullScreenModal"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-full-screen">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayLargeModalLabel">
					Add Picture to Documents and Media Library in Liferay Seven
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
				<div>
					<p>
						<a href="#1">Crema coffee</a> a turkish decaffeinated
						espresso dripper cortado lungo con panna. Coffee, roast
						cup blue mountain beans single origin eu shop grounds
						caffeine a robusta. Sweet macchiato spoon, mug foam ut
						est ristretto.
					</p>
					<p>
						Irish coffee, at as cultivar robusta fair trade.
						Variety, caramelization, sweet, steamed, breve sit,
						whipped spoon at in caffeine. So latte, half and half,
						instant café au lait whipped extra at percolator.
					</p>
					<p>
						Skinny extraction, viennese arabica aromatic robust
						kopi-luwak. Carajillo chicory dark espresso qui iced
						sugar. To go, at café au lait chicory, qui, fair trade
						irish, beans seasonal extraction cappuccino kopi-luwak.
					</p>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper
						cortado lungo con panna. Coffee, roast cup blue mountain
						beans single origin eu shop grounds caffeine a robusta.
						Sweet macchiato spoon, mug foam ut est ristretto.
					</p>
					<p>
						Irish coffee, at as cultivar robusta fair trade.
						Variety, caramelization, sweet, steamed, breve sit,
						whipped spoon at in caffeine. So latte, half and half,
						instant café au lait whipped extra at percolator.
					</p>
					<p>
						Skinny extraction, viennese arabica aromatic robust
						kopi-luwak. Carajillo chicory dark espresso qui iced
						sugar. To go, at café au lait chicory, qui, fair trade
						irish, beans seasonal extraction cappuccino kopi-luwak.
					</p>
				</div>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Sm Down(#css-sm-down)

Add `modal-full-screen-sm-down` to any `modal-dialog` to stretch to fit the browser window at screen widths 767px and below.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayModalFullScreenSmDown" data-toggle="modal" type="button">Modal Full Screen Sm Down</button>
    <div aria-labelledby="clayModalFullScreenSmDownLabel" class="fade modal" id="clayModalFullScreenSmDown" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-full-screen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayModalFullScreenSmDownLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                    <div>
                        <p>
                            Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
                        </p>
                        <p>
                            Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
                        </p>
                        <p>
                            Irish coffee, at as cultivar robusta fair trade. Variety, caramelization, sweet, steamed, breve sit, whipped spoon at in caffeine. So latte, half and half, instant café au lait whipped extra at percolator.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayModalFullScreenSmDown"
	data-toggle="modal"
	type="button"
>
	Modal Full Screen Sm Down
</button>
<div
	aria-labelledby="clayModalFullScreenSmDownLabel"
	class="fade modal"
	id="clayModalFullScreenSmDown"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalFullScreenSmDownLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper
						cortado lungo con panna. Coffee, roast cup blue mountain
						beans single origin eu shop grounds caffeine a robusta.
						Sweet macchiato spoon, mug foam ut est ristretto.
					</p>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper
						cortado lungo con panna. Coffee, roast cup blue mountain
						beans single origin eu shop grounds caffeine a robusta.
						Sweet macchiato spoon, mug foam ut est ristretto.
					</p>
					<p>
						Irish coffee, at as cultivar robusta fair trade.
						Variety, caramelization, sweet, steamed, breve sit,
						whipped spoon at in caffeine. So latte, half and half,
						instant café au lait whipped extra at percolator.
					</p>
				</div>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Height(#css-height)

#### Small(#css-height-small)

Add the class `modal-height-sm` to the `modal` or `modal-dialog` element to fix the height of the modal to 250px.

<button class="btn btn-primary" data-target="#claySmallModalModalHeightSm" data-toggle="modal" type="button">Modal Height SM</button>

<div aria-labelledby="claySmallModalModalHeightSmLabel" class="fade modal modal-height-sm" id="claySmallModalModalHeightSm" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div class="modal-title" id="claySmallModalModalHeightSmLabel">Modal Title</div>
						</div>
					</div>
				</div>
				<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">Primary</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModalModalHeightSm"
	data-toggle="modal"
	type="button"
>
	Modal Height SM
</button>
<div
	aria-labelledby="claySmallModalModalHeightSmLabel"
	class="fade modal modal-height-sm"
	id="claySmallModalModalHeightSm"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="claySmallModalModalHeightSmLabel"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Medium(#css-height-medium)

Add the class `modal-height-md` to the `modal` or `modal-dialog` element to fix the height of the modal to 450px.

<button class="btn btn-primary" data-target="#claySmallModalModalHeightMd" data-toggle="modal" type="button">Modal Height MD</button>

<div aria-labelledby="claySmallModalModalHeightMdLabel" class="fade modal modal-height-md" id="claySmallModalModalHeightMd" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div class="modal-title" id="claySmallModalModalHeightMdLabel">Modal Title</div>
						</div>
					</div>
				</div>
				<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">Primary</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModalModalHeightMd"
	data-toggle="modal"
	type="button"
>
	Modal Height MD
</button>
<div
	aria-labelledby="claySmallModalModalHeightMdLabel"
	class="fade modal modal-height-md"
	id="claySmallModalModalHeightMd"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="claySmallModalModalHeightMdLabel"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Large(#css-height-large)

Add the class `modal-height-lg` to the `modal` or `modal-dialog` element to fix the height of the modal to 650px.

<button class="btn btn-primary" data-target="#claySmallModalModalHeightLg" data-toggle="modal" type="button">Modal Height LG</button>

<div aria-labelledby="claySmallModalModalHeightLgLabel" class="fade modal modal-height-lg" id="claySmallModalModalHeightLg" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div class="modal-title" id="claySmallModalModalHeightLgLabel">Modal Title</div>
						</div>
					</div>
				</div>
				<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">Primary</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModalModalHeightLg"
	data-toggle="modal"
	type="button"
>
	Modal Height LG
</button>
<div
	aria-labelledby="claySmallModalModalHeightLgLabel"
	class="fade modal modal-height-lg"
	id="claySmallModalModalHeightLg"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="claySmallModalModalHeightLgLabel"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Extra Large(#css-height-extra-large)

Add the class `modal-height-xl` to the `modal` or `modal-dialog` element to fix the height of the modal to 800px.

<button class="btn btn-primary" data-target="#claySmallModalModalHeightXl" data-toggle="modal" type="button">Modal Height XL</button>

<div aria-labelledby="claySmallModalModalHeightXlLabel" class="fade modal modal-height-xl" id="claySmallModalModalHeightXl" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div class="modal-title" id="claySmallModalModalHeightXlLabel">Modal Title</div>
						</div>
					</div>
				</div>
				<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">Primary</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModalModalHeightXl"
	data-toggle="modal"
	type="button"
>
	Modal Height XL
</button>
<div
	aria-labelledby="claySmallModalModalHeightXlLabel"
	class="fade modal modal-height-xl"
	id="claySmallModalModalHeightXl"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="claySmallModalModalHeightXlLabel"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

#### Full Screen(#css-height-full-screen)

Add the class `modal-height-full` to the `modal` or `modal-dialog` element to expand the modal to fit to the height of the browser's window.

<button class="btn btn-primary" data-target="#claySmallModalModalHeightFull" data-toggle="modal" type="button">Modal Height Full</button>

<div aria-labelledby="claySmallModalModalHeightFullLabel" class="fade modal modal-height-full" id="claySmallModalModalHeightFull" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div class="modal-title" id="claySmallModalModalHeightFullLabel">Modal Title</div>
						</div>
					</div>
				</div>
				<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">Primary</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModalModalHeightFull"
	data-toggle="modal"
	type="button"
>
	Modal Height Full
</button>
<div
	aria-labelledby="claySmallModalModalHeightFullLabel"
	class="fade modal modal-height-full"
	id="claySmallModalModalHeightFull"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="claySmallModalModalHeightFullLabel"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Configurations(#css-configurations)

Lexicon allows your modal window to have different configurations to suite your needs. Because these needs can vary greatly, there are certain rules your modal must follow.

### Header, Body and Footer(#css-header,-body-and-footer)

A classic modal window is composed of three main parts: header, body, and footer.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayDefaultModal" data-toggle="modal" type="button">Default Modal</button>
    <div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayDefaultModal" role="dialog" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayDefaultModalLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" role="button" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayDefaultModal"
	data-toggle="modal"
	type="button"
>
	Default Modal
</button>
<div
	aria-labelledby="clayDefaultModalLabel"
	class="fade modal"
	id="clayDefaultModal"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayDefaultModalLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					role="button"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Header, Nav, Body and Footer(#css-header-nav-body-footer)

Insert a Navigation or Input Group between the Header and Body

<div class="sheet-example">
	<button class="btn btn-primary" data-target="#clayModalMgmtBar01" data-toggle="modal" type="button">Modal With Management Bar</button>
	<div aria-labelledby="clayModalMgmtBar01Label" class="fade modal" id="clayModalMgmtBar01" role="dialog" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<div class="modal-item-group">
						<div class="modal-item">
							<div class="modal-title-section">
								<div class="modal-title" id="clayModalMgmtBar01Label">
									Modal Title
								</div>
							</div>
						</div>
					</div>
					<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
						<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#times" />
						</svg>
					</button>
				</div>
				<nav class="management-bar management-bar-light navbar navbar-expand">
					<div class="container-fluid container-fluid-max-xl">
						<div class="navbar-form navbar-form-autofit">
							<form role="search">
								<div class="input-group">
									<div class="input-group-item">
										<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
										<span class="input-group-inset-item input-group-inset-item-after">
											<button aria-label="Search" class="btn btn-monospaced btn-unstyled" type="submit">
												<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#search" />
												</svg>
											</button>
											<button aria-label="Close search" class="btn btn-monospaced btn-unstyled d-none" type="button">
												<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times" />
												</svg>
											</button>
										</span>
									</div>
								</div>
							</form>
						</div>
						<ul class="navbar-nav">
							<li class="dropdown nav-item">
								<button aria-label="Add" aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle nav-btn nav-btn-monospaced" data-toggle="dropdown" type="button">
									<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
										<use xlink:href="/images/icons/icons.svg#plus" />
									</svg>
								</button>
								<ul class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start">
									<li>
										<a class="active dropdown-item" href="#1">
											<span class="dropdown-item-indicator-start">
												<svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#list" />
												</svg>
											</span>
											List View
										</a>
									</li>
									<li>
										<a class="dropdown-item" href="#1">
											<span class="dropdown-item-indicator-start">
												<svg class="lexicon-icon lexicon-icon-table" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#table" />
												</svg>
											</span>
											Table View
										</a>
									</li>
									<li>
										<a class="dropdown-item" href="#1">
											<span class="dropdown-item-indicator-start">
												<svg class="lexicon-icon lexicon-icon-cards2" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#cards2" />
												</svg>
											</span>
											Card View
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
				<div class="modal-body">
					<h4>Modal Body</h4>
				</div>
				<div class="modal-footer">
					<div class="modal-item-last">
						<div class="modal-item-last">
							<div class="btn-group">
								<div class="btn-group-item">
									<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
								</div>
								<div class="btn-group-item">
									<button class="btn btn-primary" type="button">Primary</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayModalMgmtBar01"
	data-toggle="modal"
	type="button"
>
	Modal With Management Bar
</button>
<div
	aria-labelledby="clayModalMgmtBar01Label"
	class="fade modal"
	id="clayModalMgmtBar01"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="clayModalMgmtBar01Label"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<nav
				class="management-bar management-bar-light navbar navbar-expand"
			>
				<div class="container-fluid container-fluid-max-xl">
					<div class="navbar-form navbar-form-autofit">
						<form role="search">
							<div class="input-group">
								<div class="input-group-item">
									<input
										class="form-control input-group-inset input-group-inset-after"
										placeholder="Search for..."
										type="text"
									/>
									<span
										class="input-group-inset-item input-group-inset-item-after"
									>
										<button
											aria-label="Search"
											class="btn btn-monospaced btn-unstyled"
											type="submit"
										>
											<svg
												class="lexicon-icon lexicon-icon-search"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#search"
												/>
											</svg>
										</button>
										<button
											aria-label="Close search"
											class="btn btn-monospaced btn-unstyled d-none"
											type="button"
										>
											<svg
												class="lexicon-icon lexicon-icon-times"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#times"
												/>
											</svg>
										</button>
									</span>
								</div>
							</div>
						</form>
					</div>
					<ul class="navbar-nav">
						<li class="dropdown nav-item">
							<button
								aria-label="Add"
								aria-expanded="false"
								aria-haspopup="true"
								class="btn btn-primary dropdown-toggle nav-btn nav-btn-monospaced"
								data-toggle="dropdown"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-plus"
									focusable="false"
									role="presentation"
								>
									<use
										xlink:href="/images/icons/icons.svg#plus"
									/>
								</svg>
							</button>
							<ul
								class="dropdown-menu dropdown-menu-right dropdown-menu-indicator-start"
							>
								<li>
									<a class="active dropdown-item" href="#1">
										<span
											class="dropdown-item-indicator-start"
										>
											<svg
												class="lexicon-icon lexicon-icon-list"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#list"
												/>
											</svg>
										</span>
										List View
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#1">
										<span
											class="dropdown-item-indicator-start"
										>
											<svg
												class="lexicon-icon lexicon-icon-table"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#table"
												/>
											</svg>
										</span>
										Table View
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#1">
										<span
											class="dropdown-item-indicator-start"
										>
											<svg
												class="lexicon-icon lexicon-icon-cards2"
												focusable="false"
												role="presentation"
											>
												<use
													xlink:href="/images/icons/icons.svg#cards2"
												/>
											</svg>
										</span>
										Card View
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="modal-item-last">
						<div class="btn-group">
							<div class="btn-group-item">
								<button
									class="btn btn-secondary"
									data-dismiss="modal"
									type="button"
								>
									Close
								</button>
							</div>
							<div class="btn-group-item">
								<button class="btn btn-primary" type="button">
									Primary
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

<div class="sheet-example">
	<button class="btn btn-primary" data-target="#clayModalInputGroup01" data-toggle="modal" type="button">Modal With Input Group</button>
	<div aria-labelledby="clayModalInputGroup01Label" class="fade modal" id="clayModalInputGroup01" role="dialog" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<div class="modal-item-group">
						<div class="modal-item">
							<div class="modal-title-section">
								<div class="modal-title" id="clayModalInputGroup01Label">
									Modal Title
								</div>
							</div>
						</div>
					</div>
					<button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
						<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#times" />
						</svg>
					</button>
				</div>
				<div class="align-items-center p-3 input-group">
					<div class="input-group-item">
						<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text">
						<div class="input-group-inset-item input-group-inset-item-after">
							<button aria-label="Close search" class="btn btn-unstyled d-md-none" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#times" />
								</svg>
							</button>
							<button aria-label="Search" class="btn btn-unstyled d-none d-md-inline-block" type="button">
								<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#search" />
								</svg>
							</button>
						</div>
					</div>
					<div class="input-group-item input-group-item-shrink">
						<button aria-label="Add" aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced btn-sm dropdown-toggle" data-toggle="dropdown" type="button">
							<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#plus" /></svg>
						</button>
						<ul class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1">Action</a></li>
							<li><a class="dropdown-item" href="#1">Another action</a></li>
							<li><a class="dropdown-item" href="#1">Something else here</a></li>
							<li class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#1">Separated link</a></li>
						</ul>
					</div>
				</div>
				<div class="modal-body">
					<h4>Modal Body</h4>
				</div>
				<div class="modal-footer">
					<div class="modal-item-last">
						<div class="modal-item-last">
							<div class="btn-group">
								<div class="btn-group-item">
									<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
								</div>
								<div class="btn-group-item">
									<button class="btn btn-primary" type="button">Primary</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayModalInputGroup01"
	data-toggle="modal"
	type="button"
>
	Modal With Input Group
</button>
<div
	aria-labelledby="clayModalInputGroup01Label"
	class="fade modal"
	id="clayModalInputGroup01"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-item-group">
					<div class="modal-item">
						<div class="modal-title-section">
							<div
								class="modal-title"
								id="clayModalInputGroup01Label"
							>
								Modal Title
							</div>
						</div>
					</div>
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use xlink:href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="align-items-center p-3 input-group">
				<div class="input-group-item">
					<input
						aria-label="Search for"
						class="form-control input-group-inset input-group-inset-after"
						placeholder="Search..."
						type="text"
					/>
					<div
						class="input-group-inset-item input-group-inset-item-after"
					>
						<button
							aria-label="Close search"
							class="btn btn-unstyled d-md-none"
							type="button"
						>
							<svg
								class="lexicon-icon lexicon-icon-times"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#times"
								/>
							</svg>
						</button>
						<button
							aria-label="Search"
							class="btn btn-unstyled d-none d-md-inline-block"
							type="button"
						>
							<svg
								class="lexicon-icon lexicon-icon-search"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#search"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="input-group-item input-group-item-shrink">
					<button
						aria-label="Add"
						aria-expanded="false"
						aria-haspopup="true"
						class="btn btn-primary btn-monospaced btn-sm dropdown-toggle"
						data-toggle="dropdown"
						type="button"
					>
						<svg
							class="lexicon-icon lexicon-icon-plus"
							focusable="false"
							role="presentation"
						>
							<use xlink:href="/images/icons/icons.svg#plus" />
						</svg>
					</button>
					<ul class="dropdown-menu dropdown-menu-right">
						<li><a class="dropdown-item" href="#1">Action</a></li>
						<li>
							<a class="dropdown-item" href="#1"
								>Another action</a
							>
						</li>
						<li>
							<a class="dropdown-item" href="#1"
								>Something else here</a
							>
						</li>
						<li class="dropdown-divider"></li>
						<li>
							<a class="dropdown-item" href="#1"
								>Separated link</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="modal-item-last">
						<div class="btn-group">
							<div class="btn-group-item">
								<button
									class="btn btn-secondary"
									data-dismiss="modal"
									type="button"
								>
									Close
								</button>
							</div>
							<div class="btn-group-item">
								<button class="btn btn-primary" type="button">
									Primary
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Header and Body(#css-header-and-body)

When you don't need a footer bar to place your icons, you can just have a header and body element in your modal, as shown below:

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayHeaderBodyModal" data-toggle="modal" type="button">Default Modal</button>
    <div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayHeaderBodyModal" role="dialog" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayHeaderBodyModalLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" role="button" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayHeaderBodyModal"
	data-toggle="modal"
	type="button"
>
	Default Modal
</button>
<div
	aria-labelledby="clayDefaultModalLabel"
	class="fade modal"
	id="clayHeaderBodyModal"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayHeaderBodyModalLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					role="button"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
		</div>
	</div>
</div>
```

### Body and Footer(#css-body-and-footer)

When you just need to show text and buttons to agree or cancel, you can just have a body and footer element in your modal, as shown below:

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayBodyFooterModal" data-toggle="modal" type="button">Default Modal</button>
    <div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayBodyFooterModal" role="dialog" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayBodyFooterModal"
	data-toggle="modal"
	type="button"
>
	Default Modal
</button>
<div
	aria-labelledby="clayDefaultModalLabel"
	class="fade modal"
	id="clayBodyFooterModal"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Grid(#css-grid)

Utilize the Bootstrap grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.

<div class="sheet-example">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gridSystemModal">Grid Modal</button>
    <div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="gridModalLabel">Grids in modals</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" title="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid bd-example-row">
                <div class="row">
                    <div class="bg-info col-md-4 text-white">.col-md-4</div>
                    <div class="bg-info col-md-4 ml-auto text-white">.col-md-4 .ml-auto</div>
                </div>
                <div class="row">
                    <div class="bg-warning col-md-3 ml-auto text-white">.col-md-3 .ml-auto</div>
                    <div class="bg-warning col-md-2 ml-auto text-white">.col-md-2 .ml-auto</div>
                </div>
                <div class="row">
                    <div class="bg-success col-md-6 ml-auto text-white">.col-md-6 .ml-auto</div>
                </div>
                <div class="row">
                    <div class="bg-danger col-sm-9 text-white">
                    Level 1: .col-sm-9
                    <div class="row">
                        <div class="bg-success col-8 col-sm-6 text-white">
                        Level 2: .col-8 .col-sm-6
                        </div>
                        <div class="bg-success col-4 col-sm-6 text-white">
                        Level 2: .col-4 .col-sm-6
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	type="button"
	class="btn btn-primary"
	data-toggle="modal"
	data-target="#gridSystemModal"
>
	Launch demo modal
</button>
<div
	id="gridSystemModal"
	class="modal fade"
	tabindex="-1"
	role="dialog"
	aria-labelledby="gridModalLabel"
	style="display: none;"
	aria-hidden="true"
>
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="gridModalLabel">Grids in modals</h5>
				<button
					type="button"
					class="close"
					data-dismiss="modal"
					aria-label="Close"
					title="Close"
				>
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="container-fluid bd-example-row">
					<div class="row">
						<div class="bg-info col-md-4 text-white">.col-md-4</div>
						<div class="bg-info col-md-4 ml-auto text-white">
							.col-md-4 .ml-auto
						</div>
					</div>
					<div class="row">
						<div class="bg-warning col-md-3 ml-auto text-white">
							.col-md-3 .ml-auto
						</div>
						<div class="bg-warning col-md-2 ml-auto text-white">
							.col-md-2 .ml-auto
						</div>
					</div>
					<div class="row">
						<div class="bg-success col-md-6 ml-auto text-white">
							.col-md-6 .ml-auto
						</div>
					</div>
					<div class="row">
						<div class="bg-danger col-sm-9 text-white">
							Level 1: .col-sm-9
							<div class="row">
								<div
									class="bg-success col-8 col-sm-6 text-white"
								>
									Level 2: .col-8 .col-sm-6
								</div>
								<div
									class="bg-success col-4 col-sm-6 text-white"
								>
									Level 2: .col-4 .col-sm-6
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button
					type="button"
					class="btn btn-secondary"
					data-dismiss="modal"
				>
					Close
				</button>
				<button type="button" class="btn btn-primary">
					Save changes
				</button>
			</div>
		</div>
	</div>
</div>
```

## Iframe(#css-iframe)

You can add an Iframe to the modal body.

Add the `modal-body-iframe` class to a `modal-body` element when you want the iframe to be the same width and height as the modal-body element.

In mobile safari (iOS 8.3), any content inside an iframe that triggers a browser reflow will cause the iframe to scroll to the top.

<div class="clay-site-alert alert alert-info">
In mobile safari (iOS 8.3), any content inside an iframe that triggers a browser reflow will cause the iframe to scroll to the top.
</div>

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayFullScreenModalIframe" data-toggle="modal" type="button">Full Screen Modal Iframe</button>
    <div aria-labelledby="clayFullScreenModalIframeLabel" class="fade modal" id="clayFullScreenModalIframe" role="dialog" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-full-screen modal-full-screen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayFullScreenModalIframeLabel">Add Picture to Documents and Media Library in Liferay Seven</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body modal-body-iframe">
                    <iframe src="/"></iframe>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="sheet-example">
	<button
		class="btn btn-primary"
		data-target="#clayFullScreenModalIframe"
		data-toggle="modal"
		type="button"
	>
		Full Screen Modal Iframe
	</button>
	<div
		aria-labelledby="clayFullScreenModalIframeLabel"
		class="fade modal"
		id="clayFullScreenModalIframe"
		role="dialog"
		tabindex="-1"
		aria-hidden="true"
		style="display: none;"
	>
		<div class="modal-dialog modal-full-screen modal-full-screen-sm-down">
			<div class="modal-content">
				<div class="modal-header">
					<div
						class="modal-title"
						id="clayFullScreenModalIframeLabel"
					>
						Add Picture to Documents and Media Library in Liferay
						Seven
					</div>
					<button
						aria-label="Close"
						title="Close"
						class="close"
						data-dismiss="modal"
						type="button"
					>
						<svg
							class="lexicon-icon lexicon-icon-times"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#times"></use>
						</svg>
					</button>
				</div>
				<div class="modal-body modal-body-iframe">
					<iframe src="/"></iframe>
				</div>
				<div class="modal-footer">
					<div class="modal-item-last">
						<div class="btn-group">
							<div class="btn-group-item">
								<button
									class="btn btn-secondary"
									data-dismiss="modal"
									type="button"
								>
									Close
								</button>
							</div>
							<div class="btn-group-item">
								<button class="btn btn-primary" type="button">
									Primary
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Status Messages(#css-status-messages)

Modal headers can be configured to use modals as status messages. This emphasizes blocking actions that the user must read and pay careful attention to.

Add one of the following helper classes to the `modal-dialog` element to style is with corresponding state: `modal-danger`, `modal-info`, `modal-success`, or `modal-warning`.

### Success(#css-success)

<div class="sheet-example">
    <button class="btn btn-success" data-target="#clayModalSuccess" data-toggle="modal" type="button">Modal Success</button>
    <div aria-labelledby="clayModalSuccessLabel" class="fade modal" id="clayModalSuccess" role="dialog" tabindex="-1">
        <div class="modal-success modal-dialog modal-full-screen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayModalSuccessLabel">
                        <span class="modal-title-indicator">
                            <svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#check-circle-full"></use>
                            </svg>
                        </span>
                        Modal Title
                    </div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-first">
                        <button class="btn btn-primary" type="button">Primary</button>
                    </div>
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-success"
	data-target="#clayModalSuccess"
	data-toggle="modal"
	type="button"
>
	Modal Success
</button>
<div
	aria-labelledby="clayModalSuccessLabel"
	class="fade modal"
	id="clayModalSuccess"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-success modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalSuccessLabel">
					<span class="modal-title-indicator">
						<svg
							class="lexicon-icon lexicon-icon-check-circle-full"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#check-circle-full"
							></use>
						</svg>
					</span>
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-first">
					<button class="btn btn-primary" type="button">
						Primary
					</button>
				</div>
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Info(#css-info)

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#clayModalInfo" data-toggle="modal" type="button">Modal Info</button>
    <div aria-labelledby="clayModalInfoLabel" class="fade modal" id="clayModalInfo" role="dialog" tabindex="-1">
        <div class="modal-info modal-dialog modal-full-screen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayModalInfoLabel">
                        <span class="modal-title-indicator">
                            <svg class="lexicon-icon lexicon-icon-info-circle" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#info-circle"></use>
                            </svg>
                        </span>
                        Modal Title
                    </div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#clayModalInfo"
	data-toggle="modal"
	type="button"
>
	Modal Info
</button>
<div
	aria-labelledby="clayModalInfoLabel"
	class="fade modal"
	id="clayModalInfo"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-info modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalInfoLabel">
					<span class="modal-title-indicator">
						<svg
							class="lexicon-icon lexicon-icon-info-circle"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#info-circle"
							></use>
						</svg>
					</span>
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Warning(#css-warning)

<div class="sheet-example">
    <button class="btn btn-warning" data-target="#clayModalWarning" data-toggle="modal" type="button">Modal Warning</button>
    <div aria-labelledby="clayModalWarningLabel" class="fade modal" id="clayModalWarning" role="dialog" tabindex="-1">
        <div class="modal-warning modal-dialog modal-full-screen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayModalWarningLabel">
                        <span class="modal-title-indicator">
                            <svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#warning-full"></use>
                            </svg>
                        </span>
                        Modal Title
                    </div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-warning"
	data-target="#clayModalWarning"
	data-toggle="modal"
	type="button"
>
	Modal Warning
</button>
<div
	aria-labelledby="clayModalWarningLabel"
	class="fade modal"
	id="clayModalWarning"
	role="dialog"
	tabindex="-1"
>
	<div class="modal-warning modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalWarningLabel">
					<span class="modal-title-indicator">
						<svg
							class="lexicon-icon lexicon-icon-warning-full"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#warning-full"
							></use>
						</svg>
					</span>
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Danger(#css-danger)

<div class="sheet-example">
    <button class="btn btn-danger" data-target="#clayModalDanger" data-toggle="modal" type="button">Modal Danger</button>
    <div aria-labelledby="clayModalDangerLabel" class="fade modal" id="clayModalDanger" role="dialog" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-danger modal-dialog modal-full-screen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="clayModalDangerLabel">
                        <span class="modal-title-indicator">
                            <svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#exclamation-full"></use>
                            </svg>
                        </span>
                        Modal Title
                    </div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Modal Body</h4>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-first">
                        <button class="btn btn-primary" type="button">Primary</button>
                    </div>
                    <div class="modal-item">Some other content</div>
                    <div class="modal-item-last">
                        <div class="btn-group"><div class="btn-group-item"><button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button></div><div class="btn-group-item"><button class="btn btn-primary" type="button">Primary</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-danger"
	data-target="#clayModalDanger"
	data-toggle="modal"
	type="button"
>
	Modal Danger
</button>
<div
	aria-labelledby="clayModalDangerLabel"
	class="fade modal"
	id="clayModalDanger"
	role="dialog"
	tabindex="-1"
	style="display: none;"
	aria-hidden="true"
>
	<div class="modal-danger modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalDangerLabel">
					<span class="modal-title-indicator">
						<svg
							class="lexicon-icon lexicon-icon-exclamation-full"
							focusable="false"
							role="presentation"
						>
							<use
								href="/images/icons/icons.svg#exclamation-full"
							></use>
						</svg>
					</span>
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
			<div class="modal-footer">
				<div class="modal-item-first">
					<button class="btn btn-primary" type="button">
						Primary
					</button>
				</div>
				<div class="modal-item">Some other content</div>
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Helpers(#css-helpers)

### Footer Alignment(#css-footer-alignment)

Use classes `modal-item-first`, `modal-item`, and `modal-item-last` inside `modal-footer` to align content left, middle, and right.

### Vertically Centered(#css-vertically-centered)

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.

<div class="sheet-example">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Vertically centered Modal</button>
    <div id="exampleModalCenter" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" title="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	type="button"
	class="btn btn-primary"
	data-toggle="modal"
	data-target="#exampleModalCenter"
>
	Launch demo modal
</button>
<div
	id="exampleModalCenter"
	class="modal fade"
	tabindex="-1"
	role="dialog"
	aria-labelledby="exampleModalCenterTitle"
	aria-hidden="true"
	style="display: none;"
>
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalCenterTitle">
					Modal title
				</h5>
				<button
					type="button"
					class="close"
					data-dismiss="modal"
					aria-label="Close"
					title="Close"
				>
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo
					odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
					risus, porta ac consectetur ac, vestibulum at eros.
				</p>
			</div>
			<div class="modal-footer">
				<button
					type="button"
					class="btn btn-secondary"
					data-dismiss="modal"
				>
					Close
				</button>
				<button type="button" class="btn btn-primary">
					Save changes
				</button>
			</div>
		</div>
	</div>
</div>
```

### Remove Animation(#css-remove-animation)

For modals that simply appear rather than fade in to view, remove the `.fade` class from your modal markup.

### Inline Scroller(#css-inline-scroller)

`inline-scroller` is a helper class that sizes `modal-body` to a fixed height and scrolls any overflowing content. Add it to `modal-body` when you want `modal-body` to be a fixed height. It defaults to height 125px.

<div class="sheet-example">
    <button class="btn btn-primary" data-target="#claySmallModalInlineScroller" data-toggle="modal" type="button">Small Modal Inline Scroller</button>
    <div aria-labelledby="claySmallModalInlineScrollerLabel" class="fade modal" id="claySmallModalInlineScroller" role="dialog" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="claySmallModalInlineScrollerLabel">Modal Title</div>
                    <button aria-label="Close" title="Close" class="close" data-dismiss="modal" type="button">
                        <svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
                            <use href="/images/icons/icons.svg#times"></use>
                        </svg>
                    </button>
                </div>
                <div class="modal-body inline-scroller">
                    <h4>Modal Body</h4>
                    <div>
                        <p>
                            <a href="#1">Crema coffee</a> a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
                        </p>
                        <p>
                            Irish coffee, at as cultivar robusta fair trade. Variety, caramelization, sweet, steamed, breve sit, whipped spoon at in caffeine. So latte, half and half, instant café au lait whipped extra at percolator.
                        </p>
                        <p>
                            Skinny extraction, viennese arabica aromatic robust kopi-luwak. Carajillo chicory dark espresso qui iced sugar. To go, at café au lait chicory, qui, fair trade irish, beans seasonal extraction cappuccino kopi-luwak.
                        </p>
                        <p>
                            Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="modal-item-last">
                        <div class="btn-group">
                            <div class="btn-group-item">
                                <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
                            </div>
                            <div class="btn-group-item">
                                <button class="btn btn-primary" type="button">Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<button
	class="btn btn-primary"
	data-target="#claySmallModalInlineScroller"
	data-toggle="modal"
	type="button"
>
	Small Modal Inline Scroller
</button>
<div
	aria-labelledby="claySmallModalInlineScrollerLabel"
	class="fade modal"
	id="claySmallModalInlineScroller"
	role="dialog"
	tabindex="-1"
	style="display: none;"
	aria-hidden="true"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="claySmallModalInlineScrollerLabel">
					Modal Title
				</div>
				<button
					aria-label="Close"
					title="Close"
					class="close"
					data-dismiss="modal"
					type="button"
				>
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times"></use>
					</svg>
				</button>
			</div>
			<div class="modal-body inline-scroller">
				<h4>Modal Body</h4>
				<div>
					<p>
						<a href="#1">Crema coffee</a> a turkish decaffeinated
						espresso dripper cortado lungo con panna. Coffee, roast
						cup blue mountain beans single origin eu shop grounds
						caffeine a robusta. Sweet macchiato spoon, mug foam ut
						est ristretto.
					</p>
					<p>
						Irish coffee, at as cultivar robusta fair trade.
						Variety, caramelization, sweet, steamed, breve sit,
						whipped spoon at in caffeine. So latte, half and half,
						instant café au lait whipped extra at percolator.
					</p>
					<p>
						Skinny extraction, viennese arabica aromatic robust
						kopi-luwak. Carajillo chicory dark espresso qui iced
						sugar. To go, at café au lait chicory, qui, fair trade
						irish, beans seasonal extraction cappuccino kopi-luwak.
					</p>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper
						cortado lungo con panna. Coffee, roast cup blue mountain
						beans single origin eu shop grounds caffeine a robusta.
						Sweet macchiato spoon, mug foam ut est ristretto.
					</p>
				</div>
			</div>
			<div class="modal-footer">
				<div class="modal-item-last">
					<div class="btn-group">
						<div class="btn-group-item">
							<button
								class="btn btn-secondary"
								data-dismiss="modal"
								type="button"
							>
								Close
							</button>
						</div>
						<div class="btn-group-item">
							<button class="btn btn-primary" type="button">
								Primary
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```
