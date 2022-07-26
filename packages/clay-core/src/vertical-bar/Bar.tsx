/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useRef} from 'react';

import {Collection} from '../collection';

import type {ICollectionProps} from '../collection';

interface IProps<T> extends ICollectionProps<T> {
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

	return (
		<nav
			className={classNames('tbar tbar-stacked c-slideout-show', {
				'tbar-dark-l2': displayType === 'dark',
				'tbar-light': displayType === 'light',
			})}
			ref={parentRef}
		>
			<Collection<T>
				as={List}
				estimateSize={40}
				items={items}
				parentRef={parentRef}
				virtualize={virtualize}
			>
				{children}
			</Collection>
		</nav>
	);
}
