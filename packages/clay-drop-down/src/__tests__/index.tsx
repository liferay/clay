/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown, {ClayDropDownWithItems} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			onActiveChange={(val) => setActive(val)}
			trigger={<button>{'Click Me'}</button>}
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

		expect(document.body.querySelector('.dropdown-menu')).not.toContain(
			'show'
		);
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

				<div data-testid="OUTSIDE_ELEMENT">{'outside item'}</div>
			</div>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');

		const outsideElement = getByTestId('OUTSIDE_ELEMENT');

		fireEvent.mouseDown(outsideElement as HTMLDivElement, {});

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

				<button data-testid="BUTTON_OUTSIDE">{'outside item'}</button>
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
				trigger={<button>{'Click Me'}</button>}
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
});
