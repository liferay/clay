/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayInput} from '@clayui/form';
import {InternalDispatch, sub} from '@clayui/shared';
import React, {useRef} from 'react';
import tinycolor from 'tinycolor2';

import Splotch from './Splotch';
import {toHexColorString} from './util';

interface IProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {

	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: Partial<{
		selectColor: string;
		selectionIs: string;
	}>;

	/**
	 * Flag for adding ColorPicker in disabled state
	 */
	disabled?: boolean;

	/**
	 * The input attribute for name
	 */
	name?: string;

	/**
	 * Callback for when the hex input loses focus.
	 */
	onHexBlur: (event: React.FocusEvent<HTMLInputElement>) => void;

	/**
	 * Callback for when the hex input changes.
	 */
	onHexChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

	/**
	 * Callback for when the splotch component is clicked or pressed.
	 */
	onSplotchClick: () => void;

	/**
	 * Set the color value
	 */
	setValue: InternalDispatch<string>;

	/**
	 * Determines if the hex input should render
	 */
	showHex?: boolean;

	/**
	 * Flag to indicate if `input-group-sm` class should
	 * be applied to `ClayInput.Group`
	 */
	small?: boolean;

	/**
	 * The reference for the splotch component
	 */
	splotchRef?: React.RefObject<HTMLButtonElement>;

	/**
	 * The title of the Main Splotch component
	 */
	splotchTitle?: string;

	/**
	 * Title to describe the color picker form element
	 */
	title?: string;

	/**
	 * The reference for the input group
	 */
	triggerElementRef?: React.RefObject<HTMLDivElement>;

	/**
	 * Determines if the native color picker should be used
	 */
	useNative?: boolean;

	/**
	 * The input color value
	 */

	value: string;

	/**
	 * The reference for the hidden input of the color value
	 */
	valueInputRef?: React.RefObject<HTMLInputElement>;
}

export default function Field({
	ariaLabels,
	disabled,
	name,
	onHexBlur,
	onHexChange,
	onSplotchClick,
	setValue,
	showHex = true,
	small,
	splotchRef,
	splotchTitle,
	title,
	triggerElementRef: externalTriggerElementRef,
	useNative = false,
	value,
	valueInputRef,
	...otherProps
}: IProps) {
	const internalTriggerElementRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const isHex = tinycolor(value).getFormat() === 'hex';

	const triggerElementRef =
		externalTriggerElementRef || internalTriggerElementRef;

	return (
		<>
			{title && <label>{title}</label>}

			<ClayInput.Group
				className="clay-color"
				ref={triggerElementRef}
				small={small}
			>
				<ClayInput.GroupItem prepend={showHex} shrink>
					{name && (
						<input
							name={name}
							onChange={(event) =>
								useNative ? setValue(event.target.value) : null
							}
							ref={valueInputRef}
							style={{
								height: 0,
								position: 'absolute',
								visibility: 'hidden',
								width: 0,
							}}
							tabIndex={-1}
							type={useNative ? 'color' : 'text'}
							value={
								value ? toHexColorString({isHex, value}) : ''
							}
						/>
					)}

					<ClayInput.GroupText>
						<Splotch
							aria-label={ariaLabels?.selectColor}
							className="dropdown-toggle"
							disabled={disabled}
							onClick={onSplotchClick}
							ref={splotchRef}
							title={splotchTitle}
							value={value}
						/>
					</ClayInput.GroupText>
				</ClayInput.GroupItem>

				{showHex && (
					<ClayInput.GroupItem
						append
						className="input-group-item-focusable"
					>
						<ClayInput
							{...otherProps}
							aria-label={sub(ariaLabels?.selectionIs || '', [
								value,
							])}
							disabled={disabled}
							insetBefore
							onBlur={onHexBlur}
							onChange={onHexChange}
							ref={inputRef}
							type="text"
							value={value}
						/>

						<ClayInput.GroupInsetItem before tag="label">
							{toHexColorString({isHex})}
						</ClayInput.GroupInsetItem>
					</ClayInput.GroupItem>
				)}
			</ClayInput.Group>
		</>
	);
}
