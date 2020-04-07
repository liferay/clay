---
title: 'Input Autocomplete'
description: 'An autocomplete text field is an input that offers the user text suggestions while they type.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#example)
-   [Search Field](#search-field)
-   [Loading](#loading)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/text-input-variations/">Autocomplete and Search Field Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

## Example

Add the class `.autocomplete-dropdown-menu` to `dropdown-menu` to size the Dropdown Menu according to Lexicon Design specifications.

<div class="clay-site-alert alert alert-warning">
	This requires external javascript to populate and show/hide the <code class="gatsby-code-text">.dropdown-menu</code>.
</div>

<div class="sheet-example" style="height:18rem;">
	<div class="form-group">
		<div class="clay-autocomplete">
			<label for="autocompleteName1">Name</label>
			<div class="input-group">
				<div class="input-group-item">
					<div class="dropdown">
						<input class="form-control" id="autocompleteName1" type="text" value="Rob">
						<ul class="autocomplete-dropdown-menu dropdown-menu show">
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
					<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags. ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="autocompleteName1">Name</label>
	<div class="input-group">
		<div class="input-group-item">
			<div class="dropdown">
				<input
					class="form-control"
					id="autocompleteName1"
					type="text"
					value="Rob"
				/>
				<ul class="autocomplete-dropdown-menu dropdown-menu show">
					<li>
						<a class="dropdown-item" href="#1"
							>Rob<strong>ert Downey Jr.</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Rob<strong>ert Plant</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Rob<strong>ert Baratheon</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>Rob<strong>ert De Niro</strong></a
						>
					</li>
				</ul>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">
					You can use a comma to enter tags.
					ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual.
				</div>
			</div>
		</div>
	</div>
</div>
```

## Search Field

<div class="sheet-example" style="height:18rem;">
	<div class="form-group">
		<label for="autocompleteMarketplace1">Marketplace</label>
		<div class="input-group">
			<div class="input-group-item">
				<div class="dropdown">
					<input class="form-control input-group-inset input-group-inset-after" id="autocompleteMarketplace1" placeholder="Search for..." type="text" value="ele">
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
					<ul class="autocomplete-dropdown-menu dropdown-menu show">
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
	</div>
</div>

```html
<div class="form-group">
	<label for="autocompleteMarketplace1">Marketplace</label>
	<div class="input-group">
		<div class="input-group-item">
			<div class="dropdown">
				<input
					class="form-control input-group-inset input-group-inset-after"
					id="autocompleteMarketplace1"
					placeholder="Search for..."
					type="text"
					value="ele"
				/>
				<span
					class="input-group-inset-item input-group-inset-item-after"
				>
					<button class="btn btn-unstyled" type="submit">
						<svg
							class="lexicon-icon lexicon-icon-search"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#search" />
						</svg>
					</button>
					<button class="btn btn-unstyled" type="button">
						<svg
							class="lexicon-icon lexicon-icon-times"
							focusable="false"
							role="presentation"
						>
							<use href="/images/icons/icons.svg#times" />
						</svg>
					</button>
				</span>
				<ul class="autocomplete-dropdown-menu dropdown-menu show">
					<li>
						<a class="dropdown-item" href="#1"
							>ele<strong>ctric toothbrush</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>ele<strong>ctric kettle</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>ele<strong>ctric razor</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							>ele<strong>ctrodes for tents</strong></a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
```

## Loading

<div class="sheet-example" style="height:11rem;">
	<div class="form-group">
		<label for="autocompleteMarketplace2">Marketplace</label>
		<div class="input-group">
			<div class="input-group-item">
				<div class="dropdown">
					<input class="form-control input-group-inset input-group-inset-after" id="autocompleteMarketplace2" type="text" value="H">
					<span class="input-group-inset-item input-group-inset-item-after">
						<span class="inline-item inline-item-middle">
							<span class="loading-animation" role="presentation"></span>
						</span>
					</span>
					<ul class="autocomplete-dropdown-menu dropdown-menu show">
						<li>
							<span class="disabled dropdown-item">Loading...</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="autocompleteMarketplace2">Marketplace</label>
	<div class="input-group">
		<div class="input-group-item">
			<div class="dropdown">
				<input
					class="form-control input-group-inset input-group-inset-after"
					id="autocompleteMarketplace2"
					type="text"
					value="H"
				/>
				<span
					class="input-group-inset-item input-group-inset-item-after"
				>
					<span class="inline-item inline-item-middle">
						<span
							class="loading-animation"
							role="presentation"
						></span>
					</span>
				</span>
				<ul class="autocomplete-dropdown-menu dropdown-menu show">
					<li>
						<span class="disabled dropdown-item">Loading...</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
```
