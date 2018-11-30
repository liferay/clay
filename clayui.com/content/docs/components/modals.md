---
title: "Modals"
---

### Description

A modal displays content in a box on top of the page to capture the user’s attention for a specific action inside the same process. Modals are subordinated to pages.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/modals.html">Modals Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Size

#### Small Modal

> The small modal is a 300px wide window that expands full screen width on displays 575px and below.

<button class="btn btn-primary" data-target="#claySmallModal" data-toggle="modal" type="button">Small Modal</button>
<div aria-labelledby="claySmallModalLabel" class="fade modal" id="claySmallModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="claySmallModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```soy
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal Body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Primary'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param size: 'sm' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Modal Title' /}
{/call}
```
```html
<clay-modal
	body="<h4>Modal Body</h4>"
	footerButtons='[{"label": "Primary"},{"label": "Close", "type": "close"}]' size="sm"
	spritemap="/images/icons/icons.svg"
	title="Modal Title">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#claySmallModal" data-toggle="modal" type="button">Small Modal</button>
<div aria-labelledby="claySmallModalLabel" class="fade modal" id="claySmallModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="claySmallModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

#### Default Modal

> The default modal is a 500px wide window that expands full screen width on displays 575px and below.

<button class="btn btn-primary" data-target="#clayDefaultModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayDefaultModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayDefaultModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```soy
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal Body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Primary'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Modal Title' /}
{/call}
```
```html
<clay-modal
	body="<h4>Modal Body</h4>"
	footerButtons='[{"label": "Primary"},{"label": "Close", "type": "close"}]' spritemap="/images/icons/icons.svg"
	title="Modal Title">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayDefaultModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayDefaultModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayDefaultModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

#### Large Modal

> The large modal is an 800px wide window on displays greater than 992px.
> It is a 500px wide modal on displays between 576px and 991px.
> It expands full screen width on displays 575px and below.

<button class="btn btn-primary" data-target="#clayLargeModal" data-toggle="modal" type="button">Large Modal</button>
<div aria-labelledby="clayLargeModalLabel" class="fade modal" id="clayLargeModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayLargeModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```soy
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal Body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Primary'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param size: 'lg' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Modal Title' /}
{/call}
```
```html
<clay-modal
	body="<h4>Modal Body</h4>"
	footerButtons='[{"label": "Primary"},{"label": "Close", "type": "close"}]' size="lg"
	spritemap="/images/icons/icons.svg"
	title="Modal Title">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayLargeModal" data-toggle="modal" type="button">Large Modal</button>
<div aria-labelledby="clayLargeModalLabel" class="fade modal" id="clayLargeModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayLargeModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

#### Full Screen Modal

> The full screen modal stretches to fit the browser window, with 45px spacing on every side, and expands to fill the screen on displays 767px and below.

<button class="btn btn-primary" data-target="#clayFullScreenModal" data-toggle="modal" type="button">Full Screen Modal</button>
<div aria-labelledby="clayLargeModalLabel" class="fade modal" id="clayFullScreenModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-full-screen">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayLargeModalLabel">Add Picture to Documents and Media Library in Liferay Seven</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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

```soy
{call ClayModal.render}
	{param body kind="html"}
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
		<div>
			<p>
				Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
		<div>
			<p>
				Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
		<div>
			<p>
				Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
	{/param}

	{param footerButtons: [
			[
				'label': 'Add'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param size: 'full-screen' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Add Picture to Documents and Media Library in Liferay Seven' /}
{/call}
```
```html
<clay-modal
	body="..."
	footerButtons='[{"label": "Add"},{"label": "Close", "type": "close"}]' size="full-screen"
	spritemap="/images/icons/icons.svg"
	title="Add Picture to Documents and Media Library in Liferay Seven">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayFullScreenModal" data-toggle="modal" type="button">Full Screen Modal</button>
<div aria-labelledby="clayLargeModalLabel" class="fade modal" id="clayFullScreenModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-full-screen">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayLargeModalLabel">Add Picture to Documents and Media Library in Liferay Seven</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
				<div>
					<p>
						Crema coffee a turkish decaffeinated espresso dripper cortado lungo con panna. Coffee, roast cup blue mountain beans single origin eu shop grounds caffeine a robusta. Sweet macchiato spoon, mug foam ut est ristretto.
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
```

#### Modal Full Screen Sm Down

