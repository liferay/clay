---
title: Form Elements
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Basic Form Elements

> Add class `focus` on the label to change the color of the label.

<div class="form-group">
	<label>
		Default text input
		<span class="reference-mark">
			<svg class="lexicon-icon">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
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

```xml
<div class="form-group">
	<label>
		Default text input
		<span class="reference-mark">
			<svg class="lexicon-icon">
				<use xlink:href="/vendor/clay/icons.svg#asterisk" />
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


<article id="2">

### Checkboxes and Radios

##### Checkboxes

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="">
	</label>
</div>
<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="">
		Label
	</label>
</div>
<div class="form-check disabled">
	<label class="form-check-label">
		<input checked  class="form-check-input" disabled type="checkbox" value="">
		Disabled Check Box
	</label>
</div>

<div class="form-check">
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1">
		1
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2">
		2
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineCheckbox3" type="checkbox" value="option3">
		3
	</label>
</div>

```xml
<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="">
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="checkbox" value="">
		Label
	</label>
</div>

<div class="form-check disabled">
	<label class="form-check-label">
		<input checked  class="form-check-input" disabled type="checkbox" value="">
		Disabled Check Box
	</label>
</div>

<div class="form-check">
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1">
		1
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2">
		2
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineCheckbox3" type="checkbox" value="option3">
		3
	</label>
</div>
```

##### Radio Buttons

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="radio" value="">
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="radio" value="">
		Label
	</label>
</div>

<div class="form-check disabled">
	<label class="form-check-label">
		<input class="form-check-input" disabled type="radio">
		Disabled Radio Button
	</label>
</div>

<div class="form-check">
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions1" type="radio" value="option1"> 1
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions1" type="radio" value="option2"> 2
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineRadio3" name="inlineRadioOptions1" type="radio" value="option3"> 3
	</label>
</div>

```xml
<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="radio" value="">
	</label>
</div>

<div class="form-check">
	<label class="form-check-label">
		<input class="form-check-input" type="radio" value="">
		Label
	</label>
</div>

<div class="form-check disabled">
	<label class="form-check-label">
		<input class="form-check-input" disabled type="radio">
		Disabled Radio Button
	</label>
</div>

<div class="form-check">
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineRadio1" name="inlineRadioOptions1" type="radio" value="option1"> 1
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineRadio2" name="inlineRadioOptions1" type="radio" value="option2"> 2
	</label>
	<label class="form-check-label form-check-inline">
		<input class="form-check-input" id="inlineRadio3" name="inlineRadioOptions1" type="radio" value="option3"> 3
	</label>
</div>
```


</article>

<article id="3">

### Select Box

<div class="form-group">
	<label>Regular Select Box</label>
	<select class="form-control">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>

<div class="form-group">
	<label>Select Box with Multiple Select Options</label>
	<select class="form-control" multiple>
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

```xml
<div class="form-group">
	<label>Regular Select Box</label>
	<select class="form-control">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>

<div class="form-group">
	<label>Select Box with Multiple Select Options</label>
	<select class="form-control" multiple>
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

</article>

<article id="4">

### File Upload

<div class="form-group">
	<label class="sr-only">FILE UPLOAD</label>
	<input id="inputFile" type="file">
</div>

```xml
<div class="form-group">
	<label class="sr-only">FILE UPLOAD</label>
	<input id="inputFile" type="file">
</div>
```

</article>


<article id="5">

### Disabled Inputs

> Add class `disabled` on the label to match the opacity to disabled input.

<div class="form-group">
	<label class="disabled">Text Input</label>
	<input class="form-control" disabled placeholder="Placeholder" type="text" value="Plunger pot, extra siphon latte">
</div>

<div class="form-group">
	<label class="disabled">Password Input</label>
	<input class="form-control" disabled placeholder="Enter password" type="password" value="password">
</div>

<div class="form-group">
	<label class="disabled">Textarea</label>
	<textarea class="form-control" disabled placeholder="Placeholder">Plunger pot, extra siphon latte</textarea>
</div>

<div class="form-group">
	<label class="disabled">Regular Select Box</label>
	<select class="form-control" disabled>
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>

