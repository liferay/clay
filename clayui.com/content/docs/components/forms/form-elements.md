---
title: "Forms"
---

### Description

Forms obtain user data and transmit it to the system to either store the data, produce an action, or both.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/forms.html">Forms Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Layout

#### One single form

<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
	</div>
	<div class="sheet-section">
		<div class="form-group">
			<label for="basicInputTypeText">
				Screen Name
				<span class="reference-mark">
					<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeEmail">Email</label>
			<input class="form-control" id="basicInputTypeEmail" type="email"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Name</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Name" type="text"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Birthday</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text" value="01/01/1970"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Gender</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Gender" type="text"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Job Title</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Job Title" type="text"/>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">Secondary</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
	</div>
	<div class="sheet-section">
		<div class="form-group">
			<label for="basicInputTypeText">
				Screen Name
				<span class="reference-mark">
					<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#asterisk" />
					</svg>
				</span>
			</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeEmail">Email</label>
			<input class="form-control" id="basicInputTypeEmail" type="email"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Name</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Name" type="text"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Birthday</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text" value="01/01/1970"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Gender</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Gender" type="text"/>
		</div>
		<div class="form-group">
			<label for="basicInputTypeText">Job Title</label>
			<input class="form-control" id="basicInputTypeText" placeholder="Job Title" type="text"/>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">Secondary</button>
			</div>
		</div>
	</div>
</div>
```

#### Two columns form

<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
	</div>
	<div class="sheet-section">
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeText">
					Screen Name
					<span class="reference-mark">
						<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#asterisk" />
						</svg>
					</span>
				</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Birthday</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text" value="01/01/1970"/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeEmail">Email</label>
				<input class="form-control" id="basicInputTypeEmail" type="email"/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Gender</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Gender" type="text"/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeText">Name</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Name" type="text"/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Job Title</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Job Title" type="text"/>
			</div>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">Secondary</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet sheet-lg">
	<div class="sheet-header">
		<h2 class="sheet-title">Sheet Title</h2>
		<div class="sheet-text">Sheet text should be used for any kind of explanatory text. The Sheet Title and Sheet Text are contained inside a sheet-header.</div>
	</div>
	<div class="sheet-section">
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeText">
					Screen Name
					<span class="reference-mark">
						<svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#asterisk" />
						</svg>
					</span>
				</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text"/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Birthday</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Placeholder" type="text" value="01/01/1970"/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeEmail">Email</label>
				<input class="form-control" id="basicInputTypeEmail" type="email"/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Gender</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Gender" type="text"/>
			</div>
		</div>
		<div class="form-group-autofit">
			<div class="form-group-item">
				<label for="basicInputTypeText">Name</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Name" type="text"/>
			</div>
			<div class="form-group-item">
				<label for="basicInputTypeText">Job Title</label>
				<input class="form-control" id="basicInputTypeText" placeholder="Job Title" type="text"/>
			</div>
		</div>
	</div>
	<div class="sheet-footer sheet-footer-btn-block-sm-down">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="button">Primary</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">Secondary</button>
			</div>
		</div>
	</div>
</div>
```

