/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render, waitFor} from '@testing-library/react';
import React, {useEffect} from 'react';

import {DragAndDropProvider, useDnD} from '../DragAndDrop';
import {TreeViewContext} from '../context';
import {Layout} from '../useLayout';

describe('TreeView drag and drop', () => {
	afterEach(cleanup);

	function DnDStateProbe({dragKey}: {dragKey: React.Key}) {
		const {currentDragKeys, onDragStart} = useDnD();

		useEffect(() => {
			onDragStart('mouse', dragKey);
		}, [dragKey, onDragStart]);

		return (
			<div data-testid="drag-keys">
				{Array.from(currentDragKeys).sort().join(',')}
			</div>
		);
	}

	function renderDnDContext({
		dragKey,
		mode,
		selectedKeys,
	}: {
		dragKey: React.Key;
		mode: 'single' | 'multiple';
		selectedKeys: Set<React.Key>;
	}) {
		const rootRef = {current: null} as React.RefObject<HTMLUListElement>;

		const layout: Layout = {
			createPartialLayoutItem: () => () => {},
			layoutKeys: {current: new Map()},
			patchItem: () => {},
		};

		const context = {
			dragAndDrop: true,
			dragAndDropMode: mode,
			expandedKeys: new Set(),
			items: [],
			layout,
			open: () => false,
			reorder: () => {},
			rootRef,
			selection: {
				selectedKeys,
			} as any,
		};

		return render(
			<TreeViewContext.Provider value={context as any}>
				<DragAndDropProvider
					mode={mode}
					nestedKey="children"
					rootRef={rootRef}
				>
					<DnDStateProbe dragKey={dragKey} />
				</DragAndDropProvider>
			</TreeViewContext.Provider>
		);
	}

	it('stores drag keys properly if mode is multiple', async () => {
		const {getByTestId} = renderDnDContext({
			dragKey: 1,
			mode: 'multiple',
			selectedKeys: new Set([1, 2]),
		});

		await waitFor(() => {
			expect(getByTestId('drag-keys').textContent).toBe('1,2');
		});
	});

	it('stores drag keys properly if mode is single', async () => {
		const {getByTestId} = renderDnDContext({
			dragKey: 1,
			mode: 'single',
			selectedKeys: new Set([1, 2]),
		});

		await waitFor(() => {
			expect(getByTestId('drag-keys').textContent).toBe('1');
		});
	});
});
