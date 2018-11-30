---
title: "Dropdown Menu"
---

### Description

A dropdown is a list of options related to the element that triggers it.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/dropdowns.html">Dropdown Menu Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Types

#### Default

> The default dropdown is a panel that does not support scrolling of the content inside it. Use this type when the number of options you want to offer is short or the panel is big enough to contain all the elements you want to use.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<ul class="list-unstyled">
			<li><a class="active dropdown-item" href="#1">Selected Option</a></li>
			<li><a class="dropdown-item" href="#3">Normal Option</a></li>
			<li><a class="disabled dropdown-item" href="#4" tabindex="-1">Disabled Option</a></li>
		</ul>
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	items='[{"active": true, "href": "#", "label": "Selected Option"}, {"href": "#", "label": "Normal Option"}, {"disabled": true, "href": "#", "label": "Disabled Option"}]'
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<ul class="list-unstyled">
		<li><a class="active dropdown-item" href="#1">Selected Option</a></li>
		<li><a class="dropdown-item" href="#3">Normal Option</a></li>
		<li><a class="disabled dropdown-item" href="#4" tabindex="-1">Disabled Option</a></li>
	</ul>
</div>
```

#### Dropdown with dividers

> Dropdown menus with dividers are primarily for use in action menus. Dividing the actions by context of use makes the actions easier to find.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<ul class="list-unstyled">
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#2">Preview</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#3">Expire</a></li>
			<li><a class="dropdown-item" href="#4">View History</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#5">Permissions</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#6">Copy</a></li>
			<li><a class="dropdown-item" href="#7">Move</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#8">Move to Recycle Bin</a></li>
		</ul>
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	items='[{"href": "#", "label": "Edit"}, {"href": "#", "label": "Preview", "separator": true}, {"href": "#", "label": "Expire"}, {"href": "#", "label": "View History", "separator": true}, {"href": "#", "label": "Permissions", "separator": true}, {"href": "#", "label": "Copy"}, {"href": "#", "label": "Move", "separator": true}, {"href": "#", "label": "Move to Recycle Bin"}]'
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<ul class="list-unstyled">
		<li><a class="dropdown-item" href="#1">Edit</a></li>
		<li><a class="dropdown-item" href="#2">Preview</a></li>
		<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
		<li><a class="dropdown-item" href="#3">Expire</a></li>
		<li><a class="dropdown-item" href="#4">View History</a></li>
		<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
		<li><a class="dropdown-item" href="#5">Permissions</a></li>
		<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
		<li><a class="dropdown-item" href="#6">Copy</a></li>
		<li><a class="dropdown-item" href="#7">Move</a></li>
		<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
		<li><a class="dropdown-item" href="#8">Move to Recycle Bin</a></li>
	</ul>
</div>
```

#### Dropdown with Checkbox or Radio

> Dropdowns can be configured to have checkboxes and/or radio groups. A checkbox configuration can be suitable to filter dataset elements. While, a radio configuration can be suitable to establish the order criteria in a dataset.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<ul class="list-unstyled">
			<li class="active dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox"/>
						<span class="custom-control-label">
							<span class="custom-control-label-text">Selected Option</span>
						</span>
					</label>
				</div>
			</li>
			<li class="dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox"/>
						<span class="custom-control-label">
							<span class="custom-control-label-text">Normal Option</span>
						</span>
					</label>
				</div>
			</li>
			<li class="disabled dropdown-item">
				<div class="custom-control custom-checkbox">
					<label>
						<input disabled="disabled" class="custom-control-input" type="checkbox"/>
						<span class="custom-control-label">
							<span class="custom-control-label-text">Disabled Option</span>
						</span>
					</label>
				</div>
			</li>
		</ul>
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	items='[{"active": true, "checked": true, "inputName": "item1checkbox", "inputValue": "1", "label": "Selected Option", "type": "checkbox"}, {"inputName": "item2checkbox", "inputValue": "2", "label": "Normal Option", "type": "checkbox"}, {"disabled": true, "inputName": "item3checkbox", "inputValue": "3", "label": "Disabled Option", "type": "checkbox"}]'
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<ul class="list-unstyled">
		<li class="active dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox"/>
					<span class="custom-control-label">
						<span class="custom-control-label-text">Selected Option</span>
					</span>
				</label>
			</div>
		</li>
		<li class="dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox"/>
					<span class="custom-control-label">
						<span class="custom-control-label-text">Normal Option</span>
					</span>
				</label>
			</div>
		</li>
		<li class="disabled dropdown-item">
			<div class="custom-control custom-checkbox">
				<label>
					<input disabled="disabled" class="custom-control-input" type="checkbox"/>
					<span class="custom-control-label">
						<span class="custom-control-label-text">Disabled Option</span>
					</span>
				</label>
			</div>
		</li>
	</ul>
