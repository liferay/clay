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
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="setup" class="dropdown-item" data-toggle="tab" href="#setup" id="setupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
			<a aria-controls="supportedClients" class="dropdown-item" data-toggle="tab" href="#supportedClients" id="supportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
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

```xml
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
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="setup" class="dropdown-item" data-toggle="tab" href="#setup" id="setupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
			<a aria-controls="supportedClients" class="dropdown-item" data-toggle="tab" href="#supportedClients" id="supportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="fieldsTab" class="active fade show tab-pane" id="fields" role="tabpanel">
		...
	</div>
	<div aria-labelledby="settingsTab" class="fade tab-pane" id="settings" role="tabpanel">
		...
	</div>
	<div aria-labelledby="documentsTab" class="fade tab-pane" id="documents" role="tabpanel">
		...
	</div>
	<div aria-labelledby="setupTab" class="fade tab-pane" id="setup" role="tabpanel">
		...
	</div>
	<div aria-labelledby="supportedClientsTab" class="fade tab-pane" id="supportedClients" role="tabpanel">
		...
	</div>
</div>
```

</article>


<article id="nav-tabs-just-for-faro">

### Nav Tabs (just for Faro)

<ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<button aria-controls="buttonFields" aria-expanded="true" class="active btn btn-unstyled nav-link" data-target="#buttonFields" data-toggle="tab" id="buttonFieldsTab" role="tab" type="button">Fields</button>
	</li>
	<li class="nav-item">
		<button aria-controls="buttonSettings" class="btn btn-unstyled nav-link" data-target="#buttonSettings" data-toggle="tab" id="buttonSettingsTab" role="tab" type="button">Settings</button>
	</li>
	<li class="nav-item">
		<button aria-controls="buttonDocuments" class="disabled btn btn-unstyled nav-link" data-target="#buttonDocuments" id="buttonDocumentsTab" role="tab" type="button">Documents</button>
	</li>
	<li class="dropdown nav-item">
		<button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle btn btn-unstyled nav-link" data-toggle="dropdown" type="button">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<button aria-controls="buttonSetup" class="dropdown-item" data-target="#buttonSetup" data-toggle="tab" id="buttonSetupTab" role="tab" type="button">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</button>
			<button aria-controls="buttonSupportedClients" class="dropdown-item" data-target="#buttonSupportedClients" data-toggle="tab" id="supportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</button>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="buttonFieldsTab" class="active fade show tab-pane" id="buttonFields" role="tabpanel">
		Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
	<div aria-labelledby="buttonSettingsTab" class="fade tab-pane" id="buttonSettings" role="tabpanel">
		Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="buttonDocumentsTab" class="fade tab-pane" id="buttonDocuments" role="tabpanel">
		Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="buttonSetupTab" class="fade tab-pane" id="buttonSetup" role="tabpanel">
		Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="buttonSupportedClientsTab" class="fade tab-pane" id="buttonSupportedClients" role="tabpanel">
		At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
</div>

```xml
<ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<button aria-controls="buttonFields" aria-expanded="true" class="active btn btn-unstyled nav-link" data-target="#buttonFields" data-toggle="tab" id="buttonFieldsTab" role="tab" type="button">Fields</button>
	</li>
	<li class="nav-item">
		<button aria-controls="buttonSettings" class="btn btn-unstyled nav-link" data-target="#buttonSettings" data-toggle="tab" id="buttonSettingsTab" role="tab" type="button">Settings</button>
	</li>
	<li class="nav-item">
		<button aria-controls="buttonDocuments" class="disabled btn btn-unstyled nav-link" data-target="#buttonDocuments" id="buttonDocumentsTab" role="tab" type="button">Documents</button>
	</li>
	<li class="dropdown nav-item">
		<button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle btn btn-unstyled nav-link" data-toggle="dropdown" type="button">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<button aria-controls="buttonSetup" class="dropdown-item" data-target="#buttonSetup" data-toggle="tab" id="buttonSetupTab" role="tab" type="button">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</button>
			<button aria-controls="buttonSupportedClients" class="dropdown-item" data-target="#buttonSupportedClients" data-toggle="tab" id="supportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</button>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="buttonFieldsTab" class="active fade show tab-pane" id="buttonFields" role="tabpanel">
		...
	</div>
	<div aria-labelledby="buttonSettingsTab" class="fade tab-pane" id="buttonSettings" role="tabpanel">
		...
	</div>
	<div aria-labelledby="buttonDocumentsTab" class="fade tab-pane" id="buttonDocuments" role="tabpanel">
		...
	</div>
	<div aria-labelledby="buttonSetupTab" class="fade tab-pane" id="buttonSetup" role="tabpanel">
		...
	</div>
	<div aria-labelledby="buttonSupportedClientsTab" class="fade tab-pane" id="buttonSupportedClients" role="tabpanel">
		...
	</div>
</div>
```

