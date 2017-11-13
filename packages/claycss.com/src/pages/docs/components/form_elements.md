---
title: Form Elements
description: Components
layout: "guide"
weight: 100
---

<article id="basic-form-elements">

### Basic Form Elements

> Add class `focus` on the label to change the color of the label.

<div class="form-container">
	<h4 class="section-header">Section Header</h4>
	<div class="form-group">
		<label>
			Text
			<span class="reference-mark">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
		<input class="form-control" placeholder="Placeholder" type="text">
	</div>
	<div class="form-group">
		<label>Password</label>
		<input class="form-control" placeholder="Enter password" type="password">
	</div>
	<div class="form-group">
		<label>Textarea</label>
		<textarea class="form-control" placeholder="Placeholder"></textarea>
	</div>
	<div class="form-group">
		<label>Url</label>
		<input class="form-control" type="url">
	</div>
	<div class="form-group">
		<label>Tel</label>
		<input class="form-control" type="tel">
	</div>
	<div class="form-group">
		<label>Email</label>
		<input class="form-control" type="email">
	</div>
	<div class="form-group">
		<label>Search</label>
		<input class="form-control" type="search">
	</div>
	<div class="form-group">
		<label>Number</label>
		<input class="form-control" type="number">
	</div>
	<div class="form-group">
		<label>Datetime</label>
		<input class="form-control" type="datetime">
	</div>
	<div class="form-group">
		<label>Datetime-local</label>
		<input class="form-control" type="datetime-local">
	</div>
	<div class="form-group">
		<label>Date</label>
		<input class="form-control" type="date">
	</div>
	<div class="form-group">
		<label>Time</label>
		<input class="form-control" type="time">
	</div>
	<div class="form-group">
		<label>Week</label>
		<input class="form-control" type="week">
	</div>
	<div class="form-group">
		<label>Month</label>
		<input class="form-control" type="month">
	</div>
	<div class="form-group">
		<label>Color</label>
		<input class="form-control" type="color">
	</div>
	<div class="form-group">
		<label>Range</label>
		<input class="form-control" type="range">
	</div>
</div>

```text/html
<div class="form-group">
	<label>
		Text
		<span class="reference-mark">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</span>
	</label>
	<input class="form-control" placeholder="Placeholder" type="text">
</div>
```

</article>


<article id="checkboxes">

### Checkboxes

<div class="form-container">
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" value="">
		</label>
	</div>
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" value="">
			<span class="form-check-description">Label</span>
		</label>
	</div>
	<div class="form-check">
		<label class="form-check-label">
			<input checked class="form-check-input" disabled type="checkbox" value="">
			<span class="form-check-description">Disabled Check Box</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1">
			<span class="form-check-description">1</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2">
			<span class="form-check-description">2</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineCheckbox3" type="checkbox" value="option3">
			<span class="form-check-description">3</span>
		</label>
	</div>
</div>

```text/html
<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="">
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="">
		<span class="form-check-description">Label</span>
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input checked class="form-check-input" disabled type="checkbox" value="">
		<span class="form-check-description">Disabled Check Box</span>
	</label>
</div>

<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1">
		<span class="form-check-description">1</span>
	</label>
</div>

<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2">
		<span class="form-check-description">2</span>
	</label>
</div>

<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineCheckbox3" type="checkbox" value="option3">
		<span class="form-check-description">3</span>
	</label>
</div>
```

</article>


<article id="radio">

### Radio

<div class="form-container">
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" type="radio" value="">
		</label>
	</div>
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" type="radio" value="">
			<span class="form-check-description">Label</span>
		</label>
	</div>
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" disabled type="radio">
			<span class="form-check-description">Disabled Radio Button</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions1" type="radio" value="option1">
			<span class="form-check-description">1</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions1" type="radio" value="option2">
			<span class="form-check-description">2</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineRadio3" name="inlineRadioOptions1" type="radio" value="option3">
			<span class="form-check-description">3</span>
		</label>
	</div>
</div>

```text/html
<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="radio" value="">
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="radio" value="">
		<span class="form-check-description">Label</span>
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" disabled type="radio">
		<span class="form-check-description">Disabled Radio Button</span>
	</label>
</div>

<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions1" type="radio" value="option1">
		<span class="form-check-description">1</span>
	</label>
</div>

<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions1" type="radio" value="option2">
		<span class="form-check-description">2</span>
	</label>
</div>

<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineRadio3" name="inlineRadioOptions1" type="radio" value="option3">
		<span class="form-check-description">3</span>
	</label>
</div>
```

</article>


<article id="select-element">

### Select Element

