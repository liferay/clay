---
title: "Buttons"
---

### Description

Buttons communicate an action to happen on user interaction.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/buttons.html">Buttons Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Types

#### Primary

<button class="btn btn-primary" type="button">Primary</button>

```soy
{call ClayButton.render}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}
```
```html
<clay-button label="Primary" type="button"></clay-button>
```
```html
<button class="btn btn-primary" type="button">Primary</button>
```

#### Secondary

<button class="btn btn-secondary" type="button">Secondary</button>

```soy
{call ClayButton.render}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}
```
```html
<clay-button label="Secondary" style="secondary" type="button"></clay-button>
```
```html
<button class="btn btn-secondary" type="button">Secondary</button>
```

#### Link

<button class="btn btn-link" type="button">Link</button>

```soy
{call ClayButton.render}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}
```
```html
<clay-button label="Link" style="link" type="button"></clay-button>
```
```html
<button class="btn btn-link" type="button">Link</button>
```

### States

#### Default state

<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-monospaced btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-link" type="button">Link</button>

```soy
{call ClayButton.render}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}

{call ClayButton.render}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'secondary' /}
{/call}

{call ClayButton.render}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}
```
```html
<clay-button label="Primary" type="button"></clay-button>

<clay-button icon="blogs" monospaced="true" spritemap="/images/icons/icons.svg"></clay-button>

<clay-button label="Secondary" style="secondary" type="button"></clay-button>

<clay-button icon="blogs" monospaced="true" spritemap="/images/icons/icons.svg" style="secondary"></clay-button>

<clay-button label="Link" style="link" type="button"></clay-button>
```
```html
<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-monospaced btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-link" type="button">Link</button>
```

#### Disabled State

<button class="btn btn-primary" disabled type="button">Primary</button>
<button class="btn btn-monospaced btn-primary" disabled type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-secondary" disabled type="button">Secondary</button>
<button class="btn btn-monospaced btn-secondary" disabled type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
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
	{param spritemap: '/images/icons/icons.svg' /}
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
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'secondary' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}
```
```html
<clay-button disabled="true" label="Primary" type="button"></clay-button>

<clay-button disabled="true" icon="blogs" monospaced="true" spritemap="/images/icons/icons.svg"></clay-button>

<clay-button disabled="true" label="Secondary" style="secondary" type="button"></clay-button>

<clay-button disabled="true" icon="blogs" monospaced="true" spritemap="/images/icons/icons.svg" style="secondary"></clay-button>

<clay-button disabled="true" label="Link" style="link" type="button"></clay-button>
```
```html
<button class="btn btn-primary"  disabledtype="button">Primary</button>
<button class="btn btn-monospaced btn-primary" disabled type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-secondary" disabled type="button">Secondary</button>
<button class="btn btn-monospaced btn-secondary" disabled type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-link" disabled type="button">Link</button>
```

### Sizes

#### Small

<button class="btn btn-primary btn-sm" type="button">Small</button>

```soy
{call ClayButton.render}
	{param label: 'Small' /}
	{param size: 'sm' /}
{/call}
```
```html
<clay-button label="Small" size="sm"></clay-button>
```
```html
<button class="btn btn-secondary btn-sm" type="button">Small</button>

<button class="btn btn-secondary" type="button">Default</button>
```

#### Default

<button class="btn btn-primary" type="button">Default</button>

```soy
{call ClayButton.render}
	{param label: 'Default' /}
{/call}
```
```html
<clay-button label="Default"></clay-button>
```
```html
<button class="btn btn-primary" type="button">Default</button>
```

### Variations

#### Icon button

> Buttons can display icons instead of text. The icons, however, must be monospaced inside the button. Lexicon doesn't use buttons with text and icons or text and loading indicators. Icon buttons are used primarily in management bars. This button variation can be primary, secondary, or borderless type.

<button class="btn btn-monospaced btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}

{call ClayButton.render}
	{param icon: 'blogs' /}
	{param monospaced: true /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'secondary' /}
{/call}
```
```html
<clay-button icon="blogs" monospaced="true" spritemap="/images/icons/icons.svg"></clay-button>

<clay-button icon="blogs" monospaced="true" spritemap="/images/icons/icons.svg" style="secondary"></clay-button>
```
```html
<button class="btn btn-monospaced btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#blogs"></use>
	</svg>
</button>
```

#### Icon and text button

> This button type is only used in sites, outside of administration. The icon emphasizes and helps communicate the action. The label must match the icon's purpose.

