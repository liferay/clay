---
title: Dropdown Menu
description: "A dropdown is a list of options related to the element that triggers it."
layout: "guide"
pattern: "dropdowns"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-dropdown">

### Types

#### Default

> The default dropdown is just a panel not prepared for scrolling the content inside it. Use this type when the number of options you want to offer is short or the panel is big enough to contain all the elements you want to use.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<a class="active dropdown-item" href="#1">Selected Option</a>
		<a class="dropdown-item" href="#3">Normal Option</a>
		<a class="disabled dropdown-item" href="#4">Disabled Option</a>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'active': true,
			'href': '#',
			'label': 'Selected Option'
		],
		[
			'href': '#',
			'label': 'Normal Option'
		],
		[
			'disabled': true,
			'href': '#',
			'label': 'Disabled Option'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"active": true, "href": "#", "label": "Selected Option"}, {"href": "#", "label": "Normal Option"}, {"disabled": true, "href": "#", "label": "Disabled Option"}]'
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<a class="active dropdown-item" href="#">Selected Option</a>
	<a class="dropdown-item" href="#">Normal Option</a>
	<a class="disabled dropdown-item" href="#">Disabled Option</a>
</div>
```

#### Dropdown with dividers

> Dropdown menu with dividers are thought to be used in actions menus. Dividing the actions by context of use help users to find actions.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#2">Preview</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#3">Expire</a>
		<a class="dropdown-item" href="#4">View History</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#5">Permissions</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#6">Copy</a>
		<a class="dropdown-item" href="#7">Move</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#8">Move to Recycle Bin</a>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'href': '#',
			'label': 'Edit'
		],
		[
			'href': '#',
			'label': 'Preview',
			'separator': true
		],
		[
			'href': '#',
			'label': 'Expire'
		],
		[
			'href': '#',
			'label': 'View History',
			'separator': true
		],
		[
			'href': '#',
			'label': 'Permissions',
			'separator': true
		],
		[
			'href': '#',
			'label': 'Copy'
		],
		[
			'href': '#',
			'label': 'Move',
			'separator': true
		],
		[
			'href': '#',
			'label': 'Move to Recycle Bin'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"href": "#", "label": "Edit"}, {"href": "#", "label": "Preview", "separator": true}, {"href": "#", "label": "Expire"}, {"href": "#", "label": "View History", "separator": true}, {"href": "#", "label": "Permissions", "separator": true}, {"href": "#", "label": "Copy"}, {"href": "#", "label": "Move", "separator": true}, {"href": "#", "label": "Move to Recycle Bin"}]'
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<a class="dropdown-item" href="#1">Edit</a>
	<a class="dropdown-item" href="#2">Preview</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#3">Expire</a>
	<a class="dropdown-item" href="#4">View History</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#5">Permissions</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#6">Copy</a>
	<a class="dropdown-item" href="#7">Move</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#8">Move to Recycle Bin</a>
</div>
```

#### Dropdown with Checkbox or Radio

> Dropdowns can be configured to have checkboxes and/or radio groups. A checkbox configuration can be suitable to filter in or out dataset elements. While, a radio configuration can be suitable to establish the order criteria in a dataset.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<div class="active dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Selected Option</span>
				</label>
			</div>
		</div>
		<div class="dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Normal Option</span>
				</label>
			</div>
		</div>
		<div class="disabled dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input disabled class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Disabled Option</span>
				</label>
			</div>
		</div>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'active': true,
			'checked': true,
			'inputName': 'item1checkbox',
			'inputValue': '1',
			'label': 'Selected Option',
			'type': 'checkbox'
		],
		[
			'inputName': 'item2checkbox',
			'inputValue': '2',
			'label': 'Normal Option',
			'type': 'checkbox'
		],
		[
			'disabled': true,
			'inputName': 'item3checkbox',
			'inputValue': '3',
			'label': 'Disabled Option',
			'type': 'checkbox'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"active": true, "checked": true, "inputName": "item1checkbox", "inputValue": "1", "label": "Selected Option", "type": "checkbox"}, {"inputName": "item2checkbox", "inputValue": "2", "label": "Normal Option", "type": "checkbox"}, {"disabled": true, "inputName": "item3checkbox", "inputValue": "3", "label": "Disabled Option", "type": "checkbox"}]'
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<div class="active dropdown-item">
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Selected Option</span>
			</label>
		</div>
	</div>
	<div class="dropdown-item">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Normal Option</span>
			</label>
		</div>
	</div>
	<div class="disabled dropdown-item">
		<div class="custom-control custom-checkbox">
			<label>
				<input disabled class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Disabled Option</span>
			</label>
		</div>
	</div>
