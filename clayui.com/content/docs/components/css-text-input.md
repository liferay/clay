---
title: 'Input'
description: 'This section demonstrates the different text input types, including usage and validation states.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#example)
-   [Disabled](#disabled)
-   [Read only](#read-only)
-   [Sizes](#sizes)
-   [Textarea](#textarea)
-   [Select menu](#select-menu)
-   [Validations](#validations)
    -   [Success](#success)
    -   [Warning](#warning)
    -   [Error](#error)
-   [Groups](#css-markup-groups)
-   [Example](#example)
-   [Sizes](#sizes)
-   [Checkboxes and radios](#checkboxes-and-radios)
-   [Button addons](#button-addons)
-   [Multiple addons](#multiple-addons)
-   [Separated addons](#separated-addons)
-   [Mixed addons](#mixed-addons)
-   [Inset](#inset)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/text-input/">Text Input Pattern</a> and <a href="https://liferay.design/lexicon/core-components/forms/text-input-group/">Text Input Group Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
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
	<input
		class="form-control"
		id="basicInputTypeText"
		placeholder="Placeholder"
		type="text"
	/>
</div>
```

> Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

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
	<input
		disabled
		class="form-control"
		id="basicInputTypeTextDisabled"
		placeholder="Placeholder"
		type="text"
	/>
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
	<input
		readonly
		class="form-control"
		id="basicInputTypeTextReadOnly"
		type="text"
		value="59432"
	/>
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
	<textarea
		class="form-control"
		id="basicInputTypeTextarea"
		placeholder="Placeholder"
	></textarea>
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
	<label for="multipleSelectOptionsSelectElement"
		>Select Element with Multiple Select Options</label
	>
	<select
		class="form-control"
		id="multipleSelectOptionsSelectElement"
		multiple
	>
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

## Groups(#css-markup-groups)

<div class="clay-site-alert alert alert-warning">
	Clay Input Group markup deviates from Bootstrap 4's Input Groups.
</div>

### Example

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

### Sizes

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

### Checkboxes and radios

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

### Button addons

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

### Multiple addons

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

### Separated addons

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

### Mixed addons

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

### Inset

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

### Password

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
