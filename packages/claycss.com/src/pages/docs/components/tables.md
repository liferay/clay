---
title: Tables
description: Components
layout: "guide"
weight: 100
---

<article id="table-list">

### Table List

> A table styled like a list. The active state can be invoked by adding class `table-active` to the ````<tr></tr>```` element.

<table class="show-quick-actions-on-hover table table-autofit table-list table-responsive-lg">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="text-truncate" title="Description">Title</span>
			</th>
			<th>Status</th>
			<th>Modified Date</th>
			<th>Display Date</th>
			<th>Author</th>
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
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<button class="btn btn-unstyled quick-action-item" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</button>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="table-active">
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>
				21148
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21149</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21150</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```text/html
<table class="show-quick-actions-on-hover table table-autofit table-list table-responsive-lg">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="text-truncate" title="Description">Title</span>
			</th>
			<th>Status</th>
			<th>Modified Date</th>
			<th>Display Date</th>
			<th>Author</th>
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
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<button class="btn btn-unstyled quick-action-item" type="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</button>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="table-active">
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>
				21148
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21149</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21150</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

</article>


<article id="table-list-with-table-hover">

### Table List with Table Hover

<table class="show-quick-actions-on-hover table table-autofit table-hover table-list table-responsive-sm">
	<thead>
		<tr>
			<th></th>
			<th class="table-cell-content">
				<span class="text-truncate" title="Description">Description</span>
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
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="table-active">
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```text/html
<table class="show-quick-actions-on-hover table table-autofit table-hover table-list table-responsive-sm">
	<thead>
		<tr>
			<th></th>
			<th class="table-cell-content">
				<span class="text-truncate" title="Description">Description</span>
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
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="table-active">
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input checked class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="custom-control custom-checkbox">
					<label>
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="quick-action-menu">
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
							<use xlink:href="/vendor/lexicon/icons.svg#trash" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
							<use xlink:href="/vendor/lexicon/icons.svg#download" />
						</svg>
					</a>
					<a class="quick-action-item" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
							<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
						</svg>
					</a>
				</div>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="#1">Remove</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

</article>


<article id="table-helpers">

### Table Helpers

> `table-autofit` constrains table columns to be only as wide as its content, but must be used with `table-cell-content`. `table-cell-content` will fill the remaining space.

<table class="table table-autofit table-responsive">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="text-truncate" title="Description">Title</span>
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
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
		</tr>
	</tbody>
</table>

> `table-heading-nowrap` keeps headings on one line.

<table class="table table-autofit table-heading-nowrap table-responsive">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="text-truncate" title="Description">Title</span>
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
						<input class="custom-control-input" type="checkbox">
						<span class="custom-control-indicator"></span>
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
		</tr>
	</tbody>
</table>

</article>


<script>
{literal}
$(function() {
	$('.table').on('click', 'input[type="checkbox"]', function(event) {
		var $this = $(this);
		$this.closest('tr').toggleClass('table-active');
	});
});
{/literal}
</script>