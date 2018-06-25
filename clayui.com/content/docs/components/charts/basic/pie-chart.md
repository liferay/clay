---
title: "Pie Chart"
---

<article id="1">

<clay-chart component="PieChart"
	props='{"data": [{"id": "data1", "data": [30]}, {"id": "data2", "data": [70]}]}'></clay-chart>

```soy
{call ClayPieChart.render}
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
<PieChart
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
