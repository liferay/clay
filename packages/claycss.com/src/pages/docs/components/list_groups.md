---
title: List Groups
description: "List is a visual representation of a dataset that provides more flexibility for arranging the data to display than a table and that is less visual explicit than a card view."
layout: "guide"
pattern: "list"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-list">

### Row states

#### Default states

<li class="list-group-item list-group-item-flex">
	<div class="flex-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
			</label>
		</div>
	</div>
	<div class="flex-col">
		<div class="sticker sticker-secondary">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
				<use xlink:href="/vendor/lexicon/icons.svg#folder" />
			</svg>
		</div>
	</div>
	<div class="flex-col flex-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="flex-col">
		<div class="quick-action-menu">
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/vendor/lexicon/icons.svg#trash" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/vendor/lexicon/icons.svg#download" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<a class="dropdown-item" href="#1" role="button">Remove</a>
				<a class="dropdown-item" href="#1" role="button">Edit</a>
				<a class="dropdown-item" href="#1" role="button">Move</a>
				<a class="dropdown-item" href="#1" role="button">Checkout</a>
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
			]
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
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
			}
		}
	]'
	selectable="true"
	spritemap="/vendor/lexicon/icons.svg">
</clay-list>
```
```text/html
<li class="list-group-item list-group-item-flex">
	<div class="flex-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
			</label>
		</div>
	</div>
	<div class="flex-col">
		<div class="sticker sticker-secondary">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
				<use xlink:href="/vendor/lexicon/icons.svg#folder" />
			</svg>
		</div>
	</div>
	<div class="flex-col flex-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="flex-col">
		<div class="quick-action-menu">
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/vendor/lexicon/icons.svg#trash" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/vendor/lexicon/icons.svg#download" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<a class="dropdown-item" href="#1" role="button">Remove</a>
				<a class="dropdown-item" href="#1" role="button">Edit</a>
				<a class="dropdown-item" href="#1" role="button">Move</a>
				<a class="dropdown-item" href="#1" role="button">Checkout</a>
			</div>
		</div>
	</div>
</li>
```

#### Selected state

<li class="list-group-item list-group-item-flex active">
	<div class="flex-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
			</label>
		</div>
	</div>
	<div class="flex-col">
		<div class="sticker sticker-secondary">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
				<use xlink:href="/vendor/lexicon/icons.svg#folder" />
			</svg>
		</div>
	</div>
	<div class="flex-col flex-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="flex-col">
		<div class="quick-action-menu">
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/vendor/lexicon/icons.svg#trash" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/vendor/lexicon/icons.svg#download" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<a class="dropdown-item" href="#1" role="button">Remove</a>
				<a class="dropdown-item" href="#1" role="button">Edit</a>
				<a class="dropdown-item" href="#1" role="button">Move</a>
				<a class="dropdown-item" href="#1" role="button">Checkout</a>
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
			]
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
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
			}
		}
	]'
	selectable="true"
	spritemap="/vendor/lexicon/icons.svg">
</clay-list>
```
```text/html
<li class="list-group-item list-group-item-flex active">
	<div class="flex-col">
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
			</label>
		</div>
	</div>
	<div class="flex-col">
		<div class="sticker sticker-secondary">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
				<use xlink:href="/vendor/lexicon/icons.svg#folder" />
			</svg>
		</div>
	</div>
	<div class="flex-col flex-col-expand">
		<h4 class="list-group-title text-truncate">
			<a href="#1">Account Example One</a>
		</h4>
		<p class="list-group-subtitle text-truncate">Second Level Text</p>
	</div>
	<div class="flex-col">
		<div class="quick-action-menu">
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
					<use xlink:href="/vendor/lexicon/icons.svg#trash" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
					<use xlink:href="/vendor/lexicon/icons.svg#download" />
				</svg>
			</a>
			<a class="quick-action-item" href="#1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
					<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
				</svg>
			</a>
		</div>
		<div class="dropdown dropdown-action">
			<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
					<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
				</svg>
			</a>
			<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
				<a class="dropdown-item" href="#1" role="button">Remove</a>
				<a class="dropdown-item" href="#1" role="button">Edit</a>
				<a class="dropdown-item" href="#1" role="button">Move</a>
				<a class="dropdown-item" href="#1" role="button">Checkout</a>
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
			]
		]
	] /}
	{param selectable: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
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
			}
		}
	]'
	selectable="true"
	spritemap="/vendor/lexicon/icons.svg">
</clay-list>
```
```text/html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
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
		<div class="flex-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="quick-action-menu">
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/vendor/lexicon/icons.svg#download" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#1" role="button">Remove</a>
					<a class="dropdown-item" href="#1" role="button">Edit</a>
					<a class="dropdown-item" href="#1" role="button">Move</a>
					<a class="dropdown-item" href="#1" role="button">Checkout</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex active">
		<div class="flex-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="quick-action-menu">
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/vendor/lexicon/icons.svg#download" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#1" role="button">Remove</a>
					<a class="dropdown-item" href="#1" role="button">Edit</a>
					<a class="dropdown-item" href="#1" role="button">Move</a>
					<a class="dropdown-item" href="#1" role="button">Checkout</a>
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
	] /}
	{param selectable: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
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
	]'
	schema='[
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
	]'
	selectable="true"
	spritemap="/vendor/lexicon/icons.svg">
</clay-list>
```
```text/html
<ul class="list-group show-quick-actions-on-hover">
	<li class="list-group-header">
		<h3 class="list-group-header-title">List Section</h3>
	</li>
	<li class="list-group-item list-group-item-flex">
		<div class="flex-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title text-truncate">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle text-truncate">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="quick-action-menu">
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/vendor/lexicon/icons.svg#download" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#1" role="button">Remove</a>
					<a class="dropdown-item" href="#1" role="button">Edit</a>
					<a class="dropdown-item" href="#1" role="button">Move</a>
					<a class="dropdown-item" href="#1" role="button">Checkout</a>
				</div>
			</div>
		</div>
	</li>
	<li class="list-group-item list-group-item-flex active">
		<div class="flex-col">
			<div class="custom-control custom-checkbox">
				<label>
					<input checked class="custom-control-input" type="checkbox">
					<span class="custom-control-indicator"></span>
				</label>
			</div>
		</div>
		<div class="flex-col">
			<div class="sticker sticker-secondary">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-folder">
					<use xlink:href="/vendor/lexicon/icons.svg#folder" />
				</svg>
			</div>
		</div>
		<div class="flex-col flex-col-expand">
			<h4 class="list-group-title">
				<a href="#1">Account Example One</a>
			</h4>
			<p class="list-group-subtitle">Second Level Text</p>
			<div class="list-group-detail">
				<span class="label label-success">Approved</span>
			</div>
		</div>
		<div class="flex-col">
			<div class="quick-action-menu">
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
						<use xlink:href="/vendor/lexicon/icons.svg#trash" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
						<use xlink:href="/vendor/lexicon/icons.svg#download" />
					</svg>
				</a>
				<a class="quick-action-item" href="#1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
						<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
					</svg>
				</a>
			</div>
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
						<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#1" role="button">Remove</a>
					<a class="dropdown-item" href="#1" role="button">Edit</a>
					<a class="dropdown-item" href="#1" role="button">Move</a>
					<a class="dropdown-item" href="#1" role="button">Checkout</a>
				</div>
			</div>
		</div>
	</li>
</ul>
```

</article>


<script>
{literal}
$(function() {
	$('.list-group .list-group-item input[type="checkbox"]').on(
		'click',
		function(event) {
			$(this).closest('.list-group-item').toggleClass('active');
		}
	);
});
{/literal}
</script>
