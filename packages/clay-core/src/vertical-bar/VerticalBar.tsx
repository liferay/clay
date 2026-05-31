/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	ClayPortal,
	InternalDispatch,
	useControlledState,
	useId,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef} from 'react';

import {KeyboardArrowsIndicator} from '../keyboard-arrows-indicator';
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
	 * Sets the current active panel (controlled).
	 */
	active?: React.Key | null;

	/**
	 * The VerticalBar content.
	 */
	children: React.ReactNode;

	/**
	 * Sets the CSS className for the component.
	 */
	className?: string;

	/**
	 * Sets the default active panel (uncontrolled).
	 */
	defaultActive?: React.Key | null;

	/**
	 * Panel width initial value (uncontrolled).
	 */
	defaultPanelWidth?: number;

	/**
	 * Flag to render the `KeyboardArrowsIndicator` alongside the
	 * component, hinting that up and down arrow keys can be used to step
	 * between the bar items. The indicator anchors to the outer
	 * `c-slideout` wrapper so it follows the expanded surface when a
	 * panel opens, and flips to the opposite side when it would overflow
	 * the viewport. Visible only while the component has keyboard focus.
	 */
	displayKeyboardArrowsIndicator?: boolean;

	/**
	 * Callback is called when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<React.Key | null>;

	/**
	 * Callback called when panel width changes (controlled).
	 */
	onPanelWidthChange?: InternalDispatch<number>;

	/**
	 * Sets a custom width on the sidebar panel (controlled).
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
	 * Sets the position of the vertical bar.
	 */
	position?: 'left' | 'right';

	/**
	 * Flag to enable resizing the sidebar panel.
	 */
	resize?: boolean;
};

export function VerticalBar({
	absolute = false,
	activation = 'manual',
	active,
	children,
	className,
	defaultActive = null,
	defaultPanelWidth = 320,
	displayKeyboardArrowsIndicator = false,
	onActiveChange,
	onPanelWidthChange,
	panelWidth: externalPanelWidth,
	panelWidthMax = 500,
	panelWidthMin = 280,
	position = 'right',
	resize = false,
}: Props) {
	const [activePanel, setActivePanel] = useControlledState<React.Key | null>({
		defaultName: 'defaultItems',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: active,
	});

	const id = useId();

	const [panelNext, setPanelNext] = React.useState<React.Key | null>(null);

	const rootRef = useRef<HTMLDivElement>(null);

	const [panelWidth, setPanelWidth] = useControlledState({
		defaultName: 'defaultPanelWidth',
		defaultValue: defaultPanelWidth,
		handleName: 'onPanelWidthChange',
		name: 'panelWidth',
		onChange: onPanelWidthChange,
		value: externalPanelWidth,
	});

	return (
		<>
			<div
				className={classNames(
					'c-slideout c-slideout-shown',
					className,
					{
						'c-slideout-absolute': absolute,
						'c-slideout-end': position === 'right',
						'c-slideout-fixed': !absolute,
						'c-slideout-start sidenav-start': position === 'left',
					}
				)}
				ref={rootRef}
			>
				<VerticalBarContext.Provider
					value={{
						activation,
						activePanel,
						id: `${id}-verticalbar`,
						onActivePanel: setActivePanel,
						onPanelWidthChange: setPanelWidth,
						panelNext,
						panelWidth,
						panelWidthMax,
						panelWidthMin,
						position,
						resize,
						setPanelNext,
					}}
				>
					{children}
				</VerticalBarContext.Provider>
			</div>

			{displayKeyboardArrowsIndicator && (
				<ClayPortal>
					<KeyboardArrowsIndicator
						anchorRef={rootRef}
						direction="vertical"
						placement="tooltip-top"
					/>
				</ClayPortal>
			)}
		</>
	);
}

VerticalBar.Bar = Bar;
VerticalBar.Content = Content;
VerticalBar.Item = Item;
VerticalBar.Panel = Panel;