</article>


<article id="nav-tabs-justified">

### Nav Tabs Justified

<ul class="nav nav-justified nav-tabs" role="tablist">
	<li class="nav-item">
		<a aria-controls="navJustifiedFields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#navJustifiedFields" id="navJustifiedFieldsTab" role="tab">Fields</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navJustifiedSettings" class="nav-link" data-toggle="tab" href="#navJustifiedSettings" id="navJustifiedSettingsTab" role="tab">Settings</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navJustifiedDocuments" class="disabled nav-link" href="#navJustifiedDocuments" id="navJustifiedDocumentsTab" role="tab">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="navJustifiedSetup" class="dropdown-item" data-toggle="tab" href="#navJustifiedSetup" id="navJustifiedSetupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
			<a aria-controls="navJustifiedSupportedClients" class="dropdown-item" data-toggle="tab" href="#navJustifiedSupportedClients" id="navJustifiedSupportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="navJustifiedFieldsTab" class="active fade show tab-pane" id="navJustifiedFields" role="tabpanel">
		Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
	<div aria-labelledby="navJustifiedSettingsTab" class="fade tab-pane" id="navJustifiedSettings" role="tabpanel">
		Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navJustifiedDocumentsTab" class="fade tab-pane" id="navJustifiedDocuments" role="tabpanel">
		Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navJustifiedSetupTab" class="fade tab-pane" id="navJustifiedSetup" role="tabpanel">
		Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.
	</div>
	<div aria-labelledby="navJustifiedSupportedClientsTab" class="fade tab-pane" id="navJustifiedSupportedClients" role="tabpanel">
		At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.
	</div>
</div>

```xml
<ul class="nav nav-justified nav-tabs" role="tablist">
	<li class="nav-item">
		<a aria-controls="navJustifiedFields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#navJustifiedFields" id="navJustifiedFieldsTab" role="tab">Fields</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navJustifiedSettings" class="nav-link" data-toggle="tab" href="#navJustifiedSettings" id="navJustifiedSettingsTab" role="tab">Settings</a>
	</li>
	<li class="nav-item">
		<a aria-controls="navJustifiedDocuments" class="disabled nav-link" href="#navJustifiedDocuments" id="navJustifiedDocumentsTab" role="tab">Documents</a>
	</li>
	<li class="dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="navJustifiedSetup" class="dropdown-item" data-toggle="tab" href="#navJustifiedSetup" id="navJustifiedSetupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
			<a aria-controls="navJustifiedSupportedClients" class="dropdown-item" data-toggle="tab" href="#navJustifiedSupportedClients" id="navJustifiedSupportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="navJustifiedFieldsTab" class="active fade show tab-pane" id="navJustifiedFields" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navJustifiedSettingsTab" class="fade tab-pane" id="navJustifiedSettings" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navJustifiedDocumentsTab" class="fade tab-pane" id="navJustifiedDocuments" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navJustifiedSetupTab" class="fade tab-pane" id="navJustifiedSetup" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navJustifiedSupportedClientsTab" class="fade tab-pane" id="navJustifiedSupportedClients" role="tabpanel">
		...
	</div>
</div>
```

