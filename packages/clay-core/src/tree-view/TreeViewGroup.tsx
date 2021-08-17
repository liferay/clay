/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {setElementFullHeight} from '@clayui/shared';
import React from 'react';
import {CSSTransition} from 'react-transition-group';

import {useTreeViewContext} from './context';
import {ItemContextProvider, useItem} from './useItem';

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

export function TreeViewGroup<T extends Record<any, any>>({
	children,
	items,
}: TreeViewItemProps<T>) {
	const {expandedKeys} = useTreeViewContext();

	const item = useItem();

	return (
		<CSSTransition
			className="collapse"
			classNames={{
				enter: 'collapsing',
				enterActive: 'show',
				enterDone: 'show',
				exit: 'show',
				exitActive: 'collapsing',
			}}
			id={item.id}
			in={expandedKeys!.has(item.id)}
			onEnter={(el: HTMLElement) =>
				el.setAttribute('style', 'height: 0px')
			}
			onEntered={(el: HTMLElement) => el.removeAttribute('style')}
			onEntering={(el: HTMLElement) => setElementFullHeight(el)}
			onExit={(el) => setElementFullHeight(el)}
			onExiting={(el) => el.setAttribute('style', 'height: 0px')}
			timeout={250}
		>
			<div>
				<ul className="treeview-group" role="group">
					{typeof children === 'function' && items
						? items.map((item, index) => (
								<ItemContextProvider
									key={item.id ?? index}
									value={item}
								>
									{children(item)}
								</ItemContextProvider>
						  ))
						: children}
				</ul>
			</div>
		</CSSTransition>
	);
}

TreeViewGroup.displayName = 'ClayTreeViewGroup';
