---
title: 'Input'
description: 'This section demonstrates the different text input types, including usage and validation states.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/forms/text-input/'
mainTabURL: 'docs/components/input.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#css-example)
-   [Disabled](#css-disabled)
-   [Readonly](#css-readonly)
-   [Sizes](#css-sizes)
-   [Textarea](#css-textarea)
-   [Validations](#css-validations)
    -   [Success](#css-success)
    -   [Warning](#css-warning)
    -   [Error](#css-error)
-   [HTML 5 Validations](#css-html-5-validations)
    -   [Novalidate Attribute](#css-html-5-validations-novalidate-attribute)
-   [Groups](#css-markup-groups)
    -   [Example](#css-markup-groups-example)
    -   [Sizes](#css-markup-groups-sizes)
    -   [Checkboxes and Radios](#css-checkboxes-and-radios)
    -   [Button Addons](#css-button-addons)
    -   [Multiple Addons](#css-multiple-addons)
    -   [Separated Addons](#css-separated-addons)
    -   [Mixed Addons](#css-mixed-addons)
    -   [Inset](#css-inset)

</div>
</div>

## Example(#css-example)

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeText">Name</label>
		<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeText">Name</label>
	<input
		class="form-control"
		id="basicInputTypeText"
		placeholder="Placeholder"
		type="text"
	/>
</div>
```

> Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

## Disabled(#css-disabled)

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

<div class="sheet-example">
	<div class="form-group">
		<label class="disabled" for="basicInputTypeTextDisabled">Name</label>
		<input disabled class="form-control" id="basicInputTypeTextDisabled" placeholder="Placeholder" type="text"/>
	</div>
</div>

```html
<div class="form-group">
	<label class="disabled" for="basicInputTypeTextDisabled">Name</label>
	<input
		disabled
		class="form-control"
		id="basicInputTypeTextDisabled"
		placeholder="Placeholder"
		type="text"
	/>
</div>
```

## Readonly(#css-readonly)

Add the `readonly` boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeTextReadOnly">User ID</label>
		<input readonly class="form-control" id="basicInputTypeTextReadOnly" type="text" value="59432"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeTextReadOnly">User ID</label>
	<input
		readonly
		class="form-control"
		id="basicInputTypeTextReadOnly"
		type="text"
		value="59432"
	/>
</div>
```

## Sizes(#css-sizes)

Set heights using classes like `.form-control-lg` and `.form-control-sm`.

<div class="sheet-example">
	<div class="form-group">
		<label for="smallTextInput">.form-control-sm</label>
		<input class="form-control form-control-sm" id="smallTextInput" placeholder="Placeholder" type="text"/>
	</div>
	<div class="form-group">
		<label for="normalTextInput">Default</label>
		<input class="form-control" id="normalTextInput" placeholder="Placeholder" type="text"/>
	</div>
	<div class="form-group">
		<label for="largeTextInput">.form-control-lg</label>
		<input class="form-control form-control-lg" id="largeTextInput" placeholder="Placeholder" type="text"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="smallTextInput">.form-control-sm</label>
	<input
		class="form-control form-control-sm"
		id="smallTextInput"
		placeholder="Placeholder"
		type="text"
	/>
</div>
<div class="form-group">
	<label for="normalTextInput">Default</label>
	<input
		class="form-control"
		id="normalTextInput"
		placeholder="Placeholder"
		type="text"
	/>
</div>
<div class="form-group">
	<label for="largeTextInput">.form-control-lg</label>
	<input
		class="form-control form-control-lg"
		id="largeTextInput"
		placeholder="Placeholder"
		type="text"
	/>
</div>
```

## Textarea(#css-textarea)

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeTextarea">Textarea</label>
		<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeTextarea">Textarea</label>
	<textarea
		class="form-control"
		id="basicInputTypeTextarea"
		placeholder="Placeholder"
	></textarea>
</div>
```

## Validations(#css-validations)

### Success(#css-success)

<div class="sheet-example">
	<div class="form-group has-success">
		<label for="inputSuccess1">
			has-success
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputSuccess1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#check-circle-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
</div>

```html
<div class="form-group has-success">
	<label for="inputSuccess1">
		has-success
		<svg
			class="lexicon-icon lexicon-icon-asterisk reference-mark"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputSuccess1" type="text" />
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg
					class="lexicon-icon lexicon-icon-check-circle-full"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#check-circle-full" />
				</svg>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

### Warning(#css-warning)

<div class="sheet-example">
	<div class="form-group has-warning">
		<label for="inputWarning1">
			has-warning
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputWarning1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#warning-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
</div>

```html
<div class="form-group has-warning">
	<label for="inputWarning1">
		has-warning
		<svg
			class="lexicon-icon lexicon-icon-asterisk reference-mark"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputWarning1" type="text" />
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg
					class="lexicon-icon lexicon-icon-warning-full"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#warning-full" />
				</svg>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

### Error(#css-error)

<div class="sheet-example">
	<div class="form-group has-error">
		<label for="inputError1">
			has-error
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<input aria-describedby="input-error-1-error-message" aria-invalid="true" class="form-control" id="inputError1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item" id="input-error-1-error-message">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#exclamation-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
</div>

```html
<div class="form-group has-error">
	<label for="inputError1">
		has-error
		<svg
			class="lexicon-icon lexicon-icon-asterisk reference-mark"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<input
		aria-describedby="input-error-1-error-message"
		aria-invalid="true"
		class="form-control"
		id="inputError1"
		type="text"
	/>
	<div class="form-feedback-group">
		<div class="form-feedback-item" id="input-error-1-error-message">
			This is a form-feedback-item.
		</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg
					class="lexicon-icon lexicon-icon-exclamation-full"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#exclamation-full" />
				</svg>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

## HTML 5 Validations(#css-html-5-validations)

The browser default form validation. Submit the form to see it in action.

<div class="sheet-example">
	<form action="/docs/components/input/markup.html?#css-html-5-validations" method="get">
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="formValidationLettersOnly">
					Letters Only
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationLettersOnly" pattern="^[A-Za-z]+$" placeholder="Enter Letters Only" required type="text" />
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please enter letters only.
				</div>
			</div>
			<div class="form-group-item">
				<label for="formValidationNumbersOnly">
					Numbers Only
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationNumbersOnly" pattern="^[0-9]*$" placeholder="Enter Numbers Only" required type="text" />
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please enter numbers only.
				</div>
			</div>
		</div>
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="submit">Submit</button>
			</div>
		</div>
	</form>
</div>

### Novalidate Attribute(#css-html-5-validations-novalidate-attribute)

The `novalidate` attribute on the `form` element will disable the browser's default validation tooltip. This allows us to display custom validation text while taking advantage of the browser's built in form validation API.

You will need to prevent form submission if there are invalid fields by using the `HTMLInputElement.checkValidity()` method.

```javascript{expanded}
document.addEventListener('submit', function(event) {
	var t = event.target;

	if (t.getAttribute('novalidate') === '') {
		if (t.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		t.classList.add('was-validated');
	}
});
```

The `was-validated` class on the `form` element displays the success or error messages for `:valid` and `:invalid` fields. It should be added when the form is submitted. Documentation on HTML5 form validation attributes can be found on <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation" rel="noreferrer noopener" target="_blank">MDN</a>.

<div class="sheet-example">
	<form action="/docs/components/input/markup.html?#css-html-5-validations-novalidate-attribute" novalidate method="get">
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="formValidationLettersOnly1">
					Letters Only
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationLettersOnly1" placeholder="Letters Only" required pattern="^[A-Za-z]+$" type="text" />
				<div class="valid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#check-circle-full" />
						</svg>
					</span>
					This is correct!
				</div>
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please enter letters only.
				</div>
			</div>
			<div class="form-group-item">
				<label for="formValidationNumbersOnly1">
					Numbers Only
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationNumbersOnly1" pattern="^[0-9]*$" placeholder="Numbers Only" required type="text" />
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please enter numbers only.
				</div>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="formValidationCity1">
					City
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use xlink:href="/images/icons/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationCity1" pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$" placeholder="City" required type="text" />
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please enter a valid city.
				</div>
			</div>
			<div class="form-group-item">
				<label for="formValidationState1">
					State
				</label>
				<select class="form-control" id="formValidationState1" required>
					<option selected disabled value="">Choose...</option>
					<option>AL</option>
					<option>CA</option>
					<option>FL</option>
					<option>HI</option>
					<option>NV</option>
					<option>WA</option>
				</select>
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please select a state.
				</div>
			</div>
			<div class="form-group-item">
				<label for="formValidationZip1">
					Zip Code
				</label>
				<input class="form-control" id="formValidationZip1" pattern="^\d{5}(?:[-\s]\d{4})?$" placeholder="Zip" required type="text">
				<div class="invalid-feedback">
					<span class="form-feedback-indicator">
						<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
							<use xlink:href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
					Please enter a valid zip code.
				</div>
				<div class="form-feedback-group">
					<div class="form-text">Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino.</div>
				</div>
			</div>
		</div>
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary submit-html5-form" type="submit">Submit</button>
			</div>
		</div>
	</form>
</div>

```html
<form
	action="/docs/components/input/markup.html?#css-html-5-validations-novalidate-attribute"
	novalidate
	method="get"
>
	<div class="form-group-autofit">
		<div class="form-group-item">
			<label for="formValidationLettersOnly1">
				Letters Only
				<svg
					class="lexicon-icon lexicon-icon-asterisk reference-mark"
					focusable="false"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<input
				class="form-control"
				id="formValidationLettersOnly1"
				placeholder="Letters Only"
				required
				pattern="^[A-Za-z]+$"
				type="text"
			/>
			<div class="invalid-feedback">
				<span class="form-feedback-indicator">
					<svg
						class="lexicon-icon lexicon-icon-exclamation-full"
						focusable="false"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#exclamation-full"
						/>
					</svg>
				</span>
				Please enter letters only.
			</div>
		</div>
		<div class="form-group-item">
			<label for="formValidationNumbersOnly1">
				Numbers Only
				<svg
					class="lexicon-icon lexicon-icon-asterisk reference-mark"
					focusable="false"
					role="presentation"
				>
					<use xlink:href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<input
				class="form-control"
				id="formValidationNumbersOnly1"
				pattern="^[0-9]*$"
				placeholder="Numbers Only"
				required
				type="text"
			/>
			<div class="invalid-feedback">
				<span class="form-feedback-indicator">
					<svg
						class="lexicon-icon lexicon-icon-exclamation-full"
						focusable="false"
						role="presentation"
					>
						<use
							xlink:href="/images/icons/icons.svg#exclamation-full"
						/>
					</svg>
				</span>
				Please enter numbers only.
			</div>
		</div>
	</div>
	<div class="btn-group">
		<div class="btn-group-item">
			<button class="btn btn-primary submit-html5-form" type="submit">
				Submit
			</button>
		</div>
	</div>
</form>
```

## Groups(#css-markup-groups)

<div class="clay-site-alert alert alert-warning">
	Clay Input Group markup deviates from Bootstrap 4's Input Groups.
</div>

### Example(#css-markup-groups-example)

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<button class="btn btn-secondary" type="button">Search</button>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-label="Search for second one" class="form-control" value="email-example@liferay.com" type="email" />
			</div>
			<span class="input-group-append input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Submit</button>
			</span>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<button class="btn btn-secondary" type="button">Search</button>
		</div>
		<div class="input-group-append input-group-item">
			<input
				aria-label="Search for"
				class="form-control"
				placeholder="Search for..."
				type="text"
			/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input
				aria-label="Search for second one"
				class="form-control"
				value="email-example@liferay.com"
				type="email"
			/>
		</div>
		<span
			class="input-group-append input-group-item input-group-item-shrink"
		>
			<button class="btn btn-secondary" type="button">Submit</button>
		</span>
	</div>
</div>
```

### Sizes(#css-markup-groups-sizes)

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

**Sizing on the individual input group elements isn’t supported.**

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group input-group-lg">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-prepend input-group-item">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-label="Amount (to the nearest dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group input-group-sm">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">$</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-label="Amount (to the neareset dollar)" class="form-control" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.00</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group input-group-lg">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-prepend input-group-item">
			<input
				aria-label="Amount (to the nearest dollar)"
				class="form-control"
				type="text"
			/>
		</div>
		<div
			class="input-group-append input-group-item input-group-item-shrink"
		>
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>
<div class="form-group">
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input
				aria-label="Amount (to the nearest dollar)"
				class="form-control"
				type="text"
			/>
		</div>
		<div class="input-group-append input-group-item-shrink">
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>
<div class="form-group">
	<div class="input-group input-group-sm">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text">$</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input
				aria-label="Amount (to the neareset dollar)"
				class="form-control"
				type="text"
			/>
		</div>
		<div
			class="input-group-append input-group-item input-group-item-shrink"
		>
			<span class="input-group-text">.00</span>
		</div>
	</div>
</div>
```

### Checkboxes and Radios(#css-checkboxes-and-radios)

Place any checkbox or radio option within an input group’s addon instead of text.

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-checkbox">
						<label>
							<input aria-label="Checkbox for following text input" class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with checkbox" class="form-control" value="Select this option?" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text input-group-text-secondary">
					<div class="custom-control custom-radio">
						<label>
							<input aria-label="Radio button for following text input" class="custom-control-input" type="radio"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</span>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with radio button" class="form-control" type="text" value="Select this option?"/>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-checkbox">
					<label>
						<input
							aria-label="Checkbox for following text input"
							class="custom-control-input"
							type="checkbox"
						/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input
				aria-label="Text input with checkbox"
				class="form-control"
				value="Select this option?"
				type="text"
			/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text input-group-text-secondary">
				<div class="custom-control custom-radio">
					<label>
						<input
							aria-label="Radio button for following text input"
							class="custom-control-input"
							type="radio"
						/>
						<span class="custom-control-label"></span>
					</label>
				</div>
			</span>
		</div>
		<div class="input-group-append input-group-item">
			<input
				aria-label="Text input with radio button"
				class="form-control"
				type="text"
				value="Select this option?"
			/>
		</div>
	</div>
</div>
```

### Button Addons(#css-button-addons)

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<button class="btn btn-secondary" type="button">Search</button>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Search for" class="form-control" placeholder="Search for..." type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					Action<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation"><use href="/images/icons/icons.svg#caret-bottom" /></svg></span>
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</div>
			<div class="input-group-append input-group-item">
				<input aria-label="Text input with dropdown button" class="form-control" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input aria-label="Text input with segmented button dropdown" class="form-control" type="text"/>
			</div>
			<div class="input-group-prepend input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Action</button>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button">
					<span class="inline-item">
						<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#caret-bottom" />
						</svg>
					</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-right">
					<li><a class="dropdown-item" href="#1">Action</a></li>
					<li><a class="dropdown-item" href="#1">Another action</a></li>
					<li><a class="dropdown-item" href="#1">Something else here</a></li>
					<li class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#1">Separated link</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<button class="btn btn-secondary" type="button">Search</button>
		</div>
		<div class="input-group-append input-group-item">
			<input
				aria-label="Search for"
				class="form-control"
				placeholder="Search for..."
				type="text"
			/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<button
				aria-expanded="false"
				aria-haspopup="true"
				class="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				type="button"
			>
				Action<span class="inline-item inline-item-after"
					><svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom" /></svg
				></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="dropdown-item" href="#1">Another action</a></li>
				<li>
					<a class="dropdown-item" href="#1">Something else here</a>
				</li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Separated link</a></li>
			</ul>
		</div>
		<div class="input-group-append input-group-item">
			<input
				aria-label="Text input with dropdown button"
				class="form-control"
				type="text"
			/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input
				aria-label="Text input with segmented button dropdown"
				class="form-control"
				type="text"
			/>
		</div>
		<div
			class="input-group-prepend input-group-item input-group-item-shrink"
		>
			<button class="btn btn-secondary" type="button">Action</button>
		</div>
		<div
			class="input-group-append input-group-item input-group-item-shrink"
		>
			<button
				aria-expanded="false"
				aria-haspopup="true"
				class="btn btn-secondary dropdown-toggle"
				data-toggle="dropdown"
				type="button"
			>
				<span class="inline-item">
					<svg
						class="lexicon-icon lexicon-icon-caret-bottom"
						focusable="false"
						role="presentation"
					>
						<use href="/images/icons/icons.svg#caret-bottom" />
					</svg>
				</span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right">
				<li><a class="dropdown-item" href="#1">Action</a></li>
				<li><a class="dropdown-item" href="#1">Another action</a></li>
				<li>
					<a class="dropdown-item" href="#1">Something else here</a>
				</li>
				<li class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#1">Separated link</a></li>
			</ul>
		</div>
	</div>
</div>
```

### Multiple Addons(#css-multiple-addons)

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-prepend">
				<input class="form-control" placeholder="email-example" type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink input-group-prepend">
				<span class="input-group-text">@</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input class="form-control" placeholder="liferay" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<span class="input-group-text">.com</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-prepend">
			<input
				class="form-control"
				placeholder="email-example"
				type="text"
			/>
		</div>
		<div
			class="input-group-item input-group-item-shrink input-group-prepend"
		>
			<span class="input-group-text">@</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input class="form-control" placeholder="liferay" type="text" />
		</div>
		<div
			class="input-group-append input-group-item input-group-item-shrink"
		>
			<span class="input-group-text">.com</span>
		</div>
	</div>
</div>
```

### Separated Addons(#css-separated-addons)

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text" id="basicAddon1">@</span>
			</div>
			<div class="input-group-item">
				<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item">
				<input class="form-control" placeholder="Email" type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text">@</span>
			</div>
			<div class="input-group-item">
				<input class="form-control" placeholder="liferay" type="text"/>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text">.com</span>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text" id="basicAddon1">@</span>
		</div>
		<div class="input-group-item">
			<input
				aria-describedby="basicAddon1"
				aria-label="Username"
				class="form-control"
				placeholder="Username"
				type="text"
			/>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="input-group">
		<div class="input-group-item">
			<input class="form-control" placeholder="Email" type="text" />
		</div>
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text">@</span>
		</div>
		<div class="input-group-item">
			<input class="form-control" placeholder="liferay" type="text" />
		</div>
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text">.com</span>
		</div>
	</div>
</div>
```

### Mixed Addons(#css-mixed-addons)

<div class="sheet-example">
	<div class="form-group">
		<div class="input-group">
			<div class="input-group-item input-group-item-shrink">
				<span class="input-group-text" id="basicAddon1">@</span>
			</div>
			<div class="input-group-item input-group-prepend">
				<input aria-describedby="basicAddon1" aria-label="Username" class="form-control" placeholder="Username" type="text"/>
			</div>
			<div class="input-group-append input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="submit">Submit</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="input-group">
		<div class="input-group-item input-group-item-shrink">
			<span class="input-group-text" id="basicAddon1">@</span>
		</div>
		<div class="input-group-item input-group-prepend">
			<input
				aria-describedby="basicAddon1"
				aria-label="Username"
				class="form-control"
				placeholder="Username"
				type="text"
			/>
		</div>
		<div
			class="input-group-append input-group-item input-group-item-shrink"
		>
			<button class="btn btn-secondary" type="submit">Submit</button>
		</div>
	</div>
</div>
```

### Inset(#css-inset)

You can insert buttons and links into input group items with the following helper classes: `.input-group-inset`, `.input-group-inset-before`, `.input-group-inset-after`, `.input-group-inset-item`, `.input-group-inset-item-before`, and `.input-group-inset-item-after.` Use the -before classes to inset the button/link at the beginning of the input group, or use the -after classes to inset the button/link at the end of the input group.

<div class="clay-site-alert alert alert-warning">
	To retain the focus styles around the `.input-group-inset` component when a button or link inside is focused, add the focus class to the `.input-group-item`. Focus Box Shadows are only supported in `.input-group-inset` with `.input-group-item.focus`. `.input-prepend` and `.input-append` aren't supported with `.input-group-inset`.
</div>

<div class="sheet-example">
	<div class="form-group-autofit">
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text">
					<div class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-unstyled d-md-none" type="button">
							<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
						<button class="btn btn-unstyled d-none d-md-inline-block" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search"></use>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Search for" class="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text">
					<div class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#times-circle"></use>
							</svg>
						</button>
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search"></use>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Enter email" class="form-control input-group-inset input-group-inset-after" placeholder="Enter Email..." type="email">
					<div class="input-group-inset-item input-group-inset-item-after">
						<button class="btn btn-secondary" type="button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group-autofit">
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Search for" class="form-control input-group-inset input-group-inset-before" placeholder="Search..." type="text">
					<div class="input-group-inset-item input-group-inset-item-before">
						<button class="btn btn-unstyled" type="button">
							<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#search"></use>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group-item">
			<div class="input-group">
				<div class="input-group-item">
					<input aria-label="Enter email" class="form-control input-group-inset input-group-inset-before" placeholder="Enter Email..." type="email">
					<div class="input-group-inset-item input-group-inset-item-before">
						<button class="btn btn-secondary" type="button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="input-group-item">
		<input
			aria-label="Search for"
			class="form-control input-group-inset input-group-inset-after"
			placeholder="Search..."
			type="text"
		/>
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled d-md-none" type="button">
				<svg
					class="lexicon-icon lexicon-icon-times"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
			<button
				class="btn btn-unstyled d-none d-md-inline-block"
				type="button"
			>
				<svg
					class="lexicon-icon lexicon-icon-search"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input
			aria-label="Search for"
			class="form-control input-group-inset input-group-inset-after"
			placeholder="Search..."
			type="text"
		/>
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled" type="button">
				<svg
					class="lexicon-icon lexicon-icon-times-circle"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#times-circle" />
				</svg>
			</button>
			<button class="btn btn-unstyled" type="button">
				<svg
					class="lexicon-icon lexicon-icon-search"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input
			aria-label="Enter email"
			class="form-control input-group-inset input-group-inset-after"
			placeholder="Enter Email..."
			type="email"
		/>
		<div class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-secondary" type="button">Submit</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input
			aria-label="Search for"
			class="form-control input-group-inset input-group-inset-before"
			placeholder="Search..."
			type="text"
		/>
		<div class="input-group-inset-item input-group-inset-item-before">
			<button class="btn btn-unstyled" type="button">
				<svg
					class="lexicon-icon lexicon-icon-search"
					focusable="false"
					role="presentation"
				>
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
		</div>
	</div>
</div>

<div class="input-group">
	<div class="input-group-item">
		<input
			aria-label="Enter email"
			class="form-control input-group-inset input-group-inset-before"
			placeholder="Enter Email..."
			type="email"
		/>
		<div class="input-group-inset-item input-group-inset-item-before">
			<button class="btn btn-secondary" type="button">Submit</button>
		</div>
	</div>
</div>
```

### Password(#css-password)

A pattern for displaying the content inside a password input. Use `.input-text-label` inside `.input-group-inset-item` to display specific content for `.form-control[type="text"]` and `.input-password-label` for `.form-control[type="password"]`.

<div class="clay-site-alert alert alert-info">
	This requires custom Javascript to toggle the input type between text and password.
</div>

<div class="sheet">
    <div class="form-group">
        <label for="passwordFieldHidden">Password Field Hidden</label>
        <div class="input-group input-group-password">
            <div class="input-group-item">
                <input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret" />
                <div class="input-group-inset-item input-group-inset-item-after">
                    <button class="btn btn-unstyled" type="button">
                        <span class="input-text-label">
                            <svg class="lexicon-icon lexicon-icon-hidden" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#hidden" />
                            </svg>
						</span>
                        <span class="input-password-label">
                            <svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#view" />
                            </svg>
						</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="passwordFieldVisible">Password Field Visible</label>
        <div class="input-group input-group-password">
            <div class="input-group-item">
                <input aria-label="Password Visible" class="form-control input-group-inset input-group-inset-after" id="passwordFieldVisible" type="text" value="my-seekret" />
                <div class="input-group-inset-item input-group-inset-item-after">
                    <button class="btn btn-secondary" type="button">
                        <span class="input-password-label">Show</span>
                        <span class="input-text-label">Hide</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="disabled" for="passwordFieldDisabled">Password Field Disabled</label>
        <div class="input-group input-group-password">
            <div class="input-group-item">
                <input aria-label="Password Disabled" class="form-control input-group-inset input-group-inset-after" disabled="" id="passwordFieldDisabled" type="password" value="my-seekret" />
                <div class="input-group-inset-item input-group-inset-item-after">
                    <button class="btn btn-unstyled" disabled="" type="button">
                        <span class="input-password-label">
                            <svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#search" />
                            </svg>
						</span>
                        <span class="input-text-label">
                            <svg class="lexicon-icon lexicon-icon-view" focusable="false" role="presentation">
                                <use href="/images/icons/icons.svg#search" />
                            </svg>
						</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="form-group">
	<label for="passwordFieldHidden">Password Field Hidden</label>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input
				aria-label="Password Hidden"
				class="form-control input-group-inset input-group-inset-after"
				id="passwordFieldHidden"
				type="password"
				value="my-seekret"
			/>
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="button">
					<span class="input-text-label">
						<svg
							class="lexicon-icon lexicon-icon-hidden"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#hidden" />
						</svg>
					</span>
					<span class="input-password-label">
						<svg
							class="lexicon-icon lexicon-icon-view"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#view" />
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="passwordFieldVisible">Password Field Visible</label>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input
				aria-label="Password Visible"
				class="form-control input-group-inset input-group-inset-after"
				id="passwordFieldVisible"
				type="text"
				value="my-seekret"
			/>
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-secondary" type="button">
					<span class="input-password-label">Show</span>
					<span class="input-text-label">Hide</span>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<label class="disabled" for="passwordFieldDisabled"
		>Password Field Disabled</label
	>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input
				aria-label="Password Disabled"
				class="form-control input-group-inset input-group-inset-after"
				disabled=""
				id="passwordFieldDisabled"
				type="password"
				value="my-seekret"
			/>
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" disabled="" type="button">
					<span class="input-password-label">
						<svg
							class="lexicon-icon lexicon-icon-view"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#search" />
						</svg>
					</span>
					<span class="input-text-label">
						<svg
							class="lexicon-icon lexicon-icon-view"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#search" />
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
```
