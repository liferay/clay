---
title: "Gridlines"
---

<article id="1">

<clay-chart component="Chart"
	props='{"data": [{"id": "data1", "data": [10, 70, 30, 120, 20, 10]}, {"id": "data2", "data": [100, 150, 120, 90, 10, 55]}], "grid": {"x": {"show": true}, "y": {"show": false}}}'></clay-chart>

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
