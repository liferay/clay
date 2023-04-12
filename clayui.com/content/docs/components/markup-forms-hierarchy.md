---
title: 'Forms Hierarchy'
description: 'The definition of the content hierarchy inside a form structure and the components used to identify the different content blocks. This page contemplates the visual definition of the hierarchy and the measurements and the definition of the components that establish that hierarchy.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/forms/'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#css-example)
-   [One Column](#css-one-column)
-   [Two Columns](#css-two-columns)
-   [Sheet Row](#css-sheet-row)
-   [Sheet Title](#css-sheet-title)
-   [Sheet Subtitle](#css-sheet-subtitle)
-   [Sheet Tertiary Title](#css-sheet-tertiary-title)
-   [Variants](#css-variants)
    -   [Sheet Multiple Form](#css-sheet-multiple-form)
    -   [Commerce Product Screen](#css-commerce-product-screen)
    -   [Sheet Dataset Content](#css-sheet-dataset-content)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#accordion">WAI-ARIA</a> accessibility pratices for Forms Hierarchy when writting your markup.
</div>

## Example(#css-example)

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h2 class="sheet-title">Sheet Title</h2>
			<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
		</div>
		<div class="sheet-section">
			<h3 class="sheet-subtitle">Sheet Subtitle</h3>
			<h3 class="autofit-row sheet-subtitle">
				<span class="autofit-col autofit-col-expand">
					<span class="heading-text">Sheet Subtitle with Button</span>
				</span>
				<span class="autofit-col">
					<span class="heading-end">
						<button class="btn btn-secondary btn-sm" type="button">Add</button>
					</span>
				</span>
			</h3>
			<h4 class="sheet-tertiary-title">Sheet Tertiary Title</h4>
			<div class="sheet-text">Sheet Subtitle and Sheet Tertiary Title are contained inside a sheet-section.</div>
		</div>
		<div aria-orientation="vertical" class="panel-group panel-group-flush" role="tablist">
			<div class="panel">
				<a aria-controls="accordion03CollapseTwo" aria-expanded="true" class="collapse-icon sheet-subtitle" data-toggle="collapse" href="#accordion03CollapseTwo" id="accordion03HeadingTwo" role="tab">
					<span>First Level Collapse 1</span>
					<span class="collapse-icon-closed">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#angle-right"></use>
						</svg>
					</span>
					<span class="collapse-icon-open">
						<svg class="lexicon-icon lexicon-icon-angle-down" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#angle-down"></use>
						</svg>
					</span>
				</a>
				<div aria-labelledby="accordion03HeadingTwo" class="panel-collapse collapse show" id="accordion03CollapseTwo" role="tabpanel" style="">
					<div class="panel-body">
						<div class="sheet-text">This is an example of explanatory text.</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sheet-footer">
			<div class="btn-group-item">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-header.
		</div>
	</div>
	<div class="sheet-section">
		<h3 class="sheet-subtitle">Sheet Subtitle</h3>
		<h3 class="autofit-row sheet-subtitle">
			<span class="autofit-col autofit-col-expand">
				<span class="heading-text">Sheet Subtitle with Button</span>
			</span>
			<span class="autofit-col">
				<span class="heading-end">
					<button class="btn btn-secondary btn-sm" type="button">
						Add
					</button>
				</span>
			</span>
		</h3>
		<h4 class="sheet-tertiary-title">Sheet Tertiary Title</h4>
		<div class="sheet-text">
			Sheet Subtitle and Sheet Tertiary Title are contained inside a
			sheet-section.
		</div>
	</div>
	<div
		aria-orientation="vertical"
		class="panel-group panel-group-flush"
		role="tablist"
	>
		<div class="panel">
			<a
				aria-controls="accordion03CollapseTwo"
				aria-expanded="true"
				class="collapse-icon sheet-subtitle"
				data-toggle="collapse"
				href="#accordion03CollapseTwo"
				id="accordion03HeadingTwo"
				role="tab"
			>
				<span>First Level Collapse 1</span>
				<span class="collapse-icon-closed">
					<svg
						class="lexicon-icon lexicon-icon-angle-right"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#angle-right"></use>
					</svg>
				</span>
				<span class="collapse-icon-open">
					<svg
						class="lexicon-icon lexicon-icon-angle-down"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#angle-down"></use>
					</svg>
				</span>
			</a>
			<div
				aria-labelledby="accordion03HeadingTwo"
				class="panel-collapse collapse show"
				id="accordion03CollapseTwo"
				role="tabpanel"
				style=""
			>
				<div class="panel-body">
					<div class="sheet-text">
						This is an example of explanatory text.
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sheet-footer">
		<div class="btn-group-item">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```

## One Column(#css-one-column)

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h2 class="sheet-title">Sheet Title</h2>
			<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
		</div>
		<div class="sheet-section">
			<div class="form-group">
				<label for="_yepzzftzb">
					Screen Name
					<span class="reference-mark">
						<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#asterisk"></use>
						</svg>
					</span>
				</label>
				<input class="form-control" id="_yepzzftzb" placeholder="Placeholder" type="text">
			</div>
			<div class="form-group">
				<label for="basicInputTypeEmail">Email</label>
				<input class="form-control" id="basicInputTypeEmail" type="email">
			</div>
			<div class="form-group">
				<label for="_3yzci7nce">Name</label>
				<input class="form-control" id="_3yzci7nce" placeholder="Name" type="text">
			</div>
		</div>
		<div class="sheet-footer sheet-footer-btn-block-sm-down">
			<div class="btn-group">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-header.
		</div>
	</div>
	<div class="sheet-section">
		<div class="form-group">
			<label for="_0rmtn466h">
				Screen Name
				<span class="reference-mark">
					<svg
						class="lexicon-icon lexicon-icon-asterisk"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#asterisk"></use>
					</svg>
				</span>
			</label>
			<input
				class="form-control"
				id="_0rmtn466h"
				placeholder="Placeholder"
				type="text"
			/>
		</div>
		<div class="form-group">
			<label for="_9hslbpuas">Email</label>
			<input class="form-control" id="_9hslbpuas" type="email" />
		</div>
		<div class="form-group">
			<label for="_javf9wj9l">Name</label>
			<input
				class="form-control"
				id="_javf9wj9l"
				placeholder="Name"
				type="text"
			/>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```

## Two Columns(#css-two-columns)

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h2 class="sheet-title">Sheet Title</h2>
			<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
		</div>
		<div class="sheet-section">
			<div class="form-group-autofit">
				<div class="form-group-item">
					<label for="_c0phn4u3q">
						Screen Name
						<span class="reference-mark">
							<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#asterisk"></use>
							</svg>
						</span>
					</label>
					<input class="form-control" id="_c0phn4u3q" placeholder="Placeholder" type="text">
				</div>
				<div class="form-group-item">
					<label for="_2nwkgln2x">Birthday</label>
					<input class="form-control" id="_2nwkgln2x" placeholder="Placeholder" type="text" value="01/01/1970">
				</div>
			</div>
			<div class="form-group-autofit">
				<div class="form-group-item">
					<label for="_iyygmg1c5">Email</label>
					<input class="form-control" id="_iyygmg1c5" type="email">
				</div>
				<div class="form-group-item">
					<label for="_xyx7wo9lq">Gender</label>
					<input class="form-control" id="_xyx7wo9lq" placeholder="Gender" type="text">
				</div>
			</div>
			<div class="form-group-autofit">
				<div class="form-group-item">
					<label for="_hizl88js7">Name</label>
					<input class="form-control" id="_hizl88js7" placeholder="Name" type="text">
				</div>
				<div class="form-group-item">
					<label for="_3ud138ywq">Job Title</label>
					<input class="form-control" id="_3ud138ywq" placeholder="Job Title" type="text">
				</div>
			</div>
		</div>
		<div class="sheet-footer sheet-footer-btn-block-sm-down">
			<div class="btn-group">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-header.
		</div>
	</div>
	<div class="sheet-section">
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="_cab0u4dgi">
					Screen Name
					<span class="reference-mark">
						<svg
							class="lexicon-icon lexicon-icon-asterisk"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#asterisk"></use>
						</svg>
					</span>
				</label>
				<input
					class="form-control"
					id="_cab0u4dgi"
					placeholder="Placeholder"
					type="text"
				/>
			</div>
			<div class="form-group-item">
				<label for="_y1mdflpv9">Birthday</label>
				<input
					class="form-control"
					id="_y1mdflpv9"
					placeholder="Placeholder"
					type="text"
					value="01/01/1970"
				/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="_jcrc07o9v">Email</label>
				<input class="form-control" id="_jcrc07o9v" type="email" />
			</div>
			<div class="form-group-item">
				<label for="_17obpdwz0">Gender</label>
				<input
					class="form-control"
					id="_17obpdwz0"
					placeholder="Gender"
					type="text"
				/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="_kcnx64qkv">Name</label>
				<input
					class="form-control"
					id="_kcnx64qkv"
					placeholder="Name"
					type="text"
				/>
			</div>
			<div class="form-group-item">
				<label for="_8awy2608y">Job Title</label>
				<input
					class="form-control"
					id="_8awy2608y"
					placeholder="Job Title"
					type="text"
				/>
			</div>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```

## Sheet Row(#css-sheet-row)

The `sheet-row` aligns content flush with the sheet borders using negative margins.

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h4 class="sheet-title">Sheet Title</h4>
		</div>
		<div class="sheet-row">
			<ul class="nav nav-tabs nav-tabs-light" role="tablist">
				<li class="nav-item">
					<a aria-controls="fields" aria-selected="true" class="active nav-link" data-toggle="tab" href="#fields" id="fieldsTab" role="tab">Fields</a>
				</li>
				<li class="nav-item">
					<a aria-controls="settings" aria-selected="false" class="nav-link" data-toggle="tab" href="#settings" id="settingsTab" role="tab">Settings</a>
				</li>
				<li class="nav-item">
					<a aria-controls="documents" aria-selected="false" class="disabled nav-link" data-toggle="tab" href="#documents" id="documentsTab" role="tab" tabindex="-1">Documents</a>
				</li>
				<li class="dropdown nav-item">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown" href="#1" role="button">
						Configuration
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-indicator-end">
						<a aria-controls="setup" aria-selected="false" class="dropdown-item" data-toggle="tab" href="#setup" id="setupTab" role="tab">
							Setup
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check" />
								</svg>
							</span>
						</a>
						<a aria-controls="supportedClients" aria-selected="false" class="dropdown-item" data-toggle="tab" href="#supportedClients" id="supportedClientsTab" role="tab">
							Supported Clients
							<span aria-hidden="true" class="dropdown-item-indicator">
								<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check" />
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
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h4 class="sheet-title">Sheet Title</h4>
	</div>
	<div class="sheet-row">
		<ul class="nav nav-tabs nav-tabs-light" role="tablist">
			<li class="nav-item">
				<a
					aria-controls="fields"
					aria-selected="true"
					class="active nav-link"
					data-toggle="tab"
					href="#fields"
					id="fieldsTab"
					role="tab"
					>Fields</a
				>
			</li>
			<li class="nav-item">
				<a
					aria-controls="settings"
					aria-selected="false"
					class="nav-link"
					data-toggle="tab"
					href="#settings"
					id="settingsTab"
					role="tab"
					>Settings</a
				>
			</li>
			<li class="nav-item">
				<a
					aria-controls="documents"
					aria-selected="false"
					class="disabled nav-link"
					data-toggle="tab"
					href="#documents"
					id="documentsTab"
					role="tab"
					tabindex="-1"
					>Documents</a
				>
			</li>
			<li class="dropdown nav-item">
				<a
					aria-expanded="false"
					aria-haspopup="true"
					class="dropdown-toggle nav-link"
					data-toggle="dropdown"
					href="#1"
					role="button"
				>
					Configuration
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</a>
				<div class="dropdown-menu dropdown-menu-indicator-end">
					<a
						aria-controls="setup"
						aria-selected="false"
						class="dropdown-item"
						data-toggle="tab"
						href="#setup"
						id="setupTab"
						role="tab"
					>
						Setup
						<span
							aria-hidden="true"
							class="dropdown-item-indicator"
						>
							<svg
								class="lexicon-icon lexicon-icon-check"
								focusable="false"
								role="presentation"
							>
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
					<a
						aria-controls="supportedClients"
						aria-selected="false"
						class="dropdown-item"
						data-toggle="tab"
						href="#supportedClients"
						id="supportedClientsTab"
						role="tab"
					>
						Supported Clients
						<span
							aria-hidden="true"
							class="dropdown-item-indicator"
						>
							<svg
								class="lexicon-icon lexicon-icon-check"
								focusable="false"
								role="presentation"
							>
								<use href="/images/icons/icons.svg#check" />
							</svg>
						</span>
					</a>
				</div>
			</li>
		</ul>
		<div class="tab-content">
			<div
				aria-labelledby="fieldsTab"
				class="active fade show tab-pane"
				id="fields"
				role="tabpanel"
			>
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertaste sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</div>
			<div
				aria-labelledby="settingsTab"
				class="fade tab-pane"
				id="settings"
				role="tabpanel"
			>
				Iced, crema, coffee id kopi-luwak coffee variety. Skinny
				extraction, id trifecta qui trifecta grinder. Barista robusta
				arabica breve ut skinny milk beans macchiato carajillo espresso.
				Cultivar single shot brewed, coffee steamed to go wings to go
				cortado. Grinder, siphon coffee acerbic espresso cinnamon crema
				breve.
			</div>
			<div
				aria-labelledby="documentsTab"
				class="fade tab-pane"
				id="documents"
				role="tabpanel"
			>
				Cultivar single shot brewed, coffee steamed to go wings to go
				cortado. Grinder, siphon coffee acerbic espresso cinnamon crema
				breve.
			</div>
			<div
				aria-labelledby="setupTab"
				class="fade tab-pane"
				id="setup"
				role="tabpanel"
			>
				Skinny extraction, id trifecta qui trifecta grinder. Barista
				robusta arabica breve ut skinny milk beans macchiato carajillo
				espresso. Cultivar single shot brewed, coffee steamed to go
				wings to go cortado. Grinder, siphon coffee acerbic espresso
				cinnamon crema breve.
			</div>
			<div
				aria-labelledby="supportedClientsTab"
				class="fade tab-pane"
				id="supportedClients"
				role="tabpanel"
			>
				At americano, viennese variety iced grounds, grinder froth and
				pumpkin spice aromatic. Cultivar aged lungo, grounds café au
				lait, skinny, blue mountain, in variety sugar shop roast. Wings,
				blue mountain affogato organic cappuccino java plunger pot.
				Single shot variety pumpkin spice seasonal skinny barista
				carajillo robust cream.
			</div>
		</div>
	</div>
</div>
```

## Sheet Title(#css-sheet-title)

Use `autofit` utilities with `component-title` in `sheet-title` to vertically align the text with small sized buttons (32px tall). This pattern allows long text to break to new line while keeping the button(s) text centered on the first line of text.

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-header">
			<h4 class="sheet-title">Sheet Title</h4>
			<h4 class="sheet-title">
				<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
					<span class="autofit-col autofit-col-expand">
						<span class="component-title">One Line Title</span>
					</span>
					<span class="autofit-col">
						<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
					</span>
					<span class="autofit-col">
						<button class="btn btn-secondary btn-sm" type="button">Remove</button>
					</span>
				</span>
			</h4>
			<h4 class="sheet-title">
				<span class="autofit-padded-no-gutters autofit-row">
					<span class="autofit-col autofit-col-expand">
						<span class="component-title">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
					</span>
					<span class="autofit-col">
						<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
					</span>
					<span class="autofit-col">
						<button class="btn btn-secondary btn-sm" type="button">Remove</button>
					</span>
				</span>
			</h4>
		</div>
	</div>
</div>

```html
<h4 class="sheet-title">Sheet Title</h4>

<h4 class="sheet-title">
	<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="component-title">One Line Title</span>
		</span>
		<span class="autofit-col">
			<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
		</span>
		<span class="autofit-col">
			<button class="btn btn-secondary btn-sm" type="button">
				Remove
			</button>
		</span>
	</span>
</h4>

<h4 class="sheet-title">
	<span class="autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="component-title"
				>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
			>
		</span>
		<span class="autofit-col">
			<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
		</span>
		<span class="autofit-col">
			<button class="btn btn-secondary btn-sm" type="button">
				Remove
			</button>
		</span>
	</span>
</h4>
```

## Sheet Subtitle(#css-sheet-subtitle)

Nest `autofit` utilities with `component-title` in `sheet-subtitle` to vertically align the text with small sized buttons (32px tall). This pattern, from the <a href="https://liferay.design/lexicon/core-components/forms/forms-sheet/" rel="noopener noreferrer" target="_blank">Lexicon specs</a>, aligns the text to the bottom of the button(s) when there is only one line of text. Multiple lines of text aligns the text to the top of the button(s).

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-section">
			<h4 class="sheet-subtitle">Sheet Subtitle</h4>
			<h4 class="sheet-subtitle">
				<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
					<span class="autofit-col autofit-col-expand">
						<span class="component-title">One Line Subtitle</span>
					</span>
					<span class="autofit-col">
						<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
					</span>
					<span class="autofit-col">
						<button class="btn btn-secondary btn-sm" type="button">Remove</button>
					</span>
				</span>
			</h4>
			<h4 class="sheet-subtitle">
				<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
					<span class="autofit-col autofit-col-expand">
						<span class="component-title">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
					</span>
					<span class="autofit-col">
						<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
					</span>
					<span class="autofit-col">
						<button class="btn btn-secondary btn-sm" type="button">Remove</button>
					</span>
				</span>
			</h4>
		</div>
	</div>
</div>

```html
<h4 clss="sheet-subtitle">Sheet Subtitle</h4>

<h4 class="sheet-subtitle">
	<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="component-title">One Line Subtitle</span>
		</span>
		<span class="autofit-col">
			<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
		</span>
		<span class="autofit-col">
			<button class="btn btn-secondary btn-sm" type="button">
				Remove
			</button>
		</span>
	</span>
</h4>

<h4 class="sheet-subtitle">
	<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="component-title"
				>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
			>
		</span>
		<span class="autofit-col">
			<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
		</span>
		<span class="autofit-col">
			<button class="btn btn-secondary btn-sm" type="button">
				Remove
			</button>
		</span>
	</span>
</h4>
```

## Sheet Tertiary Title(#css-sheet-tertiary-title)

<div class="sheet-example">
	<div class="sheet sheet-lg">
		<div class="sheet-section">
			<h4 class="sheet-tertiary-title">Sheet Tertiary Title</h4>
			<h4 class="sheet-tertiary-title">
				<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
					<span class="autofit-col autofit-col-expand">
						<span class="component-title">One Line Tertiary Title</span>
					</span>
					<span class="autofit-col">
						<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
					</span>
					<span class="autofit-col">
						<button class="btn btn-secondary btn-sm" type="button">Remove</button>
					</span>
				</span>
			</h4>
			<h4 class="sheet-tertiary-title">
				<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
					<span class="autofit-col autofit-col-expand">
						<span class="component-title">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
					</span>
					<span class="autofit-col">
						<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
					</span>
					<span class="autofit-col">
						<button class="btn btn-secondary btn-sm" type="button">Remove</button>
					</span>
				</span>
			</h4>
		</div>
	</div>
</div>

```html
<h4 class="sheet-tertiary-title">Sheet Tertiary Title</h4>

<h4 class="sheet-tertiary-title">
	<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="component-title">One Line Tertiary Title</span>
		</span>
		<span class="autofit-col">
			<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
		</span>
		<span class="autofit-col">
			<button class="btn btn-secondary btn-sm" type="button">
				Remove
			</button>
		</span>
	</span>
</h4>

<h4 class="sheet-tertiary-title">
	<span class="autofit-float-sm-down autofit-padded-no-gutters autofit-row">
		<span class="autofit-col autofit-col-expand">
			<span class="component-title"
				>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
			>
		</span>
		<span class="autofit-col">
			<a class="btn btn-secondary btn-sm" href="#1" role="button">Add</a>
		</span>
		<span class="autofit-col">
			<button class="btn btn-secondary btn-sm" type="button">
				Remove
			</button>
		</span>
	</span>
</h4>
```

## Variants(#css-variants)

## Sheet Multiple Form(#css-sheet-multiple-form)

The modifier class `sheet-multiple-form` on `sheet` provides alternative sizing and spacing to `sheet-header` to be used in specific situations explained below.

This pattern is used in form scenarios, usually to display a form, multiple forms or a combination of single/multiple forms and one or several sheets to display information. See <a href="https://liferay.design/lexicon/core-components/forms/forms-sheet/#multiple-form" rel="noopener noreferrer" target="_blank">Lexicon</a>.

<div class="sheet-example">
	<div class="sheet sheet-multiple-form">
		<div class="sheet-header">
			<div class="autofit-row autofit-padded-no-gutters">
				<div class="autofit-col autofit-col-shrink">
					<h4 class="sheet-title">
						<span class="component-title">Sheet Header</span>
					</h4>
				</div>
				<div class="autofit-col">
					<div class="dropdown dropdown-action">
						<button aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" id="dropdownSites5" type="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</button>
						<ul aria-labelledby="dropdownSites5" class="dropdown-menu">
							<li><a class="dropdown-item" href="#1">Download</a></li>
							<li><a class="dropdown-item" href="#1">Edit</a></li>
							<li><a class="dropdown-item" href="#1">Move</a></li>
							<li><a class="dropdown-item" href="#1">Checkout</a></li>
							<li><a class="dropdown-item" href="#1">Permissions</a></li>
							<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="sheet-section">
			<h5 class="sheet-title">Sheet Title</h5>
			<p class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-section.</p>
		</div>
		<div class="sheet-section">
			<h6 class="sheet-subtitle">Sheet Subtitle 01</h6>
			<div class="form-group">
				<label for="basicInputTypeTextarea">Textarea</label>
				<textarea class="form-control" id="basicInputTypeTextarea" name="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
			</div>
		</div>
		<div class="sheet-section">
			<h6 class="sheet-subtitle">Sheet Subtitle 02</h6>
		</div>
		<div class="sheet-footer sheet-footer-btn-block-sm-down">
			<div class="btn-group">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="button">Primary</button>
				</div>
				<div class="btn-group-item">
					<button class="btn btn-secondary" type="button">Secondary</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-multiple-form">
	<div class="sheet-header">
		<div class="autofit-row autofit-padded-no-gutters">
			<div class="autofit-col autofit-col-shrink">
				<h4 class="sheet-title">
					<span class="component-title">Sheet Header</span>
				</h4>
			</div>
			<div class="autofit-col">
				<div class="dropdown dropdown-action">
					<button
						aria-expanded="false"
						aria-haspopup="true"
						class="component-action dropdown-toggle"
						data-toggle="dropdown"
						id="dropdownSites5"
						type="button"
					>
						<svg
							class="lexicon-icon lexicon-icon-ellipsis-v"
							focusable="false"
							role="presentation"
						>
							<use
								xlink:href="/images/icons/icons.svg#ellipsis-v"
							/>
						</svg>
					</button>
					<ul aria-labelledby="dropdownSites5" class="dropdown-menu">
						<li><a class="dropdown-item" href="#1">Download</a></li>
						<li><a class="dropdown-item" href="#1">Edit</a></li>
						<li><a class="dropdown-item" href="#1">Move</a></li>
						<li><a class="dropdown-item" href="#1">Checkout</a></li>
						<li>
							<a class="dropdown-item" href="#1">Permissions</a>
						</li>
						<li>
							<a class="dropdown-item" href="#1"
								>Move to Recycle Bin</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="sheet-section">
		<h5 class="sheet-title">Sheet Title</h5>
		<p class="sheet-text">
			Sheet text should be used for any kind of explanatory text. The
			Sheet Title and Sheet Text are contained inside a sheet-section.
		</p>
	</div>
	<div class="sheet-section">
		<h6 class="sheet-subtitle">Sheet Subtitle 01</h6>
		<div class="form-group">
			<label for="basicInputTypeTextarea">Textarea</label>
			<textarea
				class="form-control"
				id="basicInputTypeTextarea"
				name="basicInputTypeTextarea"
				placeholder="Placeholder"
			></textarea>
		</div>
	</div>
	<div class="sheet-section">
		<h6 class="sheet-subtitle">Sheet Subtitle 02</h6>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
			</div>
		</div>
	</div>
</div>
```

## Commerce Product Screen(#css-commerce-product-screen)

This is an example of the `sheet-multiple-form` modifier with `card-page card-page-equal-height` used to layout the Commerce Product Screen.

<div class="sheet-example">
	<div class="container-fluid container-fluid-max-xl">
		<div class="card-page card-page-equal-height">
			<div class="card-page-item col-lg-4 col-sm-6">
				<div class="sheet">
					<div class="autofit-padded-no-gutters autofit-row autofit-row-center">
						<div class="autofit-col">
							<div class="sticker sticker-success sticker-xl">
								<svg class="lexicon-icon lexicon-icon-document-pending" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#document-pending" />
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div>Units Sold</div>
							<div><span>128</span><span> / Sales </span><strong>$459k</strong></div>
							<div>27% last 30 days</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-page-item col-lg-4 col-sm-6">
				<div class="sheet">
					<div class="autofit-padded-no-gutters autofit-row autofit-row-center">
						<div class="autofit-col">
							<div class="sticker sticker-success sticker-xl">
								<svg class="lexicon-icon lexicon-icon-document-pending" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#document-pending" />
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div>Units Sold</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-page-item col-lg-4 col-sm-6">
				<div class="sheet">
					<div class="autofit-padded-no-gutters autofit-row autofit-row-center">
						<div class="autofit-col">
							<div class="sticker sticker-success sticker-xl">
								<svg class="lexicon-icon lexicon-icon-document-pending" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#document-pending" />
								</svg>
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div>Units Sold</div>
							<div><span>128</span><span> / Sales </span><strong>$459k</strong></div>
							<div>27% last 30 days</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="card-page card-page-equal-height">
			<div class="card-page-item col-12">
				<div class="sheet sheet-multiple-form">
					<div class="sheet-header">
						<h4 class="sheet-title">SEO</h4>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="commerceFriendlyURL">Friendly URL</label>
								<div class="form-text">https://www.your-domain.com</div>
								<div class="input-group">
									<div class="input-group-item input-group-item-shrink input-group-prepend">
										<span class="input-group-text">/p/</span>
									</div>
									<div class="input-group-append input-group-item">
										<input class="form-control" id="commerceFriendlyURL" placeholder="design/lexicon" type="text" value="design/lexicon">
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<div class="form-group-item form-group-item-label-spacer">
									<label for="HTMLTitle">
										HTML Title
									</label>
									<div class="input-group">
										<div class="input-group-item">
											<input aria-label="Amount" class="form-control" id="HTMLTitle" placeholder="Some placeholder text..." type="text" value="This is an example of a very long title...">
											<div class="form-feedback-group">
												<div class="autofit-row">
													<div class="autofit-col autofit-col-expand">
														<div class="form-text">Title length should be under 60 characters</div>
													</div>
													<div class="autofit-col">
														<div class="form-text">56/60</div>
													</div>
												</div>
											</div>
										</div>
										<div class="input-group-item input-group-item-shrink">
											<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
												<span class="inline-item">
													<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
														<use xlink:href="/images/icons/icons.svg#es-es"></use>
													</svg>
												</span>
												<span class="btn-section">es-ES</span>
											</button>
											<ul class="dropdown-menu dropdown-menu-right">
												<li>
													<a class="autofit-row dropdown-item" href="#1">
														<span class="autofit-col autofit-col-expand">
															<span class="autofit-section">
																<span class="inline-item inline-item-before">
																	<svg class="lexicon-icon lexicon-icon-en-us" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#en-us"></use>
																	</svg>
																</span>
																en-US
															</span>
														</span>
														<span class="autofit-col">
															<span class="label label-info">
																<span class="label-item label-item-expand">Default</span>
															</span>
														</span>
													</a>
												</li>
												<li>
													<a class="autofit-row dropdown-item" href="#1">
														<span class="autofit-col autofit-col-expand">
															<span class="autofit-section">
																<span class="inline-item inline-item-before">
																	<svg class="lexicon-icon lexicon-icon-en-gb" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#en-gb"></use>
																	</svg>
																</span>
																en-GB
															</span>
														</span>
														<span class="autofit-col">
															<span class="label label-success">
																<span class="label-item label-item-expand">Translated</span>
															</span>
														</span>
													</a>
												</li>
												<li>
													<a class="active autofit-row dropdown-item" href="#1">
														<span class="autofit-col autofit-col-expand">
															<span class="autofit-section">
																<span class="inline-item inline-item-before">
																	<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#es-es"></use>
																	</svg>
																</span>
																es-ES
															</span>
														</span>
														<span class="autofit-col">
															<span class="label label-success">
																<span class="label-item label-item-expand">Translated</span>
															</span>
														</span>
													</a>
												</li>
												<li>
													<a class="autofit-row dropdown-item" href="#1">
														<span class="autofit-col autofit-col-expand">
															<span class="autofit-section">
																<span class="inline-item inline-item-before">
																	<svg class="lexicon-icon lexicon-icon-fr-fr" focusable="false" role="presentation">
																		<use xlink:href="/images/icons/icons.svg#fr-fr"></use>
																	</svg>
																</span>
																fr-FR
															</span>
														</span>
														<span class="autofit-col">
															<span class="label label-warning">
																<span class="label-item label-item-expand">Not Translated</span>
															</span>
														</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="productDescription">Description</label>
								<div class="input-group">
									<div class="input-group-item">
										<textarea aria-label="Amount" class="form-control" id="productDescription" placeholder="Some placeholder text...">El ratón inalámbrico Liferay es el ratón estelar de Liferay, diseñado para ofrecer a los usuarios avanzados comodidad, control y precisión superiores</textarea>
										<div class="form-feedback-group">
											<div class="autofit-row">
												<div class="autofit-col autofit-col-expand">
													<div class="form-text">Description should be under 155 characters</div>
												</div>
												<div class="autofit-col">
													<div class="form-text">114/160</div>
												</div>
											</div>
										</div>
									</div>
									<div class="input-group-item input-group-item-shrink">
										<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
											<span class="inline-item">
												<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#es-es"></use>
												</svg>
											</span>
											<span class="btn-section">es-ES</span>
										</button>
										<ul class="dropdown-menu dropdown-menu-right">
											<li>
												<a class="autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-en-us" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#en-us"></use>
																</svg>
															</span>
															en-US
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-info">
															<span class="label-item label-item-expand">Default</span>
														</span>
													</span>
												</a>
											</li>
											<li>
												<a class="autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-en-gb" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#en-gb"></use>
																</svg>
															</span>
															en-GB
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-success">
															<span class="label-item label-item-expand">Translated</span>
														</span>
													</span>
												</a>
											</li>
											<li>
												<a class="active autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#es-es"></use>
																</svg>
															</span>
															es-ES
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-success">
															<span class="label-item label-item-expand">Translated</span>
														</span>
													</span>
												</a>
											</li>
											<li>
												<a class="autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-fr-fr" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#fr-fr"></use>
																</svg>
															</span>
															fr-FR
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-warning">
															<span class="label-item label-item-expand">Not Translated</span>
														</span>
													</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="commerceKeywords">Keywords</label>
								<div class="input-group">
									<div class="input-group-item">
										<textarea aria-label="Amount" class="form-control" id="commerceKeywords" placeholder="Keywords"></textarea>
									</div>
									<div class="input-group-item input-group-item-shrink">
										<button aria-expanded="false" aria-haspopup="true" class="btn btn-monospaced btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
											<span class="inline-item">
												<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#es-es"></use>
												</svg>
											</span>
											<span class="btn-section">es-ES</span>
										</button>
										<ul class="dropdown-menu dropdown-menu-right">
											<li>
												<a class="autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-en-us" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#en-us"></use>
																</svg>
															</span>
															en-US
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-info">
															<span class="label-item label-item-expand">Default</span>
														</span>
													</span>
												</a>
											</li>
											<li>
												<a class="autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-en-gb" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#en-gb"></use>
																</svg>
															</span>
															en-GB
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-success">
															<span class="label-item label-item-expand">Translated</span>
														</span>
													</span>
												</a>
											</li>
											<li>
												<a class="active autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-es-es" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#es-es"></use>
																</svg>
															</span>
															es-ES
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-success">
															<span class="label-item label-item-expand">Translated</span>
														</span>
													</span>
												</a>
											</li>
											<li>
												<a class="autofit-row dropdown-item" href="#1">
													<span class="autofit-col autofit-col-expand">
														<span class="autofit-section">
															<span class="inline-item inline-item-before">
																<svg class="lexicon-icon lexicon-icon-fr-fr" focusable="false" role="presentation">
																	<use xlink:href="/images/icons/icons.svg#fr-fr"></use>
																</svg>
															</span>
															fr-FR
														</span>
													</span>
													<span class="autofit-col">
														<span class="label label-warning">
															<span class="label-item label-item-expand">Not Translated</span>
														</span>
													</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Preview</label>
								<div class="card card-type-template">
									<div class="card-body">
										<a href="#1"><strong>This is an example of a very long title</strong></a>
										<div class="text-success">https://liferay.com</div>
										<div>Optimal title length Google typically displays the first 50-60 characters of a title tag. If you keep your titles under 60 characters, our research suggest...</div>
									</div>
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
<div class="container-fluid container-fluid-max-xl">
	<div class="card-page card-page-equal-height">
		<div class="card-page-item col-lg-4 col-sm-6">
			<div class="sheet">
				<div
					class="autofit-padded-no-gutters autofit-row autofit-row-center"
				>
					<div class="autofit-col"></div>
					<div class="autofit-col autofit-col-expand"></div>
				</div>
			</div>
		</div>
		<div class="card-page-item col-lg-4 col-sm-6">
			<div class="sheet">
				<div
					class="autofit-padded-no-gutters autofit-row autofit-row-center"
				>
					<div class="autofit-col"></div>
					<div class="autofit-col autofit-col-expand"></div>
				</div>
			</div>
		</div>
		<div class="card-page-item col-lg-4 col-sm-6">
			<div class="sheet">
				<div
					class="autofit-padded-no-gutters autofit-row autofit-row-center"
				>
					<div class="autofit-col"></div>
					<div class="autofit-col autofit-col-expand"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="card-page card-page-equal-height">
		<div class="card-page-item col-12">
			<div class="sheet sheet-multiple-form">
				<div class="sheet-header">
					<h4 class="sheet-title">SEO</h4>
				</div>
				<div class="row">
					<div class="col-md-6"></div>
					<div class="col-md-6"></div>
				</div>
				<div class="row">
					<div class="col-md-6"></div>
					<div class="col-md-6"></div>
				</div>
				<div class="row">
					<div class="col-md-6"></div>
				</div>
			</div>
		</div>
	</div>
</div>
```

## Sheet Dataset Content(#css-sheet-dataset-content)

The modifier `sheet-dataset-content` should be added to `sheet` for sheets containing datasets.

A common usage of the `sheet` is to present a dataset display inside. This case benefits of the `sheet-title` and the content free space to place elements such as the dataset display. See <a href="https://liferay.design/lexicon/core-components/forms/forms-sheet/#dataset-content" rel="noopener noreferrer" target="_blank">Lexicon</a>.

<div class="sheet-example">
	<div class="container-fluid container-fluid-max-xl">
		<div class="sheet sheet-dataset-content">
			<div class="sheet-header">
				<h4 class="sheet-title">
					<span class="autofit-row autofit-padded-no-gutters">
						<span class="autofit-col autofit-col-shrink">
							<span class="component-title">col1</span>
						</span>
						<span class="autofit-col">
							<button class="component-action" type="button">
								<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</button>
						</span>
					</span>
				</h4>
			</div>
			<nav class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light">
				<div class="container-fluid container-fluid-max-xl">
					<a aria-controls="navigationBarCollapse00" aria-expanded="false" aria-label="Toggle Navigation" class="collapsed navbar-toggler navbar-toggler-link" data-toggle="collapse" href="#navigationBarCollapse00" role="button">
						<span class="navbar-text-truncate">Fragments</span>
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</a>
					<div class="collapse navbar-collapse" id="navigationBarCollapse00" style="z-index: 505;">
						<div class="container-fluid container-fluid-max-xl">
							<ul class="navbar-nav">
								<li aria-label="Current Page" class="nav-item">
									<a class="active nav-link" href="#1">
										<span class="navbar-text-truncate">Fragments</span>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#1">
										<span class="navbar-text-truncate">Resources</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<nav class="management-bar management-bar-light navbar navbar-expand-md">
				<div class="container-fluid container-fluid-max-xl">
					<ul class="navbar-nav">
						<li class="nav-item">
							<div class="custom-control custom-checkbox">
								<label>
									<input class="custom-control-input" type="checkbox">
									<span class="custom-control-label"></span>
								</label>
							</div>
						</li>
						<li class="dropdown nav-item">
							<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
								<span class="navbar-text-truncate">Filter and Order</span>
								<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#caret-bottom" />
								</svg>
							</a>
							<a aria-expanded="false" aria-haspopup="true" class="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
								<svg class="lexicon-icon lexicon-icon-filter" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#filter" />
								</svg>
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#1" role="button">Filter Action 1</a></li>
								<li><a class="dropdown-item" href="#1" role="button">Filter Action 2</a></li>
								<li><a class="dropdown-item" href="#1" role="button">Filter Action 3</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link nav-link-monospaced order-arrow-down-active" href="#1" role="button">
								<svg class="lexicon-icon lexicon-icon-order-arrow" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#order-arrow" />
								</svg>
							</a>
						</li>
					</ul>
					<div class="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
						<div class="container-fluid container-fluid-max-xl">
							<form role="search">
								<div class="input-group">
									<div class="input-group-item">
										<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text">
										<span class="input-group-inset-item input-group-inset-item-after">
											<button class="btn btn-unstyled" type="submit">
												<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#search" />
												</svg>
											</button>
											<button class="btn btn-unstyled d-none" type="button">
												<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
													<use xlink:href="/images/icons/icons.svg#times" />
												</svg>
											</button>
										</span>
									</div>
								</div>
							</form>
						</div>
					</div>
					<ul class="navbar-nav">
						<li class="nav-item navbar-breakpoint-d-none">
							<a class="nav-link nav-link-monospaced" href="#1" role="button">
								<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#search" />
								</svg>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link nav-link-monospaced" href="#uniqueSidenavCollapseId2" id="uniqueSidenavToggler2" role="button">
								<svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</a>
						</li>
						<li class="dropdown nav-item">
							<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
								<svg class="lexicon-icon lexicon-icon-list" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#list" />
								</svg>
							</a>
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
						<li class="nav-item">
							<a class="btn btn-primary nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none" href="#1" role="button">
								<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
									<use xlink:href="/images/icons/icons.svg#plus" />
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="container-view">
				<div class="sheet">
					<div class="c-empty-state c-empty-state-animation">
						<div class="c-empty-state-image">
							<div class="c-empty-state-aspect-ratio">
								<img alt="Image of a satellite in space" class="aspect-ratio-item aspect-ratio-item-fluid" src="/images/empty_state.gif" />
							</div>
						</div>
						<div class="c-empty-state-title">
							<span class="text-truncate-inline">
								<span class="text-truncate">No page templates yet</span>
							</span>
						</div>
						<div class="c-empty-state-text">Page Templates allow you to create pages faster with reusable elements.</div>
						<div class="c-empty-state-footer">
							<button class="btn btn-secondary btn-sm" type="button">New Document</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="container-fluid container-fluid-max-xl">
	<div class="sheet sheet-dataset-content">
		<div class="sheet-header">
			<h4 class="sheet-title">
				<span class="autofit-row autofit-padded-no-gutters">
					<span class="autofit-col autofit-col-shrink">
						<span class="component-title">col1</span>
					</span>
					<span class="autofit-col">
						<button class="component-action" type="button">
							<svg
								class="lexicon-icon lexicon-icon-ellipsis-v"
								focusable="false"
								role="presentation"
							>
								<use
									xlink:href="/images/icons/icons.svg#ellipsis-v"
								/>
							</svg>
						</button>
					</span>
				</span>
			</h4>
		</div>
		<nav
			class="navbar navbar-collapse-absolute navbar-expand-md navbar-underline navigation-bar navigation-bar-light"
		></nav>
		<nav
			class="management-bar management-bar-light navbar navbar-expand-md"
		></nav>
		<div class="container-view">
			<div class="sheet">
				<div class="c-empty-state c-empty-state-animation">
					<div class="c-empty-state-image">
						<div class="c-empty-state-aspect-ratio">
							<img
								alt="Image of a satellite in space"
								class="aspect-ratio-item aspect-ratio-item-fluid"
								src="/images/empty_state.gif"
							/>
						</div>
					</div>
					<div class="c-empty-state-title">
						<span class="text-truncate-inline">
							<span class="text-truncate"
								>No page templates yet</span
							>
						</span>
					</div>
					<div class="c-empty-state-text">
						Page Templates allow you to create pages faster with
						reusable elements.
					</div>
					<div class="c-empty-state-footer">
						<button class="btn btn-secondary btn-sm" type="button">
							New Document
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```
