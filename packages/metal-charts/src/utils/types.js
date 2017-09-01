'use strict';

const types = {
	all: ['area', 'area-spline', 'area-step', 'bar', 'donut',
		'gauge', 'line', 'pie', 'scatter', 'spline', 'step'],

	gauge: ['gauge'],

	percentage: ['donut', 'pie'],

	point: ['area', 'area-spline', 'area-step', 'bar', 'line',
		'scatter', 'spline', 'step']
};

export {types};
export default types;