---
title: "Button Group"
---

### Description
Button groups are used to switch between complementary views for example, but they must never be used for complementary actions, "Change and Cancel" actions, or "Save and Cancel" actions. In those cases, single buttons are the correct solution.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/buttons.html">Button Group Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Button Group Item

> A component for spacing buttons, without having to worry about white space added by browsers. This should be used for complementary actions.

<div class="btn-group">
	<div class="btn-group-item">
		<button class="btn btn-primary" type="submit">Submit</button>
	</div>
	<div class="btn-group-item">
		<button class="btn btn-secondary" type="button">Cancel</button>
	</div>
	<div class="btn-group-item">
		<button class="btn btn-outline-secondary btn-outline-borderless" type="button">Back</button>
	</div>
	<div class="btn-group-item">
		<a href="#1" role="button">Link</a>
	</div>
</div>

```html
<div class="btn-group">
	<div class="btn-group-item">
		<button class="btn btn-primary" type="submit">Submit</button>
	</div>
	<div class="btn-group-item">
		<button class="btn btn-secondary" type="button">Cancel</button>
	</div>
	<div class="btn-group-item">
		<button class="btn btn-outline-secondary btn-outline-borderless" type="button">Back</button>
	</div>
	<div class="btn-group-item">
		<a href="#1" role="button">Link</a>
	</div>
</div>
```

### Button Group

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

### Split Button Dropdowns

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
<div class="btn-group dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-success" type="button">Success</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-success btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-warning" type="button">Warning</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-warning btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-danger" type="button">Danger</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-danger btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
<div class="btn-group dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-success" type="button">Success</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-success btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-warning" type="button">Warning</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-warning btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-danger" type="button">Danger</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-danger btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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

### Split Button Dropups

<div class="btn-group dropup" role="group">
	<button class="btn btn-primary" type="button">Right dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-top" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-top" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<a class="dropdown-item" href="#1">Another action</a>
		<a class="dropdown-item" href="#1">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Separated link</a>
	</div>
</div>
<div class="btn-group dropup" role="group">
	<button class="btn btn-secondary" type="button">Dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-top" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-top" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<a class="dropdown-item" href="#1">Another action</a>
		<a class="dropdown-item" href="#1">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Separated link</a>
	</div>
</div>

```html
<div class="btn-group dropup" role="group">
	<button class="btn btn-primary" type="button">Right dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-top" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-top" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<a class="dropdown-item" href="#1">Another action</a>
		<a class="dropdown-item" href="#1">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Separated link</a>
	</div>
</div>
<div class="btn-group dropup" role="group">
	<button class="btn btn-secondary" type="button">Dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg class="lexicon-icon lexicon-icon-caret-top" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#caret-top" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<a class="dropdown-item" href="#1">Another action</a>
		<a class="dropdown-item" href="#1">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Separated link</a>
	</div>
</div>
```

### Vertical Button Group

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

```html
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
```

### Button Toolbar

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
		<div class="input-group-item input-group-item-shrink input-group-prepend">
			<span class="input-group-text">@</span>
		</div>
		<div class="input-group-item input-group-append">
			<input aria-label="Input group example" aria-describedby="btnGroupAddon" class="form-control" placeholder="Input group example" type="text"/>
		</div>
	</div>
</div>
```

### Button Group Sizes

<div class="btn-group btn-group-sm" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>
<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>
<div class="btn-group btn-group-lg" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>

```html
<div class="btn-group btn-group-sm" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>
<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>
<div class="btn-group btn-group-lg" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>
```

<div class="btn-group btn-group-sm dropdown" role="group">
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
<div class="btn-group btn-group-lg dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
<div class="btn-group btn-group-sm dropdown" role="group">
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
<div class="btn-group btn-group-lg dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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

<div class="btn-group-vertical btn-group-sm" role="group">
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
<div class="btn-group-vertical btn-group-lg" role="group">
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

```html
<div class="btn-group-vertical btn-group-sm" role="group">
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
<div class="btn-group-vertical btn-group-lg" role="group">
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
```
