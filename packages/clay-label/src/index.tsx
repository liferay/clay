/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

const ClayLabelItemAfter = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({children, className, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames(className, 'label-item label-item-after')}
		ref={ref}
	>
		{children}
	</span>
));

ClayLabelItemAfter.displayName = 'ClayLabelItemAfter';

const ClayLabelItemBefore = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({children, className, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames(className, 'label-item label-item-before')}
		ref={ref}
	>
		{children}
	</span>
));

ClayLabelItemBefore.displayName = 'ClayLabelItemBefore';

const ClayLabelItemExpand = React.forwardRef<
	HTMLAnchorElement | HTMLSpanElement,
	React.BaseHTMLAttributes<HTMLAnchorElement | HTMLSpanElement>
>(({children, className, href, ...otherProps}, ref) => {
	const TagName = href ? ClayLink : 'span';

	return (
		<TagName
			{...otherProps}
			className={classNames(className, 'label-item label-item-expand')}
			href={href}
			ref={ref as React.ComponentProps<typeof ClayLink>['ref']}
		>
			{children}
		</TagName>
	);
});

ClayLabelItemExpand.displayName = 'ClayLabelItemExpand';

type DisplayType =
	| 'secondary'
	| 'info'
	| 'warning'
	| 'danger'
	| 'success'
	| 'unstyled';

interface IBaseProps extends React.BaseHTMLAttributes<HTMLSpanElement> {
	/**
	 * Flag to indicate if `label-dismissible` class should be applied.
	 */
	dismissible?: boolean;

	/**
	 * Determines the style of the label.
	 */
	displayType?: DisplayType;

	/**
	 * Flag to indicate if the label should be of the `large` variant.
	 */
	large?: boolean;
}

const ClayLabel = React.forwardRef<HTMLSpanElement, IBaseProps>(
	(
		{
			children,
			className,
			dismissible,
			displayType = 'secondary',
			large = false,
			...otherProps
		},
		ref
	) => {
		return (
			<span
				{...otherProps}
				className={classNames('label', className, {
					'label-dismissible': dismissible,
					'label-lg': large,
					[`label-${displayType}`]: displayType,
				})}
				ref={ref}
			>
				{children}
			</span>
		);
	}
);

ClayLabel.displayName = 'ClayLabel';

interface IProps extends IBaseProps {
	/**
	 * HTML properties that are applied to the 'x' button.
	 */
	closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> & {
		ref?: (instance: HTMLButtonElement | null) => void;
	};

	/**
	 * Pros to add to the inner label item
	 */
	innerElementProps?: React.ComponentProps<typeof ClayLabelItemExpand>;

	/**
	 * Path to the location of the spritemap resource used for Icon.
	 */
	spritemap?: string;

	/**
	 * Flag to indicate if component should include the close button
	 */
	withClose?: boolean;
}

const ClayLabelHybrid = React.forwardRef<
	HTMLAnchorElement | HTMLSpanElement,
	IProps
>(
	(
		{
			children,
			closeButtonProps,
			href,
			innerElementProps = {},
			withClose = true,
			spritemap,
			...otherProps
		}: IProps,
		ref
	) => {
		return (
			<ClayLabel
				dismissible={withClose && !!closeButtonProps}
				{...otherProps}
				ref={ref}
			>
				{!withClose && children}

				{withClose && (
					<>
						<ClayLabelItemExpand {...innerElementProps} href={href}>
							{children}
						</ClayLabelItemExpand>

						{closeButtonProps && (
							<ClayLabelItemAfter>
								<button
									{...closeButtonProps}
									className={classNames(
										closeButtonProps.className,
										'close'
									)}
									type="button"
								>
									<ClayIcon
										spritemap={spritemap}
										symbol="times"
									/>
								</button>
							</ClayLabelItemAfter>
						)}
					</>
				)}
			</ClayLabel>
		);
	}
);

ClayLabelHybrid.displayName = 'ClayLabel';

export default Object.assign(ClayLabelHybrid, {
	ItemAfter: ClayLabelItemAfter,
	ItemBefore: ClayLabelItemBefore,
	ItemExpand: ClayLabelItemExpand,
});