</div>
```

#### Dropdown with search field

> Action menus can sometimes contain multiple elements, making it a little time consuming to scroll through the entire list of options. In these cases, you can add a search field to your dropdown menu so your users can quickly find the action and move on to their next task.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<form>
			<div class="dropdown-section">
				<div class="input-group input-group-sm">
					<div class="input-group-item">
						<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text"/>
						<span class="input-group-inset-item input-group-inset-item-after">
							<button class="btn btn-unstyled" type="button">
								<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#search" />
								</svg>
							</button>
						</span>
					</div>
				</div>
			</div>
		</form>
		<ul class="list-unstyled">
			<li><a class="active dropdown-item" href="#1">Selected Option</a></li>
			<li><a class="dropdown-item" href="#2">Normal Option</a></li>
			<li><a class="disabled dropdown-item" href="#3" tabindex="-1">Disabled Option</a></li>
		</ul>
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	items=""
	searchable="true"
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<form>
		<div class="dropdown-section">
			<div class="input-group input-group-sm">
				<div class="input-group-item">
					<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text"/>
					<span class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
		</div>
	</form>
	<ul class="list-unstyled">
		<li><a class="active dropdown-item" href="#1">Selected Option</a></li>
		<li><a class="dropdown-item" href="#2">Normal Option</a></li>
		<li><a class="disabled dropdown-item" href="#3" tabindex="-1">Disabled Option</a></li>
	</ul>
</div>
```

#### Dropdown with left icons

> Dropdown menus with left icons are suitable for process bars (wizards), when the number of steps do not fit the screen. The dropdown menu with left icons can display the remaining steps.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
		<ul class="list-unstyled">
			<li>
				<a class="dropdown-item" href="#1">
					<div class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</div>
					Normal Option
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<div class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</div>
					Second Option
				</a>
			</li>
			<li>
				<a class="disabled dropdown-item" href="javascript:;" tabindex="-1">Disabled Option</a>
			</li>
		</ul>
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	items='[{"href": "#1", "icon": "check", "label": "Normal Option"}, {"href": "#2", "icon": "check", "label": "Second Option"}, {"disabled": "true", "href": "#3", "label": "Disabled Option"}]'
	itemsIconAlignment="left"
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-start">
	<ul class="list-unstyled">
		<li>
			<a class="dropdown-item" href="#1">
				<div class="dropdown-item-indicator">
					<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#check" />
					</svg>
				</div>
				Normal Option
			</a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">
				<div class="dropdown-item-indicator">
					<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#check" />
					</svg>
				</div>
				Second Option
			</a>
		</li>
		<li>
			<a class="disabled dropdown-item" href="javascript:;" tabindex="-1">Disabled Option</a>
		</li>
	</ul>
</div>
```

#### Dropdown with right icons

> Dropdown menus with right icons are suitable for process bars (wizards) when the number of steps do not fit the screen. It displays the remaining steps and emphasizes the step number by placing the icon on the right side.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
		<ul class="list-unstyled">
			<li>
				<a class="active dropdown-item" href="#1">
					Selected Option
					<div class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</div>
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					Regular Option
					<div class="dropdown-item-indicator">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</div>
				</a>
			</li>
			<li>
				<a class="disabled dropdown-item" href="javascript:;" tabindex="-1">Disabled Option</a>
			</li>
		</ul>
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	items='[{"active": "true", "href": "#1", "icon": "check", "label": "Selected Option"}, {"href": "#2", "icon": "check", "label": "Regular Option"}, {"disabled": "true", "href": "#3", "label": "Disabled Option"}]'
	itemsIconAlignment="right"
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end">
	<ul class="list-unstyled">
		<li>
			<a class="active dropdown-item" href="#1">
				Selected Option
				<div class="dropdown-item-indicator">
					<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#check" />
					</svg>
				</div>
			</a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">
				Regular Option
				<div class="dropdown-item-indicator">
					<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#check" />
					</svg>
				</div>
			</a>
		</li>
		<li>
			<a class="disabled dropdown-item" href="javascript:;" tabindex="-1">Disabled Option</a>
		</li>
	</ul>
</div>
```

