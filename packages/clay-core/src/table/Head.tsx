/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ChildrenFunction, Collection} from '../collection';
import {Scope, ScopeContext} from './ScopeContext';

type Props<T> = {
	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T, unknown>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;
} & React.TableHTMLAttributes<HTMLTableSectionElement>;

function HeadInner<T extends Record<string, any>>(
	{children, items, ...otherProps}: Props<T>,
	ref: React.Ref<HTMLTableSectionElement>
) {
	return (
		<thead {...otherProps} ref={ref}>
			<ScopeContext.Provider value={Scope.Head}>
				<tr>
					<Collection items={items} suppressTextValueWarning={false}>
						{children}
					</Collection>
				</tr>
			</ScopeContext.Provider>
		</thead>
	);
}

type ForwardRef = {
	displayName: string;
	<T>(
		props: Props<T> & {ref?: React.Ref<HTMLTableSectionElement>}
	): JSX.Element;
};

export const Head = React.forwardRef(HeadInner) as ForwardRef;

Head.displayName = 'TableHead';
