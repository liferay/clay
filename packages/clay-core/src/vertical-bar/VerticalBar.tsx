/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {InternalDispatch, useId, useInternalState} from '@clayui/shared';
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
	 * Flag to indicate the navigation behavior in the tab.
	 *
	 * - manual - it will just move the focus and tab activation is done just
	 * by pressing space or enter.
	 * - automatic - moves the focus to the tab and activates the tab.
	 */
	activation?: 'manual' | 'automatic';

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
	active?: React.Key | null;

	/**
	 * Sets the default active panel (uncontrolled).
	 */
	defaultActive?: React.Key | null;

	/**
	 * Callback is called when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<React.Key | null>;

	/**
	 * Sets a custom width on the sidebar panel.
	 */
	panelWidth?: number;

	/**
	 * Sets a maximum width on the sidebar panel.
	 */
	panelWidthMax?: number;

	/**
	 * Sets a minimum width on the sidebar panel.
	 */
	panelWidthMin?: number;

	/**
	 * Flag to enable resizing the sidebar panel.
	 */
	resize?: boolean;
};

export function VerticalBar(props: Props): JSX.Element & {
	Item: typeof Item;
	Content: typeof Content;
	Panel: typeof Panel;
	Bar: typeof Bar;
};

export function VerticalBar({
	absolute = false,
	activation = 'manual',
	active,
	children,
	className,
	defaultActive = null,
	onActiveChange,
	panelWidth = 320,
	panelWidthMax = 500,
	panelWidthMin = 280,
	position = 'right',
	resize = false,
}: Props) {
	const [activePanel, setActivePanel] = useInternalState<React.Key | null>({
		defaultName: 'defaultItems',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: active,
	});

	const id = useId();

	const [internalPanelWidth, setInternalPanelWidth] =
		React.useState(panelWidth);

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
					activation,
					activePanel,
					id: `${id}-verticalbar`,
					internalPanelWidth,
					onActivePanel: setActivePanel,
					onPanelWidthChange: setInternalPanelWidth,
					panelWidthMax,
					panelWidthMin,
					position,
					resize,
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
