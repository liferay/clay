---
title: Buttons
description: Components
layout: "guide"
weight: 100
---

<article id="button">

### Button

<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-info" type="button">Info</button>
<button class="btn btn-success" type="button">Success</button>
<button class="btn btn-warning" type="button">Warning</button>
<button class="btn btn-danger" type="button">Danger</button>
<button class="btn btn-light" type="button">Light</button>
<button class="btn btn-dark" type="button">Dark</button>
<button class="btn btn-link" type="button">Link</button>
<button class="btn btn-unstyled" type="button">Unstyled</button>

```text/html
<button class="btn btn-primary" type="button">Primary</button>
<button class="btn btn-secondary" type="button">Secondary</button>
<button class="btn btn-info" type="button">Info</button>
<button class="btn btn-success" type="button">Success</button>
<button class="btn btn-warning" type="button">Warning</button>
<button class="btn btn-danger" type="button">Danger</button>
<button class="btn btn-light" type="button">Light</button>
<button class="btn btn-dark" type="button">Dark</button>
<button class="btn btn-link" type="button">Link</button>
<button class="btn btn-unstyled" type="button">Unstyled</button>
```
```soy
{call ClayButton.render}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Borderless' /}
	{param style: 'borderless' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param label: 'Unstyled' /}
	{param style: 'unstyled' /}
	{param type: 'button' /}
{/call}
```

### Focus

<button class="btn btn-primary focus" type="button">Primary</button>
<button class="btn btn-secondary focus" type="button">Secondary</button>
<button class="btn btn-info focus" type="button">Info</button>
<button class="btn btn-success focus" type="button">Success</button>
<button class="btn btn-warning focus" type="button">Warning</button>
<button class="btn btn-danger focus" type="button">Danger</button>
<button class="btn btn-light focus" type="button">Light</button>
<button class="btn btn-dark focus" type="button">Dark</button>
<button class="btn btn-link focus" type="button">Link</button>
<button class="btn btn-unstyled focus" type="button">Unstyled</button>

### Active

<button class="active btn btn-primary" type="button">Primary</button>
<button class="active btn btn-secondary" type="button">Secondary</button>
<button class="active btn btn-info" type="button">Info</button>
<button class="active btn btn-success" type="button">Success</button>
<button class="active btn btn-warning" type="button">Warning</button>
<button class="active btn btn-danger" type="button">Danger</button>
<button class="active btn btn-light" type="button">Light</button>
<button class="active btn btn-dark" type="button">Dark</button>
<button class="active btn btn-link" type="button">Link</button>
<button class="active btn btn-unstyled" type="button">Unstyled</button>

```text/html
<button class="active btn btn-primary" type="button">Primary</button>
<button class="active btn btn-secondary" type="button">Secondary</button>
<button class="active btn btn-info" type="button">Info</button>
<button class="active btn btn-success" type="button">Success</button>
<button class="active btn btn-warning" type="button">Warning</button>
<button class="active btn btn-danger" type="button">Danger</button>
<button class="active btn btn-light" type="button">Light</button>
<button class="active btn btn-dark" type="button">Dark</button>
<button class="active btn btn-link" type="button">Link</button>
<button class="active btn btn-unstyled" type="button">Unstyled</button>
```
```soy
{call ClayButton.render}
	{param elementClasses: 'focus' /}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'focus' /}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'focus' /}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'focus' /}
	{param label: 'Borderless' /}
	{param style: 'borderless' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'focus' /}
	{param label: 'Unstyled' /}
	{param style: 'unstyled' /}
	{param type: 'button' /}
{/call}
```

### Disabled

<button class="btn btn-primary" disabled type="button">Primary</button>
<button class="btn btn-secondary" disabled type="button">Secondary</button>
<button class="btn btn-info" disabled type="button">Info</button>
<button class="btn btn-success" disabled type="button">Success</button>
<button class="btn btn-warning" disabled type="button">Warning</button>
<button class="btn btn-danger" disabled type="button">Danger</button>
<button class="btn btn-light" disabled type="button">Light</button>
<button class="btn btn-dark" disabled type="button">Dark</button>
<button class="btn btn-link" disabled type="button">Link</button>
<button class="btn btn-unstyled" disabled type="button">Unstyled</button>

```text/html
<button class="btn btn-primary" disabled type="button">Primary</button>
<button class="btn btn-secondary" disabled type="button">Secondary</button>
<button class="btn btn-info" disabled type="button">Info</button>
<button class="btn btn-success" disabled type="button">Success</button>
<button class="btn btn-warning" disabled type="button">Warning</button>
<button class="btn btn-danger" disabled type="button">Danger</button>
<button class="btn btn-light" disabled type="button">Light</button>
<button class="btn btn-dark" disabled type="button">Dark</button>
<button class="btn btn-link" disabled type="button">Link</button>
<button class="btn btn-unstyled" disabled type="button">Unstyled</button>
```
```soy
{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Borderless' /}
	{param style: 'borderless' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param disabled: true /}
	{param label: 'Unstyled' /}
	{param style: 'unstyled' /}
	{param type: 'button' /}
{/call}
```

### Anchor and Input Elements as Buttons

