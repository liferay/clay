/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

interface IGroup extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Indicates Form Group should be a small variant.
	 */
	small?: boolean;
}

const Group = React.forwardRef<HTMLDivElement, IGroup>(
	({children, className, small, ...otherProps}: IGroup, ref) => (
		<div
			{...otherProps}
			className={classNames(
				'form-group',
				{
					'form-group-sm': small,
				},
				className
			)}
			ref={ref}
		>
			{children}
		</div>
	)
);

Group.displayName = 'ClayFormGroup';

const Text = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-text', className)}
		ref={ref}
	>
		{children}
	</div>
));

Text.displayName = 'ClayFormText';

const FeedbackGroup = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-feedback-group', className)}
		ref={ref}
	>
		{children}
	</div>
));

FeedbackGroup.displayName = 'ClayFormFeedbackGroup';

const FeedbackItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-feedback-item', className)}
		ref={ref}
	>
		{children}
	</div>
));

FeedbackItem.displayName = 'ClayFormFeedbackItem';

interface IFeedbackIndicatorProps
	extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Name of icon symbol
	 */
	symbol: string;
}

const FeedbackIndicator = React.forwardRef<
	HTMLDivElement,
	IFeedbackIndicatorProps
>(
	(
		{className, spritemap, symbol, ...otherProps}: IFeedbackIndicatorProps,
		ref
	) => (
		<span
			{...otherProps}
			className={classNames(
				'form-feedback-indicator',
				'inline-item-before',
				className
			)}
			ref={ref}
		>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</span>
	)
);

FeedbackIndicator.displayName = 'ClayFormFeedbackIndicator';

const ClayForm = React.forwardRef<
	HTMLFormElement,
	React.HTMLAttributes<HTMLFormElement>
>(({children, ...otherProps}, ref) => (
	<form {...otherProps} ref={ref}>
		{children}
	</form>
));

ClayForm.displayName = 'ClayForm';

export default Object.assign(ClayForm, {
	FeedbackGroup,
	FeedbackIndicator,
	FeedbackItem,
	Group,
	Text,
});
