---
title: "Table"
---

### Description

A table is a specific pattern for comparing datasets in a very direct and analytical way.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Table/table.html">Table Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Table List

> A table styled like a list. The active state can be invoked by adding class `table-active` to the ````<tr></tr>```` element.

<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-hover table-list table-nowrap">
		<thead>
			<tr>
				<th></th>
				<th class="table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<span aria-label="icon-drag" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-drag">
									<use href="/images/icons/icons.svg#drag" />
								</svg>
							</span>
						</a>
					</span>
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="ID">ID</span><span class="inline-item inline-item-after">
							<span aria-label="icon-order-arrow-down" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-down">
									<use href="/images/icons/icons.svg#order-arrow-down" />
								</svg>
							</span>
						</span>
					</a>
				</th>
				<th class="table-cell-expand table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<span aria-label="icon-drag" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-drag">
									<use href="/images/icons/icons.svg#drag" />
								</svg>
							</span>
						</a>
					</span>
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Title">Title</span><span class="inline-item inline-item-after">
							<span aria-label="icon-order-arrow-down" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-down">
									<use href="/images/icons/icons.svg#order-arrow-down" />
								</svg>
							</span>
						</span>
					</a>
				</th>
				<th>Status</th>
				<th class="table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<span aria-label="icon-drag" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-drag">
									<use href="/images/icons/icons.svg#drag" />
								</svg>
							</span>
						</a>
					</span>
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Modified Date">Modified Date</span>
					</a>
				</th>
				<th>Display Date</th>
				<th class="table-head-title">
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Author">Author</span><span class="inline-item inline-item-after">
							<span aria-label="icon-order-arrow-up" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-up">
									<use href="/images/icons/icons.svg#order-arrow-up" />
								</svg>
							</span>
						</span>
					</a>
				</th>
				<th>Type</th>
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
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21146</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
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
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
			<tr class="table-active">
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input checked class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>
					21148
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
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
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
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
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
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
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="show-quick-actions-on-hover table table-autofit table-hover table-list table-nowrap">
		<thead>
			<tr>
				<th></th>
				<th class="table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<span aria-label="icon-drag" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-drag">
									<use href="/images/icons/icons.svg#drag" />
								</svg>
							</span>
						</a>
					</span>
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="ID">ID</span><span class="inline-item inline-item-after">
							<span aria-label="icon-order-arrow-down" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-down">
									<use href="/images/icons/icons.svg#order-arrow-down" />
								</svg>
							</span>
						</span>
					</a>
				</th>
				<th class="table-cell-expand table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<span aria-label="icon-drag" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-drag">
									<use href="/images/icons/icons.svg#drag" />
								</svg>
							</span>
						</a>
					</span>
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Title">Title</span><span class="inline-item inline-item-after">
							<span aria-label="icon-order-arrow-down" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-down">
									<use href="/images/icons/icons.svg#order-arrow-down" />
								</svg>
							</span>
						</span>
					</a>
				</th>
				<th>Status</th>
				<th class="table-head-title">
					<span class="inline-item inline-item-before">
						<a href="#1">
							<span aria-label="icon-drag" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-drag">
									<use href="/images/icons/icons.svg#drag" />
								</svg>
							</span>
						</a>
					</span>
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Modified Date">Modified Date</span>
					</a>
				</th>
				<th>Display Date</th>
				<th class="table-head-title">
					<a class="inline-item text-truncate-inline" href="#1">
						<span class="text-truncate" title="Author">Author</span><span class="inline-item inline-item-after">
							<span aria-label="icon-order-arrow-up" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-up">
									<use href="/images/icons/icons.svg#order-arrow-up" />
								</svg>
							</span>
						</span>
					</a>
				</th>
				<th>Type</th>
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
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>21146</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
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
				<td>
					<div class="quick-action-menu">
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
			<tr class="table-active">
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input checked class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td>
					21148
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<span class="text-truncate-inline">
							<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
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
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
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
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
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
							<span aria-label="icon-trash" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
									<use href="/images/icons/icons.svg#trash" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-download" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
									<use href="/images/icons/icons.svg#download" />
								</svg>
							</span>
						</a>
						<a class="component-action quick-action-item" href="#1" role="button">
							<span aria-label="icon-info-circle-open" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
									<use href="/images/icons/icons.svg#info-circle-open" />
								</svg>
							</span>
						</a>
					</div>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<span aria-label="icon-ellipsis-v" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
									<use href="/images/icons/icons.svg#ellipsis-v" />
								</svg>
							</span>
						</a>
						<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="#1" role="button">Remove</a>
							<a class="dropdown-item" href="#1" role="button">Edit</a>
							<a class="dropdown-item" href="#1" role="button">Move</a>
							<a class="dropdown-item" href="#1" role="button">Checkout</a>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>
```

### Table in Forms Hierarchy Example

<div class="sheet">
	<div class="sheet-header">
		<h4 class="sheet-title">Sites</h4>
	</div>
	<div class="sheet-section">
		<div class="table-responsive">
			<table class="table table-autofit">
				<thead>
					<tr>
						<th class="table-cell-expand">Name</th>
						<th class="table-cell-expand">Roles</th>
						<th></th>
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
								<span aria-label="icon-share" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-share">
										<use href="/images/icons/icons.svg#share" />
									</svg>
								</span>
							</a>(.table-action-link),
							<span>and some regular text</span>
						</td>
						<td>
							<button class="btn btn-unstyled table-action-link" type="button">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
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
						<td>
							<a class="table-action-link" href="#1">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
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
						<td>
							<a class="table-action-link" href="#1">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
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
						<td>
							<a class="table-action-link" href="#1">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="sheet-footer">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="submit">Save changes</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">Cancel</button>
			</div>
		</div>
	</div>
</div>

```html
<div class="sheet">
	<div class="sheet-header">
		<h4 class="sheet-title">Sites</h4>
	</div>
	<div class="sheet-section">
		<div class="table-responsive">
			<table class="table table-autofit">
				<thead>
					<tr>
						<th class="table-cell-expand">Name</th>
						<th class="table-cell-expand">Roles</th>
						<th></th>
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
								<span aria-label="icon-share" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-share">
										<use href="/images/icons/icons.svg#share" />
									</svg>
								</span>
							</a>(.table-action-link),
							<span>and some regular text</span>
						</td>
						<td>
							<button class="btn btn-unstyled table-action-link" type="button">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
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
						<td>
							<a class="table-action-link" href="#1">
								<span aria-label="icon-time-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
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
						<td>
							<a class="table-action-link" href="#1">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
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
						<td>
							<a class="table-action-link" href="#1">
								<span aria-label="icon-times-circle" class="lexicon-icon-container" role="img">
									<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
										<use href="/images/icons/icons.svg#times-circle" />
									</svg>
								</span>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="sheet-footer">
		<div class="btn-group">
			<div class="btn-group-item">
				<button class="btn btn-primary" type="submit">Save changes</button>
			</div>
			<div class="btn-group-item">
				<button class="btn btn-secondary" type="button">Cancel</button>
			</div>
		</div>
	</div>
</div>
```

### API

<div>
	[APITable "clay-table/src/ClayTable.js"]
</div>
