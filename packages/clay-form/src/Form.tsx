/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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

const BlockquoteText = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('blockquote form-text', className)}
		ref={ref}
	>
		{children}
	</div>
));

BlockquoteText.displayName = 'ClayFormBlockquoteText';

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

const HelpText = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames('form-help-text', className)}
		ref={ref}
	>
		{children}
	</span>
));

HelpText.displayName = 'ClayFormHelpText';

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
	BlockquoteText,
	FeedbackGroup,
	FeedbackIndicator,
	FeedbackItem,
	Group,
	HelpText,
	Text,
});
