---
title: "Tables"
---

<div class="alert alert-warning">
	<code>.table-responsive</code> and <code>.table-responsive-{sm|md|lg|xl}</code> should be placed in a <code>div</code> that wraps the <code>table</code> element. See <a href="https://github.com/twbs/bootstrap/issues/24638">https://github.com/twbs/bootstrap/issues/24638</a> for more info.
</div>

<div class="alert alert-warning">
	The <code>show-quick-actions-on-hover</code> class requires JavaScript to add the <code>table-focus</code> class to the table row when an item inside is focused. This makes it keyboard accessible.
</div>

### Table List

<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-list table-nowrap">
		<thead>
			<tr>
				<th></th>
				<th class="table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#drag" />
							</svg>
						</a>
					</span><a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="ID">ID</span><span class="inline-item inline-item-after">
							<svg class="lexicon-icon lexicon-icon-order-arrow-down" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#order-arrow-down" />
							</svg>
						</span>
					</a>
				</th>
				<th class="table-cell-expand table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#drag" />
							</svg>
						</a>
					</span><a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Title">Title</span><span class="inline-item inline-item-after">
							<svg class="lexicon-icon lexicon-icon-order-arrow-down" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#order-arrow-down" />
							</svg>
						</span>
					</a>
				</th>
				<th><span class="inline-item">Status</span></th>
				<th class="table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#drag" />
							</svg>
						</a>
					</span><a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Modified Date">Modified Date</span>
					</a>
				</th>
				<th><span class="inline-item">Display Date</span></th>
				<th class="table-head-title">
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Author">Author</span><span class="inline-item inline-item-after">
							<svg class="lexicon-icon lexicon-icon-order-arrow-up" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#order-arrow-up" />
							</svg>
						</span>
					</a>
				</th>
				<th><span class="inline-item">Type</span></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr class="table-divider">
				<td colspan="9">Group 1</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21146</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						.table-list-title (not a link)
					</div>
					<div class="table-list-title">
						<a href="#1">.table-list-title a</a>
					</div>
					<div><a class="table-list-link" href="#1">.table-list-link</a></div>
					<div><a href="#1">link</a></div>
					<div>Some regular text</div>
				</td>
				<td>--</td>
				<td>2 Hours Ago</td>
				<td>--</td>
				<td>Stanley Nelson</td>
				<td>Folder</td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr class="table-active">
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input checked class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>
					21148
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</a>
					</div>
				</td>
				<td>--</td>
				<td>2 Hours Ago</td>
				<td>--</td>
				<td>Stanley Nelson</td>
				<td>Folder</td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21149</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
						</span>
					</div>
				</td>
				<td>--</td>
				<td>2 Hours Ago</td>
				<td>--</td>
				<td>Stanley Nelson</td>
				<td>Folder</td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21150</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
						</span>
					</div>
				</td>
				<td>--</td>
				<td>2 Hours Ago</td>
				<td>--</td>
				<td>Stanley Nelson</td>
				<td>Folder</td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

### Table List with Table Striped

<div class="table-responsive-sm">
	<table class="show-quick-actions-on-hover table table-autofit table-list table-striped">
		<thead>
			<tr>
				<th></th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Description">Description</span>
					</span>
				</th>
				<th>Format</th>
				<th>Label</th>
				<th>Label</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive-sm">
	<table class="show-quick-actions-on-hover table table-autofit table-list table-striped">
		<thead>
			<tr>
				<th></th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Description">Description</span>
					</span>
				</th>
				<th>Format</th>
				<th>Label</th>
				<th>Label</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>
```

### Table List with Table Hover

<div class="table-responsive-sm">
	<table class="show-quick-actions-on-hover table table-autofit table-hover table-list">
		<thead>
			<tr>
				<th></th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Description">Description</span>
					</span>
				</th>
				<th>Format</th>
				<th>Label</th>
				<th>Label</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr class="table-active">
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input checked class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive-sm">
	<table class="show-quick-actions-on-hover table table-autofit table-hover table-list">
	</table>
</div>
```

### Table List with Table Bordered

