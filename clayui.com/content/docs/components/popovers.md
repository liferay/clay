---
title: "Popovers and Tooltips"
---

### Description

Popovers and Tooltips are patterns used to show helpful information in two different ways.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/popovers_tooltips.html">Popovers and Tooltips Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Popovers

> Popovers provide additional related information for content. Although similar to tooltips, popovers do not appear on hover state of an element, instead they usually appear on clicking an element. Also, the information in popovers doesn't need to be brief. Popovers remain when you mouse out of the target, letting you interact with other parts of the page, while still viewing its information.

<div class="clay-site-popover-display">
	<div class="popover clay-popover-top">
		<div class="arrow"></div>
		<div class="inline-scroller">
			<div class="popover-header">Popover top</div>
			<div class="popover-body">
				Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
			</div>
		</div>
	</div>
	<div class="popover clay-popover-right">
		<div class="arrow"></div>
		<div class="inline-scroller">
			<div class="popover-header">Popover right</div>
			<div class="popover-body">
				Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
			</div>
		</div>
	</div>
	<div class="popover clay-popover-bottom">
		<div class="arrow"></div>
		<div class="inline-scroller">
			<div class="popover-header">Popover bottom</div>
			<div class="popover-body">
				<p>Single shot, café au lait aromatic body robusta body cream mocha viennese steamed aged. Irish roast, aromatic seasonal, caramelization grinder french press coffee cortado lungo skinny.</p>
				<p>Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.</p>
			</div>
		</div>
	</div>
	<div class="popover clay-popover-left">
		<div class="arrow"></div>
		<div class="inline-scroller">
			<div class="popover-header">Popover left</div>
			<div class="popover-body">
				Dark to go foam froth fair trade irish latte dark carajillo. Turkish aromatic a, rich single origin kopi-luwak chicory carajillo.
			</div>
		</div>
	</div>
</div>

```html
<div class="popover clay-popover-top">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover top</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>

<div class="popover clay-popover-right">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover right</div>
		<div class="popover-body">
			Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.
		</div>
	</div>
</div>

<div class="popover clay-popover-bottom">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover bottom</div>
		<div class="popover-body">
			<p>Single shot, café au lait aromatic body robusta body cream mocha viennese steamed aged. Irish roast, aromatic seasonal, caramelization grinder french press coffee cortado lungo skinny.</p>
			<p>Viennese flavour cup eu, percolator froth ristretto mazagran caffeine. White roast seasonal, mocha trifecta, dripper caffeine spoon acerbic to go macchiato strong.</p>
		</div>
	</div>
</div>

<div class="popover clay-popover-left">
	<div class="arrow"></div>
	<div class="inline-scroller">
		<div class="popover-header">Popover left</div>
		<div class="popover-body">
			Dark to go foam froth fair trade irish latte dark carajillo. Turkish aromatic a, rich single origin kopi-luwak chicory carajillo.
		</div>
	</div>
</div>
```

### Tooltips

> Tooltips are brief pieces of information that appear on hover state over an element to clarify its meaning or use for the user.

<div class="clay-site-tooltip-display">
	<div class="tooltip clay-tooltip-right" role="tooltip">
		<div class="arrow"></div>
		<div class="tooltip-inner">
			<div>Tooltip on the right</div>
		</div>
	</div>
	<div class="tooltip clay-tooltip-left" role="tooltip">
		<div class="arrow"></div>
		<div class="tooltip-inner">
			<div>Tooltip on the left</div>
		</div>
	</div>
	<div class="tooltip clay-tooltip-bottom" role="tooltip">
		<div class="arrow"></div>
		<div class="tooltip-inner">
			<div>Tooltip on bottom</div>
		</div>
	</div>
	<div class="tooltip clay-tooltip-top" role="tooltip">
		<div class="arrow"></div>
		<div class="tooltip-inner">
			<div>Tooltip on top</div>
		</div>
	</div>
</div>

```html
<div class="tooltip clay-tooltip-right" role="tooltip">
	<div class="arrow"></div>
	<div class="tooltip-inner">
		<div>Tooltip on the right</div>
	</div>
</div>

<div class="tooltip clay-tooltip-left" role="tooltip">
	<div class="arrow"></div>
	<div class="tooltip-inner">
		<div>Tooltip on the left</div>
	</div>
</div>

<div class="tooltip clay-tooltip-bottom" role="tooltip">
	<div class="arrow"></div>
	<div class="tooltip-inner">
		<div>Tooltip on bottom</div>
	</div>
</div>

<div class="tooltip clay-tooltip-top" role="tooltip">
	<div class="arrow"></div>
	<div class="tooltip-inner">
		<div>Tooltip on top</div>
	</div>
</div>
```

