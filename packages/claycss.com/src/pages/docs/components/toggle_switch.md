---
title: Toggle Switch
description: Components
layout: "guide"
weight: 100
---

<article id="1">

<div class="alert alert-warning">For customizing toggles, see <a href="../extending-toggles/">extending-toggles</a>.</div>

### Toggle Switch with Checkbox

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>
```

</article>

<article id="2">

### Toggle Switch with Radio

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option1">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
	<label class="toggle-switch">
		<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option2">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
	<label class="toggle-switch">
		<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option3">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option1">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>

	<label class="toggle-switch">
		<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option2">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>

	<label class="toggle-switch">
		<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option3">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>
```

</article>

<article id="3">

### Toggle Switch with Data Attributes

> Use data attributes `data-label-on=""` and `data-label-off=""` on `<span class="toggle-switch-handle"></span>` to display specific text when the switch is on and off.

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="Switch is off." data-label-on="Switch is on.">
			</span>
		</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="Switch is off." data-label-on="Switch is on.">
			</span>
		</span>
	</label>
</div>
```

</article>

<article id="4">

### Toggle Switch Text

> Add additional text with class `toggle-switch-text`.

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Adding Required Text</span>
		<span class="toggle-switch-text">Required *</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Adding Required Text</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
		<span class="toggle-switch-text">Required *</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Required Text on Right</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
		<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Required Text on Left</span>
		<span class="toggle-switch-text toggle-switch-text-left">Required *</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">The Kitchen Sink</span>
		<span class="toggle-switch-text">Top Text</span>
		<span class="toggle-switch-text toggle-switch-text-left">Error</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="OFF" data-label-on="ON">
			</span>
		</span>
		<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
		<span class="toggle-switch-text">Bottom Text</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Adding Required Text</span>
		<span class="toggle-switch-text">Required *</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Adding Required Text</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>

		<span class="toggle-switch-text">Required *</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Required Text on Right</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
		<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Required Text on Left</span>
		<span class="toggle-switch-text toggle-switch-text-left">Required *</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">The Kitchen Sink</span>
		<span class="toggle-switch-text">Top Text</span>
		<span class="toggle-switch-text toggle-switch-text-left">Error</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="OFF" data-label-on="ON">
			</span>
		</span>
		<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
		<span class="toggle-switch-text">Bottom Text</span>
	</label>
</div>
```

</article>

<article id="5">

### Toggle Switches with Icons

> Add an icon to the switch for the on position with `<span class="button-icon button-icon-on icon-volume-up toggle-switch-icon"></span>`.

> Add an icon to the switch for the off position with `<span class="button-icon button-icon-off icon-volume-off toggle-switch-icon"></span>`.

> Substitute `icon-volume-up` / `icon-volume-down` with any font awesome icon.

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-unlock">
						<use xlink:href="/vendor/lexicon/icons.svg#unlock" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-lock">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-live">
						<use xlink:href="/vendor/lexicon/icons.svg#live" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-staging">
						<use xlink:href="/vendor/lexicon/icons.svg#staging" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-product-menu-open">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-open" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-product-menu-closed">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-unlock">
						<use xlink:href="/vendor/lexicon/icons.svg#unlock" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-lock">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-live">
						<use xlink:href="/vendor/lexicon/icons.svg#live" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-staging">
						<use xlink:href="/vendor/lexicon/icons.svg#staging" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-product-menu-open">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-open" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg class="lexicon-icon lexicon-icon-product-menu-closed">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>
```

</article>

<article id="6">

### Toggle Switches with Icons (Alternate)

> Add an icon to the switch for the on position with `<span class="icon-ok toggle-switch-icon toggle-switch-icon-on"></span>`.

> Add an icon to the switch for the off position with `<span class="icon-remove toggle-switch-icon toggle-switch-icon-off"></span>`.

> Substitute `icon-ok` / `icon-remove` with any font awesome icon.

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle">
				<span class="toggle-switch-icon toggle-switch-icon-on">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
				<span class="toggle-switch-icon toggle-switch-icon-off">
					<svg class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle">
				<span class="toggle-switch-icon toggle-switch-icon-on">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
				<span class="toggle-switch-icon toggle-switch-icon-off">
					<svg class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>
```

</article>

<article id="7">

### Disabled Toggle Switches

> Disable a toggle-switch by adding the attribute `disabled="disabled"` to `<input type="checkbox">`.

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" disabled type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle">
				<span class="toggle-switch-icon toggle-switch-icon-on">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
				<span class="toggle-switch-icon toggle-switch-icon-off">
					<svg class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

```xml
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" disabled type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle">
				<span class="toggle-switch-icon toggle-switch-icon-on">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</span>
				<span class="toggle-switch-icon toggle-switch-icon-off">
					<svg class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>
```

</article>

