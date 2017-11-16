---
title: Form Elements (Custom)
description: Components
layout: "guide"
weight: 100
---

<article id="custom-checkbox">

### Custom Checkbox

<div class="form-container">
	<div class="form-group">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Unchecked</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Checked</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Indeterminate</span>
			</label>
		</div>
	</div>
	<div class="form-group">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" disabled type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Unchecked Disabled</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input checked class="custom-control-input" disabled type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Checked Disabled</span>
			</label>
		</div>
		<div class="custom-control custom-checkbox">
			<label>
				<input class="clay-site-custom-checkbox-indeterminate custom-control-input" disabled type="checkbox">
				<span class="custom-control-indicator"></span>
				<span class="custom-control-description">Indeterminate Disabled</span>
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
<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Unchecked</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input checked class="custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Checked</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Indeterminate</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Unchecked Disabled</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input checked class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Checked Disabled</span>
	</label>
</div>

<div class="custom-control custom-checkbox">
	<label>
		<input class="clay-site-custom-checkbox-indeterminate custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Indeterminate Disabled</span>
	</label>
</div>
```

</article>


<article id="custom-radio">

### Custom Radio

<div class="form-container">
	<div class="custom-control custom-radio">
		<label>
			<input checked class="custom-control-input" id="radio1" name="radio" type="radio">
			<span class="custom-control-indicator"></span>
			<span class="custom-control-description">Toggle this custom radio</span>
		</label>
	</div>
	<div class="custom-control custom-radio">
		<label>
			<input class="custom-control-input" id="radio2" name="radio" type="radio">
			<span class="custom-control-indicator"></span>
			<span class="custom-control-description">Or toggle this other custom radio</span>
		</label>
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
<div class="custom-control custom-radio">
	<label>
		<input checked class="custom-control-input" id="radio1" name="radio" type="radio">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Toggle this custom radio</span>
	</label>
</div>

<div class="custom-control custom-radio">
	<label>
		<input class="custom-control-input" id="radio2" name="radio" type="radio">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Or toggle this other custom radio</span>
	</label>
</div>
```

</article>


<article id="custom-controls-stacked">

### Custom Controls Inline

<div class="form-container">
	<div class="custom-control custom-control-inline custom-radio">
		<label>
			<input class="custom-control-input" disabled id="radioStacked3" name="radio-stacked" type="radio">
			<span class="custom-control-indicator"></span>
			<span class="custom-control-description">Toggle this custom radio</span>
		</label>
	</div>
	<div class="custom-control custom-control-inline custom-radio">
		<label>
			<input class="custom-control-input" id="radioStacked4" name="radio-stacked" type="radio">
			<span class="custom-control-indicator"></span>
			<span class="custom-control-description">Or toggle this other custom radio</span>
		</label>
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
<div class="custom-control custom-control-inline custom-radio">
	<label>
		<input class="custom-control-input" disabled id="radioStacked3" name="radio-stacked" type="radio">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Toggle this custom radio</span>
	</label>
</div>
<div class="custom-control custom-control-inline custom-radio">
	<label>
		<input class="custom-control-input" id="radioStacked4" name="radio-stacked" type="radio">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Or toggle this other custom radio</span>
	</label>
</div>
```

</article>


<script>
{literal}
$(function() {
	$('.clay-site-custom-checkbox-indeterminate').prop('indeterminate', true);
	$('[data-clay-site-toggle="file"]').on('change', function(event) {
		var path = $(this).val();
		var name = path.substring(path.lastIndexOf("\\") + 1, path.length);
		var input = $(this).data('clay-site-content');
		$(input).val(name);
	});
});
{/literal}
</script>
