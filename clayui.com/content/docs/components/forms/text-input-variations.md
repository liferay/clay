---
title: "Text Input Variations"
---

### Description

This section demonstrates the search, autocomplete, labels input, date, numeric, and password input variations.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/text_input_variations.html">Text Input Variations</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Autocomplete text field

<div class="sheet" style="height:255px;">
	<div class="dropdown-full form-group">
		<input class="form-control" type="text" value="Rob"/>
		<ul class="dropdown-menu show">
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert Downey Jr.</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert Plant</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert Baratheon</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">Rob<strong>ert De Niro</strong></a>
			</li>
		</ul>
	</div>
</div>

```soy
{call ClayAutocomplete.render}
	{param dataSource: [
		'Robert Downey',
		'Robert Plant',
		'Robert Baratheon',
		'Robert De niro'
	] /}
	{param inputValue: 'Rob' /}
{/call}
```
```html
<clay-autocomplete
	dataSource="['Robert Downey', 'Robert Plant', 'Robert Baratheon', 'Robert De niro']"
	inputValue="Rob"
>
</clay-autocomplete>
```
```html
<div class="dropdown-full form-group">
	<input class="form-control" type="text" value="Rob"/>
	<ul class="dropdown-menu show">
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert Downey Jr.</strong></a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert Plant</strong></a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert Baratheon</strong></a>
		</li>
		<li>
			<a class="dropdown-item" href="#1">Rob<strong>ert De Niro</strong></a>
		</li>
	</ul>
</div>
```

#### API

<div>
	[APITable "clay-autocomplete/src/ClayAutocomplete.js"]
</div>

### Search field

<div class="sheet" style="height:255px;">
	<div class="input-group">
		<div class="dropdown-full input-group-item">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele"/>
			<span class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="submit">
					<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#search" />
					</svg>
				</button>
				<button class="btn btn-unstyled" type="button">
					<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#times" />
					</svg>
				</button>
			</span>
			<ul class="dropdown-menu show">
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctric toothbrush</strong></a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctric kettle</strong></a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctric razor</strong></a>
				</li>
				<li>
					<a class="dropdown-item" href="#1">ele<strong>ctrodes for tents</strong></a>
				</li>
			</ul>
		</div>
	</div>
</div>

```html
<div class="input-group">
	<div class="dropdown-full input-group-item">
		<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele"/>
		<span class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled" type="submit">
				<svg class="lexicon-icon lexicon-icon-search" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#search" />
				</svg>
			</button>
			<button class="btn btn-unstyled" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</span>
		<ul class="dropdown-menu show">
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctric toothbrush</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctric kettle</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctric razor</strong></a>
			</li>
			<li>
				<a class="dropdown-item" href="#1">ele<strong>ctrodes for tents</strong></a>
			</li>
		</ul>
	</div>
</div>
```

### Numeric field

<div class="sheet">
	<div class="form-group">
		<label for="basicInputTypeNumber">Amount</label>
		<input class="form-control" id="basicInputTypeNumber" type="number"/>
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeNumber">Amount</label>
	<input class="form-control" id="basicInputTypeNumber" type="number"/>
</div>
```

### Password field

<p>A pattern for displaying the content inside a password input. Use <code>.input-text-label</code> inside <code>.input-group-inset-item</code> to display specific content for <code>.form-control[type="text"]</code> and <code>.input-password-label</code> for <code>.form-control[type="password"]</code>.</p>

<div class="sheet">
	<div class="form-group">
		<label for="passwordFieldHidden">Password</label>
		<div class="input-group input-group-password">
			<div class="input-group-item">
				<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret"/>
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
		<label for="passwordFieldHidden">Password</label>
		<div class="input-group input-group-password">
			<div class="input-group-item">
				<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="text" value="my-seekret"/>
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
</div>

```html
<div class="form-group">
	<label for="passwordFieldHidden">Password</label>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret"/>
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
	<label for="passwordFieldHidden">Password</label>
	<div class="input-group input-group-password">
		<div class="input-group-item">
			<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="text" value="my-seekret"/>
			...
		</div>
	</div>
</div>
```
