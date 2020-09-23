/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayDropDown, {ClayDropDownWithItems} from '@clayui/drop-down';
import React from 'react';

const dropDownImportsCode = `import ClayDropDown from '@clayui/drop-down';`;

const dropDownCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			trigger={<button className="btn btn-primary">Click here!</button>}
			active={active}
			onActiveChange={setActive}
		>
			<ClayDropDown.Help>{'Can I help you?'}</ClayDropDown.Help>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Group #1">
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
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
        onClick: () => {
          alert('you clicked!');
        },
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
        ],
        label: 'radio',
        name: 'radio',
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

export {DropDown, DropDownWithItems};
