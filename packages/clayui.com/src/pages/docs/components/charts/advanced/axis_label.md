---
title: "Axis Label"
description: ""
layout: "guide"
weight: 0
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param axisY: [
		'label': 'Y Axis Label'
	] /}
	{param axisY2: [
		'label': 'Y2 Axis Label',
		'show': true
	] /}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 70, 30, 120, 20, 10],
			'axis': 'y'
		],
		[
			'id': 'data2',
			'data': [100, 150, 120, 90, 10, 55],
			'axis': 'y2'
		]
	] /}
{/call}


```soy
{call ClayChart.render}
	{param axisY: [
		'label': 'Y Axis Label'
	] /}
	{param axisY2: [
		'label': 'Y2 Axis Label',
		'show': true
	] /}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 70, 30, 120, 20, 10],
			'axis': 'y'
		],
		[
			'id': 'data2',
			'data': [100, 150, 120, 90, 10, 55],
			'axis': 'y2'
		]
	] /}
{/call}
```

```jsx
<Chart
	axisY={
		label: 'Y Axis Label'
	}
	axisY2={
		label: 'Y2 Axis Label',
		show: true
	}
	data={[
		{
			id: 'data1',
			data: [10, 70, 30, 120, 20, 10],
			axis: 'y'
		},
		{
			id: 'data2',
			data: [100, 150, 120, 90, 10, 55],
			axis: 'y2'
		}
	]}
/>
```
</article>
