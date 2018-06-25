---
title: "Spline Chart"
---

<article id="1">

<clay-chart component="SplineChart"
	props='{"data": [{"id": "data1", "data": [100, 20, 30]}, {"id": "data2", "data": [20, 70, 100]}]}'></clay-chart>

```soy
{call ClaySplineChart.render}
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
<SplineChart
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
