---
title: Alerts
description: "Alerts are used to capture the attention of the user in an intrusive way. Sometimes just to say that something went right, others to say that something needs to be reviewed."
layout: "guide"
pattern: "alerts"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-alert-toast">

### TOAST

> This type of alert is specific for toast messages. This type of messages appear on the top right corner of the screen. The maximum width of a toast message is 360px and the height can vary depending on the number of rows. It always have a close action.

<div id="claySiteAlertsNotificationsSpacer">
	<div class="row">
		<div class="col-6">
			<div class="alert-container container">
				<div class="alert-notifications alert-notifications-absolute">
					<div class="alert alert-dismissible alert-danger" role="alert">
						<span class="alert-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
								<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
							</svg>
						</span>
						<strong class="lead">Error:</strong> This is an error message
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-6">
			<div class="alert-container container">
				<div class="alert-notifications alert-notifications-absolute">
					<div class="alert alert-dismissible alert-info" role="alert">
						<span class="alert-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
								<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
							</svg>
						</span>
						<strong class="lead">Info:</strong> This is an info message.
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-6">
			<div class="alert-container container">
				<div class="alert-notifications alert-notifications-absolute">
					<div class="alert alert-dismissible alert-success" role="alert">
						<span class="alert-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
								<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
							</svg>
						</span>
						<strong class="lead">Success:</strong> This is a success message
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-6">
			<div class="alert-container container">
				<div class="alert-notifications alert-notifications-absolute">
					<div class="alert alert-dismissible alert-warning" role="alert">
						<span class="alert-indicator">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
								<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
							</svg>
						</span>
						<strong class="lead">Warning:</strong> This is a warning message.
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
								<use xlink:href="/vendor/lexicon/icons.svg#times" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="alert-container container">
	<div class="alert-notifications alert-notifications-absolute">
		<div class="alert alert-dismissible alert-danger" role="alert">
			...
		</div>
	</div>
</div>
```

</article>

<article id="clay-alert-embedded">

### EMBEDDED

> Embedded alerts are thought to be used inside context as forms. Usually you will only need to use the information one. Its width depends on the container with you use it, always respecting the container margins to the content. The close action is not of mandatory use.

<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong> This is an error message
</div>

<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong> This is a success message
</div>

<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
			<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong> This is an info message
</div>

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong> This is a warning message
</div>

```soy
{call ClayAlert.render}
	{param message: This is an error message /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Error' /}
{/param}

{call ClayAlert.render}
	{param message: This is a success message /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/param}

{call ClayAlert.render}
	{param message: This is an info message /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param title: 'Info' /}
{/param}

{call ClayAlert.render}
	{param message: This is a warning message /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/param}
```
```text/html
<clay-alert
	style="danger"
	message='This is an error message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Error">
</clay-alert>

<clay-alert
	style="success"
	message='This is a success message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Success">
</clay-alert>

<clay-alert
	message="This is an info message"
	spritemap="/vendor/lexicon/icons.svg"
	title="Info">
</clay-alert>

<clay-alert
	style="warning"
	message='This alert is a warning message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Warning">
</clay-alert>
```
```text/html
<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong>This is an error message
</div>

<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong>This is a success message
</div>

<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
			<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong>This is an info message
</div>

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Error:</strong>This is a warning message
</div>
```

### STRIPE

<article id="clay-alert-stripe">

> Stripe alerts are always placed below the last navigation element, either the header or the navigation bar. This alert appears usually on "Save" action communicating the status of the action once received from the server. The close action is mandatory in this alert type. Its width is always full container width and pushes all the content below it.

<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
			</svg>
		</span>
		<strong class="lead">Danger</strong> This is an error message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
			</svg>
		</span>
		<strong class="lead">Success</strong> This is a success message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-info" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
			</svg>
		</span>
		<strong class="lead">Info</strong> This is an info message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-warning" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
				<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
			</svg>
		</span>
		<strong class="lead">Warning</strong> This is a warning message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

```soy
{call ClayAlert.render}
	{param closeable: true /}
	{param message: 'This is an error message' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Error' /}
	{param type: 'fluid' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}
	{param message: 'This is a success message' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
	{param type: 'fluid' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}
	{param message: 'This is an info message' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param title: 'Info' /}
	{param type: 'fluid' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}
	{param message: 'This is a warning message' /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
	{param type: 'fluid' /}
{/param}
```
```text/html
<clay-alert
	closeable="true"
	style="danger"
	message='This is an error message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Error"
	type="fluid">
</clay-alert>

<clay-alert
	closeable="true"
	style="success"
	message='This is a success message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Success"
	type="fluid"
></clay-alert>

<clay-alert
	closeable="true"
	message='This is an info message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Info"
	type="fluid">
</clay-alert>

<clay-alert
	closeable="true"
	style="warning"
	message='This is a warning message'
	spritemap="/vendor/lexicon/icons.svg"
	title="Warning"
	type="fluid">
</clay-alert>
```
```text/html
<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
			</svg>
		</span>
		<strong class="lead">Danger</strong> This is an error message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
			</svg>
		</span>
		<strong class="lead">Success</strong> This is a success message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-info" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
			</svg>
		</span>
		<strong class="lead">Info</strong> This is an info message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-warning" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
				<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
			</svg>
		</span>
		<strong class="lead">Warning</strong> This is a warning message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>
```

</article>

### ADDITIONAL OPTIONS

<article id="clay-alert-mixed-html-content">

#### Mixed HTML Content

> All alerts accept html as their content. You can use the following modifiers:
> - `.lead` inside of an alert to make the beginning of your message stand out
> - `.alert-link` to style a link inside your alert

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>

```soy
{call ClayAlert.render}
	{param message kind="html"}
		This alert is a <a href="#">warning message</a>.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/param}
```
```text/html
<clay-alert
	style="warning"
	message='This alert is a <a href="#">warning message</a>.' spritemap="/vendor/lexicon/icons.svg"
	title="Warning">
</clay-alert>
```
```text/html
<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>
```

</article>

<article id="dismissible-alerts">

#### Dismissible Alerts

<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Success:</strong> This is a success closeable alert
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>

```soy
{call ClayAlert.render}
	{param closeable: true /}
	{param message: This is a success closeable alert /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/param}
```
```text/html
<clay-alert
	closeable="true"
	style="success"
	message='This is a success closeable alert'
	spritemap="/vendor/lexicon/icons.svg"
	title="Success">
</clay-alert>
```
```text/html
<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Success:</strong> This is a success closeable alert
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>
```

</article>

<article id="alert-notifications-fixed">

#### Fixed Notifications

> A fixed positioned container for placing alerts on the top right corner of the page. This component can generally be placed anywhere on the page.

```text/html
<div class="alert-notifications alert-notifications-fixed">
	<div class="alert alert-dismissible alert-info alert-notification" role="alert">
		...
	</div>
</div>
```

</article>
