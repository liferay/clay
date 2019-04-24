/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useEffect} from 'react';

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';

import {useTransition} from './Hooks';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * An array of items that will be rendered on the dropdown.
	 */
	items: Array<{active?: boolean; href?: string; label: string}>;

	/**
	 * Determines the style of the Navigation Bar
	 */
	inverted?: boolean;

	/**
	 * This property is used to pass a MouseEvent from a NavItem to a
	 * function when this element is clicked.
	 */
	onItemClicked?: (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>
	) => void | undefined;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap: string;
}

const ClayNavigationBar: React.FunctionComponent<Props> = ({
	className,
	inverted = false,
	items,
	onItemClicked,
	spritemap,
	...otherProps
}) => {
	const [visible, setVisible] = React.useState(false);
	const contentRef = React.useRef<HTMLDivElement>(null);
	const [
		transitioning,
		handleTransitionEnd,
		handleClickToggler,
	] = useTransition(visible, setVisible, contentRef);

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
				<ClayLink
					className={classNames(
						'navbar-toggler',
						'navbar-toggler-link',
						{
							collapsed: !visible,
						}
					)}
					displayType="secondary"
					onClick={handleClickToggler}
				>
					{items.map(({active, label}) => {
						if (active) {
							return label;
						}
					})}
					<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
				</ClayLink>

				<div
					className={classNames('navbar-collapse', {
						collapse: !transitioning,
						collapsing: transitioning,
						show: visible,
					})}
					onTransitionEnd={handleTransitionEnd}
					ref={contentRef}
				>
					<div className="container-fluid container-fluid-max-xl">
						<ul className="navbar-nav">
							{items.map(({active, href, label}, index) => (
								<li
									className={classNames('nav-item', {
										active,
									})}
									data-nav-item-index={index}
									key={index}
									onClick={onItemClicked}
								>
									{href ? (
										<ClayLink
											className={classNames('nav-link', {
												active,
											})}
											displayType="secondary"
											href={href}
										>
											<span className="navbar-text-truncate">
												{label}
											</span>
										</ClayLink>
									) : (
										<ClayButton
											block
											className={classNames('nav-link', {
												active,
											})}
											displayType="unstyled"
											small
										>
											<span className="navbar-text-truncate">
												{label}
											</span>
										</ClayButton>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default ClayNavigationBar;