#### Dropdown with Left and Right Icons

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end dropdown-menu-indicator-start">
		<ul class="list-unstyled">
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-pencil" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#pencil" />
						</svg>
					</span>
					Normal Option
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#angle-right" />
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#view" />
						</svg>
					</span>
					Second Option
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#angle-right" />
						</svg>
					</span>
				</a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">
					<span class="dropdown-item-indicator-start">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#check" />
						</svg>
					</span>
					Third Option
					<span class="dropdown-item-indicator-end">
						<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#angle-right" />
						</svg>
					</span>
				</a>
			</li>
		</ul>
	</div>
</div>

```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu dropdown-menu-indicator-end dropdown-menu-indicator-start">
	<ul class="list-unstyled">
		<li>
			<a class="dropdown-item" href="#1">
				<span class="dropdown-item-indicator-start">
					<svg class="lexicon-icon lexicon-icon-pencil" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#pencil" />
					</svg>
				</span>
				Normal Option
				<span class="dropdown-item-indicator-end">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
			</a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">
				<span class="dropdown-item-indicator-start">
					<svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#view" />
					</svg>
				</span>
				Second Option
				<span class="dropdown-item-indicator-end">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
			</a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">
				<span class="dropdown-item-indicator-start">
					<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#check" />
					</svg>
				</span>
				Third Option
				<span class="dropdown-item-indicator-end">
					<svg class="lexicon-icon lexicon-icon-angle-right" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#angle-right" />
					</svg>
				</span>
			</a>
		</li>
	</ul>
</div>
```

#### Dropdown with groups

> This dropdown menu variation is for use with the management bar Filter and Order dropdown button. This configuration is used to refine the management bar UI options, providing the user with more specific mechanisms to find data.

