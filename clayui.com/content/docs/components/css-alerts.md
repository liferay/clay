---
title: 'Alerts'
description: 'Alerts are used to capture the attention of the user in an intrusive way. They can be used just to say that something went right, or perhaps to say that something needs to be reviewed.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Colors](#colors)
    -   [Non-standard colors](#non-standard-colors)
-   [Examples](#examples)
    -   [Toast](#toast)
    -   [Embedded](#embedded)
    -   [Stripe](#stripe)
-   [Non-standard examples](#non-standard-examples)
    -   [Alert Lists](#alert-lists)
-   [Additional Options](#additional-options)
    -   [Mixed HTML Content](#mixed-html-content)
    -   [Dismissible Alerts](#dismissible-alerts)
    -   [Alert Notifications Absolute](#alert-notifications-absolute)
    -   [Fixed Notifications](#fixed-notifications)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/alerts/">Alerts Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	See the implementation of the <a href="/docs/components/alert.html">Alerts component in React</a> following the Lexicon <a href="https://liferay.design/lexicon/core-components/alerts/">Alerts Pattern</a>.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#alert">WAI-ARIA</a> accessibility pratices for alerts when writting your markup.
</div>

## Colors

Lexicon adopts in its design system the following colors below:

<div class="row">
	<div class="col-md-3">
		<div class="alert alert-success">
			<strong>.alert.alert-success</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-info">
			<strong>.alert.alert-info</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-warning">
			<strong>.alert.alert-warning</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-danger">
			<strong>.alert.alert-danger</strong>
		</div>
	</div>
</div>

### Non-standard colors

The colors below do not follow Lexicon standards but follow the idea of [​​satellite components](https://liferay.design/lexicon), Clay provides non-standard colors to give you more flexibility to build UI that belong to the product.

<div class="row">
	<div class="col-md-3">
		<div class="alert alert-primary">
			<strong>.alert.alert-primary</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-secondary">
			<strong>.alert.alert-secondary</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-dark">
			<strong>.alert.alert-dark</strong>
		</div>
	</div>
	<div class="col-md-3">
		<div class="alert alert-light">
			<strong>.alert.alert-light</strong>
		</div>
	</div>
</div>

## Examples

### Toast

This type of alert is specific for toast messages. These type of messages appear on the top right corner of the screen. The maximum width of a toast message is 360px, and the height can vary depending on the number of rows. It always has a close action.

<div class="sheet-example">
	<div id="claySiteAlertsNotificationsSpacer">
		<div class="row">
			<div class="col-md-6">
				<div class="alert-container container">
					<div class="alert-notifications alert-notifications-absolute">
						<div class="alert alert-dismissible alert-danger" role="alert">
							<span class="alert-indicator">
								<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#exclamation-full"></use>
								</svg>
							</span>
							<strong class="lead">Error:</strong> This is an error message
							<button aria-label="Close" class="close" data-dismiss="alert" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="alert-container container">
					<div class="alert-notifications alert-notifications-absolute">
						<div class="alert alert-dismissible alert-info" role="alert">
							<span class="alert-indicator">
								<svg class="lexicon-icon lexicon-icon-info-circle" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#info-circle"></use>
								</svg>
							</span>
							<strong class="lead">Info:</strong> This is an info message.
							<button aria-label="Close" class="close" data-dismiss="alert" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="alert-container container">
					<div class="alert-notifications alert-notifications-absolute">
						<div class="alert alert-dismissible alert-success" role="alert">
							<span class="alert-indicator">
								<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#check-circle-full"></use>
								</svg>
							</span>
							<strong class="lead">Success:</strong> This is a success message
							<button aria-label="Close" class="close" data-dismiss="alert" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="alert-container container">
					<div class="alert-notifications alert-notifications-absolute">
						<div class="alert alert-dismissible alert-warning" role="alert">
							<span class="alert-indicator">
								<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#warning-full"></use>
								</svg>
							</span>
							<strong class="lead">Warning:</strong> This is a warning message.
							<button aria-label="Close" class="close" data-dismiss="alert" type="button">
								<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="alert alert-dismissible alert-danger" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Error:</strong> This is an error message
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		...
	</button>
</div>

<div class="alert alert-dismissible alert-info" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Info:</strong> This is an info message.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		...
	</button>
</div>

<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Success:</strong> This is a success message
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		...
	</button>
</div>

<div class="alert alert-dismissible alert-warning" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Warning:</strong> This is a warning message.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		...
	</button>
</div>
```

### Embedded

Embedded alerts are meant for use in forms. Usually you will only need to use the information once. Its width depends on the width of the container it is placed in, always respecting the container margins to the content. The close action is not required for embedded alerts.

<div class="sheet-example">
	<div class="alert alert-danger" role="alert">
		<span class="alert-indicator">
			<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#exclamation-full"></use>
			</svg>
		</span>
		<strong class="lead">Error:</strong> This is an error message
	</div>
	<div class="alert alert-success" role="alert">
		<span class="alert-indicator">
			<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle-full"></use>
			</svg>
		</span>
		<strong class="lead">Error:</strong> This is a success message
	</div>
	<div class="alert alert-info" role="alert">
		<span class="alert-indicator">
			<svg class="lexicon-icon lexicon-icon-info-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#info-circle"></use>
			</svg>
		</span>
		<strong class="lead">Error:</strong> This is an info message
	</div>
	<div class="alert alert-warning" role="alert">
		<span class="alert-indicator">
			<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#warning-full"></use>
			</svg>
		</span>
		<strong class="lead">Error:</strong> This is a warning message
	</div>
</div>

```html
<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Error:</strong>This is an error message
</div>

<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Error:</strong>This is a success message
</div>

<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Error:</strong>This is an info message
</div>

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Error:</strong>This is a warning message
</div>
```

### Stripe

Stripe alerts are always placed below the last navigation element, either the header or the navigation bar. This alert usually appears on "Save" action, communicating the status of the action once received from the server. The close action is mandatory in this alert type. Its width is always full container width and pushes all the content below it.

<div class="sheet-example">
	<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container">
			<span class="alert-indicator">
				<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#exclamation-full"></use>
				</svg>
			</span>
			<strong class="lead">Danger</strong> This is an error message
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</div>
	<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
		<div class="container">
			<span class="alert-indicator">
				<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#check-circle-full"></use>
				</svg>
			</span>
			<strong class="lead">Success</strong> This is a success message
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</div>
	<div class="alert alert-dismissible alert-fluid alert-info" role="alert">
		<div class="container">
			<span class="alert-indicator">
				<svg class="lexicon-icon lexicon-icon-info-circle" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#info-circle"></use>
				</svg>
			</span>
			<strong class="lead">Info</strong> This is an info message
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</div>
	<div class="alert alert-dismissible alert-fluid alert-warning" role="alert">
		<div class="container">
			<span class="alert-indicator">
				<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#warning-full"></use>
				</svg>
			</span>
			<strong class="lead">Warning</strong> This is a warning message
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</button>
		</div>
	</div>
</div>

```html
<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			...
		</span>
		<strong class="lead">Danger</strong> This is an error message
		<button
			aria-label="Close"
			class="close"
			data-dismiss="alert"
			type="button"
		>
			...
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			...
		</span>
		<strong class="lead">Success</strong> This is a success message
		<button
			aria-label="Close"
			class="close"
			data-dismiss="alert"
			type="button"
		>
			...
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-info" role="alert">
	<div class="container">
		<span class="alert-indicator">
			...
		</span>
		<strong class="lead">Info</strong> This is an info message
		<button
			aria-label="Close"
			class="close"
			data-dismiss="alert"
			type="button"
		>
			...
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-warning" role="alert">
	<div class="container">
		<span class="alert-indicator">
			...
		</span>
		<strong class="lead">Warning</strong> This is a warning message
		<button
			aria-label="Close"
			class="close"
			data-dismiss="alert"
			type="button"
		>
			...
		</button>
	</div>
</div>
```

## Non-standard examples

These examples are not included in the Lexicon design system but they are built using foundations and Lexicon core components, these components may belong to the product or application.

### Alert Lists

<div class="sheet-example">
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
</div>

```html
<ul class="alert-list">
	<li class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container-fluid">
			<div
				class="autofit-float autofit-padded autofit-row autofit-row-center"
			>
				<div class="autofit-col">
					<div class="autofit-section">
						<span class="alert-indicator">
							...
						</span>
						<strong class="lead">1 Files</strong> couldn't upload.
					</div>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<button class="btn btn-secondary btn-sm" type="button">
							<span class="inline-item inline-item-before">
								...
							</span>
							Retry all
						</button>
					</div>
				</div>
			</div>
			<button
				aria-label="Close"
				class="close"
				data-dismiss="alert"
				type="button"
			>
				...
			</button>
		</div>
	</li>
	<li class="alert alert-danger alert-dismissible alert-fluid" role="alert">
		<div class="container-fluid">
			<div
				class="autofit-float autofit-padded autofit-row autofit-row-center"
			>
				<div class="autofit-col">
					<span class="sticker sticker-secondary">RTF</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">
							file-upload.RTF
						</h4>
						<span class="alert-indicator">
							...
						</span>
						<strong class="lead">Error:</strong> couldn't upload.
					</div>
				</div>
				<div class="autofit-col">
					<button class="btn btn-secondary btn-sm" type="button">
						<span class="inline-item inline-item-before">
							...
						</span>
						Retry
					</button>
				</div>
			</div>
			<button
				aria-label="Close"
				class="close"
				data-dismiss="alert"
				type="button"
			>
				...
			</button>
		</div>
	</li>
	<li class="alert alert-light alert-dismissible alert-fluid">
		<div class="container-fluid">
			<div
				class="autofit-float autofit-padded autofit-row autofit-row-center"
			>
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
			<button
				aria-label="Close"
				class="close"
				data-dismiss="alert"
				type="button"
			>
				...
			</button>
		</div>
	</li>
	<li class="alert alert-light alert-dismissible alert-fluid">
		<div class="container-fluid">
			<div
				class="autofit-float autofit-padded autofit-row autofit-row-center"
			>
				<div class="autofit-col">
					<span class="sticker sticker-secondary">RTF</span>
				</div>
				<div class="autofit-col autofit-col-expand">
					<div class="autofit-section">
						<h4 class="component-title">ABC-file.RTF</h4>
						<div class="progress-group progress-group-stacked">
							<div class="progress">
								<div
									aria-valuenow="34"
									aria-valuemin="0"
									aria-valuemax="100"
									class="progress-bar"
									role="progressbar"
									style="width: 34%;"
								></div>
							</div>
							<div class="autofit-row">
								<div class="autofit-col autofit-col-expand">
									<div class="component-subtitle">
										Size: 156.6 MB
									</div>
								</div>
								<div class="autofit-col">
									<div class="component-subtitle">34%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				aria-label="Close"
				class="close"
				data-dismiss="alert"
				type="button"
			>
				...
			</button>
		</div>
	</li>
</ul>
```

## Additional Options

### Mixed HTML Content

All alerts accept HTML as their content. You can use the following modifiers:

-   `.lead` inside of an alert to make the beginning of your message stand out
-   `.alert-link` to style a link inside your alert

<div class="sheet-example">
	<div class="alert alert-warning" role="alert">
		<span class="alert-indicator">
			<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#warning-full"></use>
			</svg>
		</span>
		<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
	</div>
</div>

```html
<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Warning:</strong> This alert is a
	<a href="#1" class="alert-link">warning message</a>.
</div>
```

### Dismissible Alerts

<div class="sheet-example">
	<div class="alert alert-dismissible alert-success" role="alert">
		<span class="alert-indicator">
			<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle-full"></use>
			</svg>
		</span>
		<strong class="lead">Success:</strong> This is a success closeable alert
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg class="lexicon-icon lexicon-icon-times" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

```html
<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		...
	</span>
	<strong class="lead">Success:</strong> This is a success closeable alert
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		...
	</button>
</div>
```

### Alert Notifications Absolute

An absolute positioned container for placing alerts on the top right corner relative to `.alert-container`. Use this to create sticky positioned alerts with javascript, modifying the CSS property `transform: translateY();` or `margin-top` when `scrollY` reaches a specific threshold. This component should generally be placed at the top of the page for sticky alerts aligned at the top.

```html
<div class="alert-container container">
	<div class="alert-notifications alert-notifications-absolute">
		...
	</div>
</div>
```

### Fixed Notifications

A fixed positioned container for placing alerts on the top right corner of the page. This component can generally be placed anywhere on the page.

```html
<div class="alert-notifications alert-notifications-fixed">
	<div
		class="alert alert-dismissible alert-info alert-notification"
		role="alert"
	>
		...
	</div>
</div>
```