</div>
```

#### Dropdown with search field

> Sometimes action menus face problems with the number of elements they contain. This dropdown menu variation helps in those contexts where the set of options is large and a search mechanism helps to reduce the search time and task complexity.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<form>
			<div class="dropdown-section">
				<div class="input-group input-group-inset input-group-sm">
					<div class="input-group-input">
						<input class="form-control" placeholder="Search for..." type="text">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-unstyled" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
								<use xlink:href="/vendor/lexicon/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
			<a class="active dropdown-item" href="#1">Selected Option</a>
			<a class="dropdown-item" href="#2">Normal Option</a>
			<a class="disabled dropdown-item" href="#3">Disabled Option</a>
		</form>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'active': true,
			'href': '#',
			'label': 'Selected Option'
		],
		[
			'href': '#',
			'label': 'Normal Option'
		],
		[
			'href': '#',
			'label': 'Disabled Option'
		]
	] /}
	{param searchable: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```text/html
<clay-dropdown
	items=""
	searchable="true"
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<form>
		<div class="dropdown-section">
			<div class="input-group input-group-inset input-group-sm">
				<div class="input-group-input">
					<input class="form-control" placeholder="Search for..." type="text">
				</div>
				<span class="input-group-inset-item">
					<button class="btn btn-unstyled" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use xlink:href="/vendor/lexicon/icons.svg#search" />
						</svg>
					</button>
				</span>
			</div>
		</div>
		<a class="active dropdown-item" href="#1">Selected Option</a>
		<a class="dropdown-item" href="#2">Normal Option</a>
		<a class="disabled dropdown-item" href="#3">Disabled Option</a>
	</form>
</div>
```

#### Dropdown with left icons

> Dropdown menus with left icons are suitable for process bars (wizards) where there is a need to display a dropdown menu when the number of steps do not fit the screen.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
		<a class="dropdown-item" href="#1">
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
			Normal Option
		</a>
		<a class="dropdown-item" href="#1">
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
			Second Option
		</a>
		<a class="disabled dropdown-item" href="#1">Disabled Option</a>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'href': '#1',
			'icon': 'check',
			'label': 'Normal Option'
		],
		[
			'href': '#2',
			'icon': 'check',
			'label': 'Second Option'
		],
		[
			'disabled': true,
			'href': '#3',
			'label': 'Disabled Option'
		]
	] /}
	{param itemsIconAlignment: 'left' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"href": "#1", "icon": "check", "label": "Normal Option"}, {"href": "#2", "icon": "check", "label": "Second Option"}, {"disabled": "true", "href": "#3", "label": "Disabled Option"}]'
	itemsIconAlignment="left"
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
	<a class="dropdown-item" href="#1">
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
		Normal Option
	</a>
	<a class="dropdown-item" href="#1">
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
		Second Option
	</a>
	<a class="disabled dropdown-item" href="#1">Disabled Option</a>
</div>
```

#### Dropdown with right icons

> Dropdown menus with left icons are suitable for process bars (wizards) where there is a need to display a dropdown menu when the number of steps do not fit the screen. In this case, the step number has a high relevance, therefore the icon is placed on the right side.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
		<a class="active dropdown-item" href="#1">
			Selected Option
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
		</a>
		<a class="dropdown-item" href="#1">
			Regular Option
			<div class="dropdown-item-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
					<use xlink:href="/vendor/lexicon/icons.svg#check" />
				</svg>
			</div>
		</a>
		<a class="disabled dropdown-item" href="#1">Disabled Option</a>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'active': true,
			'href': '#1',
			'icon': 'check',
			'label': 'Selected Option'
		],
		[
			'href': '#2',
			'icon': 'check',
			'label': 'Regular Option'
		],
		[
			'disabled': true,
			'href': '#3',
			'label': 'Disabled Option'
		]
	] /}
	{param itemsIconAlignment: 'right' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"active": "true", "href": "#1", "icon": "check", "label": "Selected Option"}, {"href": "#2", "icon": "check", "label": "Regular Option"}, {"disabled": "true", "href": "#3", "label": "Disabled Option"}]'
	itemsIconAlignment="right"
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
	<a class="active dropdown-item" href="#1">
		Selected Option
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
	</a>
	<a class="dropdown-item" href="#1">
		Regular Option
		<div class="dropdown-item-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check">
				<use xlink:href="/vendor/lexicon/icons.svg#check" />
			</svg>
		</div>
	</a>
	<a class="disabled dropdown-item" href="#1">Disabled Option</a>
