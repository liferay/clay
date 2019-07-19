/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from './DropDown';
import React, {useState} from 'react';

interface IItem {
	active?: boolean;
	href?: string;
	label?: string;
	type?: 'divider';
	onClick?: () => void;
	symbolRight?: string;
	symbolLeft?: string;
}

interface IProps {
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

export const ClayDropDownWithBasicItems: React.FunctionComponent<IProps> = ({
	items,
	spritemap,
	trigger,
}: IProps) => {
	const [active, setActive] = useState(false);

	const hasRightSymbols = !!items.find(item => item.symbolRight);
	const hasLeftSymbols = !!items.find(item => item.symbolLeft);

	return (
		<ClayDropDown
			active={active}
			hasLeftSymbols={hasLeftSymbols}
			hasRightSymbols={hasRightSymbols}
			onActiveChange={(newVal: boolean) => setActive(newVal)}
			trigger={trigger}
		>
			<ClayDropDown.ItemList>
				{items.map((item: IItem, i: number) => {
					if (item.type === 'divider') {
						return <ClayDropDown.Divider />;
					}

					return (
						<ClayDropDown.Item
							key={i}
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
