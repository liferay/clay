---
title: Alerts
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Alerts with Embedded Links

> Use `.lead` inside of an alert to make the beginning of your message stand out.

> Use `.alert-link` to style a link inside your alert.

<div class="alert alert-primary" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Primary:</strong> This is a <a href="#1" class="alert-link">primary alert</a>. <button class="alert-link btn btn-unstyled">Button as link</button>.
</div>
<div class="alert alert-secondary" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Secondary:</strong> This is a <a href="#1" class="alert-link">secondary alert</a>.
</div>
<div class="alert alert-success" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#check-circle"></use>
	</svg>
	<strong class="lead">Success:</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
</div>
<div class="alert alert-info" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Info:</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
</div>
<div class="alert alert-warning" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
		<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full"></use>
	</svg>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>
<div class="alert alert-danger" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
		<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
	</svg>
	<strong class="lead">Danger:</strong> <a href="#1" class="alert-link">Something</a> is not right.
</div>
<div class="alert alert-light" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Light:</strong> This is a <a href="#1" class="alert-link">light alert</a>.
</div>
<div class="alert alert-dark" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Dark:</strong> This is a <a href="#1" class="alert-link">dark alert</a>.
</div>

```xml
<div class="alert alert-primary" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Primary:</strong> This is a <a href="#1" class="alert-link">primary alert</a>. <button class="alert-link btn btn-unstyled">Button as link</button>.
</div>

<div class="alert alert-secondary" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Secondary:</strong> This is a <a href="#1" class="alert-link">secondary alert</a>.
</div>

<div class="alert alert-success" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#check-circle"></use>
	</svg>
	<strong class="lead">Success:</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
</div>

<div class="alert alert-info" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Info:</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
</div>

<div class="alert alert-warning" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
		<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full"></use>
	</svg>
	<strong class="lead">Warning:</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>

<div class="alert alert-danger" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
		<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
	</svg>
	<strong class="lead">Danger:</strong> <a href="#1" class="alert-link">Something</a> is not right.
</div>

<div class="alert alert-light" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Light:</strong> This is a <a href="#1" class="alert-link">light alert</a>.
</div>

<div class="alert alert-dark" role="alert">
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Dark:</strong> This is a <a href="#1" class="alert-link">dark alert</a>.
</div>
```

</article>

<article id="2">

### Dismissible Alerts

<div class="alert alert-dismissible alert-primary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Primary:</strong> This is a <a href="#1" class="alert-link">primary alert</a>.
</div>
<div class="alert alert-dismissible alert-secondary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Secondary:</strong> This is a <a href="#1" class="alert-link">secondary alert</a>.
</div>
<div class="alert alert-dismissible alert-success" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#check-circle"></use>
	</svg>
	<strong class="lead">Success:</strong> You just read the alert message successfully.
</div>
<div class="alert alert-dismissible alert-info" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Info:</strong> This alert needs your attention.
</div>
<div class="alert alert-dismissible alert-warning" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
		<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full"></use>
	</svg>
	<strong class="lead">Warning:</strong> This alert is a warning message.
</div>
<div class="alert alert-dismissible alert-danger" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
		<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
	</svg>
	<strong class="lead">Danger:</strong> Something is not right.
</div>
<div class="alert alert-dismissible alert-light" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Light:</strong> This is a <a href="#1" class="alert-link">light alert</a>.
</div>
<div class="alert alert-dismissible alert-dark" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Dark:</strong> This is a <a href="#1" class="alert-link">dark alert</a>.
</div>

```xml
<div class="alert alert-dismissible alert-primary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Primary:</strong> This is a <a href="#1" class="alert-link">primary alert</a>.
</div>

<div class="alert alert-dismissible alert-secondary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Secondary:</strong> This is a <a href="#1" class="alert-link">secondary alert</a>.
</div>

<div class="alert alert-dismissible alert-success" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#check-circle"></use>
	</svg>
	<strong class="lead">Success:</strong> You just read the alert message successfully.
</div>

<div class="alert alert-dismissible alert-info" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Info:</strong> This alert needs your attention.
</div>

<div class="alert alert-dismissible alert-warning" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
		<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full"></use>
	</svg>
	<strong class="lead">Warning:</strong> This alert is a warning message.
</div>

<div class="alert alert-dismissible alert-danger" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
		<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
	</svg>
	<strong class="lead">Danger:</strong> Something is not right.
</div>

<div class="alert alert-dismissible alert-light" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Light:</strong> This is a <a href="#1" class="alert-link">light alert</a>.
</div>

<div class="alert alert-dismissible alert-dark" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Dark:</strong> This is a <a href="#1" class="alert-link">dark alert</a>.
</div>
```

</article>

<article id="3">

### Alert Fluid

<div class="alert alert-fluid alert-primary" role="alert">
	<strong class="lead">Primary</strong> This is a <a href="#1" class="alert-link">primary alert</a>.
</div>
<div class="alert alert-fluid alert-secondary" role="alert">
	<strong class="lead">Secondary</strong> This is a <a href="#1" class="alert-link">secondary alert</a>.
</div>
<div class="alert alert-fluid alert-success" role="alert">
	<strong class="lead">Success</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
</div>
<div class="alert alert-fluid alert-info" role="alert">
	<strong class="lead">Info</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
</div>
<div class="alert alert-fluid alert-warning" role="alert">
	<strong class="lead">Warning</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>
<div class="alert alert-danger alert-fluid" role="alert">
	<strong class="lead">Danger</strong> <a href="#1" class="alert-link">Something</a> is not right.
</div>
<div class="alert alert-fluid alert-light" role="alert">
	<strong class="lead">Light</strong> This is a <a href="#1" class="alert-link">light alert</a>.
