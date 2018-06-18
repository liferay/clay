---
title: "Badges"
---

### Description

Badges help highlight important information such as notifications or new and unread messages. Badges have circular borders and are only used to specify a number.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/badges.html">Badges Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="clay-badges">
<h3 class="component-title">
	<a href="#clay-badges">Clay Badges</a>
</h3>

<div class="autofit-float autofit-row">
	<div class="autofit-col">
		<div>
			<span class="badge badge-primary"><span class="badge-item badge-item-expand">8</span></span>
			<div>Primary</div>
		</div>
	</div>
	<div class="autofit-col">
		<div>
			<span class="badge badge-secondary"><span class="badge-item badge-item-expand">87</span></span>
			<div>Secondary</div>
		</div>
	</div>
	<div class="autofit-col">
		<div>
			<span class="badge badge-info"><span class="badge-item badge-item-expand">91</span></span>
			<div>Info</div>
		</div>
	</div>
	<div class="autofit-col">
		<div>
			<span class="badge badge-danger"><span class="badge-item badge-item-expand">130</span></span>
			<div>Error</div>
		</div>
	</div>
	<div class="autofit-col">
		<div>
			<span class="badge badge-success"><span class="badge-item badge-item-expand">1.111</span></span>
			<div>Success</div>
		</div>
	</div>
	<div class="autofit-col">
		<div>
			<span class="badge badge-warning"><span class="badge-item badge-item-expand">21</span></span>
			<div>Warning</div>
		</div>
	</div>
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
<span class="badge badge-primary">
	<span class="badge-item badge-item-expand">8</span>
</span>

<span class="badge badge-secondary">
	<span class="badge-item badge-item-expand">87</span>
</span>

<span class="badge badge-info">
	<span class="badge-item badge-item-expand">91</span>
</span>

<span class="badge badge-danger">
	<span class="badge-item badge-item-expand">130</span>
</span>

<span class="badge badge-success">
	<span class="badge-item badge-item-expand">1.111</span>
</span>

<span class="badge badge-warning">
	<span class="badge-item badge-item-expand">21</span>
</span>
```

</article>


<article id="clay-badge-sizes">
<h3 class="component-title">
	<a href="#clay-badge-sizes">Clay Badge Sizes</a>
</h3>

<div class="alert alert-warning">Badge Sizes have been removed, use the <a href="https://github.com/liferay/clay/blob/master/packages/clay/src/scss/mixins/_badges.scss#L1">clay-badge-size($sassMap) mixin</a> to create custom badges sizes for your app.</div>

</article>