<div class="form-container">
	<div class="form-group">
		<label for="regularSelectElement">Regular Select Element</label>
		<select class="form-control" id="regularSelectElement">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
	<div class="form-group">
		<label for="multipleSelectOptionsSelectElement">Select Element with Multiple Select Options</label>
		<select class="form-control" id="multipleSelectOptionsSelectElement" multiple>
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
			<option>Sample 5</option>
			<option>Sample 6</option>
			<option>Sample 7</option>
			<option>Sample 8</option>
		</select>
	</div>
</div>

```text/html
<div class="form-group">
	<label for="regularSelectElement">Regular Select Element</label>
	<select class="form-control" id="regularSelectElement">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>

<div class="form-group">
	<label for="multipleSelectOptionsSelectElement">Select Element with Multiple Select Options</label>
	<select class="form-control" id="multipleSelectOptionsSelectElement" multiple>
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
		<option>Sample 5</option>
		<option>Sample 6</option>
		<option>Sample 7</option>
		<option>Sample 8</option>
	</select>
</div>
```
```soy
{call ClaySelect.render}
	{param id: 'regularSelectElement' /}
	{param label: 'Regular Select Element' /}
	{param options: [
		[
			'label': 'Sample 1',
			'value': '1'
		],
		[
			'label': 'Sample 2',
			'value': '2'
		],
		[
			'label': 'Sample 3',
			'value': '3'
		],
		[
			'label': 'Sample 4',
			'value': '4'
		],
	] /}
{/call}

{call ClaySelect.render}
	{param id: 'multipleSelectOptionsSelectElement' /}
	{param label: 'Select Element with Multiple Select Options' /}
	{param multiple: true /}
	{param options: [
		[
			'label': 'Sample 1',
			'value': '1'
		],
		[
			'label': 'Sample 2',
			'value': '2'
		],
		[
			'label': 'Sample 3',
			'value': '3'
		],
		[
			'label': 'Sample 4',
			'value': '4'
		],
	] /}
{/call}
```

</article>


<article id="file-upload">

### File Upload

<div class="form-container">
	<div class="form-group">
		<label class="sr-only" for="inputFile">FILE UPLOAD</label>
		<input id="inputFile" type="file">
	</div>
</div>

```text/html
<div class="form-group">
	<label class="sr-only" for="inputFile">FILE UPLOAD</label>
	<input id="inputFile" type="file">
</div>
```

</article>


<article id="disabled-inputs">

### Disabled Inputs

> Add class `disabled` on the label to match the opacity to disabled input.

<div class="form-container">
	<div class="form-group">
		<label class="disabled" for="disabledTextInput">Text Input</label>
		<input class="form-control" disabled id="disabledTextInput" placeholder="Placeholder" type="text" value="Plunger pot, extra siphon latte">
	</div>
	<div class="form-group">
		<label class="disabled" for="disabledPasswordInput">Password Input</label>
		<input class="form-control" disabled id="disabledPasswordInput" placeholder="Enter password" type="password" value="password">
	</div>
	<div class="form-group">
		<label class="disabled" for="disabledTextarea">Textarea</label>
		<textarea class="form-control" disabled id="disabledTextarea" placeholder="Placeholder">Plunger pot, extra siphon latte</textarea>
	</div>
	<div class="form-group">
		<label class="disabled" for="disabledSelectElement">Select Element</label>
		<select class="form-control" disabled id="disabledSelectElement">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
	<div class="form-group">
		<label class="disabled" for="disabledSelectElementMulti">Select Element with Multiple Select Options</label>
		<select class="form-control" disabled id="disabledSelectElementMulti" multiple>
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
			<option>Sample 5</option>
			<option>Sample 6</option>
			<option>Sample 7</option>
			<option>Sample 8</option>
		</select>
	</div>
</div>

```text/html
<div class="form-group">
	<label class="disabled" for="disabledTextInput">Text Input</label>
	<input class="form-control" disabled id="disabledTextInput" placeholder="Placeholder" type="text" value="Plunger pot, extra siphon latte">
</div>

<div class="form-group">
	<label class="disabled" for="disabledPasswordInput">Password Input</label>
	<input class="form-control" disabled id="disabledPasswordInput" placeholder="Enter password" type="password" value="password">
</div>

<div class="form-group">
	<label class="disabled" for="disabledTextarea">Textarea</label>
	<textarea class="form-control" disabled id="disabledTextarea" placeholder="Placeholder">Plunger pot, extra siphon latte</textarea>
</div>

<div class="form-group">
	<label class="disabled" for="disabledSelectElement">Select Element</label>
	<select class="form-control" disabled id="disabledSelectElement">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>

<div class="form-group">
	<label class="disabled" for="disabledSelectElementMulti">Select Element with Multiple Select Options</label>
	<select class="form-control" disabled id="disabledSelectElementMulti" multiple>
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
		<option>Sample 5</option>
		<option>Sample 6</option>
		<option>Sample 7</option>
		<option>Sample 8</option>
	</select>
</div>
```
```soy
{call ClaySelect.render}
	{param disabled: true /}
	{param id: 'disabledSelectElement' /}
	{param label: 'Select Element' /}
	{param options: [
		[
			'label': 'Sample 1',
			'value': '1'
		],
		[
			'label': 'Sample 2',
			'value': '2'
		],
		[
			'label': 'Sample 3',
			'value': '3'
		],
		[
			'label': 'Sample 4',
			'value': '4'
		],
	] /}
{/call}

{call ClaySelect.render}
	{param disabled: true /}
	{param id: 'disabledSelectElementMulti' /}
	{param label: 'Select Element with Multiple Select Options' /}
	{param multiple: true /}
	{param options: [
		[
			'label': 'Sample 1',
			'value': '1'
		],
		[
			'label': 'Sample 2',
			'value': '2'
		],
		[
			'label': 'Sample 3',
			'value': '3'
		],
		[
			'label': 'Sample 4',
			'value': '4'
		],
	] /}
{/call}
```

