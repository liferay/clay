---
title: "List"
---

### Description

List is a visual representation of a dataset that provides more flexibility for arranging the data to display than a table and that is less visual explicit than a card view.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/list.html">List Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-list">

### Row states

#### Default states

<li class="list-group-item list-group-item-flex">
	<div class="autofit-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-label"></span>
			</label>
		</div>
	</div>
	<div class="autofit-col">
		<div class="sticker sticker-secondary">
			<span class="inline-item">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/images/icons/icons.svg#folder" />
				</svg>
			</span>
		</div>
	</div>
	<div class="autofit-col autofit-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="autofit-col">
		<div class="quick-action-menu">
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/images/icons/icons.svg#trash" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/images/icons/icons.svg#download" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/images/icons/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<ul class="list-unstyled">
					<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
				</ul>
			</div>
		</div>
	</div>
</li>

```soy
{call ClayList.render}
	{param items: [
		[
			'actionItems': [
				[
					'href': '#1',
					'icon': 'trash',
					'label': 'Option 1',
					'quickAction': true
				],
				[
					'href': '#2',
					'icon': 'download',
					'label': 'Option 2',
					'quickAction': true,
					'separator': true
				],
				[
					'href': '#3',
					'icon': 'info-circle-open',
					'label': 'Option 3',
					'quickAction': true
				]
			],
			'description': 'Second Level Text',
			'href': '#1',
			'title': 'Account Example One'
		]
	] /}
	{param schema: [
		'fields': [
			[
				'contentRenderer': 'icon',
				'fieldName': 'status',
				'iconsMap': [
					'*': 'folder'
				],
				'iconShapesMap': [
					'*': 'rounded'
				]
			],
			[
				'contentRenderer': 'content',
				'fieldsMap': [
					'description': 'description',
					'href': 'href',
					'title': 'title'
				],
				'labelStylesMap': [
					'Approved': 'success'
				]
			]
		],
		'inputNameField': 'type',
		'inputNamesMap': [
			'*': 'folder'
		],
		'inputValueField': 'id'
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-list
	items='[
		{
			"actionItems": [
				{
					"href": "#1",
					"icon": "trash",
					"label": "Option 1",
					"quickAction": true
				},
				{
					"href": "#2",
					"icon": "download",
					"label": "Option 2",
					"quickAction": true,
					"separator": true
				},
				{
					"href": "#3",
					"icon": "info-circle-open",
					"label": "Option 3",
					"quickAction": true
				}
			],
			"description": "Second Level Text",
			"href": "#1",
			"title": "Account Example One"
		}
	]'
	schema='[
		"fields": [
			{
				"contentRenderer": "icon",
				"fieldName": "status",
				"iconsMap": {
					"*": "folder"
				},
				"iconShapesMap": {
					"*": "rounded"
				}
			},
			{
				"contentRenderer": "content",
				"fieldsMap": {
					"description": "description",
					"href": "href",
					"title": "title"
				},
				"labelStylesMap": [
					"Approved": "success"
				]
			}
		],
		"inputNameField": "type",
		"inputNamesMap": [
			"*": "folder"
		],
		"inputValueField": "id"
	]'
	selectable="true"
	spritemap="/images/icons/icons.svg">
</clay-list>
```
```html
<li class="list-group-item list-group-item-flex">
	<div class="autofit-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
			</label>
		</div>
	</div>
	<div class="autofit-col">
		<div class="sticker sticker-secondary">
			<span class="inline-item">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/images/icons/icons.svg#folder" />
				</svg>
			</span>
		</div>
	</div>
	<div class="autofit-col autofit-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="autofit-col">
		<div class="quick-action-menu">
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/images/icons/icons.svg#trash" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/images/icons/icons.svg#download" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/images/icons/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<ul class="list-unstyled">
					<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
				</ul>
			</div>
		</div>
	</div>
</li>
```

#### Selected state

