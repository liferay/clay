---
title: Form Elements (Custom)
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Custom Select

<select class="custom-select">
	<option selected="">Open this select menu</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>

```xml
<select class="custom-select">
	<option selected="">Open this select menu</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
```

</article>


<article id="2">

### Form File

> Nest `<input class="form-file-input" type="file">` inside `form-file` to create a variety of custom file inputs. The element with the `form-file` class should wrap whatever element you want to trigger the operating system's file browser.

<div class="alert alert-warning">
	Form File needs custom javascript to change the input value to the file selected.
</div>

<div class="form-group">
	<label class="form-control-label" for="customFile1">Attach File</label>
	<div class="input-group">
		<input class="form-control" id="customFileText1" placeholder="Choose file..." readonly type="text">
		<div class="input-group-btn">
			<div class="form-file">
				<input class="form-file-input" data-clay-site-content="#customFileText1" data-clay-site-toggle="file" id="customFile1" onchange="injectFile(event)" type="file">
				<button class="btn btn-secondary" tabindex="-1">Browse</button>
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<label class="form-control-label" for="customFile2">Attach File</label>
	<div class="input-group input-group-inset">
		<div class="input-group-input">
			<input class="form-control" id="customFileText2" placeholder="Choose file..." readonly type="text" style="padding-right: 92px;">
		</div>
		<span class="input-group-inset-item">
			<div class="form-file">
				<input class="form-file-input" data-clay-site-content="#customFileText2" data-clay-site-toggle="file" id="customFile2" 
				onchange="injectFile(event)" type="file">
				<button class="btn btn-secondary" tabindex="-1">Browse</button>
			</div>
		</span>
	</div>
</div>

<div class="form-group">
	<label class="form-control-label" for="customFile3">Attach File</label>
	<div class="form-file">
		<input class="form-file-input" data-clay-site-content="#customFileText3" data-clay-site-toggle="file" id="customFile3" onchange="injectFile(event)" type="file">
		<div class="input-group">
			<span class="input-group-addon" id="inputGroupAddon02">Browse</span>
			<input aria-describedby="inputGroupAddon02" class="form-control" id="customFileText3" placeholder="Choose file..." tabindex="-1" type="text">
		</div>
	</div>
</div>

<div class="form-group">
	<div class="form-inline">
		<label class="form-control-label" for="customFile4">Attach File</label>
		<div class="form-file">
			<input class="form-file-input" data-clay-site-content="#customFileText4" data-clay-site-toggle="file" id="customFile4" onchange="injectFile(event)" type="file">
			<button class="btn btn-primary" tabindex="-1">Browse</button>
		</div>
		<input class="form-control" id="customFileText4" placeholder="Choose File..." readonly type="text">
	</div>
</div>

```xml
<div class="form-group">
	<label class="form-control-label" for="customFile1">Attach File</label>
	<div class="input-group">
		<input class="form-control" id="customFileText1" placeholder="Choose file..." readonly type="text">
		<div class="input-group-btn">
			<div class="form-file">
				<input class="form-file-input" data-clay-site-content="#customFileText1" data-clay-site-toggle="file" id="customFile1" type="file">
				<button class="btn btn-secondary" tabindex="-1">Browse</button>
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<label class="form-control-label" for="customFile2">Attach File</label>
	<div class="input-group input-group-inset">
		<div class="input-group-input">
			<input class="form-control" id="customFileText2" placeholder="Choose file..." readonly type="text" style="padding-right: 92px;">
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
	<label class="form-control-label" for="customFile3">Attach File</label>
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
		<label class="form-control-label" for="customFile4">Attach File</label>
		<div class="form-file">
			<input class="form-file-input" data-clay-site-content="#customFileText4" data-clay-site-toggle="file" id="customFile4" type="file">
			<button class="btn btn-primary" tabindex="-1">Browse</button>
		</div>
		<input class="form-control" id="customFileText4" placeholder="Choose File..." readonly type="text">
	</div>
</div>
```

</article>


<article id="3">

### Custom File

<div class="alert alert-warning">
	To get <code>custom-file-control</code> styles to display, you'll need to add <code>lang="en"</code> to the html element or set the Content-Language HTTP header.
</div>

<label class="custom-file">
	<input type="file" id="file2" class="custom-file-input">
	<span class="custom-file-control"></span>
</label>

```xml
<label class="custom-file">
	<input type="file" id="file2" class="custom-file-input">
	<span class="custom-file-control"></span>
</label>
```