<div class="table-responsive-sm">
	<table class="show-quick-actions-on-hover table table-autofit table-bordered table-list">
		<thead>
			<tr>
				<th></th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Description">Description</span>
					</span>
				</th>
				<th>Format</th>
				<th>Label</th>
				<th>Label</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr class="table-active">
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input checked class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
						</span>
					</div>
				</td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td><a href="#1">jpg</a></td>
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Remove</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Download</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive-sm">
	<table class="show-quick-actions-on-hover table table-autofit table-bordered table-list">
	</table>
</div>
```

### Table Helpers

<p>The <code>table-autofit</code> class constrains table columns to be the same width as its content, but it must be used with the <code>table-cell-expand</code> class. The <code>table-cell-expand</code> class fills the remaining space.</p>

<p>Use the <code>table-cell-expand-small</code>, <code>table-cell-expand-smaller</code>, or <code>table-cell-expand-smallest</code> class with the <code>table-cell-expand</code> class to size columns smaller relative to the widest column.</p>

<p>Use the <code>table-cell-minw-50</code>, <code>table-cell-minw-75</code>, <code>table-cell-minw-100</code>, <code>table-cell-minw-150</code>, <code>table-cell-minw-200</code>, <code>table-cell-minw-250</code>, <code>table-cell-minw-300</code>, <code>table-cell-minw-350</code>, and <code>table-cell-minw-400</code> utility classes to set the table cell's <code>min-width</code> to 50px, 75px, 100px, 150px, 200px, 250px, 300px, 350px, and 400px on a specific table column, respectively.</p>

<p>The <code>table-cell-ws-normal</code> and <code>table-cell-ws-nowrap</code> helper classes set the <code>white-space</code> to normal or nowrap on a specific table column, respectively.</p>

<div class="table-responsive">
	<table class="table table-autofit">
		<thead>
			<tr>
				<th></th>
				<th>ID</th>
				<th class="table-cell-minw-300 table-cell-expand">
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Description">Title</span>
					</a>
				</th>
				<th class="table-cell-expand-small table-cell-ws-nowrap">Modified Date</th>
				<th class="table-cell-expand-smaller">Display Date</th>
				<th class="table-cell-minw-150 table-cell-expand-smallest">Author</th>
				<th>Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21146</td>
				<td class="table-cell-minw-300 table-cell-expand">
					<div class="table-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td class="table-cell-expand-small table-cell-ws-nowrap">2 Hours Ago</td>
				<td class="table-cell-expand-smaller">--</td>
				<td class="table-cell-minw-150 table-cell-expand-smallest">Stanley Nelson</td>
				<td>Folder</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-autofit">
	</table>
</div>
```

<p>The <code>table-heading-nowrap</code> class keeps headings on one line.</p>

<div class="table-responsive">
	<table class="table table-autofit table-heading-nowrap">
		<thead>
			<tr>
				<th></th>
				<th>ID</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Description">Title</span>
					</span>
				</th>
				<th>Status</th>
				<th>Modified Date</th>
				<th>Display Date</th>
				<th>Author</th>
				<th>Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21146</td>
				<td class="table-cell-expand">
					<div class="table-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td>--</td>
				<td>2 Hours Ago</td>
				<td>--</td>
				<td>Stanley Nelson</td>
				<td>Folder</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-autofit table-heading-nowrap">
	</table>
</div>
```

<p>The <code>table-nowrap</code> class keeps everything on one line.</p>

<div class="table-responsive">
	<table class="table table-autofit table-nowrap">
		<thead>
			<tr>
				<th></th>
				<th>ID</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Description">Title</span>
					</span>
				</th>
				<th>Status</th>
				<th>Modified Date</th>
				<th>Display Date</th>
				<th>Author</th>
				<th>Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox" />
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21146</td>
				<td class="table-cell-expand">
					<div class="table-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
						</span>
					</div>
				</td>
				<td>--</td>
				<td>2 Hours Ago</td>
				<td>--</td>
				<td>Stanley Nelson</td>
				<td>Folder</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-autofit table-nowrap">
	</table>
</div>
```

### Vertical Alignment

<p>We have added some classes to help vertically align contents inside a table. Use the <code>table-valign-bottom</code>, <code>table-valign-middle</code>, and <code>table-valign-top</code> classes on <code>&lt;table&gt;</code> to vertically align table cell contents on the bottom, middle, and top, respectively.</p>

