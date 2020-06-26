/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

type TItem = {
	title?: string;
	items?: Array<TItem>;
	href?: string;
	onClick?: () => void;
};

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	current?: boolean;
	items?: Array<TItem>;
	spritemap?: string;
	title: string;
}

const ClayDrilldownItem: React.FunctionComponent<IProps> = ({
	children,
	className,
	current,
	items,
	spritemap,
	title,
	...otherProps
}) => {
	return (
		<div
			{...otherProps}
			className={classNames('drilldown-item', className, {
				'drilldown-current': current,
			})}
		>
			<div className="drilldown-item-inner">
				<div className="">
					<a
						className="component-action"
						data-drilldown="prev"
						href="#firstClayDrillDown.Item"
						role="button"
					>
						<ClayIcon spritemap={spritemap} symbol="angle-left" />
					</a>
					<span className="">{title}</span>
				</div>

				<div className="" />

				{items && (
					<ul>
						{items.map((item, i) => (
							<li key={i}>
								<a className="" href="#1">
									{item.title}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default ClayDrilldownItem;
