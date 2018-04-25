---
title: "X Axis Tick Formatting"
description: "Format the tick marks on your chart's x axis."
layout: "guide"
weight: 5
---

###### {$page.description}

<article id="1">

{call ClayBarChart.render}
	{param axisX: [
		'localtime': false,
		'tick': [
			'format': '%Y-%m-%d %H:%M:%S'
		],
		'type': 'timeseries'
	] /}
	{param data: [
		[
			'id': 'data1',
			'data': [30, 20, 50, 40, 60, 50]
		],
		[
			'id': 'x',
			'data': ['2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01']
		]
	] /}
	{param x: 'x' /}
{/call}

```soy
{call ClayBarChart.render}
	{param axisX: [
		'localtime': false,
		'tick': [
			'format': '%Y-%m-%d %H:%M:%S'
		],
		'type': 'timeseries'
	] /}
	{param data: [
		[
			'id': 'data1',
			'data': [30, 20, 50, 40, 60, 50]
		],
		[
			'id': 'x',
			'data': ['2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01']
		]
	] /}
	{param x: 'x' /}
{/call}
```

```jsx
<BarChart
	axisX={[
		localtime: false,
		tick: {
			format: '%Y-%m-%d %H:%M:%S'
		},
		type: 'timeseries'
	]}
	data={[
		{
			id: 'data1',
			data: [30, 20, 50, 40, 60, 50]
		},
		{
			id: 'x',
			data: ['2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01']
		}
	]}
	x="x"
/>
```
</article>