<p>Use the <code>thead-valign-bottom</code>, <code>thead-valign-middle</code>, and <code>thead-valign-top</code> classes on <code>&lt;table&gt;</code> to vertically align the contents inside the table head.</p>

<p>Use the <code>tbody-valign-bottom</code>, <code>tbody-valign-middle</code>, and <code>tbody-valign-top</code> classes on <code>&lt;table&gt;</code> to vertically align the contents inside the table body.</p>

### Table Column Text-{start|center|end}

<p>We have added some classes to help horizontally align contents inside a table column. The <code>table-column-text-start</code>, <code>table-column-text-center</code>, and <code>table-column-text-end</code> classes align text left, center, and right, respectively.</p>

### Table Cell-{start|end}

<p>Sometimes we are unable to remove specific table columns from the DOM and need to hide it using CSS. The classes <code>table-cell-start</code> and <code>table-cell-end</code> can be added to the "new" first or last column to maintain table styles on the left and right side.</p>

<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-nowrap table-list">
		<thead>
			<tr>
				<th class="d-none"></th>
				<th class="table-cell-expand table-cell-start table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#drag" />
							</svg>
						</a>
					</span><a class="inline-item text-truncate-inline" href="#1"><span class="text-truncate" title="Title">Title</span><span class="inline-item inline-item-after">
							<svg class="lexicon-icon lexicon-icon-order-arrow-up" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#order-arrow-up" />
							</svg>
						</span>
					</a>
				</th>
				<th><span class="inline-item">Status</span></th>
				<th><span class="inline-item">Items</span></th>
				<th><span class="inline-item">Start Date</span></th>
				<th><span class="inline-item">Duration</span></th>
				<th class="table-cell-end"></th>
				<th class="d-none"></th>
			</tr>
		</thead>
		<tbody>
			<tr class="table-divider">
				<td colspan="8">In Progress</td>
			</tr>
			<tr>
				<td class="d-none">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand table-cell-start">
					<div class="autofit-row">
						<div class="autofit-col">
							<span class="sticker sticker-circle sticker-danger">MT</span>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div class="table-list-title">
								<a class="text-truncate-inline" href="#1">
									<span class="text-truncate" title="Publication Title">Publication Title</span>
								</a>
							</div>
						</div>
					</div>
				</td>
				<td>
					<span class="label label-warning">
						<span class="label-item label-item-expand">In Progress</span>
					</span>
				</td>
				<td>100,000</td>
				<td>2017.11.24 - 17:15</td>
				<td>4 minutes</td>
				<td class="table-cell-end">
					<div class="progress-group">
						<div class="progress">
							<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
						</div>
						<div class="progress-group-addon">30%</div>
					</div>
				</td>
				<td class="d-none">
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1">Remove</a></li>
							<li><a class="dropdown-item" href="#1">Download</a></li>
							<li><a class="dropdown-item" href="#1">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-nowrap table-list">
		<thead>
			<tr>
				<th class="d-none"></th>
				<th class="table-cell-start"></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th class="table-cell-end"></th>
				<th class="d-none"></th>
			</tr>
		</thead>
		<tbody>
			<tr class="table-divider"></tr>
			<tr>
				<td class="d-none"></td>
				<td class="table-cell-start"></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td class="table-cell-end"></td>
				<td class="d-none"></td>
			</tr>
		</tbody>
	</table>
