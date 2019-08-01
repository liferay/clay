/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from './DropDown';
import React, {useState} from 'react';
import {useFocusManagement} from '@clayui/shared';

interface IItem {
	active?: boolean;
	href?: string;
	label?: string;
	type?: 'divider';
	onClick?: (
		event: React.MouseEvent<
			HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement,
			MouseEvent
		>,
		item: IItem
	) => void;
	symbolRight?: string;
	symbolLeft?: string;
}

interface IProps {
	className?: string;

	/**
	 * List of items to display in drop down menu
	 */
	items: Array<IItem>;

	/**
	 * Element that is used for opening menu
	 */
	trigger: React.ReactElement;

	spritemap?: string;
}

const TAB_KEY_CODE = 9;
const ARROW_UP_KEY_CODE = 38;
const ARROW_DOWN_KEY_CODE = 40;

export const ClayDropDownWithBasicItems: React.FunctionComponent<IProps> = ({
	className,
	items,
	spritemap,
	trigger,
}: IProps) => {
	const [active, setActive] = useState(false);
	const focusManager = useFocusManagement();

	const hasRightSymbols = !!items.find(item => item.symbolRight);
	const hasLeftSymbols = !!items.find(item => item.symbolLeft);

	const onKeyDown = (event: React.KeyboardEvent<any>) => {
		const {keyCode, shiftKey} = event;

		if (
			keyCode === ARROW_DOWN_KEY_CODE ||
			(keyCode === TAB_KEY_CODE && !shiftKey)
		) {
			event.preventDefault();
			focusManager.focusNext();
		} else if (
			keyCode === ARROW_UP_KEY_CODE ||
			(keyCode === TAB_KEY_CODE && shiftKey)
		) {
			event.preventDefault();
			focusManager.focusPrevious();
		}
	};

	return (
		<ClayDropDown
			active={active}
			className={className}
			hasLeftSymbols={hasLeftSymbols}
			hasRightSymbols={hasRightSymbols}
			onActiveChange={(newVal: boolean) => setActive(newVal)}
			onKeyDown={onKeyDown}
			trigger={React.cloneElement(trigger, {
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
								focusManager.createScope(ref, `item${i}`, true)
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
	);
};