</article>


<article id="disabled-fieldset">

### Disabled Fieldset

<div class="form-container">
	<form>
		<fieldset disabled>
			<div class="form-group">
				<label>Use fieldset to group related elements in a form and ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
					<input class="form-control" type="text" value="Plunger pot, extra siphon latte">
				</label>
			</div>
			<div class="form-group">
				<label for="disabledFieldsetTextInput2">Disabled Input</label>
				<input class="form-control" id="disabledFieldsetTextInput2" type="text" value="Plunger pot, extra siphon latte">
			</div>
			<div class="form-group">
				<label for="disabledFieldsetSelectElement">Disabled Select Element</label>
				<select class="form-control" id="disabledFieldsetSelectElement">
					<option>Sample 1</option>
					<option>Sample 2</option>
					<option>Sample 3</option>
					<option>Sample 4</option>
				</select>
			</div>
			<div class="form-check">
				<label class="form-check-label">
					<input checked class="form-check-input" type="checkbox" value="">
					<span class="form-check-description">Disabled Checkbox</span>
				</label>
			</div>
			<div class="form-check">
				<label class="form-check-label">
					<input class="form-check-input" type="radio" value="">
					<span class="form-check-description">Disabled Radio</span>
				</label>
			</div>
			<button class="btn btn-primary" type="submit">Submit</button>
		</fieldset>
	</form>
</div>

```text/html
<form>
	<fieldset disabled>
		<div class="form-group">
			<label>Use fieldset to group related elements in a form and ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				<input class="form-control" type="text" value="Plunger pot, extra siphon latte">
			</label>
		</div>
		<div class="form-group">
			<label for="disabledFieldsetTextInput2">Disabled Input</label>
			<input class="form-control" id="disabledFieldsetTextInput2" type="text" value="Plunger pot, extra siphon latte">
		</div>
	</fieldset>
</form>
```

</article>


<article id="read-only-states">

### Read Only States

<div class="form-container">
	<div class="form-group">
		<label for="readonlyTextInput">Text Input (Read Only)</label>
		<input class="form-control" id="readonlyTextInput" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
	</div>
	<div class="form-group">
		<label for="readonlyTextarea">Textarea (Read Only)</label>
		<textarea class="form-control" id="readonlyTextarea" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
	</div>
</div>

```text/html
<div class="form-group">
	<label for="readonlyTextInput">Text Input (Read Only)</label>
	<input class="form-control" id="readonlyTextInput" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
</div>

<div class="form-group">
	<label for="readonlyTextarea">Textarea (Read Only)</label>
	<textarea class="form-control" id="readonlyTextarea" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
</div>
```

</article>


<article id="form-element-sizes">

### Form Element Sizes

<div class="form-container">
	<div class="form-group">
		<label for="smallTextInput">Small text input</label>
		<input class="form-control form-control-sm" id="smallTextInput" placeholder="Placeholder" type="text">
	</div>
	<div class="form-group">
		<label for="normalTextInput">Normal text input</label>
		<input class="form-control" id="normalTextInput" placeholder="Placeholder" type="text">
	</div>
</div>

```text/html
<div class="form-group">
	<label for="smallTextInput">Small text input</label>
	<input class="form-control form-control-sm" id="smallTextInput" placeholder="Placeholder" type="text">
</div>

<div class="form-group">
	<label for="normalTextInput">Normal text input</label>
	<input class="form-control" id="normalTextInput" placeholder="Placeholder" type="text">
</div>
```

</article>


<article id="form-inline-autofit">

### Form Inline Autofit

> Equally spaced form inputs. To set a fixed width use `flex-grow: 0; flex-basis: 200px;` on `.form-inline-group` or any direct descendant of `.form-inline-autofit`.

