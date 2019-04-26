/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayDropDown from '..';
import {cleanup, fireEvent, render} from 'react-testing-library';

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			onActiveChange={val => setActive(val)}
			trigger={<button>{'Click Me'}</button>}
		>
			{children}
		</ClayDropDown>
	);
};

describe('ClayDropDown', () => {
	afterEach(cleanup);

	it('renders without menu', () => {
		const {container} = render(
			<DropDownWithState>
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
			</DropDownWithState>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders dropdown menu when clicked', () => {
		const {container} = render(
			<DropDownWithState>
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
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(document.querySelector('.dropdown-menu')).toBeTruthy();
		expect(container).toMatchSnapshot();
	});

	it('hides dropdown when clicking outside', () => {
		const {container, getByTestId} = render(
			<div>
				<DropDownWithState>
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
				</DropDownWithState>

				<div data-testid="OUTSIDE_ELEMENT">{'outside item'}</div>
			</div>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(document.querySelector('.dropdown-menu')).toBeTruthy();

		const outsideElement = getByTestId('OUTSIDE_ELEMENT');

		fireEvent.mouseDown(outsideElement as HTMLDivElement, {});

		expect(document.querySelector('.dropdown-menu')).toBeFalsy();
	});

	it('renders with search input', () => {
		const {container} = render(
			<DropDownWithState>
				<ClayDropDown.Search
					onChange={() => {}}
					spritemap="/foo/bar"
					value="test"
				/>

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
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(container).toMatchSnapshot();
	});

	it('renders with icons', () => {
		const {container} = render(
			<DropDownWithState hasLeftSymbols hasRightSymbols>
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
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(container).toMatchSnapshot();
	});

	it('renders with groups', () => {
		const {container} = render(
			<DropDownWithState>
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
			</DropDownWithState>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		expect(container).toMatchSnapshot();
	});
});
