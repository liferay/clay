---
title: "Form Elements"
---

### Description

Forms is one of the most used patterns in Lexicon. Forms capture information from the user and transmits it to the system either to store, to produce an action or both at same time. Forms in Lexicon are defined to be full width.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/forms.html">Form Elements Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="basic-form-elements">
<h3 class="component-title">
	<a href="#basic-form-elements">Basic Form Elements</a>
</h3>

<div class="sheet">
	<div class="form-group">
		<label for="basicInputTypeText">
			Text{sp}
			<span class="reference-mark">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
		<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text">
	</div>
	<div class="form-group">
		<label for="basicInputTypePassword">Password</label>
		<input class="form-control" id="basicInputTypePassword" placeholder="Enter password" type="password">
	</div>
	<div class="form-group">
		<label for="basicInputTypeTextarea">Textarea</label>
		<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
	</div>
	<div class="form-group">
		<label for="basicInputTypeUrl">Url</label>
		<input class="form-control" id="basicInputTypeUrl" type="url">
	</div>
	<div class="form-group">
		<label for="basicInputTypeTel">Tel</label>
		<input class="form-control" id="basicInputTypeTel" type="tel">
	</div>
	<div class="form-group">
		<label for="basicInputTypeEmail">Email</label>
		<input class="form-control" id="basicInputTypeEmail" type="email">
	</div>
	<div class="form-group">
		<label for="basicInputTypeSearch">Search</label>
		<input class="form-control" id="basicInputTypeSearch" type="search">
	</div>
	<div class="form-group">
		<label for="basicInputTypeNumber">Number</label>
		<input class="form-control" id="basicInputTypeNumber" type="number">
	</div>
	<div class="form-group">
		<label for="basicInputTypeRange">Range</label>
		<input class="form-control" id="basicInputTypeRange" type="range">
	</div>
</div>

```text/html
<div class="form-group">
	<label for="basicInputTypeText">
		Text
		<span class="reference-mark">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</span>
	</label>
	<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text">
</div>

<div class="form-group">
	<label for="basicInputTypePassword">Password</label>
	<input class="form-control" id="basicInputTypePassword" placeholder="Enter password" type="password">
</div>

<div class="form-group">
	<label for="basicInputTypeTextarea">Textarea</label>
	<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
</div>

<div class="form-group">
	<label for="basicInputTypeUrl">Url</label>
	<input class="form-control" id="basicInputTypeUrl" type="url">
</div>

<div class="form-group">
	<label for="basicInputTypeTel">Tel</label>
	<input class="form-control" id="basicInputTypeTel" type="tel">
</div>

<div class="form-group">
	<label for="basicInputTypeEmail">Email</label>
	<input class="form-control" id="basicInputTypeEmail" type="email">
</div>

<div class="form-group">
	<label for="basicInputTypeSearch">Search</label>
	<input class="form-control" id="basicInputTypeSearch" type="search">
</div>

<div class="form-group">
	<label for="basicInputTypeNumber">Number</label>
	<input class="form-control" id="basicInputTypeNumber" type="number">
</div>

<div class="form-group">
	<label for="basicInputTypeRange">Range</label>
	<input class="form-control" id="basicInputTypeRange" type="range">
</div>
```

</article>


<article id="clay-select-element">
<h3 class="component-title">
	<a href="#select-element">Select Element</a>
</h3>

<div class="sheet">
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
```text/html
<clay-select
	id="regularSelectElement"
	label="Regular Select Element"
	options='[{"label":"Sample 1", "value": "1", "label":"Sample 2", "value": "2"}]'>
</clay-select>

<clay-select
	id="multipleSelectOptionsSelectElement"
	label="Select Element with Multiple Select Options"
	multiple="true"
	options='[{"label":"Sample 1", "value": "1", "label":"Sample 2", "value": "2"}]'>
</clay-select>
```
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

</article>


<article id="file-upload">
<h3 class="component-title">
	<a href="#file-upload">File Upload</a>
</h3>

