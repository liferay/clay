---
title: 'Autofit'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Row](#row)
-   [Spacing](#spacing)
-   [Row Vertical Alignment](#row-vertical-alignment)
-   [Float](#float)
-   [Float End](#float-end)
-   [Float with Autofit Col End](#float-with-autofit-col-end)
-   [Nesting Autofit Rows](#nesting-autofit-rows)

</div>
</div>

## Row

Make content expand to fill remaining space or create equally spaced content with the `.autofit-row`, `.autofit-col`, and `.autofit-col-expand` classes.

<div class="clay-site-alert alert alert-warning">
	<strong class="lead">Warning</strong>
	<code>.autofit-row</code>, <code>.autofit-col</code>, <code>.autofit-col-expand</code> shouldn't be used for laying out site pages, rather it's most useful for small chunks of content inside other components (e.g. cards or list-groups).
</div>

<div class="clay-site-alert alert alert-warning">
	<strong class="lead">Warning</strong>
	Direct descendants of <code>.autofit-col</code> are <code>flex-direction: column;</code> (IE 10-11 workaround because they don't respect min/max width or min/max height in flex items) become block level elements by default, see <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">https://www.w3.org/TR/css-flexbox-1/#flex-items</a>. If you want to display content inside <code>.autofit-col</code> using <code>floats</code>, <code>inline</code>, or <code>inline-block</code>, wrap the content with <code>.autofit-section</code>.
</div>

<div class="sheet-example">
	<div class="autofit-row autofit-padded">
		<div class="autofit-col">
			<div class="form-check">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" value=""/>
				</label>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand">
			<div class="autofit-section">
				<h6>
					<span class="text-truncate-inline">
						<span class="text-truncate">
							Alberto Calvo, modified 2 hours ago.
						</span>
					</span>
				</h6>
				<p>
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
					</span>
				</p>
			</div>
		</div>
		<div class="autofit-col">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<ul class="dropdown-menu dropdown-menu-right">
					<li class="dropdown-header">Dropdown Header</li>
					<li><a class="dropdown-item" href="#1">Action 1</a></li>
					<li><a class="dropdown-item" href="#1">Action 2</a></li>
					<li><a class="dropdown-item" href="#1">Action 3</a></li>
					<li><a class="dropdown-item" href="#1">Action 4</a></li>
					<li><a class="dropdown-item" href="#1">Action 5</a></li>
					<li><a class="dropdown-item" href="#1">Action 6</a></li>
					<li><a class="dropdown-item" href="#1">Action 7</a></li>
					<li><a class="dropdown-item" href="#1">Action 8</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

```html
<div class="autofit-row autofit-padded">
	<div class="autofit-col">
		...
	</div>
	<div class="autofit-col autofit-col-expand">
		<div class="autofit-section">
			...
		</div>
	</div>
	<div class="autofit-col">
		...
	</div>
</div>
```

<div class="sheet-example">
	<div class="autofit-row autofit-padded">
		<div class="autofit-col autofit-col-expand" style="background-color: #A7A9BC;">
			<div class="autofit-section">
				<h6>
					<span class="text-truncate-inline">
						<span class="text-truncate">Alberto Calvo, modified 2 hours ago.</span>
					</span>
				</h6>
				<p>
					<a href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
				</p>
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
				<span class="label label-info">
					<span class="label-item label-item-expand">Pending</span>
				</span>
				<span class="label label-danger">
					<span class="label-item label-item-expand">Rejected</span>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand" style="background-color: #CDCED9;">
			<div class="autofit-section">
				<h6>
					<span class="text-truncate-inline">
						<span class="text-truncate">
						Alberto Calvo, modified 2 hours ago.
						</span>
					</span>
				</h6>
				<p>
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
					</span>
				</p>
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
				<span class="label label-info">
					<span class="label-item label-item-expand">Pending</span>
				</span>
				<span class="label label-danger">
					<span class="label-item label-item-expand">Rejected</span>
				</span>
			</div>
		</div>
		<div class="autofit-col autofit-col-expand" style="background-color: #E7E7ED;">
			<div class="autofit-section">
				<h6>
					<span class="text-truncate-inline">
						<span class="text-truncate">
							Alberto Calvo, modified 2 hours ago.
						</span>
					</span>
				</h6>
				<p>
					<span class="text-truncate-inline">
						<a class="text-truncate" href="#1">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
					</span>
				</p>
				<span class="label label-success">
					<span class="label-item label-item-expand">Approved</span>
				</span>
				<span class="label label-info">
					<span class="label-item label-item-expand">Pending</span>
				</span>
				<span class="label label-danger">
					<span class="label-item label-item-expand">Rejected</span>
				</span>
			</div>
		</div>
		<div class="autofit-col" style="background-color: #F7F8F9;">
			<div class="dropdown dropdown-action">
				<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
					<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
						<use href="/images/icons/icons.svg#ellipsis-v" />
					</svg>
				</a>
				<ul class="dropdown-menu dropdown-menu-right">
					<li class="dropdown-header">Dropdown Header</li>
					<li><a class="dropdown-item" href="#1">Action 1</a></li>
					<li><a class="dropdown-item" href="#1">Action 2</a></li>
					<li><a class="dropdown-item" href="#1">Action 3</a></li>
					<li><a class="dropdown-item" href="#1">Action 4</a></li>
					<li><a class="dropdown-item" href="#1">Action 5</a></li>
					<li><a class="dropdown-item" href="#1">Action 6</a></li>
					<li><a class="dropdown-item" href="#1">Action 7</a></li>
					<li><a class="dropdown-item" href="#1">Action 8</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

```html
<div class="autofit-row autofit-padded">
	<div class="autofit-col autofit-col-expand">
		<div class="autofit-section">
			...
		</div>
	</div>
	<div class="autofit-col autofit-col-expand">
		<div class="autofit-section">
			...
		</div>
	</div>
	<div class="autofit-col autofit-col-expand">
		<div class="autofit-section">
			...
		</div>
	</div>
	<div class="autofit-col">
		...
	</div>
</div>
```

<div class="sheet-example">
	<div class="card">
		<div class="card-body">
			<div class="autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col autofit-col-expand">
					<h2 class="component-title" style="font-size:1.25rem;font-weight:700;">
						ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
					</h2>
					<div>Sept 25 - 3 Views</div>
				</div>
				<div class="autofit-col">
					<button class="btn btn-monospaced btn-outline-primary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item">
							<svg class="lexicon-icon lexicon-icon-pencil" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#pencil" />
							</svg>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="card">
	<div class="card-body">
		<div class="autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col autofit-col-expand">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
	</div>
</div>
```

## Spacing

The `autofit-padded` class should be added to `autofit-row` to give padding to all `autofit-col`s that are direct children of `autofit-row`.

The `autofit-padded-no-gutters-x` class gives padding to all `autofit-col`s that are direct children of `autofit-row`. It has negative margins on the left and right to offset the padding (similar to Bootstrap's `row` class).

The `autofit-padded-no-gutters-y` class gives padding to all `autofit-col`s that are direct children of `autofit-row`. It has negative margins on the top and bottom to offset the padding (Generally used if nesting `.autofit-row`).

The `autofit-padded-no-gutters` class gives padding to all `autofit-col`s that are direct children of `autofit-row`. It has negative margins on the top, right, bottom, and left to offset the padding (Generally used if nesting `.autofit-row`).

# Row Vertical Alignment

Autofit Row vertically aligns to the top by default.

The `autofit-row-center` class vertically aligns items in `autofit-row` to the middle.

The `autofit-row-end` class vertically aligns items in `autofit-row` to the bottom.

## Float

The component `autofit-float` or `.autofit-float-{sm|md}-down` simulates the behavior of floated elements in `.autofit-row`. Items that break to a new line will be aligned to the left.

This pattern provides the benefit of aligning content via flexbox without losing the behavior of floated elements at the expense of extra markup.

<div class="sheet-example">
	<div class="card">
		<div class="card-body">
			<div class="autofit-float-sm-down autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col autofit-col-expand">
					<h4 class="component-title">
						<span class="text-truncate-inline">
							<span class="text-truncate">
								ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
							</span>
						</span>
					</h4>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-primary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check-circle" />
							</svg>
						</span>Subscribe
					</button>
				</div>
			</div>
			<div class="autofit-float autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col autofit-col-expand">
					<h4 class="component-title">
						ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWord
					</h4>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-shortcut" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#shortcut" />
							</svg>
						</span>RSS
					</button>
				</div>
				<div class="autofit-col">
					<button class="btn btn-primary btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#plus" />
							</svg>
						</span>Add Content
					</button>
				</div>
			</div>
			<div class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center">
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-shortcut" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#shortcut" />
							</svg>
						</span>View in context
					</button>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#thumbs-up" />
							</svg>
						</span>Like (25)
					</button>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
							<span class="inline-item inline-item-before">
								<svg class="lexicon-icon lexicon-icon-flag-empty" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#flag-empty" />
								</svg>
							</span>Flag
						</button>
					</div>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#share" />
							</svg>
						</span>Share
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="card">
	<div class="card-body">
		<div
			class="autofit-float-sm-down autofit-padded-no-gutters-x autofit-row"
		>
			<div class="autofit-col autofit-col-expand">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
		<div class="autofit-float autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col autofit-col-expand">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
		<div
			class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center"
		>
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col autofit-col-expand">
				<div class="autofit-section">
					...
				</div>
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
	</div>
</div>
```

## Float End

Mimic "right floated" elements.

The component `.autofit-float-end` or `.autofit-float-end-{sm|md}-down` simulates the behavior of "right floated" elements in `.autofit-row`. Items that break to a new line will be aligned right.

Aligning items to the left will require nesting `autofit-float autofit-row` inside an `autofit-col autofit-col-expand` with the use of helper classes.

`autofit-float-end` uses `justify-content: flex-end;` to force right alignment. Any column that doesn't expand the full width of `autofit-row` will be aligned right when it breaks to new line. Aligning items to the left will require nesting `autofit-float autofit-row` inside an `autofit-col autofit-col-expand` with the use of helper classes.

<div class="sheet-example">
	<div class="card">
		<div class="card-body">
			<div class="autofit-float-end-sm-down autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col autofit-col-expand">
					<h4 class="component-title">
						<span class="text-truncate-inline">
							<span class="text-truncate">
								ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
							</span>
						</span>
					</h4>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-primary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#check-circle" />
							</svg>
						</span>Subscribe
					</button>
				</div>
			</div>
			<div class="autofit-float-end autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col autofit-col-expand">
					<h4 class="component-title">
						ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWord
					</h4>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-shortcut" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#shortcut" />
							</svg>
						</span>RSS
					</button>
				</div>
				<div class="autofit-col">
					<button class="btn btn-primary btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#plus" />
							</svg>
						</span>Add Content
					</button>
				</div>
			</div>
			<div class="autofit-float-end autofit-padded-no-gutters-x autofit-row autofit-row-center">
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-float autofit-padded-no-gutters autofit-row">
						<div class="autofit-col">
							<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-shortcut" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#shortcut" />
									</svg>
								</span>View in context
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#thumbs-up" />
									</svg>
								</span>Like (25)
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-flag-empty" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#flag-empty" />
									</svg>
								</span>Flag
							</button>
						</div>
					</div>
				</div>
				<div class="autofit-col">
					<button class="btn btn-secondary" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#share" />
							</svg>
						</span>Share
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="card">
	<div class="card-body">
		<div
			class="autofit-float-end-sm-down autofit-padded-no-gutters-x autofit-row"
		>
			<div class="autofit-col autofit-col-expand">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
		<div class="autofit-float-end autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col autofit-col-expand">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
		<div
			class="autofit-float-end autofit-padded-no-gutters-x autofit-row autofit-row-center"
		>
			<div class="autofit-col autofit-col-expand">
				<div
					class="autofit-float autofit-padded-no-gutters autofit-row"
				>
					<div class="autofit-col">
						...
					</div>
					<div class="autofit-col">
						...
					</div>
					<div class="autofit-col">
						...
					</div>
				</div>
			</div>
			<div class="autofit-col">
				...
			</div>
		</div>
	</div>
</div>
```

## Float with Autofit Col End

Another way to mimic "right floated" elements without using `autofit-float-end` and `autofit-col-expand`. This pattern can duplicate floated layouts without the need for a clearfix.

<div class="sheet-example">
	<div class="card">
		<div class="card-body">
			<div class="autofit-float autofit-row autofit-row-center autofit-padded-no-gutters-x">
				<div class="autofit-col">
					<div class="autofit-section">
						<button class="btn btn-sm btn-primary" type="button">Save</button>
					</div>
				</div>
				<div class="autofit-col">
					<div class="autofit-section">
						<button class="btn btn-sm btn-secondary" type="button">Cancel</button>
					</div>
				</div>
				<div class="autofit-col autofit-col-end">
					<div class="autofit-row autofit-padded-no-gutters">
						<div class="autofit-col autofit-col-expand">
							<div class="autofit-section">
								<input class="form-control" type="text" value="ReallySuperInsanely" />
							</div>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div class="autofit-section">
								<input class="form-control" type="text" value="JustIncrediblyLongAndTotally" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center">
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-shortcut" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#shortcut" />
							</svg>
						</span>View in context
					</button>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#thumbs-up" />
							</svg>
						</span>Like (25)
					</button>
				</div>
				<div class="autofit-col">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-flag-empty" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#flag-empty" />
							</svg>
						</span>Flag
					</button>
				</div>
				<div class="autofit-col autofit-col-end">
					<button class="btn btn-secondary" type="button">
						<span class="inline-item inline-item-before">
							<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#share" />
							</svg>
						</span>Share
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="card">
	<div class="card-body">
		<div class="autofit-float autofit-row autofit-row-center autofit-padded-no-gutters-x">
			<div class="autofit-col">
				<div class="autofit-section">
					...
				</div>
			</div>
			<div class="autofit-col">
				<div class="autofit-section">
					...
				</div>
			</div>
			<div class="autofit-col autofit-col-end">
				<div class="autofit-row autofit-padded-no-gutters">
					<div class="autofit-col autofit-col-expand">
						<div class="autofit-section">
							...
						</div>
					</div>
					<div class="autofit-col autofit-col-expand">
						<div class="autofit-section">
							...
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center">
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col autofit-col-end">
				...
			</div>
		</div>
	</div>
</div>
```

## Nesting Autofit Rows

<div class="sheet-example">
	<div class="card">
		<div class="card-body">
			<div class="autofit-float autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col autofit-col-expand">
					<h4 class="component-title">COMMENTS</h4>
				</div>
				<div class="autofit-col autofit-col-end">
					<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
						Order by: newest<span class="inline-item inline-item-after">
							<svg class="lexicon-icon lexicon-icon-caret-bottom" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#caret-bottom" />
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div class="autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col">
					<span class="sticker sticker-circle sticker-lg sticker-success">LC</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="form-group">
						<textarea class="form-control"></textarea>
					</div>
					<div class="form-group">
						<button class="btn btn-primary btn-sm" type="button">Publish Comment</button>
					</div>
				</div>
			</div>
			<div class="autofit-padded-no-gutters-x autofit-row">
				<div class="autofit-col">
					<span class="sticker sticker-circle sticker-lg sticker-warning">DA</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-row">
						<div class="autofit-col autofit-col-expand">
							<h5 class="component-title">David Aragones Otero</h5>
							<div>3 Hours Ago</div>
						</div>
						<div class="autofit-col">
							<div class="dropdown dropdown-action">
								<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
									<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#ellipsis-v" />
									</svg>
								</a>
								<ul class="dropdown-menu dropdown-menu-right">
									<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
									<li><a class="dropdown-item" href="#1">Edit</a></li>
									<li><a class="dropdown-item" href="#1">Move</a></li>
									<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
									<li><a class="dropdown-item" href="#1">Permissions</a></li>
									<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
								</ul>
							</div>
						</div>
					</div>
					<p>Percolator beans french press extraction seasonal grinder plunger pot caramelization. Single origin, dark grinder cultivar aftertaste iced skinny cappuccino irish barista aftertaste fair trade.Sweet, carajillo decaffeinated, french press crema froth and organic a fair trade. In est cream brewed bar roast filter americano turkish.</p>
					<div class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center">
						<div class="autofit-col">
							<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-redo" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#redo" />
									</svg>
								</span>Reply to Comment
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#thumbs-up" />
									</svg>
								</span>10
							</button>
						</div>
						<div class="autofit-col">
							<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
								<span class="inline-item inline-item-before">
									<svg class="lexicon-icon lexicon-icon-thumbs-down" focusable="false" role="presentation">
										<use href="/images/icons/icons.svg#thumbs-down" />
									</svg>
								</span>03
							</button>
						</div>
					</div>
					<div class="autofit-padded-no-gutters-x autofit-row">
						<div class="autofit-col">
							<span class="sticker sticker-circle sticker-lg sticker-success">LC</span>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div class="autofit-row">
								<div class="autofit-col autofit-col-expand">
									<h5 class="component-title">Laura Garcia Castano</h5>
									<div>2 Hours Ago</div>
								</div>
								<div class="autofit-col">
									<div class="dropdown dropdown-action">
										<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" role="button">
											<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
												<use href="/images/icons/icons.svg#ellipsis-v" />
											</svg>
										</a>
										<ul class="dropdown-menu dropdown-menu-right">
											<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
											<li><a class="dropdown-item" href="#1">Edit</a></li>
											<li><a class="dropdown-item" href="#1">Move</a></li>
											<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
											<li><a class="dropdown-item" href="#1">Permissions</a></li>
											<li><a class="dropdown-item" href="#1" role="button">Move to Recycle Bin</a></li>
										</ul>
									</div>
								</div>
							</div>
							<p>Percolator beans french press extraction seasonal grinder plunger pot caramelization. Single origin, dark grinder cultivar aftertaste iced skinny cappuccino irish barista aftertaste fair trade.Sweet, carajillo decaffeinated, french press crema froth and organic a fair trade. In est cream brewed bar roast filter americano turkish.</p>
							<div class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center">
								<div class="autofit-col">
									<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
										<span class="inline-item inline-item-before">
											<svg class="lexicon-icon lexicon-icon-redo" focusable="false" role="presentation">
												<use href="/images/icons/icons.svg#redo" />
											</svg>
										</span>Reply to Comment
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
										<span class="inline-item inline-item-before">
											<svg class="lexicon-icon lexicon-icon-thumbs-up" focusable="false" role="presentation">
												<use href="/images/icons/icons.svg#thumbs-up" />
											</svg>
										</span>10
									</button>
								</div>
								<div class="autofit-col">
									<button class="btn btn-outline-secondary btn-outline-borderless btn-sm" type="button">
										<span class="inline-item inline-item-before">
											<svg class="lexicon-icon lexicon-icon-thumbs-down" focusable="false" role="presentation">
												<use href="/images/icons/icons.svg#thumbs-down" />
											</svg>
										</span>03
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="card">
	<div class="card-body">
		<div class="autofit-float autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col autofit-col-expand">
				...
			</div>
			<div class="autofit-col autofit-col-end">
				...
			</div>
		</div>
		<div class="autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col autofit-col-expand">
				...
			</div>
		</div>
		<div class="autofit-padded-no-gutters-x autofit-row">
			<div class="autofit-col">
				...
			</div>
			<div class="autofit-col autofit-col-expand">
				<div class="autofit-row">
					<div class="autofit-col autofit-col-expand">
						...
					</div>
					<div class="autofit-col">
						...
					</div>
				</div>
				...
				<div
					class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center"
				>
					<div class="autofit-col">
						...
					</div>
					<div class="autofit-col">
						...
					</div>
					<div class="autofit-col">
						...
					</div>
				</div>
				<div class="autofit-padded-no-gutters-x autofit-row">
					<div class="autofit-col">
						...
					</div>
					<div class="autofit-col autofit-col-expand">
						<div class="autofit-row">
							<div class="autofit-col autofit-col-expand">
								...
							</div>
							<div class="autofit-col">
								...
							</div>
						</div>
						...
						<div
							class="autofit-float autofit-padded-no-gutters-x autofit-row autofit-row-center"
						>
							<div class="autofit-col">
								...
							</div>
							<div class="autofit-col">
								...
							</div>
							<div class="autofit-col">
								...
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```
