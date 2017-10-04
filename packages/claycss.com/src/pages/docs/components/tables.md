---
title: Tables
description: Components
layout: "guide"
weight: 100
---

<article id="table-list">

### Table List

> A table styled like a list. The active state can be invoked by adding class `table-active` to the ````<tr></tr>```` element.

<div class="alert alert-warning">
	Class <code>table-bordered</code> not compatible with <code>table-list</code>.
</div>

<table class="show-dropdown-action-on-active table table-autofit table-list table-responsive-lg">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```text/html
<table class="show-dropdown-action-on-active table table-autofit table-list table-responsive-lg">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

</article>


<article id="table-list-with-table-striped">

### Table List with Table Striped

<table class="show-dropdown-action-on-active table table-autofit table-list table-responsive-sm table-striped">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```text/html
<table class="show-dropdown-action-on-active table table-autofit table-list table-responsive-sm table-striped">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<span class="text-truncate" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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

<table class="show-dropdown-action-on-active table table-autofit table-hover table-list table-responsive-sm">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```text/html
<table class="show-dropdown-action-on-active table table-autofit table-hover table-list table-responsive-sm">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

</article>


<article id="table-list-with-table-bordered">

### Table List with Table Bordered

<table class="show-dropdown-action-on-active table table-autofit table-bordered table-list table-responsive-sm">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```text/html
<table class="show-dropdown-action-on-active table table-autofit table-bordered table-list table-responsive-sm">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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


<article id="vertical-alignment">

### Vertical Alignment

> We have added some classes to help vertically align contents inside a table. The classes `table-valign-bottom`, `table-valign-middle`, and `table-valign-top` on ````<table>```` will vertically align table cell contents on the bottom, middle, and top, respectively.

> The classes `thead-valign-bottom`, `thead-valign-middle`, and `thead-valign-top` on ````<table>```` will vertically align the contents inside the table head.

> The classes `tbody-valign-bottom`, `tbody-valign-middle`, and `tbody-valign-top` on ````<table>```` will vertically align the contents inside the table body.

<div>
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="tableValignBottom">table-valign-bottom</a>&nbsp;
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="tableValignMiddle">table-valign-middle</a>&nbsp;
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="tableValignTop">table-valign-top</a>
</div>

<div>
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="tbodyValignBottom">tbody-valign-bottom</a>&nbsp;
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="tbodyValignMiddle">tbody-valign-middle</a>&nbsp;
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="tbodyValignTop">tbody-valign-top</a>
</div>

<div>
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="theadValignBottom">thead-valign-bottom</a>&nbsp;
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="theadValignMiddle">thead-valign-middle</a>&nbsp;
	<a class="btn btn-secondary table-vertical-align-button" href="#" id="theadValignTop">thead-valign-top</a>
</div>

<table class="show-dropdown-action-on-active table table-autofit table-heading-nowrap table-list table-responsive-xl" id="verticalAlignTableListDemo">
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
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
				<div class="dropdown dropdown-action">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div aria-labelledby="" class="dropdown-menu dropdown-menu-horizontal dropdown-menu-left-side-middle dropdown-menu-unstyled">
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
								<use xlink:href="/vendor/lexicon/icons.svg#trash" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
								<use xlink:href="/vendor/lexicon/icons.svg#download" />
							</svg>
						</a>
						<a class="dropdown-item" href="#1">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
							</svg>
						</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

</article>


<article id="table">

### Table

<table class="table table-responsive">
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
			<td><a href="#1">Afganistan</a></td>
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
			<td><a href="#1">Brazil</a></td>
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
			<td><a href="#1">Congo, Democratic Republic of the</a></td>
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
			<td><a href="#1">Spain</a></td>
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

```text/html
```

</article>


<article id="table-striped">

### Table Striped

<table class="table table-responsive table-striped">
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
			<td><a href="#1">Afganistan</a></td>
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
			<td><a href="#1">Brazil</a></td>
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
			<td><a href="#1">Congo, Democratic Republic of the</a></td>
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
			<td><a href="#1">Spain</a></td>
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

```text/html
```

</article>


<article id="table-bordered">

### Table Bordered

<table class="table table-bordered table-responsive">
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
			<td><a href="#1">Afganistan</a></td>
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
			<td><a href="#1">Albania</a></td>
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
			<td><a href="#1">Brazil</a></td>
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
			<td><a href="#1">Spain</a></td>
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

```text/html
```

</article>


<article id="table-hover">

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
				<td><a href="#1">Afganistan</a></td>
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
				<td><a href="#1">Brazil</a></td>
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
				<td><a href="#1">Congo, Democratic Republic of the</a></td>
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
				<td><a href="#1">Spain</a></td>
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

```text/html
```

</article>

<script>
{literal}
$(function() {
	$('.table').on('click', 'input[type="checkbox"]', function(event) {
		var $this = $(this);
		$this.closest('tr').toggleClass('table-active');
	});
	$(document).on('click', '.table-vertical-align-button', function(event) {
		event.preventDefault();
		var className = $(this).text();
		$('#verticalAlignTableListDemo').removeClass().addClass('table table-list ' + className);
	});
});
{/literal}
</script>