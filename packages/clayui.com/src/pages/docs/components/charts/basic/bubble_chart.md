---
title: "Bubble Chart"
description: ""
layout: "guide"
weight: 7
---

###### {$page.description}

<article id="1">

{call ClayBubbleChart.render}
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
{call ClayBubbleChart.render}
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
<BubbleChart
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
