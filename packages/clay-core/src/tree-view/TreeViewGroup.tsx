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

export function TreeViewGroup<T>(props: ICollectionProps<T>): JSX.Element & {
	displayName: string;
};

export function TreeViewGroup<T extends Record<any, any>>({
	children,
	items,
}: ICollectionProps<T>) {
	const {expandedKeys} = useTreeViewContext();

	const item = useItem();

	return (
		<CSSTransition
			className={classNames('collapse', {
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
				<ul className="treeview-group" role="group">
					<Collection<T> items={items}>{children}</Collection>
				</ul>
			</div>
		</CSSTransition>
	);
}

TreeViewGroup.displayName = 'ClayTreeViewGroup';