<div class="sheet">
	<div class="form-group">
		<label class="sr-only" for="inputFile">FILE UPLOAD</label>
		<input class="form-control-file" id="inputFile" type="file">
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
<h3 class="component-title">
	<a href="#disabled-inputs">Disabled Inputs</a>
</h3>

> Add class `disabled` on the label to match the opacity to disabled input.

<div class="sheet">
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

</article>


<article id="disabled-fieldset">
<h3 class="component-title">
	<a href="#disabled-fieldset">Disabled Fieldset</a>
</h3>

<div class="sheet">
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
		<div class="form-group">
			<button class="btn btn-primary" type="submit">Submit</button>
		</div>
	</fieldset>
</div>

```text/html
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
	<div class="form-group">
		<button class="btn btn-primary" type="submit">Submit</button>
	</div>
</fieldset>
```

</article>


<article id="read-only-states">
<h3 class="component-title">
	<a href="#read-only-states">Read Only States</a>
</h3>

<div class="sheet">
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
<h3 class="component-title">
	<a href="#form-element-sizes">Form Element Sizes</a>
</h3>

<div class="sheet">
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

```text/html
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
```

</article>


<article id="form-group-autofit">
<h3 class="component-title">
	<a href="#form-group-autofit">Form Group Autofit</a>
</h3>

> Equally spaced form inputs based on the number of items inside `.form-group-autofit`. Each `input` and `label` group should be wrapped inside `.form-group-item`. `form-group-autofit` stacks all inputs at max-width: 575px (breakpoint sm).

> To set a maximum width on a `.form-group-item` use `max-width: 200px;`.

> To make a `.form-group-item` shrink to the size of its content add `.form-group-item-shrink`. This component should only be used for static content, such as labels or buttons. This component doesn't work well with dynamically added content, such as form helper text, use the max-width method above instead.

<div class="alert alert-warning">Form Group Autofit doesn't support <code>label</code>'s with long text that breaks to new lines or multiple new lines above the input.</div>

<div class="sheet">
	<div class="form-group-autofit">
		<div class="form-group-item">
			<label for="formInlineAutofitTextInput1">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Form Inline Autofit">Form Inline Autofit</span>
				</span>
			</label>
			<input class="form-control" id="formInlineAutofitTextInput1" type="text">
		</div>
		<div class="form-group-item" style="max-width: 200px;">
			<label for="formInlineAutofitSelectElement1">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Select Element">Select Element</span>
				</span>
			</label>
			<select class="form-control" id="formInlineAutofitSelectElement1">
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</select>
		</div>
	</div>
	<div class="form-group-autofit">
		<div class="form-group-item">
			<label for="formInlineAutofitFirstName">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="First Name">First Name</span>
				</span>
			</label>
			<input class="form-control" id="formInlineAutofitFirstName" placeholder="First Name" type="text">
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitLastName">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Last Name">Last Name</span>
				</span>
			</label>
			<input class="form-control" id="formInlineAutofitLastName" placeholder="Last Name" type="text">
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitInputGroup">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Input Group">Input Group</span>
				</span>
			</label>
			<div class="input-group">
				<div class="input-group-item input-group-item-shrink input-group-prepend">
					<span class="input-group-text">$</span>
				</div>
				<div class="input-group-item input-group-prepend">
					<input class="form-control" id="formInlineAutofitInputGroup" placeholder="Amount">
				</div>
				<div class="input-group-append input-group-item input-group-item-shrink">
					<span class="input-group-text">.00</span>
				</div>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino.</div>
			</div>
		</div>
	</div>
	<div class="form-group-autofit">
		<div class="form-group-item form-group-item-label form-group-item-label-spacer form-group-item-shrink">
			<label for="formInlineAutofitCity">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="City">City</span>
				</span>
			</label>
		</div>
		<div class="form-group-item form-group-item-label-spacer">
			<input class="form-control" id="formInlineAutofitCity" placeholder="City" type="text">
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitState">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="State ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">State ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
				</span>
			</label>
			<select class="form-control" id="formInlineAutofitState">
				<option>AL</option>
				<option>CA</option>
				<option>FL</option>
				<option>HI</option>
				<option>NV</option>
				<option>WA</option>
			</select>
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitZip">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Zip Code">Zip Code</span>
				</span>
			</label>
			<input class="form-control" id="formInlineAutofitZip" placeholder="Zip" type="text">
			<div class="form-feedback-group">
				<div class="form-text">Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino.</div>
			</div>
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitDonation">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Donation">Donation</span>
				</span>
			</label>
			<div class="input-group">
				<div class="input-group-item input-group-item-shrink input-group-prepend">
					<span class="input-group-text">$</span>
				</div>
				<div class="input-group-item input-group-prepend">
					<input class="form-control" id="formInlineAutofitDonation" placeholder="Amount">
				</div>
				<div class="input-group-append input-group-item input-group-item-shrink">
					<span class="input-group-text">.00</span>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="submit">Submit</button>
			</div>
			<div class="btn-group-item">
				<a class="btn btn-secondary" href="#1" role="button">Clear</a>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="form-group-autofit">
	<div class="form-group-item">
		<label for="formInlineAutofitTextInput1">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="Form Inline Autofit">Form Inline Autofit</span>
			</span>
		</label>
		<input class="form-control" id="formInlineAutofitTextInput1" type="text">
	</div>
	<div class="form-group-item" style="max-width: 200px;">
		<label for="formInlineAutofitSelectElement1">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="Select Element">Select Element</span>
			</span>
		</label>
		<select class="form-control" id="formInlineAutofitSelectElement1">
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
		</select>
	</div>
