---
title: Buttons
description: "Buttons communicate an action to happen on user interaction."
layout: "guide"
pattern: "buttons"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-button">

### States

#### Default state

<button class="btn btn-primary" type="button">Primary</button>{sp}
<button class="btn btn-monospaced btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>{sp}
<button class="btn btn-secondary" type="button">Secondary</button>{sp}
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>{sp}
<button class="btn btn-link" type="button">Link</button>

```soy
{call ClayButton.render}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}

{call ClayButton.render}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'secondary' /}
{/call}

{call ClayButton.render}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}
```
```text/html
<clay-button label="Primary" type="button"></clay-button>

<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>

<clay-button label="Secondary" style="secondary" type="button"></clay-button>

<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg" style="secondary"></clay-button>

<clay-button label="Link" style="link" type="button"></clay-button>
```
```text/html
<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-monospaced btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-link" type="button">Link</button>
```

#### Disabled State

<button class="btn btn-primary" disabled type="button">Primary</button>{sp}
<button class="btn btn-monospaced btn-primary" disabled type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>{sp}
<button class="btn btn-secondary" disabled type="button">Secondary</button>{sp}
<button class="btn btn-monospaced btn-secondary" disabled type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>{sp}
<button class="btn btn-link" disabled type="button">Link</button>

```soy
{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'secondary' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}
```
```text/html
<clay-button disabled="true" label="Primary" type="button"></clay-button>

<clay-button disabled="true" icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>

<clay-button disabled="true" label="Secondary" style="secondary" type="button"></clay-button>

<clay-button disabled="true" icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg" style="secondary"></clay-button>

<clay-button disabled="true" label="Link" style="link" type="button"></clay-button>
```
```text/html
<button class="btn btn-primary"  disabledtype="button">Primary</button>
<button class="btn btn-monospaced btn-primary" disabled type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-secondary" disabled type="button">Secondary</button>
<button class="btn btn-monospaced btn-secondary" disabled type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-link" disabled type="button">Link</button>
```

</article>

<article id="clay-button-sizes">

### Sizes

<button class="btn btn-primary btn-sm" type="button">Small</button>{sp}
<button class="btn btn-primary" type="button">Default</button>

```soy
{call ClayButton.render}
	{param label: 'Small' /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param label: 'Default' /}
{/call}
```
```text/html
<clay-button label="Small" size="sm"></clay-button>

<clay-button label="Default"></clay-button>
```
```text/html
<button class="btn btn-secondary btn-sm" type="button">Small</button>

<button class="btn btn-secondary" type="button">Default</button>
```

</article>


<article id="clay-button-sizes">

### Variations

#### Icon button

> Buttons can icons instead of text and for that icons need to be monospaced inside the button. Lexicon do not use buttons with text and icon, or text and loading indicator. Icon buttons are used intensively in management bars. This button variation can be primary, secondary or borderless type.

<button class="btn btn-monospaced btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>{sp}
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}

{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'secondary' /}
{/call}
```
```text/html
<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>

<clay-button icon="blogs" monospaced="true" spritemap="/vendor/lexicon/icons.svg" style="secondary"></clay-button>
```
```text/html
<button class="btn btn-monospaced btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
```

#### Icon and text button

> This button type is used only in sites and not in administration. The icon emphasizes and helps to understand the action. The label must be the same icon purpose.

<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
			<use xlink:href="/vendor/lexicon/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>

```soy
{call ClayButton.render}
	{param label: 'Share' /}
	{param icon: 'share' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'secondary' /}
{/call}
```
```text/html
<clay-button
	label="share"
	icon="share"
	spritemap="/vendor/lexicon/icons.svg"
	style="secondary">
</clay-button>
```
```text/html
<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
			<use xlink:href="/vendor/lexicon/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
