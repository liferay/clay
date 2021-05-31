/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {TInternalStateOnChange, useInternalState} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import ClayDropDown from './DropDown';
import ClayDropDownMenu from './Menu';
import Drilldown from './drilldown';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if the menu should be initially active (open).
	 */
	active?: boolean;

	/**
	 * Default position of menu element. Values come from `./Menu`.
	 */
	alignmentPosition?: React.ComponentProps<
		typeof ClayDropDownMenu
	>['alignmentPosition'];

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: React.ComponentProps<
		typeof ClayDropDown
	>['containerElement'];

	/**
	 * The unique identifier of the menu that should be active on mount.
	 */
	initialActiveMenu: string;

	/**
	 * Prop to pass DOM element attributes to <DropDown.Menu />.
	 */
	menuElementAttrs?: React.ComponentProps<
		typeof ClayDropDown
	>['menuElementAttrs'];

	/**
	 * Map of menus and items to be used in the drilldown. Each key should be a unique identifier for the menu.
	 */
	menus: {
		[id: string]: React.ComponentProps<typeof Drilldown.Menu>['items'];
	};

	menuHeight?: React.ComponentProps<typeof ClayDropDown>['menuHeight'];

	menuWidth?: React.ComponentProps<typeof ClayDropDown>['menuWidth'];

	/**
	 * Function for setting the offset of the menu from the trigger.
	 */
	offsetFn?: React.ComponentProps<typeof ClayDropDown>['offsetFn'];

	/**
	 * Callback the will be invoked when the active prop is changed.
	 */
	onActiveChange?: TInternalStateOnChange<boolean>;

	/**
	 * Path to spritemap
	 */
	spritemap?: string;

	/**
	 * Element that is used as the trigger which will activate the dropdown on click.
	 */
	trigger: React.ReactElement;
}

interface IHistory {
	id: string;
	title: string;
}

export const ClayDropDownWithDrilldown: React.FunctionComponent<IProps> = ({
	active,
	alignmentPosition,
	className,
	containerElement,
	initialActiveMenu,
	menuElementAttrs,
	menuHeight,
	menuWidth,
	menus,
	offsetFn,
	onActiveChange,
	spritemap,
	trigger,
}: IProps) => {
	const [activeMenu, setActiveMenu] = React.useState(initialActiveMenu);
	const [direction, setDirection] = React.useState<'prev' | 'next'>();
	const [history, setHistory] = React.useState<Array<IHistory>>([]);
	const [internalActive, setInternalActive] = useInternalState({
		onChange: onActiveChange,
		value: active,
	});

	const menuIds = Object.keys(menus);

	return (
		<ClayDropDown
			active={internalActive}
			alignmentPosition={alignmentPosition}
			className={className}
			containerElement={containerElement}
			hasRightSymbols
			menuElementAttrs={{
				...menuElementAttrs,
				className: classNames(menuElementAttrs?.className, 'drilldown'),
			}}
			menuHeight={menuHeight}
			menuWidth={menuWidth}
			offsetFn={offsetFn}
			onActiveChange={setInternalActive}
			trigger={trigger}
		>
			<Drilldown.Inner>
				{menuIds.map((menuKey) => {
					return (
						<Drilldown.Menu
							active={activeMenu === menuKey}
							direction={direction}
							header={
								activeMenu === menuKey && history.length
									? history.slice(-1)[0].title
									: undefined
							}
							items={menus[menuKey]}
							key={menuKey}
							onBack={() => {
								const [parent] = history.slice(-1);

								setHistory(
									history.slice(0, history.length - 1)
								);

								setDirection('prev');

								setActiveMenu(parent.id);
							}}
							onForward={(title, childId) => {
								setHistory([
									...history,
									{id: activeMenu, title},
								]);

								setDirection('next');

								setActiveMenu(childId);
							}}
							spritemap={spritemap}
						/>
					);
				})}
			</Drilldown.Inner>
		</ClayDropDown>
	);
};

ClayDropDownWithDrilldown.displayName = 'ClayDropDownWithDrilldown';
