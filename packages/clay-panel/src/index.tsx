/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import ClayPanelBody from './Body';
import ClayPanelFooter from './Footer';
import ClayPanelGroup from './Group';
import ClayPanelHeader from './Header';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	collapsable?: boolean;
	collapseClassNames?: string;
	defaultExpanded?: boolean;
	displayTitle?: React.ReactText;
	displayType?: 'unstyled' | 'secondary';
	showCollapseIcon?: boolean;
	spritemap?: string;
}

const ClayPanel: React.FunctionComponent<Props> & {
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
}) => {
	const [expanded, setExpaned] = React.useState<boolean>(defaultExpanded);

	return (
		<div
			{...otherProps}
			className={classNames('panel', className, {
				[`panel-${displayType}`]: displayType,
			})}
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
								collapsed: !expanded,
							}
						)}
						onClick={() => setExpaned(val => !val)}
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
						className={classNames('panel-collapse', {
							collapse: !expanded,
							show: expanded,
						})}
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
