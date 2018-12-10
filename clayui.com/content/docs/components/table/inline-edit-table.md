---
title: "Inline Edit Table"
---

### Description

A table variation that lets users modify certain values of the entry without going to the detail page.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/Table/inlineEditTable.html">Inline Edit Table Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Inline Edit Table

<div class="table-responsive">
	<table class="table table-autofit table-list table-nowrap">
		<thead>
			<tr>
				<th>
					<span class="text-truncate-inline">
						<span class="text-truncate" title=""></span>
					</span>
				</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Title">Title</span>
					</span>
				</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Author">Author</span>
					</span>
				</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Modified Date">Modified Date</span>
					</span>
				</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Web Content 342122-322-abcdefg">Web Content 342122-322-abcdefg</span>
						</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-list-link text-truncate-inline" href="#1">
						<span class="text-truncate" title="Marge Peggie Margaret Meg Maggie Miller">Marge Peggie Margaret Meg Maggie Miller</span>
					</a>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="35 Seconds Ago">35 Seconds Ago</span>
					</span>
				</td>
				<td>
					<button class="btn btn-secondary btn-sm" type="button">Edit</button>
				</td>
				<td>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
						</ul>
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
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Web Content C">Web Content C</span>
						</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-list-link text-truncate-inline" href="#1">
						<span class="text-truncate" title="Arnold Geen">Arnold Geen</span>
					</a>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="15 Minutes Ago">15 Minutes Ago</span>
					</span>
				</td>
				<td>
					<button class="btn btn-secondary btn-sm" type="button">Edit</button>
				</td>
				<td>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
						</ul>
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
				<td class="table-cell-expand">
					<input class="form-control form-control-sm" type="text" value="Web Content B"/>
				</td>
				<td class="table-cell-expand">
					<input class="form-control form-control-sm" type="text" value="Matthew Richards"/>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="20 Minutes Ago">20 Minutes Ago</span>
					</span>
				</td>
				<td colspan="2">
					<button class="btn btn-primary btn-sm" type="button">Save</button>
					<button class="btn btn-secondary btn-sm" type="button">Cancel</button>
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
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Web Content E">Web Content E</span>
						</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-list-link text-truncate-inline" href="#1">
						<span class="text-truncate" title="Michael Dellen">Michael Dellen</span>
					</a>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="5 Minutes Ago">5 Minutes Ago</span>
					</span>
				</td>
				<td>
					<button class="btn btn-secondary btn-sm" type="button">Edit</button>
				</td>
				<td>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

```html
<div class="table-responsive">
	<table class="table table-autofit table-list table-nowrap">
		<thead>
			<tr>
				<th>
					<span class="text-truncate-inline">
						<span class="text-truncate" title=""></span>
					</span>
				</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Title">Title</span>
					</span>
				</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Author">Author</span>
					</span>
				</th>
				<th class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="Modified Date">Modified Date</span>
					</span>
				</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="custom-control custom-checkbox">
						<label>
							<input class="custom-control-input" type="checkbox"/>
							<span class="custom-control-label"></span>
						</label>
					</div>
				</td>
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Web Content 342122-322-abcdefg">Web Content 342122-322-abcdefg</span>
						</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-list-link text-truncate-inline" href="#1">
						<span class="text-truncate" title="Marge Peggie Margaret Meg Maggie Miller">Marge Peggie Margaret Meg Maggie Miller</span>
					</a>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="35 Seconds Ago">35 Seconds Ago</span>
					</span>
				</td>
				<td>
					<button class="btn btn-secondary btn-sm" type="button">Edit</button>
				</td>
				<td>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
						</ul>
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
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Web Content C">Web Content C</span>
						</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-list-link text-truncate-inline" href="#1">
						<span class="text-truncate" title="Arnold Geen">Arnold Geen</span>
					</a>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="15 Minutes Ago">15 Minutes Ago</span>
					</span>
				</td>
				<td>
					<button class="btn btn-secondary btn-sm" type="button">Edit</button>
				</td>
				<td>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
						</ul>
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
				<td class="table-cell-expand">
					<input class="form-control form-control-sm" type="text" value="Web Content B"/>
				</td>
				<td class="table-cell-expand">
					<input class="form-control form-control-sm" type="text" value="Matthew Richards"/>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="20 Minutes Ago">20 Minutes Ago</span>
					</span>
				</td>
				<td colspan="2">
					<button class="btn btn-primary btn-sm" type="button">Save</button>
					<button class="btn btn-secondary btn-sm" type="button">Cancel</button>
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
				<td class="table-cell-expand">
					<div class="table-list-title">
						<a class="text-truncate-inline" href="#1">
							<span class="text-truncate" title="Web Content E">Web Content E</span>
						</a>
					</div>
				</td>
				<td class="table-cell-expand">
					<a class="table-list-link text-truncate-inline" href="#1">
						<span class="text-truncate" title="Michael Dellen">Michael Dellen</span>
					</a>
				</td>
				<td class="table-cell-expand">
					<span class="text-truncate-inline">
						<span class="text-truncate" title="5 Minutes Ago">5 Minutes Ago</span>
					</span>
				</td>
				<td>
					<button class="btn btn-secondary btn-sm" type="button">Edit</button>
				</td>
				<td>
					<div class="dropdown dropdown-action">
						<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
							<svg class="lexicon-icon lexicon-icon-ellipsis-v" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#ellipsis-v" />
							</svg>
						</a>
						<ul aria-labelledby="" class="dropdown-menu dropdown-menu-right">
							<li><a class="dropdown-item" href="#1" role="button">Edit</a></li>
							<li><a class="dropdown-item" href="#1" role="button">Recycle Bin</a></li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>
```

