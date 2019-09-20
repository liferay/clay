/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayMultiSelect from '@clayui/multi-select';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

const multiSelectCode = `const Component = () => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<ClayMultiSelect
			inputName="myInput"
			inputValue={value}
			items={items}
			onInputChange={setValue}
			onItemsChange={setItems}
			spritemap={spritemap}
		/>
	);
}

render(<Component />)`;

const MultiSelectInput = () => {
	const scope = {
		ClayMultiSelect,
		spritemap,
		useState,
	};
	return <Editor code={multiSelectCode} scope={scope} />;
};

const multiSelectWithAutocompleteCode = `const Component = () => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<ClayMultiSelect
			inputName="myInput"
			inputValue={value}
			items={items}
			onInputChange={setValue}
			onItemsChange={setItems}
			sourceItems={sourceItems}
			spritemap={spritemap}
		/>
	);
}

render(<Component />)`;

const MultiSelectInputWithAutocomplete = () => {
	const scope = {
		ClayMultiSelect,
		spritemap,
		useState,
	};
	return <Editor code={multiSelectWithAutocompleteCode} scope={scope} />;
};

const multiSelectWithSelectButtonCode = `const Component = () => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayMultiSelect
						inputName="myInput"
						inputValue={value}
						items={items}
						onInputChange={setValue}
						onItemsChange={setItems}
						sourceItems={sourceItems}
						spritemap={spritemap}
					/>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem shrink>
					<ClayButton
						displayType="secondary"
						onClick={() => alert('Click')}
					>
						{'Select'}
					</ClayButton>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
}

render(<Component />)`;

const MultiSelectInputWithSelectButton = () => {
	const scope = {
		ClayButton,
		ClayForm,
		ClayInput,
		ClayMultiSelect,
		spritemap,
		useState,
	};
	return <Editor code={multiSelectWithSelectButtonCode} scope={scope} />;
};

const multiSelectWithValidationCode = `const Component = () => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<ClayForm.Group className="has-error">
			<label>{'MultiSelect'}</label>

			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayMultiSelect
						inputName="myInput"
						inputValue={value}
						items={items}
						onInputChange={setValue}
						onItemsChange={setItems}
						sourceItems={sourceItems}
						spritemap={spritemap}
					/>

					<ClayForm.FeedbackGroup>
						<ClayForm.FeedbackItem>
							<ClayForm.FeedbackIndicator
								spritemap={spritemap}
								symbol="info-circle"
							/>

							{'You made an error'}
						</ClayForm.FeedbackItem>
					</ClayForm.FeedbackGroup>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem shrink>
					<ClayButton
						displayType="secondary"
						onClick={() => alert('Click')}
					>
						{'Select'}
					</ClayButton>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
}

render(<Component />)`;

const MultiSelectInputWithValidation = () => {
	const scope = {
		ClayButton,
		ClayForm,
		ClayInput,
		ClayMultiSelect,
		spritemap,
		useState,
	};
	return <Editor code={multiSelectWithValidationCode} scope={scope} />;
};

export {
	MultiSelectInput,
	MultiSelectInputWithAutocomplete,
	MultiSelectInputWithSelectButton,
	MultiSelectInputWithValidation,
};