<li class="list-group-item list-group-item-flex active">
	<div class="autofit-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-label"></span>
			</label>
		</div>
	</div>
	<div class="autofit-col">
		<div class="sticker sticker-secondary">
			<span class="inline-item">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/images/icons/icons.svg#folder" />
				</svg>
			</span>
		</div>
	</div>
	<div class="autofit-col autofit-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="autofit-col">
		<div class="quick-action-menu">
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/images/icons/icons.svg#trash" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/images/icons/icons.svg#download" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/images/icons/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<ul class="list-unstyled">
					<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
				</ul>
			</div>
		</div>
	</div>
</li>

```soy
{call ClayList.render}
	{param items: [
		[
			'actionItems': [
				[
					'href': '#1',
					'icon': 'trash',
					'label': 'Option 1',
					'quickAction': true
				],
				[
					'href': '#2',
					'icon': 'download',
					'label': 'Option 2',
					'quickAction': true,
					'separator': true
				],
				[
					'href': '#3',
					'icon': 'info-circle-open',
					'label': 'Option 3',
					'quickAction': true
				]
			],
			'description': 'Second Level Text',
			'href': '#1',
			'selected': true,
			'title': 'Account Example One'
		]
	] /}
	{param schema: [
		'fields': [
			[
				'contentRenderer': 'icon',
				'fieldName': 'status',
				'iconsMap': [
					'*': 'folder'
				],
				'iconShapesMap': [
					'*': 'rounded'
				]
			],
			[
				'contentRenderer': 'content',
				'fieldsMap': [
					'description': 'description',
					'href': 'href',
					'title': 'title'
				],
				'labelStylesMap': [
					'Approved': 'success'
				]
			]
		],
		'inputNameField': 'type',
		'inputNamesMap': [
			'*': 'folder'
		],
		'inputValueField': 'id'
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-list
	items='[
		{
			"actionItems": [
				{
					"href": "#1",
					"icon": "trash",
					"label": "Option 1",
					"quickAction": true
				},
				{
					"href": "#2",
					"icon": "download",
					"label": "Option 2",
					"quickAction": true,
					"separator": true
				},
				{
					"href": "#3",
					"icon": "info-circle-open",
					"label": "Option 3",
					"quickAction": true
				}
			],
			"description": "Second Level Text",
			"href": "#1",
			"selected": true,
			"title": "Account Example One"
		}
	]'
	schema='[
		"fields": [
			{
				"contentRenderer": "icon",
				"fieldName": "status",
				"iconsMap": {
					"*": "folder"
				},
				"iconShapesMap": {
					"*": "rounded"
				}
			},
			{
				"contentRenderer": "content",
				"fieldsMap": {
					"description": "description",
					"href": "href",
					"title": "title"
				},
				"labelStylesMap": [
					"Approved": "success"
				]
			}
		],
		"inputNameField": "type",
		"inputNamesMap": [
			"*": "folder"
		],
		"inputValueField": "id"
	]'
	selectable="true"
	spritemap="/images/icons/icons.svg">
</clay-list>
```
```html
<li class="list-group-item list-group-item-flex active">
	<div class="autofit-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-label"></span>
			</label>
		</div>
	</div>
	<div class="autofit-col">
		<div class="sticker sticker-secondary">
			<span class="inline-item">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/images/icons/icons.svg#folder" />
				</svg>
			</span>
		</div>
	</div>
	<div class="autofit-col autofit-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="autofit-col">
		<div class="quick-action-menu">
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/images/icons/icons.svg#trash" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/images/icons/icons.svg#download" />
				</svg>
			</a>
			<a class="component-action quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/images/icons/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<ul class="list-unstyled">
					<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
					<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
				</ul>
			</div>
		</div>
	</div>
</li>
```

</article>

<article id="clay-list-sections">

### Sections

> List sections help to separate different contents by a certain categorization or typology.

<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/images/icons/icons.svg#folder" />
					</svg>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/images/icons/icons.svg#trash" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/images/icons/icons.svg#download" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
</ul>

