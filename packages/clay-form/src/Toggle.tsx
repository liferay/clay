/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

export interface IToggleProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	containerProps?: React.HTMLAttributes<HTMLSpanElement>;
	disabled?: boolean;
	id?: string;
	label?: React.ReactText;
	onToggle?: (val: boolean) => void;
	spritemap?: string;
	symbol?: {on: string; off: string};
	toggled?: boolean;
	type?: 'checkbox' | 'radio';
	value?: string;
}

const ClayToggle = React.forwardRef<HTMLLabelElement, IToggleProps>(
	(
		{
			checked,
			containerProps = {},
			disabled,
			id,
			label,
			onChange,
			onToggle,
			spritemap,
			symbol,
			toggled,
			type = 'checkbox',
			value,
			...otherProps
		}: IToggleProps,
		ref
	) => {
		if (type === 'radio') {
			toggled = checked;
		}

		return (
			<label
				{...containerProps}
				className={classNames(
					'toggle-switch',
					'simple-toggle-switch',
					containerProps.className,
					{disabled}
				)}
				ref={ref}
			>
				<span className="toggle-switch-check-bar">
					<input
						{...otherProps}
						checked={toggled}
						className="toggle-switch-check"
						disabled={disabled}
						id={id}
						onChange={(event) => {
							if (onChange) {
								onChange(event);
							}

							if (onToggle) {
								onToggle(!toggled);
							}
						}}
						type={type}
						value={value}
					/>

					<span aria-hidden="true" className="toggle-switch-bar">
						<span className="toggle-switch-handle">
							{symbol && (
								<>
									<span
										className={classNames(
											'button-icon',
											'button-icon-on',
											'toggle-switch-icon'
										)}
									>
										<ClayIcon
											spritemap={spritemap}
											symbol={symbol.on}
										/>
									</span>

									<span
										className={classNames(
											'button-icon',
											'button-icon-off',
											'toggle-switch-icon'
										)}
									>
										<ClayIcon
											spritemap={spritemap}
											symbol={symbol.off}
										/>
									</span>
								</>
							)}
						</span>
					</span>
				</span>

				{label && <span className="toggle-switch-label">{label}</span>}
			</label>
		);
	}
);

ClayToggle.displayName = 'ClayToggle';

export default ClayToggle;
