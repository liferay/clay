---
title: "Alerts"
---

### Description

Alerts are used to capture the attention of the user in an intrusive way. They can be used just to say that something went right, or perhaps to say that something needs to be reviewed.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/alerts.html">Alerts Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### TOAST

> This type of alert is specific for toast messages. These type of messages appear on the top right corner of the screen. The maximum width of a toast message is 360px, and the height can vary depending on the number of rows. It always has a close action.

<div id="claySiteAlertsNotificationsSpacer">
	<div class="row">
		<div class="col-6">
			<div class="alert-container container">
				<div class="alert-notifications alert-notifications-absolute">
					<div class="alert alert-dismissible alert-danger" role="alert">
						<span class="alert-indicator">
							<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
									<use href="/images/icons/icons.svg#exclamation-full"></use>
								</svg>
							</span>
						</span>
						<strong class="lead">Error:</strong> This is an error message
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</span>
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
							<span aria-label="icon-info-circle" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
									<use href="/images/icons/icons.svg#info-circle"></use>
								</svg>
							</span>
						</span>
						<strong class="lead">Info:</strong> This is an info message.
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</span>
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
							<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
									<use href="/images/icons/icons.svg#check-circle-full"></use>
								</svg>
							</span>
						</span>
						<strong class="lead">Success:</strong> This is a success message
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</span>
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
							<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
									<use href="/images/icons/icons.svg#warning-full"></use>
								</svg>
							</span>
						</span>
						<strong class="lead">Warning:</strong> This is a warning message.
						<button aria-label="Close" class="close" data-dismiss="alert" type="button">
							<span aria-label="icon-times" class="lexicon-icon-container" role="img">
								<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
									<use href="/images/icons/icons.svg#times" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="alert-container container">
	<div class="alert-notifications alert-notifications-absolute">
		<div class="alert alert-dismissible alert-danger" role="alert">
			...
		</div>
	</div>
</div>
```

### EMBEDDED

> Embedded alerts are meant for use in forms. Usually you will only need to use the information one. Its width depends on the width of the container it is placed in, always respecting the container margins to the content. The close action is not required for embedded alerts.

<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use href="/images/icons/icons.svg#exclamation-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong> This is an error message
</div>

<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use href="/images/icons/icons.svg#check-circle-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong> This is a success message
</div>

<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-info-circle" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
				<use href="/images/icons/icons.svg#info-circle"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong> This is an info message
</div>

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
				<use href="/images/icons/icons.svg#warning-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong> This is a warning message
</div>

```soy
{call ClayAlert.render}
	{param message: 'This is an error message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Error' /}
{/call}

