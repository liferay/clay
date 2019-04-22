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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * This property is used to pass a MouseEvent from a NavItem to a
	 * function when this element is clicked.
	 */
	onItemClicked?: (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>
	) => void | undefined;

	/**
	 * The id that will be given to the Navigation<nav> element
	 */
	id?: string;

	/**
	 * An array of items that will be rendered on the dropdown.
	 */
	items: Array<{active?: boolean; href?: string; label: string}>;

	/**
	 * Determines the style of the Navigation Bar
	 */
	inverted?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap: string;
}

const ClayNavigationBar: React.FunctionComponent<Props> = ({
	className,
	id,
	inverted = false,
	items,
	onItemClicked,
	spritemap,
	...otherProps
}) => {
	const [visible, setVisible] = React.useState(false);
	const [transitioning, setTransitioning] = React.useState(false);
	const contentRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (transitioning) {
			setCollapseHeight();
			if (visible) {
				removeCollapseHeight();
			}
		}
	}, [transitioning]);

	const handleTransitionEnd = (event: any) => {
		if (event.target === contentRef.current && transitioning && !visible) {
			setVisible(true);
			setTransitioning(false);
			removeCollapseHeight();
		} else if (event.target === contentRef.current) {
			setVisible(false);
			setTransitioning(false);
		}
	};

	const setCollapseHeight = () => {
		const elementCollapse = contentRef;
		if (elementCollapse && elementCollapse.current) {
			elementCollapse.current.setAttribute(
				'style',
				`height: ${elementCollapse.current.children[0].clientHeight}px`
			);
		}
	};

	const removeCollapseHeight = () => {
		if (contentRef && contentRef.current) {
			contentRef.current.style.removeProperty('height');
		}
	};

	const handleClickToggler = (event: any) => {
		event.preventDefault();
		if (visible && !transitioning) {
			setCollapseHeight();
		}

		if (!transitioning) {
			setTransitioning(true);
		}
	};

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
			id={id}
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
