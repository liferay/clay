---
title: Tables
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Table List

> A table styled like a list. The active state can be invoked by adding class <code>active</code> to the `<tr></tr>` element.

<div class="alert alert-warning">
	Class <code>table-bordered</code> not compatible with <code>table-list</code>.
</div>

<table class="table table-autofit table-list table-responsive-lg">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="active">
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input checked class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>
				21148
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21149</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21150</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```xml
<table class="table table-autofit table-list table-responsive-lg">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="active">
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input checked class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>
				21148
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21149</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21150</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

</article>

<article id="2">

### Table List Striped

> Adding the `table-striped` class to the `table` element will style the table with alternating background for rows.

<table class="table table-autofit table-list table-responsive-sm table-striped">
	<thead>
		<tr>
			<th></th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Description</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

</article>

<article id="3">

### Table List Hover

> Adding the `table-hover` class to the `table` element will cause the rows to change color on hover.

<table class="table table-autofit table-hover table-list table-responsive-sm">
	<thead>
		<tr>
			<th></th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Description</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="active">
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input checked class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Pumpkin spice and, java sit whipped grinder steamed.">Pumpkin spice and, java sit whipped grinder steamed.</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td><a href="#1">jpg</a></td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

</article>

<article id="4">

### Table Helpers

> <code>table-autofit</code> constrains table columns to be only as wide as its content, but must be used with <code>table-cell-content</code>. <code>table-cell-content</code> will fill the remaining space.

<table class="table table-autofit table-responsive">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
		</tr>
	</tbody>
</table>

```xml
<table class="table table-autofit table-responsive">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
		</tr>
	</tbody>
</table>
```

> <code>table-heading-nowrap</code> keeps headings on one line.

<table class="table table-autofit table-heading-nowrap table-responsive">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
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

<article id="5">

### Vertical Alignment

> We have added some classes to help vertically align contents inside a table. The classes <code>table-valign-bottom</code>, <code>table-valign-middle</code>, and <code>table-valign-top</code> on `<table>` will vertically align table cell contents on the bottom, middle, and top, respectively.

> The classes <code>thead-valign-bottom</code>, <code>thead-valign-middle</code>, and <code>thead-valign-top</code> on `<table>` will vertically align the contents inside the table head.

> The classes <code>tbody-valign-bottom</code>, <code>tbody-valign-middle</code>, and <code>tbody-valign-top</code> on `<table>` will vertically align the contents inside the table body.

<div class="row-spacing">
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="tableValignBottom">table-valign-bottom</a>
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="tableValignMiddle">table-valign-middle</a>
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="tableValignTop">table-valign-top</a>
</div>

<div class="row-spacing">
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="tbodyValignBottom">tbody-valign-bottom</a>
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="tbodyValignMiddle">tbody-valign-middle</a>
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="tbodyValignTop">tbody-valign-top</a>
</div>

<div class="row-spacing">
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="theadValignBottom">thead-valign-bottom</a>
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="theadValignMiddle">thead-valign-middle</a>
	<a class="btn btn-default table-vertical-align-button" href="javascript:;" id="theadValignTop">thead-valign-top</a>
</div>

<table class="table table-autofit table-heading-nowrap table-list table-responsive-xl" id="verticalAlignTableListDemo">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="active">
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input checked class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>
				21148
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21149</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21150</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>

```xml
<div class="row-spacing">
	<a class="btn btn-default table-vertical-align-button" href="#" id="tableValignBottom">table-valign-bottom</a>
	<a class="btn btn-default table-vertical-align-button" href="#" id="tableValignMiddle">table-valign-middle</a>
	<a class="btn btn-default table-vertical-align-button" href="#" id="tableValignTop">table-valign-top</a>
</div>

<div class="row-spacing">
	<a class="btn btn-default table-vertical-align-button" href="#" id="tbodyValignBottom">tbody-valign-bottom</a>
	<a class="btn btn-default table-vertical-align-button" href="#" id="tbodyValignMiddle">tbody-valign-middle</a>
	<a class="btn btn-default table-vertical-align-button" href="#" id="tbodyValignTop">tbody-valign-top</a>
</div>

<div class="row-spacing">
	<a class="btn btn-default table-vertical-align-button" href="#" id="theadValignBottom">thead-valign-bottom</a>
	<a class="btn btn-default table-vertical-align-button" href="#" id="theadValignMiddle">thead-valign-middle</a>
	<a class="btn btn-default table-vertical-align-button" href="#" id="theadValignTop">thead-valign-top</a>
</div>

<table class="table table-autofit table-heading-nowrap table-list table-responsive-xl" id="verticalAlignTableListDemo">
	<thead>
		<tr>
			<th></th>
			<th>ID</th>
			<th class="table-cell-content">
				<span class="truncate-text" title="Description">Title</span>
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
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21146</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr class="active">
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input checked class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>
				21148
			</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Frappuccino medium americano">Frappuccino medium americano</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21149</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<label class="form-check-label">
						<input class="form-check-input" type="checkbox" value="">
					</label>
				</div>
			</td>
			<td>21150</td>
			<td class="table-cell-content">
				<span class="truncate-text" title="Cultivar extra">Cultivar extra</span>
			</td>
			<td>--</td>
			<td>2 Hours Ago</td>
			<td>--</td>
			<td>Stanley Nelson</td>
			<td>Folder</td>
			<td>
				<div class="dropdown">
					<a class="dropdown-toggle" data-toggle="dropdown" href="#1">
						<svg class="icon-monospaced lexicon-icon">
							<use xlink:href="/vendor/clay/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<div class="dropdown-menu dropdown-menu-left-side">
						<a class="dropdown-item" href="#1">Download</a>
						<a class="dropdown-item" href="#1">Edit</a>
						<a class="dropdown-item" href="#1">Move</a>
						<a class="dropdown-item" href="#1">Checkout</a>
						<a class="dropdown-item" href="#1">Permissions</a>
						<a class="dropdown-item" href="#1">Move to Recycle Bin</a>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</table>
```

</article>

<article id="6">

### Default Table

```xml
<table class="table table-responsive">
	...
</table>
```

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

```xml
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
```

</article>

<article id="7">

### Table Striped

```xml
<table class="table table-responsive table-striped">
	...
</table>
```

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

</article>

<article id="8">

### Table Bordered

```xml
<table class="table table-bordered table-responsive">
	...
</table>
```

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

</article>

<article id="9">

### Table Hover

```xml
<table class="table table-bordered table-hover">
	...
</table>
```

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

<script>
{literal}
window.onload = function() {
	$('.table-list').on('click', 'input[type="checkbox"]', function(event) {
		var $this = $(this);
		$this.closest('tr').toggleClass('active');
	});
	$(document).on('click', '.table-vertical-align-button', function(event) {
		event.preventDefault();
		var className = $(this).text();
		$('#verticalAlignTableListDemo').removeClass().addClass('table table-list ' + className);
	});
};
{/literal}
</script>

</article>
