/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = React.useState(false);
	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={Align.BottomRight}
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayIcon spritemap={spritemap} symbol="ellipsis-v" />}
		>
			{children}
		</ClayDropDown>
	);
};

export default function ClayDropdownWithTrigger() {
	return (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				{[
					{href: '#1', label: 'One'},
					{href: '#2', label: 'Two'},
					{href: '#3', label: 'Three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	);
}
