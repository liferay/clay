---
title: 'Form Group'
description: 'Forms obtain user data and transmit it to the system to either store the data, produce an action, or both.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Autofit](#autofit)
-   [Horizontal](#horizontal)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#aria_lh_form">WAI-ARIA</a> accessibility pratices for Form Elements when writting your markup.
</div>

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

<div class="sheet-example">
	<div class="form-group">
		<label for="firstNameInput">First Name</label>
		<input class="form-control" id="firstNameInput" placeholder="First Name" type="text">
	</div>
	<div class="form-group">
		<label for="lastNameInput">Last Name</label>
		<input class="form-control" id="lastNameInput" placeholder="Last Name" type="text">
	</div>
</div>

```html
<form>
	<div class="form-group">
		<label for="firstNameInput">First Name</label>
		<input
			class="form-control"
			id="firstNameInput"
			placeholder="First Name"
			type="text"
		/>
	</div>
	<div class="form-group">
		<label for="lastNameInput">Last Name</label>
		<input
			class="form-control"
			id="lastNameInput"
			placeholder="Last Name"
			type="text"
		/>
	</div>
</form>
```

## Autofit

Equally spaced form inputs based on the number of items inside `.form-group-autofit`. Each `input` and `label` group should be wrapped inside `.form-group-item`. `form-group-autofit` stacks all inputs at `max-width: 575px` (breakpoint sm).

To set a maximum width on a `.form-group-item` use `max-width: 200px;`.

To make a `.form-group-item` shrink to the size of its content add `.form-group-item-shrink`. This component should only be used for static content, such as labels or buttons. This component doesn't work well with dynamically added content, such as form helper text, use the `max-width` method above instead.

<div class="clay-site-alert alert alert-warning">
	Form Group Autofit doesn't support <code class="gatsby-code-text">label</code>'s with long text that breaks to new lines or multiple new lines above the input.
</div>

<div class="sheet-example">
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

```html
<form>
	<div class="form-group-autofit">
		<div class="form-group-item">
			<label for="formInlineAutofitTextInput1">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Form Inline Autofit"
						>Form Inline Autofit</span
					>
				</span>
			</label>
			<input
				class="form-control"
				id="formInlineAutofitTextInput1"
				type="text"
			/>
		</div>
		<div class="form-group-item" style="max-width: 200px;">
			<label for="formInlineAutofitSelectElement1">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Select Element"
						>Select Element</span
					>
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
					<span class="text-truncate" title="First Name"
						>First Name</span
					>
				</span>
			</label>
			<input
				class="form-control"
				id="formInlineAutofitFirstName"
				placeholder="First Name"
				type="text"
			/>
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitLastName">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Last Name"
						>Last Name</span
					>
				</span>
			</label>
			<input
				class="form-control"
				id="formInlineAutofitLastName"
				placeholder="Last Name"
				type="text"
			/>
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitInputGroup">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Input Group"
						>Input Group</span
					>
				</span>
			</label>
			<div class="input-group">
				<div
					class="input-group-item input-group-item-shrink input-group-prepend"
				>
					<span class="input-group-text">$</span>
				</div>
				<div class="input-group-item input-group-prepend">
					<input
						class="form-control"
						id="formInlineAutofitInputGroup"
						placeholder="Amount"
					/>
				</div>
				<div
					class="input-group-append input-group-item input-group-item-shrink"
				>
					<span class="input-group-text">.00</span>
				</div>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">
					Plunger pot, extra siphon latte, as americano aromatic roast
					cultivar cup cup frappuccino.
				</div>
			</div>
		</div>
	</div>
	<div class="form-group-autofit">
		<div
			class="form-group-item form-group-item-label form-group-item-label-spacer form-group-item-shrink"
		>
			<label for="formInlineAutofitCity">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="City">City</span>
				</span>
			</label>
		</div>
		<div class="form-group-item form-group-item-label-spacer">
			<input
				class="form-control"
				id="formInlineAutofitCity"
				placeholder="City"
				type="text"
			/>
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitState">
				<span class="text-truncate-inline">
					<span
						class="text-truncate"
						title="State ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
						>State
						ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
					>
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
			<input
				class="form-control"
				id="formInlineAutofitZip"
				placeholder="Zip"
				type="text"
			/>
			<div class="form-feedback-group">
				<div class="form-text">
					Plunger pot, extra siphon latte, as americano aromatic roast
					cultivar cup cup frappuccino.
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<label for="formInlineAutofitDonation">
				<span class="text-truncate-inline">
					<span class="text-truncate" title="Donation">Donation</span>
				</span>
			</label>
			<div class="input-group">
				<div
					class="input-group-item input-group-item-shrink input-group-prepend"
				>
					<span class="input-group-text">$</span>
				</div>
				<div class="input-group-item input-group-prepend">
					<input
						class="form-control"
						id="formInlineAutofitDonation"
						placeholder="Amount"
					/>
				</div>
				<div
					class="input-group-append input-group-item input-group-item-shrink"
				>
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
</form>
```

## Horizontal

Create horizontal forms by placing each `input` inside `form-group-item` and `label` inside `form-group-item form-group-item-label form-group-item-shrink` and set a min-width on `.form-group-item-label`.

<div class="sheet-example">
	<form class="my-custom-form">
		<div class="form-group-autofit">
			<div class="form-group-item form-group-item-label form-group-item-shrink">
				<label>Name</label>
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

```html
<form class="my-custom-form">
	<div class="form-group-autofit">
		<div
			class="form-group-item form-group-item-label form-group-item-shrink"
		>
			<label>Name</label>
		</div>
		<div class="form-group-item">
			<input
				aria-label="First Name"
				class="form-control"
				placeholder="First"
				type="text"
			/>
			<div class="form-feedback-group">
				<div class="form-text">Your first name.</div>
			</div>
		</div>
		<div class="form-group-item">
			<input
				aria-label="Middle Name"
				class="form-control"
				placeholder="Middle"
				type="text"
			/>
		</div>
		<div class="form-group-item">
			<input
				aria-label="Last Name"
				class="form-control"
				placeholder="Last"
				type="text"
			/>
		</div>
	</div>
	<div class="form-group-autofit">
		<div
			class="form-group-item form-group-item-label form-group-item-shrink"
		>
			<label for="formInlineAutofitCustomAddress1">Address 1</label>
		</div>
		<div class="form-group-item">
			<input
				class="form-control"
				id="formInlineAutofitCustomAddress1"
				placeholder="Address 1"
				type="text"
			/>
		</div>
	</div>
	<div class="form-group-autofit">
		<div
			class="form-group-item form-group-item-label form-group-item-shrink"
		>
			<label for="formInlineAutofitCustomAddress2">Address 2</label>
		</div>
		<div class="form-group-item">
			<input
				class="form-control"
				id="formInlineAutofitCustomAddress2"
				placeholder="Address 2"
				type="text"
			/>
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
