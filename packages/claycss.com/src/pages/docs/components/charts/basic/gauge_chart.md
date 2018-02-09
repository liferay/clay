---
title: "Gauge Chart"
description: ""
layout: "guide"
weight: 7
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
	{param type: 'gauge' /}
{/call}

```soy
{call ClayChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
	{param type: 'gauge' /}
{/call}
```
```jsx
<GaugeChart
	columns={[
		{
			id: 'data1',
			data: [87.4]
		}
	]}
/>
```

</article>
