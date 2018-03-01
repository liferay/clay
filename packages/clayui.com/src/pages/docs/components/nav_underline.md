---
title: Nav Underline
description: Components
layout: "guide"
weight: 100
---

<article id="nav-underline">

### Nav Underline

<ul class="nav nav-underline">
	<li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>

```text/html
<ul class="nav nav-underline">
	<li class="nav-item"><a class="active nav-link" href="#1">Basic Information</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Details</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Catagorization</a></li>
	<li class="nav-item"><a class="disabled nav-link" href="#1">Documents and Media</a></li>
	<li class="nav-item"><a class="nav-link" href="#1">Site Template</a></li>
</ul>
```

</article>


<article id="nav-underline-as-tabs">

### Nav Underline as Tabs

<ul class="nav nav-underline" role="tablist">
	<li class="nav-item">
		<a aria-controls="navUnderlineFields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#navUnderlineFields" id="navUnderlineFieldsTab" role="tab">Fields</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navUnderlineSettings" class="nav-link" data-toggle="tab" href="#navUnderlineSettings" id="navUnderlineSettingsTab" role="tab">Settings</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navUnderlineDocuments" class="disabled nav-link" href="#navUnderlineDocuments" id="navUnderlineDocumentsTab" role="tab">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="navUnderlineSetup" class="dropdown-item" data-toggle="tab" href="#navUnderlineSetup" id="navUnderlineSetupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
			</a>
			<a aria-controls="navUnderlineSupportedClients" class="dropdown-item" data-toggle="tab" href="#navUnderlineSupportedClients" id="navUnderlineSupportedClientsTab" role="tab">
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
	<div aria-labelledby="navUnderlineFieldsTab" class="active fade show tab-pane" id="navUnderlineFields" role="tabpanel">
		Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
	<div aria-labelledby="navUnderlineSettingsTab" class="fade tab-pane" id="navUnderlineSettings" role="tabpanel">
		Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navUnderlineDocumentsTab" class="fade tab-pane" id="navUnderlineDocuments" role="tabpanel">
		Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navUnderlineSetupTab" class="fade tab-pane" id="navUnderlineSetup" role="tabpanel">
		Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navUnderlineSupportedClientsTab" class="fade tab-pane" id="navUnderlineSupportedClients" role="tabpanel">
		At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
</div>

```text/html
<ul class="nav nav-underline" role="tablist">
	<li class="nav-item">
		<a aria-controls="navUnderlineFields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#navUnderlineFields" id="navUnderlineFieldsTab" role="tab">Fields</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navUnderlineSettings" class="nav-link" data-toggle="tab" href="#navUnderlineSettings" id="navUnderlineSettingsTab" role="tab">Settings</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navUnderlineDocuments" class="disabled nav-link" href="#navUnderlineDocuments" id="navUnderlineDocumentsTab" role="tab">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="navUnderlineSetup" class="dropdown-item" data-toggle="tab" href="#navUnderlineSetup" id="navUnderlineSetupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
			</a>
			<a aria-controls="navUnderlineSupportedClients" class="dropdown-item" data-toggle="tab" href="#navUnderlineSupportedClients" id="navUnderlineSupportedClientsTab" role="tab">
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
	<div aria-labelledby="navUnderlineFieldsTab" class="active fade show tab-pane" id="navUnderlineFields" role="tabpanel">
		Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
	<div aria-labelledby="navUnderlineSettingsTab" class="fade tab-pane" id="navUnderlineSettings" role="tabpanel">
		Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navUnderlineDocumentsTab" class="fade tab-pane" id="navUnderlineDocuments" role="tabpanel">
		Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navUnderlineSetupTab" class="fade tab-pane" id="navUnderlineSetup" role="tabpanel">
		Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navUnderlineSupportedClientsTab" class="fade tab-pane" id="navUnderlineSupportedClients" role="tabpanel">
		At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
</div>
```

</article>