```soy
{call ClayList.render}
	{param items: [
		[
			items: [
				[
					'actionItems': [
						[
							'href': '#1',
							'icon': 'trash',
							'label': 'Option 1',
							'quickAction': true
						],
						[
							'href': '#2',
							'icon': 'download',
							'label': 'Option 2',
							'quickAction': true,
							'separator': true
						],
						[
							'href': '#3',
							'icon': 'info-circle-open',
							'label': 'Option 3',
							'quickAction': true
						]
					],
					'description': 'Second Level Text',
					'href': '#1',
					'selected': true,
					'title': 'Account Example One'
				]
			],
			'label': 'List Section'
		]
	] /}
	{param schema: [
		'fields': [
			[
				'contentRenderer': 'icon',
				'fieldName': 'status',
				'iconsMap': [
					'*': 'folder'
				],
				'iconShapesMap': [
					'*': 'rounded'
				]
			],
			[
				'contentRenderer': 'content',
				'fieldsMap': [
					'description': 'description',
					'href': 'href',
					'title': 'title'
				],
				'labelStylesMap': [
					'Approved': 'success'
				]
			]
		],
		'inputNameField': 'type',
		'inputNamesMap': [
			'*': 'folder'
		],
		'inputValueField': 'id'
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-list
	items='[
		{
			items: [
				{
					"actionItems": [
						{
							"href": "#1",
							"icon": "trash",
							"label": "Option 1",
							"quickAction": true
						},
						{
							"href": "#2",
							"icon": "download",
							"label": "Option 2",
							"quickAction": true,
							"separator": true
						},
						{
							"href": "#3",
							"icon": "info-circle-open",
							"label": "Option 3",
							"quickAction": true
						}
					],
					"description": "Second Level Text",
					"href": "#1",
					"selected": true,
					"title": "Account Example One"
				}
			]
		}
	]'
	schema='[
		"fields": [
			{
				"contentRenderer": "icon",
				"fieldName": "status",
				"iconsMap": {
					"*": "folder"
				},
				"iconShapesMap": {
					"*": "rounded"
				}
			},
			{
				"contentRenderer": "content",
				"fieldsMap": {
					"description": "description",
					"href": "href",
					"title": "title"
				},
				"labelStylesMap": [
					"Approved": "success"
				]
			}
		],
		"inputNameField": "type",
		"inputNamesMap": [
			"*": "folder"
		],
		"inputValueField": "id"
	]'
	selectable="true"
	spritemap="/images/icons/icons.svg">
</clay-list>
```
```html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/images/icons/icons.svg#folder" />
					</svg>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/images/icons/icons.svg#trash" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/images/icons/icons.svg#download" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
</ul>
```

#### Example of use

> Align content inside `.list-group-item` with flexbox with `.list-group-item-flex`.

> Use a combination of `.flex-col` and `.flex-col.flex-col-expand` to control the size of each cell.

> Add the class `show-dropdown-action-on-active` to display `dropdown-menu`'s on active in List Groups.

<div class="alert alert-warning">
	Direct descendants of <code>flex-col</code> become block level elements by default, see <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">https://www.w3.org/TR/css-flexbox-1/#flex-items</a>. If you want to display content using <code>floats</code>, <code>inline</code>, or <code>inline-block</code> wrap the content with a block level element such as a div.
</div>

<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/images/icons/icons.svg#folder" />
					</svg>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
			</div>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/images/icons/icons.svg#trash" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/images/icons/icons.svg#download" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex active">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/images/icons/icons.svg#folder" />
					</svg>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
			</div>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/images/icons/icons.svg#trash" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/images/icons/icons.svg#download" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
</ul>

