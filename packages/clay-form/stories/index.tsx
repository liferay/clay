/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayForm from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import '@clayui/css/lib/css/atlas.css';
import {boolean, text} from '@storybook/addon-knobs';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayMultiSelectWithState = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<div className="sheet">
			<ClayForm.MultiSelect
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

const ClayMultiSelectWithAutocomplete = () => {
	const [value, setValue] = React.useState('');
	const [selectedItems, setSelectedItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<div className="sheet">
			<ClayForm.MultiSelect
				inputValue={value}
				items={selectedItems}
				onInputChange={setValue}
				onItemsChange={setSelectedItems}
				sourceItems={sourceItems}
				spritemap={spritemap}
			/>
		</div>
	);
};

storiesOf('ClayForm', module)
	.add('default', () => <ClayForm />)
	.add('InputWithMultiSelect', () => (
		<ClayMultiSelectWithState
			errorMessage="you done goofed up"
			helpText="You can use a comma to enter tags."
			isValid={boolean('isValid', true)}
			label={text('Label', 'Multi-Select')}
		/>
	))
	.add('InputWithMultiSelect w/ sourceItems', () => (
		<ClayMultiSelectWithAutocomplete />
	));
