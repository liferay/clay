/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {InternalDispatch, useInternalState} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import {Bar} from './Bar';
import {Content} from './Content';
import {Item} from './Item';
import {Panel} from './Panel';
import {VerticalBarContext} from './context';

type Props = {
	/**
	 * Flag to position the component using absolute rather than a
	 * fixed position.
	 */
	absolute?: boolean;

	/**
	 * The VerticalBar content.
	 */
	children: React.ReactNode;

	/**
	 * Sets the CSS className for the component.
	 */
	className?: string;

	/**
	 * Sets the position of the vertical bar.
	 */
	position?: 'left' | 'right';

	/**
	 * Sets the current active panel (controlled).
	 */
	active?: React.Key | undefined;

	/**
	 * Sets the default active panel (uncontrolled).
	 */
	defaultActive?: React.Key | undefined;

	/**
	 * Callback is called when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<React.Key | undefined>;
};

export function VerticalBar(props: Props): JSX.Element & {
	Item: typeof Item;
	Content: typeof Content;
	Panel: typeof Panel;
	Bar: typeof Bar;
};

export function VerticalBar({
	absolute = false,
	active,
	children,
	className,
	defaultActive,
	onActiveChange,
	position = 'right',
}: Props) {
	const [activePanel, setActivePanel] = useInternalState<
		React.Key | undefined
	>({
		defaultName: 'defaultItems',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: active,
	});

	return (
		<div
			className={classNames('c-slideout c-slideout-shown', className, {
				'c-slideout-absolute': absolute,
				'c-slideout-end': position === 'right',
				'c-slideout-fixed': !absolute,
				'c-slideout-start sidenav-start': position === 'left',
			})}
		>
			<VerticalBarContext.Provider
				value={{
					activePanel,
					onActivePanel: setActivePanel,
				}}
			>
				{children}
			</VerticalBarContext.Provider>
		</div>
	);
}

VerticalBar.Bar = Bar;
VerticalBar.Content = Content;
VerticalBar.Item = Item;
VerticalBar.Panel = Panel;
