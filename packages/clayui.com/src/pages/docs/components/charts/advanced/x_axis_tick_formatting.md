---
title: "X Axis Tick Formatting"
description: "Format the tick marks on your chart's x axis."
layout: "guide"
weight: 5
---

###### {$page.description}

<article id="1">

{call ClayChart.render}
	{param columns: [
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
	{param axisX: [
		'type': 'timeseries',
		'localtime': false,
		'tick': [
			'format': '%Y-%m-%d %H:%M:%S'
		]
	] /}
	{param type: 'bar' /}
{/call}

```soy
{call ClayChart.render}
	{param columns: [
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
	{param axisX: [
		'type': 'timeseries',
		'localtime': false,
		'tick': [
			'format': '%Y-%m-%d %H:%M:%S'
		]
	] /}
	{param type: 'bar' /}
{/call}
```

```jsx
<BarChart
	columns={[
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
	axisX={[
		type: 'timeseries',
		localtime: false,
		tick: {
			format: '%Y-%m-%d %H:%M:%S'
		}
	]}
/>
```
</article>


