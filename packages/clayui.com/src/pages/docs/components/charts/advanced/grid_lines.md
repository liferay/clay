---
title: "Gridlines"
description: ""
layout: "guide"
weight: 3
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 70, 30, 120, 20, 10]
		],
		[
			'id': 'data2',
			'data': [100, 150, 120, 90, 10, 55]
		]
	] /}
	{param grid: [
		'x': [
			'show': true
		],
		'y': [
			'show': false
		]
	] /}
{/call}

```soy
{call ClayChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 70, 30, 120, 20, 10]
		],
		[
			'id': 'data2',
			'data': [100, 150, 120, 90, 10, 55]
		]
	] /}
	{param grid: [
		'x': [
			'show': true
		],
		'y': [
			'show': false
		]
	] /}
{/call}
```

```jsx
<Chart
	data={[
		{
			id: 'data1',
			data: [10, 70, 30, 120, 20, 10]
		},
		{
			id: 'data2',
			data: [100, 150, 120, 90, 10, 55]
		}
	]}
	grid={
		x: {
			show: true
		},
		y: {
			show: true
		}
	}
/>
```
</article>
