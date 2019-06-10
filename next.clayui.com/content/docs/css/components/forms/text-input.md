---
title: "Text Input"
description: "This section demonstrates the different text input types, including usage and validation states."
---

<div class="nav-toc">

- [Example](#example)
- [Disabled](#disabled)
- [Read only](#read-only)
- [Sizes](#sizes)
- [Textarea](#textarea)
- [Select menu](#select-menu)
- [Validations](#validations)
	- [Success](#success)
	- [Warning](#warning)
	- [Error](#error)

</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/text-input/">Text Input Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

## Example

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeText">Name</label>
		<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeText">Name</label>
	<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
</div>
```

## Disabled

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
	<input disabled class="form-control" id="basicInputTypeTextDisabled" placeholder="Placeholder" type="text"/>
</div>
```

## Read only

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
	<input readonly class="form-control" id="basicInputTypeTextReadOnly" type="text" value="59432"/>
</div>
```

## Sizes

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
```

## Textarea

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeTextarea">Textarea</label>
		<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeTextarea">Textarea</label>
	<textarea class="form-control" id="basicInputTypeTextarea" placeholder="Placeholder"></textarea>
</div>
```

## Select menu

<div class="sheet-example">
	<div class="form-group">
		<select class="form-control" id="regularSelectElement">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<select class="form-control" id="regularSelectElement">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>
```

<div class="sheet-example">
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

```html
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

## Validations

### Success

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
```

### Warning

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
```

### Error

<div class="sheet-example">
	<div class="form-group has-error">
		<label for="inputError1">
			has-error
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputError1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
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