<input class="btn btn-primary" type="button" value="Input" />
<a class="btn btn-secondary" href="#1" role="button">Anchor</a>
<input class="btn btn-info" type="submit" value="Submit" />
<a class="btn btn-success" href="#1" role="button">Anchor</a>
<a class="btn btn-warning" href="#1" role="button">Anchor</a>
<a class="btn btn-danger" href="#1" role="button">Anchor</a>
<a class="btn btn-light" href="#1" role="button">Anchor</a>
<a class="btn btn-dark" href="#1" role="button">Anchor</a>
<a class="btn btn-link" href="#1" role="button">Anchor</a>

```text/html
<input class="btn btn-primary" type="button" value="Input" />
<a class="btn btn-secondary" href="#1" role="button">Anchor</a>
<input class="btn btn-info" type="submit" value="Submit" />
<a class="btn btn-success" href="#1" role="button">Anchor</a>
<a class="btn btn-warning" href="#1" role="button">Anchor</a>
<a class="btn btn-danger" href="#1" role="button">Anchor</a>
<a class="btn btn-light" href="#1" role="button">Anchor</a>
<a class="btn btn-dark" href="#1" role="button">Anchor</a>
<a class="btn btn-link" href="#1" role="button">Anchor</a>
```

</article>


<article id="button-outline">

### Button Outline

<button class="btn btn-outline-primary" type="button">Primary</button>
<button class="btn btn-outline-secondary" type="button">Secondary</button>
<button class="btn btn-outline-info" type="button">Info</button>
<button class="btn btn-outline-success" type="button">Success</button>
<button class="btn btn-outline-warning" type="button">Warning</button>
<button class="btn btn-outline-danger" type="button">Danger</button>
<button class="btn btn-outline-light" type="button">Light</button>
<button class="btn btn-outline-dark" type="button">Dark</button>

```text/html
<button class="btn btn-outline-primary" type="button">Primary</button>
<button class="btn btn-outline-secondary" type="button">Secondary</button>
<button class="btn btn-outline-info" type="button">Info</button>
<button class="btn btn-outline-success" type="button">Success</button>
<button class="btn btn-outline-warning" type="button">Warning</button>
<button class="btn btn-outline-danger" type="button">Danger</button>
<button class="btn btn-outline-light" type="button">Light</button>
<button class="btn btn-outline-dark" type="button">Dark</button>
```

### Focus

<button class="btn btn-outline-primary focus" type="button">Primary</button>
<button class="btn btn-outline-secondary focus" type="button">Secondary</button>
<button class="btn btn-outline-info focus" type="button">Info</button>
<button class="btn btn-outline-success focus" type="button">Success</button>
<button class="btn btn-outline-warning focus" type="button">Warning</button>
<button class="btn btn-outline-danger focus" type="button">Danger</button>
<button class="btn btn-outline-light focus" type="button">Light</button>
<button class="btn btn-outline-dark focus" type="button">Dark</button>

### Active

<button class="active btn btn-outline-primary" type="button">Primary</button>
<button class="active btn btn-outline-secondary" type="button">Secondary</button>
<button class="active btn btn-outline-info" type="button">Info</button>
<button class="active btn btn-outline-success" type="button">Success</button>
<button class="active btn btn-outline-warning" type="button">Warning</button>
<button class="active btn btn-outline-danger" type="button">Danger</button>
<button class="active btn btn-outline-light" type="button">Light</button>
<button class="active btn btn-outline-dark" type="button">Dark</button>

```text/html
<button class="active btn btn-outline-primary" type="button">Primary</button>
<button class="active btn btn-outline-secondary" type="button">Secondary</button>
<button class="active btn btn-outline-info" type="button">Info</button>
<button class="active btn btn-outline-success" type="button">Success</button>
<button class="active btn btn-outline-warning" type="button">Warning</button>
<button class="active btn btn-outline-danger" type="button">Danger</button>
<button class="active btn btn-outline-light" type="button">Light</button>
<button class="active btn btn-outline-dark" type="button">Dark</button>
```

### Disabled

<button class="btn btn-outline-primary" disabled type="button">Primary</button>
<button class="btn btn-outline-secondary" disabled type="button">Secondary</button>
<button class="btn btn-outline-info" disabled type="button">Info</button>
<button class="btn btn-outline-success" disabled type="button">Success</button>
<button class="btn btn-outline-warning" disabled type="button">Warning</button>
<button class="btn btn-outline-danger" disabled type="button">Danger</button>
<button class="btn btn-outline-light" disabled type="button">Light</button>
<button class="btn btn-outline-dark" disabled type="button">Dark</button>

```text/html
<button class="btn btn-outline-primary" disabled type="button">Primary</button>
<button class="btn btn-outline-secondary" disabled type="button">Secondary</button>
<button class="btn btn-outline-info" disabled type="button">Info</button>
<button class="btn btn-outline-success" disabled type="button">Success</button>
<button class="btn btn-outline-warning" disabled type="button">Warning</button>
<button class="btn btn-outline-danger" disabled type="button">Danger</button>
<button class="btn btn-outline-light" disabled type="button">Light</button>
<button class="btn btn-outline-dark" disabled type="button">Dark</button>
```

