---
title: "Gauge Chart"
---

<article id="1">

<clay-chart component="GaugeChart"
	props='{"data": [{"id": "data1", "data": [87.4]}]}'></clay-chart>

```soy
{call ClayGaugeChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
{/call}
```
```jsx
<GaugeChart
	data={[
		{
			id: 'data1',
			data: [87.4]
		}
	]}
/>
```

</article>
