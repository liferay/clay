---
title: Alerts
description: Components
layout: "guide"
weight: 100
---

<article id="alert-notifications-fixed">

### Alert Notifications Fixed

> A fixed positioned container for placing alerts on the top right corner of the page. This component can generally be placed anywhere on the page.

<div class="alert-notifications alert-notifications-fixed">
	<div class="alert alert-dismissible alert-info alert-notification" role="alert">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
			</svg>
		</span>
		<strong class="lead">Meeting Rescheduled:</strong>
		<div>Please complete the attendance form to confirm your attendance: <a class="alert-link" href="#1">More Info</a>.</div>
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

```text/html
<div class="alert-notifications alert-notifications-fixed">
	<div class="alert alert-dismissible alert-info alert-notification" role="alert">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
			</svg>
		</span>
		<strong class="lead">Meeting Rescheduled:</strong>
		<div>Please complete the attendance form to confirm your attendance: <a class="alert-link" href="#1">More Info</a>.</div>
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>
```

</article>


<article id="alert-notifications-absolute">

### Alert Notifications Absolute

> An absolute positioned container for placing alerts on the top right corner relative to `.alert-container`. Use this to create sticky positioned alerts with javascript, modifying the CSS property `transform: translateY();` or `margin-top` when `scrollY` reaches a specific threshold. This component should generally be placed at the top of the page for sticky alerts aligned at the top.

<div id="claySiteAlertsNotificationsSpacer">
	<div class="alert-container container">
		<div class="alert-notifications alert-notifications-absolute">
			<div class="alert alert-dismissible alert-danger" role="alert">
				<span class="alert-indicator">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
						<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
					</svg>
				</span>
				<strong class="lead">Danger:</strong> Something is not right.
				<button aria-label="Close" class="close" data-dismiss="alert" type="button">
					<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
						<use xlink:href="/vendor/lexicon/icons.svg#times" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

```text/html
<div class="alert-container container">
	<div class="alert-notifications alert-notifications-absolute">
		<div class="alert alert-dismissible alert-danger" role="alert">
			<span class="alert-indicator">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
					<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
				</svg>
			</span>
			<strong class="lead">Danger:</strong> Something is not right.
			<button aria-label="Close" class="close" data-dismiss="alert" type="button">
				<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
					<use xlink:href="/vendor/lexicon/icons.svg#times" />
				</svg>
			</button>
		</div>
	</div>
</div>
```

</article>


<article id="alerts-with-embedded-links">

### Alerts with Embedded Links

> Use `.lead` inside of an alert to make the beginning of your message stand out.

> Use `.alert-link` to style a link inside your alert.

<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Success:</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
</div>
<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
			<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
		</svg>
	</span>
	<strong class="lead">Info:</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
</div>
<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>
<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
		</svg>
	</span>
	<strong class="lead">Danger:</strong> <a href="#1" class="alert-link">Something</a> is not right.
</div>

```text/html
<div class="alert alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Success:</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
</div>

<div class="alert alert-info" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
			<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
		</svg>
	</span>
	<strong class="lead">Info:</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
</div>

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>

<div class="alert alert-danger" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
		</svg>
	</span>
	<strong class="lead">Danger:</strong> <a href="#1" class="alert-link">Something</a> is not right.
</div>
```
```soy
{call ClayAlert.render}
	{param message kind="html"}
		You just read the <a href="#">alert message</a> successfully.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/param}

{call ClayAlert.render}
	{param message kind="html"}
		This <a href="#">alert</a> needs your attention.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param title: 'Info' /}
{/param}

{call ClayAlert.render}
	{param message kind="html"}
		This alert is a <a href="#">warning message</a>.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/param}

{call ClayAlert.render}
	{param message kind="html"}
		Something</a> is not right.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Danger' /}
{/param}
```

</article>


<article id="dismissible-alerts">

### Dismissible Alerts

<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Success:</strong> You just read the alert message successfully.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>
<div class="alert alert-dismissible alert-info" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
			<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
		</svg>
	</span>
	<strong class="lead">Info:</strong> This alert needs your attention.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>
<div class="alert alert-dismissible alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> This alert is a warning message.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>
<div class="alert alert-dismissible alert-danger" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
		</svg>
	</span>
	<strong class="lead">Danger:</strong> Something is not right.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>

```text/html
<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
			<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
		</svg>
	</span>
	<strong class="lead">Success:</strong> You just read the alert message successfully.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>

<div class="alert alert-dismissible alert-info" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
			<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
		</svg>
	</span>
	<strong class="lead">Info:</strong> This alert needs your attention.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>

<div class="alert alert-dismissible alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> This alert is a warning message.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>

<div class="alert alert-dismissible alert-danger" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
		</svg>
	</span>
	<strong class="lead">Danger:</strong> Something is not right.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
</div>
```
```soy
{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		You just read the <a href="#">alert message</a> successfully.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		This <a href="#">alert</a> needs your attention.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param title: 'Info' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		This alert is a <a href="#">warning message</a>.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		Something</a> is not right.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Danger' /}
{/param}
```

</article>


<article id="alert-fluid">

### Alert Fluid

<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
			</svg>
		</span>
		<strong class="lead">Success</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
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
		<strong class="lead">Info</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
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
		<strong class="lead">Warning</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>
<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
			</svg>
		</span>
		<strong class="lead">Danger</strong> <a href="#1" class="alert-link">Something</a> is not right.
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

```text/html
<div class="alert alert-dismissible alert-fluid alert-success" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle-full">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle-full"></use>
			</svg>
		</span>
		<strong class="lead">Success</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
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
		<strong class="lead">Info</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
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
		<strong class="lead">Warning</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>

<div class="alert alert-danger alert-dismissible alert-fluid" role="alert">
	<div class="container">
		<span class="alert-indicator">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
			</svg>
		</span>
		<strong class="lead">Danger</strong> <a href="#1" class="alert-link">Something</a> is not right.
		<button aria-label="Close" class="close" data-dismiss="alert" type="button">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
				<use xlink:href="/vendor/lexicon/icons.svg#times" />
			</svg>
		</button>
	</div>
</div>
```
```soy
{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		You just read the <a href="#">alert message</a> successfully.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'success' /}
	{param title: 'Success' /}
	{param type: 'fluid' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		This <a href="#">alert</a> needs your attention.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param title: 'Info' /}
	{param type: 'fluid' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		This alert is a <a href="#">warning message</a>.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'warning' /}
	{param title: 'Warning' /}
	{param type: 'fluid' /}
{/param}

{call ClayAlert.render}
	{param closeable: true /}

	{param message kind="html"}
		Something</a> is not right.
	{/param}

	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param style: 'danger' /}
	{param title: 'Danger' /}
	{param type: 'fluid' /}
{/param}
```

</article>