### Anchor and Input Elements as Buttons

<input class="btn btn-outline-primary" type="button" value="Input" />
<a class="btn btn-outline-secondary" href="#1" role="button">Anchor</a>
<input class="btn btn-outline-info" type="submit" value="Submit" />
<a class="btn btn-outline-success" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-warning" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-danger" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-light" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-dark" href="#1" role="button">Anchor</a>

```text/html
<input class="btn btn-outline-primary" type="button" value="Input" />
<a class="btn btn-outline-secondary" href="#1" role="button">Anchor</a>
<input class="btn btn-outline-info" type="submit" value="Submit" />
<a class="btn btn-outline-success" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-warning" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-danger" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-light" href="#1" role="button">Anchor</a>
<a class="btn btn-outline-dark" href="#1" role="button">Anchor</a>
```

</article>


<article id="button-monospaced">

### Button Monospaced

<button class="btn btn-monospaced btn-primary" type="button">A</button>
<button class="btn btn-monospaced btn-secondary" type="button">B</button>
<button class="btn btn-monospaced btn-info" type="button">C</button>
<button class="btn btn-monospaced btn-success" type="button">D</button>
<button class="btn btn-monospaced btn-warning" type="button">E</button>
<button class="btn btn-monospaced btn-danger" type="button">F</button>
<button class="btn btn-monospaced btn-light" type="button">G</button>
<button class="btn btn-monospaced btn-dark" type="button">H</button>
<button class="btn btn-monospaced btn-link" type="button">I</button>

```text/html
<button class="btn btn-monospaced btn-primary" type="button">A</button>
<button class="btn btn-monospaced btn-secondary" type="button">B</button>
<button class="btn btn-monospaced btn-info" type="button">C</button>
<button class="btn btn-monospaced btn-success" type="button">D</button>
<button class="btn btn-monospaced btn-warning" type="button">E</button>
<button class="btn btn-monospaced btn-danger" type="button">F</button>
<button class="btn btn-monospaced btn-light" type="button">G</button>
<button class="btn btn-monospaced btn-dark" type="button">H</button>
<button class="btn btn-monospaced btn-link" type="button">I</button>
```
```soy
{call ClayButton.render}
	{param elementClasses: 'btn-monospaced' /}
	{param label: 'Primary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'btn-monospaced' /}
	{param label: 'Secondary' /}
	{param style: 'secondary' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'btn-monospaced' /}
	{param label: 'Link' /}
	{param style: 'link' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'btn-monospaced' /}
	{param label: 'Borderless' /}
	{param style: 'borderless' /}
	{param type: 'button' /}
{/call}

{call ClayButton.render}
	{param elementClasses: 'btn-monospaced' /}
	{param label: 'Unstyled' /}
	{param style: 'unstyled' /}
	{param type: 'button' /}
{/call}
```

</article>


<article id="button-dropdown">

### Button Dropdown

<div class="dropdown">
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
<div class="dropdown">
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

```text/html
<div class="dropdown">
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
<div class="dropdown">
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

</article>


<article id="sizes">

### Sizes

<button class="btn btn-secondary btn-sm" type="button">Small</button>
<button class="btn btn-secondary" type="button">Default</button>
<button class="btn btn-secondary btn-lg" type="button">Large</button>

```text/html
<button class="btn btn-secondary btn-sm" type="button">Small</button>
<button class="btn btn-secondary" type="button">Default</button>
<button class="btn btn-secondary btn-lg" type="button">Large</button>
```
```soy
{call ClayButton.render}
	{param label: 'Small' /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param label: 'Default' /}
{/call}
```

<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
		<use xlink:href="/vendor/lexicon/icons.svg#plus"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary btn-lg" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-share">
		<use xlink:href="/vendor/lexicon/icons.svg#share"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary btn-xl" type="button">
	XL
</button>

```text/html
<button class="btn btn-monospaced btn-secondary btn-sm" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-blogs">
		<use xlink:href="/vendor/lexicon/icons.svg#blogs"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-plus">
		<use xlink:href="/vendor/lexicon/icons.svg#plus"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary btn-lg" type="button">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-share">
		<use xlink:href="/vendor/lexicon/icons.svg#share"></use>
	</svg>
</button>
<button class="btn btn-monospaced btn-secondary btn-xl" type="button">
	XL
</button>
```
```soy
{call ClayButton.render}
	{param icon: [
			'monospaced': true,
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'blogs'
	] /}
	{param size: 'sm' /}
{/call}

{call ClayButton.render}
	{param icon: [
			'monospaced': true,
			'spritemap': '/vendor/lexicon/icons.svg',
			'symbol': 'plus'
	] /}
{/call}
```

<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>
<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
<button class="btn btn-block btn-lg btn-secondary" type="button">Large Block Level Button</button>

```text/html
<button class="btn btn-block btn-secondary btn-sm" type="button">Small Block Level Button</button>
<button class="btn btn-block btn-secondary" type="button">Normal Block Level Button</button>
<button class="btn btn-block btn-lg btn-secondary" type="button">Large Block Level Button</button>
```
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

</article>
