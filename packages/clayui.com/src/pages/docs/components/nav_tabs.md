---
title: Nav Tabs
description: Components
layout: "guide"
weight: 100
---

<article id="nav-tabs">

### Nav Tabs

<ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a aria-controls="fields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#fields" id="fieldsTab" role="tab">Fields</a>
	</li>
	<li class="nav-item">
		<a aria-controls="settings" class="nav-link" data-toggle="tab" href="#settings" id="settingsTab" role="tab">Settings</a>
	</li>
	<li class="nav-item">
		<a aria-controls="documents" class="disabled nav-link" href="#documents" id="documentsTab" role="tab">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="setup" class="dropdown-item" data-toggle="tab" href="#setup" id="setupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
			</a>
			<a aria-controls="supportedClients" class="dropdown-item" data-toggle="tab" href="#supportedClients" id="supportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="fieldsTab" class="active fade show tab-pane" id="fields" role="tabpanel">
		Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
	<div aria-labelledby="settingsTab" class="fade tab-pane" id="settings" role="tabpanel">
		Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="documentsTab" class="fade tab-pane" id="documents" role="tabpanel">
		Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="setupTab" class="fade tab-pane" id="setup" role="tabpanel">
		Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="supportedClientsTab" class="fade tab-pane" id="supportedClients" role="tabpanel">
		At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
</div>

```text/html
<ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a aria-controls="fields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#fields" id="fieldsTab" role="tab">Fields</a>
	</li>
	<li class="nav-item">
		<a aria-controls="settings" class="nav-link" data-toggle="tab" href="#settings" id="settingsTab" role="tab">Settings</a>
	</li>
	<li class="nav-item">
		<a aria-controls="documents" class="disabled nav-link" href="#documents" id="documentsTab" role="tab">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="setup" class="dropdown-item" data-toggle="tab" href="#setup" id="setupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
			</a>
			<a aria-controls="supportedClients" class="dropdown-item" data-toggle="tab" href="#supportedClients" id="supportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="fieldsTab" class="active fade show tab-pane" id="fields" role="tabpanel">
		Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
	<div aria-labelledby="settingsTab" class="fade tab-pane" id="settings" role="tabpanel">
		Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="documentsTab" class="fade tab-pane" id="documents" role="tabpanel">
		Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="setupTab" class="fade tab-pane" id="setup" role="tabpanel">
		Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="supportedClientsTab" class="fade tab-pane" id="supportedClients" role="tabpanel">
		At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
</div>
```

</article>