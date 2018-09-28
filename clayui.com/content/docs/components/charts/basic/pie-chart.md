---
title: "Pie Chart"
---

import Graph from "$components/Graph";

<Graph
	component="PieChart"
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
