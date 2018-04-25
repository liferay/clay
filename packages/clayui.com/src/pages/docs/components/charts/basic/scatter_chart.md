---
title: "Scatter Chart"
description: ""
layout: "guide"
weight: 4
---

###### {$page.description}

<article id="1">

{call ClayScatterChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [100, 20, 30, 50, 40, 80, 220, 300]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100, 340, 160, 20, 80, 200]
		]
	] /}
{/call}

```soy
{call ClayScatterChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [100, 20, 30, 50, 40, 80, 220, 300]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100, 340, 160, 20, 80, 200]
		]
	] /}
{/call}
```
```jsx
<ScatterChart
	data={[
		{
			id: 'data1',
			data: [100, 20, 30, 50, 40, 80, 220, 300]
		},
		{
			id: 'data2',
			data: [20, 70, 100, 340, 160, 20, 80, 200]
		}
	]}
/>
```

</article>
