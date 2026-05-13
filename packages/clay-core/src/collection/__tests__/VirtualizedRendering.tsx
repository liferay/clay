/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {render} from '@testing-library/react';
import React from 'react';

import {useCollection} from '../useCollection';

import '@testing-library/jest-dom';

function TagList({virtualizer}: {virtualizer: any}) {
	const {collection} = useCollection({
		children: (tag: string) => <li key={tag}>{tag}</li>,
		items: ['A', 'B', 'C', 'D'],
		virtualizer,
	});

	return <ul>{collection}</ul>;
}

const transforms = (container: HTMLElement) =>
	Array.from(container.querySelectorAll('li')).map(
		(li) => li.style.transform
	);

const stub = (items: Array<{index: number; size: number; start: number}>) => ({
	getTotalSize: () => 0,
	getVirtualItems: () => items,
	measureElement: () => {},
});

describe('useCollection virtualized rendering', () => {
	it('updates translateY when getVirtualItems returns new start values', () => {
		const {container, rerender} = render(
			<TagList
				virtualizer={stub([
					{index: 0, size: 37, start: 0},
					{index: 1, size: 37, start: 37},
					{index: 2, size: 37, start: 74},
					{index: 3, size: 37, start: 111},
				])}
			/>
		);

		expect(transforms(container)).toEqual([
			'translateY(0px)',
			'translateY(37px)',
			'translateY(74px)',
			'translateY(111px)',
		]);

		rerender(
			<TagList
				virtualizer={stub([
					{index: 0, size: 74, start: 0},
					{index: 1, size: 74, start: 74},
					{index: 2, size: 32, start: 148},
					{index: 3, size: 32, start: 180},
				])}
			/>
		);

		expect(transforms(container)).toEqual([
			'translateY(0px)',
			'translateY(74px)',
			'translateY(148px)',
			'translateY(180px)',
		]);
	});
});
