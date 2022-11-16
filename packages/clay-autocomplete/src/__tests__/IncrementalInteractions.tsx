/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* eslint-disable react/display-name */
import ClayAutocomplete from '..';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const messages = {
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

		userEvent.click(input);

		expect(input).toBeDefined();

		const listbox = getByRole('listbox', {hidden: true});

		expect(listbox.parentElement!.classList).not.toContain('show');
		expect(listbox.children.length).toBe(3);

		const [one, two, three] = getAllByRole('option', {hidden: true});

		expect(one).toBeDefined();
		expect(two).toBeDefined();
		expect(three).toBeDefined();
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
				{(item) => (
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

		userEvent.type(input, 't');

		const [two] = getAllByRole('option');

		userEvent.click(two);

		expect(
			document.querySelector('.dropdown-menu')!.classList
		).not.toContain('show');
		expect(input.value).toBe('two');
	});

	it('press enter close the menu', () => {
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

		userEvent.type(input, 't');

		const listbox = getByRole('listbox');

		expect(listbox.parentElement!.classList).toContain('show');

		userEvent.keyboard('[Enter]');

		expect(listbox.parentElement!.classList).not.toContain('show');
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

		userEvent.type(input, 't');

		expect(input).toEqual(document.activeElement);

		userEvent.tab();

		const [two] = getAllByRole('option');

		expect(two).toEqual(document.activeElement);

		userEvent.keyboard('[ArrowLeft]');

		expect(input).toEqual(document.activeElement);

		userEvent.tab();

		expect(two).toEqual(document.activeElement);

		userEvent.keyboard('[ArrowRight]');

		expect(input).toEqual(document.activeElement);
	});

	describe('Selected option', () => {
		it('pressing esc closes the menu', () => {
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

			userEvent.type(input, 't');

			const listbox = getByRole('listbox');

			expect(listbox.parentElement!.classList).toContain('show');

			const [two] = getAllByRole('option');

			userEvent.click(two);

			expect(listbox.parentElement!.classList).not.toContain('show');
			expect(input.value).toBe('two');

			userEvent.type(input, 'oo');

			expect(input.value).toBe('twooo');
			expect(listbox.parentElement!.classList).toContain('show');

			userEvent.keyboard('[Escape]');

			expect(input.value).toBe('two');
			expect(listbox.parentElement!.classList).not.toContain('show');
		});

		it('clicking outside closes the menu', () => {
			const {getAllByRole, getByRole} = render(
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

			userEvent.type(input, 't');

			const listbox = getByRole('listbox');

			expect(listbox.parentElement!.classList).toContain('show');

			const [two] = getAllByRole('option');

			userEvent.click(two);

			expect(listbox.parentElement!.classList).not.toContain('show');
			expect(input.value).toBe('two');

			userEvent.type(input, 'oo');

			expect(input.value).toBe('twooo');
			expect(listbox.parentElement!.classList).toContain('show');

			const buttonOutside = getByRole('button', {hidden: true});

			userEvent.click(buttonOutside);

			expect(input.value).toBe('two');
			expect(listbox.parentElement!.classList).not.toContain('show');
		});

		it('moving the focus outside of autocomplete closes the menu', () => {
			const {getAllByRole, getByRole} = render(
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

			userEvent.type(input, 't');

			const listbox = getByRole('listbox');

			expect(listbox.parentElement!.classList).toContain('show');

			const [two] = getAllByRole('option');

			userEvent.click(two);

			expect(listbox.parentElement!.classList).not.toContain('show');
			expect(input.value).toBe('two');

			userEvent.type(input, 'oo');

			expect(input.value).toBe('twooo');
			expect(listbox.parentElement!.classList).toContain('show');

			userEvent.tab();

			expect(input.value).toBe('two');
			expect(listbox.parentElement!.classList).not.toContain('show');
		});
	});

	describe('Option not selected', () => {
		it('pressing esc closes the menu', () => {
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

			userEvent.type(input, 't');

			const listbox = getByRole('listbox');

			expect(listbox.parentElement!.classList).toContain('show');

			userEvent.keyboard('[Escape]');

			expect(input.value).toBe('');
			expect(listbox.parentElement!.classList).not.toContain('show');
		});

		it('clicking outside closes the menu', () => {
			const {getByRole} = render(
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

			userEvent.type(input, 't');

			const listbox = getByRole('listbox');

			expect(listbox.parentElement!.classList).toContain('show');

			const buttonOutside = getByRole('button', {hidden: true});

			userEvent.click(buttonOutside);

			expect(input.value).toBe('');
			expect(listbox.parentElement!.classList).not.toContain('show');
		});

		it('moving the focus outside of autocomplete closes the menu', () => {
			const {getByRole} = render(
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

			userEvent.type(input, 't');

			const listbox = getByRole('listbox');

			expect(listbox.parentElement!.classList).toContain('show');

			userEvent.tab();
			userEvent.tab();
			userEvent.tab();

			expect(input.value).toBe('');
			expect(listbox.parentElement!.classList).not.toContain('show');
		});
	});
});