<div class="form-container">
	<div class="form-group form-inline-autofit">
		<div class="form-inline-group">
			<label for="formInlineAutofitTextInput1">Form Inline Autofit</label>
			<input class="form-control" id="formInlineAutofitTextInput1" type="text">
		</div>
		<div class="form-inline-group">
			<label for="formInlineAutofitSelectElement1">Select Element</label>
			<select class="form-control" id="formInlineAutofitSelectElement1">
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</select>
		</div>
	</div>
	<div class="align-items-end form-group form-inline-autofit">
		<div class="form-inline-group">
			<label for="formInlineAutofitTextInput2">First Name</label>
			<input class="form-control" id="formInlineAutofitFirstName" placeholder="First Name" type="text">
		</div>
		<div class="form-inline-group">
			<label for="formInlineAutofitLastName">Last Name</label>
			<input class="form-control" id="formInlineAutofitLastName" placeholder="Last Name" type="text">
		</div>
		<div class="input-group">
			<div class="input-group-addon">$</div>
			<input class="form-control" id="exampleInputAmount" placeholder="Amount">
			<div class="input-group-addon">.00</div>
		</div>
	</div>
	<div class="align-items-end form-group form-inline-autofit">
		<label for="formInlineAutofitCity">City</label>
		<input class="form-control" id="formInlineAutofitCity" placeholder="City" type="text">
		<select class="form-control">
			<option>AL</option>
			<option>CA</option>
			<option>FL</option>
			<option>HI</option>
			<option>NV</option>
			<option>WA</option>
		</select>
		<input class="form-control" placeholder="Zip" type="text">
		<div class="form-inline-group">
			<label for="formInlineAutofitDonation">Donation</label>
			<div class="input-group">
				<div class="input-group-addon">$</div>
				<input class="form-control" id="formInlineAutofitDonation" placeholder="Amount">
				<div class="input-group-addon">.00</div>
			</div>
		</div>
	</div>
	<button class="btn btn-primary" type="submit">Submit</button>{sp}
	<a class="btn btn-danger" href="#1" role="button">Clear</a>
</div>

```text/html
<div class="form-inline-autofit">
	<div class="form-inline-group">
		<label for="formInlineAutofitTextInput1">Form Inline Autofit</label>
		<input class="form-control" id="formInlineAutofitTextInput1" type="text">
	</div>
	<div class="form-inline-group">
		<label for="formInlineAutofitSelectElement1">Select Element</label>
		<select class="form-control" id="formInlineAutofitSelectElement1">
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
		</select>
	</div>
</div>
```

</article>


<article id="form-inline-autofit-2-columns">

### Form Inline Autofit 2 Columns

> An example of an inline form without using Bootstrap's grid.

<style>
{literal}
	@media (min-width: 576px) {
		.my-custom-form label {
			width: 200px;
		}
	}
{/literal}
</style>

<div class="form-container">
	<form class="my-custom-form">
		<div class="form-group form-inline-autofit">
			<label>Name</label>
			<input aria-label="First Name" class="form-control" placeholder="First" type="text">
			<input aria-label="Middle Name" class="form-control" placeholder="Middle" type="text">
			<input aria-label="Last Name" class="form-control" placeholder="Last" type="text">
		</div>
		<div class="form-group form-inline-autofit">
			<label for="formInlineAutofitCustomAddress1">Address 1</label>
			<input class="form-control" id="formInlineAutofitCustomAddress1" placeholder="Address 1" type="text">
		</div>
		<div class="form-group form-inline-autofit">
			<label for="formInlineAutofitCustomAddress2">Address 2</label>
			<input class="form-control" id="formInlineAutofitCustomAddress2" placeholder="Address 2" type="text">
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>{sp}
		<a class="btn btn-danger" href="#1" role="button">Clear</a>
	</form>
</div>

```text/html
<style>
	@media (min-width: 576px) {
		.my-custom-form label {
			width: 200px;
		}
	}
</style>
<div class="form-container">
	<form class="my-custom-form">
		<div class="form-group form-inline-autofit">
			<label>Name</label>
			<input aria-label="First Name" class="form-control" placeholder="First" type="text">
			<input aria-label="Middle Name" class="form-control" placeholder="Middle" type="text">
			<input aria-label="Last Name" class="form-control" placeholder="Last" type="text">
		</div>
		<div class="form-group form-inline-autofit">
			<label for="formInlineAutofitCustomAddress1">Address 1</label>
			<input class="form-control" id="formInlineAutofitCustomAddress1" placeholder="Address 1" type="text">
		</div>
		<div class="form-group form-inline-autofit">
			<label for="formInlineAutofitCustomAddress2">Address 2</label>
			<input class="form-control" id="formInlineAutofitCustomAddress2" placeholder="Address 2" type="text">
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>
		<a class="btn btn-danger" href="#1" role="button">Clear</a>
	</form>
</div>
```

</article>
