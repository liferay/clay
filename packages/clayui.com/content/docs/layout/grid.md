---
title: "Grid"
path: "/docs/grid.html"
---

### Description

The aim of the Lexicon layout framework is to provide a common structural reference that contributes to streamlining the component construction and page composition processes as well as favoring visual consistency between the different elements of the interface.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/designPrinciples/grid.html">Grid Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="container">
<h3 class="component-title">
	<a href="#container">Container</a>
</h3>

> <code>.container</code> has a specific <code>max-width</code> for each grid breakpoint (e.g., Atlas 540px wide, 720px wide, 960px wide, and 1248px wide).

<table>
	<thead>
		<tr>
			<th colspan="2">Base</th>
		</tr>
		<tr>
			<th>Breakpoint (min-width)</th>
			<th>Container (max-width)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>576px</td>
			<td>540px</td>
		</tr>
		<tr>
			<td>768px</td>
			<td>720px</td>
		</tr>
		<tr>
			<td>992px</td>
			<td>960px</td>
		</tr>
		<tr>
			<td>1200px</td>
			<td>1140px</td>
		</tr>
	</tbody>
</table>

<table class="mb-4">
	<thead>
		<tr>
			<th colspan="2">Atlas</th>
		</tr>
		<tr>
			<th>Breakpoint (min-width)</th>
			<th>Container (max-width)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>576px</td>
			<td>540px</td>
		</tr>
		<tr>
			<td>768px</td>
			<td>720px</td>
		</tr>
		<tr>
			<td>992px</td>
			<td>960px</td>
		</tr>
		<tr>
			<td>1280px</td>
			<td>1248px</td>
		</tr>
	</tbody>
</table>

<div class="bg-primary container">
	<div class="text-white">
		container
	</div>
</div>

```text/html
<div class="container"></div>
```

</article>


<article id="container-fluid">
<h3 class="component-title">
	<a href="#container-fluid">Container Fluid</a>
</h3>

> <a href="https://getbootstrap.com/docs/4.0/layout/grid/">https://getbootstrap.com/docs/4.0/layout/grid/</a>

> Use <code>.container-fluid</code> with <code>.container-fluid-max-{literal}{{/literal}sm|md|lg|xl{literal}}{/literal}</code> to create fluid containers that don't expand beyond a set width (e.g., For Atlas xl => 1248px).

<table>
	<thead>
		<tr>
			<th colspan="2">Base</th>
		</tr>
		<tr>
			<th>Name</th>
			<th>Container Fluid (max-width)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>.container-fluid-max-sm</td>
			<td>540px</td>
		</tr>
		<tr>
			<td>.container-fluid-max-md</td>
			<td>720px</td>
		</tr>
		<tr>
			<td>.container-fluid-max-lg</td>
			<td>960px</td>
		</tr>
		<tr>
			<td>.container-fluid-max-xl</td>
			<td>1140px</td>
		</tr>
	</tbody>
</table>
<table class="mb-4">
	<thead>
		<tr>
			<th colspan="2">Atlas</th>
		</tr>
		<tr>
			<th>Name</th>
			<th>Container Fluid (max-width)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>.container-fluid-max-sm</td>
			<td>540px</td>
		</tr>
		<tr>
			<td>.container-fluid-max-md</td>
			<td>720px</td>
		</tr>
		<tr>
			<td>.container-fluid-max-lg</td>
			<td>960px</td>
		</tr>
		<tr>
			<td>.container-fluid-max-xl</td>
			<td>1248px</td>
		</tr>
	</tbody>
</table>
<div class="bg-primary container-fluid container-fluid-max-sm">
	<div class="text-white">
		container-fluid-max-sm
	</div>
</div>
<div class="bg-secondary container-fluid container-fluid-max-md">
	<div class="text-white">
		container-fluid-max-md
	</div>
</div>
<div class="bg-success container-fluid container-fluid-max-lg">
	<div class="text-white">
		container-fluid-max-lg
	</div>
</div>
<div class="bg-danger container-fluid container-fluid-max-xl">
	<div class="text-white">
		container-fluid-max-xl
	</div>
</div>

```text/html
<div class="container-fluid container-fluid-max-sm"></div>

<div class="container-fluid container-fluid-max-md"></div>

<div class="container-fluid container-fluid-max-lg"></div>

<div class="container-fluid container-fluid-max-xl"></div>
```

</article>


<article id="container-form-lg">
<h3 class="component-title">
	<a href="#container-form-lg">Container Form Lg</a>
</h3>

> Use <code>.container-form-lg</code> with <code>.container</code> or <code>.container-fluid</code> to properly space between application controls and the form. This class only modifies the <code>padding</code> on the container.

<div class="alert alert-warning">If you need additional breakpoints such as <code>.container-form-{literal}{{/literal}sm|md|xl{literal}}{/literal}</code> you will need to define them yourself.</div>