</div>
```

### Table Row-{start|end}

<p>The same is true for table rows, the classes <code>table-row-start</code> and <code>table-row-end</code> can be added to the "new" first or last <code>&lt;tr&gt;</code> to maintain table styles on the top and bottom sides.</p>

<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-nowrap table-list">
		<thead>
			<tr class="d-none">
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
			</tr>
			<tr class="table-row-start">
				<th class="d-none"></th>
				<th class="table-cell-expand table-cell-start table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<svg class="lexicon-icon lexicon-icon-drag" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#drag" />
							</svg>
						</a>
					</span><a class="inline-item text-truncate-inline" href="#1"><span class="text-truncate" title="Title">Title</span><span class="inline-item inline-item-after">
							<svg class="lexicon-icon lexicon-icon-order-arrow-up" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#order-arrow-up" />
							</svg>
						</span>
					</a>
				</th>
				<th><span class="inline-item">Status</span></th>
				<th><span class="inline-item">Items</span></th>
				<th><span class="inline-item">Start Date</span></th>
				<th><span class="inline-item">Duration</span></th>
				<th class="table-cell-end"></th>
				<th class="d-none"></th>
			</tr>
		</thead>
		<tbody>
			<tr class="table-divider">
				<td colspan="8">In Progress</td>
			</tr>
			<tr class="table-row-end">
				<td class="d-none">
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox">
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand table-cell-start">
					<div class="autofit-row">
						<div class="autofit-col">
							<span class="sticker sticker-circle sticker-danger">MT</span>
						</div>
						<div class="autofit-col autofit-col-expand">
							<div class="table-list-title">
								<a class="text-truncate-inline" href="#1">
									<span class="text-truncate" title="Publication Title">Publication Title</span>
								</a>
							</div>
						</div>
					</div>
				</td>
				<td>
					<span class="label label-warning">
						<span class="label-item label-item-expand">In Progress</span>
					</span>
				</td>
				<td>100,000</td>
				<td>2017.11.24 - 17:15</td>
				<td>4 minutes</td>
				<td class="table-cell-end">
					<div class="progress-group">
						<div class="progress">
							<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
						</div>
						<div class="progress-group-addon">30%</div>
					</div>
				</td>
				<td class="d-none">
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1">
							<svg class="lexicon-icon lexicon-icon-trash" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#trash" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1">
							<svg class="lexicon-icon lexicon-icon-download" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#download" />
							</svg>
						</a>
						<a class="component-action quick-action-item" href="#1">
							<svg class="lexicon-icon lexicon-icon-expand" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#expand" />
							</svg>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use xlink:href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1">Remove</a></li>
							<li><a class="dropdown-item" href="#1">Download</a></li>
							<li><a class="dropdown-item" href="#1">Checkout</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr class="d-none">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-nowrap table-list">
		<thead>
			<tr class="d-none">
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
			</tr>
			<tr class="table-row-start">
				<th class="d-none"></th>
				<th class="table-cell-start"></th>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				<th class="table-cell-end"></th>
				<th class="d-none"></th>
			</tr>
		</thead>
		<tbody>
			<tr class="table-divider"></tr>
			<tr class="table-row-end">
				<td class="d-none"></td>
				<td class="table-cell-start"></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td class="table-cell-end"></td>
				<td class="d-none"></td>
			</tr>
			<tr class="d-none">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>
```

### Table

<div class="alert alert-warning">
	Because of the dynamic nature of content in tables, we left it to the developer to size and align columns inside tables. Add a unique class to each column and min-width / max-width to space the tables to your specific requirements.
</div>

<div class="table-responsive">
	<table class="table table-autofit">
		<thead>
			<tr>
				<th class="table-cell-expand">Name</th>
				<th class="table-cell-expand">Roles</th>
				<th class="table-column-text-center">Remove</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">.table-title (not a link)</div>
					<div class="table-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate">.table-title a</span>
						</a>
					</div>
					<div>Some regular text</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">.table-link</a>,
					<a href="#1">link</a>,
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#share" />
						</svg>
					</a>(.table-action-link),
					<span>and some regular text</span>
				</td>
				<td class="table-column-text-center">
					<button class="btn btn-unstyled table-action-link" type="button">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</button>
				</td>
			</tr>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">
						<a href="#1">Liferay Remote Example One</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">Liferay Site Owner</a>
				</td>
				<td class="table-column-text-center">
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</a>
				</td>
			</tr>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">
						<a href="#1">Liferay Remote Example Two</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">Liferay Site Owner</a>
				</td>
				<td class="table-column-text-center">
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</a>
				</td>
			</tr>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">
						<a href="#1">Liferay Remote Example Three</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">Liferay Site Owner</a>
				</td>
				<td class="table-column-text-center">
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-autofit">
		<thead>
			<tr>
				<th class="table-cell-expand">Name</th>
				<th class="table-cell-expand">Roles</th>
				<th class="table-column-text-center">Remove</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">.table-title (not a link)</div>
					<div class="table-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate">.table-title a</span>
						</a>
					</div>
					<div>Some regular text</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">.table-link</a>,
					<a href="#1">link</a>,
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-share" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#share" />
						</svg>
					</a>(.table-action-link),
					<span>and some regular text</span>
				</td>
				<td class="table-column-text-center">
					<button class="btn btn-unstyled table-action-link" type="button">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</button>
				</td>
			</tr>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">
						<a href="#1">Liferay Remote Example One</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">Liferay Site Owner</a>
				</td>
				<td class="table-column-text-center">
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</a>
				</td>
			</tr>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">
						<a href="#1">Liferay Remote Example Two</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">Liferay Site Owner</a>
				</td>
				<td class="table-column-text-center">
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</a>
				</td>
			</tr>
			<tr>
				<td class="table-cell-expand">
					<div class="table-title">
						<a href="#1">Liferay Remote Example Three</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-link" href="#1">Liferay Site Owner</a>
				</td>
				<td class="table-column-text-center">
					<a class="table-action-link" href="#1">
						<svg class="lexicon-icon lexicon-icon-times-circle" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#times-circle" />
						</svg>
					</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
