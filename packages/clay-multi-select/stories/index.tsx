/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayMultiSelect from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const ClayMultiSelectWithState = (props: any) => {
	const [items, setItems] = React.useState(['one']);

	return (
		<div className="sheet">
			<ClayMultiSelect
				{...props}
				items={items}
				onItemsChange={setItems}
				spritemap={spritemap}
			/>
		</div>
	);
};

const ClayMultiSelectWithValidation = (props: any) => {
	const [items, setItems] = React.useState(['one']);

	return (
		<div className="sheet">
			<ClayMultiSelect
				{...props}
				errorMessage="No duplicates allowed"
				items={items}
				label="No duplicates"
				onItemsChange={setItems}
				spritemap={spritemap}
				validateOnBlur
				validationFn={newVal => !items.find(item => item === newVal)}
			/>
		</div>
	);
};

storiesOf('ClayMultiSelect', module)
	.add('default', () => (
		<ClayMultiSelectWithState helpText="You can use a comma to enter tags." />
	))
	.add('w/ validation', () => (
		<ClayMultiSelectWithValidation helpText="You can use a comma to enter tags. No duplicates allows." />
	));
