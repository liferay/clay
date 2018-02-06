---
title: "Pie Chart"
description: ""
layout: "guide"
weight: 5
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30]
		],
		[
			'id': 'data2',
			'data': [70]
		]
	] /}
	{param type: 'pie' /}
{/call}

```soy
{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30]
		],
		[
			'id': 'data2',
			'data': [70]
		]
	] /}
	{param type: 'pie' /}
{/call}
```
```jsx
<PieChart
	columns={[
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
