---
title: "Text Input Variations"
---

### Description

A description of the search, autocomplete, labels input, date, numeric and password input variations.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Forms/text_input_variations.html">Text Input Variations</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="autocomplete-text-field">

### Autocomplete text field

<div class="sheet" style="height:255px;">
	<div class="dropdown-full form-group">
		<input class="form-control" type="text" value="Rob">
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

```html
<div class="dropdown-full form-group">
	<input class="form-control" type="text" value="Rob">
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

</article>

<article id="search-field">

### Search field

<div class="sheet" style="height:255px;">
	<div class="input-group">
		<div class="dropdown-full input-group-item">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele">
			<span class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="submit">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
						<use xlink:href="/images/icons/icons.svg#search" />
					</svg>
				</button>
				<button class="btn btn-unstyled" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/images/icons/icons.svg#times" />
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
		<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele">
		<span class="input-group-inset-item input-group-inset-item-after">
			<button class="btn btn-unstyled" type="submit">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
					<use xlink:href="/images/icons/icons.svg#search" />
				</svg>
			</button>
			<button class="btn btn-unstyled" type="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use xlink:href="/images/icons/icons.svg#times" />
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

</article>

<article id="labels-input-field">

### Labels Input Field

<div class="sheet">
	<div class="form-group">
		<label for="tagsField1">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<input class="form-control-inset" id="tagsField1" type="text">
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select</button>
			</div>
		</div>
	</div>
	<div class="form-group">
		<label for="tagsField2">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wallpaper</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wonderwall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">winterfell</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use xlink:href="/images/icons/icons.svg#times"></use>
								</svg>
							</button>
						</span>
					</span>
					<input class="form-control-inset" id="tagsField2" type="text" value="some value">
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="tagsField1">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="form-control form-control-tag-group">
				<input class="form-control-inset" id="tagsField1" type="text">
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select</button>
		</div>
	</div>
</div>

<div class="form-group">
	<label for="tagsField2">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="form-control form-control-tag-group">
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wallpaper</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wonderwall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">winterfell</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/images/icons/icons.svg#times"></use>
							</svg>
						</button>
					</span>
				</span>
				<input class="form-control-inset" id="tagsField2" type="text" value="some value">
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select</button>
		</div>
	</div>
</div>
```

</article>

<article id="numeric-field">

### Numeric field

<div class="sheet">
	<div class="form-group">
		<label for="basicInputTypeNumber">Amount</label>
		<input class="form-control" id="basicInputTypeNumber" type="number">
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeNumber">Amount</label>
	<input class="form-control" id="basicInputTypeNumber" type="number">
</div>
```

</article>

<article id="numeric-field">

### Password field

<p>A pattern for displaying the content inside a password input. Use <code>.input-text-label</code> inside <code>.input-group-inset-item</code> to display specific content for <code>.form-control[type="text"]</code> and <code>.input-password-label</code> for <code>.form-control[type="password"]</code>.</p>

<div class="sheet">
	<div class="form-group">
		<label for="passwordFieldHidden">Password</label>
		<div class="input-group input-group-password">
			<div class="input-group-item">
				<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret">
				<div class="input-group-inset-item input-group-inset-item-after">
					<button class="btn btn-unstyled" type="button">
						<span class="input-text-label">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-hidden">
								<use xlink:href="/images/icons/icons.svg#hidden" />
							</svg>
						</span>
						<span class="input-password-label">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-view">
								<use xlink:href="/images/icons/icons.svg#view" />
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
				<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="text" value="my-seekret">
				<div class="input-group-inset-item input-group-inset-item-after">
					<button class="btn btn-unstyled" type="button">
						<span class="input-text-label">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-hidden">
								<use xlink:href="/images/icons/icons.svg#hidden" />
							</svg>
						</span>
						<span class="input-password-label">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-view">
								<use xlink:href="/images/icons/icons.svg#view" />
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
			<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="password" value="my-seekret">
			<div class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="button">
					<span class="input-text-label">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-hidden">
							<use xlink:href="/images/icons/icons.svg#hidden" />
						</svg>
					</span>
					<span class="input-password-label">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-view">
							<use xlink:href="/images/icons/icons.svg#view" />
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
			<input aria-label="Password Hidden" class="form-control input-group-inset input-group-inset-after" id="passwordFieldHidden" type="text" value="my-seekret">
			...
		</div>
	</div>
</div>
```

</article>