</div>

<div class="form-group-autofit">
	<div class="form-group-item">
		<label for="formInlineAutofitFirstName">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="First Name">First Name</span>
			</span>
		</label>
		<input class="form-control" id="formInlineAutofitFirstName" placeholder="First Name" type="text">
	</div>
	<div class="form-group-item">
		<label for="formInlineAutofitLastName">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="Last Name">Last Name</span>
			</span>
		</label>
		<input class="form-control" id="formInlineAutofitLastName" placeholder="Last Name" type="text">
	</div>
	<div class="form-group-item">
		<label for="formInlineAutofitInputGroup">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="Input Group">Input Group</span>
			</span>
		</label>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input class="form-control" id="formInlineAutofitInputGroup" placeholder="Amount">
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
		<div class="form-feedback-group">
			<div class="form-text">Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino.</div>
		</div>
	</div>
</div>

<div class="form-group-autofit">
	<div class="form-group-item form-group-item-label form-group-item-label-spacer form-group-item-shrink">
		<label for="formInlineAutofitCity">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="City">City</span>
			</span>
		</label>
	</div>
	<div class="form-group-item form-group-item-label-spacer">
		<input class="form-control" id="formInlineAutofitCity" placeholder="City" type="text">
	</div>
	<div class="form-group-item">
		<label for="formInlineAutofitState">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="State ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">State ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span>
			</span>
		</label>
		<select class="form-control" id="formInlineAutofitState">
			<option>AL</option>
			<option>CA</option>
			<option>FL</option>
			<option>HI</option>
			<option>NV</option>
			<option>WA</option>
		</select>
	</div>
	<div class="form-group-item">
		<label for="formInlineAutofitZip">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="Zip Code">Zip Code</span>
			</span>
		</label>
		<input class="form-control" id="formInlineAutofitZip" placeholder="Zip" type="text">
		<div class="form-feedback-group">
			<div class="form-text">Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino.</div>
		</div>
	</div>
	<div class="form-group-item">
		<label for="formInlineAutofitDonation">
			<span class="text-truncate-inline">
				<span class="text-truncate" title="Donation">Donation</span>
			</span>
		</label>
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input class="form-control" id="formInlineAutofitDonation" placeholder="Amount">
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="btn-group">
		<div class="btn-group-item">
			<button class="btn btn-primary" type="submit">Submit</button>
		</div>
		<div class="btn-group-item">
			<a class="btn btn-secondary" href="#1" role="button">Clear</a>
		</div>
	</div>
