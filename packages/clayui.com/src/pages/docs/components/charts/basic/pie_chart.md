---
title: "Pie Chart"
description: ""
layout: "guide"
weight: 5
---

###### {$page.description}

<article id="1">

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