<div>
	<nav class="application-bar application-bar-dark navbar navbar-expand-md">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link nav-link-monospaced" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
							<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
						</svg>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link nav-link-monospaced" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
							<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
						</svg>
					</a>
				</li>
			</ul>
			<h1 class="navbar-title navbar-text-truncate">Application</h1>
			<ul class="navbar-nav">
				<li class="dropdown nav-item">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
						<li><a class="dropdown-item" href="#1">Action</a></li>
						<li><a class="dropdown-item" href="#1">Another action</a></li>
						<li><a class="dropdown-item" href="#1">Something else here</a></li>
						<li class="dropdown-divider"></li>
						<li><a class="dropdown-item" href="#1">Separated link</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
	<div class="container-fluid container-fluid-max-xl container-form-lg">
		<div class="sheet sheet-lg">
			<h2 class="sheet-title">Form Title</h2>
		</div>
	</div>
</div>

```text/html
<div class="container-fluid container-fluid-max-xl container-form-lg"></div>
```

</article>


<article id="container-view">
<h3 class="component-title">
	<a href="#container-view">Container View</a>
</h3>

> Use <code>.container-view</code> with <code>.container</code> or <code>.container-fluid</code> to properly space between application controls and view pages (e.g., Card View, Table View, or List View). This class only modifies the <code>padding</code> on the container.

<div>
	<nav class="application-bar application-bar-dark navbar navbar-expand-md">
		<div class="container-fluid container-fluid-max-xl">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link nav-link-monospaced" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-product-menu-closed">
							<use xlink:href="/vendor/lexicon/icons.svg#product-menu-closed" />
						</svg>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link nav-link-monospaced" href="#1">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-angle-left">
							<use xlink:href="/vendor/lexicon/icons.svg#angle-left" />
						</svg>
					</a>
				</li>
			</ul>
			<h1 class="navbar-title navbar-text-truncate">Application</h1>
			<ul class="navbar-nav">
				<li class="dropdown nav-item">
					<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle nav-link nav-link-monospaced" data-toggle="dropdown" href="#1" role="button">
						<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
							<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
						</svg>
					</a>
					<ul aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu dropdown-menu-right">
						<li><a class="dropdown-item" href="#1">Action</a></li>
						<li><a class="dropdown-item" href="#1">Another action</a></li>
						<li><a class="dropdown-item" href="#1">Something else here</a></li>
						<li class="dropdown-divider"></li>
						<li><a class="dropdown-item" href="#1">Separated link</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
	<div class="container-fluid container-fluid-max-xl container-view">
		<form>
			<div class="table-responsive">
				<table class="show-quick-actions-on-hover table table-autofit table-heading-nowrap table-list">
					<thead>
						<tr>
							<th></th>
							<th colspan="2">
								Item Title
								<svg aria-hidden="true" class="d-none lexicon-icon lexicon-icon-order-arrow-up">
									<use xlink:href="/vendor/lexicon/icons.svg#order-arrow-up" />
								</svg>
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-order-arrow-down">
									<use xlink:href="/vendor/lexicon/icons.svg#order-arrow-down" />
								</svg>
							</th>
							<th>Size</th>
							<th>Status</th>
							<th>Creation Date</th>
							<th>Modification Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div class="custom-control custom-checkbox">
									<label>
										<input class="custom-control-input" type="checkbox">
										<span class="custom-control-label"></span>
									</label>
								</div>
							</td>
							<td>
								<span class="sticker sticker-danger">PNG</span>
							</td>
							<td class="table-cell-expand">
								<span class="text-truncate" title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.">Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.</span>
							</td>
							<td>700KB</td>
							<td>
								<span class="label label-success">
									<span class="label-item label-item-expand">Approved</span>
								</span>
							</td>
							<td>6 days ago</td>
							<td>4 days ago</td>
							<td>
								<div class="quick-action-menu">
									<a class="component-action quick-action-item" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-trash">
											<use xlink:href="/vendor/lexicon/icons.svg#trash" />
										</svg>
									</a>
									<a class="component-action quick-action-item" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-download">
											<use xlink:href="/vendor/lexicon/icons.svg#download" />
										</svg>
									</a>
									<a class="component-action quick-action-item" href="#1">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-expand">
											<use xlink:href="/vendor/lexicon/icons.svg#expand" />
										</svg>
									</a>
								</div>
								<div class="dropdown dropdown-action">
									<a aria-expanded="false" aria-haspopup="true" class="component-action dropdown-toggle" data-toggle="dropdown" href="#1" id="dropdownAction1" role="button">
										<svg aria-hidden="true" class="lexicon-icon lexicon-icon-ellipsis-v">
											<use xlink:href="/vendor/lexicon/icons.svg#ellipsis-v" />
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
		</form>
	</div>
</div>

```text/html
<div class="container-fluid container-fluid-max-xl container-view"></div>
```

</article>