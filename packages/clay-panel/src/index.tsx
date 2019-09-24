/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {useTransitionHeight} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef, useState} from 'react';

import ClayPanelBody from './Body';
import ClayPanelFooter from './Footer';
import ClayPanelGroup from './Group';
import ClayPanelHeader from './Header';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	collapsable?: boolean;
	collapseClassNames?: string;
	defaultExpanded?: boolean;
	displayTitle?: React.ReactText;
	displayType?: 'unstyled' | 'secondary';
	showCollapseIcon?: boolean;
	spritemap?: string;
}

const ClayPanel: React.FunctionComponent<IProps> & {
	Body: typeof ClayPanelBody;
	Footer: typeof ClayPanelFooter;
	Group: typeof ClayPanelGroup;
	Header: typeof ClayPanelHeader;
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
	const panelRef = useRef<HTMLDivElement>(null);
	const [expanded, setExpaned] = useState<boolean>(defaultExpanded);

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
					{displayTitle && (
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
						<span className="panel-title">{displayTitle}</span>

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

export default ClayPanel;
