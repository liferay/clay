---
title: Progress Bars
description: Components
layout: "guide"
weight: 100
---

<article id="progress-groups">

### Progress Groups

> Place an addon on either side of a progress component with `progress-group` and `progress-group-addon`.

<div class="clay-site-mb">
	<div class="progress-group">
		<div class="progress">
			<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
		</div>
		<div class="progress-group-addon">30%</div>
	</div>
</div>
<div class="clay-site-mb">
	<div class="progress-group progress-warning">
		<div class="progress">
			<div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
		</div>
		<div class="progress-group-addon">70%</div>
	</div>
</div>
<div class="clay-site-mb">
	<div class="progress-group progress-success">
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
</div>

```soy
{call ClayProgressBar.render}
	{param minValue: 0 /}
	{param maxValue: 100 /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param value: 30 /}
{/call}

{call ClayProgressBar.render}
	{param minValue: 0 /}
	{param maxValue: 100 /}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param status: 'warning' /}
	{param value: 70 /}
{/call}

{call ClayProgressBar.render}
	{param spritemap: '/vendor/lexicon/icons.svg' /}
	{param status: 'complete' /}
{/call}
```
```text/html
<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;"></div>
	</div>
	<div class="progress-group-addon">30%</div>
</div>

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
	</div>
	<div class="progress-group-addon">70%</div>
</div>

<div class="progress-group progress-success">
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
```

</article>
