/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

type ChildrenFunction<T> = (item: T) => React.ReactElement;

type TreeViewItemProps<T> = {
	children: React.ReactNode | ChildrenFunction<T>;
	items?: Array<T>;
};

export function TreeViewGroup<T>(
	props: TreeViewItemProps<T>
): JSX.Element & {
	displayName: string;
};

export function TreeViewGroup<T>({children, items}: TreeViewItemProps<T>) {
	return (
		<div className="collapse show">
			<ul className="treeview-group" role="group">
				{items
					? items.map((item, index) => {
							if (typeof children === 'function') {
								return React.cloneElement(
									children(item) as React.ReactElement,
									{key: index}
								);
							}

							return null;
					  })
					: children}
			</ul>
		</div>
	);
}

TreeViewGroup.displayName = 'ClayTreeViewGroup';