</div>
```

#### Dropdown with groups

> This dropdown menu variation is created to be used with the management bar Filter and Order dropdown button. This configuration is thought to clean the management bar providing the user with more specific mechanisms to find data.

> The button in a dropdown menu can be either primary or secondary depending on the application needs.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<form>
			<div class="dropdown-section">
				<div class="input-group input-group-inset input-group-sm">
					<div class="input-group-input">
						<input class="form-control" placeholder="Search for..." type="text">
					</div>
					<span class="input-group-inset-item">
						<button class="btn btn-unstyled" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
								<use xlink:href="/vendor/lexicon/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
			<div class="dropdown-subheader">Filter by</div>
			<div class="active dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Selected Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Normal Option</span>
					</label>
				</div>
			</div>
			<div class="disabled dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input disabled class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Disabled Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-subheader">Order by</div>
			<div class="active dropdown-item">
				<div class="custom-control custom-radio">
					<label>
						<input checked class="custom-control-input" id="dropdownRadio1" name="dropdownRadio" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Selected Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-item">
				<div class="custom-control custom-radio">
					<label>
						<input class="custom-control-input" id="dropdownRadio2" name="dropdownRadio" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Normal Option</span>
					</label>
				</div>
			</div>
			<div class="disabled dropdown-item">
				<div class="custom-control custom-radio">
					<label>
						<input disabled class="custom-control-input" id="dropdownRadio3" name="dropdownRadio" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Disabled Option</span>
					</label>
				</div>
			</div>
			<div class="dropdown-section">
				<button class="btn btn-block btn-primary" type="submit">Done</button>
			</div>
		</form>
	</div>
</div>

```soy
{call ClayDropdown.render}
	{param button: [
		'label': 'Done',
		'style': 'primary'
	] /}
	{param items: [
		[
			'items': [
				[
					'active': true,
					'label': 'Selected Option',
					'inputValue': '1'
				],
				[
					'label': 'Normal Option',
					'inputValue': '2'
				],
				[
					'disabled': true,
					'label': 'Disabled Option',
					'inputValue': '3'
				]
			],
			'inputName': 'item1checkbox',
			'label': 'Filter by',
			'type': 'checkbox'
		],
		[
			'items': [
				[
					'checked': true,
					'label': 'Selected Option',
					'inputValue': '1'
				],
				[
					'label': "Normal Option",
					'inputValue': '2'
				],
				[
					'disabled': true,
					'label': 'Disabled Option',
					'inputValue': '3'
				]
			],
			'inputName': 'item1radio',
			'label': 'Order by',
			'type': 'radiogroup'
		]
	] /}
	{param searchable: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param label: 'Trigger Label' /}
	{param type: 'form' /}
{/call}
```
```text/html
<clay-dropdown
	button='{"label": "Done", "style": "primary"}'
	items='[
		{
			"items": [
				{
					"active": true,
					"checked": true,
					"label": "Selected Option",
					"inputValue": "1"
				},
				{
					"label": "Normal Option",
					"inputValue": "2"
				},
				{
					"disabled": true,
					"label": "Disabled Option",
					"inputValue": "3"
				}
			],
			"inputName": "item1checkbox",
			"label": "Filter by",
			"type": "checkbox"
		},
		{
			"items": [
				{
					"checked": true,
					"label": "Selected Option",
					"inputValue": "1"
				},
				{
					"label": "Normal Option",
					"inputValue": "2"
				},
				{
					"disabled": true,
					"label": "Disabled Option",
					"inputValue": "3"
				}
			],
			"inputName": "item1radio",
			"label": "Order by",
			"type": "radiogroup"
		}
	]'
	searchable="true"
	spritemap="/vendor/lexicon/icons.svg"
	label="Trigger Label"
	type="form">
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<form>
		<div class="dropdown-section">
			<div class="input-group input-group-inset input-group-sm">
				<div class="input-group-input">
					<input class="form-control" placeholder="Search for..." type="text">
				</div>
				<span class="input-group-inset-item">
					<button class="btn btn-unstyled" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use xlink:href="/vendor/lexicon/icons.svg#search" />
						</svg>
					</button>
				</span>
			</div>
		</div>
		<div class="dropdown-subheader">Filter by</div>
		<div class="active dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Selected Option</span>
				</label>
			</div>
		</div>
		<div class="dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Normal Option</span>
				</label>
			</div>
		</div>
		<div class="disabled dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input disabled class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Disabled Option</span>
				</label>
			</div>
		</div>
		<div class="dropdown-subheader">Order by</div>
		<div class="active dropdown-item">
			<div class="custom-control custom-radio">
				<label>
					<input checked class="custom-control-input" id="dropdownRadio1" name="dropdownRadio" type="radio">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Selected Option</span>
				</label>
			</div>
		</div>
		<div class="dropdown-item">
			<div class="custom-control custom-radio">
				<label>
					<input class="custom-control-input" id="dropdownRadio2" name="dropdownRadio" type="radio">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Normal Option</span>
				</label>
			</div>
		</div>
		<div class="disabled dropdown-item">
			<div class="custom-control custom-radio">
				<label>
					<input disabled class="custom-control-input" id="dropdownRadio3" name="dropdownRadio" type="radio">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">Disabled Option</span>
				</label>
			</div>
		</div>
		<div class="dropdown-section">
			<button class="btn btn-block btn-primary" type="submit">Done</button>
		</div>
	</form>
