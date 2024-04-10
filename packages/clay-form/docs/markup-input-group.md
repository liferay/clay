---
title: 'Input Group'
description: 'A Text Input with added elements that provide a more complex input structure.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/forms/input-group/'
mainTabURL: 'docs/components/input-group.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Groups](#css-markup-groups)
    -   [Example](#css-markup-groups-example)
    -   [Sizes](#css-markup-groups-sizes)
    -   [Checkboxes and Radios](#css-checkboxes-and-radios)
    -   [Button Addons](#css-button-addons)
    -   [Multiple Addons](#css-multiple-addons)
    -   [Separated Addons](#css-separated-addons)
    -   [Mixed Addons](#css-mixed-addons)
    -   [Inset](#css-inset)

</div>
</div>

## Groups(#css-markup-groups)

<div class="clay-site-alert alert alert-warning">
	Clay Input Group markup deviates from Bootstrap 4's Input Groups.
</div>

### Example(#css-markup-groups-example)

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

### Sizes(#css-markup-groups-sizes)

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

### Checkboxes and Radios(#css-checkboxes-and-radios)

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

### Button Addons(#css-button-addons)

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

### Multiple Addons(#css-multiple-addons)

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

### Separated Addons(#css-separated-addons)

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

### Mixed Addons(#css-mixed-addons)

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

### Inset(#css-inset)

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

### Password(#css-password)

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
