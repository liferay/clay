/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm, {ClayInput} from '.';
import {ClayButtonWithIcon} from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import React from 'react';

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	language,
	...others
}) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={Align.BottomLeft}
			onActiveChange={newVal => setActive(newVal)}
			trigger={
				<ClayButtonWithIcon
					aria-expanded="false"
					aria-haspopup="true"
					displayType="unstyled"
					onClick={() => setActive(!active)}
					spritemap={spritemap}
					symbol={language.symbol}
					title="Open Language Dropdown"
				/>
			}
		>
			{children}
		</ClayDropDown>
	);
};
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	defaultLanguage: {label: string; symbol: string; value: string};
	languages: any;
	label?: string;
	onInputValueChange?: any;
	onLanguageChange?: any;
	placeholder?: string;
	selectedLanguage: {label: string; symbol: string; value: string};
	textarea?: boolean;
	url?: boolean;
	value?: string;
}

const ClayLocalizedInput = React.forwardRef<HTMLInputElement, IProps>(
	({
		defaultLanguage,
		label = 'Check for translations',
		languages,
		onInputValueChange,
		onLanguageChange,
		placeholder = 'Text to translate...',
		selectedLanguage,
		url,
		value,
	}) => (
		<ClayForm.Group>
			<label htmlFor="localizedInput">{label}</label>

			<ClayInput.Group>
				{url && (
					<ClayInput.GroupItem prepend shrink>
						<ClayInput.GroupText>{'/'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
				)}

				<ClayInput.GroupItem>
					<ClayInput
						id="localizedInput"
						onChange={event =>
							onInputValueChange(event.target.value)
						}
						placeholder={placeholder}
						value={value}
					/>
				</ClayInput.GroupItem>

				<ClayInput.GroupItem shrink>
					<DropDownWithState
						hasRightSymbols
						language={selectedLanguage}
					>
						<ClayDropDown.ItemList>
							{languages.map(
								(language: {
									label: string;
									symbol: string;
									value: string;
								}) => (
									<ClayDropDown.Item
										key={language.label}
										onClick={() =>
											onLanguageChange(language)
										}
									>
										<ClayIcon
											className="inline-item inline-item-before"
											spritemap={spritemap}
											symbol={language.symbol}
										/>

										{language.label}

										<ClayLabel
											className="dropdown-item-indicator-end"
											displayType={
												language.label ===
												defaultLanguage.label
													? 'info'
													: language.value
													? 'success'
													: 'warning'
											}
										>
											{language.label ===
											defaultLanguage.label
												? 'Default Value'
												: language.value
												? 'Translated'
												: 'Untranslated'}
										</ClayLabel>
									</ClayDropDown.Item>
								)
							)}
						</ClayDropDown.ItemList>
					</DropDownWithState>
				</ClayInput.GroupItem>
			</ClayInput.Group>

			{defaultLanguage.value && <span>{defaultLanguage.value}</span>}
		</ClayForm.Group>
	)
);

export default ClayLocalizedInput;