{call ClayAlert.render}
	{param message: 'This is a success message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/call}

{call ClayAlert.render}
	{param message: 'This is an info message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Info' /}
{/call}

{call ClayAlert.render}
	{param message: 'This is a warning message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/call}
```
```html
<clay-alert
	style="danger"
	message='This is an error message'
	spritemap="/images/icons/icons.svg"
	title="Error">
</clay-alert>

<clay-alert
	style="success"
	message='This is a success message'
	spritemap="/images/icons/icons.svg"
	title="Success">
</clay-alert>

<clay-alert
	message="This is an info message"
	spritemap="/images/icons/icons.svg"
	title="Info">
</clay-alert>

<clay-alert
	style="warning"
	message='This alert is a warning message'
	spritemap="/images/icons/icons.svg"
	title="Warning">
</clay-alert>
```
```html
<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use href="/images/icons/icons.svg#exclamation-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong>This is an error message
</div>

<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use href="/images/icons/icons.svg#check-circle-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong>This is a success message
</div>

<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-info-circle" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
				<use href="/images/icons/icons.svg#info-circle"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong>This is an info message
</div>

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
				<use href="/images/icons/icons.svg#warning-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Error:</strong>This is a warning message
</div>
```

### STRIPE

> Stripe alerts are always placed below the last navigation element, either the header or the navigation bar. This alert usually appears on "Save" action, communicating the status of the action once received from the server. The close action is mandatory in this alert type. Its width is always full container width and pushes all the content below it.

<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
					<use href="/images/icons/icons.svg#exclamation-full"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Danger</strong> This is an error message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
					<use href="/images/icons/icons.svg#check-circle-full"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Success</strong> This is a success message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-info" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-info-circle" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
					<use href="/images/icons/icons.svg#info-circle"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Info</strong> This is an info message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-warning" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
					<use href="/images/icons/icons.svg#warning-full"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Warning</strong> This is a warning message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

```soy
{call ClayStripe.render}
	{param message: 'This is an error message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Error' /}
{/call}

{call ClayStripe.render}
	{param message: 'This is a success message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/call}

{call ClayStripe.render}
	{param message: 'This is an info message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param title: 'Info' /}
{/call}

{call ClayStripe.render}
	{param message: 'This is a warning message' /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/call}
```
```html
<clay-stripe
	style="danger"
	message='This is an error message'
	spritemap="/images/icons/icons.svg"
	title="Error"
</clay-stripe>

<clay-stripe
	style="success"
	message='This is a success message'
	spritemap="/images/icons/icons.svg"
	title="Success"
></clay-stripe>

<clay-stripe
	message='This is an info message'
	spritemap="/images/icons/icons.svg"
	title="Info"
</clay-stripe>

<clay-stripe
	style="warning"
	message='This is a warning message'
	spritemap="/images/icons/icons.svg"
	title="Warning"
</clay-stripe>
```
```html
<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-exclamation-full" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
					<use href="/images/icons/icons.svg#exclamation-full"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Danger</strong> This is an error message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
					<use href="/images/icons/icons.svg#check-circle-full"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Success</strong> This is a success message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-info" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-info-circle" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
					<use href="/images/icons/icons.svg#info-circle"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Info</strong> This is an info message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>

<div class="alert alert-dismissible alert-fluid alert-warning" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
					<use href="/images/icons/icons.svg#warning-full"></use>
				</svg>
			</span>
		</span>
		<strong class="lead">Warning</strong> This is a warning message
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<span aria-label="icon-times" class="lexicon-icon-container" role="img">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use href="/images/icons/icons.svg#times" />
				</svg>
			</span>
		</button>
	</div>
</div>
```

### ADDITIONAL OPTIONS

#### Mixed HTML Content

> All alerts accept HTML as their content. You can use the following modifiers:
> - `.lead` inside of an alert to make the beginning of your message stand out
> - `.alert-link` to style a link inside your alert

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
				<use href="/images/icons/icons.svg#warning-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>

```soy
{call ClayAlert.render}
	{param message kind="html"}
		This alert is a <a href="#">warning message</a>.
	{/param}

	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/call}
```
```html
<clay-alert
	style="warning"
	message='This alert is a <a href="#">warning message</a>.' spritemap="/images/icons/icons.svg"
	title="Warning">
</clay-alert>
```
```html
<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-warning-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
				<use href="/images/icons/icons.svg#warning-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>
```

#### Dismissible Alerts

<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use href="/images/icons/icons.svg#check-circle-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Success:</strong> This is a success closeable alert
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<span aria-label="icon-times" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use href="/images/icons/icons.svg#times" />
			</svg>
		</span>
	</button>
</div>

```soy
{call ClayAlert.render}
	{param closeable: true /}
	{param message: This is a success closeable alert /}
	{param spritemap: '/images/icons/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/call}
```
```html
<clay-alert
	closeable="true"
	style="success"
	message='This is a success closeable alert'
	spritemap="/images/icons/icons.svg"
	title="Success">
</clay-alert>
```
```html
<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		<span aria-label="icon-check-circle-full" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use href="/images/icons/icons.svg#check-circle-full"></use>
			</svg>
		</span>
	</span>
	<strong class="lead">Success:</strong> This is a success closeable alert
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<span aria-label="icon-times" class="lexicon-icon-container" role="img">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use href="/images/icons/icons.svg#times" />
			</svg>
		</span>
	</button>
</div>
```

#### Fixed Notifications

> A fixed positioned container for placing alerts on the top right corner of the page. This component can generally be placed anywhere on the page.

```html
<div class="alert-notifications alert-notifications-fixed">
	<div class="alert alert-dismissible alert-info alert-notification" role="alert">
		...
	</div>
</div>
```

### API

#### ClayAlert

<div>
	[APITable "clay-alert/src/ClayAlert.js"]
</div>

#### ClayStripe

<div>
	[APITable "clay-alert/src/ClayStripe.js"]
</div>

#### ClayToast

<div>
	[APITable "clay-alert/src/ClayToast.js"]
</div>

