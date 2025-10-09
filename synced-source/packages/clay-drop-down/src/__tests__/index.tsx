/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown, {ClayDropDownWithItems} from '..';
import {cleanup, fireEvent, getAllByRole, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';

const DropDownWithState = ({children, ...others}: any) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			onActiveChange={setActive}
			renderMenuOnClick
			trigger={<button>Click Me</button>}
		>
			{children}
		</ClayDropDown>
	);
};

describe('ClayDropDown', () => {
	afterEach(cleanup);

	it('renders without menu', () => {
		render(
			<DropDownWithState>
				<ClayDropDown.ItemList>
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item
							href={item.href}
							key={i}
							spritemap="/foo/bar"
						>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</DropDownWithState>
		);

		expect(
			document.body.querySelector('.dropdown-menu')
		).not.toBeInTheDocument();
	});

	it('renders dropdown menu when clicked', () => {
		const {container} = render(
			<DropDownWithState>
				<ClayDropDown.ItemList>
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item
							href={item.href}
							key={i}
							spritemap="/foo/bar"
						>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(document.body.querySelector('.dropdown-menu')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('hides dropdown when clicking outside', () => {
		const {container, getByTestId} = render(
			<div>
				<DropDownWithState>
					<ClayDropDown.ItemList>
						{[
							{href: '#one', label: 'one'},
							{href: '#two', label: 'two'},
							{href: '#three', label: 'three'},
						].map((item, i) => (
							<ClayDropDown.Item
								href={item.href}
								key={i}
								spritemap="/foo/bar"
							>
								{item.label}
							</ClayDropDown.Item>
						))}
					</ClayDropDown.ItemList>
				</DropDownWithState>

				<div data-testid="OUTSIDE_ELEMENT">outside item</div>
			</div>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');

		userEvent.click(getByTestId('OUTSIDE_ELEMENT'));

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).not.toContain('show');
	});

	it('hides dropdown when tabbed out', () => {
		const {container, getByTestId} = render(
			<div>
				<DropDownWithState>
					<ClayDropDown.ItemList>
						{[
							{href: '#one', label: 'one'},
							{href: '#two', label: 'two'},
							{href: '#three', label: 'three'},
						].map((item, i) => (
							<ClayDropDown.Item
								href={item.href}
								key={i}
								spritemap="/foo/bar"
							>
								{item.label}
							</ClayDropDown.Item>
						))}
					</ClayDropDown.ItemList>
				</DropDownWithState>

				<button data-testid="BUTTON_OUTSIDE">outside item</button>
			</div>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');

		const containerElement = getByTestId('BUTTON_OUTSIDE');

		fireEvent.focus(containerElement as HTMLDivElement, {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).not.toContain('show');
	});

	it('renders with search input', () => {
		const {container} = render(
			<DropDownWithState>
				<ClayDropDown.Search
					onChange={() => {}}
					spritemap="/foo/bar"
					value="test"
				/>

				<ClayDropDown.ItemList>
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item
							href={item.href}
							key={i}
							spritemap="/foo/bar"
						>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(document.body).toMatchSnapshot();
	});

	it('renders with icons', () => {
		const {container} = render(
			<DropDownWithState hasLeftSymbols hasRightSymbols>
				<ClayDropDown.ItemList>
					{[
						{label: 'Left', left: 'trash'},
						{label: 'Right', right: 'check'},
						{label: 'Both', left: 'trash', right: 'check'},
					].map((item, i) => (
						<ClayDropDown.Item
							key={i}
							spritemap="/foo/bar"
							symbolLeft={item.left}
							symbolRight={item.right}
						>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(document.body).toMatchSnapshot();
	});

	it('renders with groups', () => {
		const {container} = render(
			<DropDownWithState>
				<ClayDropDown.ItemList>
					<ClayDropDown.Group header="Group #1">
						{[
							{href: '#one', label: 'one'},
							{href: '#two', label: 'two'},
							{href: '#three', label: 'three'},
						].map((item, i) => (
							<ClayDropDown.Item
								href={item.href}
								key={i}
								spritemap="/foo/bar"
							>
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
							<ClayDropDown.Item
								href={item.href}
								key={i}
								spritemap="/foo/bar"
							>
								{item.label}
							</ClayDropDown.Item>
						))}
					</ClayDropDown.Group>
				</ClayDropDown.ItemList>
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(document.body).toMatchSnapshot();
	});

	it('onClick is called for dropdown item', () => {
		const onClickFn = jest.fn();

		const {container} = render(
			<ClayDropDownWithItems
				items={[
					{
						label: 'clickable',
						onClick: onClickFn,
					},
				]}
				renderMenuOnClick
				trigger={<button>Click Me</button>}
			/>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		fireEvent.click(
			document.querySelector('.dropdown-item') as HTMLButtonElement,
			{}
		);

		expect(onClickFn).toHaveBeenCalled();
	});

	it('prevents form submission', () => {
		const onSubmitFn = jest.fn();

		const {container} = render(
			<DropDownWithState>
				<ClayDropDown.Search
					formProps={{onSubmit: onSubmitFn}}
					onChange={() => {}}
					spritemap="/foo/bar"
					value="test"
				/>
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		const input = document.querySelector('input');

		fireEvent.submit(input as HTMLInputElement, {});

		expect(onSubmitFn).toHaveBeenCalled();
	});

	it('render simple dynamic content', () => {
		const {getAllByRole, getByRole} = render(
			<ClayDropDown
				items={['one', 'two', 'three']}
				trigger={<button>Click Me</button>}
			>
				{(item) => (
					<ClayDropDown.Item key={item}>{item}</ClayDropDown.Item>
				)}
			</ClayDropDown>
		);

		const button = getByRole('button');

		fireEvent.click(button);

		const [one, two, three] = getAllByRole('menuitem');

		expect(one).toBeDefined();
		expect(two).toBeDefined();
		expect(three).toBeDefined();
	});

	it('render simple static content', () => {
		const {getAllByRole, getByRole} = render(
			<ClayDropDown trigger={<button>Click Me</button>}>
				<ClayDropDown.ItemList>
					<ClayDropDown.Item>one</ClayDropDown.Item>
					<ClayDropDown.Item>two</ClayDropDown.Item>
					<ClayDropDown.Item>three</ClayDropDown.Item>
				</ClayDropDown.ItemList>
			</ClayDropDown>
		);

		const button = getByRole('button');

		fireEvent.click(button);

		const [one, two, three] = getAllByRole('menuitem');

		expect(one).toBeDefined();
		expect(two).toBeDefined();
		expect(three).toBeDefined();
	});

	it('render dynamic content with search', () => {
		const {getAllByRole, getByRole} = render(
			<ClayDropDown trigger={<button>Click Me</button>}>
				<ClayDropDown.Search placeholder="Type to filter" />
				<ClayDropDown.ItemList items={['one', 'two', 'three']}>
					{(item: string) => (
						<ClayDropDown.Item key={item}>{item}</ClayDropDown.Item>
					)}
				</ClayDropDown.ItemList>
			</ClayDropDown>
		);

		const button = getByRole('button');

		fireEvent.click(button);

		const [one, two, three] = getAllByRole('menuitem');

		expect(one).toBeDefined();
		expect(two).toBeDefined();
		expect(three).toBeDefined();

		const input = getByRole('textbox');

		userEvent.type(input, 't');

		const items = getAllByRole('menuitem');

		expect(items.length).toBe(2);
	});

	it('render dynamic content with group', () => {
		const {getAllByRole: cGetAllByRole, getByRole} = render(
			<ClayDropDown
				items={[
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
				]}
				trigger={<button>Click Me</button>}
			>
				{(item: any) => (
					<ClayDropDown.Group
						header={item.name}
						items={item.children}
						key={item.name}
					>
						{(item: any) => (
							<ClayDropDown.Item key={item.name}>
								{item.name}
							</ClayDropDown.Item>
						)}
					</ClayDropDown.Group>
				)}
			</ClayDropDown>
		);

		const button = getByRole('button');

		fireEvent.click(button);

		const [fruit, vegetable] = cGetAllByRole('group');

		expect(fruit).toBeDefined();
		expect(vegetable).toBeDefined();

		const [fruit1, fruit2, fruit3] = getAllByRole(fruit!, 'menuitem');

		expect(fruit1).toBeDefined();
		expect(fruit2).toBeDefined();
		expect(fruit3).toBeDefined();

		const [vegetable1, vegetable2, vegetable3] = getAllByRole(
			vegetable!,
			'menuitem'
		);

		expect(vegetable1).toBeDefined();
		expect(vegetable2).toBeDefined();
		expect(vegetable3).toBeDefined();
	});

	it('render dynamic content with group and search', () => {
		const {getAllByRole: cGetAllByRole, getByRole} = render(
			<ClayDropDown trigger={<button>Click Me</button>}>
				<ClayDropDown.Search placeholder="Type to filter" />
				<ClayDropDown.ItemList
					items={[
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
					]}
				>
					{(item: any) => (
						<ClayDropDown.Group
							header={item.name}
							items={item.children}
							key={item.name}
						>
							{(item: any) => (
								<ClayDropDown.Item key={item.name}>
									{item.name}
								</ClayDropDown.Item>
							)}
						</ClayDropDown.Group>
					)}
				</ClayDropDown.ItemList>
			</ClayDropDown>
		);

		const button = getByRole('button');

		fireEvent.click(button);

		const input = getByRole('textbox');

		userEvent.type(input, 'ma');

		const [fruit, vegetable] = cGetAllByRole('group');

		const fruits = getAllByRole(fruit!, 'menuitem');
		const vegetables = getAllByRole(vegetable!, 'menuitem');

		expect(fruits.length).toBe(1);
		expect(vegetables.length).toBe(1);
	});
});
