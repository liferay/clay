/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {useTransitionHeight} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef, useState} from 'react';
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
	const [visible, setVisible] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [
		transitioning,
		handleTransitionEnd,
		handleClickToggler,
	] = useTransitionHeight(visible, setVisible, contentRef);

	const activeElementsCount = children.filter(child => child.props.active)
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
			<div className="container-fluid container-fluid-max-xl">
				<ClayButton
					aria-expanded={visible}
					className={classNames(
						'navbar-toggler',
						'navbar-toggler-link',
						{
							collapsed: !visible,
						}
					)}
					data-testid="navbarToggler"
					displayType="unstyled"
					onClick={handleClickToggler}
				>
					<span className="navbar-text-truncate">{triggerLabel}</span>

					<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
				</ClayButton>

				<div
					className={classNames('navbar-collapse', {
						collapse: !transitioning,
						collapsing: transitioning,
						show: visible,
					})}
					data-testid="NavigationBarDropdown"
					onTransitionEnd={handleTransitionEnd}
					ref={contentRef}
				>
					<div className="container-fluid container-fluid-max-xl">
						<ul className="navbar-nav">{children}</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

ClayNavigationBar.Item = Item;

export default ClayNavigationBar;
