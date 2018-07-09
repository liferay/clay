---
title: "Axis Range"
---

<article id="1">

<clay-chart component="Chart"
	props='{
	"axisY2": {
		"max": 230,
		"min": 10,
		"show": true
	},
	"data": [
		{
			"id": "data1",
			"data": [10, 90, 30, 120, 20, 160],
			"axis": "y"
		},
		{
			"id": "data2",
			"data": [200, 150, 120, 90, 10, 75],
			"axis": "y2"
		}
	]
	}'></clay-chart>


```soy
{call ClayChart.render}
	{param axisY2: [
		'max': 230,
		'min': 10,
		'show': true
	] /}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 90, 30, 120, 20, 160],
			'axis': 'y'
		],
		[
			'id': 'data2',
			'data': [200, 150, 120, 90, 10, 75],
			'axis': 'y2'
		]
	] /}
{/call}
```

```jsx
<Chart
	axisY2={
		max: 230,
		min: 10,
		show: true
	}
	data={[
		{
			id: 'data1',
			data: [10, 90, 30, 120, 20, 160],
			axis: 'y'
		},
		{
			id: 'data2',
			data: [200, 150, 120, 90, 10, 75],
			axis: 'y2'
		}
	]}
/>
```
</article>
