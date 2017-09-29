---
title: Form Elements (Validation)
description: Components
layout: "guide"
weight: 100
---

<article id="input-validation-states-non-html5">

### Input Validation States (Non HTML5)

<div class="clay-site-form-container">
	<div class="form-group">
		<label for="inputSuccess1">
			normal
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="successInput1" type="text">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-indicator">This is a form-feedback-indicator.</div>
		<div class="form-text">This is form-text.</div>
	</div>
	<div class="form-group has-success">
		<label for="inputSuccess1">
			has-success
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="successInput1" type="text">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-indicator">This is a form-feedback-indicator.</div>
		<div class="form-text">This is form-text.</div>
	</div>
	<div class="form-group has-warning">
		<label for="inputWarning1">
			has-warning
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputWarning1" type="text">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-indicator">This is a form-feedback-indicator.</div>
		<div class="form-text">This is form-text.</div>
	</div>
	<div class="form-group has-error">
		<label for="inputError1">
			has-error
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputError1" type="text">
		<div class="form-feedback-item">This is a form-feedback-item.</div>
		<div class="form-feedback-indicator">This is a form-feedback-indicator.</div>
		<div class="form-text">This is form-text.</div>
	</div>
</div>

```xml
<div class="form-group has-error">
	<label for="inputError1">
		has-error
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputError1" type="text">
	<div class="form-feedback-item">This is a form-feedback-item.</div>
	<div class="form-feedback-indicator">This is a form-feedback-indicator.</div>
	<div class="form-text">This is form-text.</div>
</div>
```

</article>


<article id="custom-checkbox-and-radio-validation-states">

### Custom Checkbox and Radio Validation States

<div class="clay-site-form-container">
	<div class="row">
		<div class="col-md-6">
			<div class="has-success">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">
							Custom Checkbox with Success
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
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">
							Custom Checkbox with Warning
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
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">
							Custom Checkbox with Error
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
								<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
							</svg>
						</span>
					</label>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="has-success">
				<div class="custom-control custom-radio">
					<label>
						<input class="custom-control-input" id="validationRadioCustom1" name="validationRadioCustom" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Custom Radio with Success</span>
					</label>
				</div>
			</div>
			<div class="has-warning">
				<div class="custom-control custom-radio">
					<label>
						<input class="custom-control-input" id="validationRadioCustom2" name="validationRadioCustom" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Custom Radio with Warning</span>
					</label>
				</div>
			</div>
			<div class="has-error">
				<div class="custom-control custom-radio">
					<label>
						<input class="custom-control-input" id="validationRadioCustom3" name="validationRadioCustom" type="radio">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">Custom Radio with Error</span>
					</label>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="has-error">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
			<span class="custom-control-indicator"></span>
			<span class="custom-control-description">
				Custom Checkbox with Error
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
				</svg>
			</span>
		</label>
	</div>
</div>

<div class="has-success">
	<div class="custom-control custom-radio">
		<label>
			<input class="custom-control-input" id="validationRadioCustom1" name="validationRadioCustom" type="radio">
			<span class="custom-control-indicator"></span>
			<span class="custom-control-description">Custom Radio with Success</span>
		</label>
	</div>
</div>
```

</article>


<article id="checkbox-and-radio-validation-states">

### Checkbox and Radio Validation States

<div class="clay-site-form-container">
	<div class="row">
		<div class="col-md-6">
			<div class="has-success">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" id="checkboxSuccess1" type="checkbox" value="option1">
						<span class="form-check-description">Checkbox with Success</span>
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</label>
				</div>
			</div>
			<div class="has-warning">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" id="checkboxWarning1" type="checkbox" value="option2">
						<span class="form-check-description">Checkbox with Warning</span>
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</label>
				</div>
			</div>
			<div class="has-error">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" id="checkboxError1" type="checkbox" value="option3">
						<span class="form-check-description">Checkbox with Error</span>
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</label>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="has-success">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" id="radioSuccess1" type="radio" value="option1">
						<span class="form-check-description">Radio with Success</span>
					</label>
				</div>
			</div>
			<div class="has-warning">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" id="radioWarning1" type="radio" value="option2">
						<span class="form-check-description">Radio with Warning</span>
					</label>
				</div>
			</div>
			<div class="has-error">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" id="radioError1" type="radio" value="option3">
						Radio with Error
					</label>
				</div>
			</div>
		</div>
	</div>
</div>

```xml
<div class="has-error">
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" id="checkboxError1" type="checkbox" value="option3">
			<span class="form-check-description">Checkbox with Error</span>
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
	</div>
</div>

<div class="has-success">
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" id="radioSuccess1" type="radio" value="option1">
			<span class="form-check-description">Radio with Success</span>
		</label>
	</div>
</div>
```

</article>


<article id="select-element-validation-states">

### Select Element Validation States

<div class="clay-site-form-container">
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
</div>

```xml
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

### Multiple Select Element Validation States

<div class="clay-site-form-container">
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
</div>

