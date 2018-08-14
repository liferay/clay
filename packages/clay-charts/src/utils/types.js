'use strict';

const types = {
	all: [
		'area',
		'area-line-range',
		'area-spline',
		'area-spline-range',
		'area-step',
		'bar',
		'bubble',
		'donut',
		'gauge',
		'line',
		'pie',
		'radar',
		'scatter',
		'spline',
		'step',
	],

	area: [
		'area',
		'area-line-range',
		'area-spline',
		'area-spline-range',
		'area-step',
	],

	gauge: ['gauge'],

	percentage: ['donut', 'pie'],

	point: [
		'area',
		'area-spline',
		'area-step',
		'bar',
		'line',
		'scatter',
		'spline',
		'step',
	],

	radar: ['radar'],
};

export {types};
export default types;