<div class="form-group">
	<label class="disabled">Select Box with Multiple Select Options</label>
	<select class="form-control" disabled multiple>
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

```xml
<div class="form-group">
	<label class="disabled">Text Input</label>
	<input class="form-control" disabled placeholder="Placeholder" type="text" value="Plunger pot, extra siphon latte">
</div>

<div class="form-group">
	<label class="disabled">Password Input</label>
	<input class="form-control" disabled placeholder="Enter password" type="password" value="password">
</div>

<div class="form-group">
	<label class="disabled">Textarea</label>
	<textarea class="form-control" disabled placeholder="Placeholder">Plunger pot, extra siphon latte</textarea>
</div>

<div class="form-group">
	<label class="disabled">Regular Select Box</label>
	<select class="form-control" disabled>
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>

<div class="form-group">
	<label class="disabled">Select Box with Multiple Select Options</label>
	<select class="form-control" disabled multiple>
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

</article>


<article id="6">

### Disabled Fieldset

<form style="margin-bottom: 15px;">
	<fieldset disabled>
		<div class="form-group">
			<label>Use fieldset to group related elements in a form and ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				<input class="form-control" type="text" value="Plunger pot, extra siphon latte">
			</label>
		</div>
		<div class="form-group">
			<label for="disabledTextInput">Disabled input</label>
			<input class="form-control" id="disabledTextInput" type="text" value="Plunger pot, extra siphon latte">
		</div>
		<div class="form-group">
			<label for="disabledSelect">Disabled select menu</label>
			<select class="form-control" id="disabledSelect">
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
		<div class="form-check">
			<label class="form-check-label">
				<input checked class="form-check-input" type="checkbox" value="">
				Disabled Checkbox
			</label>
		</div>
		<div class="form-check">
			<label class="form-check-label">
				<input class="form-check-input" type="radio" value="">
				Disabled Radio
			</label>
		</div>
		<button class="btn btn-primary" type="submit">Submit</button>
	</fieldset>
</form>

```xml
<form style="margin-bottom: 15px;">
	<fieldset disabled>
		<div class="form-group">
			<label>Use fieldset to group related elements in a form and ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
				<input class="form-control" type="text" value="Plunger pot, extra siphon latte">
			</label>
		</div>

		<div class="form-group">
			<label for="disabledTextInput">Disabled input</label>
			<input class="form-control" id="disabledTextInput" type="text" value="Plunger pot, extra siphon latte">
		</div>

		<div class="form-group">
			<label for="disabledSelect">Disabled select menu</label>
			<select class="form-control" id="disabledSelect">
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>

		<div class="form-check">
			<label class="form-check-label">
				<input checked class="form-check-input" type="checkbox" value="">
				Disabled Checkbox
			</label>
		</div>

		<div class="form-check">
			<label class="form-check-label">
				<input class="form-check-input" type="radio" value="">
				Disabled Radio
			</label>
		</div>

		<button class="btn btn-primary" type="submit">Submit</button>
	</fieldset>
</form>
```

</article>


<article id="7">

### Read Only States

<div class="form-group">
	<label>Text Input (Read Only)</label>
	<input class="form-control" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
</div>

<div class="form-group">
	<label>Textarea (Read Only)</label>
	<textarea class="form-control" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
</div>

```xml
<div class="form-group">
	<label>Text Input (Read Only)</label>
	<input class="form-control" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
</div>

<div class="form-group">
	<label>Textarea (Read Only)</label>
	<textarea class="form-control" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
</div>
```

</article>


<article id="8">

### Form Element Sizes

<div class="form-group">
	<label>Small text input</label>
	<input class="form-control form-control-sm" placeholder="Placeholder" type="text">
</div>

<div class="form-group">
	<label>Default text input</label>
	<input class="form-control" placeholder="Placeholder" type="text">
</div>

<div class="form-group">
	<label>Large text input</label>
	<input class="form-control form-control-lg" placeholder="Placeholder" type="text">
</div>

```xml
<div class="form-group">
	<label>Small text input</label>
	<input class="form-control form-control-sm" placeholder="Placeholder" type="text">
</div>