> Add the `modal-full-screen-sm-down` class to any `modal-dialog` element to make it stretch to fit the browser window on displays 767px and below.

<button class="btn btn-primary" data-target="#clayModalFullScreenSmDown" data-toggle="modal" type="button">Modal Full Screen Sm Down</button>
<div aria-labelledby="clayModalFullScreenSmDownLabel" class="fade modal" id="clayModalFullScreenSmDown" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalFullScreenSmDownLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```html
<button class="btn btn-primary" data-target="#clayModalFullScreenSmDown" data-toggle="modal" type="button">Modal Full Screen Sm Down</button>
<div aria-labelledby="clayModalFullScreenSmDownLabel" class="fade modal" id="clayModalFullScreenSmDown" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalFullScreenSmDownLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

### Configurations

> Lexicon allows your modal window to have different configurations to suite your needs. Because these needs can vary greatly, there are certain rules your modal must follow.

#### Header, body and footer

> A classic modal window is composed of three main parts: header, body, and footer.

<button class="btn btn-primary" data-target="#clayDefaultModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayDefaultModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayDefaultModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```soy
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal Body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Primary'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Modal Title' /}
{/call}
```
```html
<clay-modal
	body="<h4>Modal Body</h4>"
	footerButtons='[{"label": "Primary"},{"label": "Close", "type": "close"}]' spritemap="/images/icons/icons.svg"
	title="Modal Title">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayDefaultModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayDefaultModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayDefaultModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

#### Header and body

> When you don't need a footer bar to place your icons, you can just have a header and body element in your modal, as shown below:

<button class="btn btn-primary" data-target="#clayHeaderBodyModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayHeaderBodyModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayHeaderBodyModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</div>
			<div class="modal-body">
				<h4>Modal Body</h4>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal Body</h4>
	{/param}

	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Modal Title' /}
{/call}
```
```html
<clay-modal
	body="<h4>Modal Body</h4>"
 	spritemap="/images/icons/icons.svg"
	title="Modal Title">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayHeaderBodyModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayHeaderBodyModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayHeaderBodyModalLabel">Modal Title</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" role="button" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

#### Body and footer

> When you just need to show text and buttons to agree or cancel, you can just have a body and footer element in your modal, as shown below:.

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

```soy
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal Body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Primary'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-modal
	body="<h4>Modal Body</h4>"
	footerButtons='[{"label": "Primary"},{"label": "Close", "type": "close"}]' spritemap="/images/icons/icons.svg">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayBodyFooterModal" data-toggle="modal" type="button">Default Modal</button>
<div aria-labelledby="clayDefaultModalLabel" class="fade modal" id="clayBodyFooterModal" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
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
```

#### Iframe in the body

> You can add an iFrame to the modal body.

> Add the `modal-body-iframe` class to a `modal-body` element when you want the iframe to be the same width and height as the `modal-body` element.

<div class="alert alert-warning">In mobile safari (iOS 8.3), any content inside an iframe that triggers a browser reflow causes the iframe to scroll to the top.</div>

