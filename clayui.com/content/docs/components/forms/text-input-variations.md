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

### Search field

<div class="sheet" style="height:255px;">
	<div class="input-group">
		<div class="dropdown-full input-group-item">
			<input class="form-control input-group-inset input-group-inset-after" placeholder="Search for..." type="text" value="ele"/>
			<span class="input-group-inset-item input-group-inset-item-after">
				<button class="btn btn-unstyled" type="submit">
					<span aria-label="icon-search" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
							<use href="/images/icons/icons.svg#search" />
						</svg>
					</span>
				</button>
				<button class="btn btn-unstyled" type="button">
					<span aria-label="icon-times" class="lexicon-icon-container" role="img">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
							<use href="/images/icons/icons.svg#times" />
						</svg>
					</span>
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
				<span aria-label="icon-search" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-search">
						<use href="/images/icons/icons.svg#search" />
					</svg>
				</span>
			</button>
			<button class="btn btn-unstyled" type="button">
				<span aria-label="icon-times" class="lexicon-icon-container" role="img">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use href="/images/icons/icons.svg#times" />
					</svg>
				</span>
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

### Labels Input Field

<div class="sheet">
	<div class="form-group">
		<label for="tagsField1">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="form-control form-control-tag-group">
					<input class="form-control-inset" id="tagsField1" type="text"/>
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
								<span aria-label="icon-times" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use href="/images/icons/icons.svg#times"></use>
									</svg>
								</span>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wallpaper</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<span aria-label="icon-times" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use href="/images/icons/icons.svg#times"></use>
									</svg>
								</span>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">wonderwall</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<span aria-label="icon-times" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use href="/images/icons/icons.svg#times"></use>
									</svg>
								</span>
							</button>
						</span>
					</span>
					<span class="label label-dismissible label-secondary">
						<span class="label-item label-item-expand">winterfell</span>
						<span class="label-item label-item-after">
							<button aria-label="Close" class="close" type="button">
								<span aria-label="icon-times" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
										<use href="/images/icons/icons.svg#times"></use>
									</svg>
								</span>
							</button>
						</span>
					</span>
					<input class="form-control-inset" id="tagsField2" type="text" value="some value"/>
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
				<input class="form-control-inset" id="tagsField1" type="text"/>
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
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</span>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wallpaper</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</span>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">wonderwall</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</span>
						</button>
					</span>
				</span>
				<span class="label label-dismissible label-secondary">
					<span class="label-item label-item-expand">winterfell</span>
					<span class="label-item label-item-after">
						<button aria-label="Close" class="close" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times"></use>
								</svg>
							</span>
						</button>
					</span>
				</span>
				<input class="form-control-inset" id="tagsField2" type="text" value="some value"/>
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
							<span aria-label="icon-hidden" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-hidden">
									<use href="/images/icons/icons.svg#hidden" />
								</svg>
							</span>
						</span>
						<span class="input-password-label">
							<span aria-label="icon-view" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-view">
									<use href="/images/icons/icons.svg#view" />
								</svg>
							</span>
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
							<span aria-label="icon-hidden" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-hidden">
									<use href="/images/icons/icons.svg#hidden" />
								</svg>
							</span>
						</span>
						<span class="input-password-label">
							<span aria-label="icon-view" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-view">
									<use href="/images/icons/icons.svg#view" />
								</svg>
							</span>
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
						<span aria-label="icon-hidden" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-hidden">
								<use href="/images/icons/icons.svg#hidden" />
							</svg>
						</span>
					</span>
					<span class="input-password-label">
						<span aria-label="icon-view" class="lexicon-icon-container" role="img">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-view">
								<use href="/images/icons/icons.svg#view" />
							</svg>
						</span>
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
