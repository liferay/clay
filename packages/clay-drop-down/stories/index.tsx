/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayCheckbox, ClayRadio} from '@clayui/form';
import {boolean, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayDropDown, {
	Align,
	ClayDropDownWithDrilldown,
	ClayDropDownWithItems,
} from '../src';

const ITEMS = [
	{
		label: 'clickable',
		onClick: () => {
			alert('you clicked!');
		},
	},
	{
		type: 'divider' as const,
	},
	{
		items: [
			{
				label: 'one',
				type: 'radio' as const,
				value: 'one',
			},
			{
				label: 'two',
				type: 'radio' as const,
				value: 'two',
			},
		],
		label: 'radio',
		name: 'radio',
		onChange: (value: string) => alert(`New Radio checked ${value}`),
		type: 'radiogroup' as const,
	},
	{
		items: [
			{
				checked: true,
				label: 'checkbox',
				onChange: () => alert('checkbox changed'),
				type: 'checkbox' as const,
			},
			{
				checked: true,
				label: 'checkbox 1',
				onChange: () => alert('checkbox changed'),
				type: 'checkbox' as const,
			},
		],
		label: 'checkbox',
		type: 'group' as const,
	},
	{
		href: '#',
		label: 'linkable',
	},
];

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={select(
				'Alignment Position',
				Align,
				Align.BottomLeft
			)}
			menuHeight={select('Height', ['', 'auto'], '')}
			menuWidth={select('Width', ['', 'sm', 'full'], '')}
			onActiveChange={(newVal) => setActive(newVal)}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		>
			{children}
		</ClayDropDown>
	);
};

storiesOf('Components|ClayDropDown', module)
	.add('default', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{disabled: true, href: '#three', label: 'three'},
					{href: '#four', label: 'four'},
				].map(({href, label, ...otherProps}, i) => (
					<ClayDropDown.Item href={href} key={i} {...otherProps}>
						{label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('groups', () => (
		<DropDownWithState>
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

				<ClayDropDown.Group header="Group #2">
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
		</DropDownWithState>
	))
	.add('checkbox', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				<ClayDropDown.Section>
					<ClayCheckbox
						checked
						label="I'm a checkbox!"
						onChange={() => {}}
					/>
				</ClayDropDown.Section>
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('search', () => {
		const [query, setQuery] = React.useState('');

		return (
			<DropDownWithState>
				<ClayDropDown.Search
					formProps={{onSubmit: (e) => e.preventDefault()}}
					onChange={(event) => setQuery(event.target.value)}
					spritemap={spritemap}
					value={query}
				/>

				<ClayDropDown.ItemList>
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{disabled: true, href: '#three', label: 'three'},
						{href: '#four', label: 'four'},
					]
						.filter(({label}) => label.match(query))
						.map(({href, label, ...otherProps}, i) => (
							<ClayDropDown.Item
								href={href}
								key={i}
								{...otherProps}
							>
								{label}
							</ClayDropDown.Item>
						))}
				</ClayDropDown.ItemList>
			</DropDownWithState>
		);
	})
	.add('radio', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Order">
					<ClayDropDown.Section>
						<ClayRadio checked label="Ascending" value="asc" />
					</ClayDropDown.Section>
					<ClayDropDown.Section>
						<ClayRadio label="Descending" value="desc" />
					</ClayDropDown.Section>
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('caption and help', () => (
		<DropDownWithState>
			<ClayDropDown.Help>{'Can I help you?'}</ClayDropDown.Help>

			<ClayDropDown.ItemList>
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>

			<ClayDropDown.Caption>{'... or maybe not.'}</ClayDropDown.Caption>
		</DropDownWithState>
	))
	.add('items with icons', () => (
		<DropDownWithState hasLeftSymbols hasRightSymbols>
			<ClayDropDown.ItemList>
				{[
					{label: 'Left', left: 'trash'},
					{label: 'Right', right: 'check'},
					{label: 'Both', left: 'trash', right: 'check'},
				].map((item, i) => (
					<ClayDropDown.Item
						key={i}
						spritemap={spritemap}
						symbolLeft={item.left}
						symbolRight={item.right}
					>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('w/ custom offset', () => (
		<DropDownWithState offsetFn={() => [20, 20]}>
			<ClayDropDown.ItemList>
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{disabled: true, href: '#three', label: 'three'},
					{href: '#four', label: 'four'},
				].map(({href, label, ...otherProps}, i) => (
					<ClayDropDown.Item href={href} key={i} {...otherProps}>
						{label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('alignment positions', () => (
		<div style={{margin: '200px 300px'}}>
			{Object.keys(Align).map((alignPosition) => (
				<>
					<ClayDropDownWithItems
						alignmentPosition={
							Align[alignPosition as keyof typeof Align]
						}
						items={[
							{href: '#one', label: 'one'},
							{href: '#two', label: 'two'},
							{disabled: true, href: '#three', label: 'three'},
							{href: '#four', label: 'four'},
						]}
						key={alignPosition}
						spritemap={spritemap}
						trigger={<ClayButton>{alignPosition}</ClayButton>}
					/>
					<br />
				</>
			))}
		</div>
	))
	.add('ClayDropDownWithDrilldown', () => (
		<ClayDropDownWithDrilldown
			initialActiveMenu="x0a3"
			menus={{
				x0a3: [
					{href: '#', title: 'Hash Link'},
					{onClick: () => alert('test'), title: 'Alert!'},
					{child: 'x0a4', title: 'Subnav'},
				],
				x0a4: [
					{href: '#', title: '2nd hash link'},
					{child: 'x0a5', title: 'Subnav'},
				],
				x0a5: [{title: 'The'}, {title: 'End'}],
			}}
			spritemap={spritemap}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		/>
	))
	.add('ClayDropDownWithItems', () => {
		const [value, setValue] = React.useState('');

		return (
			<ClayDropDownWithItems
				caption="Showing 7 of 203 Structures"
				footerContent={
					<>
						<ClayButton displayType="secondary">
							{'Cancel'}
						</ClayButton>
						<ClayButton>{'Done'}</ClayButton>
					</>
				}
				helpText="You can customize this menu or see all you have by pressing 'more'."
				items={ITEMS}
				onSearchValueChange={setValue}
				searchProps={{
					formProps: {
						onSubmit: (e) => {
							e.preventDefault();
							alert('Submitted!');
						},
					},
				}}
				searchValue={value}
				searchable={boolean('Searchable', true)}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);
	})
	.add('ClayDropDownWithItems w/ custom active', () => {
		const [value, setValue] = React.useState('');
		const [active, setActive] = React.useState(false);

		return (
			<>
				<ClayDropDownWithItems
					active={active}
					caption="Showing 7 of 203 Structures"
					closeOnClickOutside={false}
					footerContent={
						<>
							<ClayButton displayType="secondary">
								{'Cancel'}
							</ClayButton>
							<ClayButton>{'Done'}</ClayButton>
						</>
					}
					helpText="You can customize this menu or see all you have by pressing 'more'."
					items={ITEMS}
					onActiveChange={setActive}
					onSearchValueChange={setValue}
					searchProps={{
						formProps: {
							onSubmit: (e) => {
								e.preventDefault();
								alert('Submitted!');
							},
						},
					}}
					searchValue={value}
					searchable={boolean('Searchable', true)}
					spritemap={spritemap}
					trigger={<ClayButton>{'Click Me'}</ClayButton>}
				/>

				<button
					onClick={() => setActive(!active)}
					style={{float: 'right'}}
				>
					{'External Control'}
				</button>
			</>
		);
	});
