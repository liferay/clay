/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

export interface IToggleProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	containerProps?: React.HTMLAttributes<HTMLSpanElement>;
	dataLabel?: {on: string; off: string};
	disabled?: boolean;
	helpText?: {bottom?: string; left?: string; right?: string; top?: string};
	id?: string;
	label?: React.ReactText;
	onToggle?: (val: boolean) => void;
	spritemap?: string;
	symbol?: {on: string; off: string; inverse?: boolean};
	toggled?: boolean;
	type?: 'checkbox' | 'radio';
	value?: string;
}

const ClayToggle = React.forwardRef<HTMLLabelElement, IToggleProps>(
	(
		{
			checked,
			containerProps = {},
			dataLabel,
			disabled,
			helpText = {bottom: '', left: '', right: '', top: ''},
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
		const dataLabelAttrs = dataLabel
			? {
					'data-label-off': dataLabel.off,
					'data-label-on': dataLabel.on,
			  }
			: {};

		const HelpTextNode = ({
			left,
			right,
			text,
		}: {
			left?: boolean;
			right?: boolean;
			text?: string;
		}) =>
			text ? (
				<span
					className={classNames('toggle-switch-text', {
						'toggle-switch-text-left': left,
						'toggle-switch-text-right': right,
					})}
				>
					{text}
				</span>
			) : null;

		if (type === 'radio') {
			toggled = checked;
		}

		return (
			<span
				className={classNames(
					'toggle-switch',
					containerProps.className,
					{disabled}
				)}
				ref={ref}
				{...containerProps}
			>
				{label && (
					<label className="toggle-switch-label" htmlFor={id}>
						{label}
					</label>
				)}

				<HelpTextNode text={helpText.top} />

				<HelpTextNode left text={helpText.left} />

				<span className="toggle-switch-check-bar">
					<input
						{...otherProps}
						checked={toggled}
						className="toggle-switch-check"
						disabled={disabled}
						id={id}
						onChange={e => {
							if (onChange) {
								onChange(e);
							}

							if (onToggle) {
								onToggle(!toggled);
							}
						}}
						type={type}
						value={value}
					/>

					<span aria-hidden="true" className="toggle-switch-bar">
						<span
							className="toggle-switch-handle"
							{...dataLabelAttrs}
						>
							{symbol && (
								<>
									<span
										className={classNames(
											'toggle-switch-icon',
											{
												'button-icon': !symbol.inverse,
												'button-icon-on': !symbol.inverse,
												'toggle-switch-icon-on':
													symbol.inverse,
											}
										)}
									>
										<ClayIcon
											spritemap={spritemap}
											symbol={symbol.on}
										/>
									</span>

									<span
										className={classNames(
											'toggle-switch-icon',
											{
												'button-icon': !symbol.inverse,
												'button-icon-off': !symbol.inverse,
												'toggle-switch-icon-off':
													symbol.inverse,
											}
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

				<HelpTextNode right text={helpText.right} />

				<HelpTextNode text={helpText.bottom} />
			</span>
		);
	}
);

export default ClayToggle;
