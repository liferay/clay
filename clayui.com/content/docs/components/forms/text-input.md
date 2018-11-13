---
title: "Text Input"
---

### Description

This section demonstrates the different text input types, including usage and validation states.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/text_input.html">Text Input Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Text Field

<div class="sheet">
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

### States

#### Default

<div class="sheet">
	<div class="form-group">
		<label for="basicInputTypeText">Name</label>
		<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
	</div>
	<div class="form-group">
		<label for="basicInputTypeEmail">Email</label>
		<input class="form-control" id="basicInputTypeEmail" placeholder="name@example.com" type="text"/>
	</div>
	<div class="form-group">
		<label for="basicInputTypePassword">Password</label>
		<input class="form-control" id="basicInputTypePassword" placeholder="Enter password" type="text"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeText">Name</label>
	<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
</div>
<div class="form-group">
	<label for="basicInputTypeEmail">Email</label>
	<input class="form-control" id="basicInputTypeEmail" placeholder="name@example.com" type="text"/>
</div>
<div class="form-group">
	<label for="basicInputTypePassword">Password</label>
	<input class="form-control" id="basicInputTypePassword" placeholder="Enter password" type="text"/>
</div>
```

#### Disabled

<div class="sheet">
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

#### Read only

<div class="sheet">
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

### Validations

#### Success

<div class="sheet">
	<div class="form-group has-success">
		<label for="inputSuccess1">
			has-success
			<span aria-label="icon-asterisk" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
		<input class="form-control" id="inputSuccess1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
							<use href="/images/icons/icons.svg#check-circle-full" />
						</svg>
					</span>
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
		<span aria-label="icon-asterisk" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</span>
	</label>
	<input class="form-control" id="inputSuccess1" type="text"/>
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
						<use href="/images/icons/icons.svg#check-circle-full" />
					</svg>
				</span>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

#### Warning

<div class="sheet">
	<div class="form-group has-warning">
		<label for="inputWarning1">
			has-warning
			<span aria-label="icon-asterisk" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
		<input class="form-control" id="inputWarning1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
							<use href="/images/icons/icons.svg#warning-full" />
						</svg>
					</span>
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
		<span aria-label="icon-asterisk" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</span>
	</label>
	<input class="form-control" id="inputWarning1" type="text"/>
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
						<use href="/images/icons/icons.svg#warning-full" />
					</svg>
				</span>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

#### Error

<div class="sheet">
	<div class="form-group has-error">
		<label for="inputError1">
			has-error
			<span aria-label="icon-asterisk" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
		<input class="form-control" id="inputError1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
							<use href="/images/icons/icons.svg#exclamation-full" />
						</svg>
					</span>
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
		<span aria-label="icon-asterisk" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</span>
	</label>
	<input class="form-control" id="inputError1" type="text"/>
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use href="/images/icons/icons.svg#exclamation-full" />
					</svg>
				</span>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

### Textarea

<div class="sheet">
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
