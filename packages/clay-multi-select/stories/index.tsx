/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayMultiSelect, {ClayMultiSelectWithAutocomplete} from '../src';
import React from 'react';
import {ClayIconSpriteContext} from '@clayui/icon';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const ClayMultiSelectWithState = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<div className="sheet">
			<ClayMultiSelect
				{...props}
				inputValue={value}
				items={items}
				onInputChange={setValue}
				onItemsChange={setItems}
				spritemap={spritemap}
			/>
		</div>
	);
};

const ClayMultiSelectWithValidation = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<div className="sheet">
			<ClayMultiSelect
				{...props}
				errorMessage="No duplicates allowed"
				inputValue={value}
				items={items}
				label="No duplicates"
				onInputChange={setValue}
				onItemsChange={setItems}
				spritemap={spritemap}
				validateOnBlur
				validationFn={(newVal: string) =>
					!items.find(item => item === newVal)
				}
			/>
		</div>
	);
};

const WithAutocomplete = () => {
	const [value, setValue] = React.useState('');
	const [selectedItems, setSelectedItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<div className="sheet">
			<ClayIconSpriteContext.Provider value={spritemap}>
				<ClayMultiSelectWithAutocomplete
					inputValue={value}
					items={selectedItems}
					onInputChange={setValue}
					onItemsChange={setSelectedItems}
					sourceItems={sourceItems}
				/>
			</ClayIconSpriteContext.Provider>
		</div>
	);
};

storiesOf('ClayMultiSelect', module)
	.add('default', () => (
		<ClayMultiSelectWithState helpText="You can use a comma to enter tags." />
	))
	.add('w/ validation', () => (
		<ClayMultiSelectWithValidation helpText="You can use a comma to enter tags. No duplicates allows." />
	))
	.add('w/ autocomplete', () => <WithAutocomplete />);
