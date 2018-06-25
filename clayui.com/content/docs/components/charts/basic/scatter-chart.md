---
title: "Scatter Chart"
---

<article id="1">

<clay-chart component="ScatterChart"
	props='{"data": [{"id": "data1", "data": [100, 20, 30, 50, 40, 80, 220, 300]}, {"id": "data2", "data": [20, 70, 100, 340, 160, 20, 80, 200]}]}'></clay-chart>

```soy
{call ClayScatterChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [100, 20, 30, 50, 40, 80, 220, 300]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100, 340, 160, 20, 80, 200]
		]
	] /}
{/call}
```
```jsx
<ScatterChart
	data={[
		{
			id: 'data1',
			data: [100, 20, 30, 50, 40, 80, 220, 300]
		},
		{
			id: 'data2',
			data: [20, 70, 100, 340, 160, 20, 80, 200]
		}
	]}
/>
```

</article>