```

#### Block level button

> All buttons can also be configured at block level. Use this configuration in those cases that you need the user to realize there is an important action to be done. It could be used as a load more action below a list, as an example. Please do not use it in forms. Be always careful with the type button to use, primary is not always the best choice neither the only configuration.

<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>{sp}
<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>

```soy
{call ClayButton.render}
	{param block: true /}
	{param label: 'Small Block Level Button' /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param block: true /}
	{param label: 'Normal Block Level Button' /}
{/call}
```
```text/html
<clay-button block="true" label="Small Block Level Button" size="sm"></clay-button>

<clay-button block="true" label="Normal Block Level Button"></clay-button>
```
```text/html
<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>

<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
```

#### Dropdown button

> Dropdown buttons are always used together with a dropdown menu. This button variation can be secondary or borderless type.

<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>{sp}
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>{sp}

```soy
{call ClayDropdown.render}
	{param items: [
		[
			'label': 'Action',
			'url': '#1'
		],
		[
			'separator': true,
			'type': 'group'
		],
		[
			'label': 'Scope',
			'url': '#1'
		]
	] /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param triggerLabel: 'Primary' /}
	{param triggerStyle: 'primary' /}
{/call}
```
```text/html
<clay-dropdown
	items='[{"label": "Action", "url": "#1"},{"separator": true, "type": : "group"},{"label": "Scope", "url": "#1"}]'
	spritemap="/vendor/lexicon/icons.svg"
	triggerLabel="Primary"
	triggerStyle="primary">
</clay-dropdown>
```
```text/html
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
```

#### Split button

> Split buttons are used in those cases where you need to offer the user a quick main action but also secondary actions.

<div class="btn-group dropdown" role="group">
	<button class="btn btn-primary" type="button">Primary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>{sp}
<div class="btn-group dropdown" role="group">
	<button class="btn btn-secondary" type="button">Secondary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>

```text/html
<div class="btn-group dropdown" role="group">
	<button class="btn btn-primary" type="button">Primary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>{sp}
<div class="btn-group dropdown" role="group">
	<button class="btn btn-secondary" type="button">Secondary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
```

#### Button group

> Button groups are used to switch between complementary views for example, but they must never be used for complementary actions and "Change and Cancel" or "Save and Cancel". In those cases the use of single buttons is the correct solution.

<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Day</button>
	<button class="active btn btn-secondary" type="button">Month</button>
	<button class="btn btn-secondary" type="button">Year</button>
	<button class="btn btn-secondary" disabled type="button">Agenda</button>
</div>

```text/html
<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Day</button>
	<button class="active btn btn-secondary" type="button">Month</button>
	<button class="btn btn-secondary" type="button">Year</button>
	<button class="btn btn-secondary" disabled type="button">Agenda</button>
</div>
```

#### Plus button

> Normally placed in toolbars, allows to have adding actions over a dataset. The kind of elements to add with this button are of the same nature and folders. Sometimes it only has a unique action, some others it has more. Visit Dropdown menu > Sorting actions to know more.

<button class="btn btn-monospaced btn-sm btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#plus"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: 'plus' /}
	{param monospaced: true /}
	{param size: 'sm' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
<clay-button icon="plus" size="sm" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>
```
```text/html
<button class="btn btn-monospaced btn-sm btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
		<use xlink:href="/vendor/lexicon/icons.svg#plus"></use>
	</svg>
</button>
```

#### Action button

> It is used when a set of contextual actions are needed over an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in an specific way, please visit Dropdown menu > Sorting actions to know more.

<button class="btn btn-monospaced btn-sm btn-unstyled" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
		<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: 'ellipsis-v' /}
	{param monospaced: true /}
	{param size: 'sm' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
{/call}
```
```text/html
<clay-button icon="ellipsis-v" size="sm" monospaced="true" spritemap="/vendor/lexicon/icons.svg"></clay-button>
```
```text/html
<button class="btn btn-monospaced btn-sm btn-primary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
		<use xlink:href="/vendor/lexicon/ellipsis-v.svg#plus"></use>
	</svg>
</button>
```

</article>
