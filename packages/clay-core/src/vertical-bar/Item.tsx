/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useContext} from 'react';

import {VerticalBarContext} from './context';

type Props = {
	/**
	 * Item content.
	 */
	children: React.ReactElement;

	/**
	 * Sets the divider between items.
	 */
	divider?: boolean;

	/**
	 * Flag to expand the item, the next one will be aligned at the bottom of
	 * the bar.
	 */
	expand?: boolean;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key;
};

export function Item({
	children,
	divider = false,
	expand = false,
	keyValue,
}: Props) {
	const {activePanel, onActivePanel} = useContext(VerticalBarContext);

	return (
		<li
			className={classNames('tbar-item', {
				'tbar-divider-after': divider,
				'tbar-item-expand': expand,
			})}
		>
			{React.cloneElement(children, {
				className: classNames('tbar-btn tbar-btn-monospaced', {
					active: activePanel === keyValue,
				}),
				onClick: (
					event: React.MouseEvent<HTMLButtonElement, MouseEvent>
				) => {
					if (children.props.onClick) {
						children.props.onClick(event);
					}

					if (event.defaultPrevented) {
						return;
					}

					onActivePanel(
						keyValue === activePanel ? undefined : keyValue!
					);
				},
			})}
		</li>
	);
}
