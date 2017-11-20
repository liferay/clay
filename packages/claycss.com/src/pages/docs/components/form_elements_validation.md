---
title: Form Elements (Validation)
description: Components
layout: "guide"
weight: 100
---

<article id="input-validation-states-non-html5">

### Input Validation States (Non HTML5)

<div class="sheet">
	<div class="form-group">
		<label for="inputSuccess1">
			normal{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="successInput1" type="text">
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
	<div class="form-group has-success">
		<label for="inputSuccess1">
			has-success{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputSuccess1" type="text">
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
	<div class="form-group has-warning">
		<label for="inputWarning1">
			has-warning{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputWarning1" type="text">
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
	<div class="form-group has-error">
		<label for="inputError1">
			has-error{sp}
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
				<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
			</svg>
		</label>
		<input class="form-control" id="inputError1" type="text">
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

```text/html
<div class="form-group has-error">
	<label for="inputError1">
		has-error
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk reference-mark">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
	</label>
	<input class="form-control" id="inputError1" type="text">
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
```

</article>


<article id="custom-checkbox-and-radio-validation-states">

### Custom Checkbox and Radio Validation States

<div class="sheet">
	<div class="row">
		<div class="col-md-6">
			<div class="has-success">
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
						<span class="custom-control-description">
							Custom Checkbox with Success{sp}
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
							Custom Checkbox with Warning{sp}
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
							Custom Checkbox with Error{sp}
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

```text/html
<div class="has-error">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox">
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


<article id="select-element-validation-states">

### Select Element Validation States

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

<div class="sheet">
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

```text/html
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