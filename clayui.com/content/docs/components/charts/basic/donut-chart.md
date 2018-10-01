---
title: "Donut Chart"
---

import Graph from "$components/Graph";

<Graph
	component="DonutChart"
	props={{
		data: [
			{
				id: 'data1',
				data: [30]
			},
			{
				id: 'data2',
				data: [70]
			}
		]
	}}
/>

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
