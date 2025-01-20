/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import {InternalDispatch, sub} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import {Option, Picker} from '../picker';

type DisplayType = 'info' | 'secondary' | 'success' | 'warning';

type Item = {
	displayName?: string;
	href?: string;
	id: string;
	label: string;
	symbol: string;
};

type Labels = {
	default: string;
	option: string;
	trigger: string;
	translated: string;
	translating: string;
	untranslated: string;
};

type Translation = {total: number; translated: number};

type Translations = {
	[key: string]: Translation;
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
	labels?: Labels;

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

const TranslationLabel = ({
	defaultLanguage,
	labels,
	locale,
	translation,
}: {
	defaultLanguage: Item;
	labels: Labels;
	locale: Item;
	translation: Translation;
}) => {
	let displayType: DisplayType = 'warning';
	let label = labels.untranslated;

	if (locale.label === defaultLanguage?.label) {
		displayType = 'info';
		label = labels.default;
	} else if (translation) {
		const {total, translated} = translation;

		if (total && total === translated) {
			displayType = 'success';
			label = labels.translated;
		} else {
			displayType = 'secondary';
			label = sub(labels.translating, [translated, total]);
		}
	}

	return (
		<>
			<span className="sr-only">
				{sub(labels.option, [
					locale.displayName || locale.label,
					label,
				])}
			</span>

			<ClayLabel
				aria-hidden="true"
				className="c-ml-3"
				displayType={displayType}
			>
				{label}
			</ClayLabel>
		</>
	);
};

TranslationLabel.displayName = 'Label';

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
			<button
				{...otherProps}
				aria-label={ariaLabelTrigger}
				className={classNames(
					classNamesTrigger,
					'form-control form-control-select form-control-select-secondary',
					{
						'form-control-sm': small,
						'hidden-label': hideTriggerText,
					}
				)}
				ref={ref}
			>
				<span className="inline-item-before">
					<ClayIcon
						spritemap={spritemap}
						symbol={selectedLocale.symbol}
					/>
				</span>

				{!hideTriggerText ? selectedLocale.label : null}
			</button>
		);
	}
);

Trigger.displayName = 'Trigger';

const ClayLanguagePicker = ({
	labels = {
		default: 'Default',
		option: '{0} language: {1}.',
		translated: 'Translated',
		translating: 'Translating {0}/{1}',
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
			ariaLabelTrigger={sub(labels.trigger, [
				selectedLocale.displayName || selectedLocale.label,
			])}
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

									<span aria-hidden="true">
										{locale.label}
									</span>
								</ClayLayout.ContentSection>
							</ClayLayout.ContentCol>
							{hasTranslations ? (
								<ClayLayout.ContentCol containerElement="span">
									<ClayLayout.ContentSection>
										<TranslationLabel
											defaultLanguage={defaultLanguage!}
											labels={labels}
											locale={locale}
											translation={
												translations[locale.label]!
											}
										/>
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