<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>

```soy
{call ClayButton.render}
	{param label: 'Share' /}
	{param icon: 'share' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'secondary' /}
{/call}
```
```html
<clay-button
	label="share"
	icon="share"
	spritemap="/images/icons/icons.svg"
	style="secondary">
</clay-button>
```
```html
<button class="btn btn-secondary" type="button">
	<span class="inline-item inline-item-before">
		<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#share"></use>
		</svg>
	</span>
	Share
</button>
```

#### Block level button

> Buttons can also be configured at block level. Use this configuration when you need to communicate an important action is required for the user. For example, it can be used as a load more action below a list. Please do not use it in forms. Choose the button type carefully. Primary is not always the best choice, nor is it the only configuration.

<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>
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
```html
<clay-button block="true" label="Small Block Level Button" size="sm"></clay-button>

<clay-button block="true" label="Normal Block Level Button"></clay-button>
```
```html
<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>

<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
```

#### Dropdown button

> Dropdown buttons are always used with a dropdown menu. This button variation can be secondary or borderless type.

<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
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
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>

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
	{param spritemap: '/images/icons/icons.svg' /}
	{param triggerLabel: 'Primary' /}
	{param triggerStyle: 'primary' /}
{/call}
```
```html
<clay-dropdown
	items='[{"label": "Action", "url": "#1"},{"separator": true, "type": : "group"},{"label": "Scope", "url": "#1"}]'
	spritemap="/images/icons/icons.svg"
	triggerLabel="Primary"
	triggerStyle="primary">
</clay-dropdown>
```
```html
<div class="btn-group">
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
		Primary
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
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
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
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

> Split buttons are used when you need to offer the user a quick main action along with secondary actions.

<div class="btn-group dropdown" role="group">
	<button class="btn btn-primary" type="button">Primary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
<div class="btn-group dropdown" role="group">
	<button class="btn btn-secondary" type="button">Secondary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>

```html
<div class="btn-group dropdown" role="group">
	<button class="btn btn-primary" type="button">Primary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Scope</a>
	</div>
</div>
<div class="btn-group dropdown" role="group">
	<button class="btn btn-secondary" type="button">Secondary</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-bottom" />
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

> Button groups are used to switch between complementary views for example, but they must never be used for complementary actions, "Change and Cancel" actions, or "Save and Cancel" actions. In those cases, single buttons are the correct solution.

<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Day</button>
	<button class="active btn btn-secondary" type="button">Month</button>
	<button class="btn btn-secondary" type="button">Year</button>
	<button class="btn btn-secondary" disabled type="button">Agenda</button>
</div>

```html
<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Day</button>
	<button class="active btn btn-secondary" type="button">Month</button>
	<button class="btn btn-secondary" type="button">Year</button>
	<button class="btn btn-secondary" disabled type="button">Agenda</button>
</div>
```

#### Plus button

> Plus buttons provide add actions for a dataset and are normally placed in toolbars. The add button lets you add entities, such as a blog post for a blog, a message board thread for a message board, or a folder. It can have one action or multiple. Visit Dropdown menu > Sorting actions to learn more.

<button class="btn btn-monospaced btn-sm btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-blogs" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#plus"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: 'plus' /}
	{param monospaced: true /}
	{param size: 'sm' /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-button icon="plus" size="sm" monospaced="true" spritemap="/images/icons/icons.svg"></clay-button>
```
```html
<button class="btn btn-monospaced btn-sm btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#plus"></use>
	</svg>
</button>
```

#### Action button

> Action buttons are used when a set of contextual actions are needed for an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in a specific way. please visit Dropdown menu > Sorting actions to learn more.

<button class="btn btn-monospaced btn-sm btn-unstyled" type="button">
	<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#ellipsis-v"></use>
	</svg>
</button>

```soy
{call ClayButton.render}
	{param icon: 'ellipsis-v' /}
	{param monospaced: true /}
	{param size: 'sm' /}
	{param spritemap: '/images/icons/icons.svg' /}
{/call}
```
```html
<clay-button icon="ellipsis-v" size="sm" monospaced="true" spritemap="/images/icons/icons.svg"></clay-button>
```
```html
<button class="btn btn-monospaced btn-sm btn-primary" type="button">
	<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
		<use href="/images/icons/ellipsis-v.svg#plus"></use>
	</svg>
</button>
```

### API

<div>
	[APITable "clay-button/src/ClayButton.js"]
</div>

