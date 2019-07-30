/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from './DropDown';
import React, {useState} from 'react';
import {FocusScope, useFocusManagement} from '@clayui/shared';

interface IItem {
	active?: boolean;
	disabled?: boolean;
	href?: string;
	label?: string;
	onClick?: (
		event: React.MouseEvent<
			HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement,
			MouseEvent
		>,
		item: IItem
	) => void;
	symbolLeft?: string;
	symbolRight?: string;
	type?: 'divider';
}

interface IProps {
	className?: string;

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: 'div' | 'li';

	/**
	 * List of items to display in drop down menu
	 */
	items: Array<IItem>;

	/**
	 * Element that is used for opening menu
	 */
	trigger: React.ReactElement | React.ForwardRefExoticComponent<any>;

	spritemap?: string;
}

export const ClayDropDownWithBasicItems: React.FunctionComponent<IProps> = ({
	className,
	containerElement,
	items,
	spritemap,
	trigger,
}: IProps) => {
	const [active, setActive] = useState(false);
	const focusManager = useFocusManagement();

	const hasRightSymbols = !!items.find(item => item.symbolRight);
	const hasLeftSymbols = !!items.find(item => item.symbolLeft);

	return (
		<FocusScope focusManager={focusManager}>
			<ClayDropDown
				active={active}
				className={className}
				containerElement={containerElement}
				hasLeftSymbols={hasLeftSymbols}
				hasRightSymbols={hasRightSymbols}
				onActiveChange={(newVal: boolean) => setActive(newVal)}
				trigger={React.cloneElement(trigger as React.ReactElement, {
					ref: (ref: any) => focusManager.createScope(ref, 'trigger'),
				})}
			>
				<ClayDropDown.ItemList>
					{items.map(({onClick, ...item}: IItem, i: number) => {
						if (item.type === 'divider') {
							return <ClayDropDown.Divider key={i} />;
						}

						return (
							<ClayDropDown.Item
								innerRef={(ref: HTMLLinkElement) =>
									focusManager.createScope(
										ref,
										`item${i}`,
										true
									)
								}
								key={i}
								onClick={
									onClick
										? event => onClick(event, item)
										: undefined
								}
								spritemap={spritemap}
								{...item}
							>
								{item.label}
							</ClayDropDown.Item>
						);
					})}
				</ClayDropDown.ItemList>
			</ClayDropDown>
		</FocusScope>
	);
};
