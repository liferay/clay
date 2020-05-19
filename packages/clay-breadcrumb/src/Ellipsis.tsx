/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import React, {useState} from 'react';

import Item from './Item';

interface IEllipsisProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Property to define BreadcrumbEllipsis's items.
	 */
	items: Array<React.ComponentProps<typeof Item>>;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;
}

const Ellipsis: React.FunctionComponent<IEllipsisProps> = ({
	items,
	spritemap,
	...otherProps
}) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			active={active}
			className="breadcrumb-item"
			containerElement="li"
			onActiveChange={newVal => setActive(newVal)}
			trigger={
				<ClayButton
					className="breadcrumb-link"
					data-testid="breadcrumbDropdownTrigger"
					displayType="unstyled"
				>
					<ClayIcon spritemap={spritemap} symbol="ellipsis-h" />
					<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
				</ClayButton>
			}
			{...otherProps}
		>
			<ClayDropDown.ItemList>
				{items.map(({href, label, onClick}, i) => (
					<ClayDropDown.Item
						href={href}
						key={`breadcrumbEllipsisItem${i}`}
						onClick={onClick}
						title={label}
					>
						{label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
};

export default Ellipsis;
