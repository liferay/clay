/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {Option, Picker} from '@clayui/core';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
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

type Translations = {
	[key: string]: string;
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
	 * Flag to hide the text in the trigger.
	 */

	hideTriggerText?: boolean;

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

	/**
	 * Translations provided to the component to be used and modified by it
	 */
	translations?: Translations;
};

const Trigger = React.forwardRef<HTMLButtonElement>(
	(
		{
			ariaLabelTrigger,
			classNamesTrigger,
			hideTriggerText,
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
				className={classNames(
					classNamesTrigger,
					'form-control-select',
					{
						'hidden-label': hideTriggerText,
					}
				)}
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

				{!hideTriggerText ? (
					<span className="font-weight-normal mr-2">
						{selectedLocale.label}
					</span>
				) : null}
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
	hideTriggerText,
	id,
	locales,
	onActiveChange,
	onSelectedLocaleChange,
	selectedLocale,
	small,
	spritemap,
	translations = {},
}: Props) => {
	const defaultLanguage = locales[0];
	const hasTranslations = Object.keys(translations).length;

	return (
		<Picker
			active={active}
			ariaLabelTrigger={sub(labels.trigger, [selectedLocale.label])}
			as={Trigger}
			classNamesTrigger={classNamesTrigger}
			hideTriggerText={hideTriggerText}
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
							{hasTranslations ? (
								<ClayLayout.ContentCol containerElement="span">
									<ClayLayout.ContentSection>
										<ClayLabel
											displayType={
												locale.label ===
												defaultLanguage?.label
													? 'info'
													: translations[locale.label]
													? 'success'
													: 'warning'
											}
										>
											{locale.label ===
											defaultLanguage?.label
												? labels.default
												: translations[locale.label]
												? labels.translated
												: labels.untranslated}
										</ClayLabel>
									</ClayLayout.ContentSection>
								</ClayLayout.ContentCol>
							) : null}
						</ClayLayout.ContentRow>
					</Option>
				);
			}}
		</Picker>
	);
};

ClayLanguagePicker.displayName = 'ClayLanguagePicker';

export default ClayLanguagePicker;