```

<div class="table-responsive">
	<table class="table">
		<thead>
			<tr>
				<th>Country</th>
				<th>Purchasing Power Parity</th>
				<th>Official Exchange Rate</th>
				<th>Real Growth Rate</th>
				<th>Household Consumption</th>
				<th>Government Consumption</th>
				<th>Fixed Capital Investment</th>
				<th>Inventories Investment</th>
				<th>Exports</th>
				<th>Imports</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Afganistan</a>
					</div>
				</td>
				<td>$45.3 billion</td>
				<td>$20.65 billion</td>
				<td>3.1%</td>
				<td>96.5%</td>
				<td>23.3%</td>
				<td>25.4%</td>
				<td>0%</td>
				<td>18.1%</td>
				<td>-63.4%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Brazil</a>
					</div>
				</td>
				<td>$2.416 trillion</td>
				<td>$2.19 trillion</td>
				<td>2.3%</td>
				<td>62.5%</td>
				<td>21.7%</td>
				<td>18.3%</td>
				<td>0%</td>
				<td>12.4%</td>
				<td>-14.9%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Congo, Democratic Republic of the</a>
					</div>
				</td>
				<td>$29.39 billion</td>
				<td>$18.56 billion</td>
				<td>6.2%</td>
				<td>65.9%</td>
				<td>12.5%</td>
				<td>27.9%</td>
				<td>1%</td>
				<td>49.9%</td>
				<td>-56.3%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Spain</a>
					</div>
				</td>
				<td>$1.389 trillion</td>
				<td>$1.356 trillion</td>
				<td>-1.3%</td>
				<td>59%</td>
				<td>19.9%</td>
				<td>18.4%</td>
				<td>0.4%</td>
				<td>32.8%</td>
				<td>-30.4%</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table">
		...
	</table>
</div>
```

### Table Striped

<div class="table-responsive">
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Country</th>
				<th>Purchasing Power Parity</th>
				<th>Official Exchange Rate</th>
				<th>Real Growth Rate</th>
				<th>Household Consumption</th>
				<th>Government Consumption</th>
				<th>Fixed Capital Investment</th>
				<th>Inventories Investment</th>
				<th>Exports</th>
				<th>Imports</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Afganistan</a>
					</div>
				</td>
				<td>$45.3 billion</td>
				<td>$20.65 billion</td>
				<td>3.1%</td>
				<td>96.5%</td>
				<td>23.3%</td>
				<td>25.4%</td>
				<td>0%</td>
				<td>18.1%</td>
				<td>-63.4%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Brazil</a>
					</div>
				</td>
				<td>$2.416 trillion</td>
				<td>$2.19 trillion</td>
				<td>2.3%</td>
				<td>62.5%</td>
				<td>21.7%</td>
				<td>18.3%</td>
				<td>0%</td>
				<td>12.4%</td>
				<td>-14.9%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Congo, Democratic Republic of the</a>
					</div>
				</td>
				<td>$29.39 billion</td>
				<td>$18.56 billion</td>
				<td>6.2%</td>
				<td>65.9%</td>
				<td>12.5%</td>
				<td>27.9%</td>
				<td>1%</td>
				<td>49.9%</td>
				<td>-56.3%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Spain</a>
					</div>
				</td>
				<td>$1.389 trillion</td>
				<td>$1.356 trillion</td>
				<td>-1.3%</td>
				<td>59%</td>
				<td>19.9%</td>
				<td>18.4%</td>
				<td>0.4%</td>
				<td>32.8%</td>
				<td>-30.4%</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-bordered">
		...
	</table>
