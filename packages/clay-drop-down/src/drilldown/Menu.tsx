/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {LinkOrButton} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import {CSSTransition} from 'react-transition-group';

export interface IItem extends React.ComponentProps<typeof LinkOrButton> {
	child?: string;
	title: string;
	href?: string;
	symbol?: string;
}

export interface IProps {
	active?: boolean;
	direction?: 'prev' | 'next';
	header?: string;
	items: Array<IItem>;
	onBack: () => void;
	onForward: (title: string, child: string) => void;
	spritemap?: string;
}

const DrilldownMenu: React.FunctionComponent<IProps> = ({
	active,
	direction,
	header,
	items,
	onBack,
	onForward,
	spritemap,
}) => {
	const initialClasses = classNames('transitioning', {
		'drilldown-prev-initial': direction === 'prev',
	});

	return (
		<CSSTransition
			className={classNames('drilldown-item', {
				'drilldown-current': active,
			})}
			classNames={{
				enter: initialClasses,
				enterActive: `drilldown-transition drilldown-${direction}-active`,
				exit: initialClasses,
				exitActive: `drilldown-transition drilldown-${direction}-active`,
			}}
			in={active}
			timeout={250}
		>
			<div className="drilldown-item-inner">
				{header && (
					<>
						<div
							className="dropdown-header"
							data-testid={`back-button-${header}`}
							onClick={onBack}
						>
							<ClayButtonWithIcon
								className="component-action dropdown-item-indicator-start"
								onClick={onBack}
								spritemap={spritemap}
								symbol="angle-left"
							/>

							<span className="dropdown-item-indicator-text-start">
								{header}
							</span>
						</div>

						<div className="dropdown-divider" />
					</>
				)}

				{items && (
					<ul className="inline-scroller">
						{items.map(
							(
								{
									child,
									className,
									onClick,
									symbol,
									title,
									...other
								},
								j
							) => (
								<li key={`${j}-${title}`}>
									<LinkOrButton
										{...other}
										buttonDisplayType="unstyled"
										className={classNames(
											'dropdown-item',
											className
										)}
										data-testid={`menu-item-${title}`}
										onClick={(
											event: React.SyntheticEvent
										) => {
											if (onClick) {
												onClick(event);
											}

											if (title && child) {
												onForward(title, child);
											}
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

										{child && (
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

export default DrilldownMenu;
