/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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

const List = ({
	children,
	...otherProps
}: React.HTMLAttributes<HTMLUListElement>) => (
	<ul {...otherProps} className="tbar-nav">
		{children}
	</ul>
);

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
