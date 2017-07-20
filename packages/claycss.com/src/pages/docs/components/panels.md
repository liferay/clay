---
title: Panels
description: Components
layout: "guide"
weight: 100
---

<article id="1">

> Panels help separate your content.

<div class="panel panel-secondary">
	<div class="panel-body">Body</div>
</div>

<div class="panel panel-secondary">
	<div class="panel-header">Heading</div>
	<div class="panel-body">Body</div>
</div>

<div class="panel panel-secondary">
	<div class="panel-header">
		<div class="panel-title">Panel Title</div>
	</div>
	<div class="panel-body">Body</div>
	<div class="panel-footer">Footer</div>
</div>

```xml
<div class="panel panel-secondary">
	<div class="panel-body">Body</div>
</div>

<div class="panel panel-secondary">
	<div class="panel-header">Heading</div>
	<div class="panel-body">Body</div>
</div>

<div class="panel panel-secondary">
	<div class="panel-header">
		<div class="panel-title">Panel Title</div>
	</div>
	<div class="panel-body">Body</div>
	<div class="panel-footer">Footer</div>
</div>
```

</article>

<article id="2">

### Panel States

> Different colors for different states.

<div class="col-md-4">
	<div class="panel">
		<div class="panel-header">panel</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-primary">
		<div class="panel-header">panel-primary</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-info">
		<div class="panel-header">panel-info</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-secondary">
		<div class="panel-header">panel-secondary</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-success">
		<div class="panel-header">panel-success</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-warning">
		<div class="panel-header">panel-warning</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-danger">
		<div class="panel-header">panel-danger</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

```xml
<div class="col-md-4">
	<div class="panel">
		<div class="panel-header">panel</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-primary">
		<div class="panel-header">panel-primary</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-info">
		<div class="panel-header">panel-info</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-secondary">
		<div class="panel-header">panel-secondary</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-success">
		<div class="panel-header">panel-success</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-warning">
		<div class="panel-header">panel-warning</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>

<div class="col-md-4">
	<div class="panel panel-danger">
		<div class="panel-header">panel-danger</div>
		<div class="panel-body">body</div>
		<div class="panel-footer">footer</div>
	</div>
</div>
```

</article>

<article id="3">

### Accordions with Panels and Collapse Plugin

> Combine the panel component with collapse to create accordions. Collapsible panels must be wrapped inside a `panel-group` element to avoid styling issues related to the collapsing body.

<div aria-multiselectable="true" class="panel-group" id="accordion" role="tablist">
	<div class="panel panel-secondary">
		<div class="panel-header" id="headingOne" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseOne" aria-expanded="true" class="panel-header-link" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" role="button">
					Collapsible Group Item #1
				</a>
			</div>
		</div>
		<div aria-labelledby="headingOne" class="panel-collapse collapse show" id="collapseOne" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<div class="panel-header" id="headingTwo" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseTwo" aria-expanded="false" class="collapsed panel-header-link" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo" role="button">
					Collapsible Group Item #2
				</a>
			</div>
		</div>
		<div aria-labelledby="headingTwo" class="panel-collapse collapse" id="collapseTwo" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<div class="panel-header" id="headingThree" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseThree" aria-expanded="false" class="collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" role="button">
					Collapsible Group Item #3
				</a>
			</div>
		</div>
		<div aria-labelledby="headingThree" class="panel-collapse collapse" id="collapseThree" role="tabpanel">
			<div class="panel-body">
				Eu ristretto ut sugar rich saucer milk aftertaste, froth dark, cultivar blue mountain as coffee cappuccino. Saucer grounds mocha, aroma, half and half coffee eu robusta roast, doppio skinny galão, extraction, frappuccino aromatic breve crema frappuccino aroma. Froth half and half so java, grounds half and half, macchiato at est sugar mug redeye, strong, cream seasonal qui doppio robusta. Wings, at, cup dark, a, breve french press decaffeinated acerbic, black extra, and, saucer barista rich seasonal barista blue mountain. Roast mazagran a and id mug in est trifecta pumpkin spice coffee and mug trifecta, ut breve, mug frappuccino mug, breve mocha qui aged aftertaste.
			</div>
		</div>
	</div>
