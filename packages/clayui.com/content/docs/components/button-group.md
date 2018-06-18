---
title: "Button Group"
---

### Description

Button groups are used to switch between complementary views for example, but they must never be used for complementary actions and Change and Cancel or Save and Cancel. In those cases the use of single buttons is the correct solution.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/buttons.html">Button Group Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="button-group-item">
<h3 class="component-title">
	<a href="#button-group-item">Button Group Item</a>
</h3>

> A component for spacing buttons without having to worry about white space added by browsers. This should be used for complementary actions.

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

```text/html
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

</article>


<article id="button-group">
<h3 class="component-title">
	<a href="#button-group">Button Group</a>
</h3>

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

</article>


<article id="split-button-dropdowns">
<h3 class="component-title">
	<a href="#split-button-dropdowns">Split Button Dropdowns</a>
</h3>

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
</div>{sp}
<div class="btn-group dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-success" type="button">Success</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-success btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-warning" type="button">Warning</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-warning btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
	<button class="btn btn-danger" type="button">Danger</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-danger btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
</div>
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
<div class="btn-group dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
<div class="btn-group dropdown" role="group">
	<button class="btn btn-success" type="button">Success</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-success btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
<div class="btn-group dropdown" role="group">
	<button class="btn btn-warning" type="button">Warning</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-warning btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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
<div class="btn-group dropdown" role="group">
	<button class="btn btn-danger" type="button">Danger</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-danger btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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

</article>


<article id="split-button-dropups">
<h3 class="component-title">
	<a href="#split-button-dropups">Split Button Dropups</a>
</h3>

<div class="btn-group dropup" role="group">
	<button class="btn btn-primary" type="button">Right dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<a class="dropdown-item" href="#1">Another action</a>
		<a class="dropdown-item" href="#1">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Separated link</a>
	</div>
</div>{sp}
<div class="btn-group dropup" role="group">
	<button class="btn btn-secondary" type="button">Dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
		</svg>
	</button>
	<div class="dropdown-menu dropdown-menu-right">
		<a class="dropdown-item" href="#1">Action</a>
		<a class="dropdown-item" href="#1">Another action</a>
		<a class="dropdown-item" href="#1">Something else here</a>
		<div class="dropdown-divider"></div>
		<a class="dropdown-item" href="#1">Separated link</a>
	</div>
</div>{sp}

```text/html
<div class="btn-group dropup" role="group">
	<button class="btn btn-primary" type="button">Right dropup</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-primary btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
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
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-top">
			<use xlink:href="/vendor/lexicon/icons.svg#caret-top" />
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

</article>


<article id="vertical-button-group">
<h3 class="component-title">
	<a href="#vertical-button-group">Vertical Button Group</a>
</h3>

<div class="btn-group-vertical" role="group">
	<button class="btn btn-secondary" type="button">Button</button>
	<button class="btn btn-secondary" type="button">Button</button>
	<div class="btn-group" role="group">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Dropdown
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Dropdown link</a>
			<a class="dropdown-item" href="#1">Dropdown link</a>
		</div>
	</div>
</div>

```text/html
<div class="btn-group-vertical" role="group">
	<button class="btn btn-secondary" type="button">Button</button>
	<button class="btn btn-secondary" type="button">Button</button>
	<div class="btn-group" role="group">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Dropdown
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Dropdown link</a>
			<a class="dropdown-item" href="#1">Dropdown link</a>
		</div>
	</div>
</div>
```

</article>


<article id="button-toolbar">
<h3 class="component-title">
	<a href="#button-toolbar">Button Toolbar</a>
</h3>

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
			<input aria-label="Input group example" aria-describedby="btnGroupAddon" class="form-control" placeholder="Input group example" type="text">
		</div>
	</div>
</div>

```text/html
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
			<input aria-label="Input group example" aria-describedby="btnGroupAddon" class="form-control" placeholder="Input group example" type="text">
		</div>
	</div>
</div>
```

</article>


<article id="button-group-sizes">
<h3 class="component-title">
	<a href="#button-group-sizes">Button Group Sizes</a>
</h3>

<div class="btn-group btn-group-sm" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>{sp}
<div class="btn-group" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>{sp}
<div class="btn-group btn-group-lg" role="group">
	<button class="btn btn-secondary" type="button">Left</button>
	<button class="btn btn-secondary" type="button">Middle</button>
	<button class="btn btn-secondary" type="button">Right</button>
</div>{sp}

```text/html
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
</div>{sp}
<div class="btn-group btn-group-lg dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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

```text/html
<div class="btn-group btn-group-sm dropdown" role="group">
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
</div>
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
<div class="btn-group btn-group-lg dropdown" role="group">
	<button class="btn btn-info" type="button">Info</button>
	<button aria-expanded="false" aria-haspopup="true" class="btn btn-info btn-monospaced dropdown-toggle" data-toggle="dropdown" type="button">
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

<div class="btn-group-vertical btn-group-sm" role="group">
	<button class="btn btn-secondary" type="button">Button</button>
	<button class="btn btn-secondary" type="button">Button</button>
	<div class="btn-group" role="group">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Dropdown
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Dropdown link</a>
			<a class="dropdown-item" href="#1">Dropdown link</a>
		</div>
	</div>
</div>{sp}
<div class="btn-group-vertical" role="group">
	<button class="btn btn-secondary" type="button">Button</button>
	<button class="btn btn-secondary" type="button">Button</button>
	<div class="btn-group" role="group">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Dropdown
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Dropdown link</a>
			<a class="dropdown-item" href="#1">Dropdown link</a>
		</div>
	</div>
</div>{sp}
<div class="btn-group-vertical btn-group-lg" role="group">
	<button class="btn btn-secondary" type="button">Button</button>
	<button class="btn btn-secondary" type="button">Button</button>
	<div class="btn-group" role="group">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Dropdown
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Dropdown link</a>
			<a class="dropdown-item" href="#1">Dropdown link</a>
		</div>
	</div>
</div>{sp}

```text/html
<div class="btn-group-vertical btn-group-sm" role="group">
	<button class="btn btn-secondary" type="button">Button</button>
	<button class="btn btn-secondary" type="button">Button</button>
	<div class="btn-group" role="group">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
			Dropdown
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-caret-bottom">
				<use xlink:href="/vendor/lexicon/icons.svg#caret-bottom" />
			</svg>
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#1">Dropdown link</a>
			<a class="dropdown-item" href="#1">Dropdown link</a>
		</div>
	</div>
</div>
```

</article>