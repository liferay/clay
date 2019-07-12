/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from './DropDown';
import React, {useState} from 'react';

interface IItem {
	href?: string;
	label?: string;
	type?: 'divider';
	onClick?: () => void;
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
}

export const ClayDropDownWithBasicItems: React.FunctionComponent<IProps> = ({
	items,
	trigger,
}: IProps) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			active={active}
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
							href={item.href}
							key={i}
							onClick={item.onClick}
						>
							{item.label}
						</ClayDropDown.Item>
					);
				})}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
};
