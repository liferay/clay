/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const messages = {
	listCount: '{0} option available.',
	listCountPlural: '{0} options available.',
	loading: 'Loading...',
	notFound: 'No results found',
};

global.ResizeObserver = require('resize-observer-polyfill');

/**
 * Incremental iteration tests for the new autocomplete behavior.
 */
describe('Autocomplete incremental interactions', () => {
	afterEach(cleanup);

	it('render default component', () => {
		const {getByRole, queryByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);

		expect(input).toBeDefined();

		const listbox = queryByRole('listbox');

		expect(listbox).toBeFalsy();
	});

	it('typing a value in the input shows the menu', () => {
		const {getAllByRole, getByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox');

		userEvent.type(input, 't');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');

		const [two, three] = getAllByRole('option');

		expect(two).toBeDefined();
		expect(three).toBeDefined();
	});

	it('typing a value that does not exist shows the menu with results not found', () => {
		const {getByRole} = render(
			<ClayAutocomplete
				defaultItems={['one', 'two', 'three']}
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{(item: any) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				)}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox');

		userEvent.type(input, 'fou');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');

		const notFound = getByRole('option');

		expect(notFound).toBeDefined();
		expect(notFound.innerHTML).toBe(messages.notFound);
	});

	it('typing the value should filter the options in the menu', () => {
		const {getAllByRole, getByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox');

		userEvent.type(input, 't');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');
		expect(listbox.children.length).toBe(2);

		const [two, three] = getAllByRole('option');

		expect(two).toBeDefined();
		expect(three).toBeDefined();

		userEvent.clear(input);
		userEvent.type(input, 'two');

		const [two2] = getAllByRole('option');

		expect(listbox.children.length).toBe(1);
		expect(two2).toBeDefined();
	});

	it('entering the value and clearing the value shows the menu with all options', () => {
		const {getAllByRole, getByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox');

		userEvent.type(input, 't');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');
		expect(listbox.children.length).toBe(2);

		const [two, three] = getAllByRole('option');

		expect(two).toBeDefined();
		expect(three).toBeDefined();

		userEvent.clear(input);

		const [one, two2, three2] = getAllByRole('option');

		expect(listbox.children.length).toBe(3);
		expect(one).toBeDefined();
		expect(two2).toBeDefined();
		expect(three2).toBeDefined();
	});

	it('focus on input shows display if configured', () => {
		const {getByRole} = render(
			<ClayAutocomplete
				menuTrigger="focus"
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox');

		userEvent.click(input);

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');
		expect(listbox.children.length).toBe(3);
	});

	it('clicking option closes the menu and adds the value of the selected item', () => {
		const {getAllByRole, getByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);
		userEvent.type(input, 't');

		const [two] = getAllByRole('option');

		fireEvent.click(two!);

		expect(document.querySelector('.dropdown-menu')).toBeFalsy();
		expect(input.value).toBe('two');
	});

	it('press enter close the menu', () => {
		const {getByRole, queryByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);
		userEvent.type(input, 't');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');

		userEvent.keyboard('[Enter]');

		expect(queryByRole('listbox')).toBeFalsy();
	});

	it('pressing alt + key down shows the menu if not open', () => {
		const {getByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);

		userEvent.keyboard('{Alt>}{ArrowDown/}');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');
	});

	it('pressing left or right arrow key moves focus to input', () => {
		const {getAllByRole, getByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);
		userEvent.type(input, 't');

		expect(input).toEqual(document.activeElement);

		userEvent.keyboard('[ArrowDown]');

		expect(getAllByRole('option')[0]!.getAttribute('aria-selected')).toBe(
			'true'
		);

		userEvent.keyboard('[ArrowLeft]');

		expect(getAllByRole('option')[0]!.getAttribute('aria-selected')).toBe(
			'false'
		);

		userEvent.keyboard('[ArrowDown]');

		expect(getAllByRole('option')[0]!.getAttribute('aria-selected')).toBe(
			'true'
		);

		userEvent.keyboard('[ArrowRight]');

		expect(getAllByRole('option')[0]!.getAttribute('aria-selected')).toBe(
			'false'
		);
	});

	it('pressing the up arrow key opens the menu and moves the visual focus to the last element in the list', () => {
		const {getAllByRole, getByRole, queryByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);
		userEvent.keyboard('[ArrowUp]');

		expect(queryByRole('listbox')).toBeDefined();
		expect(input.getAttribute('aria-activedescendant')).toBe('three');
		expect(getAllByRole('option')[2]!.getAttribute('aria-selected')).toBe(
			'true'
		);
	});

	it('pressing the down arrow key opens the menu and moves the visual focus to the first element in the list', () => {
		const {getAllByRole, getByRole, queryByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);
		userEvent.keyboard('[ArrowDown]');

		expect(queryByRole('listbox')).toBeDefined();
		expect(input.getAttribute('aria-activedescendant')).toBe('one');
		expect(getAllByRole('option')[0]!.getAttribute('aria-selected')).toBe(
			'true'
		);
	});

	it('cycle through options in loop when run out of options', () => {
		const {getByRole, queryByRole} = render(
			<ClayAutocomplete
				messages={messages}
				placeholder="Enter a number from One to Five"
			>
				{['one', 'two', 'three'].map((item) => (
					<ClayAutocomplete.Item key={item}>
						{item}
					</ClayAutocomplete.Item>
				))}
			</ClayAutocomplete>
		);

		const input = getByRole('combobox') as HTMLInputElement;

		userEvent.click(input);
		userEvent.keyboard('[ArrowDown]');

		expect(queryByRole('listbox')).toBeDefined();
		expect(input.getAttribute('aria-activedescendant')).toBe('one');

		userEvent.keyboard('[ArrowDown]');

		expect(input.getAttribute('aria-activedescendant')).toBe('two');

		userEvent.keyboard('[ArrowDown]');

		expect(input.getAttribute('aria-activedescendant')).toBe('three');

		userEvent.keyboard('[ArrowDown]');

		expect(input.getAttribute('aria-activedescendant')).toBe('one');

		userEvent.keyboard('[ArrowUp]');

		expect(input.getAttribute('aria-activedescendant')).toBe('three');
	});

	describe('Selected option', () => {
		it('pressing esc closes the menu', () => {
			const {getAllByRole, getByRole, queryByRole} = render(
				<ClayAutocomplete
					messages={messages}
					placeholder="Enter a number from One to Five"
				>
					{['one', 'two', 'three'].map((item) => (
						<ClayAutocomplete.Item key={item}>
							{item}
						</ClayAutocomplete.Item>
					))}
				</ClayAutocomplete>
			);

			const input = getByRole('combobox') as HTMLInputElement;

			userEvent.click(input);
			userEvent.type(input, 't');

			expect(getByRole('listbox')).toBeDefined();

			const [two] = getAllByRole('option');

			fireEvent.click(two!);

			expect(queryByRole('listbox')).toBeFalsy();
			expect(input.value).toBe('two');

			userEvent.type(input, 'oo');

			expect(input.value).toBe('twooo');
			expect(getByRole('option').textContent).toBe(messages.notFound);

			userEvent.keyboard('[Escape]');

			expect(input.value).toBe('two');
			expect(queryByRole('listbox')).toBeFalsy();
		});

		it('clicking outside closes the menu', () => {
			const {getAllByRole, getByRole, queryByRole} = render(
				<>
					<ClayAutocomplete
						messages={messages}
						placeholder="Enter a number from One to Five"
					>
						{['one', 'two', 'three'].map((item) => (
							<ClayAutocomplete.Item key={item}>
								{item}
							</ClayAutocomplete.Item>
						))}
					</ClayAutocomplete>
					<button type="button">Click outside</button>
				</>
			);

			const input = getByRole('combobox') as HTMLInputElement;

			userEvent.click(input);
			userEvent.type(input, 't');

			expect(getByRole('listbox')).toBeDefined();

			const [two] = getAllByRole('option');

			fireEvent.click(two!);

			expect(queryByRole('listbox')).toBeFalsy();
			expect(input.value).toBe('two');

			userEvent.type(input, 'oo');

			expect(input.value).toBe('twooo');
			expect(getByRole('option').textContent).toBe(messages.notFound);

			const buttonOutside = getByRole('button', {hidden: true});

			userEvent.click(buttonOutside);

			expect(input.value).toBe('two');
			expect(queryByRole('listbox')).toBeFalsy();
		});

		it('moving the focus outside of autocomplete closes the menu', () => {
			const {getAllByRole, getByRole, queryByRole} = render(
				<>
					<ClayAutocomplete
						messages={messages}
						placeholder="Enter a number from One to Five"
					>
						{['one', 'two', 'three'].map((item) => (
							<ClayAutocomplete.Item key={item}>
								{item}
							</ClayAutocomplete.Item>
						))}
					</ClayAutocomplete>
					<button type="button">Click outside</button>
				</>
			);

			const input = getByRole('combobox') as HTMLInputElement;

			userEvent.click(input);
			userEvent.type(input, 't');

			expect(getByRole('listbox')).toBeDefined();

			const [two] = getAllByRole('option');

			fireEvent.click(two!);

			expect(queryByRole('listbox')).toBeFalsy();
			expect(input.value).toBe('two');

			userEvent.type(input, 'oo');

			expect(input.value).toBe('twooo');
			expect(getByRole('option').textContent).toBe(messages.notFound);

			userEvent.tab();

			expect(input.value).toBe('two');
			expect(queryByRole('listbox')).toBeFalsy();
		});
	});

	describe('Option not selected', () => {
		it('pressing esc closes the menu', () => {
			const {getByRole, queryByRole} = render(
				<ClayAutocomplete
					messages={messages}
					placeholder="Enter a number from One to Five"
				>
					{['one', 'two', 'three'].map((item) => (
						<ClayAutocomplete.Item key={item}>
							{item}
						</ClayAutocomplete.Item>
					))}
				</ClayAutocomplete>
			);

			const input = getByRole('combobox') as HTMLInputElement;

			userEvent.click(input);
			userEvent.type(input, 't');

			expect(getByRole('listbox')).toBeDefined();

			userEvent.keyboard('[Escape]');

			expect(input.value).toBe('');
			expect(queryByRole('listbox')).toBeFalsy();
		});

		it('clicking outside closes the menu', () => {
			const {getByRole, queryByRole} = render(
				<>
					<ClayAutocomplete
						messages={messages}
						placeholder="Enter a number from One to Five"
					>
						{['one', 'two', 'three'].map((item) => (
							<ClayAutocomplete.Item key={item}>
								{item}
							</ClayAutocomplete.Item>
						))}
					</ClayAutocomplete>
					<button type="button">Click outside</button>
				</>
			);

			const input = getByRole('combobox') as HTMLInputElement;

			userEvent.click(input);
			userEvent.type(input, 't');

			expect(getByRole('listbox')).toBeDefined();

			const buttonOutside = getByRole('button', {hidden: true});

			userEvent.click(buttonOutside);

			expect(input.value).toBe('');
			expect(queryByRole('listbox')).toBeFalsy();
		});

		it('moving the focus outside of autocomplete closes the menu', () => {
			const {getByRole, queryByRole} = render(
				<>
					<ClayAutocomplete
						messages={messages}
						placeholder="Enter a number from One to Five"
					>
						{['one', 'two', 'three'].map((item) => (
							<ClayAutocomplete.Item key={item}>
								{item}
							</ClayAutocomplete.Item>
						))}
					</ClayAutocomplete>
					<button type="button">Click outside</button>
				</>
			);

			const input = getByRole('combobox') as HTMLInputElement;

			userEvent.click(input);
			userEvent.type(input, 't');

			expect(getByRole('listbox')).toBeDefined();

			userEvent.tab();

			expect(input.value).toBe('');
			expect(queryByRole('listbox')).toBeFalsy();
		});
	});

	describe('Primary Action interactions', () => {
		it('renders', async () => {
			const {getByRole, getByText} = render(
				<ClayAutocomplete
					messages={messages}
					placeholder="Enter a number from One to Five"
					primaryAction={{
						label: 'Create',
						onClick: () => {},
					}}
				>
					{['one', 'two', 'three'].map((item) => (
						<ClayAutocomplete.Item key={item}>
							{item}
						</ClayAutocomplete.Item>
					))}
				</ClayAutocomplete>
			);

			const input = getByRole('combobox');

			userEvent.click(input);
			userEvent.type(input, '{arrowdown}');

			expect(getByText('Create')).toBeTruthy();
		});

		it('onClick fires when item is selected', async () => {
			const onClickMock = jest.fn();

			const {getByRole} = render(
				<ClayAutocomplete
					primaryAction={{
						label: 'Create',
						onClick: onClickMock,
					}}
				>
					{['one', 'two', 'three'].map((item) => (
						<ClayAutocomplete.Item key={item}>
							{item}
						</ClayAutocomplete.Item>
					))}
				</ClayAutocomplete>
			);

			const input = getByRole('combobox');

			userEvent.click(input);
			userEvent.type(input, '{arrowdown}');
			userEvent.type(input, '{enter}');

			expect(onClickMock).toHaveBeenCalled();
		});

		it('renders when autocomplete uses dynamic rendering', async () => {
			const onClickMock = jest.fn();

			const {getByRole, getByText} = render(
				<ClayAutocomplete
					defaultItems={['one', 'two', 'three']}
					primaryAction={{
						label: 'Create',
						onClick: onClickMock,
					}}
				>
					{(item) => (
						<ClayAutocomplete.Item key={item}>
							{item}
						</ClayAutocomplete.Item>
					)}
				</ClayAutocomplete>
			);

			expect(onClickMock).not.toHaveBeenCalled();

			const input = getByRole('combobox');

			userEvent.click(input);

			userEvent.type(input, '{arrowdown}');

			expect(getByText('Create')).toBeTruthy();

			userEvent.type(input, '{enter}');
			expect(onClickMock).toHaveBeenCalled();
		});
	});
});