<div class="form-group">
	<label>Default text input</label>
	<input class="form-control" placeholder="Placeholder" type="text">
</div>

<div class="form-group">
	<label>Large text input</label>
	<input class="form-control form-control-lg" placeholder="Placeholder" type="text">
</div>
```

</article>


<article id="9">

### Form Group

<form class="aaa">
	<div class="form-group">
		<label class="form-control-label">
			First Name
		</label>
		<input class="form-control" placeholder="First Name" type="text"></input>
	</div>
	<div class="form-group">
		<label class="form-control-label">
			Last Name
		</label>
		<input class="form-control" placeholder="Last Name" type="text"></input>
	</div>
	<div class="form-group">
		<label class="form-control-label">
			Address 1
		</label>
		<input class="form-control" placeholder="Address 1" type="text"></input>
	</div>
	<div class="form-group">
		<label class="form-control-label">
			Address 2
		</label>
		<input class="form-control" placeholder="Address 2" type="text"></input>
	</div>
</form>

```xml
<form class="aaa">
	<div class="form-group">
		<label class="form-control-label">
			First Name
		</label>
		<input class="form-control" placeholder="First Name" type="text"></input>
	</div>

	<div class="form-group">
		<label class="form-control-label">
			Last Name
		</label>
		<input class="form-control" placeholder="Last Name" type="text"></input>
	</div>

	<div class="form-group">
		<label class="form-control-label">
			Address 1
		</label>
		<input class="form-control" placeholder="Address 1" type="text"></input>
	</div>

	<div class="form-group">
		<label class="form-control-label">
			Address 2
		</label>
		<input class="form-control" placeholder="Address 2" type="text"></input>
	</div>
</form>
```

</article>


<article id="10">

### Form Inline

<form>
	<div class="form-group form-inline">
		<label class="form-control-label">Form Inline</label>
		<input class="form-control" type="text"></input>
		<button class="btn btn-primary" type="submit">Submit</button>
	</div>
</form>

```xml
<form>
	<div class="form-group form-inline">
		<label class="form-control-label">Form Inline</label>
		<input class="form-control" type="text"></input>
		<button class="btn btn-primary" type="submit">Submit</button>
	</div>
</form>
```

</article>


<article id="11">

### Form Inline Autofit

> Equally spaced form inputs. To set a fixed width use `flex-grow: 0; flex-basis: 200px;` on `.form-inline-group` or any direct descendant of `.form-inline-autofit`.

<form>
	<div class="form-group form-inline form-inline-autofit">
		<div class="form-inline-group">
			<label class="form-control-label">Form Inline Autofit</label>
			<input class="form-control" type="text"></input>
		</div>
		<div class="form-inline-group">
			<label class="form-control-label">Select</label>
			<select class="form-control">
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</select>
		</div>
	</div>
	<div class="form-group form-inline form-inline-autofit">
		<div class="form-inline-group">
			<label class="form-control-label">First Name</label>
			<input class="form-control" placeholder="First Name" type="text"></input>
		</div>
		<div class="form-inline-group">
			<label class="form-control-label">Last Name</label>
			<input class="form-control" placeholder="Last Name" type="text"></input>
		</div>
		<div class="input-group"> <div class="input-group-addon">$</div> <input class="form-control" id="exampleInputAmount" placeholder="Amount"> <div class="input-group-addon">.00</div> </div>
	</div>
	<div class="form-group form-inline form-inline-autofit">
		<label>City</label>
		<input class="form-control" placeholder="City" type="text"></input>
		<select class="form-control">
			<option>AL</option>
			<option>CA</option>
			<option>FL</option>
			<option>HI</option>
			<option>NV</option>
			<option>WA</option>
		</select>
		<input class="form-control" placeholder="Zip" type="number"></input>
		<div class="form-inline-group">
			<label class="form-control-label">Donation</label>
			<div class="input-group"> <div class="input-group-addon">$</div> <input class="form-control" id="exampleInputAmount" placeholder="Amount"> <div class="input-group-addon">.00</div> </div>
		</div>
	</div>
	<div class="form-group">
		<button class="btn btn-primary" type="submit">Submit</button>
		<a class="btn btn-danger" href="#1">Clear</a>
	</div>
</form>

```xml
<form>
	<div class="form-group form-inline form-inline-autofit">
		<div class="form-inline-group">
			<label class="form-control-label">Form Inline Autofit</label>
			<input class="form-control" type="text"></input>
		</div>
		<div class="form-inline-group">
			<label class="form-control-label">Select</label>
			<select class="form-control">
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</select>
		</div>
	</div>

	<div class="form-group form-inline form-inline-autofit">
		<div class="form-inline-group">
			<label class="form-control-label">First Name</label>
			<input class="form-control" placeholder="First Name" type="text"></input>
		</div>
		<div class="form-inline-group">
			<label class="form-control-label">Last Name</label>
			<input class="form-control" placeholder="Last Name" type="text"></input>
		</div>
		<div class="input-group"> <div class="input-group-addon">$</div> <input class="form-control" id="exampleInputAmount" placeholder="Amount"> <div class="input-group-addon">.00</div> </div>
	</div>

	<div class="form-group form-inline form-inline-autofit">
		<label>City</label>
		<input class="form-control" placeholder="City" type="text"></input>
		<select class="form-control">
			<option>AL</option>
			<option>CA</option>
			<option>FL</option>
			<option>HI</option>
			<option>NV</option>
			<option>WA</option>
		</select>
		<input class="form-control" placeholder="Zip" type="number"></input>
		<div class="form-inline-group">
			<label class="form-control-label">Donation</label>
			<div class="input-group"> <div class="input-group-addon">$</div> <input class="form-control" id="exampleInputAmount" placeholder="Amount"> <div class="input-group-addon">.00</div> </div>
		</div>
	</div>

	<div class="form-group">
		<button class="btn btn-primary" type="submit">Submit</button>
		<a class="btn btn-danger" href="#1">Clear</a>
	</div>