> Buttons in dropdown groups can either be primary or secondary, depending on the application needs.

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<form>
			<div class="dropdown-section">
				<div class="input-group input-group-sm">
					<div class="input-group-item">
						<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text"/>
						<span class="input-group-inset-item input-group-inset-item-after">
							<button class="btn btn-unstyled" type="button">
								<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#search" />
								</svg>
							</button>
						</span>
					</div>
				</div>
			</div>
		</form>
		<form>
			<div class="inline-scroller">
				<ul class="list-unstyled">
					<li class="dropdown-subheader" role="presentation">Filter by</li>
					<li class="active dropdown-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input checked class="custom-control-input" type="checkbox"/>
								<span class="custom-control-label">
									<span class="custom-control-label-text">Selected Option</span>
								</span>
							</label>
						</div>
					</li>
					<li class="dropdown-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input class="custom-control-input" type="checkbox"/>
								<span class="custom-control-label">
									<span class="custom-control-label-text">Normal Option</span>
								</span>
							</label>
						</div>
					</li>
					<li class="disabled dropdown-item">
						<div class="custom-control custom-checkbox">
							<label>
								<input disabled="disabled" class="custom-control-input" type="checkbox"/>
								<span class="custom-control-label">
									<span class="custom-control-label-text">Disabled Option</span>
								</span>
							</label>
						</div>
					</li>
					<li class="dropdown-subheader" role="presentation">Order by</li>
					<li class="active dropdown-item">
						<div class="custom-control custom-radio">
							<label>
								<input checked class="custom-control-input" id="dropdownRadio1" name="dropdownRadio" type="radio"/>
								<span class="custom-control-label">
									<span class="custom-control-label-text">Selected Option</span>
								</span>
							</label>
						</div>
					</li>
					<li class="dropdown-item">
						<div class="custom-control custom-radio">
							<label>
								<input class="custom-control-input" id="dropdownRadio2" name="dropdownRadio" type="radio"/>
								<span class="custom-control-label">
									<span class="custom-control-label-text">Normal Option</span>
								</span>
							</label>
						</div>
					</li>
					<li class="disabled dropdown-item">
						<div class="custom-control custom-radio">
							<label>
								<input disabled="disabled" class="custom-control-input" id="dropdownRadio3" name="dropdownRadio" type="radio"/>
								<span class="custom-control-label">
									<span class="custom-control-label-text">Disabled Option</span>
								</span>
							</label>
						</div>
					</li>
				</ul>
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
					'inputValue': '1',
					'inputName': 'item1checkbox',
					'type': 'checkbox'
				],
				[
					'label': 'Normal Option',
					'inputValue': '2',
					'inputName': 'item2checkbox',
					'type': 'checkbox'
				],
				[
					'disabled': true,
					'label': 'Disabled Option',
					'inputName': 'item3checkbox',
					'inputValue': '3',
					'type': 'checkbox'
				]
			],
			'label': 'Filter by',
			'type': 'group'
		],
		[
			'items': [
				[
					'checked': true,
					'label': 'Selected Option',
					'inputValue': '1',
					'type': 'checkbox',
					'inputName': 'item1radio',
				],
				[
					'label': "Normal Option",
					'inputValue': '2',
					'type': 'checkbox',
					'inputName': 'item2radio',
				],
				[
					'disabled': true,
					'label': 'Disabled Option',
					'inputValue': '3',
					'type': 'checkbox',
					'inputName': 'item3radio',
				]
			],
			'label': 'Order by',
			'type': 'group'
		]
	] /}
	{param searchable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param label: 'Trigger Label' /}
{/call}
```
```html
<clay-dropdown
	button='{"label": "Done", "style": "primary"}'
	items='[
		{
			"items": [
				{
					"active": true,
					"checked": true,
					"label": "Selected Option",
					"inputValue": "1",
					"type": "checkbox"
				},
				{
					"label": "Normal Option",
					"inputValue": "2",
					"type": "checkbox"
				},
				{
					"disabled": true,
					"label": "Disabled Option",
					"inputValue": "3",
					"type": "checkbox"
				}
			],
			"inputName": "item1checkbox",
			"label": "Filter by",
			"type": "group"
		},
		{
			"items": [
				{
					"checked": true,
					"label": "Selected Option",
					"inputValue": "1",
					"type": "checkbox"
				},
				{
					"label": "Normal Option",
					"inputValue": "2",
					"type": "checkbox"
				},
				{
					"disabled": true,
					"label": "Disabled Option",
					"inputValue": "3",
					"type": "checkbox"
				}
			],
			"inputName": "item1radio",
			"label": "Order by",
			"type": "group"
		}
	]'
	searchable="true"
	spritemap="/images/icons/icons.svg"
	label="Trigger Label">
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<form>
		<div class="dropdown-section">
			<div class="input-group input-group-sm">
				<div class="input-group-item">
					<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text"/>
					<span class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search" />
							</svg>
						</button>
					</span>
				</div>
			</div>
		</div>
	</form>
	<form>
		<div class="inline-scroller">
			<ul class="list-unstyled">
				<li class="dropdown-subheader" role="presentation">Filter by</li>
				<li class="active dropdown-item">
					<div class="custom-control custom-checkbox">
						<label>
							<input checked class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Selected Option</span>
							</span>
						</label>
					</div>
				</li>
				<li class="dropdown-item">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Normal Option</span>
							</span>
						</label>
					</div>
				</li>
				<li class="disabled dropdown-item">
					<div class="custom-control custom-checkbox">
						<label>
							<input disabled="disabled" class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Disabled Option</span>
							</span>
						</label>
					</div>
				</li>
				<li class="dropdown-subheader" role="presentation">Order by</li>
				<li class="active dropdown-item">
					<div class="custom-control custom-radio">
						<label>
							<input checked class="custom-control-input" id="dropdownRadio1" name="dropdownRadio" type="radio"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Selected Option</span>
							</span>
						</label>
					</div>
				</li>
				<li class="dropdown-item">
					<div class="custom-control custom-radio">
						<label>
							<input class="custom-control-input" id="dropdownRadio2" name="dropdownRadio" type="radio"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Normal Option</span>
							</span>
						</label>
					</div>
				</li>
				<li class="disabled dropdown-item">
					<div class="custom-control custom-radio">
						<label>
							<input disabled="disabled" class="custom-control-input" id="dropdownRadio3" name="dropdownRadio" type="radio"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Disabled Option</span>
							</span>
						</label>
					</div>
				</li>
			</ul>
		</div>
		<div class="dropdown-section">
			<button class="btn btn-block btn-primary" type="submit">Done</button>
		</div>
	</form>
