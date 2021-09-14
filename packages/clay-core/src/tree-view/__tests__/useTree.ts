/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createImmutableTree} from '../useTree';

describe('useTree', () => {
	it('patching the tree does not change the original tree', () => {
		const tree = [
			{
				children: [
					{
						children: [
							{
								name: 'E',
							},
						],
						name: 'C',
					},
					{name: 'D'},
				],
				name: 'A',
			},
			{name: 'B'},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce([0, 1], [0, 0]);

		expect(immutableTree.applyPatches()).not.toMatchObject(tree);
	});

	it('can move items from the root of the tree', () => {
		const tree = [
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Liferay Drive',
			},
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Repositories',
			},
			{
				children: [{name: 'PDF'}, {name: 'Word'}],
				name: 'Documents and Media',
			},
		];

		const newTree = [
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Liferay Drive',
			},
			{
				children: [
					{name: 'Blogs'},
					{name: 'Documents and Media'},
					{name: 'PDF'},
				],
				name: 'Repositories',
			},
			{
				children: [{name: 'Word'}],
				name: 'Documents and Media',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce([2, 0], [1]);

		const result = immutableTree.applyPatches();

		expect(result.length).toEqual(3);

		expect(result).toMatchObject(newTree);
	});
});
