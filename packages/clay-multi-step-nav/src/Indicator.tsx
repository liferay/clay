/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React, {useContext} from 'react';

import {ItemContext} from './Item';

type Props = {

	/**
	 * Component to render.
	 */
	as?: React.ElementType;

	/**
	 * Flag to indicate if step should show its been completed
	 * @deprecated since v3.91.0 - this is no longer necessary.
	 */
	complete?: boolean;

	/**
	 * Flag to indicate if step should be disabled
	 */
	disabled?: boolean;

	/**
	 * HTML properties that are applied to the step element.
	 */
	elementProps?: React.HTMLAttributes<HTMLElement>;

	innerRef?: React.Ref<HTMLElement>;

	/**
	 * Value to display above step icon
	 */
	label?: React.ReactText;

	/**
	 * Callback for when the icon is clicked
	 */
	onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;

	/**
	 * Path to clay-css spritemap
	 */
	spritemap?: string;

	/**
	 * Value to display below step icon
	 */
	subTitle?: React.ReactText;
};

const MultiStepNavIndicator = React.forwardRef<HTMLDivElement, Props>(
	(
		{
			as,
			complete,
			disabled,
			elementProps,
			innerRef,
			label,
			onClick,
			spritemap,
			subTitle,
		}: Props,
		ref
	) => {
		const {state} = useContext(ItemContext);

		const isComplete = complete ?? state === 'complete';
		const Tag = as || (onClick ? 'button' : 'div');

		return (
			<div
				className={classNames('multi-step-indicator', {
					disabled,
				})}
				ref={ref}
			>
				{subTitle && (
					<div className="multi-step-indicator-label">{subTitle}</div>
				)}

				<Tag
					{...elementProps}
					className={classNames(
						'multi-step-icon',
						elementProps?.className
					)}
					onClick={onClick || elementProps?.onClick}
					ref={innerRef}
					{...(Tag === 'button' && {
						disabled,
						type: 'button',
					})}
				>
					{isComplete && (
						<ClayIcon spritemap={spritemap} symbol="check" />
					)}

					{!isComplete && state !== 'error' && label}
				</Tag>
			</div>
		);
	}
);

MultiStepNavIndicator.displayName = 'ClayMultiStepNavIndicator';

export default MultiStepNavIndicator;
