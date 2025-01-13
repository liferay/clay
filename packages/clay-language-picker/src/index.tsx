/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {Option, Picker} from '@clayui/core';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import {InternalDispatch, sub} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

type Item = {
	href?: string;
	id: string;
	label: string;
	symbol: string;
};

type Props = {
	/**
	 * Flag to indicate if the Picker is active or not (controlled).
	 */
	active?: boolean;

	/**
	 * Class names for the trigger.
	 */

	classNamesTrigger?: string;

	/**
	 * The id of the component.
	 */
	id?: string;

	/**
	 * Labels for the component
	 */
	labels?: {
		default: string;
		trigger: string;
		translated: string;
		untranslated: string;
	};

	/**
	 * List of locales to allow localization for
	 */
	locales: Array<Item>;

	/**
	 * Callback for when the active state changes (controlled).
	 */

	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Callback that gets called when a selected locale gets changed
	 */
	onSelectedLocaleChange: (val: React.Key) => void;

	/**
	 * Exposes the currently selected locale
	 */
	selectedLocale: Item;

	/**
	 * Flag to show the picker in small size.
	 */
	small?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;
};

const Trigger = React.forwardRef<HTMLButtonElement>(
	(
		{
			ariaLabelTrigger,
			classNamesTrigger,
			selectedLocale,
			small,
			spritemap,
			...otherProps
		}: Record<string, any>,
		ref
	) => {
		return (
			<ClayButton
				{...otherProps}
				aria-label={ariaLabelTrigger}
				className={classNames(classNamesTrigger, 'form-control-select')}
				displayType="secondary"
				ref={ref}
				size={small ? 'sm' : undefined}
			>
				<span className="inline-item-before">
					<ClayIcon
						spritemap={spritemap}
						symbol={selectedLocale.symbol}
					/>
				</span>
			</ClayButton>
		);
	}
);

Trigger.displayName = 'Trigger';

const ClayLanguagePicker = ({
	labels = {
		default: 'Default',
		translated: 'Translated',
		trigger: 'Select a language, current language: {0}.',
		untranslated: 'Untranslated',
	},
	active,
	classNamesTrigger,
	id,
	locales,
	onActiveChange,
	onSelectedLocaleChange,
	selectedLocale,
	small,
	spritemap,
}: Props) => {
	return (
		<Picker
			active={active}
			ariaLabelTrigger={sub(labels.trigger, [selectedLocale.label])}
			as={Trigger}
			classNamesTrigger={classNamesTrigger}
			id={id}
			items={locales}
			onActiveChange={onActiveChange}
			onSelectionChange={(id: React.Key) => {
				onSelectedLocaleChange(id);
			}}
			selectedKey={selectedLocale.id}
			selectedLocale={selectedLocale}
			small={small}
			spritemap={spritemap}
		>
			{(locale) => {
				return (
					<Option key={locale.id} textValue={locale.label}>
						<ClayLayout.ContentRow containerElement="span">
							<ClayLayout.ContentCol
								containerElement="span"
								expand
							>
								<ClayLayout.ContentSection>
									<ClayIcon
										className="inline-item inline-item-before"
										spritemap={spritemap}
										symbol={locale.symbol}
									/>

									{locale.label}
								</ClayLayout.ContentSection>
							</ClayLayout.ContentCol>
						</ClayLayout.ContentRow>
					</Option>
				);
			}}
		</Picker>
	);
};

ClayLanguagePicker.displayName = 'ClayLanguagePicker';

export default ClayLanguagePicker;
