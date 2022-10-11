/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayAutocomplete from '@clayui/autocomplete';
import ClayForm from '@clayui/form';
import React from 'react';

const searchAutocompleteImports = `import ClayAutocomplete from '@clayui/autocomplete';`;

const searchAutocompleteCode = `const SearchAutocomplete = () => {
	return (
		<ClayForm.Group>
			<label
				htmlFor="clay-autocomplete-1"
				id="clay-autocomplete-label-1"
			>
				Numbers (one-five)
			</label>
			<ClayAutocomplete
				aria-labelledby="clay-autocomplete-label-1"
				id="clay-autocomplete-1"
				defaultItems={['one', 'two', 'three', 'four', 'five']}
				messages={{
					loading: 'Loading...',
					notFound: 'No results found',
				}}
				placeholder="Enter a number from One to Five"
			>
				{(item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				)}
			</ClayAutocomplete>
		</ClayForm.Group>
	);
};

render(<SearchAutocomplete />)`;

const SearchAutocomplete = () => {
	const scope = {ClayAutocomplete, ClayForm};

	return (
		<Editor
			code={searchAutocompleteCode}
			imports={searchAutocompleteImports}
			scope={scope}
		/>
	);
};

const menuTriggerAutocompleteImports = `import ClayAutocomplete from '@clayui/autocomplete';`;

const menuTriggerAutocompleteCode = `const SearchAutocomplete = () => {
	return (
		<ClayForm.Group>
			<label
				htmlFor="clay-autocomplete-2"
				id="clay-autocomplete-label-2"
			>
				Fruits
			</label>
			<ClayAutocomplete
				aria-labelledby="clay-autocomplete-label-2"
				id="clay-autocomplete-2"
				defaultItems={[
					'Apples',
					'Bananas',
					'Cantaloupe',
					'Mangos',
					'Oranges',
					'Strawberries',
				]}
				messages={{
					loading: 'Loading...',
					notFound: 'No results found',
				}}
				placeholder="Enter the name of a fruit"
				menuTrigger="focus"
			>
				{(item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				)}
			</ClayAutocomplete>
		</ClayForm.Group>
	);
};

render(<SearchAutocomplete />)`;

const MenuTriggerAutocomplete = () => {
	const scope = {ClayAutocomplete, ClayForm};

	return (
		<Editor
			code={menuTriggerAutocompleteCode}
			imports={menuTriggerAutocompleteImports}
			scope={scope}
		/>
	);
};

export {MenuTriggerAutocomplete, SearchAutocomplete};
