---
title: Progress Bars
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Progress Groups

> Place an addon on either side of a progress component with <code class="code">progress-group</code> and <code class="code">progress-group-addon</code>.

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
			<svg class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group">
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle">
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
			<svg class="lexicon-icon lexicon-icon-check-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group">
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle">
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

<article id="2">

### Progress Group Stacked

> Add <code class="code">progress-group-stacked</code> to <code class="code">progress-group</code> stack the addons and progress component.

<div class="progress-group progress-group-stacked">
	<div class="progress-group-addon">60% Completed</div>
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">
		<svg class="lexicon-icon lexicon-icon-cog">
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
		<svg class="lexicon-icon lexicon-icon-cog">
			<use xlink:href="/vendor/lexicon/icons.svg#cog" />
		</svg>
	</div>
</div>
```

</article>

<article id="3">

### Progress Variants

> Add <code>progress-danger</code>, <code>progress-info</code>, <code>progress-success</code>, or <code>progress-warning</code> to <code>progress-group</code> or <code>progress</code> to provide visual feedback for different progress states. Color a block of text or icon by wrapping it with <code>progress-group-feedback</code>.

<div class="alert alert-warning">
	Using the variant classes will set the <code>background-color</code> on <code>progress-bar</code>, no need to use Bootstrap 4 background utility classes.
</div>

###### Progress

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
			<svg class="lexicon-icon lexicon-icon-check-circle">
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
			<svg class="lexicon-icon lexicon-icon-info-circle-open">
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
			<svg class="lexicon-icon lexicon-icon-exclamation-circle">
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
			<svg class="lexicon-icon lexicon-icon-times-circle">
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
			<svg class="lexicon-icon lexicon-icon-check-circle">
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
			<svg class="lexicon-icon lexicon-icon-info-circle-open">
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
			<svg class="lexicon-icon lexicon-icon-exclamation-circle">
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
			<svg class="lexicon-icon lexicon-icon-times-circle">
				<use xlink:href="/vendor/lexicon/icons.svg#times-circle" />
			</svg>
		</div>
	</div>
</div>
```

</article>

<article id="4">

### Multiple Progress Bars

> If you need multiple progress bars, use Bootstrap 4's background utilities, <code>bg-primary</code>, <code>bg-success</code>, <code>bg-info</code>, <code>bg-warning</code>, and <code>bg-danger</code> on <code>progress-bar</code>.

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

<article id="5">

### Progress Sizes

###### Normal

<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress-group">
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

<div class="progress progress-lg">
	<div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="progress-group progress-lg">
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

<article id="6">

### Progress with Bootstrap 4 Background Utility

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
