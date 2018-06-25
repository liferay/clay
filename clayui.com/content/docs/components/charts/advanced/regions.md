---
title: "Regions"
---

<article id="1">

<clay-chart component="Chart"
	props='{"data": [{"id": "data1", "data": [30, 20, 50, 40, 60, 50], "type": "bar"}, {"id": "data2", "data": [200, 130, 90, 240, 130, 220], "type": "bar"}], "groups": [["data1", "data2"]], "regions": [{
			"axis": "y",
			"start": 0,
			"end": 100
		},
		{
			"axis": "y",
			"start": 200,
			"end": 300
		}]}'></clay-chart>

```soy
{call ClayChart.render}
	{param data: [
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
	data={[
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