</div>

```xml
<div aria-multiselectable="true" class="panel-group" id="accordion" role="tablist">
	<div class="panel panel-secondary">
		<div class="panel-header" id="headingOne" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseOne" aria-expanded="true" class="panel-header-link" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" role="button">
					Collapsible Group Item #1
				</a>
			</div>
		</div>
		<div aria-labelledby="headingOne" class="panel-collapse collapse show" id="collapseOne" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<div class="panel-header" id="headingTwo" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseTwo" aria-expanded="false" class="collapsed panel-header-link" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo" role="button">
					Collapsible Group Item #2
				</a>
			</div>
		</div>
		<div aria-labelledby="headingTwo" class="panel-collapse collapse" id="collapseTwo" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<div class="panel-header" id="headingThree" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseThree" aria-expanded="false" class="collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" role="button">
					Collapsible Group Item #3
				</a>
			</div>
		</div>
		<div aria-labelledby="headingThree" class="panel-collapse collapse" id="collapseThree" role="tabpanel">
			<div class="panel-body">
				Eu ristretto ut sugar rich saucer milk aftertaste, froth dark, cultivar blue mountain as coffee cappuccino. Saucer grounds mocha, aroma, half and half coffee eu robusta roast, doppio skinny galão, extraction, frappuccino aromatic breve crema frappuccino aroma. Froth half and half so java, grounds half and half, macchiato at est sugar mug redeye, strong, cream seasonal qui doppio robusta. Wings, at, cup dark, a, breve french press decaffeinated acerbic, black extra, and, saucer barista rich seasonal barista blue mountain. Roast mazagran a and id mug in est trifecta pumpkin spice coffee and mug trifecta, ut breve, mug frappuccino mug, breve mocha qui aged aftertaste.
			</div>
		</div>
	</div>
</div>
```

</article>

<article id="4">

### Accordions with Open and Close Icon

> Add icons to the open and close states in an accordion. The class `collapse-icon-closed` displays the icon in the collapsed state. The class `collapse-icon-open` displays the icon in the open state.

> Add class `collapse-icon` to the [data-toggle="collapse"] element to create space for the icons and vertically center it with the class `collapse-icon-middle`.

<div aria-multiselectable="true" class="panel-group" id="accordion03" role="tablist">
	<div class="panel panel-secondary">
		<div class="panel-header" id="accordion03HeadingTwo" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseTwo" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-parent="#accordion03" data-toggle="collapse" href="#accordion03CollapseTwo" role="button">
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingTwo" class="panel-collapse collapse" id="accordion03CollapseTwo" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-info">
		<div class="panel-header" id="accordion03HeadingOne" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseOne" aria-expanded="true" class="collapse-icon collapse-icon-middle panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseOne" role="button">
					Collapsible Group Item #2 (Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.)
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingOne" class="panel-collapse collapse show" id="accordion03CollapseOne" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-primary">
		<div class="panel-header" id="accordion03HeadingThree" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseThree" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-parent="#accordion03" data-toggle="collapse" href="#accordion03CollapseThree" role="button">
					Collapsible Group Item #3
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingThree" class="panel-collapse collapse" id="accordion03CollapseThree" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-success">
		<div class="panel-header" id="accordion03HeadingFour" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseFour" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseFour" role="button">
					Collapsible Group Item #4
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingFour" class="panel-collapse collapse" id="accordion03CollapseFour" role="tabpanel">
			<div class="panel-body">
				Eu ristretto ut sugar rich saucer milk aftertaste, froth dark, cultivar blue mountain as coffee cappuccino. Saucer grounds mocha, aroma, half and half coffee eu robusta roast, doppio skinny galão, extraction, frappuccino aromatic breve crema frappuccino aroma. Froth half and half so java, grounds half and half, macchiato at est sugar mug redeye, strong, cream seasonal qui doppio robusta. Wings, at, cup dark, a, breve french press decaffeinated acerbic, black extra, and, saucer barista rich seasonal barista blue mountain. Roast mazagran a and id mug in est trifecta pumpkin spice coffee and mug trifecta, ut breve, mug frappuccino mug, breve mocha qui aged aftertaste.
			</div>
		</div>
	</div>
	<div class="panel panel-warning">
		<div class="panel-header" id="accordion03HeadingFive" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseFive" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseFive" role="button">
					Collapsible Group Item #5
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingFive" class="panel-collapse collapse" id="accordion03CollapseFive" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-danger">
		<div class="panel-header" id="accordion03HeadingSix" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseSix" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseSix" role="button">
					Collapsible Group Item #6
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingSix" class="panel-collapse collapse" id="accordion03CollapseSix" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
</div>

