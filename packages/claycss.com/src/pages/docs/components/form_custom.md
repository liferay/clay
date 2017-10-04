---
title: Form Elements (Custom)
description: Components
layout: "guide"
weight: 100
---

<article id="form-file">

### Form File

> Nest `<input class="form-file-input" type="file">` inside `form-file` to create a variety of custom file inputs. The element with the `form-file` class should wrap whatever element you want to trigger the operating system's file browser.

<div class="alert alert-warning">
	Form File needs custom javascript to change the input value to the file selected.
</div>

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="customFile1">Attach File</label>
		<div class="input-group">
			<input class="form-control" id="customFileText1" placeholder="Choose file..." readonly tabindex="-1" type="text">
			<div class="input-group-btn">
				<div class="form-file">
					<input class="form-file-input" data-clay-site-content="#customFileText1" data-clay-site-toggle="file" id="customFile1" type="file">
					<button class="btn btn-secondary" tabindex="-1">Browse</button>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="customFile2">Attach File</label>
		<div class="input-group input-group-inset">
			<div class="input-group-input">
				<input class="form-control" id="customFileText2" placeholder="Choose file..." readonly tabindex="-1" type="text" style="padding-right: 92px;">
			</div>
			<span class="input-group-inset-item">
				<div class="form-file">
					<input class="form-file-input" data-clay-site-content="#customFileText2" data-clay-site-toggle="file" id="customFile2" type="file">
					<button class="btn btn-secondary" tabindex="-1">Browse</button>
				</div>
			</span>
		</div>
	</div>
	<div class="form-group">
		<label for="customFile3">Attach File</label>
		<div class="form-file">
			<input class="form-file-input" data-clay-site-content="#customFileText3" data-clay-site-toggle="file" id="customFile3" type="file">
			<div class="input-group">
				<span class="input-group-addon" id="inputGroupAddon02">Browse</span>
				<input aria-describedby="inputGroupAddon02" class="form-control" id="customFileText3" placeholder="Choose file..." tabindex="-1" type="text">
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="form-inline">
			<label for="customFile4">Attach File</label>
			<div class="form-file">
				<input class="form-file-input" data-clay-site-content="#customFileText4" data-clay-site-toggle="file" id="customFile4" type="file">
				<button class="btn btn-primary" tabindex="-1">Browse</button>
			</div>
			<input class="form-control" id="customFileText4" placeholder="Choose File..." readonly tabindex="-1" type="text">
		</div>
	</div>
</div>

```text/html
<div class="form-group">
	<label for="customFile1">Attach File</label>
	<div class="input-group">
		<input class="form-control" id="customFileText1" placeholder="Choose file..." readonly tabindex="-1" type="text">
		<div class="input-group-btn">
			<div class="form-file">
				<input class="form-file-input" data-clay-site-content="#customFileText1" data-clay-site-toggle="file" id="customFile1" type="file">
				<button class="btn btn-secondary" tabindex="-1">Browse</button>
			</div>
		</div>
	</div>
</div>
<div class="form-group">
	<label for="customFile2">Attach File</label>
	<div class="input-group input-group-inset">
		<div class="input-group-input">
			<input class="form-control" id="customFileText2" placeholder="Choose file..." readonly tabindex="-1" type="text" style="padding-right: 92px;">
		</div>
		<span class="input-group-inset-item">
			<div class="form-file">
				<input class="form-file-input" data-clay-site-content="#customFileText2" data-clay-site-toggle="file" id="customFile2" type="file">
				<button class="btn btn-secondary" tabindex="-1">Browse</button>
			</div>
		</span>
	</div>
</div>
<div class="form-group">
	<label for="customFile3">Attach File</label>
	<div class="form-file">
		<input class="form-file-input" data-clay-site-content="#customFileText3" data-clay-site-toggle="file" id="customFile3" type="file">
		<div class="input-group">
			<span class="input-group-addon" id="inputGroupAddon02">Browse</span>
			<input aria-describedby="inputGroupAddon02" class="form-control" id="customFileText3" placeholder="Choose file..." tabindex="-1" type="text">
		</div>
	</div>
</div>
<div class="form-group">
	<div class="form-inline">
		<label for="customFile4">Attach File</label>
		<div class="form-file">
			<input class="form-file-input" data-clay-site-content="#customFileText4" data-clay-site-toggle="file" id="customFile4" type="file">
			<button class="btn btn-primary" tabindex="-1">Browse</button>
		</div>
		<input class="form-control" id="customFileText4" placeholder="Choose File..." readonly tabindex="-1" type="text">
	</div>
</div>
```

</article>


<article id="custom-checkbox">

### Custom Checkbox

<div class="clay-site-form-container">
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

</article>


<article id="custom-radio">

### Custom Radio

<div class="clay-site-form-container">
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

</article>


<article id="custom-controls-stacked">

### Custom Controls Inline

<div class="clay-site-form-container">
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

</article>


<article id="custom-select">

### Custom Select

<div class="alert alert-warning">
	It's recommended to use <code>select.form-control</code> instead. This is only here for documentation purposes.
</div>

<div class="clay-site-form-container">
	<select class="custom-select">
		<option selected="">Open this select menu</option>
		<option value="1">One</option>
		<option value="2">Two</option>
		<option value="3">Three</option>
	</select>
</div>

```text/html
<select class="custom-select">
	<option selected="">Open this select menu</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
```

</article>


<article id="custom-file">

### Custom File

<div class="alert alert-warning">
	It's recommended to use <code>.form-file</code> instead. This is here only for documentation purposes.
	To get <code>custom-file-control</code> styles to display, you'll need to add <code>lang="en"</code> to the html element or set the Content-Language HTTP header.
</div>

<div class="clay-site-form-container">
	<label class="custom-file">
		<input class="custom-file-input" type="file">
		<span class="custom-file-control"></span>
	</label>
</div>

```text/html
<label class="custom-file">
	<input class="custom-file-input" type="file">
	<span class="custom-file-control"></span>
</label>
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
