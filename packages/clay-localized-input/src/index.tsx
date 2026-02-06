/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {LanguagePicker} from '@clayui/core';
import ClayForm, {ClayInput} from '@clayui/form';
import React, {useMemo} from 'react';

interface IItem {
	id?: string;
	label: string;
	name?: string;
	symbol: string;
}

interface ITranslations {
	[key: string]: string;
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {

	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: {
		default: string;
		openLocalizations: string;
		translated: string;
		untranslated: string;
	};

	/**
	 * Add informational text at the top of Localized Input.
	 */
	helpText?: React.ReactText;

	/**
	 * Label of the input
	 */
	label?: React.ReactText;

	/**
	 * List of locales to allow localization for
	 */
	locales: Array<IItem>;

	/**
	 * Callback that gets called when a selected locale gets changed
	 */
	onSelectedLocaleChange: (val: IItem) => void;

	/**
	 * Callback that gets called when a translation of the selected locale gets changed
	 */
	onTranslationsChange: (val: ITranslations) => void;

	/**
	 * Content to be prepended in case you want to localize a URL.
	 */
	prependContent?: React.ReactText;

	/**
	 * Allows specifying custom formatter, for example for formatting URLs, to be output after translating
	 */
	resultFormatter?: (val: string) => React.ReactNode;

	/**
	 * Exposes the currently selected locale
	 */
	selectedLocale: IItem;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Translations provided to the component to be used and modified by it
	 */
	translations: ITranslations;
}

const LocalizedInput = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			ariaLabels = {
				default: 'Default',
				openLocalizations: 'Open Localizations',
				translated: 'Translated',
				untranslated: 'Untranslated',
			},
			helpText,
			id,
			label = 'Check for translations',
			locales,
			onSelectedLocaleChange,
			onTranslationsChange,
			placeholder = 'Text to translate...',
			prependContent,
			resultFormatter = (val) => val,
			selectedLocale,
			spritemap,
			translations,
			...otherProps
		}: IProps,
		ref
	) => {
		const defaultLanguage = locales[0]!;

		const languagePickerLocales = useMemo(() => {
			return locales.map((locale) => ({
				id: locale.label,
				...locale,
			}));
		}, []);

		const languagePickerTranslations = useMemo(() => {
			const languagePickerTranslations: any = {};

			locales.forEach((locale) => {
				languagePickerTranslations[locale.label] = {
					total: 1,
					translated: translations[locale.label] ? 1 : 0,
				};
			});

			return languagePickerTranslations;
		}, [locales, translations]);

		return (
			<>
				{label && <label htmlFor={id}>{label}</label>}

				{helpText && <ClayForm.Text>{helpText}</ClayForm.Text>}

				<ClayInput.Group>
					{prependContent && (
						<ClayInput.GroupItem prepend shrink>
							<ClayInput.GroupText>
								{prependContent}
							</ClayInput.GroupText>
						</ClayInput.GroupItem>
					)}

					<ClayInput.GroupItem append={prependContent ? true : false}>
						<ClayInput
							{...otherProps}
							id={id}
							onChange={(event) => {
								onTranslationsChange({
									...translations,
									[selectedLocale.label]: event.target.value,
								});
							}}
							placeholder={placeholder}
							ref={ref}
							type="text"
							value={translations[selectedLocale.label] || ''}
						/>
					</ClayInput.GroupItem>

					<ClayInput.GroupItem shrink>
						<LanguagePicker
							defaultLocaleId={defaultLanguage.id}
							hideTriggerText
							locales={languagePickerLocales}
							messages={{
								default: ariaLabels.default,
								option: '{0} language: {1}.',
								translated: ariaLabels.translated,
								translating: 'Translating {0}/{1}',
								trigger: ariaLabels.openLocalizations,
								untranslated: ariaLabels.untranslated,
							}}
							onSelectedLocaleChange={(localeId: any) => {
								onSelectedLocaleChange(
									languagePickerLocales.find(
										({id}) => id === localeId
									)!
								);
							}}
							spritemap={spritemap}
							translations={languagePickerTranslations}
						/>
					</ClayInput.GroupItem>
				</ClayInput.Group>

				{selectedLocale.symbol !== defaultLanguage.symbol && (
					<ClayForm.Text className="blockquote">
						{resultFormatter(translations[defaultLanguage.label]!)}
					</ClayForm.Text>
				)}
			</>
		);
	}
);

LocalizedInput.displayName = 'ClayLocalizedInput';

export default LocalizedInput;
