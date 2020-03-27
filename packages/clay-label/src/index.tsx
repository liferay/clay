/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

const ClayLabelItemBefore: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children}) => (
	<>
		<div className="label-item label-item-before">
			{React.Children.map(children, (child, i) =>
				React.cloneElement(
					<span className="label-item label-item-before">
						{child}
					</span>,
					{
						key: i,
					}
				)
			)}
		</div>
	</>
);

type DisplayType =
	| 'secondary'
	| 'info'
	| 'warning'
	| 'danger'
	| 'success'
	| 'unstyled';

interface IProps
	extends React.BaseHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
	/**
	 * HTML properties that are applied to the 'x' button.
	 */
	closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> & {
		ref?: (instance: HTMLButtonElement | null) => void;
	};

	/**
	 * Any content that you would like to have render inside the label before the children content
	 */
	contentBefore?: React.ReactFragment | typeof ClayLabelItemBefore;

	/**
	 * Determines the style of the label.
	 */
	displayType?: DisplayType;

	/**
	 * Flag to indicate if the label should be of the `large` variant.
	 */
	large?: boolean;

	/**
	 * Attributes to apply to the inner label element
	 */
	innerElementProps?: React.HTMLAttributes<
		HTMLAnchorElement | HTMLSpanElement
	>;

	/**
	 * Path to the location of the spritemap resource used for Icon.
	 */
	spritemap?: string;
}

const ClayLabel = React.forwardRef<HTMLAnchorElement | HTMLSpanElement, IProps>(
	(
		{
			children,
			className,
			closeButtonProps,
			contentBefore,
			displayType = 'secondary',
			href,
			innerElementProps = {},
			large = false,
			spritemap,
			...otherProps
		}: IProps,
		ref
	) => {
		const TagName = href ? ClayLink : 'span';

		return (
			<span
				{...otherProps}
				className={classNames('label', className, {
					'label-dismissible': closeButtonProps,
					'label-lg': large,
					[`label-${displayType}`]: displayType,
				})}
				ref={ref}
			>
				{contentBefore && (
					<ClayLabelItemBefore>{contentBefore}</ClayLabelItemBefore>
				)}

				<TagName
					{...innerElementProps}
					className={classNames(
						'label-item label-item-expand',
						innerElementProps.className
					)}
					href={href}
				>
					{children}
				</TagName>

				{closeButtonProps && (
					<span className="label-item label-item-after">
						<button
							{...closeButtonProps}
							className="close"
							type="button"
						>
							<Icon spritemap={spritemap} symbol="times" />
						</button>
					</span>
				)}
			</span>
		);
	}
);

export default ClayLabel;
