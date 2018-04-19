---
title: "Gauge Chart"
description: ""
layout: "guide"
weight: 7
---

###### {$page.description}

<article id="1">

{call ClayGaugeChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
{/call}

```soy
{call ClayGaugeChart.render}
	{param data: [
		[
			'id': 'data1',
			'data': [87.4]
		]
	] /}
{/call}
```
```jsx
<GaugeChart
	data={[
		{
			id: 'data1',
			data: [87.4]
		}
	]}
/>
```

</article>
