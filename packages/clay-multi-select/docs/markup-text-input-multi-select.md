---
title: 'Multi Select'
description: 'Multi select is the field type that allows writing text to create “tags” that are represented in the shape of labels.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/forms/selector/'
mainTabURL: 'docs/components/multi-select.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Example](#css-example)
-   [Labels](#css-labels)
-   [Loading](#css-loading)
-   [Contenteditable Elements](#css-contenteditable-elements)
-   [Sizes](#css-clay-multi-select-sizes)
    -   [Small](#css-clay-multi-select-small)

</div>
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/examples/grid/LayoutGrids.html">WAI-ARIA</a> accessibility pratices for <b>grids</b> when writting your markup.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#aria_lh_search">WAI-ARIA</a> accessibility pratices for <b>search</b> when writting your markup.
</div>

## Example(#css-example)

<div class="clay-site-alert alert alert-warning">
	This requires external javascript to populate, add labels, and show/hide the <code class="gatsby-code-text">dropdown-menu</code>.
</div>

<div class="sheet-example">
	<div class="form-group">
		<label for="tagsField1">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="dropdown">
					<div class="form-control form-control-tag-group">
						<span class="autofit-row">
							<span class="autofit-col autofit-col-expand">
								<input class="form-control-inset" id="tagsField1" type="text" value="some value">
							</span>
						</span>
					</div>
					<ul class="autocomplete-dropdown-menu dropdown-menu">
						<li><a class="dropdown-item" href="#1"><strong>some value</strong></a></li>
						<li><a class="dropdown-item" href="#1"><strong>some value</strong> meal</a></li>
					</ul>
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
			<div class="dropdown">
				<div class="form-control form-control-tag-group">
					<span class="autofit-row">
						<span class="autofit-col autofit-col-expand">
							<input
								class="form-control-inset"
								id="tagsField1"
								type="text"
								value="some value"
							/>
						</span>
					</span>
				</div>
				<ul class="autocomplete-dropdown-menu dropdown-menu">
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong> meal</a
						>
					</li>
				</ul>
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

## Labels(#css-labels)

<div class="sheet-example">
	<div class="form-group">
		<label for="tagsField2">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="dropdown">
					<div class="form-control form-control-tag-group">
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-before">
								<span class="sticker">
									<span class="sticker-overlay">
										<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
									</span>
								</span>
							</span>
							<span class="label-item label-item-expand">wall</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-before">
								<span class="sticker">
									<span class="sticker-overlay">
										<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
									</span>
								</span>
							</span>
							<span class="label-item label-item-expand">wallpaper</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-before">
								<span class="sticker">
									<span class="sticker-overlay">
										<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
									</span>
								</span>
							</span>
							<span class="label-item label-item-expand">wonderwall</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-expand">winterfell</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-expand">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="autofit-row">
							<span class="autofit-col autofit-col-expand">
								<input class="form-control-inset" id="tagsField2" type="text" value="some value">
							</span>
						</span>
					</div>
					<ul class="autocomplete-dropdown-menu dropdown-menu">
						<li><a class="dropdown-item" href="#1"><strong>some value</strong></a></li>
						<li><a class="dropdown-item" href="#1"><strong>some value</strong> meal</a></li>
					</ul>
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
	<label for="tagsField2">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="dropdown">
				<div class="form-control form-control-tag-group">
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-before">
							<span class="sticker">
								<span class="sticker-overlay">
									<img
										alt="thumbnail"
										class="sticker-img"
										src="/images/thumbnail_dock.jpg"
									/>
								</span>
							</span>
						</span>
						<span class="label-item label-item-expand">wall</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-before">
							<span class="sticker">
								<span class="sticker-overlay">
									<img
										alt="thumbnail"
										class="sticker-img"
										src="/images/thumbnail_dock.jpg"
									/>
								</span>
							</span>
						</span>
						<span class="label-item label-item-expand"
							>wallpaper</span
						>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-before">
							<span class="sticker">
								<span class="sticker-overlay">
									<img
										alt="thumbnail"
										class="sticker-img"
										src="/images/thumbnail_dock.jpg"
									/>
								</span>
							</span>
						</span>
						<span class="label-item label-item-expand"
							>wonderwall</span
						>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-expand"
							>winterfell</span
						>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-expand"
							>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAre</span
						>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span class="autofit-row">
						<span class="autofit-col autofit-col-expand">
							<input
								class="form-control-inset"
								id="tagsField2"
								type="text"
								value="some value"
							/>
						</span>
					</span>
				</div>
				<ul class="autocomplete-dropdown-menu dropdown-menu">
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong> meal</a
						>
					</li>
				</ul>
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

## Loading(#css-loading)

<div class="sheet-example">
	<div class="form-group">
		<label for="tagsField2">Tags</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="dropdown">
					<div class="form-control form-control-tag-group">
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-before">
								<span class="sticker">
									<span class="sticker-overlay">
										<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
									</span>
								</span>
							</span>
							<span class="label-item label-item-expand">wall</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-before">
								<span class="sticker">
									<span class="sticker-overlay">
										<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
									</span>
								</span>
							</span>
							<span class="label-item label-item-expand">wallpaper</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="label label-dismissible label-secondary" tabindex="0">
							<span class="label-item label-item-before">
								<span class="sticker">
									<span class="sticker-overlay">
										<img alt="thumbnail" class="sticker-img" src="/images/thumbnail_dock.jpg">
									</span>
								</span>
							</span>
							<span class="label-item label-item-expand">wonderwall</span>
							<span class="label-item label-item-after">
								<button aria-label="Close" class="close" tabindex="-1" type="button">
									<svg class="lexicon-icon lexicon-icon-times reference-mark" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#times" />
									</svg>
								</button>
							</span>
						</span>
						<span class="autofit-row">
							<span class="autofit-col autofit-col-expand">
								<input class="form-control-inset" id="tagsField2" type="text" value="some value">
							</span>
							<span class="autofit-col">
								<span class="inline-item">
									<span class="loading-animation" role="presentation"></span>
								</span>
							</span>
						</span>
					</div>
					<ul class="autocomplete-dropdown-menu dropdown-menu show">
						<li><span class="disabled dropdown-item">Loading...</span></li>
					</ul>
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="button">Select All</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="tagsField2">Tags</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="dropdown">
				<div class="form-control form-control-tag-group">
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-before">
							<span class="sticker">
								<span class="sticker-overlay">
									<img
										alt="thumbnail"
										class="sticker-img"
										src="/images/thumbnail_dock.jpg"
									/>
								</span>
							</span>
						</span>
						<span class="label-item label-item-expand">wall</span>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-before">
							<span class="sticker">
								<span class="sticker-overlay">
									<img
										alt="thumbnail"
										class="sticker-img"
										src="/images/thumbnail_dock.jpg"
									/>
								</span>
							</span>
						</span>
						<span class="label-item label-item-expand"
							>wallpaper</span
						>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span
						class="label label-dismissible label-secondary"
						tabindex="0"
					>
						<span class="label-item label-item-before">
							<span class="sticker">
								<span class="sticker-overlay">
									<img
										alt="thumbnail"
										class="sticker-img"
										src="/images/thumbnail_dock.jpg"
									/>
								</span>
							</span>
						</span>
						<span class="label-item label-item-expand"
							>wonderwall</span
						>
						<span class="label-item label-item-after">
							<button
								aria-label="Close"
								class="close"
								tabindex="-1"
								type="button"
							>
								<svg
									class="lexicon-icon lexicon-icon-times reference-mark"
									focusable="false"
									role="presentation"
								>
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</span>
					</span>
					<span class="autofit-row">
						<span class="autofit-col autofit-col-expand">
							<input
								class="form-control-inset"
								id="tagsField2"
								type="text"
								value="some value"
							/>
						</span>
						<span class="autofit-col">
							<span class="inline-item">
								<span
									class="loading-animation"
									role="presentation"
								></span>
							</span>
						</span>
					</span>
				</div>
				<ul class="autocomplete-dropdown-menu dropdown-menu show">
					<li>
						<span class="disabled dropdown-item">Loading...</span>
					</li>
				</ul>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="button">Select All</button>
		</div>
	</div>
</div>
```

## Contenteditable Elements(#css-contenteditable-elements)

<div class="sheet-example">
	<div class="form-group">
		<label for="formControlContentEditable1">Label</label>
		<div class="input-group input-group-stacked-sm-down">
			<div class="input-group-item">
				<div class="dropdown">
					<div class="form-control form-control-tag-group">
						<span class="autofit-row">
							<span class="autofit-col autofit-col-expand">
								<textarea aria-hidden="true" class="form-control-hidden" id="formControlContentEditable1" tabindex="-1"></textarea>
								<div class="form-control-inset" contenteditable="true"></div>
							</span>
						</span>
					</div>
					<ul class="autocomplete-dropdown-menu dropdown-menu">
						<li><a class="dropdown-item" href="#1"><strong>some value</strong></a></li>
						<li><a class="dropdown-item" href="#1"><strong>some value</strong> meal</a></li>
					</ul>
				</div>
				<div class="form-feedback-group">
					<div class="form-text">You can use a comma to enter tags.</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<button class="btn btn-secondary" type="submit">Select</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="formControlContentEditable1">Label</label>
	<div class="input-group input-group-stacked-sm-down">
		<div class="input-group-item">
			<div class="dropdown">
				<div class="form-control form-control-tag-group">
					<span class="autofit-row">
						<span class="autofit-col autofit-col-expand">
							<textarea
								aria-hidden="true"
								class="form-control-hidden"
								id="formControlContentEditable1"
								tabindex="-1"
							></textarea>
							<div
								class="form-control-inset"
								contenteditable="true"
							></div>
						</span>
					</span>
				</div>
				<ul class="autocomplete-dropdown-menu dropdown-menu">
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong> meal</a
						>
					</li>
				</ul>
			</div>
			<div class="form-feedback-group">
				<div class="form-text">You can use a comma to enter tags.</div>
			</div>
		</div>
		<div class="input-group-item input-group-item-shrink">
			<button class="btn btn-secondary" type="submit">Select</button>
		</div>
	</div>
</div>
```

## Sizes(#css-clay-multi-select-sizes)

### Small(#css-clay-multi-select-small)

The modifier class `form-control-tag-group-sm` on `form-control-tag-group` will render a smaller version of Clay Multi Select.

<div class="sheet-example">
	<div class="form-group">
		<div class="dropdown">
			<div class="form-control form-control-tag-group form-control-tag-group-sm">
				<span class="autofit-row">
					<span class="autofit-col autofit-col-expand">
						<input class="form-control-inset" type="text" value="some value">
					</span>
				</span>
			</div>
			<ul class="autocomplete-dropdown-menu dropdown-menu show">
				<li><a class="dropdown-item" href="#1"><strong>some value</strong></a></li>
				<li><a class="dropdown-item" href="#1"><strong>some value</strong> meal</a></li>
			</ul>
		</div>
		<div class="form-feedback-group">
			<div class="form-text">You can use a comma to enter tags.</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<div class="dropdown">
		<div
			class="form-control form-control-tag-group form-control-tag-group-sm"
		>
			<span class="autofit-row">
				<span class="autofit-col autofit-col-expand">
					<input
						class="form-control-inset"
						type="text"
						value="some value"
					/>
				</span>
			</span>
		</div>
		<ul class="autocomplete-dropdown-menu dropdown-menu show">
			<li>
				<a class="dropdown-item" href="#1"
					><strong>some value</strong></a
				>
			</li>
			<li>
				<a class="dropdown-item" href="#1"
					><strong>some value</strong> meal</a
				>
			</li>
		</ul>
	</div>
	<div class="form-feedback-group">
		<div class="form-text">You can use a comma to enter tags.</div>
	</div>
</div>
```

For variations with buttons, the modifier classes `input-group-sm` or `form-group-sm` can be added to `input-group` or `form-group`, respectively.

<div class="sheet-example">
	<div class="form-group">
		<label for="tagsField3">Tags with input-group-sm</label>
		<div class="input-group input-group-stacked-sm-down input-group-sm">
			<div class="input-group-item">
				<div class="dropdown">
					<div class="form-control form-control-tag-group">
						<span class="autofit-row">
							<span class="autofit-col autofit-col-expand">
								<input class="form-control-inset" id="tagsField3" type="text" value="some value">
							</span>
						</span>
					</div>
					<ul class="autocomplete-dropdown-menu dropdown-menu">
						<li><a class="dropdown-item" href="#1"><strong>some value</strong></a></li>
						<li><a class="dropdown-item" href="#1"><strong>some value</strong> meal</a></li>
					</ul>
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
	<label for="tagsField3">Tags with input-group-sm</label>
	<div class="input-group input-group-stacked-sm-down input-group-sm">
		<div class="input-group-item">
			<div class="dropdown">
				<div class="form-control form-control-tag-group">
					<span class="autofit-row">
						<span class="autofit-col autofit-col-expand">
							<input
								class="form-control-inset"
								id="tagsField3"
								type="text"
								value="some value"
							/>
						</span>
					</span>
				</div>
				<ul class="autocomplete-dropdown-menu dropdown-menu">
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong> meal</a
						>
					</li>
				</ul>
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

<div class="sheet-example">
	<div class="form-group-sm">
		<label for="tagsField4">Tags with form-group-sm</label>
		<div class="input-group input-group-stacked-sm-down input-group-sm">
			<div class="input-group-item">
				<div class="dropdown">
					<div class="form-control form-control-tag-group">
						<span class="autofit-row">
							<span class="autofit-col autofit-col-expand">
								<input class="form-control-inset" id="tagsField4" type="text" value="some value">
							</span>
						</span>
					</div>
					<ul class="autocomplete-dropdown-menu dropdown-menu">
						<li><a class="dropdown-item" href="#1"><strong>some value</strong></a></li>
						<li><a class="dropdown-item" href="#1"><strong>some value</strong> meal</a></li>
					</ul>
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
<div class="form-group-sm">
	<label for="tagsField4">Tags with form-group-sm</label>
	<div class="input-group input-group-stacked-sm-down input-group-sm">
		<div class="input-group-item">
			<div class="dropdown">
				<div class="form-control form-control-tag-group">
					<span class="autofit-row">
						<span class="autofit-col autofit-col-expand">
							<input
								class="form-control-inset"
								id="tagsField4"
								type="text"
								value="some value"
							/>
						</span>
					</span>
				</div>
				<ul class="autocomplete-dropdown-menu dropdown-menu">
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong></a
						>
					</li>
					<li>
						<a class="dropdown-item" href="#1"
							><strong>some value</strong> meal</a
						>
					</li>
				</ul>
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
