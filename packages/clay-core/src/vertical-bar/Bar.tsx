/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {Collection} from '../collection';

import type {ICollectionProps} from '../collection';

interface IProps<T> extends ICollectionProps<T> {
	/**
	 * Flag to determine which style the Bar will display.
	 */
	displayType?: 'light' | 'dark';
}

export function Bar<T>({children, displayType = 'dark', items}: IProps<T>) {
	return (
		<nav
			className={classNames('tbar tbar-stacked c-slideout-show', {
				'tbar-dark-l2': displayType === 'dark',
				'tbar-light': displayType === 'light',
			})}
		>
			<ul className="tbar-nav">
				<Collection<T> items={items}>{children}</Collection>
			</ul>
		</nav>
	);
}
