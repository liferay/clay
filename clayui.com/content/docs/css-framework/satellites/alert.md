---
title: "Alerts"
---

### Colors

Alerts are available in the standard colors shown below:

<div class="row">
	<div class="col-md-3">
		<div class="alert alert-primary">
			<strong>alert alert-primary</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-secondary">
			<strong>alert alert-secondary</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-success">
			<strong>alert alert-success</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-info">
			<strong>alert alert-info</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-warning">
			<strong>alert alert-warning</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-danger">
			<strong>alert alert-danger</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-dark">
			<strong>alert alert-dark</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-light">
			<strong>alert alert-light</strong>
		</div>
	</div>
</div>

### Alert Notifications Fixed

A fixed positioned container for placing alerts on the top right corner of the page. This component can generally be placed anywhere on the page.

### Alert Notifications Absolute

<p>An absolute positioned container for placing alerts on the top right corner relative to <code>.alert-container</code>. Use this to create sticky positioned alerts with javascript, modifying the CSS property <code>transform: translateY();</code> or <code>margin-top</code> when <code>scrollY</code> reaches a specific threshold. This component should generally be placed at the top of the page for sticky alerts aligned at the top.</p>

### Alert Lists

<ul class="alert-list">
	<li class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<div class="autofit-section">
						<span class="alert-indicator">
							<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#exclamation-full" />
							</svg>
						</span><strong class="lead">1 Files</strong> couldn't upload.
					</div>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<button class="btn btn-secondary btn-sm" type="button">
							<span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-reload" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#reload" />
							</svg></span>Retry all
						</button>
					</div>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
	<li class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<span class="sticker sticker-secondary">RTF</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">
							file-upload.RTF
						</h4>
						<span class="alert-indicator">
							<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#exclamation-full" />
							</svg>
						</span><strong class="lead">Error:</strong> couldn't upload.
					</div>
				</div>
				<div class="autofit-col">
					<button class="btn btn-secondary btn-sm" type="button">
						<span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-reload" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#reload" />
						</svg></span>Retry
					</button>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
	<li class="alert alert-light alert-dismissible alert-fluid">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<span class="sticker sticker-secondary">JPG</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">file-name.JPG</h4>
						<div class="component-subtitle">Uploaded - 142.1KB</div>
					</div>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
	<li class="alert alert-light alert-dismissible alert-fluid">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<span class="sticker sticker-secondary">RTF</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">ABC-file.RTF</h4>
						<div class="progress-group progress-group-stacked">
							<div class="progress">
								<div aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 34%;"></div>
							</div>
							<div class="autofit-row">
								<div class="autofit-col autofit-col-expand">
									<div class="component-subtitle">Size: 156.6 MB</div>
								</div>
								<div class="autofit-col">
									<div class="component-subtitle">34%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
</ul>

```html
<ul class="alert-list">
	<li class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<div class="autofit-section">
						<span class="alert-indicator">
							<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#exclamation-full" />
							</svg>
						</span><strong class="lead">1 Files</strong> couldn't upload.
					</div>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<button class="btn btn-secondary btn-sm" type="button">
							<span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-reload" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#reload" />
							</svg></span>Retry all
						</button>
					</div>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
	<li class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<span class="sticker sticker-secondary">RTF</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">
							file-upload.RTF
						</h4>
						<span class="alert-indicator">
							<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
								<use href="/images/icons/icons.svg#exclamation-full" />
							</svg>
						</span><strong class="lead">Error:</strong> couldn't upload.
					</div>
				</div>
				<div class="autofit-col">
					<button class="btn btn-secondary btn-sm" type="button">
						<span class="inline-item inline-item-before"><svg class="lexicon-icon lexicon-icon-reload" focusable="false" role="presentation">
							<use href="/images/icons/icons.svg#reload" />
						</svg></span>Retry
					</button>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
	<li class="alert alert-light alert-dismissible alert-fluid">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<span class="sticker sticker-secondary">JPG</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">file-name.JPG</h4>
						<div class="component-subtitle">Uploaded - 142.1KB</div>
					</div>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
	<li class="alert alert-light alert-dismissible alert-fluid">
		<div class="container-fluid">
			<div class="autofit-float autofit-padded autofit-row autofit-row-center">
				<div class="autofit-col">
					<span class="sticker sticker-secondary">RTF</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">ABC-file.RTF</h4>
						<div class="progress-group progress-group-stacked">
							<div class="progress">
								<div aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 34%;"></div>
							</div>
							<div class="autofit-row">
								<div class="autofit-col autofit-col-expand">
									<div class="component-subtitle">Size: 156.6 MB</div>
								</div>
								<div class="autofit-col">
									<div class="component-subtitle">34%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</li>
</ul>
```
