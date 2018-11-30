---
title: "Form Elements (Validation)"
---

### Input Validation States (Non HTML5)

<div class="sheet">
	<div class="form-group">
		<label for="inputNormal1">
			normal
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputNormal1" type="text"/>
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#question-circle-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
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
						`<use href="/images/icons/icons.svg#warning-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
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

```html
<div class="form-group">
	<label for="inputNormal1">
		normal
		<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputNormal1" type="text"/>
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#question-circle-full" />
				</svg>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>

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
```

### Custom Checkbox and Radio Validation States

<div class="sheet">
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<div class="has-success">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Checkbox with Success</span>
								<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-warning">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Checkbox with Warning</span>
								<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-error">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Checkbox with Error</span>
								<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="form-group">
				<div class="has-success">
					<div class="custom-control custom-radio">
						<label>
							<input class="custom-control-input" id="validationRadioCustom1" name="validationRadioCustom" type="radio"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Radio with Success</span>
								<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-warning">
					<div class="custom-control custom-radio">
						<label>
							<input class="custom-control-input" id="validationRadioCustom2" name="validationRadioCustom" type="radio"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Radio with Warning</span>
								<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-error">
					<div class="custom-control custom-radio">
						<label>
							<input class="custom-control-input" id="validationRadioCustom3" name="validationRadioCustom" type="radio"/>
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Radio with Error</span>
								<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="has-success">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Checkbox with Success</span>
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-warning">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Checkbox with Warning</span>
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-error">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Checkbox with Error</span>
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
</div>

<div class="form-group">
	<div class="has-success">
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="validationRadioCustom1" name="validationRadioCustom" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Radio with Success</span>
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-warning">
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="validationRadioCustom2" name="validationRadioCustom" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Radio with Warning</span>
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-error">
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="validationRadioCustom3" name="validationRadioCustom" type="radio"/>
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Radio with Error</span>
					<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
</div>
```

### Select Element Validation States

<div class="sheet">
	<div class="has-success">
		<div class="form-group">
			<label for="selectElementSuccess">
				Select Element with Success
				<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<select class="form-control" id="selectElementSuccess">
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
	</div>
	<div class="has-warning">
		<div class="form-group">
			<label for="selectElementWarning">
				Select Box with Warning
				<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<select class="form-control" id="selectElementWarning">
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
	</div>
	<div class="has-error">
		<div class="form-group">
			<label for="selectElementError">
				Select Box with Error
				<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<select class="form-control" id="selectElementError">
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
	</div>
</div>

```html
<div class="has-success">
	<div class="form-group">
		<label for="selectElementSuccess">
			Select Element with Success
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<select class="form-control" id="selectElementSuccess">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>
<div class="has-warning">
	<div class="form-group">
		<label for="selectElementWarning">
			Select Box with Warning
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<select class="form-control" id="selectElementWarning">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>
<div class="has-error">
	<div class="form-group">
		<label for="selectElementError">
			Select Box with Error
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<select class="form-control" id="selectElementError">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>
```

### Multiple Select Element Validation States

<div class="sheet">
	<div class="has-success">
		<div class="form-group">
			<label for="multipleSelectElementSuccess">
				Multiple Select Element with Success
				<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<select class="form-control" id="multipleSelectElementSuccess" multiple>
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
	</div>
	<div class="has-warning">
		<div class="form-group">
			<label for="multipleSelectElementWarning">
				Multiple Select Element with Warning
				<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<select class="form-control" id="multipleSelectElementWarning" multiple>
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
	</div>
	<div class="has-error">
		<div class="form-group">
			<label for="multipleSelectElementError">
				Multiple Select Element with Error
				<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#asterisk" />
				</svg>
			</label>
			<select class="form-control" id="multipleSelectElementError" multiple>
				<option>Sample 1</option>
				<option>Sample 2</option>
				<option>Sample 3</option>
				<option>Sample 4</option>
			</select>
		</div>
	</div>
</div>

```html
<div class="has-success">
	<div class="form-group">
		<label for="multipleSelectElementSuccess">
			Multiple Select Element with Success
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<select class="form-control" id="multipleSelectElementSuccess" multiple>
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

<div class="has-warning">
	<div class="form-group">
		<label for="multipleSelectElementWarning">
			Multiple Select Element with Warning
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<select class="form-control" id="multipleSelectElementWarning" multiple>
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

<div class="has-error">
	<div class="form-group">
		<label for="multipleSelectElementError">
			Multiple Select Element with Error
			<svg class="lexicon-icon lexicon-icon-asterisk reference-mark" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#asterisk" />
			</svg>
		</label>
		<select class="form-control" id="multipleSelectElementError" multiple>
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>
```
