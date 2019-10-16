/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import * as React from 'react';

const Group = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-group', className)}
		ref={ref}
	>
		{children}
	</div>
));

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
			className={classNames('form-feedback-indicator', className)}
			ref={ref}
		>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</span>
	)
);

const ClayForm: React.FunctionComponent<
	React.HTMLAttributes<HTMLFormElement>
> & {
	FeedbackGroup: typeof FeedbackGroup;
	FeedbackIndicator: typeof FeedbackIndicator;
	FeedbackItem: typeof FeedbackItem;
	Group: typeof Group;
	Text: typeof Text;
} = ({children, ...otherProps}) => <form {...otherProps}>{children}</form>;

ClayForm.FeedbackGroup = FeedbackGroup;
ClayForm.FeedbackIndicator = FeedbackIndicator;
ClayForm.FeedbackItem = FeedbackItem;
ClayForm.Group = Group;
ClayForm.Text = Text;

export default ClayForm;
