/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useEffect, useRef} from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Flag to indicate if input is checked or not.
	 */
	checked: boolean;

	/**
	 * Props to add to the outer most container.
	 */
	containerProps?: React.HTMLAttributes<HTMLDivElement>;

	/**
	 * Flag to indicate that checkbox is in an indeterminate state.
	 */
	indeterminate?: boolean;

	/**
	 * Flag to display element `inline`.
	 */
	inline?: boolean;

	/**
	 * Text describes what the checkbox is for.
	 */
	label?: React.ReactText;

	/**
	 * Callback for when checkbox value is changed
	 */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClayCheckbox = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			checked,
			children,
			className,
			containerProps = {},
			indeterminate = false,
			inline,
			label,
			...otherProps
		}: IProps,
		ref
	) => {
		const inputRef = useRef<HTMLInputElement | null>(null);

		useEffect(() => {
			if (inputRef.current) {
				inputRef.current.indeterminate = indeterminate;
			}
		}, [indeterminate]);

		return (
			<div
				{...containerProps}
				className={classNames(
					'custom-control custom-checkbox',
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
						className={classNames(
							'custom-control-input',
							className
						)}
						ref={r => {
							inputRef.current = r;
							if (typeof ref === 'function') {
								ref(r);
							}
						}}
						type="checkbox"
						value={checked ? 'true' : 'false'}
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

export default ClayCheckbox;
