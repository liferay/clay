/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
	index?: number;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key | null;

	/**
	 * @ignore
	 */
	style?: React.StyleHTMLAttributes<HTMLLIElement>;
};

export const Item = React.forwardRef<HTMLLIElement, Props>(function Item(
	{
		children,
		divider = false,
		expand = false,
		index,
		keyValue = null,
		style,
	}: Props,
	ref
) {
	const {activePanel, id, onActivePanel, setPanelNext} =
		useContext(VerticalBarContext);

	return (
		<li
			className={classNames('tbar-item', {
				'tbar-divider-after': divider,
				'tbar-item-expand': expand,
			})}
			ref={ref}
			role="none"
			style={style}
		>
			{React.cloneElement(children, {
				'aria-controls': `${id}-tabpanel-${keyValue}`,
				'aria-selected': activePanel === keyValue,
				'className': classNames('tbar-btn tbar-btn-monospaced', {
					active: activePanel === keyValue,
				}),
				'id': `${id}-tab-${keyValue}`,
				'onClick': (
					event: React.MouseEvent<HTMLButtonElement, MouseEvent>
				) => {
					if (children.props.onClick) {
						children.props.onClick(event);
					}

					if (event.defaultPrevented) {
						return;
					}

					if (keyValue === activePanel) {
						onActivePanel(null);

						setPanelNext(null);
					}
					else if (keyValue && activePanel === null) {
						onActivePanel(keyValue);

						setPanelNext(null);
					}
					else if (keyValue !== activePanel) {
						onActivePanel(null);

						setPanelNext(keyValue);
					}
				},
				'role': 'tab',
				'tabIndex':
					(activePanel !== null && activePanel !== keyValue) ||
					(activePanel === null && index !== 0)
						? -1
						: null,
			})}
		</li>
	);
});
