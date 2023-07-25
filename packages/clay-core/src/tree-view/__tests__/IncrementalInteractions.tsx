/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {ClayDropDownWithItems as DropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox as Checkbox} from '@clayui/form';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import {Icon, Provider, TreeView} from '../..';

const spritemap = 'icons.svg';

// Just to avoid TypeScript error with required props
const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

OptionalCheckbox.displayName = 'ClayCheckbox';

describe('TreeView incremental interactions', () => {
	afterEach(cleanup);

	it('expand item when click on the expander', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item key="Root">
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item key="Item">Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		const expanderButton = container.querySelector(
			'.component-expander'
		) as HTMLButtonElement;

		fireEvent.click(expanderButton);

		const linkItem = container.querySelector(
			'.treeview-link'
		) as HTMLDivElement;

		expect(linkItem.getAttribute('aria-expanded')).toBe('true');
		expect(container.querySelector('.collapse.show')).toBeTruthy();
	});

	it('hide item by clicking expander', async () => {
		jest.useFakeTimers();

		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item key="Root">
						<TreeView.ItemStack>Root</TreeView.ItemStack>
						<TreeView.Group>
							<TreeView.Item key="Item">Item</TreeView.Item>
						</TreeView.Group>
					</TreeView.Item>
				</TreeView>
			</Provider>
		);

		const expanderButton = container.querySelector(
			'.component-expander'
		) as HTMLButtonElement;

		fireEvent.click(expanderButton);

		const linkItem = container.querySelector(
			'.treeview-link'
		) as HTMLDivElement;

		expect(linkItem.getAttribute('aria-expanded')).toBe('true');
		expect(container.querySelector('.collapse.show')).toBeTruthy();

		fireEvent.click(expanderButton);

		jest.runAllTimers();

		expect(linkItem.getAttribute('aria-expanded')).toBe('false');
		expect(container.querySelector('.collapse')).toBeFalsy();
	});

	it('expand the item using the api', () => {
		const {container} = render(
			<Provider spritemap={spritemap}>
				<TreeView
					defaultItems={[
						{
							children: [
								{id: 2, name: 'Item 0'},
								{
									children: [
										{id: 4, name: 'Item 2'},
										{id: 5, name: 'Item 3'},
									],
									id: 3,
									name: 'Item 1',
								},
							],
							id: 1,
							name: 'Root',
						},
					]}
				>
					{(item, _selection, expand) => (
						<TreeView.Item>
							<TreeView.ItemStack
								onClick={(event) => {
									event.preventDefault();

									// @ts-ignore
									if (event.detail === 2) {
										expand.toggle(item.id);
									}
								}}
							>
								{item.name}
							</TreeView.ItemStack>
							<TreeView.Group items={item.children}>
								\
								{(item) => (
									<TreeView.Item>{item.name}</TreeView.Item>
								)}
							</TreeView.Group>
						</TreeView.Item>
					)}
				</TreeView>
			</Provider>
		);

		const linkItem = container.querySelector(
			'.treeview-link'
		) as HTMLDivElement;

		fireEvent.click(linkItem, {detail: 2});

		expect(linkItem.getAttribute('aria-expanded')).toBe('true');
		expect(container.querySelector('.collapse.show')).toBeTruthy();
	});

	describe('selection', () => {
		describe('checkbox', () => {
			it("uncheck the checkbox when a sibling item is indeterminate preserve the parent's indeterminate state", () => {
				const {container} = render(
					<Provider spritemap={spritemap}>
						<TreeView
							defaultItems={[
								{
									children: [
										{id: 2, name: 'Item 0'},
										{
											children: [
												{id: 4, name: 'Item 2'},
												{id: 5, name: 'Item 3'},
											],
											id: 3,
											name: 'Item 1',
										},
									],
									id: 1,
									name: 'Root',
								},
							]}
							defaultSelectedKeys={new Set([2, 4])}
							selectionMode="multiple-recursive"
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

				const checkboxsChecked =
					container.querySelectorAll<HTMLInputElement>(
						'input.custom-control-input[type=checkbox]:checked'
					);

				const checkboxsIndeterminate =
					container.querySelectorAll<HTMLInputElement>(
						'input.custom-control-input[type=checkbox]:indeterminate'
					);

				expect(checkboxsChecked.length).toBe(2);
				expect(checkboxsIndeterminate.length).toBe(2);

				const [, item0] = container.querySelectorAll<HTMLInputElement>(
					'input.custom-control-input[type=checkbox]'
				);

				fireEvent.click(item0!);

				expect(item0!.checked).toBeFalsy();
				expect(
					container.querySelectorAll<HTMLInputElement>(
						'input.custom-control-input[type=checkbox]:indeterminate'
					).length
				).toBe(2);
			});

			it('select only one item using single selection', () => {
				const {container} = render(
					<Provider spritemap={spritemap}>
						<TreeView defaultExpandedKeys={new Set(['Root'])}>
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

				const [root, item] =
					container.querySelectorAll<HTMLInputElement>(
						'input.custom-control-input[type=checkbox]'
					);

				fireEvent.click(root!);

				expect(root!.checked).toBeTruthy();

				fireEvent.click(item!);

				expect(item!.checked).toBeTruthy();
				expect(root!.checked).toBeFalsy();
			});

			it('select multiple item using multiple selection', () => {
				const {container} = render(
					<Provider spritemap={spritemap}>
						<TreeView
							defaultExpandedKeys={new Set(['Root'])}
							selectionMode="multiple"
						>
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

				const [root, item] =
					container.querySelectorAll<HTMLInputElement>(
						'input.custom-control-input[type=checkbox]'
					);

				fireEvent.click(root!);
				fireEvent.click(item!);

				expect(item!.checked).toBeTruthy();
				expect(root!.checked).toBeTruthy();
			});

			it('select children and parent recursively using recursive multiple selection', () => {
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
							selectionMode="multiple-recursive"
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

				const rootExpander = container.querySelector(
					'.component-expander'
				) as HTMLButtonElement;

				const root = container.querySelector(
					'input.custom-control-input[type=checkbox]'
				) as HTMLInputElement;

				fireEvent.click(root);
				fireEvent.click(rootExpander);

				expect(root.checked).toBeTruthy();

				const [, item] = container.querySelectorAll<HTMLInputElement>(
					'input.custom-control-input[type=checkbox]'
				);

				expect(item!.checked).toBeTruthy();
			});

			it('pressing space selects item', () => {
				const {container, getByRole} = render(
					<Provider spritemap={spritemap}>
						<TreeView>
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

				const root = getByRole('treeitem');

				const rootCheckbox = container.querySelector(
					'input.custom-control-input[type=checkbox]'
				) as HTMLInputElement;

				fireEvent.keyDown(root, {key: ' '});

				expect(rootCheckbox.checked).toBeTruthy();
			});
		});

		it('clicking the item link selects the item in the single selection', () => {
			const {getAllByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const [root, item] = getAllByRole('treeitem');

			fireEvent.click(root!);

			expect(root!.classList).toContain('active');

			fireEvent.click(item!);

			expect(item!.classList).toContain('active');
			expect(root!.classList).not.toContain('active');
		});

		it('trigger selection manually using single selection', () => {
			jest.useFakeTimers();

			const {getAllByRole, getByTestId} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item, selection) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
									<Button
										data-testid="root"
										onClick={() =>
											selection.toggle(item.id)
										}
									>
										Select
									</Button>
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
											<Button
												data-testid="item"
												onClick={() =>
													selection.toggle(item.id)
												}
											>
												Select
											</Button>
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			jest.runAllTimers();

			const [root, item] = getAllByRole('treeitem');

			fireEvent.click(getByTestId('root'));

			expect(root!.classList).toContain('active');

			fireEvent.click(getByTestId('item'));

			expect(item!.classList).toContain('active');
			expect(root!.classList).not.toContain('active');
		});

		it('trigger selection manually using multiple selection', () => {
			jest.useFakeTimers();

			const {getAllByRole, getByTestId} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
						selectionMode="multiple"
					>
						{(item, selection) => (
							<TreeView.Item>
								<TreeView.ItemStack
									className={
										selection.has(item.id)
											? 'active'
											: undefined
									}
								>
									{item.name}
									<Button
										data-testid="root"
										onClick={(event) => {
											event.stopPropagation();

											selection.toggle(item.id);
										}}
									>
										Select
									</Button>
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item
											className={
												selection.has(item.id)
													? 'active'
													: undefined
											}
										>
											{item.name}
											<Button
												data-testid="item"
												onClick={(event) => {
													event.stopPropagation();

													selection.toggle(item.id);
												}}
											>
												Select
											</Button>
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			jest.runAllTimers();

			const [root, item] = getAllByRole('treeitem');

			fireEvent.click(getByTestId('root'));
			fireEvent.click(getByTestId('item'));

			expect(item!.classList).toContain('active');
			expect(root!.classList).toContain('active');
		});

		it('trigger selection manually using recursive multiple selection', () => {
			const {getAllByRole, getByTestId} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
						selectionMode="multiple-recursive"
					>
						{(item, selection) => (
							<TreeView.Item>
								<TreeView.ItemStack
									className={
										selection.has(item.id)
											? 'active'
											: undefined
									}
								>
									{item.name}
									<Button
										data-testid="root"
										onClick={(event) => {
											event.stopPropagation();

											selection.toggle(item.id);
										}}
									>
										Select
									</Button>
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item
											className={
												selection.has(item.id)
													? 'active'
													: undefined
											}
										>
											{item.name}
											<Button
												data-testid="item"
												onClick={(event) => {
													event.stopPropagation();

													selection.toggle(item.id);
												}}
											>
												Select
											</Button>
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const [root, item] = getAllByRole('treeitem');

			fireEvent.click(getByTestId('root'));

			expect(item!.classList).toContain('active');
			expect(root!.classList).toContain('active');
		});
	});

	describe('focus', () => {
		it('pressing the right arrow key expands the item', () => {
			const {container, getByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const root = getByRole('treeitem');

			fireEvent.keyDown(root, {key: 'ArrowRight'});

			expect(document.activeElement).toBe(root);
			expect(root.getAttribute('aria-expanded')).toBe('true');
			expect(container.querySelector('.collapse.show')).toBeTruthy();
		});

		it('pressing the right arrow key with the expanded item moves focus to the nearest down item', () => {
			const {getAllByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const [root, item] = getAllByRole('treeitem');

			fireEvent.keyDown(root!, {key: 'ArrowRight'});

			expect(document.activeElement).toBe(item);
		});

		it('pressing the left arrow key hides the item', () => {
			jest.useFakeTimers();

			const {container, getByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const root = getByRole('treeitem');

			fireEvent.keyDown(root, {key: 'ArrowRight'});

			expect(root.getAttribute('aria-expanded')).toBe('true');
			expect(container.querySelector('.collapse.show')).toBeTruthy();

			fireEvent.keyDown(root, {key: 'ArrowLeft'});

			jest.runAllTimers();

			expect(root.getAttribute('aria-expanded')).toBe('false');
			expect(container.querySelector('.collapse.show')).toBeFalsy();
		});

		it('pressing the left arrow key with the item hidden moves the focus to the next item above', () => {
			const {getAllByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [
									{
										children: [{id: 3, name: 'Item 2'}],
										id: 2,
										name: 'Item',
									},
								],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const [root, item] = getAllByRole('treeitem');

			fireEvent.keyDown(item!, {key: 'ArrowLeft'});

			expect(document.activeElement).toBe(root);
		});

		it('pressing the down key moves focus to the nearest item', () => {
			const {container, getByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const root = getByRole('treeitem');

			fireEvent.keyDown(root, {key: 'ArrowRight'});

			expect(root.getAttribute('aria-expanded')).toBe('true');
			expect(container.querySelector('.collapse.show')).toBeTruthy();

			fireEvent.keyDown(root, {key: 'ArrowDown'});

			const group = getByRole('group');

			expect(document.activeElement).toBe(
				group.querySelector('.treeview-link')
			);
		});

		it('pressing the up key moves focus to the nearest item', () => {
			jest.useFakeTimers();

			const {getAllByRole} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [
									{id: 2, name: 'Bar'},
									{id: 3, name: 'Baz'},
								],
								id: 1,
								name: 'Foo',
							},
						]}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			jest.runAllTimers();

			const [foo, bar, baz] = getAllByRole('treeitem');

			fireEvent.keyDown(foo!, {key: 'ArrowRight'});

			fireEvent.keyDown(foo!, {key: 'ArrowDown'});

			fireEvent.keyDown(baz!, {key: 'ArrowUp'});

			expect(document.activeElement).toBe(bar);

			fireEvent.keyDown(bar!, {key: 'ArrowUp'});

			expect(document.activeElement).toBe(foo);
		});
	});

	describe('load more', () => {
		it('clicking on the item should load the children asynchronously', async () => {
			const {getAllByRole, getByText} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
						onLoadMore={async () => {
							return [
								{
									id: 3,
									name: 'Item 2',
								},
							];
						}}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const [, item] = getAllByRole('treeitem');

			fireEvent.click(item!);

			await waitFor(() => getByText('Item 2'));

			const [, , random] = getAllByRole('treeitem');

			expect(random).toBeTruthy();
		});

		it('pressing the right arrow key loads the item asynchronously', async () => {
			const {getAllByRole, getByText} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
						onLoadMore={async () => {
							return [
								{
									id: 3,
									name: 'Item 2',
								},
							];
						}}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const [, item] = getAllByRole('treeitem');

			fireEvent.keyDown(item!, {key: 'ArrowRight'});

			await waitFor(() => getByText('Item 2'));

			const [, , random] = getAllByRole('treeitem');

			expect(random).toBeTruthy();
		});

		it('loading item dynamically disable checkbox selection', async () => {
			const {container, getAllByRole, getByText} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
						onLoadMore={async () => {
							return [
								{
									id: 3,
									name: 'Item 2',
								},
							];
						}}
					>
						{(item) => (
							<TreeView.Item>
								<TreeView.ItemStack>
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

			const [, item] = getAllByRole('treeitem');

			fireEvent.click(item!);

			expect(
				container.querySelectorAll(
					'input.custom-control-input[type=checkbox]:disabled'
				).length
			).toBe(1);
			expect(container.querySelector('.loading-animation')).toBeTruthy();

			await waitFor(() => getByText('Item 2'));

			const [, , random] = getAllByRole('treeitem');

			expect(random).toBeTruthy();
		});

		it('load paginated data for a specific item', async () => {
			const data = [
				[
					{
						id: 3,
						name: 'Item 2',
					},
					{
						id: 4,
						name: 'Item 3',
					},
				],
				[
					{
						id: 5,
						name: 'Item 4',
					},
					{
						id: 6,
						name: 'Item 5',
					},
				],
			];

			const {getAllByRole, getByText} = render(
				<Provider spritemap={spritemap}>
					<TreeView
						defaultExpandedKeys={new Set([1])}
						defaultItems={[
							{
								children: [{id: 2, name: 'Item'}],
								id: 1,
								name: 'Root',
							},
						]}
						onLoadMore={async (_item, cursor: number = 0) => {
							const fakeData = data[cursor]!;
							const next = cursor + 1;

							if (cursor === null) {
								return;
							}

							return {
								cursor: next <= fakeData!.length ? next : null,
								items: fakeData,
							};
						}}
					>
						{(item, _selection, expand, load) => (
							<TreeView.Item>
								<TreeView.ItemStack>
									{item.name}
								</TreeView.ItemStack>
								<TreeView.Group items={item.children}>
									{(item) => (
										<TreeView.Item>
											{item.name}
										</TreeView.Item>
									)}
								</TreeView.Group>

								{expand.has(item.id) &&
									load.get(item.id) !== null && (
										<Button
											borderless
											displayType="secondary"
											onClick={() =>
												load.loadMore(item.id, item)
											}
										>
											Load more results
										</Button>
									)}
							</TreeView.Item>
						)}
					</TreeView>
				</Provider>
			);

			const loadMoreButton = getByText('Load more results');

			fireEvent.click(loadMoreButton);

			await waitFor(() => getByText('Item 2'));

			const [, , item2, item3] = getAllByRole('treeitem');

			expect(item2).toBeDefined();
			expect(item3).toBeDefined();

			fireEvent.click(loadMoreButton);

			await waitFor(() => getByText('Item 4'));

			const [, , , , item4, item5] = getAllByRole('treeitem');

			expect(item4).toBeDefined();
			expect(item5).toBeDefined();
		});
	});

	it('clicking the action with DropDown should stay visible', () => {
		const {getAllByRole} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item
						actions={
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
						}
					>
						Item 1
					</TreeView.Item>
					<TreeView.Item>Item 2</TreeView.Item>
				</TreeView>
			</Provider>
		);

		const [item1, item2] = getAllByRole('treeitem');

		expect(item1!.classList).not.toContain('focus');

		fireEvent.focus(item1!);

		expect(item1!.classList).toContain('focus');

		const [button1] = getAllByRole('button');

		fireEvent.click(button1!);

		expect(button1!.getAttribute('aria-expanded')).toBe('true');
		expect(item1!.classList).toContain('focus');

		userEvent.click(item2!);

		expect(button1!.getAttribute('aria-expanded')).toBe('false');
		expect(item1!.classList).not.toContain('focus');
	});

	it('focus on item with action and move focus to another element the action should not be visible', () => {
		const {getAllByRole} = render(
			<Provider spritemap={spritemap}>
				<TreeView>
					<TreeView.Item
						actions={
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
						}
					>
						Item 1
					</TreeView.Item>
					<TreeView.Item>Item 2</TreeView.Item>
				</TreeView>
			</Provider>
		);

		const [item1, item2] = getAllByRole('treeitem');

		expect(item1!.classList).not.toContain('focus');

		userEvent.tab();

		expect(item1!.classList).toContain('focus');

		userEvent.click(item2!);

		expect(item1!.classList).not.toContain('focus');
		expect(item2!.classList).not.toContain('focus');
	});
});
