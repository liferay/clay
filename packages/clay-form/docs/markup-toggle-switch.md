---
title: 'Toggle Switch'
description: 'Toggle provide users with different selection and activation tools.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/forms/radio-check-toggle/#toggle'
mainTabURL: 'docs/components/toggle-switch.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#css-example)
-   [Behavioral](#css-behavioral)
    -   [Checkbox](#css-checkbox)
    -   [Radio](#css-radio)
-   [Disabled](#css-disabled)
-   [Composable](#css-composable)
    -   [With Text](#css-with-text)
    -   [With Icons](#css-with-icons)
-   [Extending Toggles](#css-extending-toggles)

</div>
</div>

## Example(#css-example)

<div class="sheet-example">
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" type="checkbox" />
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" type="checkbox">
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
					<span class="button-icon button-icon-on toggle-switch-icon">
						<svg class="lexicon-icon lexicon-icon-live" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#live"></use>
						</svg>
					</span>
					<span class="button-icon button-icon-off toggle-switch-icon">
						<svg class="lexicon-icon lexicon-icon-staging" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#staging"></use>
						</svg>
					</span>
				</span>
			</span>
		</span>
	</label>
</div>

```html
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span
				class="toggle-switch-handle"
				data-label-off=""
				data-label-on="LIVE"
			>
				<span class="button-icon button-icon-on toggle-switch-icon">
					<svg
						class="lexicon-icon lexicon-icon-live"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#live"></use>
					</svg>
				</span>
				<span class="button-icon button-icon-off toggle-switch-icon">
					<svg
						class="lexicon-icon lexicon-icon-staging"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#staging"></use>
					</svg>
				</span>
			</span>
		</span>
	</span>
</label>
```

## Behavioral(#css-behavioral)

You may want the Toggle Switch to behave with a Radio or Checkbox but have the appearance of a switch.

### Checkbox(#css-checkbox)

<div class="sheet-example">
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" type="checkbox" />
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" type="checkbox" />
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
</div>

```html
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
```

### Radio(#css-radio)

<div class="sheet-example">
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option1"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option2"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option3"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
</div>

```html
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input
			class="toggle-switch-check"
			name="toggleSwitchRadio1"
			type="radio"
			value="option1"
		/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input
			class="toggle-switch-check"
			name="toggleSwitchRadio1"
			type="radio"
			value="option2"
		/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input
			class="toggle-switch-check"
			name="toggleSwitchRadio1"
			type="radio"
			value="option3"
		/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
```

## Disabled(#css-disabled)

<div class="sheet-example">
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input disabled class="toggle-switch-check" type="checkbox" />
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input disabled checked class="toggle-switch-check" name="toggleSwitchRadio1" type="radio" value="option1"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</span>
	</label>
</div>

```html
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input disabled class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input
			disabled
			checked
			class="toggle-switch-check"
			name="toggleSwitchRadio1"
			type="radio"
			value="option1"
		/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</span>
</label>
```

## Composable(#css-composable)

### With Text(#css-with-text)

You can display additional text with the toggle switch by adding the `.toggle-switch-text` class to the text element. Use the `.toggle-switch-text-left` and `.toggle-switch-text-right` classes to position the text on the left and right side of the toggle switch, respectively.

<div class="sheet-example">
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">Adding Required Text</span>
			<span class="toggle-switch-text">Required *</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">Adding Required Text</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
					</span>
				</span>
			</span>
			<span class="toggle-switch-text">Required *</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">Required Text on Right</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
					</span>
				</span>
			</span>
			<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">Required Text on Left</span>
			<span class="toggle-switch-text toggle-switch-text-left">Required *</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="" data-label-on="ON">
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">The Kitchen Sink</span>
			<span class="toggle-switch-text">Top Text</span>
			<span class="toggle-switch-text toggle-switch-text-left">Error</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="OFF" data-label-on="ON">
					</span>
				</span>
			</span>
			<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
			<span class="toggle-switch-text">Bottom Text</span>
		</label>
	</div>
</div>

```html
<label class="toggle-switch">
	<span class="toggle-switch-label">Adding Required Text</span>
	<span class="toggle-switch-text">Required *</span>
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span
				class="toggle-switch-handle"
				data-label-off=""
				data-label-on="ON"
			>
			</span>
		</span>
	</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-label">Adding Required Text</span>
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span
				class="toggle-switch-handle"
				data-label-off=""
				data-label-on="ON"
			>
			</span>
		</span>
	</span>
	<span class="toggle-switch-text">Required *</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-label">Required Text on Right</span>
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span
				class="toggle-switch-handle"
				data-label-off=""
				data-label-on="ON"
			>
			</span>
		</span>
	</span>
	<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-label">Required Text on Left</span>
	<span class="toggle-switch-text toggle-switch-text-left">Required *</span>
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span
				class="toggle-switch-handle"
				data-label-off=""
				data-label-on="ON"
			>
			</span>
		</span>
	</span>
</label>
<label class="toggle-switch">
	<span class="toggle-switch-label">The Kitchen Sink</span>
	<span class="toggle-switch-text">Top Text</span>
	<span class="toggle-switch-text toggle-switch-text-left">Error</span>
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span
				class="toggle-switch-handle"
				data-label-off="OFF"
				data-label-on="ON"
			>
			</span>
		</span>
	</span>
	<span class="toggle-switch-text toggle-switch-text-right">Required *</span>
	<span class="toggle-switch-text">Bottom Text</span>
</label>
```

### With Icons(#css-with-icons)

Add `<span class="button-icon button-icon-on icon-volume-up toggle-switch-icon"/>` to add an icon to the switch for the on position.

Add `<span class="button-icon button-icon-off icon-volume-off toggle-switch-icon"/>` to add an icon to the switch for the off position.

<div class="sheet-example">
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="" data-label-on="">
						<span class="button-icon button-icon-on toggle-switch-icon">
							<svg class="lexicon-icon lexicon-icon-unlock" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#unlock" />
							</svg>
						</span>
						<span class="button-icon button-icon-off toggle-switch-icon">
							<svg class="lexicon-icon lexicon-icon-lock" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#lock" />
							</svg>
						</span>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">Toggle Switch with data-label-on</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="" data-label-on="LIVE">
						<span class="button-icon button-icon-on toggle-switch-icon">
							<svg class="lexicon-icon lexicon-icon-live" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#live" />
							</svg>
						</span>
						<span class="button-icon button-icon-off toggle-switch-icon">
							<svg class="lexicon-icon lexicon-icon-staging" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#staging" />
							</svg>
						</span>
					</span>
				</span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<span class="toggle-switch-label">Toggle Switch with data-label on and data-label-off</span>
			<span class="toggle-switch-check-bar">
				<input class="toggle-switch-check" type="checkbox" />
				<span aria-hidden="true" class="toggle-switch-bar">
					<span class="toggle-switch-handle" data-label-off="Product Menu Closed" data-label-on="Product Menu Open">
						<span class="button-icon button-icon-on toggle-switch-icon">
							<svg class="lexicon-icon lexicon-icon-product-menu-open" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#product-menu-open" />
							</svg>
						</span>
						<span class="button-icon button-icon-off toggle-switch-icon">
							<svg class="lexicon-icon lexicon-icon-product-menu-closed" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#product-menu-closed" />
							</svg>
						</span>
					</span>
				</span>
			</span>
		</label>
	</div>
</div>

Alternatively, you can add `<span class="icon-ok toggle-switch-icon toggle-switch-icon-on"/>` to add an icon to the switch for the on position.

Alternatively, you can add `<span class="icon-remove toggle-switch-icon toggle-switch-icon-off"/>` to add an icon to the switch for the off position.

<div class="sheet-example">
	<label class="toggle-switch">
		<span class="toggle-switch-check-bar">
			<input class="toggle-switch-check" type="checkbox" />
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle">
					<span class="toggle-switch-icon toggle-switch-icon-on">
						<svg class="lexicon-icon lexicon-icon-check" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#check" />
						</svg>
					</span>
					<span class="toggle-switch-icon toggle-switch-icon-off">
						<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times" />
						</svg>
					</span>
				</span>
			</span>
		</span>
	</label>
</div>

```html
<label class="toggle-switch">
	<span class="toggle-switch-check-bar">
		<input class="toggle-switch-check" type="checkbox" />
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle">
				<span class="toggle-switch-icon toggle-switch-icon-on">
					<svg
						class="lexicon-icon lexicon-icon-check"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#check" />
					</svg>
				</span>
				<span class="toggle-switch-icon toggle-switch-icon-off">
					<svg
						class="lexicon-icon lexicon-icon-times"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#times" />
					</svg>
				</span>
			</span>
		</span>
	</span>
</label>
```

## Extending Toggles(#css-extending-toggles)

This section explains how to customize toggles. Use at your own risk.

<img alt="explaining how switch works" style="width: 700px;" src="/images/switch_components.png">

-   Customize the **toggle-switch button in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar:after {}`.
-   Customize the **toggle-switch button icon in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon.button-icon {}`.
-   Customize the **toggle-switch bar in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar:before {}`.
-   Customize the **toggle-switch bar icon in the off** position with `.toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {}`.
-   Customize the **toggle-switch button in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar:after {}`.
-   Customize the **toggle-switch button icon in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon.button-icon.`
-   Customize the **toggle-switch bar in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar:before {}`.
-   Customize the **toggle-switch bar icon in the on** position with `.toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {}`.
