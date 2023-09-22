/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayDropDown, {
	ClayDropDownWithDrilldown,
	ClayDropDownWithItems,
} from '@clayui/drop-down';
import React from 'react';

const dropDownImportsCode = `import ClayDropDown from '@clayui/drop-down';`;

const dropDownCode = `const Component = () => {
	return (
		<ClayDropDown
			trigger={<button className="btn btn-primary">Click here!</button>}
			menuElementAttrs={{
				className: 'my-custom-dropdown-menu',
				containerProps: {
					className: 'dropdown-menu-react-portal-div',
					id: 'dropdownMenuReactPortalDiv',
				},
			}}
			closeOnClick
		>
			<ClayDropDown.Help>{'Can I help you?'}</ClayDropDown.Help>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Group #1">
					{[
						{label: 'one'},
						{label: 'two'},
						{label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item onClick={() => {}} key={i}>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
			<ClayDropDown.Caption>{'... or maybe not.'}</ClayDropDown.Caption>
		</ClayDropDown>
	);
}

render(<Component />)`;

const dropDownJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const DropDownJSPCode = `<clay:dropdown-menu
	buttonLabel="Click here!"
	dropdownItems="<%= customDropdownItems %>"
/>

<clay:dropdown-action dropdownItems="<%= actionDropdownItems %>"

/*
In JSP we have 2 variants of ClayDropDown: <clay:dropdown-menu /> and <clay:dropdown-action />, with them sharing lots of props, like: defaultEventHandler, displayType, label, small, searchable, itemsIconAlignment, etc.

The only difference between these 2 variants is that the trigger in <clay:dropdown-action /> is always a vertical elipsis icon, whereas the trigger for <clay:dropdown-menu /> can be fully customized.
*/`;

const DropDown = () => {
	const scope = {ClayDropDown};

	const codeSnippets = [
		{
			imports: dropDownImportsCode,
			name: 'React',
			value: dropDownCode,
		},
		{
			disabled: true,
			imports: dropDownJSPImportsCode,
			name: 'JSP',
			value: DropDownJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const dropDownWithItemsImportsCode = `import ClayButton from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';`;

const dropDownWithItemsCode = `const Component = () => {
	const [value, setValue] = useState();
	const items = [
		{
			label: 'clickable',
			onClick: (event) => event.preventDefault(),
		},
		{
			type: 'divider',
		},
		{
			items: [
				{
					label: 'one',
					type: 'radio',
					value: 'one',
				},
				{
					label: 'two',
					type: 'radio',
					value: 'two',
				},
				{
					label: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual',
					type: 'radio',
					value: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual',
				},
			],
			label: 'radio',
			name: 'dropdownWithItemsRadio',
			onChange: (value) => alert('New Radio checked'),
			type: 'radiogroup',
		},
		{
			items: [
				{
					checked: true,
					label: 'checkbox',
					onChange: () => alert('checkbox changed'),
					type: 'checkbox',
				},
				{
					checked: true,
					label: 'checkbox 1',
					onChange: () => alert('checkbox changed'),
					type: 'checkbox',
				},
				{
					checked: true,
					label: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual',
					onChange: () => alert('checkbox changed'),
					type: 'checkbox',
				},
			],
			label: 'checkbox',
			type: 'group',
		},
		{
			href: '#',
			label: 'linkable',
		},
	];

	return (
		<ClayDropDownWithItems
			caption="Showing 7 of 203 Structures"
			footerContent={
				<>
					<ClayButton displayType="secondary">{'Cancel'}</ClayButton>
					<ClayButton>{'Done'}</ClayButton>
				</>
			}
			helpText="You can customize this menu or see all you have by pressing 'more'."
			items={items}
			onSearchValueChange={setValue}
			searchValue={value}
			searchable={true}
			spritemap={spritemap}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		/>
    );
}

render(<Component />)`;

const DropDownWithItems = () => {
	const scope = {ClayButton, ClayDropDownWithItems};

	return (
		<Editor
			code={dropDownWithItemsCode}
			imports={dropDownWithItemsImportsCode}
			scope={scope}
		/>
	);
};

const dropDownWithDrilldownImportsCode = `import ClayButton from '@clayui/button';
import {ClayDropDownWithDrilldown} from '@clayui/drop-down';`;

const dropDownWithDrilldownCode = `const Component = () => {
	return (
		<ClayDropDownWithDrilldown
			defaultActiveMenu="x0a3"
			menus={{
				x0a3: [
					{href: '#', title: 'Hash Link'},
					{type: 'divider'},
					{onClick: () => alert('test'), title: 'Alert!'},
					{type: 'divider'},
					{child: 'x0a4', title: 'Subnav'},
				],
				x0a4: [
					{href: '#', title: '2nd hash link'},
					{child: 'x0a5', title: 'Subnav'},
				],
				x0a5: [{title: 'The'}, {type: 'divider'}, {title: 'End'}],
			}}
			spritemap={spritemap}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		/>
    );
}

render(<Component />)`;

const DropDownWithDrilldown = () => {
	const scope = {ClayButton, ClayDropDownWithDrilldown};

	return (
		<Editor
			code={dropDownWithDrilldownCode}
			imports={dropDownWithDrilldownImportsCode}
			scope={scope}
		/>
	);
};

const dropDownExampleImportsCode = `import Button from '@clayui/button';
import DropDown from '@clayui/drop-down';`;

const dropDownExampleCode = `const Component = () => {
	const items = [
		{
			children: [
				{id: 2, name: 'Apple'},
				{id: 3, name: 'Banana'},
				{id: 4, name: 'Mangos'},
			],
			id: 1,
			name: 'Fruit',
		},
		{
			children: [
				{id: 6, name: 'Potatoes'},
				{id: 7, name: 'Tomatoes'},
				{id: 8, name: 'Onions'},
			],
			id: 5,
			name: 'Vegetable',
		},
	];

	return (
		<DropDown
			filterKey="name"
			trigger={<Button>Select</Button>}
		>
			<DropDown.Search placeholder="Type to filter" />
			<DropDown.ItemList items={items}>
				{(item) => (
					<DropDown.Group
						header={item.name}
						items={item.children}
						key={item.name}
					>
						{(item) => (
							<DropDown.Item
								key={item.name}
								onClick={() => {
									// logic stuff...
								}}
							>
								{item.name}
							</DropDown.Item>
						)}
					</DropDown.Group>
				)}
			</DropDown.ItemList>
		</DropDown>
	);
}

render(<Component />)`;

const DropDownExample = () => {
	const scope = {Button: ClayButton, DropDown: ClayDropDown};

	return (
		<Editor
			code={dropDownExampleCode}
			imports={dropDownExampleImportsCode}
			scope={scope}
		/>
	);
};

export {DropDown, DropDownExample, DropDownWithItems, DropDownWithDrilldown};
