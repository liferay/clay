/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayDropDown, {Align, ClayDropDownWithItems} from '../src';
import React, {useState} from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import {ClayCheckbox, ClayRadio} from '@clayui/form';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={select(
				'Alignment Position',
				{
					BottomCenter: Align.BottomCenter,
					BottomLeft: Align.BottomLeft,
					BottomRight: Align.BottomRight,
					LeftCenter: Align.LeftCenter,
					RightCenter: Align.RightCenter,
					TopCenter: Align.TopCenter,
					TopLeft: Align.TopLeft,
					TopRight: Align.TopRight,
				},
				Align.BottomLeft
			)}
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		>
			{children}
		</ClayDropDown>
	);
};

storiesOf('ClayDropDown', module)
	.add('default', () => (
		<DropDownWithState>
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
				<ClayDropDown.Item>
					<ClayCheckbox
						checked
						label="I'm a checkbox!"
						onChange={() => {}}
					/>
				</ClayDropDown.Item>
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('radio', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Order">
					<ClayDropDown.Item>
						<ClayRadio checked label="Ascending" value="asc" />
					</ClayDropDown.Item>
					<ClayDropDown.Item>
						<ClayRadio label="Descending" value="desc" />
					</ClayDropDown.Item>
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
	.add('w/ ClayDropDownWithItems', () => {
		const [value, setValue] = useState();
		const items = [
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
				onChange: (value: string) =>
					alert(`New Radio checked ${value}`),
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
				items={items}
				onSearchValueChange={setValue}
				searchValue={value}
				searchable={boolean('Searchable', true)}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);
	});
