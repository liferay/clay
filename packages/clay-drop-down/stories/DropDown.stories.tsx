/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import {ClayCheckbox, ClayInput, ClayRadio} from '@clayui/form';
import ClayModal, {useModal} from '@clayui/modal';
import React, {useRef, useState} from 'react';

import ClayDropDown, {
	Align,
	ClayDropDownWithDrilldown,
	ClayDropDownWithItems,
} from '../src';

const ITEMS = [
	{
		onClick: (event) => {
			event.preventDefault();

			alert('you clicked!');
		},
		title: 'clickable',
	},
	{
		type: 'divider' as const,
	},
	{
		items: [
			{
				title: 'one',
				type: 'radio' as const,
				value: 'one',
			},
			{
				title: 'two',
				type: 'radio' as const,
				value: 'two',
			},
		],

		name: 'radio',
		onChange: (value: string) => alert(`New Radio checked ${value}`),
		title: 'radio',
		type: 'radiogroup' as const,
	},
	{
		items: [
			{
				checked: true,
				onChange: () => alert('checkbox changed'),
				title: 'checkbox',
				type: 'checkbox' as const,
			},
			{
				checked: true,
				onChange: () => alert('checkbox changed'),
				title: 'checkbox 1',
				type: 'checkbox' as const,
			},
		],

		title: 'checkbox',
		type: 'group' as const,
	},
	{
		href: '#',
		title: 'linkable',
	},
];

