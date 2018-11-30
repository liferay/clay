---
title: "Checkbox, Radio, and Toggle"
---

### Description

Checkboxes, radios, and toggles provide users with different selection and activation tools.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/radio_check_toggle.html">Checkbox, Radio, and Toggle Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Checkbox

#### States

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" disabled type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" disabled type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Indeterminate</span>
				</span>
			</label>
		</div>
	</div>
</div>

```soy
{call ClayCheckbox.render}
	{param label: 'Unchecked' /}
{/call}

{call ClayCheckbox.render}
	{param checked: true /}
	{param label: 'Checked' /}
{/call}

{call ClayCheckbox.render}
	{param indeterminate: true /}
	{param label: 'Indeterminate' /}
{/call}

{call ClayCheckbox.render}
	{param disabled: true /}
	{param label: 'Unchecked disabled' /}
{/call}

{call ClayCheckbox.render}
	{param checked: true /}
	{param disabled: true /}
	{param label: 'Checked disabled' /}
{/call}

{call ClayCheckbox.render}
	{param disabled: true /}
	{param indeterminate: true /}
	{param label: 'Indeterminate disabled' /}
{/call}
```
```html
<clay-checkbox label="Unchecked"></clay-checkbox>

<clay-checkbox
	checked="true"
	label="Checked">
</clay-checkbox>

<clay-checkbox
	indeterminate="true"
	label="Indeterminate">
</clay-checkbox>

<clay-checkbox
	disable="true"
	label="Unchecked disabled">
</clay-checkbox>

<clay-checkbox
	hecked="true"
	disabled="true"
	label="Checked disabled">
</clay-checkbox>

<clay-checkbox
	disabled="true"
	indeterminate="true"
	label="Indeterminate disabled">
</clay-checkbox>
```
```html
<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Unchecked</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input checked class="custom-control-input" type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Checked</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Indeterminate</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" disabled type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Unchecked Disabled</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input checked class="custom-control-input" disabled type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Checked Disabled</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" disabled type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Indeterminate Disabled</span>
		</span>
	</label>
</div>
```



>

#### Checkbox inline

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-checkbox custom-control-inline">
			<label>
				<input checked class="custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox custom-control-inline">
			<label>
				<input class="custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox custom-control-inline">
			<label>
				<input checked class="custom-control-input" disabled type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox custom-control-inline">
			<label>
				<input class="custom-control-input" disabled type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox custom-control-inline">
			<label>
				<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Indeterminate</span>
				</span>
			</label>
		</div>
	</div>
</div>

```soy
{call ClayCheckbox.render}
	{param label: 'Unchecked' /}
	{param inline: true /}
{/call}

{call ClayCheckbox.render}
	{param checked: true /}
	{param label: 'Checked' /}
	{param inline: true /}
{/call}

{call ClayCheckbox.render}
	{param indeterminate: true /}
	{param label: 'Indeterminate' /}
	{param inline: true /}
{/call}

{call ClayCheckbox.render}
	{param disabled: true /}
	{param label: 'Unchecked disabled' /}
	{param inline: true /}
{/call}

{call ClayCheckbox.render}
	{param checked: true /}
	{param disabled: true /}
	{param label: 'Checked disabled' /}
	{param inline: true /}
{/call}

{call ClayCheckbox.render}
	{param disabled: true /}
	{param indeterminate: true /}
	{param label: 'Indeterminate disabled' /}
	{param inline: true /}
{/call}
```
```html
<clay-checkbox label="Unchecked" inline="true"></clay-checkbox>

<clay-checkbox
	checked="true"
	label="Checked"
	inline="true">
</clay-checkbox>

<clay-checkbox
	indeterminate="true"
	label="Indeterminate"
	inline="true">
</clay-checkbox>

<clay-checkbox
	disable="true"
	label="Unchecked disabled"
	inline="true">
</clay-checkbox>

<clay-checkbox
	hecked="true"
	disabled="true"
	label="Checked disabled"
	inline="true">
</clay-checkbox>

<clay-checkbox
	disabled="true"
	indeterminate="true"
	label="Indeterminate disabled"
	inline="true">
</clay-checkbox>
```
```html
<div class="custom-control custom-checkbox custom-control-inline">
	<label>
		<input checked class="custom-control-input" type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">On</span>
		</span>
	</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
	<label>
		<input class="custom-control-input" type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Off</span>
		</span>
	</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
	<label>
		<input checked class="custom-control-input" disabled type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">On disabled</span>
		</span>
	</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
	<label>
		<input class="custom-control-input" disabled type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Off disabled</span>
		</span>
	</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
	<label>
		<input class="custom-control-input" type="checkbox"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Indeterminate</span>
		</span>
	</label>
</div>
```

#### API

<div>
	[APITable "clay-checkbox/src/ClayCheckBox.js"]
</div>

### Radio

#### States

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-radio">
			<label>
				<input checked class="custom-control-input" id="radio1" name="radio" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="radio2" name="radio" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio">
			<label>
				<input checked disabled class="custom-control-input" id="radio3" name="radio1" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" disabled id="radio3" name="radio1" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off disabled</span>
				</span>
			</label>
		</div>
	</div>
</div>

