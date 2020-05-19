/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export default {
	plain: {
		backgroundColor: '#f5f5f8',
		color: '#393A34',
	},
	styles: [
		{
			style: {
				color: '#999',
				fontStyle: 'italic',
			},
			types: ['comment', 'prolog', 'doctype', 'cdata'],
		},
		{
			style: {
				opacity: 0.7,
			},
			types: ['namespace'],
		},
		{
			style: {
				color: '#c23c20',
			},
			types: ['string', 'attr-value'],
		},
		{
			style: {
				color: '#2f6f9f',
			},
			types: ['punctuation', 'operator'],
		},
		{
			style: {
				color: '#999',
			},
			types: [
				'entity',
				'url',
				'symbol',
				'number',
				'boolean',
				'variable',
				'constant',
				'property',
				'regex',
				'inserted',
			],
		},
		{
			style: {
				color: '#2f6f9f',
			},
			types: ['atrule', 'keyword', 'attr-name', 'selector'],
		},
		{
			style: {
				color: '#79b6f2',
			},
			types: ['function', 'deleted', 'tag'],
		},
		{
			style: {
				color: '#6f42c1',
			},
			types: ['function-variable'],
		},
		{
			style: {
				color: '#2f6f9f',
			},
			types: ['tag', 'selector', 'keyword'],
		},
	],
};
