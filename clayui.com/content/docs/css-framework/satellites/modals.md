---
title: "Modals"
---

### Inline Scroller

<p><code>inline-scroller</code> is a helper class that sizes modal-body to a fixed height and makes any overflowing content scrollable. Add it to modal-body when you want modal-body to be a fixed height. The default height is 125px.</p>

<button class="btn btn-info" data-target="#claySmallModalInlineScroller"  data-toggle="modal" type="button">Small Modal Inline Scroller</button>

<div aria-labelledby="claySmallModalInlineScrollerLabel" class="fade modal" id="claySmallModalInlineScroller" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title" id="claySmallModalInlineScrollerLabel">Modal Title</div>
				<button aria-label="Close" class="close" data-dismiss="modal" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
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

### Modal Helpers
Add the <code>modal-item-first</code>, <code>modal-item</code>, or <code>modal-item-last</code> class to a <code>modal-footer</code> to align content to the left, middle, or right.
