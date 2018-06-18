---
title: Form Elements (Validation)
path: "/docs/form-elements-validation.html"
---

### Description

Forms have inline validation. All form fields that can be checked against a set of rules while filling them must show success or error state to the user.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/forms.html">Form Elements (Validation) Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="input-validation-states-non-html5">
<h3 class="component-title">
	<a href="#input-validation-states-non-html5">Input Validation States (Non HTML5)</a>
</h3>

<div class="sheet">
	<div class="form-group">
		<label for="inputNormal1">
			normal{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputNormal1" type="text">
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
						<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
	<div class="form-group has-success">
		<label for="inputSuccess1">
			has-success{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputSuccess1" type="text">
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
						<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
	<div class="form-group has-warning">
		<label for="inputWarning1">
			has-warning{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputWarning1" type="text">
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
						`<use xlink:href="/vendor/lexicon/icons.svg#warning-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
	<div class="form-group has-error">
		<label for="inputError1">
			has-error{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputError1" type="text">
		<div class="form-feedback-group">
			<div class="form-feedback-item">This is a form-feedback-item.</div>
			<div class="form-feedback-item">
				<span class="form-feedback-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
					</svg>
				</span>
				This is a form-feedback-indicator.
			</div>
			<div class="form-text">This is form-text.</div>
		</div>
	</div>
</div>

```text/html
<div class="form-group">
	<label for="inputNormal1">
		normal
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputNormal1" type="text">
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
					<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full" />
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
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputSuccess1" type="text">
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
					<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full" />
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
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputWarning1" type="text">
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
					<use xlink:href="/vendor/lexicon/icons.svg#warning-full" />
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
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputError1" type="text">
	<div class="form-feedback-group">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-item">
			<span class="form-feedback-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
					<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
				</svg>
			</span>
			This is a form-feedback-indicator.
		</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>
```

</article>


<article id="custom-checkbox-and-radio-validation-states">
<h3 class="component-title">
	<a href="#custom-checkbox-and-radio-validation-states">Custom Checkbox and Radio Validation States</a>
</h3>

<div class="sheet">
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<div class="has-success">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Checkbox with Success{sp}</span>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
									<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-warning">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Checkbox with Warning{sp}</span>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
									<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-error">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Checkbox with Error{sp}</span>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
									<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
							<input class="custom-control-input" id="validationRadioCustom1" name="validationRadioCustom" type="radio">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Radio with Success{sp}</span>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
									<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-warning">
					<div class="custom-control custom-radio">
						<label>
							<input class="custom-control-input" id="validationRadioCustom2" name="validationRadioCustom" type="radio">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Radio with Warning{sp}</span>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
									<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
				<div class="has-error">
					<div class="custom-control custom-radio">
						<label>
							<input class="custom-control-input" id="validationRadioCustom3" name="validationRadioCustom" type="radio">
							<span class="custom-control-label">
								<span class="custom-control-label-text">Custom Radio with Error{sp}</span>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
									<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
								</svg>
							</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="form-group">
	<div class="has-success">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Checkbox with Success</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-warning">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="custom-control-input" type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Checkbox with Warning</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-error">
		<div class="custom-control custom-checkbox">
			<label>
				<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Checkbox with Error</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
				<input class="custom-control-input" id="validationRadioCustom1" name="validationRadioCustom" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Radio with Success</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-warning">
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="validationRadioCustom2" name="validationRadioCustom" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Radio with Warning</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
	<div class="has-error">
		<div class="custom-control custom-radio">
			<label>
				<input class="custom-control-input" id="validationRadioCustom3" name="validationRadioCustom" type="radio">
				<span class="custom-control-label">
					<span class="custom-control-label-text">Custom Radio with Error</span>
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
		</div>
	</div>
</div>
```

</article>


<article id="select-element-validation-states">
<h3 class="component-title">
	<a href="#select-element-validation-states">Select Element Validation States</a>
</h3>

<div class="sheet">
	<div class="has-success">
		<div class="form-group">
			<label for="selectElementSuccess">
				Select Element with Success{sp}
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
				Select Box with Warning{sp}
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
				Select Box with Error{sp}
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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

```text/html
<div class="has-success">
	<div class="form-group">
		<label for="selectElementSuccess">
			Select Element with Success
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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

</article>


<article id="multiple-select-element-validation-states">
<h3 class="component-title">
	<a href="#multiple-select-element-validation-states">Multiple Select Element Validation States</a>
</h3>

<div class="sheet">
	<div class="has-success">
		<div class="form-group">
			<label for="multipleSelectElementSuccess">
				Multiple Select Element with Success{sp}
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
				Multiple Select Element with Warning{sp}
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
				Multiple Select Element with Error{sp}
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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

```text/html
<div class="has-success">
	<div class="form-group">
		<label for="multipleSelectElementSuccess">
			Multiple Select Element with Success
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
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

</article>