```soy
{call ClayRadio.render}
	{param checked: true /}
	{param id: 'radio1' /}
	{param label: 'On' /}
	{param name: 'radio' /}
{/call}

{call ClayRadio.render}
	{param id: 'radio2' /}
	{param label: 'Off' /}
	{param name: 'radio' /}
{/call}

{call ClayRadio.render}
	{param checked: true /}
	{param id: 'radio1' /}
	{param disabled: true /}
	{param label: 'On disabled' /}
	{param name: 'radio' /}
{/call}

{call ClayRadio.render}
	{param id: 'radio2' /}
	{param label: 'Off disabled' /}
	{param name: 'radio' /}
	{param disabled: true /}
{/call}
```
```html
<clay-radio
	checked="true"
	id="radio1"
	label="On"
	name="radio">
</clay-radio>

<clay-radio
	id="radio2"
	label="Off"
	name="radio">
</clay-radio>

<clay-radio
	checked="true"
	id="radio1"
	label="On disabled"
	name="radio"
	disabled="true">
</clay-radio>

<clay-radio
	id="radio2"
	label="Off disabled"
	name="radio"
	disabled="true">
</clay-radio>
```
```html
<div class="custom-control custom-radio">
	<label>
		<input checked class="custom-control-input" id="radio1" name="radio" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">On</span>
		</span>
	</label>
</div>
<div class="custom-control custom-radio">
	<label>
		<input class="custom-control-input" id="radio2" name="radio" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Off</span>
		</span>
	</label>
</div>
<div class="custom-control custom-radio">
	<label>
		<input checked disabled class="custom-control-input" id="radio3" name="radio1" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">On disabled</span>
		</span>
	</label>
</div>
<div class="custom-control custom-radio">
	<label>
		<input class="custom-control-input" disabled id="radio3" name="radio1" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Off disabled</span>
		</span>
	</label>
</div>
```

#### Radio inline

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-radio custom-control-inline">
			<label>
				<input checked class="custom-control-input" id="radio1" name="radio2" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio custom-control-inline">
			<label>
				<input class="custom-control-input" id="radio2" name="radio2" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio custom-control-inline">
			<label>
				<input checked disabled class="custom-control-input" id="radio3" name="radio3" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">On disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio custom-control-inline">
			<label>
				<input class="custom-control-input" disabled id="radio3" name="radio3" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Off disabled</span>
				</span>
			</label>
		</div>
	</div>
</div>

```soy
{call ClayRadio.render}
	{param checked: true /}
	{param id: 'radio1' /}
	{param label: 'On' /}
	{param name: 'radio' /}
	{param inline: true /}
{/call}

{call ClayRadio.render}
	{param id: 'radio2' /}
	{param label: 'Off' /}
	{param name: 'radio' /}
	{param inline: true /}
{/call}

{call ClayRadio.render}
	{param checked: true /}
	{param id: 'radio1' /}
	{param disabled: true /}
	{param label: 'On disabled' /}
	{param name: 'radio' /}
	{param inline: true /}
{/call}

{call ClayRadio.render}
	{param id: 'radio2' /}
	{param label: 'Off disabled' /}
	{param name: 'radio' /}
	{param disabled: true /}
	{param inline: true /}
{/call}
```
```html
<clay-radio
	checked="true"
	id="radio1"
	label="On"
	name="radio"
	inline="true">
</clay-radio>

<clay-radio
	id="radio2"
	label="Off"
	name="radio"
	inline="true">
</clay-radio>

<clay-radio
	checked="true"
	id="radio1"
	label="On disabled"
	name="radio"
	disabled="true"
	inline="true">
</clay-radio>

<clay-radio
	id="radio2"
	label="Off disabled"
	name="radio"
	disabled="true"
	inline="true">
</clay-radio>
```
```html
<div class="custom-control custom-radio custom-control-inline">
	<label>
		<input checked class="custom-control-input" id="radio1" name="radio" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">On</span>
		</span>
	</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
	<label>
		<input class="custom-control-input" id="radio2" name="radio" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Off</span>
		</span>
	</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
	<label>
		<input checked disabled class="custom-control-input" id="radio3" name="radio1" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">On disabled</span>
		</span>
	</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
	<label>
		<input class="custom-control-input" disabled id="radio3" name="radio1" type="radio"/>
		<span class="custom-control-label">
			<span class="custom-control-label-text">Off disabled</span>
		</span>
	</label>
</div>
```

#### API

<div>
	[APITable "clay-radio/src/ClayRadio.js"]
</div>

### Toggle

#### States

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" checked type="checkbox"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" checked disabled type="checkbox"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</label>
	</div>
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" disabled type="checkbox"/>
			<span aria-hidden="true" class="toggle-switch-bar">
				<span class="toggle-switch-handle"></span>
			</span>
		</label>
	</div>
</div>

```html
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" checked type="checkbox"/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox"/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" checked disabled type="checkbox"/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" disabled type="checkbox"/>
		<span aria-hidden="true" class="toggle-switch-bar">
			<span class="toggle-switch-handle"></span>
		</span>
	</label>
</div>
```

#### Variations

##### Toggle with icon

<div class="sheet">
	<div class="form-group">
		<label class="toggle-switch">
			<input class="toggle-switch-check" type="checkbox"/>
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
		</label>
	</div>
</div>

```html
<div class="form-group">
	<label class="toggle-switch">
		<input class="toggle-switch-check" type="checkbox"/>
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
	</label>
</div>
```
