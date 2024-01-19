/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {useProvider} from '@clayui/provider';
import {
	InternalDispatch,
	setElementFullHeight,
	useControlledState,
	useId,
} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import {CSSTransition} from 'react-transition-group';

import ClayPanelBody from './Body';
import ClayPanelFooter from './Footer';
import ClayPanelGroup from './Group';
import ClayPanelHeader from './Header';
import ClayPanelTitle from './Title';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate that Panel is collapsable.
	 */
	collapsable?: boolean;

	/**
	 * Adds classes to the collapse element. Only when `collapsable` is true.
	 */
	collapseClassNames?: string;

	/**
	 * Adds classes to the collapse header element. Only when `collapsable` is true.
	 */
	collapseHeaderClassNames?: string;

	/**
	 * Flag to indicate the initial value of expanded (uncontrolled).
	 */
	defaultExpanded?: boolean;

	/**
	 * Content to display in Panel Title.
	 */
	displayTitle?: React.ReactNode;

	/**
	 * Flag to indicate the visual variation of the Panel.
	 */
	displayType?: 'block' | 'default' | 'secondary' | 'unstyled';

	/**
	 * Determines if menu is expanded or not (controlled).
	 */
	expanded?: boolean;

	/**
	 * Callback for when dropdown changes its active state (controlled).
	 */
	onExpandedChange?: InternalDispatch<boolean>;

	/**
	 * Flag to toggle collapse icon visibility when `collapsable` is true.
	 */
	showCollapseIcon?: boolean;

	/**
	 * Flag to indicate the visual variation of the Panel.
	 */
	size?: 'lg' | 'sm';

	/**
	 * Path to spritemap for clay icons
	 */
	spritemap?: string;
}

function ClayPanel(props: IProps): JSX.Element & {
	Body: typeof ClayPanelBody;
	Footer: typeof ClayPanelFooter;
	Group: typeof ClayPanelGroup;
	Header: typeof ClayPanelHeader;
	Title: typeof ClayPanelTitle;
};

function ClayPanel({
	children,
	className,
	collapsable,
	collapseClassNames,
	collapseHeaderClassNames,
	defaultExpanded = false,
	displayTitle,
	displayType,
	expanded,
	onExpandedChange,
	showCollapseIcon = true,
	size,
	spritemap,
	...otherProps
}: IProps) {
	const [internalExpanded, setInternalExpanded] = useControlledState({
		defaultName: 'defaultExpanded',
		defaultValue: defaultExpanded,
		handleName: 'onExpandedChange',
		name: 'expanded',
		onChange: onExpandedChange,
		value: expanded,
	});

	const {prefersReducedMotion} = useProvider();

	const ariaControlsId = useId();

	return (
		<div
			{...otherProps}
			className={classNames('panel', className, {
				[`panel-${displayType}`]: displayType,
				[`panel-${size}`]: size,
			})}
		>
			{!collapsable && (
				<>
					{displayTitle &&
						(React.isValidElement(displayTitle) ? (
							displayTitle
						) : (
							<ClayPanelHeader>
								<span className="panel-title">
									{displayTitle}
								</span>
							</ClayPanelHeader>
						))}

					{children}
				</>
			)}

			{collapsable && (
				<>
					<ClayButton
						aria-controls={ariaControlsId}
						aria-expanded={internalExpanded}
						className={classNames(
							'panel-header panel-header-link',
							collapseHeaderClassNames,
							{
								'collapse-icon': showCollapseIcon,
								'collapse-icon-middle': showCollapseIcon,
								collapsed: !internalExpanded,
								show: internalExpanded,
							}
						)}
						displayType="unstyled"
						onClick={() => setInternalExpanded(!internalExpanded)}
					>
						{displayTitle &&
							(React.isValidElement(displayTitle) ? (
								displayTitle
							) : (
								<span className="panel-title">
									{displayTitle}
								</span>
							))}

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
					</ClayButton>

					<CSSTransition
						aria-labelledby={ariaControlsId}
						className={classNames(
							'panel-collapse',
							collapseClassNames,
							{collapse: !internalExpanded}
						)}
						classNames={{
							enter: 'collapsing',
							enterActive: `show`,
							enterDone: 'show',
							exit: `show`,
							exitActive: 'collapsing',
						}}
						id={ariaControlsId}
						in={internalExpanded}
						onEnter={(element: HTMLElement) =>
							setElementFullHeight(element)
						}
						onEntered={(element: HTMLElement) => {
							element.style.height = '';
						}}
						onExit={(element) => setElementFullHeight(element)}
						onExiting={(element) => {
							element.style.height = '';
						}}
						role="region"
						timeout={!prefersReducedMotion ? 250 : 0}
					>
						<div>{children}</div>
					</CSSTransition>
				</>
			)}
		</div>
	);
}

ClayPanel.Body = ClayPanelBody;
ClayPanel.Group = ClayPanelGroup;
ClayPanel.Footer = ClayPanelFooter;
ClayPanel.Header = ClayPanelHeader;
ClayPanel.Title = ClayPanelTitle;

export default ClayPanel;
