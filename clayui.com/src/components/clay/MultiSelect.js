/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayMultiSelect from '@clayui/multi-select';
import ClaySticker from '@clayui/sticker';
import React from 'react';

import Editor from '../Editor';

const multiSelectImportsCode = `import ClayMultiSelect from '@clayui/multi-select';
`;

const multiSelectCode = `const Component = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([
		{
			label: 'one',
			value: '1',
		}
	]);

	return (
		<ClayMultiSelect
			inputName="myInput"
			inputValue={value}
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			spritemap={spritemap}
		/>
	);
}

render(<Component />)`;

const MultiSelectInput = () => {
	const scope = {
		ClayMultiSelect,
	};

	return (
		<Editor
			code={multiSelectCode}
			imports={multiSelectImportsCode}
			scope={scope}
		/>
	);
};

const multiSelectWithAutocompleteImportsCode = `import ClayMultiSelect from '@clayui/multi-select';
`;

const multiSelectWithAutocompleteCode = `const Component = (props) => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([
		{
			label: 'one',
			value: '1',
		}
	]);

	const sourceItems = [
		{
			label: 'one',
			value: '1',
		},
		{
			label: 'two',
			value: '2',
		},
		{
			label: 'three',
			value: '3',
		},
		{
			label: 'four',
			value: '4',
		},
	];

	return (
		<ClayMultiSelect
			{...props}
			inputName="myInput"
			inputValue={value}
			items={items}
			onChange={setValue}
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
	};

	return (
		<Editor
			code={multiSelectWithAutocompleteCode}
			imports={multiSelectWithAutocompleteImportsCode}
			scope={scope}
		/>
	);
};

const multiSelectWithSelectButtonImportsCode = `import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayMultiSelect from '@clayui/multi-select';
`;

const multiSelectWithSelectButtonCode = `const Component = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([
		{
			label: 'one',
			value: '1',
		}
	]);

	const sourceItems = [
		{
			label: 'one',
			value: '1',
		},
		{
			label: 'two',
			value: '2',
		},
		{
			label: 'three',
			value: '3',
		},
		{
			label: 'four',
			value: '4',
		},
	];

	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayMultiSelect
						inputName="myInput"
						inputValue={value}
						items={items}
						onChange={setValue}
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
	};

	return (
		<Editor
			code={multiSelectWithSelectButtonCode}
			imports={multiSelectWithSelectButtonImportsCode}
			scope={scope}
		/>
	);
};

const multiSelectWithValidationCode = `const Component = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([
		{
			label: 'one',
			value: '1',
		}
	]);

	const sourceItems = [
		{
			label: 'one',
			value: '1',
		},
		{
			label: 'two',
			value: '2',
		},
		{
			label: 'three',
			value: '3',
		},
		{
			label: 'four',
			value: '4',
		},
	];

	return (
		<ClayForm.Group className="has-error">
			<label>{'MultiSelect'}</label>

			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayMultiSelect
						inputName="myInput"
						inputValue={value}
						items={items}
						onChange={setValue}
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
	};

	return (
		<Editor
			code={multiSelectWithValidationCode}
			imports={multiSelectWithSelectButtonImportsCode}
			scope={scope}
		/>
	);
};

const multiSelectWithCustomAutocompleteCode = `const MenuCustom = ({
	inputValue,
	locator,
	onItemClick = () => {},
	sourceItems,
}) => (
	<ClayDropDown.ItemList>
		{sourceItems
			.filter(item => inputValue && item[locator.label].match(inputValue))
			.map(item => (
				<ClayDropDown.Item
					key={item[locator.value]}
					onClick={() => onItemClick(item)}
				>
					<div className="autofit-row autofit-row-center">
						<div className="autofit-col mr-3">
							<ClaySticker
								className="sticker-user-icon"
								size="lg"
							>
								<ClayIcon spritemap={spritemap} symbol="user" />
							</ClaySticker>
						</div>
						<div className="autofit-col">
							<strong>{item[locator.label]}</strong>
							<span>{item.email}</span>
						</div>
					</div>
				</ClayDropDown.Item>
			))}
	</ClayDropDown.ItemList>
);

const Component = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([
		{
			email: 'one@example.com',
			label: 'One',
			value: '1',
		},
	]);

	const sourceItems = [
		{
			email: 'one@example.com',
			label: 'One',
			value: '1',
		},
		{
			email: 'two@example.com',
			label: 'Two',
			value: '2',
		},
	];

	return (
		<ClayMultiSelect
			inputName="myInput"
			inputValue={value}
			items={items}
			menuRenderer={MenuCustom}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={sourceItems}
			spritemap={spritemap}
		/>
	);
}

render(<Component />)`;

const MultiSelectInputWithCustomAutocomplete = () => {
	const scope = {
		ClayDropDown,
		ClayIcon,
		ClayMultiSelect,
		ClaySticker,
	};

	return (
		<Editor
			code={multiSelectWithCustomAutocompleteCode}
			imports={multiSelectImportsCode}
			scope={scope}
		/>
	);
};

export {
	MultiSelectInput,
	MultiSelectInputWithAutocomplete,
	MultiSelectInputWithCustomAutocomplete,
	MultiSelectInputWithSelectButton,
	MultiSelectInputWithValidation,
};
