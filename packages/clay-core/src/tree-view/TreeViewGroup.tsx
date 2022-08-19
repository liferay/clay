/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {setElementFullHeight} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import {CSSTransition} from 'react-transition-group';

import {Collection, ICollectionProps} from './Collection';
import {useTreeViewContext} from './context';
import {useItem} from './useItem';

interface ITreeViewGroupProps<T>
	extends ICollectionProps<T>,
		Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

function List({children}: React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul className="treeview-group" role="group">
			{children}
		</ul>
	);
}

export function TreeViewGroup<T>(props: ITreeViewGroupProps<T>): JSX.Element & {
	displayName: string;
};

export function TreeViewGroup<T extends Record<any, any>>({
	children,
	className,
	items,
	...otherProps
}: ITreeViewGroupProps<T>) {
	const {expandedKeys} = useTreeViewContext();

	const item = useItem();

	return (
		<CSSTransition
			{...otherProps}
			className={classNames('collapse', className, {
				show: expandedKeys.has(item.key),
			})}
			classNames={{
				enter: 'collapsing',
				enterActive: 'show',
				enterDone: 'show',
				exit: 'show',
				exitActive: 'collapsing',
			}}
			id={item.key}
			in={expandedKeys.has(item.key)}
			onEnter={(element: HTMLElement) =>
				element.setAttribute('style', 'height: 0px')
			}
			onEntered={(element: HTMLElement) =>
				element.removeAttribute('style')
			}
			onEntering={(element: HTMLElement) => setElementFullHeight(element)}
			onExit={(element) => setElementFullHeight(element)}
			onExiting={(element) =>
				element.setAttribute('style', 'height: 0px')
			}
			timeout={250}
			unmountOnExit
		>
			<div>
				<Collection<T> as={List} items={items}>
					{children}
				</Collection>
			</div>
		</CSSTransition>
	);
}

TreeViewGroup.displayName = 'ClayTreeViewGroup';
