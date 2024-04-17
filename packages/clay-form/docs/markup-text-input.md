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
