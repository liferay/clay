---
title: Form Elements
description: Components
layout: "guide"
weight: 100
---

<article id="basic-form-elements">

### Basic Form Elements

> Add class `focus` on the label to change the color of the label.

<div class="clay-site-form-container">
	<div class="form-group">
		<label>
			Default text input
			<span class="reference-mark">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
		<input class="form-control" placeholder="Placeholder" type="text">
	</div>
	<div class="form-group">
		<label>Password input</label>
		<input class="form-control" placeholder="Enter password" type="password">
	</div>
	<div class="form-group">
		<label>Textarea</label>
		<textarea class="form-control" placeholder="Placeholder"></textarea>
	</div>
</div>

```xml
<div class="form-group">
	<label>
		Default text input
		<span class="reference-mark">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</span>
	</label>
	<input class="form-control" placeholder="Placeholder" type="text">
</div>
<div class="form-group">
	<label>Password input</label>
	<input class="form-control" placeholder="Enter password" type="password">
</div>
<div class="form-group">
	<label>Textarea</label>
	<textarea class="form-control" placeholder="Placeholder"></textarea>
</div>
```

</article>


<article id="checkboxes">

### Checkboxes

<div class="clay-site-form-container">
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

```xml
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

<div class="clay-site-form-container">
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
			<input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions1" type="radio" value="option1"> 1
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions1" type="radio" value="option2"> 2
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" id="inlineRadio3" name="inlineRadioOptions1" type="radio" value="option3"> 3
		</label>
	</div>
</div>

```xml
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
		<input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions1" type="radio" value="option1"> 1
	</label>
</div>
<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions1" type="radio" value="option2"> 2
	</label>
</div>
<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input class="form-check-input" id="inlineRadio3" name="inlineRadioOptions1" type="radio" value="option3"> 3
	</label>
</div>
```

</article>


<article id="select-element">

### Select Element

<div class="clay-site-form-container">
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

```xml
<label for="regularSelectElement">Regular Select Element</label>
<select class="form-control" id="regularSelectElement">
	<option>Sample 1</option>
	<option>Sample 2</option>
	<option>Sample 3</option>
	<option>Sample 4</option>
</select>

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
```

</article>


<article id="file-upload">

### File Upload

<div class="clay-site-form-container">
	<label class="sr-only" for="inputFile">FILE UPLOAD</label>
	<input id="inputFile" type="file">
</div>

```xml
<label class="sr-only" for="inputFile">FILE UPLOAD</label>
<input id="inputFile" type="file">
```

</article>


<article id="disabled-inputs">

### Disabled Inputs

> Add class `disabled` on the label to match the opacity to disabled input.

<div class="clay-site-form-container">
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

```xml
<label class="disabled" for="disabledTextInput">Text Input</label>
<input class="form-control" disabled id="disabledTextInput" placeholder="Placeholder" type="text" value="Plunger pot, extra siphon latte">

<label class="disabled" for="disabledPasswordInput">Password Input</label>
<input class="form-control" disabled id="disabledPasswordInput" placeholder="Enter password" type="password" value="password">

<label class="disabled" for="disabledTextarea">Textarea</label>
<textarea class="form-control" disabled id="disabledTextarea" placeholder="Placeholder">Plunger pot, extra siphon latte</textarea>

<label class="disabled" for="disabledSelectElement">Select Element</label>
<select class="form-control" disabled id="disabledSelectElement">
	<option>Sample 1</option>
	<option>Sample 2</option>
	<option>Sample 3</option>
	<option>Sample 4</option>
</select>

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
```

</article>


<article id="disabled-fieldset">

### Disabled Fieldset

<div class="clay-site-form-container">
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

```xml
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

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="readonlyTextInput">Text Input (Read Only)</label>
		<input class="form-control" id="readonlyTextInput" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
	</div>
	<div class="form-group">
		<label for="readonlyTextarea">Textarea (Read Only)</label>
		<textarea class="form-control" id="readonlyTextarea" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
	</div>
</div>

```xml
<label for="readonlyTextInput">Text Input (Read Only)</label>
<input class="form-control" id="readonlyTextInput" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">

<label for="readonlyTextarea">Textarea (Read Only)</label>
<textarea class="form-control" id="readonlyTextarea" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
```

</article>


<article id="form-element-sizes">

### Form Element Sizes

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="smallTextInput">Small text input</label>
		<input class="form-control form-control-sm" id="smallTextInput" placeholder="Placeholder" type="text">
	</div>
	<div class="form-group">
		<label for="normalTextInput">Normal text input</label>
		<input class="form-control" id="normalTextInput" placeholder="Placeholder" type="text">
	</div>
	<div class="form-group">
		<label for="largeTextInput">Large text input</label>
		<input class="form-control form-control-lg" id="largeTextInput" placeholder="Placeholder" type="text">
	</div>
</div>

