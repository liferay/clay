/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
			{
				label: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual',
				type: 'radio' as const,
				value: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual',
			},
		],
		label: 'radio',
		name: 'dropdownWithItemsRadio',
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
			{
				checked: true,
				label: 'ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual',
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

export const Default = (args: any) => (
	<ClayDropDown
		alignmentPosition={args.alignmentPosition}
		menuHeight={args.height}
		menuWidth={args.width}
		renderMenuOnClick={args.renderMenuOnClick}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
		<ClayDropDown.ItemList>
			{[
				{href: '#one', label: 'one'},
				{href: '#two', label: 'two'},
				{disabled: true, href: '#three', label: 'three'},
				{href: '#four', label: 'four'},
			].map(({href, label, ...otherProps}, i) => (
				<ClayDropDown.Item
					href={href}
					key={i}
					onClick={() => {}}
					{...otherProps}
				>
					{label}
				</ClayDropDown.Item>
			))}
		</ClayDropDown.ItemList>
	</ClayDropDown>
);

Default.args = {
	alignmentPosition: 5,
	height: '',
	renderMenuOnClick: false,
	width: '',
};

export const Dynamic = () => (
	<ClayDropDown
		items={['one', 'two', 'three', 'four']}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
		{(item) => (
			<ClayDropDown.Item key={item} onClick={() => {}}>
				{item}
			</ClayDropDown.Item>
		)}
	</ClayDropDown>
);

export const DynamicWithSearch = () => {
	return (
		<ClayDropDown trigger={<ClayButton>Click Me</ClayButton>}>
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
};

export const DynamicGroup = () => {
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
};

export const Groups = () => (
	<ClayDropDown
		alignmentPosition={Align.BottomLeft}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
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
	</ClayDropDown>
);

export const Checkbox = () => (
	<ClayDropDown
		alignmentPosition={Align.BottomLeft}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
		<ClayDropDown.ItemList>
			<ClayDropDown.Section>
				<ClayCheckbox
					checked
					label="I'm a checkbox!"
					onChange={() => {}}
				/>
			</ClayDropDown.Section>
		</ClayDropDown.ItemList>
		<ClayDropDown.ItemList>
			<ClayDropDown.Section>
				<ClayCheckbox
					label="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
					onChange={() => {}}
				/>
			</ClayDropDown.Section>
		</ClayDropDown.ItemList>
	</ClayDropDown>
);

export const Search = () => {
	const [query, setQuery] = useState('');

	return (
		<ClayDropDown
			alignmentPosition={Align.BottomLeft}
			trigger={<ClayButton>Click Me</ClayButton>}
		>
			<ClayDropDown.Search
				onChange={(event) => setQuery(event.target.value)}
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
						<ClayDropDown.Item href={href} key={i} {...otherProps}>
							{label}
						</ClayDropDown.Item>
					))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
};

export const Radio = () => (
	<ClayDropDown
		alignmentPosition={Align.BottomLeft}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
		<ClayDropDown.ItemList>
			<ClayDropDown.Group header="Order">
				<ClayDropDown.Section>
					<ClayRadio
						checked
						label="Ascending"
						name="dropdownRadio01"
						value="asc"
					/>
				</ClayDropDown.Section>
				<ClayDropDown.Section>
					<ClayRadio
						label="Descending"
						name="dropdownRadio01"
						value="desc"
					/>
				</ClayDropDown.Section>
				<ClayDropDown.Section>
					<ClayRadio
						label="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
						name="dropdownRadio01"
						value="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
					/>
				</ClayDropDown.Section>
			</ClayDropDown.Group>
		</ClayDropDown.ItemList>
	</ClayDropDown>
);

export const CaptionAndHelp = () => (
	<ClayDropDown
		alignmentPosition={Align.BottomLeft}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
		<ClayDropDown.Help>Can I help you?</ClayDropDown.Help>

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

		<ClayDropDown.Caption>... or maybe not.</ClayDropDown.Caption>
	</ClayDropDown>
);

export const ItemsWithIcons = () => (
	<ClayDropDown
		alignmentPosition={Align.BottomLeft}
		hasLeftSymbols
		hasRightSymbols
		trigger={<ClayButton>Click Me</ClayButton>}
	>
		<ClayDropDown.ItemList>
			{[
				{label: 'Left', left: 'trash'},
				{label: 'Right', right: 'check'},
				{label: 'Both', left: 'trash', right: 'check'},
			].map((item, i) => (
				<ClayDropDown.Item
					key={i}
					onClick={() => {}}
					symbolLeft={item.left}
					symbolRight={item.right}
				>
					{item.label}
				</ClayDropDown.Item>
			))}
		</ClayDropDown.ItemList>
	</ClayDropDown>
);

export const CustomOffset = () => (
	<ClayDropDown
		alignmentPosition={Align.BottomLeft}
		offsetFn={() => [20, 20]}
		trigger={<ClayButton>Click Me</ClayButton>}
	>
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
	</ClayDropDown>
);

export const AlignmentPositions = () => (
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
					trigger={<ClayButton>{alignPosition}</ClayButton>}
				/>
				<br />
			</>
		))}
	</div>
);

export const Drilldown = (args: any) => (
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
	/>
);

Drilldown.args = {
	renderMenuOnClick: false,
};

export const DrillDownWithActive = () => {
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
		/>
	);
};

export const DropDownWithItems = (args: any) => {
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
		/>
	);
};

DropDownWithItems.args = {
	renderMenuOnClick: false,
	searchable: true,
};

export const DropDownWithItemsWithCustomActive = () => {
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
			/>

			<button onClick={() => setActive(!active)} style={{float: 'right'}}>
				External Control
			</button>
		</>
	);
};

export const InModal = () => {
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
};

export const CascadingMenu = () => (
	<ClayDropDownWithItems
		items={[
			{label: 'Folder'},
			{type: 'divider'},
			{
				items: [
					{
						label: 'Basic Document',
						symbolLeft: 'document',
						symbolRight: 'check',
					},
					{label: 'Contract'},
					{label: 'Marketing Banner'},
					{label: 'Spreadsheet'},
					{label: 'Presentation'},
				],
				label: 'Document',
				type: 'contextual',
			},
			{label: 'Shortcut'},
			{label: 'Repository'},
		]}
		trigger={<ClayButton>Cascading Menu</ClayButton>}
	/>
);
