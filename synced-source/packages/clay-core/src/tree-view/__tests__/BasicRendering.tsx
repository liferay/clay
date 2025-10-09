/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems as DropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox as Checkbox} from '@clayui/form';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Button, Icon, Provider, Text, TreeView} from '../..';

const spritemap = 'icons.svg';

// Just to avoid TypeScript error with required props
const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

OptionalCheckbox.displayName = 'ClayCheckbox';

describe('TreeView basic rendering', () => {
	afterEach(cleanup);

	it('render static content', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item>
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item>Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render dynamic content', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView
					defaultItems={[
						{
							children: [{name: 'Item'}],
							name: 'Root',
						},
					]}
				>
					{(item) => (
						<TreeView.Item key={item.name}>
							<TreeView.ItemStack>{item.name}</TreeView.ItemStack>
							<TreeView.Group items={item.children}>
								{(item) => (
									<TreeView.Item key={item.name}>
										{item.name}
									</TreeView.Item>
								)}
							</TreeView.Group>
						</TreeView.Item>
					)}
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render nested dynamic content', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView
					defaultItems={[
						{
							children: [
								{
									children: [
										{
											children: [{name: 'Foo'}],
											name: 'Baz',
										},
									],
									name: 'Bar',
								},
							],
							name: 'Foo',
						},
					]}
				>
					{(item) => (
						<TreeView.Item key={item.name}>
							<TreeView.ItemStack>{item.name}</TreeView.ItemStack>
							<TreeView.Group items={item.children}>
								{(item) => (
									<TreeView.Item key={item.name}>
										{item.name}
									</TreeView.Item>
								)}
							</TreeView.Group>
						</TreeView.Item>
					)}
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render light theme', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView displayType="light">
					<TreeView.Item>
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item>Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container.querySelector('.treeview-light')).toBeTruthy();
	});

	it('render dark theme', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView displayType="dark">
					<TreeView.Item>
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item>Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container.querySelector('.treeview-dark')).toBeTruthy();
	});

	it('render with custom expander', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView
					expanderIcons={{
						close: <Icon symbol="hr" />,
						open: <Icon symbol="plus" />,
					}}
				>
					<TreeView.Item>
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item>Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container.querySelectorAll('svg.lexicon-icon-hr').length).toBe(
			1
		);
		expect(container.querySelectorAll('svg.lexicon-icon-plus').length).toBe(
			1
		);
	});

	it('render with actions', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item
						actions={
							<>
								<Button displayType={null} monospaced>
									<Icon symbol="times" />
								</Button>
								<DropDownWithItems
									items={[
										{label: 'One'},
										{label: 'Two'},
										{label: 'Three'},
									]}
									trigger={
										<Button displayType={null} monospaced>
											<Icon symbol="ellipsis-v" />
										</Button>
									}
								/>
							</>
						}
					>
						Root
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render with item disabled', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item>
						<TreeView.ItemStack disabled>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item disabled>Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(
			container.querySelectorAll('.treeview-link.disabled').length
		).toBe(1);
		expect(
			container.querySelectorAll('.btn.component-expander[disabled]')
				.length
		).toBe(1);
	});

	it('render with item disabled except expander', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item>
						<TreeView.ItemStack disabled expanderDisabled={false}>
							Root
						</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item disabled>Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(
			container.querySelectorAll('.treeview-link.disabled').length
		).toBe(1);
		expect(
			container.querySelector('.btn.component-expander[disabled]')
		).toBeFalsy();
	});

	it('render with checkbox', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item>
						<TreeView.ItemStack>
							<OptionalCheckbox />
							Root
						</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item>
								<OptionalCheckbox />
								Item
							</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render with text', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item>
						<TreeView.ItemStack>
							<OptionalCheckbox />
							<Text size={3} truncate>
								Root
							</Text>
						</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item>
								<OptionalCheckbox />
								<Text size={3} truncate>
									Text
								</Text>
							</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render with pre-selected items', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView defaultSelectedKeys={new Set(['Root', 'Item'])}>
					<TreeView.Item key="Root">
						<TreeView.ItemStack>
							<OptionalCheckbox />
							Root
						</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item key="Item">
								<OptionalCheckbox />
								Item
							</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(
			container.querySelectorAll(
				'input.custom-control-input[type=checkbox]:checked'
			).length
		).toBe(1);
	});

	it('render with pre-selected items with dynamic content', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView
					defaultItems={[
						{
							children: [{id: 2, name: 'Item'}],
							id: 1,
							name: 'Root',
						},
					]}
					defaultSelectedKeys={new Set([1, 2])}
				>
					{(item) => (
						<TreeView.Item>
							<TreeView.ItemStack>
								<OptionalCheckbox />
								{item.name}
							</TreeView.ItemStack>
							<TreeView.Group items={item.children}>
								{(item) => (
									<TreeView.Item>
										<OptionalCheckbox />
										{item.name}
									</TreeView.Item>
								)}
							</TreeView.Group>
						</TreeView.Item>
					)}
				</TreeView>
			</Provider>
		);

		expect(
			container.querySelectorAll(
				'input.custom-control-input[type=checkbox]:checked'
			).length
		).toBe(2);
	});

	it('render with pre-expanded items', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView defaultExpandedKeys={new Set(['Root', 'Item'])}>
					<TreeView.Item key="Root">
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item key="Item">Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(
			container.querySelector('.treeview-link.collapsed')
		).toBeTruthy();
		expect(container.querySelector('.collapse.show')).toBeTruthy();
	});

	it('render with item active', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item>
						<TreeView.ItemStack active>
							<OptionalCheckbox />
							Root
						</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item active>
								<OptionalCheckbox />
								Text
							</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
