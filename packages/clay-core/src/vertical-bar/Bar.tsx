/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useNavigation} from '@clayui/shared';
import classNames from 'classnames';
import React, {useContext, useRef} from 'react';

import {Collection} from '../collection';
import {VerticalBarContext} from './context';

import type {ICollectionProps} from '../collection';

interface IProps<T> extends ICollectionProps<T, unknown> {

	/**
	 * Flag to determine which style the Bar will display.
	 */
	displayType?: 'light' | 'dark';
}

function List({
	children,
	...otherProps
}: React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul {...otherProps} className="tbar-nav">
			{children}
		</ul>
	);
}

export function Bar<T>({
	children,
	displayType = 'dark',
	items,
	virtualize,
}: IProps<T>) {
	const parentRef = useRef<HTMLDivElement | null>(null);

	const {activation} = useContext(VerticalBarContext);

	const {navigationProps} = useNavigation({
		activation,
		containerRef: parentRef,
		orientation: 'vertical',
	});

	return (
		<nav
			{...navigationProps}
			className={classNames('tbar tbar-stacked c-slideout-show', {
				'tbar-dark-l2': displayType === 'dark',
				'tbar-light': displayType === 'light',
			})}
			ref={parentRef}
		>
			<Collection<T>
				aria-orientation="vertical"
				as={List}
				estimateSize={40}
				items={items}
				parentRef={parentRef}
				role="tablist"
				virtualize={virtualize}
			>
				{children}
			</Collection>
		</nav>
	);
}