```xml
<div aria-multiselectable="true" class="panel-group" id="accordion03" role="tablist">
	<div class="panel panel-secondary">
		<div class="panel-header" id="accordion03HeadingTwo" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseTwo" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-parent="#accordion03" data-toggle="collapse" href="#accordion03CollapseTwo" role="button">
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual

					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>

					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingTwo" class="panel-collapse collapse" id="accordion03CollapseTwo" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-info">
		<div class="panel-header" id="accordion03HeadingOne" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseOne" aria-expanded="true" class="collapse-icon collapse-icon-middle panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseOne" role="button">
					Collapsible Group Item #2 (Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.)

					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>

					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingOne" class="panel-collapse collapse show" id="accordion03CollapseOne" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-primary">
		<div class="panel-header" id="accordion03HeadingThree" role="tab">
			<div class="panel-title">
				<a aria-controls="collapseThree" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-parent="#accordion03" data-toggle="collapse" href="#accordion03CollapseThree" role="button">
					Collapsible Group Item #3

					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>

					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingThree" class="panel-collapse collapse" id="accordion03CollapseThree" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-success">
		<div class="panel-header" id="accordion03HeadingFour" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseFour" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseFour" role="button">
					Collapsible Group Item #4

					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>

					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingFour" class="panel-collapse collapse" id="accordion03CollapseFour" role="tabpanel">
			<div class="panel-body">
				Eu ristretto ut sugar rich saucer milk aftertaste, froth dark, cultivar blue mountain as coffee cappuccino. Saucer grounds mocha, aroma, half and half coffee eu robusta roast, doppio skinny galão, extraction, frappuccino aromatic breve crema frappuccino aroma. Froth half and half so java, grounds half and half, macchiato at est sugar mug redeye, strong, cream seasonal qui doppio robusta. Wings, at, cup dark, a, breve french press decaffeinated acerbic, black extra, and, saucer barista rich seasonal barista blue mountain. Roast mazagran a and id mug in est trifecta pumpkin spice coffee and mug trifecta, ut breve, mug frappuccino mug, breve mocha qui aged aftertaste.
			</div>
		</div>
	</div>
	<div class="panel panel-warning">
		<div class="panel-header" id="accordion03HeadingFive" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseFive" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseFive" role="button">
					Collapsible Group Item #5

					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>

					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingFive" class="panel-collapse collapse" id="accordion03CollapseFive" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-danger">
		<div class="panel-header" id="accordion03HeadingSix" role="tab">
			<div class="panel-title">
				<a aria-controls="accordion03CollapseSix" aria-expanded="false" class="collapse-icon collapsed panel-header-link" data-toggle="collapse" data-parent="#accordion03" href="#accordion03CollapseSix" role="button">
					Collapsible Group Item #6

					<span class="collapse-icon-closed">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-right" />
						</svg>
					</span>

					<span class="collapse-icon-open">
						<svg class="lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#angle-down" />
						</svg>
					</span>
				</a>
			</div>
		</div>
		<div aria-labelledby="accordion03HeadingSix" class="panel-collapse collapse" id="accordion03CollapseSix" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
</div>
```

</article>