<button class="btn btn-primary" data-target="#clayFullScreenModalIframe" data-toggle="modal" type="button">Full Screen Modal Iframe</button>
<div aria-labelledby="clayFullScreenModalIframeLabel" class="fade modal" id="clayFullScreenModalIframe" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-full-screen modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayFullScreenModalIframeLabel">Add Picture to Documents and Media Library in Liferay Seven</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```soy
{call ClayModal.render}
	{param footerButtons: [
			[
				'label': 'Add'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param size: 'full-screen' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Add Picture to Documents and Media Library in Liferay Seven' /}
	{param url: 'https://clayui.com' /}
{/call}
```
```html
<clay-modal
	footerButtons='[{"label": "Add"},{"label": "Close", "type": "close"}]' size="full-screen"
	spritemap="/images/icons/icons.svg"
	title="Add Picture to Documents and Media Library in Liferay Seven" url="https://clayui.com">
</clay-modal>
```
```html
<button class="btn btn-primary" data-target="#clayFullScreenModalIframe" data-toggle="modal" type="button">Full Screen Modal Iframe</button>
<div aria-labelledby="clayFullScreenModalIframeLabel" class="fade modal" id="clayFullScreenModalIframe" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-full-screen modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayFullScreenModalIframeLabel">Add Picture to Documents and Media Library in Liferay Seven</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

#### Modal for status messages

> Modal headers can be configured to use modals as status messages. This emphasizes blocking actions that the user must read and pay careful attention to.

Add one of the following helper classes to the `modal-dialog` element to style is with corresponding state: `modal-danger`, `modal-info`, `modal-success`, or `modal-warning`.

<button class="btn btn-danger" data-target="#clayModalDanger" data-toggle="modal" type="button">Modal Danger</button>
<div aria-labelledby="clayModalDangerLabel" class="fade modal" id="clayModalDanger" role="dialog" tabindex="-1">
	<div class="modal-danger modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalDangerLabel">
					<span class="modal-title-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Modal Title
				</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
<button class="btn btn-primary" data-target="#clayModalInfo" data-toggle="modal" type="button">Modal Info</button>
<div aria-labelledby="clayModalInfoLabel" class="fade modal" id="clayModalInfo" role="dialog" tabindex="-1">
	<div class="modal-info modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalInfoLabel">
					<span class="modal-title-indicator">
						<svg class="lexicon-icon lexicon-icon-info-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#info-circle" />
						</svg>
					</span>
					Modal Title
				</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
<button class="btn btn-success" data-target="#clayModalSuccess" data-toggle="modal" type="button">Modal Success</button>
<div aria-labelledby="clayModalSuccessLabel" class="fade modal" id="clayModalSuccess" role="dialog" tabindex="-1">
	<div class="modal-success modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalSuccessLabel">
					<span class="modal-title-indicator">
						<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check-circle-full" />
						</svg>
					</span>
					Modal Title
				</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
<button class="btn btn-warning" data-target="#clayModalWarning" data-toggle="modal" type="button">Modal Warning</button>
<div aria-labelledby="clayModalWarningLabel" class="fade modal" id="clayModalWarning" role="dialog" tabindex="-1">
	<div class="modal-warning modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalWarningLabel">
					<span class="modal-title-indicator">
						<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#warning-full" />
						</svg>
					</span>
					Modal Title
				</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

```soy
/**
 * Modal danger
 */
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Add'
			],
			[
				'label': 'Close',
				'type': 'close'
			],
			[
				'label': 'Primary',
				'position': 'left'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param status: 'danger' /}
	{param title: 'Modal Title' /}
{/call}

/**
 * Modal info
 */
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Add'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param status: 'info' /}
	{param title: 'Modal Title' /}
{/call}

/**
 * Modal Success
 */
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Add'
			],
			[
				'label': 'Close',
				'type': 'close'
			],
			[
				'label': 'Primary',
				'position': 'left'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param status: 'success' /}
	{param title: 'Modal Title' /}
{/call}

/**
 * Modal warning
 */
{call ClayModal.render}
	{param body kind="html"}
		<h4>Modal body</h4>
	{/param}

	{param footerButtons: [
			[
				'label': 'Add'
			],
			[
				'label': 'Close',
				'type': 'close'
			]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param status: 'warning' /}
	{param title: 'Modal Title' /}
{/call}
```
```html
<clay-modal
	footerButtons='[{"label": "Add"},{"label": "Close", "type": "close"}]' size="full-screen"
	spritemap="/images/icons/icons.svg"
	status="danger"
	title="Modal Title">
</clay-modal>

<clay-modal
	footerButtons='[{"label": "Add"},{"label": "Close", "type": "close"}]' size="full-screen"
	spritemap="/images/icons/icons.svg"
	status="info"
	title="Modal Title">
</clay-modal>

<clay-modal
	footerButtons='[{"label": "Add"},{"label": "Close", "type": "close"}]' size="full-screen"
	spritemap="/images/icons/icons.svg"
	status="success"
	title="Modal Title">
</clay-modal>

<clay-modal
	footerButtons='[{"label": "Add"},{"label": "Close", "type": "close"}]' size="full-screen"
	spritemap="/images/icons/icons.svg"
	status="warning"
	title="Modal Title">
</clay-modal>
```
```html
<button class="btn btn-danger" data-target="#clayModalDanger" data-toggle="modal" type="button">Modal Danger</button>
<div aria-labelledby="clayModalDangerLabel" class="fade modal" id="clayModalDanger" role="dialog" tabindex="-1">
	<div class="modal-danger modal-dialog modal-full-screen-sm-down">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="clayModalDangerLabel">
					<span class="modal-title-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Modal Title
				</div>
				<button aria-labelledby="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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
```

### API

<div>
	[APITable "clay-modal/src/ClayModal.js"]
</div>
