---
title: "Class Helpers"
weight: 2
---

### Autofit Row

<p>Make content expand to fill remaining space or create equally spaced content with the <code>.autofit-row</code>, <code>.autofit-col</code>, and <code>.autofit-col-expand</code> classes.</p>

<div class="alert alert-warning">
	<code>.autofit-row</code>, <code>.autofit-col</code>, <code>.autofit-col-expand</code> shouldn't be used for laying out site pages, rather it's most useful for small chunks of content inside other components (e.g. cards or list-groups).
</div>

<div class="alert alert-warning">
	Direct descendants of <code>.autofit-col</code> are <code>flex-direction: column;</code> (IE 10-11 workaround because they don't respect min/max width or min/max height in flex items) become block level elements by default, see <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">https://www.w3.org/TR/css-flexbox-1/#flex-items</a>. If you want to display content inside <code>.autofit-col</code> using <code>floats</code>, <code>inline</code>, or <code>inline-block</code>, wrap the content with <code>```<div class="autofit-section"></div>```</code>.
</div>

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

<div class="autofit-row autofit-padded">
	<div class="autofit-col autofit-col-expand" style="background-color: aliceblue;">
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
	<div class="autofit-col autofit-col-expand" style="background-color: antiquewhite;">
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
	<div class="autofit-col autofit-col-expand" style="background-color: aqua;">
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
	<div class="autofit-col" style="background-color: aquamarine;">
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

### Autofit Spacing

<p>The <code>autofit-padded</code> class should be added to <code>autofit-row</code> to give padding to all <code>autofit-col</code>s that are direct children of <code>autofit-row</code>.</p>

<p>The <code>autofit-padded-no-gutters-x</code> class gives padding to all <code>autofit-col</code>s that are direct children of <code>autofit-row</code>. It has negative margins on the left and right to offset the padding (similar to Bootstrap's <code>row</code> class).</p>

<p>The <code>autofit-padded-no-gutters-y</code> class gives padding to all <code>autofit-col</code>s that are direct children of <code>autofit-row</code>. It has negative margins on the top and bottom to offset the padding (Generally used if nesting <code>.autofit-row</code>).</p>

<p>The <code>autofit-padded-no-gutters</code> class gives padding to all <code>autofit-col</code>s that are direct children of <code>autofit-row</code>. It has negative margins on the top, right, bottom, and left to offset the padding (Generally used if nesting <code>.autofit-row</code>).</p>

<h3>Autofit Row Vertical Alignment</h3>

<p>Autofit Row vertically aligns to the top by default.</p>

<p>The <code>autofit-row-center</code> class vertically aligns items in <code>autofit-row</code> to the middle.</p>

<p>The <code>autofit-row-end</code> class vertically aligns items in <code>autofit-row</code> to the bottom.</p>

### Autofit Float

<p>The component <code>autofit-float</code> or <code>.autofit-float-{sm|md}-down</code> simulates the behavior of floated elements in <code>.autofit-row</code>. Items that break to a new line will be aligned to the left.</p>

<p>This pattern provides the benefit of aligning content via flexbox without losing the behavior of floated elements at the expense of extra markup.</p>

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

### Autofit Float End

<p>Mimic "right floated" elements.</p>

<p>The component <code>.autofit-float-end</code> or <code>.autofit-float-end-{sm|md}-down</code> simulates the behavior of "right floated" elements in <code>.autofit-row</code>. Items that break to a new line will be aligned right.</p>

<p>Aligning items to the left will require nesting <code>autofit-float autofit-row</code> inside an <code>autofit-col autofit-col-expand</code> with the use of helper classes.</p>

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

### Nesting Autofit Rows

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

### Inline Item

<p>Use the <code>inline-item inline-item-before</code>, <code>inline-item inline-item-middle</code>, and <code>inline-item inline-item-after</code> classes to provide consistent spacing between text and icons in elements such as links or buttons. This can also be used in other components that have inline content (e.g., <code>badge</code> and <code>label</code>).</p>

<div class="alert alert-warning">
	For this component to function and space properly, the white space must be removed between text and icons from the markup inside the component. It's generally easier to remove all white space inside the link, button, or component. In the examples below, whitespaces in button and link are slightly off and the link underline on hover is a bit wide.
</div>

<div>
	<h5>Link without Whitespace</h5>
	<a href="#1">
		<span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation"><use href="/images/icons/icons.svg#share" /></svg></span>link<span class="inline-item inline-item-middle"><svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation"><use href="/images/icons/icons.svg#question-circle" /></svg></span><span class="inline-item inline-item-middle"><svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation"><use href="/images/icons/icons.svg#question-circle" /></svg></span><span class="inline-item inline-item-middle"><svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation"><use href="/images/icons/icons.svg#question-circle" /></svg></span>why, but ok.<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation"><use href="/images/icons/icons.svg#add-cell" /></svg></span>
	</a>
</div>
<div>
	<h5>Link with Whitespace</h5>
	<a href="#1">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#share" /></svg>
		</span>
		link
		<span class="inline-item inline-item-after">
			<svg class="lexicon-icon lexicon-icon-add-cell" focusable="false" role="presentation"><use href="/images/icons/icons.svg#add-cell" /></svg>
		</span>
	</a>
</div>
<div>
	<h5>Button without Whitespace</h5>
	<button class="btn btn-secondary" type="button"><span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation"><use href="/images/icons/icons.svg#plus" /></svg></span>Secondary<span class="inline-item inline-item-after"><svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation"><use href="/images/icons/icons.svg#camera" /></svg></span></button>
</div>
<div>
	<h5>Button with Whitespace</h5>
	<button class="btn btn-secondary" type="button">
		<span class="inline-item inline-item-before">
			<svg class="lexicon-icon lexicon-icon-plus" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#plus" /></svg>
		</span>
		Secondary
		<span class="inline-item inline-item-after">
			<svg class="lexicon-icon lexicon-icon-camera" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#camera" /></svg>
		</span>
	</button>
</div>

### Close

<p>A Button or Link for closing stuff.</p>

#### Anchor

<a aria-label="Close" class="close" href="#1" role="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
<a aria-label="Close" class="close disabled" href="#1" role="button" tabindex="-1">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</a>
<a aria-label="Close" class="close" href="#1" role="button">
	<span aria-hidden="true">×</span>
</a>
<a aria-label="Close" class="close disabled" href="#1" role="button" tabindex="-1">
	<span aria-hidden="true">×</span>
</a>

#### Button

<button aria-label="Close" class="close" type="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
<button aria-label="Close" class="close" disabled type="button">
	<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
		<use href="/images/icons/icons.svg#times" />
	</svg>
</button>
<button aria-label="Close" class="close" type="button">
	<span aria-hidden="true">×</span>
</button>
<button aria-label="Close" class="close" disabled type="button">
	<span aria-hidden="true">×</span>
</button>