```xml
<label for="smallTextInput">Small text input</label>
<input class="form-control form-control-sm" id="smallTextInput" placeholder="Placeholder" type="text">

<label for="normalTextInput">Normal text input</label>
<input class="form-control" id="normalTextInput" placeholder="Placeholder" type="text">

<label for="largeTextInput">Large text input</label>
<input class="form-control form-control-lg" id="largeTextInput" placeholder="Placeholder" type="text">
```

</article>


<article id="form-group">

### Form Group

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="firstNameInput">First Name</label>
		<input class="form-control" id="firstNameInput" placeholder="First Name" type="text">
	</div>
	<div class="form-group">
		<label for="lastNameInput">Last Name</label>
		<input class="form-control" id="lastNameInput" placeholder="Last Name" type="text">
	</div>
	<div class="form-group">
		<label for="address1Input">Address 1</label>
		<input class="form-control" id="address1Input" placeholder="Address 1" type="text">
	</div>
	<div class="form-group">
		<label for="address2Input">Address 2</label>
		<input class="form-control" id="address2Input" placeholder="Address 2" type="text">
	</div>
</div>

```xml
<div class="form-group">
	<label for="firstNameInput">First Name</label>
	<input class="form-control" id="firstNameInput" placeholder="First Name" type="text">
</div>
<div class="form-group">
	<label for="lastNameInput">Last Name</label>
	<input class="form-control" id="lastNameInput" placeholder="Last Name" type="text">
</div>
<div class="form-group">
	<label for="address1Input">Address 1</label>
	<input class="form-control" id="address1Input" placeholder="Address 1" type="text">
</div>
<div class="form-group">
	<label for="address2Input">Address 2</label>
	<input class="form-control" id="address2Input" placeholder="Address 2" type="text">
</div>
```

</article>


<article id="form-inline">

### Form Inline

<div class="clay-site-form-container">
	<div class="form-inline">
		<label for="formInlineInput">Form Inline</label>
		<input class="form-control" id="formInlineInput" type="text">
		<button class="btn btn-primary" type="submit">Submit</button>
	</div>
</div>

```xml
<div class="form-inline">
	<label for="formInlineInput">Form Inline</label>
	<input class="form-control" id="formInlineInput" type="text">
	<button class="btn btn-primary" type="submit">Submit</button>
</div>
```

</article>


<article id="form-inline-autofit">

### Form Inline Autofit

> Equally spaced form inputs. To set a fixed width use `flex-grow: 0; flex-basis: 200px;` on `.form-inline-group` or any direct descendant of `.form-inline-autofit`.

<div class="clay-site-form-container">
	<div class="form-group form-inline form-inline-autofit">
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
	<div class="form-group form-inline form-inline-autofit">
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
	<div class="form-group form-inline form-inline-autofit">
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
	<button class="btn btn-primary" type="submit">Submit</button>
	&nbsp;
	<a class="btn btn-danger" href="#1">Clear</a>
</div>

```xml
<div class="form-inline form-inline-autofit">
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

<div class="clay-site-form-container">
	<form class="my-custom-form">
		<div class="form-group form-inline form-inline-autofit">
			<label>Name</label>
			<input aria-label="First Name" class="form-control" placeholder="First" type="text">
			<input aria-label="Middle Name" class="form-control" placeholder="Middle" type="text">
			<input aria-label="Last Name" class="form-control" placeholder="Last" type="text">
		</div>
		<div class="form-group form-inline form-inline-autofit">
			<label for="formInlineAutofitCustomAddress1">Address 1</label>
			<input class="form-control" id="formInlineAutofitCustomAddress1" placeholder="Address 1" type="text">
		</div>
		<div class="form-group form-inline form-inline-autofit">
			<label for="formInlineAutofitCustomAddress2">Address 2</label>
			<input class="form-control" id="formInlineAutofitCustomAddress2" placeholder="Address 2" type="text">
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>
		&nbsp;
		<a class="btn btn-danger" href="#1">Clear</a>
	</form>
</div>

```xml
<style>
	@media (min-width: 576px) {
		.my-custom-form label {
			width: 200px;
		}
	}
</style>
<form class="my-custom-form">
	<div class="form-group form-inline form-inline-autofit">
		<label>Name</label>
		<input class="form-control" placeholder="First" type="text">
		<input class="form-control" placeholder="Middle" type="text">
		<input class="form-control" placeholder="Last" type="text">
	</div>
	<div class="form-group form-inline form-inline-autofit">
		<label for="formInlineAutofitCustomAddress1">Address 1</label>
		<input class="form-control" id="formInlineAutofitCustomAddress1" placeholder="Address 1" type="text">
	</div>
	<div class="form-group form-inline form-inline-autofit">
		<label for="formInlineAutofitCustomAddress2">Address 2</label>
		<input class="form-control" id="formInlineAutofitCustomAddress2" placeholder="Address 2" type="text">
	</div>
	<button class="btn btn-primary" type="submit">Submit</button>
	<a class="btn btn-danger" href="#1">Clear</a>
</form>
```

</article>