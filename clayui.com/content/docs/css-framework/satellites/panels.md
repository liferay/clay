---
title: "Panels"
---

<p>Panels help separate your content.</p>

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

```html
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

### Panel States

<p>Each state uses a different color. Use the <code>panel-variant($map)</code> mixin to create your own variant.</p>

<div class="col-md-4">
	<div class="panel">
		<div class="panel-header">panel</div>
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

```html
<div class="col-md-4">
	<div class="panel">
		<div class="panel-header">panel</div>
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
```

### Accordions with Panels and Collapse Plugin

<p>Combine the panel component with collapse to create accordions. Collapsible panels must be wrapped inside a <code>panel-group</code> element to avoid styling issues related to the collapsing body.</p>

### Accordions with Open and Close Icon

<p>Add icons to the open and close states in an accordion. The <code>collapse-icon-closed</code> class displays the icon in the collapsed state. The <code>collapse-icon-open</code> class displays the icon in the open state.</p>

<p>Add the <code>collapse-icon</code> class to the [data-toggle="collapse"] element to create space for the icons, and add the  <code>collapse-icon-middle</code> class to the [data-toggle="collapse"] element to vertically center the icons.</p>

### Panel Group Flush

To align the content flush to the left and right side of the <code>.panel-group</code> element, add the <code>.panel-group-flush</code> class to it. The component <code>.panel-group-flush</code> should generally be used inside a <code>.card</code> or <code>.sheet</code> element, or a type of padded container.

<div class="sheet">
	<div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist">
		<div class="panel">
			<a aria-controls="accordion04CollapseTwo" aria-expanded="true" class="collapse-icon sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseTwo" id="accordion04HeadingTwo" role="tab">
				<span>Password</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-down" />
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
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
						<input class="form-control" placeholder="Current Password" type="password" value="my-secret"/>
					</div>
					<div class="form-group">
						<label>
							New Password
							<span class="reference-mark">
								<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
						<input class="form-control" placeholder="New Password" type="password" value="my-new-secret"/>
					</div>
					<div class="form-group">
						<label>
							Confirm New Password
							<span class="reference-mark">
								<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
						<input class="form-control" placeholder="Confirm New Password" type="password" value="my-new-secret"/>
					</div>
				</div>
			</div>
		</div>
		<div class="panel">
			<a aria-controls="accordion04CollapseOne" aria-expanded="false" class="collapse-icon collapsed sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseOne" id="accordion04HeadingOne" role="tab">
				<span>Organizations</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div aria-labelledby="accordion04HeadingOne" class="panel-collapse collapse" id="accordion04CollapseOne" role="tabpanel">
				<div class="panel-body">
					In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
				</div>
			</div>
		</div>
		<div class="panel">
			<a aria-controls="accordion04CollapseThree" aria-expanded="false" class="collapse-icon collapsed sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseThree" id="accordion04HeadingThree" role="tab">
				<span>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual User Groups</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-down" />
					</svg>
				</span>
			</a>
			<div aria-labelledby="accordion04HeadingThree" class="panel-collapse collapse" id="accordion04CollapseThree" role="tabpanel">
				<div class="panel-body">
					Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
				</div>
			</div>
		</div>
		<div class="panel">
			<a aria-controls="accordion04CollapseFour" aria-expanded="false" class="collapse-icon collapsed sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseFour" id="accordion04HeadingFour" role="tab">
				<span>Roles</span>
				<span class="collapse-icon-closed">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#angle-down" />
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

```html
<div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist">
	<div class="panel">
		<a aria-controls="accordion04CollapseTwo" aria-expanded="true" class="collapse-icon sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseTwo" id="accordion04HeadingTwo" role="tab">
			<span>Password</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
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
								<use href="/images/icons/icons.svg#asterisk" />
							</svg>
						</span>
					</label>
					<input class="form-control" placeholder="Current Password" type="password" value="my-secret"/>
				</div>
				<div class="form-group">
					<label>
						New Password
						<span class="reference-mark">
							<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#asterisk" />
							</svg>
						</span>
					</label>
					<input class="form-control" placeholder="New Password" type="password" value="my-new-secret"/>
				</div>
				<div class="form-group">
					<label>
						Confirm New Password
						<span class="reference-mark">
							<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#asterisk" />
							</svg>
						</span>
					</label>
					<input class="form-control" placeholder="Confirm New Password" type="password" value="my-new-secret"/>
				</div>
			</div>
		</div>
	</div>
	<div class="panel">
		<a aria-controls="accordion04CollapseOne" aria-expanded="false" class="collapse-icon collapsed sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseOne" id="accordion04HeadingOne" role="tab">
			<span>Organizations</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
				</svg>
			</span>
		</a>
		<div aria-labelledby="accordion04HeadingOne" class="panel-collapse collapse" id="accordion04CollapseOne" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel">
		<a aria-controls="accordion04CollapseThree" aria-expanded="false" class="collapse-icon collapsed sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseThree" id="accordion04HeadingThree" role="tab">
			<span>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual User Groups</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
				</svg>
			</span>
		</a>
		<div aria-labelledby="accordion04HeadingThree" class="panel-collapse collapse" id="accordion04CollapseThree" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel">
		<a aria-controls="accordion04CollapseFour" aria-expanded="false" class="collapse-icon collapsed sheet-subtitle" data-toggle="collapse" href="#accordion04CollapseFour" id="accordion04HeadingFour" role="tab">
			<span>Roles</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
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
```

### Panel Group Helpers

<p>Add the <code>.panel-group-fluid</code>, <code>.panel-group-fluid-first</code>, or <code>.panel-group-fluid-last</code> classes to a panel-group to remove borders from the left and right side and rounded borders from first and last, first, or last panel. These classes should generally be used inside a <code>card</code> or <code>sheet</code> element.</p>

### With Buttons

<div aria-orientation="vertical" class="panel-group" id="accordion05" role="tablist">
	<div class="panel panel-secondary">
		<button aria-controls="collapseTwo" aria-expanded="false" class="btn btn-unstyled collapse-icon collapsed panel-header panel-header-link" data-parent="#accordion05" data-target="#accordion05CollapseTwo" data-toggle="collapse" id="accordion05HeadingTwo" role="tab" type="button">
			<span class="panel-title">Collapsible Group Item #1</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
				</svg>
			</span>
		</button>
		<div aria-labelledby="accordion05HeadingTwo" class="panel-collapse collapse" id="accordion05CollapseTwo" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<button aria-controls="accordion05CollapseOne" aria-expanded="true" class="btn btn-unstyled collapse-icon collapse-icon-middle panel-header panel-header-link" data-parent="#accordion05" data-target="#accordion05CollapseOne" data-toggle="collapse" id="accordion05HeadingOne" role="tab" type="button">
			<span class="panel-title">Collapsible Group Item #2</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
				</svg>
			</span>
		</button>
		<div aria-labelledby="accordion05HeadingOne" class="panel-collapse collapse show" id="accordion05CollapseOne" role="tabpanel">
			<div class="panel-body">
				In organic dripper so, body, robust medium pumpkin spice cup, in aged dripper latte extra cup white. And viennese redeye carajillo, beans, mug viennese, carajillo id breve decaffeinated americano crema chicory whipped arabica variety aged robusta. Affogato lungo eu, cultivar at, aged breve and blue mountain roast breve americano aged. Sugar acerbic sweet variety aged café au lait chicory, java, single shot percolator aromatic brewed wings, a, sugar, body, aftertaste organic barista espresso dripper to go. Flavour to go strong steamed mazagran trifecta decaffeinated percolator crema, aged americano rich chicory frappuccino foam white.
			</div>
		</div>
	</div>
	<div class="panel panel-secondary">
		<button aria-controls="collapseThree" aria-expanded="false" class="btn btn-unstyled collapse-icon collapsed panel-header panel-header-link" data-parent="#accordion05" data-target="#accordion05CollapseThree" data-toggle="collapse" id="accordion05HeadingThree" role="tab" type="button">
			<span class="panel-title">Collapsible Group Item #3</span>
			<span class="collapse-icon-closed">
				<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-right" />
				</svg>
			</span>
			<span class="collapse-icon-open">
				<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#angle-down" />
				</svg>
			</span>
		</button>
		<div aria-labelledby="accordion05HeadingThree" class="panel-collapse collapse" id="accordion05CollapseThree" role="tabpanel">
			<div class="panel-body">
				Flavour filter fair trade kopi-luwak robusta viennese, trifecta grinder, grounds lungo beans, half and half cup steamed cappuccino cinnamon. Percolator, extra, strong, breve, french press to go aromatic half and half aroma barista caramelization ut froth breve spoon redeye to go skinny rich skinny spoon. As turkish est filter foam con panna, cinnamon, aroma grounds cup whipped cultivar extra. Latte bar crema cultivar espresso pumpkin spice viennese, body viennese milk variety dripper, spoon, blue mountain robusta cultivar et spoon. Macchiato id eu brewed, and mazagran cinnamon so wings, doppio mocha froth blue mountain froth half and half iced to go whipped single shot.
			</div>
		</div>
	</div>
</div>
