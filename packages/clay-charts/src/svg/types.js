const TILES_PATTERNS = [
	{
		nodeName: 'pattern',
		attributes: {
			id: 'circles',
			patternUnits: 'userSpaceOnUse',
			width: 16,
			height: 16,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'circle',
				attributes: {
					cx: 4,
					cy: 4,
					r: 2,
				},
			},
			{
				nodeName: 'circle',
				attributes: {
					cx: 12,
					cy: 12,
					r: 2,
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'diagonal-left-large',
			patternUnits: 'userSpaceOnUse',
			width: 10,
			height: 10,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'polygon',
				attributes: {
					points: '9.3,0 10,0.7 10,0',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0,0 0,0.7 9.3,10 10,10 10,9.3 0.7,0',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0,9.3 0,10 0.7,10',
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'diagonal-left-small',
			patternUnits: 'userSpaceOnUse',
			width: 5,
			height: 5,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'polygon',
				attributes: {
					points: '5,0 4.3,0 5,0.7',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0.7,0 0,0 0,0.7 4.3,5 5,5 5,4.3',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0,4.3 0,5 0.7,5',
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'diagonal-right-large',
			patternUnits: 'userSpaceOnUse',
			width: 10,
			height: 10,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'polygon',
				attributes: {
					points: '5,0 4.3,0 5,0.7',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0.7,0 0,0 0,0.7 4.3,5 5,5 5,4.3',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0,4.3 0,5 0.7,5',
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'diagonal-right-small',
			patternUnits: 'userSpaceOnUse',
			width: 5,
			height: 5,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'polygon',
				attributes: {
					points: '5,4.3 4.3,5 5,5',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '5,0 4.3,0 0,4.3 0,5 0.7,5 5,0.7',
				},
			},
			{
				nodeName: 'polygon',
				attributes: {
					points: '0.7,0 0,0 0,0.7',
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'horizontal-large',
			patternUnits: 'userSpaceOnUse',
			width: 8,
			height: 8,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'rect',
				attributes: {
					y: 7,
					width: 8,
					height: 1,
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'horizontal-small',
			patternUnits: 'userSpaceOnUse',
			width: 4,
			height: 4,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'rect',
				attributes: {
					y: 3,
					width: 4,
					height: 1,
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'vertical-large',
			patternUnits: 'userSpaceOnUse',
			width: 8,
			height: 8,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'rect',
				attributes: {
					x: 7,
					y: 0,
					width: 1,
					height: 8,
				},
			},
		],
	},
	{
		nodeName: 'pattern',
		attributes: {
			id: 'vertical-small',
			patternUnits: 'userSpaceOnUse',
			width: 4,
			height: 4,
			style: 'fill:rgba(0,0,0,0.3)',
		},
		children: [
			{
				nodeName: 'rect',
				attributes: {
					x: 3,
					width: 1,
					height: 4,
				},
			},
		],
	},
];

export default TILES_PATTERNS;
