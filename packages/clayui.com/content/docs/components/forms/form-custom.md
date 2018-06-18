---
title: "Form Elements (Custom)"
path: "/docs/form-custom.html"
---

<article id="custom-checkbox">
<h3 class="component-title">
	<a href="#custom-checkbox">Custom Checkbox</a>
</h3>

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Unchecked</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Checked</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Indeterminate</span>
				</span>
			</label>
		</div>
	</div>
	<div class="form-group">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" disabled type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Unchecked Disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" disabled type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Checked Disabled</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" disabled type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Indeterminate Disabled</span>
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
```text/html
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
```text/html
<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Unchecked</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input checked class="custom-control-input" type="checkbox">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Checked</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Indeterminate</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Unchecked Disabled</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input checked class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Checked Disabled</span>
		</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Indeterminate Disabled</span>
		</span>
	</label>
</div>
```

</article>


<article id="custom-radio">
<h3 class="component-title">
	<a href="#custom-radio">Custom Radio</a>
</h3>

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-radio">
			<label>
				<input checked class="custom-control-input" id="radio1" name="radio" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Toggle this custom radio</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="radio2" name="radio" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Or toggle this other custom radio</span>
				</span>
			</label>
		</div>
	</div>
</div>

```soy
{call ClayRadio.render}
	{param checked: true /}
	{param id: 'radio1' /}
	{param label: 'Toggle this custom radio' /}
	{param name: 'radio' /}
{/call}

{call ClayRadio.render}
	{param id: 'radio2' /}
	{param label: 'Or toggle this other custom radio' /}
	{param name: 'radio' /}
{/call}
```
```text/html
<clay-radio
	checked="true"
	id="radio1"
	label="Toggle this custom radio"
	name="radio">
</clay-radio>

<clay-radio
	id="radio2"
	label="Or toggle this other custom radio"
	name="radio">
</clay-radio>
```
```text/html
<div class="custom-control custom-radio">
	<label>
		<input checked class="custom-control-input" id="radio1" name="radio" type="radio">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Toggle this custom radio</span>
		</span>
	</label>
</div>

<div class="custom-control custom-radio">
	<label>
		<input class="custom-control-input" id="radio2" name="radio" type="radio">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Or toggle this other custom radio</span>
		</span>
	</label>
</div>
```

</article>


<article id="custom-controls-inline">
<h3 class="component-title">
	<a href="#custom-controls-inline">Custom Controls Inline</a>
</h3>

<div class="sheet">
	<div class="form-group">
		<div class="custom-control custom-control-inline custom-radio">
			<label>
				<input class="custom-control-input" disabled id="radioStacked3" name="radio-stacked" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Toggle this custom radio</span>
				</span>
			</label>
		</div>
		<div class="custom-control custom-control-inline custom-radio">
			<label>
				<input class="custom-control-input" id="radioStacked4" name="radio-stacked" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Or toggle this other custom radio</span>
				</span>
			</label>
		</div>
	</div>
</div>

```soy
{call ClayRadio.render}
	{param disabled: true /}
	{param id: 'radioStacked3' /}
	{param label: 'Toggle this custom radio' /}
	{param name: 'radio-stacked' /}
{/call}

{call ClayRadio.render}
	{param id: 'radioStacked4' /}
	{param label: 'Or toggle this other custom radio' /}
	{param name: 'radio-stacked' /}
{/call}
```
```text/html
<clay-radio
	disabled="true"
	id="radioStacked3"
	label="Toggle this custom radio"
	name="radio-stacked">
</clay-radio>

<clay-radio
	id="radioStacked4"
	label="Or toggle this other custom radio"
	name="radio-stacked">
</clay-radio>
```
```text/html
<div class="custom-control custom-control-inline custom-radio">
	<label>
		<input class="custom-control-input" disabled id="radioStacked3" name="radio-stacked" type="radio">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Toggle this custom radio</span>
		</span>
	</label>
</div>
<div class="custom-control custom-control-inline custom-radio">
	<label>
		<input class="custom-control-input" id="radioStacked4" name="radio-stacked" type="radio">
		<span class="custom-control-label">
			<span class="custom-control-label-text">Or toggle this other custom radio</span>
		</span>
	</label>
</div>
```

</article>
