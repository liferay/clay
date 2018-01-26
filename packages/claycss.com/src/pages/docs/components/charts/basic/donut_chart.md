---
title: "Donut Chart"
description: ""
layout: "guide"
weight: 6
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
	{param type: 'donut' /}
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
	{param type: 'donut' /}
{/call}
```
```jsx
<DonutChart
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
