/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

// @ts-nocheck

import {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {LinkOrButton} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import {
	CSSTransition,
	Transition,
	TransitionGroup,
} from 'react-transition-group';

import Item from './Item';

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

function gatherMenus(items, index = 0, parentHeader) {
	items = [...items];

	let menus = [{index, items, parentHeader}];

	items.forEach((item) => {
		if (item.items) {
			item.childIndex = index + 1;

			menus = [
				...menus,
				...gatherMenus(item.items, index + 1, item.title),
			];
		}
	});

	return menus;
}

const Menu: React.FunctionComponent<any> = ({
	active,
	direction,
	menu,
	onActiveChange,
	spritemap,
}) => {
	return (
		<CSSTransition
			className={classNames('drilldown-item', {
				'drilldown-current': active,
			})}
			classNames={{
				enter: `transitioning drilldown-transition drilldown-${direction}-enter`,
				enterActive: `drilldown-${direction}-enter-active`,
				exit: `transitioning drilldown-transition drilldown-${direction}-exit`,
				exitActive: `drilldown-${direction}-exit-active`,
			}}
			in={active}
			timeout={250}
		>
			<div className="drilldown-item-inner">
				{menu.parentHeader && (
					<>
						<div className="dropdown-header">
							<ClayButtonWithIcon
								className="component-action dropdown-item-indicator-start"
								onClick={() => onActiveChange(menu.index - 1)}
								spritemap={spritemap}
								symbol="angle-left"
							/>

							<span className="dropdown-item-indicator-text-start">
								{menu.parentHeader}
							</span>
						</div>

						<div className="dropdown-divider" />
					</>
				)}

				{menu.items && (
					<ul className="nav nav-stacked">
						{menu.items.map(
							(
								{
									childIndex,
									className,
									items: childItems,
									symbol,
									title,
									...other
								},
								j
							) => (
								<li key={j}>
									<LinkOrButton
										{...other}
										buttonDisplayType="unstyled"
										className={classNames(
											'dropdown-item',
											className
										)}
										onClick={() => {
											onActiveChange(childIndex);
										}}
									>
										{symbol && (
											<span className="dropdown-item-indicator-start">
												<ClayIcon
													spritemap={spritemap}
													symbol={symbol}
												/>
											</span>
										)}

										<span className="dropdown-item-indicator-text-end">
											{title}
										</span>

										{childItems && (
											<span className="dropdown-item-indicator-end">
												<ClayIcon
													spritemap={spritemap}
													symbol="angle-right"
												/>
											</span>
										)}
									</LinkOrButton>
								</li>
							)
						)}
					</ul>
				)}
			</div>
		</CSSTransition>
	);
};

const ClayDrilldown: React.FunctionComponent<IProps> & {
	Item: typeof Item;
} = ({className, items, spritemap, ...otherProps}) => {
	const [activeMenu, setActiveMenu] = React.useState(0);
	const [direction, setDirection] = React.useState();

	const menus = gatherMenus(items);

	return (
		<div {...otherProps} className={classNames('drilldown', className)}>
			<div className="drilldown-inner" style={{overflow: 'visible'}}>
				{menus.map((menu, i) => (
					<Menu
						active={activeMenu === i}
						direction={direction}
						key={i}
						menu={menu}
						onActiveChange={(index) => {
							setDirection(index > activeMenu ? 'next' : 'prev');
							setActiveMenu(index);
						}}
						spritemap={spritemap}
					/>
				))}
			</div>
		</div>
	);
};

ClayDrilldown.Item = Item;

export default ClayDrilldown;
