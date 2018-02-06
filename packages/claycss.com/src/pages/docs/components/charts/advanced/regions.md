---
title: "Regions"
description: ""
layout: "guide"
weight: 3
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30, 20, 50, 40, 60, 50],
			'type': 'bar'
		],
		[
			'id': 'data2',
			'data': [200, 130, 90, 240, 130, 220],
			'type': 'bar'
		]
	] /}
	{param groups: [['data1', 'data2']] /}
	{param regions: [
		[
			'axis': 'y',
			'start': 0,
			'end': 100,
		],
		[
			'axis': 'y',
			'start': 200,
			'end': 300,
		]
	]/}
{/call}

```soy
{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30, 20, 50, 40, 60, 50],
			'type': 'bar'
		],
		[
			'id': 'data2',
			'data': [200, 130, 90, 240, 130, 220],
			'type': 'bar'
		]
	] /}
	{param groups: [['data1', 'data2']] /}
	{param regions: [
		[
			'axis': 'y',
			'start': 0,
			'end': 100,
		],
		[
			'axis': 'y',
			'start': 200,
			'end': 300,
		]
	]/}
{/call}
```

```jsx
<Chart
	columns={[
		{
			id: 'data1',
			data: [30, 20, 50, 40, 60, 50],
			type: 'bar'
		},
		{
			id: 'data2',
			data: [200, 130, 90, 240, 130, 220],
			type: 'bar'
		}
	]}
	regions={[
		{
			axis: 'y',
			start: 0,
			end: 100,
		},
		{
			axis: 'y',
			start: 200,
			end: 300,
		}
	]}
/>
```
</article>
