---
title: "Step Chart"
---

<article id="1">

<clay-chart component="StepChart"
	props='{"data": [{"id": "data1", "data": [100, 20, 30]}, {"id": "data2", "data": [20, 70, 100]}]}'></clay-chart>

```soy
{call ClayStepChart.render}
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
<StepChart
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
