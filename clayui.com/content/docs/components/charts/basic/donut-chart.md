---
title: "Donut Chart"
---

<article id="1">

<clay-chart component="DonutChart"
	props='{"data": [{"id": "data1", "data": [30]}, {"id": "data2", "data": [70]}]}'></clay-chart>

```soy
{call ClayDonutChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [30]
		],
		[
			'id': 'data2',
			'data': [70]
		]
	] /}
{/call}
```
```jsx
<DonutChart
	data={[
		{
			id: 'data1',
			data: [30]
		},
		{
			id: 'data2',
			data: [70]
		}
	]}
/>
```

</article>
