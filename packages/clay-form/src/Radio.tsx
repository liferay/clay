/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IRadioProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
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

const ClayRadio: React.FunctionComponent<IRadioProps> = ({
	checked,
	children,
	className,
	containerProps = {className: ''},
	inline,
	label,
	...otherProps
}: IRadioProps) => {
	return (
		<div
			{...containerProps}
			className={classNames(
				'custom-control custom-radio',
				containerProps.className,
				{
					'custom-control-inline': inline,
				}
			)}
		>
			<label>
				<input
					{...otherProps}
					checked={checked}
					className={classNames('custom-control-input', className)}
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
};

export default ClayRadio;
