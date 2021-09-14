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
});
