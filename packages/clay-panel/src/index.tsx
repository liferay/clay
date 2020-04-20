/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {useTransitionHeight} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import ClayPanelBody from './Body';
import ClayPanelFooter from './Footer';
import ClayPanelGroup from './Group';
import ClayPanelHeader from './Header';
import ClayPanelTitle from './Title';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate that Panel is collapsable.
	 */
	collapsable?: boolean;

	/**
	 * Adds classes to the collapse element. Only when `collapsable` is true.
	 */
	collapseClassNames?: string;

	/**
	 * Flag to indicate the initial value of expanded.
	 */
	defaultExpanded?: boolean;

	/**
	 * Content to display in Panel Title.
	 */
	displayTitle?: React.ReactNode;

	/**
	 * Flag to indicate the visual variation of the Panel.
	 */
	displayType?: 'unstyled' | 'secondary';

	/**
	 * Flag to toggle collapse icon visibility when `collapsable` is true.
	 */
	showCollapseIcon?: boolean;

	/**
	 * Path to spritemap for clay icons
	 */
	spritemap?: string;
}

const ClayPanel: React.FunctionComponent<IProps> & {
	Body: typeof ClayPanelBody;
	Footer: typeof ClayPanelFooter;
	Group: typeof ClayPanelGroup;
	Header: typeof ClayPanelHeader;
	Title: typeof ClayPanelTitle;
} = ({
	children,
	className,
	collapsable,
	collapseClassNames,
	defaultExpanded = false,
	displayTitle,
	displayType,
	showCollapseIcon = true,
	spritemap,
	...otherProps
}: IProps) => {
	const panelRef = React.useRef<HTMLDivElement>(null);
	const [expanded, setExpaned] = React.useState<boolean>(defaultExpanded);

	const [
		transitioning,
		handleTransitionEnd,
		handleClickToggler,
	] = useTransitionHeight(expanded, setExpaned, panelRef);

	const showIconCollapsed = !(
		(!expanded && transitioning) ||
		(expanded && !transitioning)
	);

	return (
		<div
			{...otherProps}
			className={classNames('panel', className, {
				[`panel-${displayType}`]: displayType,
			})}
			role="tablist"
		>
			{!collapsable && (
				<>
					{displayTitle && React.isValidElement(displayTitle) ? (
						displayTitle
					) : (
						<ClayPanelHeader>
							<span className="panel-title">{displayTitle}</span>
						</ClayPanelHeader>
					)}

					{children}
				</>
			)}

			{collapsable && (
				<>
					<button
						aria-expanded={expanded}
						className={classNames(
							'btn btn-unstyled panel-header panel-header-link',
							{
								'collapse-icon': showCollapseIcon,
								'collapse-icon-middle': showCollapseIcon,
								collapsed: showIconCollapsed,
							}
						)}
						onClick={handleClickToggler}
						role="tab"
					>
						{displayTitle && React.isValidElement(displayTitle) ? (
							displayTitle
						) : (
							<span className="panel-title">{displayTitle}</span>
						)}

						{showCollapseIcon && (
							<>
								<span className="collapse-icon-closed">
									<ClayIcon
										spritemap={spritemap}
										symbol="angle-right"
									/>
								</span>
								<span className="collapse-icon-open">
									<ClayIcon
										spritemap={spritemap}
										symbol="angle-down"
									/>
								</span>
							</>
						)}
					</button>

					<div
						className={classNames(
							'panel-collapse',
							collapseClassNames,
							{
								collapse: !transitioning,
								collapsing: transitioning,
								show: expanded,
							}
						)}
						onTransitionEnd={handleTransitionEnd}
						ref={panelRef}
						role="tabpanel"
					>
						{children}
					</div>
				</>
			)}
		</div>
	);
};

ClayPanel.Body = ClayPanelBody;
ClayPanel.Group = ClayPanelGroup;
ClayPanel.Footer = ClayPanelFooter;
ClayPanel.Header = ClayPanelHeader;
ClayPanel.Title = ClayPanelTitle;

export default ClayPanel;
