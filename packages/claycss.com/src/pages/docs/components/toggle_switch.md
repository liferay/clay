---
title: Toggle Switch
description: Components
layout: "guide"
weight: 100
---

<article id="toggle-switch-with-data-attributes">

### Toggle Switch with Data Attributes

> Use data attributes `data-label-on=""` and `data-label-off=""` on `<span class="toggle-switch-handle"></span>` to display specific text when the switch is on and off.

<div class="sheet">
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
</div>

```text/html
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

<article id="toggle-switch-text">

### Toggle Switch Text

> Add additional text with class `toggle-switch-text`.

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span class="toggle-switch-label">Secondary Text on Right</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
				</span>
			</span>
			<span class="toggle-switch-text toggle-switch-text-right">Secondary Text</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span class="toggle-switch-label">Secondary Text on Left</span>
			<span class="toggle-switch-text toggle-switch-text-left">Secondary Text</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
				</span>
			</span>
		</label>
	</div>
</div>

```text/html
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Secondary Text on Right</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
		<span class="toggle-switch-text toggle-switch-text-right">Secondary Text</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span class="toggle-switch-label">Secondary Text on Left</span>
		<span class="toggle-switch-text toggle-switch-text-left">Secondary Text</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
			</span>
		</span>
	</label>
</div>
```

</article>

<article id="toggle-switches-with-icons">

### Toggle Switches with Icons

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock">
							<use xlink:href="/vendor/lexicon/icons.svg#unlock" />
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock">
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
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-live">
							<use xlink:href="/vendor/lexicon/icons.svg#live" />
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging">
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
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open">
							<use xlink:href="/vendor/lexicon/icons.svg#product-menu-open" />
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
							<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
						</svg>
					</span>
				</span>
			</span>
		</label>
	</div>
</div>

```text/html
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock">
						<use xlink:href="/vendor/lexicon/icons.svg#unlock" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock">
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
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-live">
						<use xlink:href="/vendor/lexicon/icons.svg#live" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging">
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
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-open" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>
```

</article>


<article id="disabled-toggle-switches">

### Disabled Toggle Switches

> Disable a toggle-switch by adding the attribute `disabled` to `<input type="checkbox">`.

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" disabled type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock">
							<use xlink:href="/vendor/lexicon/icons.svg#unlock" />
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock">
							<use xlink:href="/vendor/lexicon/icons.svg#lock" />
						</svg>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="disabled toggle-switch">
			<input class="toggle-switch-check" disabled type="checkbox">
			<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-live">
							<use xlink:href="/vendor/lexicon/icons.svg#live" />
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging">
							<use xlink:href="/vendor/lexicon/icons.svg#staging" />
						</svg>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input checked class="toggle-switch-check" disabled type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open">
							<use xlink:href="/vendor/lexicon/icons.svg#product-menu-open" />
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
							<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
						</svg>
					</span>
				</span>
			</span>
		</label>
	</div>
</div>

```text/html
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" disabled type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-unlock">
						<use xlink:href="/vendor/lexicon/icons.svg#unlock" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-lock">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="disabled toggle-switch">
		<input class="toggle-switch-check" disabled type="checkbox">
		<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-live">
						<use xlink:href="/vendor/lexicon/icons.svg#live" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-staging">
						<use xlink:href="/vendor/lexicon/icons.svg#staging" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>

<div class="form-group">
	<label class="toggle-switch">
		<input checked class="toggle-switch-check" disabled type="checkbox">
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-open">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-open" />
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
						<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
					</svg>
				</span>
			</span>
		</span>
	</label>
</div>
```

</article>

