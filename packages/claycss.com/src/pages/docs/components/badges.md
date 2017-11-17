---
title: Badges, Labels, and Stickers
description: Components
layout: "guide"
weight: 100
---

<article id="badges">

### Badges

<span class="badge badge-primary">8</span>{sp}
<span class="badge badge-secondary">87</span>{sp}
<span class="badge badge-success">999K</span>{sp}
<span class="badge badge-info">91</span>{sp}
<span class="badge badge-warning">21</span>{sp}
<span class="badge badge-danger">130</span>

```soy
{call ClayBadge.render}
	{param label: '8' /}
{/call}

{call ClayBadge.render}
	{param label: '87' /}
	{param style: 'secondary' /}
{/call}

{call ClayBadge.render}
	{param label: '999K' /}
	{param style: 'success' /}
{/call}
```
```webcomponents
<clay-badge label="8"></clay-badge>

<clay-badge label="87" style="secondary"></clay-badge>

<clay-badge label="999K" style="success"></clay-badge>

<clay-badge label="91" style="info"></clay-badge>

<clay-badge label="21" style="warning"></clay-badge>

<clay-badge label="130" style="danger"></clay-badge>
```
```text/html
<span class="badge badge-primary">8</span>
<span class="badge badge-secondary">87</span>
<span class="badge badge-success">999K</span>
<span class="badge badge-info">91</span>
<span class="badge badge-warning">21</span>
<span class="badge badge-danger">130</span>
```

</article>
