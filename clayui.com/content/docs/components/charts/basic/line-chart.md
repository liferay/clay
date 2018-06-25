---
title: "Line Chart"
---

<article id="1">

<clay-chart component="LineChart"
	props='{"data": [{"id": "data1", "data": [100, 20, 30]}, {"id": "data2", "data": [20, 70, 100]}]}'></clay-chart>

```soy
{call ClayLineChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [100, 20, 30]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100]
		]
	] /}
{/call}
```
```jsx
<LineChart
	data={[
		{
			id: 'data1',
			data: [100, 20, 30]
		},
		{
			id: 'data2',
			data: [20, 70, 100]
		}
	]}
/>
```

</article>