</form>
```

</article>


<article id="12">

### Form Inline Autofit 2 Columns

> An example of an inline form without using Bootstrap's grid.

<style>
{literal}
	@media (min-width: 576px) {
		.my-custom-form label,
		.my-custom-form .form-control-label {
			width: 200px;
		}
	}
{/literal}
</style>

<form class="my-custom-form">
	<div class="form-group form-inline form-inline-autofit">
		<label class="form-control-label">
			Name
		</label>
		<input class="form-control" placeholder="First" type="text"></input>
		<input class="form-control" placeholder="Middle" type="text"></input>
		<input class="form-control" placeholder="Last" type="text"></input>
	</div>
	<div class="form-group form-inline form-inline-autofit">
		<label class="form-control-label">
			Address 1
		</label>
		<input class="form-control" placeholder="Address 1" type="text"></input>
	</div>
	<div class="form-group form-inline form-inline-autofit">
		<label class="form-control-label">
			Address 2
		</label>
		<input class="form-control" placeholder="Address 2" type="text"></input>
	</div>
	<div class="form-group">
		<button class="btn btn-primary" type="submit">Submit</button>
		<a class="btn btn-danger" href="#1">Clear</a>
	</div>
</form>

```xml
<style>
	@media (min-width: 576px) {
		.my-custom-form label,
		.my-custom-form .form-control-label {
			width: 200px;
		}
	}
</style>

<form class="my-custom-form">
	<div class="form-group form-inline form-inline-autofit">
		<label class="form-control-label">
			Name
		</label>
		<input class="form-control" placeholder="First" type="text"></input>
		<input class="form-control" placeholder="Middle" type="text"></input>
		<input class="form-control" placeholder="Last" type="text"></input>
	</div>

	<div class="form-group form-inline form-inline-autofit">
		<label class="form-control-label">
			Address 1
		</label>
		<input class="form-control" placeholder="Address 1" type="text"></input>
	</div>

	<div class="form-group form-inline form-inline-autofit">
		<label class="form-control-label">
			Address 2
		</label>
		<input class="form-control" placeholder="Address 2" type="text"></input>
	</div>

	<div class="form-group">
		<button class="btn btn-primary" type="submit">Submit</button>
		<a class="btn btn-danger" href="#1">Clear</a>
	</div>
</form>
```

</article>