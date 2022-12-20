/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button, {ClayButtonWithIcon} from '..';
import Icon from '@clayui/icon';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('Button', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<Button>Button</Button>);

		expect(container).toMatchSnapshot();
	});

	it('renders with a different display type', () => {
		const {container} = render(<Button displayType="link">Button</Button>);

		expect(container).toMatchSnapshot();
	});

	it('renders disabled', () => {
		const {container} = render(
			<Button disabled displayType="primary">
				Button
			</Button>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders borderless', () => {
		const {container} = render(
			<Button borderless displayType="primary">
				Button
			</Button>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders block', () => {
		const {container} = render(
			<Button block displayType="primary">
				Button
			</Button>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders outline', () => {
		const {container} = render(
			<Button displayType="primary" outline>
				Button
			</Button>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders monospaced', () => {
		const {container} = render(
			<Button displayType="primary" monospaced>
				Button
			</Button>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders small', () => {
		const {container} = render(
			<Button displayType="primary" small>
				Button
			</Button>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with a ButtonGroup', () => {
		const {container} = render(
			<Button.Group>
				<Button>Button</Button>
			</Button.Group>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ButtonGroup with spaced', () => {
		const {container} = render(
			<Button.Group spaced>
				<Button>Button</Button>
				<Button>Button</Button>
			</Button.Group>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClayButtonWithIcon', () => {
		const {container} = render(
			<ClayButtonWithIcon
				aria-label="Delete"
				spritemap="/some/path"
				symbol="trash"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClayButtonWithIcon without monospaced', () => {
		const {container} = render(
			<ClayButtonWithIcon
				aria-label="Delete"
				monospaced={false}
				spritemap="/some/path"
				symbol="trash"
			/>
		);

		expect(container).toMatchSnapshot();
	});
});

describe('Button accessibility error', () => {
	afterEach(cleanup);

	it('<Button /> with <Icon /> without an ARIA property throws an exception', () => {
		const originalError = console.error;
		console.error = jest.fn();

		render(
			<Button displayType="primary" outline>
				<Icon spritemap="icons.svg" symbol="plus" />
			</Button>
		);

		expect(console.error).toBeCalledWith(
			expect.stringContaining(
				'Button Accessibility: Component has only the Icon declared.'
			)
		);

		console.error = originalError;
	});

	it.concurrent.each(['aria-label', 'aria-labelledby'])(
		'<Button /> with <Icon /> with `%s` property does not throw an exception',
		(property) => {
			const originalError = console.error;
			console.error = jest.fn();

			const props = {
				[property]: 'some text',
			};

			render(
				<Button {...props} displayType="primary" outline>
					<Icon spritemap="icons.svg" symbol="plus" />
				</Button>
			);

			expect(console.error).not.toBeCalledWith(
				expect.stringContaining(
					'Button Accessibility: Component has only the Icon declared.'
				)
			);

			console.error = originalError;
		}
	);
});
