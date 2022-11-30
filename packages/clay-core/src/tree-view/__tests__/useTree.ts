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

		immutableTree.produce({from: [0, 1], op: 'move', path: [0, 0]});

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
					{name: 'PDF'},
					{name: 'Blogs'},
					{name: 'Documents and Media'},
				],
				name: 'Repositories',
			},
			{
				children: [{name: 'Word'}],
				name: 'Documents and Media',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [2, 0], op: 'move', path: [1, 0]});

		const result = immutableTree.applyPatches();

		expect(result.length).toEqual(3);

		expect(result).toMatchObject(newTree);
	});

	it('can move nested items', () => {
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
				children: [
					{name: 'Blogs'},
					{
						children: [{name: 'PDF'}],
						name: 'Documents and Media',
					},
				],
				name: 'Liferay Drive',
			},
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Repositories',
			},
			{
				children: [{name: 'Word'}],
				name: 'Documents and Media',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [2, 0], op: 'move', path: [0, 1, 0]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(newTree);
	});

	it('move item on top of an item', () => {
		const tree = [
			{
				name: 'Foo',
			},
			{
				name: 'Bar',
			},
			{
				name: 'Baz',
			},
		];

		const expectedTree = [
			{
				name: 'Bar',
			},
			{
				name: 'Foo',
			},
			{
				name: 'Baz',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [1], op: 'move', path: [0]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('move item on bottom of an item', () => {
		const tree = [
			{
				name: 'Foo',
			},
			{
				name: 'Bar',
			},
			{
				name: 'Baz',
			},
		];

		const expectedTree = [
			{
				name: 'Bar',
			},
			{
				name: 'Foo',
			},
			{
				name: 'Baz',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [0], op: 'move', path: [2]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('move item below last item', () => {
		const tree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const expectedTree = [
			{
				children: [
					{
						name: 'Baz',
					},
					{
						name: 'Bar',
					},
				],
				name: 'Foo',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [0, 0], op: 'move', path: [0, 2]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('move an item to inside another item on the same level', () => {
		const tree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const expectedTree = [
			{
				children: [
					{
						children: [
							{
								name: 'Baz',
							},
						],
						name: 'Bar',
					},
				],
				name: 'Foo',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [0, 1], op: 'move', path: [0, 0, 0]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('move an item to inside another item persisting the existing ones', () => {
		const tree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const expectedTree = [
			{
				children: [
					{
						children: [
							{
								name: 'Bar',
							},
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({from: [0, 0], op: 'move', path: [0, 1, 0]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('removes a nested item from a tree', () => {
		const tree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const expectedTree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({op: 'remove', path: [0, 1, 0]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('removes an item in the root of a tree', () => {
		const tree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
			{
				name: 'Foo 2',
			},
		];

		const expectedTree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		immutableTree.produce({op: 'remove', path: [1]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});

	it('renames an item', () => {
		const tree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
			{
				name: 'Foo 2',
			},
		];

		const expectedTree = [
			{
				children: [
					{
						name: 'Bar',
					},
					{
						children: [
							{
								name: 'Foo Baz',
							},
						],
						name: 'Baz',
					},
				],
				name: 'Foo',
			},
			{
				name: 'Foo - renamed',
			},
		];

		const immutableTree = createImmutableTree(tree, 'children');

		const item = {
			...tree[1],
			name: 'Foo - renamed',
		};

		immutableTree.produce({item, op: 'replace', path: [1]});

		const result = immutableTree.applyPatches();

		expect(result).toMatchObject(expectedTree);
	});
});
