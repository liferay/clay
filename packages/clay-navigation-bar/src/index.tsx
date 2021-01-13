/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import {setElementFullHeight} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import {CSSTransition} from 'react-transition-group';
import warning from 'warning';

import Item from './Item';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Children elements received from ClayNavigationBar component.
	 */
	children: Array<React.ReactElement<React.ComponentProps<typeof Item>>>;

	/**
	 * Determines the style of the Navigation Bar
	 */
	inverted?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Set up dropdown's trigger label.
	 */
	triggerLabel: string;
}

const ClayNavigationBar: React.FunctionComponent<IProps> & {
	Item: typeof Item;
} = ({
	children,
	className,
	inverted = false,
	spritemap,
	triggerLabel,
	...otherProps
}: IProps) => {
	const [expanded, setExpanded] = React.useState(false);

	const activeElementsCount = children.filter((child) => child.props.active)
		.length;

	warning(
		activeElementsCount <= 1,
		`ClayNavigationBar expects 0 or 1 active children, but received ${activeElementsCount}`
	);

	return (
		<nav
			{...otherProps}
			className={classNames(
				className,
				'navbar',
				'navbar-collapse-absolute',
				'navbar-expand-md',
				'navbar-underline',
				'navigation-bar',
				{
					'navigation-bar-light': !inverted,
					'navigation-bar-secondary': inverted,
				}
			)}
		>
			<ClayLayout.ContainerFluid>
				<ClayButton
					aria-expanded={expanded}
					className={classNames(
						'navbar-toggler',
						'navbar-toggler-link',
						{
							collapsed: !expanded,
						}
					)}
					data-testid="navbarToggler"
					displayType="unstyled"
					onClick={() => setExpanded(!expanded)}
				>
					<span className="navbar-text-truncate">{triggerLabel}</span>

					<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
				</ClayButton>

				<CSSTransition
					className={classNames('navbar-collapse', {
						collapse: !expanded,
					})}
					classNames={{
						enter: 'collapsing',
						enterActive: `show`,
						enterDone: 'show',
						exit: `show`,
						exitActive: 'collapsing',
					}}
					in={expanded}
					onEnter={(el: HTMLElement) =>
						el.setAttribute('style', `height: 0px`)
					}
					onEntering={(el: HTMLElement) => setElementFullHeight(el)}
					onExit={(el) => setElementFullHeight(el)}
					onExiting={(el) => el.setAttribute('style', `height: 0px`)}
					timeout={250}
				>
					<div>
						<ClayLayout.ContainerFluid>
							<ul className="navbar-nav">{children}</ul>
						</ClayLayout.ContainerFluid>
					</div>
				</CSSTransition>
			</ClayLayout.ContainerFluid>
		</nav>
	);
};

ClayNavigationBar.Item = Item;

export default ClayNavigationBar;