</div>
<div class="alert alert-dark alert-fluid" role="alert">
	<strong class="lead">Dark</strong> This is a <a href="#1" class="alert-link">dark alert</a>.
</div>

```xml
<div class="alert alert-fluid alert-primary" role="alert">
	<strong class="lead">Primary</strong> This is a <a href="#1" class="alert-link">primary alert</a>.
</div>

<div class="alert alert-fluid alert-secondary" role="alert">
	<strong class="lead">Secondary</strong> This is a <a href="#1" class="alert-link">secondary alert</a>.
</div>

<div class="alert alert-fluid alert-success" role="alert">
	<strong class="lead">Success</strong> You just read the <a href="#1" class="alert-link">alert message</a> successfully.
</div>

<div class="alert alert-fluid alert-info" role="alert">
	<strong class="lead">Info</strong> This <a href="#1" class="alert-link">alert</a> needs your attention.
</div>

<div class="alert alert-fluid alert-warning" role="alert">
	<strong class="lead">Warning</strong> This alert is a <a href="#1" class="alert-link">warning message</a>.
</div>

<div class="alert alert-danger alert-fluid" role="alert">
	<strong class="lead">Danger</strong> <a href="#1" class="alert-link">Something</a> is not right.
</div>

<div class="alert alert-fluid alert-light" role="alert">
	<strong class="lead">Light</strong> This is a <a href="#1" class="alert-link">light alert</a>.
</div>

<div class="alert alert-dark alert-fluid" role="alert">
	<strong class="lead">Dark</strong> This is a <a href="#1" class="alert-link">dark alert</a>.
</div>
```

</article>

<article id="4">

### Alert Notification

> Alternate alert style for notifications

<div class="alert alert-dismissible alert-notification alert-success" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#check-circle"></use>
	</svg>
	<strong class="lead">Success:</strong> This is a success message.
</div>
<div class="alert alert-dismissible alert-notification alert-info" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Info:</strong> This is an info message.
</div>
<div class="alert alert-dismissible alert-notification alert-warning" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
		<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full"></use>
	</svg>
	<strong class="lead">Warning:</strong> This is a warning message.
</div>
<div class="alert alert-dismissible alert-notification alert-danger" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
		<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
	</svg>
	<strong class="lead">Danger:</strong> This is a danger message.
</div>
<div class="alert alert-dismissible alert-notification alert-primary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Meeting Rescheduled:</strong>
	<p>The UX Team has rescheduled to the following date: 2014 - 12 - 17.</p>
	<p>Please complete the attendance form to confirm your attendance: <a class="alert-link" href="#1">More Info</a>.</p>
</div>
<div class="alert alert-dismissible alert-notification alert-secondary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Meeting Rescheduled:</strong>
	<p>The UX Team has rescheduled to the following date: 2014 - 12 - 17.</p>
	<p>Please complete the attendance form to confirm your attendance: <a class="alert-link" href="#1">More Info</a>.</p>
</div>
<div class="alert alert-dismissible alert-notification alert-light" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Light:</strong>
	<p>Due to inactivity, your session has expired. Please save any data you may have entered before refreshing the page. <a class="alert-link" href="#1">Log in</a></p>
</div>
<div class="alert alert-dismissible alert-notification alert-dark" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Dark:</strong>
	<p>Due to inactivity, your session has expired. Please save any data you may have entered before refreshing the page. <a class="alert-link" href="#1">Log in</a></p>
</div>

```xml
<div class="alert alert-dismissible alert-notification alert-success" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#check-circle"></use>
	</svg>
	<strong class="lead">Success:</strong> This is a success message.
</div>

<div class="alert alert-dismissible alert-notification alert-info" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle">
		<use xlink:href="/vendor/lexicon/icons.svg#info-circle"></use>
	</svg>
	<strong class="lead">Info:</strong> This is an info message.
</div>

<div class="alert alert-dismissible alert-notification alert-warning" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-question-circle-full">
		<use xlink:href="/vendor/lexicon/icons.svg#question-circle-full"></use>
	</svg>
	<strong class="lead">Warning:</strong> This is a warning message.
</div>

<div class="alert alert-dismissible alert-notification alert-danger" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-full">
		<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full"></use>
	</svg>
	<strong class="lead">Danger:</strong> This is a danger message.
</div>

<div class="alert alert-dismissible alert-notification alert-primary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Meeting Rescheduled:</strong>
	<p>The UX Team has rescheduled to the following date: 2014 - 12 - 17.</p>
	<p>Please complete the attendance form to confirm your attendance: <a class="alert-link" href="#1">More Info</a>.</p>
</div>

<div class="alert alert-dismissible alert-notification alert-secondary" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Meeting Rescheduled:</strong>
	<p>The UX Team has rescheduled to the following date: 2014 - 12 - 17.</p>
	<p>Please complete the attendance form to confirm your attendance: <a class="alert-link" href="#1">More Info</a>.</p>
</div>

<div class="alert alert-dismissible alert-notification alert-light" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Light:</strong>
	<p>Due to inactivity, your session has expired. Please save any data you may have entered before refreshing the page. <a class="alert-link" href="#1">Log in</a></p>
</div>

<div class="alert alert-dismissible alert-notification alert-dark" role="alert">
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times">
			<use xlink:href="/vendor/lexicon/icons.svg#times" />
		</svg>
	</button>
	<strong class="lead">Dark:</strong>
	<p>Due to inactivity, your session has expired. Please save any data you may have entered before refreshing the page. <a class="alert-link" href="#1">Log in</a></p>
</div>
```

</article>