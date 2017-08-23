---
title: Progress Bars
description: Components
layout: "guide"
weight: 100
---

<article id="progress-groups">

### Progress Groups

> Place an addon on either side of a progress component with `progress-group` and `progress-group-addon`.

<div class="clay-site-mb progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

<div class="clay-site-mb progress-group">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="clay-site-mb progress-group">
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
</div>

```xml
<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group">
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
</div>
```

</article>


<article id="progress-group-stacked">

### Progress Group Stacked

> Add `progress-group-stacked` to `progress-group` stack the addons and progress component.

<div class="progress-group progress-group-stacked">
	<div class="progress-group-addon">60% Completed</div>
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
			<use xlink:href="/vendor/lexicon/icons.svg#cog" />
		</svg>
	</div>
</div>

```xml
<div class="progress-group progress-group-stacked">
	<div class="progress-group-addon">60% Completed</div>
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-cog">
			<use xlink:href="/vendor/lexicon/icons.svg#cog" />
		</svg>
	</div>
</div>
```

</article>


<article id="progress-variants">

### Progress Variants

> Add `progress-danger`, `progress-info`, `progress-success`, or `progress-warning` to `progress-group` or `progress` to provide visual feedback for different progress states. Color a block of text or icon by wrapping it with `progress-group-feedback`.

<div class="alert alert-warning">
	Using the variant classes will set the <code>background-color</code> on <code>progress-bar</code>, no need to use Bootstrap 4 background utility classes.
</div>

###### Progress

<div class="clay-site-mb progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="clay-site-mb progress progress-success">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="clay-site-mb progress progress-info">
	<div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<div class="clay-site-mb progress progress-warning">
	<div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>

<div class="clay-site-mb progress progress-danger">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>

```xml
<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress progress-success">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress progress-info">
	<div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<div class="progress progress-warning">
	<div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>

<div class="progress progress-danger">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>
```

###### Progress Group

<div class="clay-site-mb progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

<div class="clay-site-mb progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="clay-site-mb progress-group progress-info">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
				<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
			</svg>
		</div>
	</div>
</div>

<div class="clay-site-mb progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="clay-site-mb progress-danger progress-group">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#times-circle" />
			</svg>
		</div>
	</div>
</div>

```xml
<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group progress-info">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-info-circle-open">
				<use xlink:href="/vendor/lexicon/icons.svg#info-circle-open" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-exclamation-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#exclamation-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-danger progress-group">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg aria-hidden="true" class="lexicon-icon lexicon-icon-times-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#times-circle" />
			</svg>
		</div>
	</div>
</div>
```

</article>


<article id="multiple-progress-bars">

### Multiple Progress Bars

> If you need multiple progress bars, use Bootstrap 4's background utilities, `bg-primary`, `bg-success`, `bg-info`, `bg-warning`, and `bg-danger` on `progress-bar`.

<div class="clay-site-mb progress">
	<div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
	<div class="bg-success progress-bar" style="width: 25%">25%</div>
	<div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>

<div class="clay-site-mb progress">
	<div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
	<div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>

<div class="clay-site-mb progress">
	<div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
	<div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>

<div class="clay-site-mb progress">
	<div class="bg-danger progress-bar" style="width: 45%">45%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>

<div class="clay-site-mb progress">
	<div class="progress-bar" style="width: 10%">10%</div>
	<div class="bg-warning progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar" style="width: 10%">10%</div>
	<div class="bg-info progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
	<div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>

```xml
<div class="progress">
	<div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
	<div class="bg-success progress-bar" style="width: 25%">25%</div>
	<div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>

<div class="progress">
	<div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
	<div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>

<div class="progress">
	<div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
	<div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>

<div class="progress">
	<div class="bg-danger progress-bar" style="width: 45%">45%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>

<div class="progress">
	<div class="progress-bar" style="width: 10%">10%</div>
	<div class="bg-warning progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar" style="width: 10%">10%</div>
	<div class="bg-info progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
	<div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>
```

</article>


<article id="progress-sizes">

### Progress Sizes

###### Normal

<div class="clay-site-mb progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="clay-site-mb progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

```xml
<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>
```

###### Large

<div class="clay-site-mb progress progress-lg">
	<div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="clay-site-mb progress-group progress-lg">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

```xml
<div class="progress progress-lg">
	<div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="progress-group progress-lg">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>
```

</article>


<article id="progress-with-bootstrap-4-background-utility">

### Progress with Bootstrap 4 Background Utility

<div class="clay-site-mb progress">
	<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="bg-success progress-bar" role="progressbar" style="width: 60%;">60% (Success)</div>
</div>

<div class="clay-site-mb progress">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="bg-info progress-bar" role="progressbar" style="width: 100%;">100% (Info)</div>
</div>

<div class="clay-site-mb progress">
	<div aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="bg-warning progress-bar" role="progressbar" style="width: 40%;">40% (Warning)</div>
</div>

<div class="clay-site-mb progress">
	<div aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="bg-danger progress-bar" role="progressbar" style="width: 80%;">80% (Danger)</div>
</div>

```xml
<div class="progress">
	<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="bg-success progress-bar" role="progressbar" style="width: 60%;">60% (Success)</div>
</div>

<div class="progress">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="bg-info progress-bar" role="progressbar" style="width: 100%;">100% (Info)</div>
</div>

<div class="progress">
	<div aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="bg-warning progress-bar" role="progressbar" style="width: 40%;">40% (Warning)</div>
</div>

<div class="progress">
	<div aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="bg-danger progress-bar" role="progressbar" style="width: 80%;">80% (Danger)</div>
</div>
```

</article>