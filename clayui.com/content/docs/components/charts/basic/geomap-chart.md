---
title: "Geomap Chart"
---

<article id="1">

<div style="width:100%;height:380px;">
	<clay-chart component="Geomap"
	props='{"color": {"range": {"min": "#b1d4ff", "max": "#0065e4"}, "selected": "#4b9bff", "value": "gdp_md_est"}, "data": "/world-low-res.geo.json"}'></clay-chart>
</div>

```soy
{call ClayGeomap.render}
	{param color: [
			'range': [
				'min': '#b1d4ff',
				'max': '#0065e4'
			],
			'selected': '#4b9bff',
			'value': 'gdp_md_est'
	] /}
	{param data: '/assets/world-low-res.geo.json' /}
{/call}
```
```jsx
<ClayGeomap
	color={{
			range: {
				min: '#b1d4ff',
				max: '#0065e4'
			},
			selected: '#4b9bff',
			value: 'gdp_md_est'
	}}
	data='/assets/world-low-res.geo.json'
/>
```

</article>
