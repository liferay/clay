/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayDropDown, {ClayDropDownWithItems} from '@clayui/drop-down';
import React from 'react';

import Editor from '../Editor';

const dropDownImportsCode = `import ClayDropDown from '@clayui/drop-down';
`;

const dropDownCode = `const Component = () => {
	const [active, setActive] = React.useState(false);

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

const DropDown = () => {
	const scope = {ClayDropDown};

	return (
		<Editor
			code={dropDownCode}
			imports={dropDownImportsCode}
			scope={scope}
		/>
	);
};

const dropDownWithItemsImportsCode = `import ClayButton from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
`;

const dropDownWithItemsCode = `

const Component = () => {
	const [value, setValue] = React.useState();
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
