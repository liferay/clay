---
title: Progress Bars
description: "Progress bar is a progress indicator used to show the completion percentage of a task."
layout: "guide"
pattern: "progress_bars"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-progress-bar">

### States

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
<clay-progress-bar
	minValue="0"
	maxValue="100"
	spritemap="/vendor/lexicon/icons.svg"
	value="30">
</clay-progress-bar>

<clay-progress-bar
	minValue="0"
	maxValue="100"
	spritemap="/vendor/lexicon/icons.svg"
	status="warning"
	value="70">
</clay-progress-bar>

<clay-progress-bar
	spritemap="/vendor/lexicon/icons.svg"
	status="complete">
</clay-progress-bar>
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
