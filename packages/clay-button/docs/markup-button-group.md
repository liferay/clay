---
title: 'Button Group'
description: 'Button groups are used to switch between complementary views for example, but they must never be used for complementary actions, "Change and Cancel" actions, or "Save and Cancel" actions. In those cases, single buttons are the correct solution.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/buttons/'
mainTabURL: 'docs/components/button-group.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Examples](#css-examples)
-   [Split Button](#css-split-button)
-   [Button Toolbar](#css-button-toolbar)
-   [Sizes](#css-sizes)
-   [Vertical Variation](#css-vertical-variation)

</div>
</div>

## Examples(#css-examples)

<div class="sheet-example">
	<div class="btn-group" role="group">
		<button class="btn btn-secondary" type="button">Day</button>
		<button class="active btn btn-secondary" type="button">Month</button>
		<button class="btn btn-secondary" type="button">Year</button>
	</div>
</div>

```html
<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Day</button>
	<button class="active btn btn-secondary" type="button">Month</button>
	<button class="btn btn-secondary" type="button">Year</button>
</div>
```

## Split Button(#css-split-button)

<div class="sheet-example">
	<div class="btn-group" role="group">
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
	<div class="btn-group" role="group">
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
</div>

```html
<div class="btn-group dropdown" role="group">
	<button class="btn btn-primary" type="button">Primary</button>
	<button
		aria-expanded="false"
		aria-haspopup="true"
		class="btn btn-primary btn-monospaced dropdown-toggle"
		data-toggle="dropdown"
		type="button"
	>
		<svg
			class="lexicon-icon lexicon-icon-caret-bottom"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#caret-bottom" />
		</svg>
	</button>
</div>
```

## Button Toolbar(#css-button-toolbar)

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

<div class="sheet-example">
	<div aria-label="Toolbar with button groups" class="btn-toolbar" role="toolbar">
		<div aria-label="First group" class="btn-group" role="group">
			<button type="button" class="btn btn-secondary">1</button>
			<button type="button" class="btn btn-secondary">2</button>
			<button type="button" class="btn btn-secondary">3</button>
			<button type="button" class="btn btn-secondary">4</button>
		</div>
		<div aria-label="Second group" class="btn-group" role="group">
			<button type="button" class="btn btn-secondary">5</button>
			<button type="button" class="btn btn-secondary">6</button>
			<button type="button" class="btn btn-secondary">7</button>
		</div>
		<div aria-label="Third group" class="btn-group" role="group">
			<button type="button" class="btn btn-secondary">8</button>
		</div>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">@</span>
			</div>
			<div class="input-group-item input-group-append">
				<input aria-label="Input group example" aria-describedby="btnGroupAddon" class="form-control" placeholder="Input group example" type="text"/>
			</div>
		</div>
	</div>
</div>

```html
<div aria-label="Toolbar with button groups" class="btn-toolbar" role="toolbar">
	<div aria-label="First group" class="btn-group" role="group">
		<button type="button" class="btn btn-secondary">1</button>
		<button type="button" class="btn btn-secondary">2</button>
		<button type="button" class="btn btn-secondary">3</button>
		<button type="button" class="btn btn-secondary">4</button>
	</div>
	<div aria-label="Second group" class="btn-group" role="group">
		<button type="button" class="btn btn-secondary">5</button>
		<button type="button" class="btn btn-secondary">6</button>
		<button type="button" class="btn btn-secondary">7</button>
	</div>
	<div aria-label="Third group" class="btn-group" role="group">
		<button type="button" class="btn btn-secondary">8</button>
	</div>
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text">@</span>
		</div>
		<div class="input-group-item input-group-append">
			<input
				aria-label="Input group example"
				aria-describedby="btnGroupAddon"
				class="form-control"
				placeholder="Input group example"
				type="text"
			/>
		</div>
	</div>
</div>
```

## Sizes(#css-sizes)

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<div class="sheet-example">
	<div class="btn-group btn-group-sm" role="group">
		<button class="btn btn-secondary" type="button">Day</button>
		<button class="active btn btn-secondary" type="button">Month</button>
		<button class="btn btn-secondary" type="button">Year</button>
	</div>
	<div class="btn-group" role="group">
		<button class="btn btn-secondary" type="button">Day</button>
		<button class="active btn btn-secondary" type="button">Month</button>
		<button class="btn btn-secondary" type="button">Year</button>
	</div>
	<div class="btn-group btn-group-lg" role="group">
		<button class="btn btn-secondary" type="button">Day</button>
		<button class="active btn btn-secondary" type="button">Month</button>
		<button class="btn btn-secondary" type="button">Year</button>
	</div>
</div>

```html
<div class="btn-group btn-group-sm" role="group">...</div>
<div class="btn-group" role="group">...</div>
<div class="btn-group btn-group-lg" role="group">...</div>
```

## Vertical Variation(#css-vertical-variation)

<div class="sheet-example">
	<div class="btn-group-vertical" role="group">
		<button class="btn btn-secondary" type="button">Button</button>
		<button class="btn btn-secondary" type="button">Button</button>
		<div class="btn-group" role="group">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				Dropdown
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#1">Dropdown link</a>
				<a class="dropdown-item" href="#1">Dropdown link</a>
			</div>
		</div>
		<div class="btn-group" role="group">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				Dropdown
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#1">Dropdown link</a>
				<a class="dropdown-item" href="#1">Dropdown link</a>
			</div>
		</div>
		<div class="btn-group" role="group">
			<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
				Dropdown
				<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#caret-bottom" />
				</svg>
			</button>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#1">Dropdown link</a>
				<a class="dropdown-item" href="#1">Dropdown link</a>
			</div>
		</div>
	</div>
</div>

```html
<div class="btn-group-vertical" role="group">...</div>
```
