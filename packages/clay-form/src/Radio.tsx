/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {

	/**
	 * Props for the outer most container element.
	 */
	containerProps?: React.HTMLAttributes<HTMLDivElement>;

	/**
	 * Flag to indicate if radio elements should display inline.
	 */
	inline?: boolean;

	/**
	 * Text to describe for radio element.
	 */
	label?: React.ReactText;

	/**
	 * Value provided if element is selected.
	 */
	value: React.ReactText;
}

const Radio = React.forwardRef<HTMLInputElement, IRadioProps>(
	(
		{
			checked,
			children,
			className,
			containerProps = {className: ''},
			inline,
			label,
			...otherProps
		}: IRadioProps,
		ref
	) => {
		return (
			<div
				{...containerProps}
				className={classNames(
					'custom-control custom-radio',
					containerProps.className,
					{
						'custom-control-inline': inline,
						'custom-control-outside': label,
					}
				)}
			>
				<label>
					<input
						{...otherProps}
						checked={checked}
						className={classNames(
							'custom-control-input',
							className
						)}
						ref={ref}
						role="radio"
						type="radio"
					/>

					<span className="custom-control-label">
						{label && (
							<span className="custom-control-label-text">
								{label}
							</span>
						)}
					</span>

					{children}
				</label>
			</div>
		);
	}
);

Radio.displayName = 'ClayRadio';

export default Radio;