</article>


<article id="4">

### Custom Checkbox

<div>
	<label class="custom-control custom-checkbox">
		<input class="custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Unchecked</span>
	</label>
	<label class="custom-control custom-checkbox">
		<input checked class="custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Checked</span>
	</label>
	<label class="custom-control custom-checkbox">
		<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Indeterminate</span>
	</label>
</div>

<div>
	<label class="custom-control custom-checkbox">
		<input class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Unchecked Disabled</span>
	</label>
	<label class="custom-control custom-checkbox">
		<input checked class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Checked Disabled</span>
	</label>
	<label class="custom-control custom-checkbox">
		<input class="clay-site-custom-checkbox-indeterminate custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Indeterminate Disabled</span>
	</label>
</div>

```xml
<div>
	<label class="custom-control custom-checkbox">
		<input class="custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Unchecked</span>
	</label>

	<label class="custom-control custom-checkbox">
		<input checked class="custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Checked</span>
	</label>

	<label class="custom-control custom-checkbox">
		<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Indeterminate</span>
	</label>
</div>

<div>
	<label class="custom-control custom-checkbox">
		<input class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Unchecked Disabled</span>
	</label>

	<label class="custom-control custom-checkbox">
		<input checked class="custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Checked Disabled</span>
	</label>

	<label class="custom-control custom-checkbox">
		<input class="clay-site-custom-checkbox-indeterminate custom-control-input" disabled type="checkbox">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Indeterminate Disabled</span>
	</label>
</div>
```

</article>


<article id="5">

### Custom Radio

<label class="custom-control custom-radio">
	<input checked class="custom-control-input" id="radio1" name="radio" type="radio">
	<span class="custom-control-indicator"></span>
	<span class="custom-control-description">Toggle this custom radio</span>
</label>

<label class="custom-control custom-radio">
	<input class="custom-control-input" id="radio2" name="radio" type="radio">
	<span class="custom-control-indicator"></span>
	<span class="custom-control-description">Or toggle this other custom radio</span>
</label>

```xml
<label class="custom-control custom-radio">
	<input checked class="custom-control-input" id="radio1" name="radio" type="radio">
	<span class="custom-control-indicator"></span>
	<span class="custom-control-description">Toggle this custom radio</span>
</label>

<label class="custom-control custom-radio">
	<input class="custom-control-input" id="radio2" name="radio" type="radio">
	<span class="custom-control-indicator"></span>
	<span class="custom-control-description">Or toggle this other custom radio</span>
</label>
```

</article>


<article id="6">

### Validation States

<div class="form-group has-success">
	<label class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Check this custom checkbox</span>
	</label>
</div>

<div class="form-group has-warning">
	<label class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Check this custom checkbox</span>
	</label>
</div>

<div class="form-group has-danger">
	<label class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Check this custom checkbox</span>
	</label>
</div>

```xml
<div class="form-group has-success">
	<label class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Check this custom checkbox</span>
	</label>
</div>

<div class="form-group has-warning">
	<label class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Check this custom checkbox</span>
	</label>
</div>

<div class="form-group has-danger">
	<label class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Check this custom checkbox</span>
	</label>
</div>
```

</article>


<article id="7">

### Custom Controls Stacked

<div class="custom-controls-stacked">
	<label class="custom-control custom-radio">
		<input id="radioStacked3" disabled name="radio-stacked" type="radio" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Toggle this custom radio</span>
	</label>
	<label class="custom-control custom-radio">
		<input id="radioStacked4" name="radio-stacked" type="radio" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Or toggle this other custom radio</span>
	</label>
</div>

```xml
<div class="custom-controls-stacked">
	<label class="custom-control custom-radio">
		<input id="radioStacked3" disabled name="radio-stacked" type="radio" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Toggle this custom radio</span>
	</label>

	<label class="custom-control custom-radio">
		<input id="radioStacked4" name="radio-stacked" type="radio" class="custom-control-input">
		<span class="custom-control-indicator"></span>
		<span class="custom-control-description">Or toggle this other custom radio</span>
	</label>
</div>
```

</article>

<script>
{literal}
window.onload = function() {
	$('.clay-site-custom-checkbox-indeterminate').prop('indeterminate', true);
}
function injectFile(event) {
	var target = $(event.target);
	var path = target.val();
	var name = path.substring(path.lastIndexOf("\\") + 1, path.length);
	var input = target.data('clay-site-content');
	$(input).val(name);
}
{/literal}
</script>