</div>
```

### Sorting actions

#### Dropdown menu from actions button

> A monospaced `dropdown-toggle` element for a dropdown menu containing several actions. To use this, add the `dropdown-action` class to the `dropdown` element.

<div class="dropdown dropdown-action">
	<button aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle btn btn-unstyled" data-toggle="dropdown" id="dropdownAction1" role="button">
		<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#ellipsis-v" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAction1" class="dropdown-menu">
		<ul class="list-unstyled">
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">Preview</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Expire</a></li>
			<li><a class="dropdown-item" href="#1">View History</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Copy</a></li>
			<li><a class="dropdown-item" href="#1">Move</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
		</ul>
	</div>
</div>

```soy
{call ClayActionsDropdown.render}
	{param items: [
		[
			'items': [
				[
					'href': '#1',
					'label': 'Edit'
				],
				[
					'href': '#1',
					'label': 'Preview',
				]
			],
			'separator': true,
			'type': 'group'
		],
		[
			'items': [
				[
					'href': '#1',
					'label': 'Expire'
				],
				[
					'href': '#1',
					'label': 'View History',
				]
			],
			'separator': true,
			'type': 'group'
		],
		[
			'items': [
				[
					'href': '#1',
					'label': 'Permissions'
				]
			],
			'separator': true,
			'type': 'group'
		],
		[
			'items': [
				[
					'href': '#1',
					'label': 'Copy'
				],
				[
					'href': '#1',
					'label': 'Move'
				]
			],
			'separator': true,
			'type': 'group'
		],
		[
			'items': [
				[
					'href': '#1',
					'label': 'Move to Recycle Bin'
				]
			],
			'type': 'group'
		]
	] /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-dropdown
	items='[
		{
			"items": [
				{
					"href": '#1',
					"label": "Edit",
				},
				{
					"href": '#1',
					"label": "Preview",
				}
			],
			"separator": true,
			"type": 'group'
		},
		{
			"items": [
				{
					"href": '#1',
					"label": "Expire",
				},
				{
					"href": '#1',
					"label": "View History",
				}
			],
			"separator": true,
			"type": 'group'
		},
		{
			"items": [
				{
					"href": '#1',
					"label": "Permissions",
				}
			],
			"separator": true,
			"type": 'group'
		},
		{
			"items": [
				{
					"href": '#1',
					"label": "Copy",
				},
				{
					"href": '#1',
					"label": "Move",
				}
			],
			"separator": true,
			"type": 'group'
		},
		{
			"items": [
				{
					"href": '#1',
					"label": "Move to the Recycle Bin",
				}
			],
			"type": 'group'
		},
	]'
	spritemap="/images/icons/icons.svg"
</clay-dropdown>
```
```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<button aria-expanded="false" aria-haspopup="true" class="dropdown-toggle btn btn-unstyled" data-toggle="dropdown" id="dropdownAction1" role="button">
		<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#ellipsis-v" />
		</svg>
	</button>
	<div aria-labelledby="dropdownAction1" class="dropdown-menu">
		<ul class="list-unstyled">
			<li><a class="dropdown-item" href="#1">Edit</a></li>
			<li><a class="dropdown-item" href="#1">Preview</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Expire</a></li>
			<li><a class="dropdown-item" href="#1">View History</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Permissions</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Copy</a></li>
			<li><a class="dropdown-item" href="#1">Move</a></li>
			<li aria-hidden="true" class="dropdown-divider" role="presentation"></li>
			<li><a class="dropdown-item" href="#1">Move to Recycle Bin</a></li>
		</ul>
	</div>
