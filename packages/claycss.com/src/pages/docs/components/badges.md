---
title: Badges
description: "Badges help highlight important information such as notifications or new and unread messages. Badges have circular borders and are only used to specify a number."
layout: "guide"
pattern: "badges"
weight: 100
---

### Description

{$page.description}

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/{$page.pattern}.html">{$page.title} Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-badges">

### Badges

<div class="row text-center">
	<div class="col-1"><span class="badge badge-primary">8</span><div>Primary</div></div>
	<div class="col-1"><span class="badge badge-secondary">87</span><div>Secondary</div></div>
	<div class="col-1"><span class="badge badge-info">91</span><div>Info</div></div>
	<div class="col-1"><span class="badge badge-danger">130</span><div>Error</div></div>
	<div class="col-1"><span class="badge badge-success">1.111</span><div>Success</div></div>
	<div class="col-1"><span class="badge badge-warning">21</span><div>Warning</div></div>
</div>

```soy
{call ClayBadge.render}
	{param label: '8' /}
{/call}

{call ClayBadge.render}
	{param label: '87' /}
	{param style: 'secondary' /}
{/call}

{call ClayBadge.render}
	{param label: '91' /}
	{param style: 'info' /}
{/call}

{call ClayBadge.render}
	{param label: '130' /}
	{param style: 'danger' /}
{/call}

{call ClayBadge.render}
	{param label: '1.111' /}
	{param style: 'success' /}
{/call}

{call ClayBadge.render}
	{param label: '21' /}
	{param style: 'warning' /}
{/call}
```
```text/html
<clay-badge label="8"></clay-badge>
<clay-badge label="87" style="secondary"></clay-badge>
<clay-badge label="91" style="info"></clay-badge>
<clay-badge label="130" style="danger"></clay-badge>
<clay-badge label="1.111" style="success"></clay-badge>
<clay-badge label="21" style="warning"></clay-badge>
```
```text/html
<span class="badge badge-primary">8</span>
<span class="badge badge-secondary">87</span>
<span class="badge badge-info">91</span>
<span class="badge badge-danger">130</span>
<span class="badge badge-success">1.111</span>
<span class="badge badge-warning">21</span>
```

</article>