```soy
{call ClayList.render}
	{param items: [
		[
			items: [
				[
					'actionItems': [
						[
							'href': '#1',
							'icon': 'trash',
							'label': 'Option 1',
							'quickAction': true
						],
						[
							'href': '#2',
							'icon': 'download',
							'label': 'Option 2',
							'quickAction': true,
							'separator': true
						],
						[
							'href': '#3',
							'icon': 'info-circle-open',
							'label': 'Option 3',
							'quickAction': true
						]
					],
					'description': 'Second Level Text',
					'href': '#1',
					'status': ['Approved'],
					'title': 'Account Example One'
				],
				[
					'actionItems': [
						[
							'href': '#1',
							'icon': 'trash',
							'label': 'Option 1',
							'quickAction': true
						],
						[
							'href': '#2',
							'icon': 'download',
							'label': 'Option 2',
							'quickAction': true,
							'separator': true
						],
						[
							'href': '#3',
							'icon': 'info-circle-open',
							'label': 'Option 3',
							'quickAction': true
						]
					],
					'description': 'Second Level Text',
					'href': '#1',
					'selected': true,
					'status': ['Approved'],
					'title': 'Account Example One'
				]
			],
			'label': 'List Section'
		]
	] /}
	{param schema: [
		'fields': [
			[
				'contentRenderer': 'icon',
				'fieldName': 'status',
				'iconsMap': [
					'*': 'folder'
				],
				'iconShapesMap': [
					'*': 'rounded'
				]
			],
			[
				'contentRenderer': 'content',
				'fieldsMap': [
					'description': 'description',
					'href': 'href',
					'labels': 'status'
					'title': 'title'
				],
				'labelStylesMap': [
					'Approved': 'success'
				]
			]
		],
		'inputNameField': 'type',
		'inputNamesMap': [
			'*': 'folder'
		],
		'inputValueField': 'id'
	] /}
	{param selectable: true /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-list
	items='[
		{
			items: [
				{
					"actionItems": [
						{
							"href": "#1",
							"icon": "trash",
							"label": "Option 1",
							"quickAction": true
						},
						{
							"href": "#2",
							"icon": "download",
							"label": "Option 2",
							"quickAction": true,
							"separator": true
						},
						{
							"href": "#3",
							"icon": "info-circle-open",
							"label": "Option 3",
							"quickAction": true
						}
					],
					"description": "Second Level Text",
					"href": "#1",
					"status": ["Approved"],
					"title": "Account Example One"
				},
				{
					"actionItems": [
						{
							"href": "#1",
							"icon": "trash",
							"label": "Option 1",
							"quickAction": true
						},
						{
							"href": "#2",
							"icon": "download",
							"label": "Option 2",
							"quickAction": true,
							"separator": true
						},
						{
							"href": "#3",
							"icon": "info-circle-open",
							"label": "Option 3",
							"quickAction": true
						}
					],
					"description": "Second Level Text",
					"href": "#1",
					"selected": true,
					"status": ["Approved"],
					"title": "Account Example One"
				}
			]
		}
	]',
	schema='[
		"fields": [
			{
				"contentRenderer": "icon",
				"fieldName": "status",
				"iconsMap": {
					"*": "folder"
				},
				"iconShapesMap": {
					"*": "rounded"
				}
			},
			{
				"contentRenderer": "content",
				"fieldsMap": {
					"description": "description",
					"href": "href",
					"labels": "status",
					"title": "title"
				},
				"labelStylesMap": [
					"Approved": "success"
				]
			}
		],
		"inputNameField": "type",
		"inputNamesMap": [
			"*": "folder"
		],
		"inputValueField": "id"
	]'
	selectable="true"
	spritemap="/images/icons/icons.svg">
</clay-list>
```
```html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/images/icons/icons.svg#folder" />
					</svg>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
			</div>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/images/icons/icons.svg#trash" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/images/icons/icons.svg#download" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex active">
		<div class="autofit-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox">
					<span class="custom-control-label"></span>
				</label>
			</div>
		</div>
		<div class="autofit-col">
			<div class="sticker sticker-secondary">
				<span class="inline-item">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
						<use xlink:href="/images/icons/icons.svg#folder" />
					</svg>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
			</div>
		</div>
		<div class="autofit-col">
			<div class="quick-action-menu">
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/images/icons/icons.svg#trash" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/images/icons/icons.svg#download" />
					</svg>
				</a>
				<a class="component-action quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/images/icons/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<ul class="list-unstyled">
						<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Move</a></li>
						<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>

<article id="clay-list-api">

### API

<div>
	[APITable "clay-list/src/ClayList.js"]
</div>

</article>

<script>
$(function() {
	$('.list-group .list-group-item input[type="checkbox"]').on(
		'click',
		function(event) {
			$(this).closest('.list-group-item').toggleClass('active');
		}
	);
});
</script>
