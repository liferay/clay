---
title: "Scatter Chart"
description: ""
layout: "guide"
weight: 4
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [100, 20, 30, 50, 40, 80, 220, 300]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100, 340, 160, 20, 80, 200]
		]
	] /}
	{param type: 'scatter' /}
{/call}

```soy
{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [100, 20, 30, 50, 40, 80, 220, 300]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100, 340, 160, 20, 80, 200]
		]
	] /}
	{param type: 'scatter' /}
{/call}
```
```jsx
<ScatterChart
	columns={[
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