```xml
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


<article id="readonly-validation-states">

### Readonly Validation States

<div class="clay-site-form-container">
	<div class="has-success">
		<div class="form-group">
			<label for="readonlySuccess">Text Input (Read Only) with Success</label>
			<input class="form-control" id="readonlySuccess" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
		</div>
	</div>
	<div class="has-warning">
		<div class="form-group">
			<label for="readonlyWarning">Text Input (Read Only) with Warning</label>
			<input class="form-control" id="readonlyWarning" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
		</div>
	</div>
	<div class="has-error">
		<div class="form-group">
			<label for="readonlyError">Text Input (Read Only) with Error</label>
			<input class="form-control" id="readonlyError" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
		</div>
	</div>
	<div class="has-success">
		<div class="form-group">
			<label for="readonlyTextareaSuccess">Textarea (Read Only) with Success</label>
			<textarea class="form-control" id="readonlyTextareaSuccess" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
		</div>
	</div>
	<div class="has-warning">
		<div class="form-group">
			<label for="readonlyTextareaWarning">Textarea (Read Only) with Warning</label>
			<textarea class="form-control" id="readonlyTextareaWarning" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
		</div>
	</div>
	<div class="has-error">
		<div class="form-group">
			<label for="readonlyTextareaError">Textarea (Read Only) with Error</label>
			<textarea class="form-control" id="readonlyTextareaError" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
		</div>
	</div>
</div>

```xml
<div class="has-error">
	<div class="form-group">
		<label for="readonlyError">Text Input (Read Only) with Error</label>
		<input class="form-control" id="readonlyError" placeholder="Placeholder" readonly type="text" value="Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java.">
	</div>
</div>

<div class="has-success">
	<div class="form-group">
		<label for="readonlyTextareaSuccess">Textarea (Read Only) with Success</label>
		<textarea class="form-control" id="readonlyTextareaSuccess" placeholder="Placeholder" readonly>Plunger pot, extra siphon latte, as americano aromatic roast cultivar cup cup frappuccino. To go, strong, half and half foam single origin, cultivar affogato black grounds shop ut plunger pot. Con panna aroma, pumpkin spice to go, wings, aromatic single shot, aged single shot to go extraction java. Percolator americano at cultivar grinder est java percolator plunger pot shop con panna.</textarea>
	</div>
</div>
```

</article>


<article id="input-validation-states-html5">

### Input Validation States (HTML5)

> [https://getbootstrap.com/docs/4.0/components/forms/#validation](https://getbootstrap.com/docs/4.0/components/forms/#validation)

<div class="alert alert-warning">
	This component has limited styling options (valid and invalid) and requires very specific markup structure. Use the non HTML5 validation pattern if you require more freedom with your markup and styling options. 
</div>

<div class="clay-site-form-container">
	<form class="was-validated">
		<div class="form-group form-inline form-inline-autofit">
			<div class="form-inline-group">
				<label for="formValidationFirstName">
					First Name
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationFirstName" placeholder="First Name" required type="text" value="Space">
				<div class="invalid-feedback">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
					</svg>
					Please enter first name.
				</div>
			</div>
			<div class="form-inline-group">
				<label for="formValidationLastName">
					Last Name
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationLastName" placeholder="Last Name" required type="text" value="Program">
				<div class="invalid-feedback">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
					</svg>
					Please enter last name.
				</div>
			</div>
		</div>
		<div class="form-group form-inline form-inline-autofit">
			<div class="form-inline-group">
				<label for="formValidationCity">
					City
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationCity" placeholder="City" required type="text">
				<div class="invalid-feedback">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
					</svg>
					Please enter city.
				</div>
			</div>
			<div class="form-inline-group">
				<label for="formValidationState">
					State
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationState" placeholder="State" required type="text">
				<div class="invalid-feedback">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
					</svg>
					Please enter state.
				</div>
			</div>
			<div class="form-inline-group">
				<label for="formValidationZipCode">
					Zip Code
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
						<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
					</svg>
				</label>
				<input class="form-control" id="formValidationZipCode" placeholder="Zip" required type="text">
				<div class="invalid-feedback">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
					</svg>
					Please enter zip code.
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="formValidationPassword">
				Password
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
					<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
				</svg>
			</label>
			<input class="form-control" id="formValidationPassword" minlength="6" placeholder="Password" required type="password">
			<div class="invalid-feedback">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
					<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
				</svg>
				Use atleast 6 characters.
			</div>
		</div>
		<div class="form-group form-inline form-inline-autofit">
			<div class="form-inline-group">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" required type="checkbox" value="">
						Regular Checkbox
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</label>
				</div>
			</div>
			<div class="form-inline-group">
				<label class="custom-control custom-checkbox">
					<input class="custom-control-input" required type="checkbox">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">
						Custom Checkbox
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</span>
				</label>
			</div>
			<div class="form-inline-group">
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" name="regularRadio" required type="radio" value="">
						Regular Radio
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</label>
				</div>
			</div>
			<div class="form-inline-group">
				<label class="custom-control custom-radio">
					<input class="custom-control-input" name="regularRadio" required type="radio">
					<span class="custom-control-indicator"></span>
					<span class="custom-control-description">
						Custom Radio
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
							<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
						</svg>
					</span>
				</label>
			</div>
		</div>
	</form>
</div>

```xml
<form class="was-validated">
	<div class="form-group">
		<label for="formValidationFirstName">
			First Name
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="formValidationFirstName" placeholder="First Name" required type="text" value="Space">
		<div class="invalid-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
			</svg>
			Please enter first name.
		</div>
	</div>
</form>
```

</article>