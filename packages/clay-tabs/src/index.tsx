/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	FOCUSABLE_ELEMENTS,
	InternalDispatch,
	Keys,
	useInternalState,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef} from 'react';

import Content from './Content';
import Item from './Item';
import TabPane from './TabPane';

export type DisplayType = null | 'basic' | 'underline';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Flag to indicate the navigation behavior in the tab.
	 *
	 * - manual - it will just move the focus and tab activation is done just
	 * by pressing space or enter.
	 * - automatic - moves the focus to the tab and activates the tab.
	 */
	activation?: 'manual' | 'automatic';

	/**
	 * The current tab active (controlled).
	 */
	active?: number;

	/**
	 * Initial active tab when rendering component (uncontrolled).
	 */
	defaultActive?: number;

	/**
	 * Determines how tab is displayed.
	 */
	displayType?: DisplayType;

	/**
	 * Justify the nav items according the tab content.
	 */
	justified?: boolean;

	/**
	 * Applies a modern style to the tab.
	 */
	modern?: boolean;

	/**
	 * Callback is called when the active tab changes (controlled).
	 */
	onActiveChange?: InternalDispatch<number>;
}

function ClayTabs(props: IProps): JSX.Element & {
	Content: typeof Content;
	TabPane: typeof TabPane;
	TabPanel: typeof TabPane;
	Item: typeof Item;
};

function ClayTabs({
	activation = 'manual',
	active: externalActive,
	children,
	className,
	defaultActive = 0,
	displayType,
	justified,
	modern = true,
	onActiveChange,
	...otherProps
}: IProps) {
	const tabsRef = useRef<HTMLUListElement>(null);

	const [active, setActive] = useInternalState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});

	return (
		<ul
			{...otherProps}
			className={classNames(
				'nav',
				{'nav-justified': justified},
				!displayType
					? {
							'nav-tabs': !modern,
							'nav-underline': modern,
					  }
					: {
							'nav-tabs': displayType === 'basic',
							'nav-underline': displayType === 'underline',
					  },

				className
			)}
			onKeyDown={(event) => {
				if (!tabsRef.current) {
					return;
				}

				if (event.key === Keys.Left || event.key === Keys.Right) {
					const tabs = Array.from<HTMLElement>(
						tabsRef.current.querySelectorAll(
							FOCUSABLE_ELEMENTS.join(',')
						)
					);
					const activeElement = document.activeElement as HTMLElement;

					const position = tabs.indexOf(activeElement);

					const tab =
						tabs[
							event.key === Keys.Left
								? position - 1
								: position + 1
						];

					if (tab) {
						tab.focus();

						if (activation === 'automatic') {
							const newActive = Array.from(
								tabsRef.current.querySelectorAll('a, button')
							).indexOf(tab);

							setActive(newActive);
						}
					}
				}
			}}
			ref={tabsRef}
			role="tablist"
		>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return child;
				}

				return React.cloneElement(child as React.ReactElement, {
					active:
						(child as React.ReactElement).props.active !== undefined
							? (child as React.ReactElement).props.active
							: active === index,
					onClick: (
						event: React.MouseEvent<HTMLButtonElement, MouseEvent>
					) => {
						const {onClick} = (child as React.ReactElement).props;

						if (onClick) {
							onClick(event);
						} else {
							setActive(index);
						}
					},
				});
			})}
		</ul>
	);
}

ClayTabs.Content = Content;
ClayTabs.TabPane = TabPane;
ClayTabs.TabPanel = TabPane;
ClayTabs.Item = Item;

export default ClayTabs;