export default {
	argTypes: {
		alignmentPosition: {
			control: {type: 'select'},
			options: Align,
		},
		height: {
			control: {type: 'select'},
			options: ['auto', undefined],
		},
		width: {
			control: {type: 'select'},
			options: ['sm', 'full', undefined],
		},
	},
	title: 'Design System/Components/DropDown',
};
export function Default(args: any) {
	return (
		<ClayDropDown
			alignmentPosition={args.alignmentPosition}
			menuHeight={args.height}
			menuWidth={args.width}
			renderMenuOnClick={args.renderMenuOnClick}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.ItemList>
				{[
					{href: '#one', title: 'one'},
					{href: '#two', title: 'two'},
					{disabled: true, href: '#three', title: 'three'},
					{href: '#four', title: 'four'},
				].map(({href, title, ...otherProps}, i) => (
					<ClayDropDown.Item
						href={href}
						key={i}
						onClick={() => {}}
						{...otherProps}
					>
						{title}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}

Default.args = {
	alignmentPosition: 5,
	height: '',
	renderMenuOnClick: false,
	width: '',
};
export function Dynamic() {
	return (
		<ClayDropDown
			items={['one', 'two', 'three', 'four']}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			{(item) => (
				<ClayDropDown.Item key={item} onClick={() => {}}>
					{item}
				</ClayDropDown.Item>
			)}
		</ClayDropDown>
	);
}
export function DynamicWithSearch() {
	return (
		<ClayDropDown
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.Search placeholder="Type to filter" />

			<ClayDropDown.ItemList items={['one', 'two', 'three', 'four']}>
				{(item: string) => (
					<ClayDropDown.Item key={item} onClick={() => {}}>
						{item}
					</ClayDropDown.Item>
				)}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function DynamicGroup() {
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
		<ClayDropDown
			filterKey="name"
			trigger={<ClayButton>Select</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.Search placeholder="Type to filter" />

			<ClayDropDown.ItemList items={items}>
				{(item: any) => (
					<ClayDropDown.Group
						header={item.name}
						items={item.children}
						key={item.name}
					>
						{(item: any) => (
							<ClayDropDown.Item
								key={item.name}
								onClick={() => {}}
							>
								{item.name}
							</ClayDropDown.Item>
						)}
					</ClayDropDown.Group>
				)}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function Groups() {
	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Group #1">
					{[
						{href: '#one', title: 'one'},
						{href: '#two', title: 'two'},
						{href: '#three', title: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
							{item.title}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>

				<ClayDropDown.Group header="Group #2">
					{[
						{href: '#one', title: 'one'},
						{href: '#two', title: 'two'},
						{href: '#three', title: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
							{item.title}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function Checkbox() {
	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.ItemList>
				<ClayDropDown.Section>
					<ClayCheckbox
						checked
						onChange={() => {}}
						title="I'm a checkbox!"
					/>
				</ClayDropDown.Section>
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function Search() {
	const [query, setQuery] = useState('');

	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.Search
				onChange={(event) => setQuery(event.target.value)}
				value={query}
			/>

			<ClayDropDown.ItemList>
				{[
					{href: '#one', title: 'one'},
					{href: '#two', title: 'two'},
					{disabled: true, href: '#three', title: 'three'},
					{href: '#four', title: 'four'},
				]
					.filter(({title}) => title.match(query))
					.map(({href, title, ...otherProps}, i) => (
						<ClayDropDown.Item href={href} key={i} {...otherProps}>
							{title}
						</ClayDropDown.Item>
					))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function Radio() {
	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Order">
					<ClayDropDown.Section>
						<ClayRadio checked title="Ascending" value="asc" />
					</ClayDropDown.Section>

					<ClayDropDown.Section>
						<ClayRadio title="Descending" value="desc" />
					</ClayDropDown.Section>
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function CaptionAndHelp() {
	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.Help>Can I help you?</ClayDropDown.Help>

			<ClayDropDown.ItemList>
				{[
					{href: '#one', title: 'one'},
					{href: '#two', title: 'two'},
					{href: '#three', title: 'three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.title}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>

			<ClayDropDown.Caption>... or maybe not.</ClayDropDown.Caption>
		</ClayDropDown>
	);
}
export function ItemsWithIcons() {
	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			hasLeftSymbols
			hasRightSymbols
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.ItemList>
				{[
					{left: 'trash', title: 'Left'},
					{right: 'check', title: 'Right'},
					{left: 'trash', right: 'check', title: 'Both'},
				].map((item, i) => (
					<ClayDropDown.Item
						key={i}
						onClick={() => {}}
						symbolLeft={item.left}
						symbolRight={item.right}
					>
						{item.title}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function CustomOffset() {
	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			offsetFn={() => [20, 20]}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		>
			<ClayDropDown.ItemList>
				{[
					{href: '#one', title: 'one'},
					{href: '#two', title: 'two'},
					{disabled: true, href: '#three', title: 'three'},
					{href: '#four', title: 'four'},
				].map(({href, title, ...otherProps}, i) => (
					<ClayDropDown.Item href={href} key={i} {...otherProps}>
						{title}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
}
export function AlignmentPositions() {
	return (
		<div style={{margin: '200px 300px'}}>
			{Object.keys(Align).map((alignPosition) => (
				<>
					<ClayDropDownWithItems
						alignmentPosition={
							Align[alignPosition as keyof typeof Align]
						}
						items={[
							{href: '#one', title: 'one'},
							{href: '#two', title: 'two'},
							{disabled: true, href: '#three', title: 'three'},
							{href: '#four', title: 'four'},
						]}
						key={alignPosition}
						trigger={<ClayButton>{alignPosition}</ClayButton>}
						triggerIcon="caret-bottom"
					/>

					<br />
				</>
			))}
		</div>
	);
}
export function Drilldown(args: any) {
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
					{type: 'divider'},
					{child: 'x0a5', title: 'Subnav'},
				],

				x0a5: [{title: 'The'}, {type: 'divider'}, {title: 'End'}],
			}}
			messages={{
				back: 'Back',
				goTo: 'Go to',
			}}
			renderMenuOnClick={args.renderMenuOnClick}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		/>
	);
}

Drilldown.args = {
	renderMenuOnClick: false,
};
export function DrillDownWithActive() {
	const [active, setActive] = useState(true);

	const onActiveChange = () => {
		setActive(!active);
	};

	return (
		<ClayDropDownWithDrilldown
			active={active}
			defaultActiveMenu="x0a3"
			menus={{
				x0a3: [
					{href: '#', title: 'Hash Link'},
					{onClick: () => alert('test'), title: 'Alert!'},
					{
						onClick: () => {
							onActiveChange();
						},
						title: 'Toggle menu',
					},
					{child: 'x0a4', title: 'Subnav'},
				],

				x0a4: [
					{href: '#', title: '2nd hash link'},
					{child: 'x0a5', title: 'Subnav'},
				],

				x0a5: [{title: 'The'}, {title: 'End'}],
			}}
			messages={{
				back: 'Back',
				goTo: 'Go to',
			}}
			onActiveChange={onActiveChange}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		/>
	);
}
export function DropDownWithItems(args: any) {
	const [value, setValue] = useState('');

	return (
		<ClayDropDownWithItems
			caption="Showing 7 of 203 Structures"
			footerContent={
				<>
					<ClayButton displayType="secondary">Cancel</ClayButton>
					<ClayButton>Done</ClayButton>
				</>
			}
			helpText="You can customize this menu or see all you have by pressing 'more'."
			items={ITEMS}
			onSearchValueChange={setValue}
			renderMenuOnClick={args.renderMenuOnClick}
			searchProps={{
				formProps: {
					onSubmit: (event) => {
						event.preventDefault();
						alert('Submitted!');
					},
				},
			}}
			searchValue={value}
			searchable={args.searchable}
			trigger={<ClayButton>Click Me</ClayButton>}
			triggerIcon="caret-bottom"
		/>
	);
}

DropDownWithItems.args = {
	renderMenuOnClick: false,
	searchable: true,
};
export function DropDownWithItemsWithCustomActive() {
	const [value, setValue] = useState('');
	const [active, setActive] = useState(false);

	return (
		<>
			<ClayDropDownWithItems
				active={active}
				caption="Showing 7 of 203 Structures"
				closeOnClickOutside={false}
				footerContent={
					<>
						<ClayButton displayType="secondary">Cancel</ClayButton>
						<ClayButton>Done</ClayButton>
					</>
				}
				helpText="You can customize this menu or see all you have by pressing 'more'."
				items={ITEMS}
				onActiveChange={setActive}
				onSearchValueChange={setValue}
				searchProps={{
					formProps: {
						onSubmit: (event) => {
							event.preventDefault();
							alert('Submitted!');
						},
					},
				}}
				searchValue={value}
				searchable
				trigger={<ClayButton>Click Me</ClayButton>}
				triggerIcon="caret-bottom"
			/>

			<button onClick={() => setActive(!active)} style={{float: 'right'}}>
				External Control
			</button>
		</>
	);
}
export function InModal() {
	const [visible, setVisible] = useState(false);
	const {observer, onClose} = useModal({
		onClose: () => setVisible(false),
	});
	const inputRef = useRef(null);
	const dropdownMenuRef = useRef(null);
	const [panelVisibility, setPanelVisibility] = useState(false);

	return (
		<>
			{visible && (
				<ClayModal observer={observer} size="lg" status="info">
					<ClayModal.Header>Title</ClayModal.Header>

					<ClayModal.Body scrollable>
						<ClayInput
							onClick={() => setPanelVisibility(!panelVisibility)}
							placeholder="meow"
							ref={inputRef}
						/>

						<ClayDropDown.Menu
							active={panelVisibility}
							alignElementRef={inputRef}
							onActiveChange={() =>
								setPanelVisibility(!panelVisibility)
							}
							ref={dropdownMenuRef}
						>
							<ClayDropDown.Item>my panel item</ClayDropDown.Item>
						</ClayDropDown.Menu>

						<img alt="cat" src="https://cataas.com/cat/says/it" />

						<img alt="cat" src="https://cataas.com/cat/says/will" />

						<img alt="cat" src="https://cataas.com/cat/says/have" />

						<img alt="cat" src="https://cataas.com/cat/says/a" />

						<img
							alt="cat"
							src="https://cataas.com/cat/says/scroll"
						/>
					</ClayModal.Body>

					<ClayModal.Footer
						first={
							<ClayButton.Group spaced>
								<ClayButton displayType="secondary">
									Secondary
								</ClayButton>

								<ClayButton displayType="secondary">
									Secondary
								</ClayButton>
							</ClayButton.Group>
						}
						last={
							<ClayButton onClick={onClose}>Primary</ClayButton>
						}
					/>
				</ClayModal>
			)}
			<ClayButton displayType="primary" onClick={() => setVisible(true)}>
				Open modal
			</ClayButton>
		</>
	);
}
export function CascadingMenu() {
	return (
		<ClayDropDownWithItems
			items={[
				{title: 'Folder'},
				{type: 'divider'},
				{
					items: [
						{
							symbolLeft: 'document',
							symbolRight: 'check',
							title: 'Basic Document',
						},
						{title: 'Contract'},
						{title: 'Marketing Banner'},
						{title: 'Spreadsheet'},
						{title: 'Presentation'},
					],

					title: 'Document',
					type: 'contextual',
				},
				{title: 'Shortcut'},
				{title: 'Repository'},
			]}
			trigger={<ClayButton>Cascading Menu</ClayButton>}
			triggerIcon="caret-bottom"
		/>
	);
}