</div>
```

</article>

<article id="clay-dropdown-sorting-actions">

### Sorting actions

#### Dropdown menu from actions button

> A monospaced `dropdown-toggle` for a dropdown containing several actions, add `dropdown-action` to `dropdown`.

<div class="dropdown dropdown-action">
	<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
			<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
		</svg>
	</a>
	<div aria-labelledby="dropdownAction1" class="dropdown-menu">
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">Preview</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Expire</a>
		<a class="dropdown-item" href="#1">View History</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Permissions</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Copy</a>
		<a class="dropdown-item" href="#1">Move</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
	</div>
</div>

```soy
{call ClayActionsDropdown.render}
	{param items: [
		[
			'href': '#1',
			'label': 'Edit'
		],
		[
			'href': '#1',
			'label': 'Preview',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Expire'
		],
		[
			'href': '#1',
			'label': 'View History',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Permissions',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Copy'
		],
		[
			'href': '#1',
			'label': 'Move',
			'separator': true
		],
		[
			'href': '#1',
			'label': 'Move to Recycle Bin'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"href": "#", "label": "Edit"}, {"href": "#", "label": "Preview", "separator": true}, {"href": "#", "label": "Expire"}, {"href": "#", "label": "View History", "separator": true}, {"href": "#", "label": "Permissions", "separator": true}, {"href": "#", "label": "Copy"}, {"href": "#", "label": "Move", "separator": true}, {"href": "#", "label": "Move to Recycle Bin"}]'
	spritemap="/vendor/lexicon/icons.svg"
</clay-dropdown>
```
```text/html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<a class="dropdown-item" href="#1">Edit</a>
	<a class="dropdown-item" href="#2">Preview</a>
	<div class="dro pdown-divider"></div>
	<a class="dropdown-item" href="#3">Expire</a>
	<a class="dropdown-item" href="#4">View History</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#5">Permissions</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#6">Copy</a>
	<a class="dropdown-item" href="#7">Move</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#8">Move to Recycle Bin</a>
</div>
```

#### Dropdown menu from plus button

<div class="clay-site-dropdown-menu-container">
	<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<div class="dropdown-header">Dropdown Header</div>
		<div class="inline-scroller">
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
			<a class="dropdown-item" href="#1">Actions</a>
			<a class="dropdown-item" href="#1">Edit</a>
			<a class="dropdown-item" href="#1">View</a>
			<a class="dropdown-item" href="#1">Permissions</a>
		</div>
		<a class="disabled dropdown-item" href="#1">Disabled</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</ul>
</div>

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<div class="alert alert-fluid alert-info" role="alert">
			You can customize this menu or see all you have by pressing "more".
		</div>
		<div class="dropdown-header">Folder</div>
		<div class="dropdown-divider"></div>
		<div class="dropdown-subheader">Favorites</div>
		<div class="inline-scroller">
			<a class="dropdown-item" href="#1">D Structure</a>
			<a class="dropdown-item" href="#1">F Structure</a>
			<a class="disabled dropdown-item" href="#1">H Structure</a>
			<a class="dropdown-item" href="#1">J Structure</a>
			<a class="dropdown-item" href="#1">L Structure</a>
			<a class="dropdown-item" href="#1">M Structure</a>
			<a class="dropdown-item" href="#1">P Structure</a>
			<a class="dropdown-item" href="#1">Q Structure</a>
			<a class="dropdown-item" href="#1">R Structure</a>
			<a class="dropdown-item" href="#1">S Structure</a>
			<a class="dropdown-item" href="#1">T Structure</a>
			<a class="dropdown-item" href="#1">U Structure</a>
		</div>
		<div class="dropdown-caption">Showing 7 of 203 Structures</div>
		<div class="dropdown-section">
			<button class="btn btn-block btn-secondary">More</button>
		</div>
	</div>
</div>

```text/html
<ul aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<div class="dropdown-header">Dropdown Header</div>
	<div class="inline-scroller">
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
		<a class="dropdown-item" href="#1">Actions</a>
		<a class="dropdown-item" href="#1">Edit</a>
		<a class="dropdown-item" href="#1">View</a>
		<a class="dropdown-item" href="#1">Permissions</a>
	</div>
	<a class="disabled dropdown-item" href="#1">Disabled</a>
	<div class="dropdown-divider"></div>
	<a class="dropdown-item" href="#1">Scope</a>
</ul>
```

</article>
