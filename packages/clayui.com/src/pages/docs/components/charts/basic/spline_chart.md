---
title: "Spline Chart"
description: ""
layout: "guide"
weight: 1
---

###### {$page.description}

<article id="1">

{call ClaySplineChart.render}
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

```soy
{call ClaySplineChart.render}
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
<SplineChart
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