</div>
```

### Table Bordered

<div class="table-responsive">
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Country</th>
				<th>Purchasing Power Parity</th>
				<th>Official Exchange Rate</th>
				<th>Real Growth Rate</th>
				<th>Household Consumption</th>
				<th>Government Consumption</th>
				<th>Fixed Capital Investment</th>
				<th>Inventories Investment</th>
				<th>Exports</th>
				<th>Imports</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Afganistan</a>
					</div>
				</td>
				<td>$45.3 billion</td>
				<td>$20.65 billion</td>
				<td>3.1%</td>
				<td>96.5%</td>
				<td>23.3%</td>
				<td>25.4%</td>
				<td>0%</td>
				<td>18.1%</td>
				<td>-63.4%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Albania</a>
					</div>
				</td>
				<td>$28.34 billion</td>
				<td>$12.8 billion</td>
				<td>3.1%</td>
				<td>87.6%</td>
				<td>8.4%</td>
				<td>25%</td>
				<td>-2.6%</td>
				<td>36%</td>
				<td>-54.4%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Brazil</a>
					</div>
				</td>
				<td>$2.416 trillion</td>
				<td>$2.19 trillion</td>
				<td>2.3%</td>
				<td>62.5%</td>
				<td>21.7%</td>
				<td>18.3%</td>
				<td>0%</td>
				<td>12.4%</td>
				<td>-14.9%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Spain</a>
					</div>
				</td>
				<td>$1.389 trillion</td>
				<td>$1.356 trillion</td>
				<td>-1.3%</td>
				<td>59%</td>
				<td>19.9%</td>
				<td>18.4%</td>
				<td>0.4%</td>
				<td>32.8%</td>
				<td>-30.4%</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-bordered">
		...
	</table>
</div>
```

### Table Hover

<div class="table-responsive">
	<table class="table table-bordered table-hover">
		<thead>
			<tr>
				<th>Country</th>
				<th>Purchasing Power Parity</th>
				<th>Official Exchange Rate</th>
				<th>Real Growth Rate</th>
				<th>Household Consumption</th>
				<th>Government Consumption</th>
				<th>Fixed Capital Investment</th>
				<th>Inventories Investment</th>
				<th>Exports</th>
				<th>Imports</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Afganistan</a>
					</div>
				</td>
				<td>$45.3 billion</td>
				<td>$20.65 billion</td>
				<td>3.1%</td>
				<td>96.5%</td>
				<td>23.3%</td>
				<td>25.4%</td>
				<td>0%</td>
				<td>18.1%</td>
				<td>-63.4%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Brazil</a>
					</div>
				</td>
				<td>$2.416 trillion</td>
				<td>$2.19 trillion</td>
				<td>2.3%</td>
				<td>62.5%</td>
				<td>21.7%</td>
				<td>18.3%</td>
				<td>0%</td>
				<td>12.4%</td>
				<td>-14.9%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Congo, Democratic Republic of the</a>
					</div>
				</td>
				<td>$29.39 billion</td>
				<td>$18.56 billion</td>
				<td>6.2%</td>
				<td>65.9%</td>
				<td>12.5%</td>
				<td>27.9%</td>
				<td>1%</td>
				<td>49.9%</td>
				<td>-56.3%</td>
			</tr>
			<tr>
				<td>
					<div class="table-title">
						<a href="#1">Spain</a>
					</div>
				</td>
				<td>$1.389 trillion</td>
				<td>$1.356 trillion</td>
				<td>-1.3%</td>
				<td>59%</td>
				<td>19.9%</td>
				<td>18.4%</td>
				<td>0.4%</td>
				<td>32.8%</td>
				<td>-30.4%</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-bordered table-hover">
		...
	</table>
</div>
```
