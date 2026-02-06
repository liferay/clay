/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {__NOT_PUBLIC_COLLECTION} from '@clayui/core';
import classnames from 'classnames';
import React, {useCallback, useContext} from 'react';

import {DropDownContext} from './DropDownContext';

import type {ICollectionProps} from '@clayui/core';

const {Collection} = __NOT_PUBLIC_COLLECTION;

export interface IProps<T>
	extends Omit<ICollectionProps<T, unknown>, 'virtualize'>,
		Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {}

const ItemList = React.forwardRef<HTMLUListElement, IProps<unknown>>(
	({children, className, items, role = 'menu', ...otherProps}, ref) => {
		const {search} = useContext(DropDownContext);

		const filterFn = useCallback(
			(value: string) => value.match(new RegExp(search, 'i')) !== null,
			[search]
		);

		return (
			<ul
				{...otherProps}
				className={classnames('list-unstyled', className)}
				ref={ref}
				role={role}
			>
				<Collection<any>
					filter={filterFn}
					filterKey="textValue"
					items={items}
					passthroughKey={false}
				>
					{children}
				</Collection>
			</ul>
		);
	}
);

ItemList.displayName = 'ClayDropDownItemList';

export default ItemList;