</article>


<article id="nav-tabs-grid">

### Nav Tabs Grid

> Use bootstrap's grid inside list items in nav-tabs.

<ul class="nav nav-tabs" role="tablist">
	<li class="col-6 col-sm-3 nav-item">
		<a aria-controls="navTabsGridFields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#navTabsGridFields" id="navTabsGridFieldsTab" role="tab">Fields</a>
	</li>
	<li class="col-6 col-sm-3 nav-item">
		<a aria-controls="navTabsGridSettings" class="nav-link" data-toggle="tab" href="#navTabsGridSettings" id="navTabsGridSettingsTab" role="tab">Settings</a>
	</li>
	<li class="col-6 col-sm-3 nav-item">
		<a aria-controls="navTabsGridDocuments" class="disabled nav-link" href="#navTabsGridDocuments" id="navTabsGridDocumentsTab" role="tab">Documents</a>
	</li>
	<li class="col-6 col-sm-3 dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="navTabsGridSetup" class="dropdown-item" data-toggle="tab" href="#navTabsGridSetup" id="navTabsGridSetupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
			<a aria-controls="navTabsGridSupportedClients" class="dropdown-item" data-toggle="tab" href="#navTabsGridSupportedClients" id="navTabsGridSupportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="navTabsGridFieldsTab" class="active fade show tab-pane" id="navTabsGridFields" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridSettingsTab" class="fade tab-pane" id="navTabsGridSettings" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridDocumentsTab" class="fade tab-pane" id="navTabsGridDocuments" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridSetupTab" class="fade tab-pane" id="navTabsGridSetup" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridSupportedClientsTab" class="fade tab-pane" id="navTabsGridSupportedClients" role="tabpanel">
		...
	</div>
</div>

```xml
<ul class="nav nav-tabs" role="tablist">
	<li class="col-6 col-sm-3 nav-item">
		<a aria-controls="navTabsGridFields" aria-expanded="true" class="active nav-link" data-toggle="tab" href="#navTabsGridFields" id="navTabsGridFieldsTab" role="tab">Fields</a>
	</li>
	<li class="col-6 col-sm-3 nav-item">
		<a aria-controls="navTabsGridSettings" class="nav-link" data-toggle="tab" href="#navTabsGridSettings" id="navTabsGridSettingsTab" role="tab">Settings</a>
	</li>
	<li class="col-6 col-sm-3 nav-item">
		<a aria-controls="navTabsGridDocuments" class="disabled nav-link" href="#navTabsGridDocuments" id="navTabsGridDocumentsTab" role="tab">Documents</a>
	</li>
	<li class="col-6 col-sm-3 dropdown nav-item">
		<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1">
			Configuration
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</a>
		<div class="dropdown-menu dropdown-menu-indicator-end">
			<a aria-controls="navTabsGridSetup" class="dropdown-item" data-toggle="tab" href="#navTabsGridSetup" id="navTabsGridSetupTab" role="tab">
				Setup
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
			<a aria-controls="navTabsGridSupportedClients" class="dropdown-item" data-toggle="tab" href="#navTabsGridSupportedClients" id="navTabsGridSupportedClientsTab" role="tab">
				Supported Clients
				<span aria-hidden="true" class="dropdown-item-indicator"></span>
			</a>
		</div>
	</li>
</ul>
<div class="tab-content">
	<div aria-labelledby="navTabsGridFieldsTab" class="active fade show tab-pane" id="navTabsGridFields" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridSettingsTab" class="fade tab-pane" id="navTabsGridSettings" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridDocumentsTab" class="fade tab-pane" id="navTabsGridDocuments" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridSetupTab" class="fade tab-pane" id="navTabsGridSetup" role="tabpanel">
		...
	</div>
	<div aria-labelledby="navTabsGridSupportedClientsTab" class="fade tab-pane" id="navTabsGridSupportedClients" role="tabpanel">
		...
	</div>
</div>
```

</article>