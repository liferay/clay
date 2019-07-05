/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import React, {useState} from 'react';
import {IBreadcrumbItem} from './BreadcrumbItem';

export interface IBreadcrumbEllipsisProps {
	items?: Array<IBreadcrumbItem>;
	spritemap: string;
}

export const BreadcrumbEllipsis: React.FunctionComponent<
	IBreadcrumbEllipsisProps
> = ({items, spritemap, ...otherProps}) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			active={active}
			className="breadcrumb-item"
			containerElement="li"
			onActiveChange={newVal => setActive(newVal)}
			trigger={
				<ClayButton className="breadcrumb-link" displayType="unstyled">
					<ClayIcon spritemap={spritemap} symbol="ellipsis-h" />
					<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
				</ClayButton>
			}
			{...otherProps}
		>
			<ClayDropDown.ItemList>
				{items &&
					items.map(({href, label, onItemClick}, i) => (
						<ClayDropDown.Item
							href={href}
							key={i}
							onClick={onItemClick}
						>
							{label}
						</ClayDropDown.Item>
					))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
};