</div>
```

#### Dropdown menu from plus button

<div class="clay-site-dropdown-menu-container">
	<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
		<ul class="list-unstyled">
			<div class="dropdown-header">Dropdown Header</div>
			<div class="inline-scroller">
				<ul class="list-unstyled">
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
					<li><a class="dropdown-item" href="#1">Actions</a></li>
					<li><a class="dropdown-item" href="#1">Edit</a></li>
					<li><a class="dropdown-item" href="#1">View</a></li>
					<li><a class="dropdown-item" href="#1">Permissions</a></li>
				</ul>
			</div>
			<li>
				<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
			</li>
			<div class="dropdown-divider"></div>
			<li>
				<a class="dropdown-item" href="#1">Scope</a>
			</li>
		</ul>
	</div>
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
			<ul class="list-unstyled">
				<li><a class="dropdown-item" href="#1">D Structure</a></li>
				<li><a class="dropdown-item" href="#1">F Structure</a></li>
				<li><a class="disabled dropdown-item" href="#1" tabindex="-1">H Structure</a></li>
				<li><a class="dropdown-item" href="#1">J Structure</a></li>
				<li><a class="dropdown-item" href="#1">L Structure</a></li>
				<li><a class="dropdown-item" href="#1">M Structure</a></li>
				<li><a class="dropdown-item" href="#1">P Structure</a></li>
				<li><a class="dropdown-item" href="#1">Q Structure</a></li>
				<li><a class="dropdown-item" href="#1">R Structure</a></li>
				<li><a class="dropdown-item" href="#1">S Structure</a></li>
				<li><a class="dropdown-item" href="#1">T Structure</a></li>
				<li><a class="dropdown-item" href="#1">U Structure</a></li>
			</ul>
		</div>
		<div class="dropdown-caption">Showing 7 of 203 Structures</div>
		<div class="dropdown-section">
			<button class="btn btn-block btn-secondary">More</button>
		</div>
	</div>
</div>

```html
<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<ul class="list-unstyled">
		<div class="dropdown-header">Dropdown Header</div>
		<div class="inline-scroller">
			<ul class="list-unstyled">
				<li><a class="dropdown-item" href="#1">Actions</a></li>
				<li><a class="dropdown-item" href="#1">Edit</a></li>
				<li><a class="dropdown-item" href="#1">View</a></li>
				<li><a class="dropdown-item" href="#1">Permissions</a></li>
				<li><a class="dropdown-item" href="#1">Actions</a></li>
				<li><a class="dropdown-item" href="#1">Edit</a></li>
				<li><a class="dropdown-item" href="#1">View</a></li>
				<li><a class="dropdown-item" href="#1">Permissions</a></li>
				<li><a class="dropdown-item" href="#1">Actions</a></li>
				<li><a class="dropdown-item" href="#1">Edit</a></li>
				<li><a class="dropdown-item" href="#1">View</a></li>
				<li><a class="dropdown-item" href="#1">Permissions</a></li>
				<li><a class="dropdown-item" href="#1">Actions</a></li>
				<li><a class="dropdown-item" href="#1">Edit</a></li>
				<li><a class="dropdown-item" href="#1">View</a></li>
				<li><a class="dropdown-item" href="#1">Permissions</a></li>
			</ul>
		</div>
		<li>
			<a class="disabled dropdown-item" href="#1" tabindex="-1">Disabled</a>
		</li>
		<div class="dropdown-divider"></div>
		<li>
			<a class="dropdown-item" href="#1">Scope</a>
		</li>
	</ul>
</div>

<div aria-labelledby="theDropdownToggleId" class="dropdown-menu">
	<div class="alert alert-fluid alert-info" role="alert">
		You can customize this menu or see all you have by pressing "more".
	</div>
	<div class="dropdown-header">Folder</div>
	<div class="dropdown-divider"></div>
	<div class="dropdown-subheader">Favorites</div>
	<div class="inline-scroller">
		<ul class="list-unstyled">
			<li><a class="dropdown-item" href="#1">D Structure</a></ul>
			<li><a class="dropdown-item" href="#1">F Structure</a></ul>
			<li><a class="disabled dropdown-item" href="#1" tabindex="-1">H Structure</a></ul>
			<li><a class="dropdown-item" href="#1">J Structure</a></ul>
			<li><a class="dropdown-item" href="#1">L Structure</a></ul>
			<li><a class="dropdown-item" href="#1">M Structure</a></ul>
			<li><a class="dropdown-item" href="#1">P Structure</a></ul>
			<li><a class="dropdown-item" href="#1">Q Structure</a></ul>
			<li><a class="dropdown-item" href="#1">R Structure</a></ul>
			<li><a class="dropdown-item" href="#1">S Structure</a></ul>
			<li><a class="dropdown-item" href="#1">T Structure</a></ul>
			<li><a class="dropdown-item" href="#1">U Structure</a></ul>
		</ul>
	</div>
	<div class="dropdown-caption">Showing 7 of 203 Structures</div>
	<div class="dropdown-section">
		<button class="btn btn-block btn-secondary">More</button>
	</div>
</div>
```

### API

#### ClayActionsDropdown

<div>
	[APITable "clay-dropdown/src/ClayActionsDropdown.js"]
</div>

#### ClayCreationMenuDropdown

<div>
	[APITable "clay-dropdown/src/ClayCreationMenuDropdown.js"]
</div>

#### ClayDropdown

<div>
	[APITable "clay-dropdown/src/ClayDropdown.js"]
</div>