</div>
```

</article>


<article id="form-group-autofit-horizontal-form">
<h3 class="component-title">
	<a href="#form-group-autofit-horizontal-form">Form Group Autofit (Horizontal Form)</a>
</h3>

> Create horizontal forms by placing each `input` inside `form-group-item` and `label` inside `form-group-item form-group-item-label form-group-item-shrink` and set a min-width on `.form-group-item-label`.
{literal}
<style>
	@media (min-width: 576px) {
		.my-custom-form .form-group-item-label {
			min-width: 200px;
		}
	}
</style>
{/literal}

<div class="sheet">
	<form class="my-custom-form">
		<div class="form-group-autofit">
			<div class="form-group-item form-group-item-label form-group-item-shrink">
				<label>Name ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</label>
			</div>
			<div class="form-group-item">
				<input aria-label="First Name" class="form-control" placeholder="First" type="text">
				<div class="form-feedback-group">
					<div class="form-text">Your first name.</div>
				</div>
			</div>
			<div class="form-group-item">
				<input aria-label="Middle Name" class="form-control" placeholder="Middle" type="text">
			</div>
			<div class="form-group-item">
				<input aria-label="Last Name" class="form-control" placeholder="Last" type="text">
				<div class="form-feedback-group">
					<div class="form-text">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
				</div>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item form-group-item-label form-group-item-shrink">
				<label for="formInlineAutofitCustomAddress1">Address 1</label>
			</div>
			<div class="form-group-item">
				<input class="form-control" id="formInlineAutofitCustomAddress1" placeholder="Address 1" type="text">
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item form-group-item-label form-group-item-shrink">
				<label for="formInlineAutofitCustomAddress2">Address 2</label>
			</div>
			<div class="form-group-item">
				<input class="form-control" id="formInlineAutofitCustomAddress2" placeholder="Address 2" type="text">
			</div>
		</div>
		<div class="form-group">
			<div class="btn-group">
				<div class="btn-group-item">
					<button class="btn btn-primary" type="submit">Submit</button>
				</div>
				<div class="btn-group-item">
					<a class="btn btn-secondary" href="#1" role="button">Clear</a>
				</div>
			</div>
		</div>
	</form>
</div>

```text/html
<style>
	@media (min-width: 576px) {
		.my-custom-form .form-group-item-label {
			min-width: 200px;
		}
	}
</style>

<form class="my-custom-form">
	<div class="form-group-autofit">
		<div class="form-group-item form-group-item-label form-group-item-shrink">
			<label>Name ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</label>
		</div>
		<div class="form-group-item">
			<input aria-label="First Name" class="form-control" placeholder="First" type="text">
			<div class="form-feedback-group">
				<div class="form-text">Your first name.</div>
			</div>
		</div>
		<div class="form-group-item">
			<input aria-label="Middle Name" class="form-control" placeholder="Middle" type="text">
		</div>
		<div class="form-group-item">
			<input aria-label="Last Name" class="form-control" placeholder="Last" type="text">
			<div class="form-feedback-group">
				<div class="form-text">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
			</div>
		</div>
	</div>
	<div class="form-group-autofit">
		<div class="form-group-item form-group-item-label form-group-item-shrink">
			<label for="formInlineAutofitCustomAddress1">Address 1</label>
		</div>
		<div class="form-group-item">
			<input class="form-control" id="formInlineAutofitCustomAddress1" placeholder="Address 1" type="text">
		</div>
	</div>
	<div class="form-group-autofit">
		<div class="form-group-item form-group-item-label form-group-item-shrink">
			<label for="formInlineAutofitCustomAddress2">Address 2</label>
		</div>
		<div class="form-group-item">
			<input class="form-control" id="formInlineAutofitCustomAddress2" placeholder="Address 2" type="text">
		</div>
	</div>
	<div class="form-group">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="submit">Submit</button>
			</div>
			<div class="btn-group-item">
				<a class="btn btn-secondary" href="#1" role="button">Clear</a>
			</div>
		</div>
	</div>
</form>
```

</article>
