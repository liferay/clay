---
title: "Data Color"
description: ""
layout: "guide"
weight: 2
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 90, 30, 120, 20, 160],
			'color': 'hotpink'
		],
		[
			'id': 'data2',
			'data': [200, 150, 120, 90, 10, 75],
			'color': 'cadetblue'
		]
	] /}
{/call}


```soy
{call ClayChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [10, 90, 30, 120, 20, 160],
			'color': 'hotpink'
		],
		[
			'id': 'data2',
			'data': [200, 150, 120, 90, 10, 75],
			'color': 'cadetblue'
		]
	] /}
{/call}
```

```jsx
<Chart
	data={[
		{
			id: 'data1',
			data: [10, 90, 30, 120, 20, 160],
			color: 'hotpink'
		},
		{
			id: 'data2',
			data: [200, 150, 120, 90, 10, 75],
			color: 'cadetblue'
		}
	]}
/>
```
</article>
