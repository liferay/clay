/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayColorPicker from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

import getMouseEvent from '../../tests-util';

const mockClientRect = (element: HTMLElement) => {
	element.getBoundingClientRect = () => ({
		bottom: 0,
		height: 128,
		left: 0,
		right: 0,
		top: 0,
		width: 144,
		x: 0,
		y: 0,
	});
};

describe('Rendering', () => {
	afterEach(cleanup);

	it('default', () => {
		render(
			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={() => {}}
				spritemap="/test/path"
				title="Default"
				value="FFF"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('opens color picker drop down when clicked', () => {
		const {container} = render(
			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={() => {}}
				spritemap="/test/path"
				title="Default"
				value="FFF"
			/>
		);

		const dropdownToggle = container.querySelector('.dropdown-toggle');

		fireEvent.click(dropdownToggle as HTMLButtonElement, {});

		expect(document.querySelector('.dropdown-menu')!.classList).toContain(
			'show'
		);
	});

	it('opens custom color picker drop down when clicked', () => {
		const {container} = render(
			<ClayColorPicker
				colors={['000000', '00FFFF', '0000FF']}
				label="Custom Colors"
				name="colorPicker2"
				onColorsChange={() => {}}
				onValueChange={() => {}}
				spritemap="/test/path"
				title="Custom Colors"
				value="008000"
			/>
		);

		const dropdownToggle = container.querySelector('.dropdown-toggle');

		fireEvent.click(dropdownToggle as HTMLButtonElement, {});

		expect(container).toMatchSnapshot();

		const colorEditorToggle = (document.body as HTMLElement).querySelector(
			'.clay-color-header button'
		);

		fireEvent.click(colorEditorToggle as HTMLButtonElement, {});

		expect(
			document.querySelector('clay-color-dropdown-menu')
		).toMatchSnapshot();
	});

	describe('color editor interactions', () => {
		let editorGetByTestId: any;

		const handleColorsChange = jest.fn();
		const handleValueChange = jest.fn();

		afterEach(() => {
			handleColorsChange.mockReset();
			handleValueChange.mockReset();

			cleanup();
		});

		beforeEach(() => {
			const {getByTestId} = render(
				<ClayColorPicker
					colors={['5BB0A5', '00FFFF', '0000FF']}
					label="Custom Colors"
					name="colorPicker2"
					onColorsChange={handleColorsChange}
					onValueChange={handleValueChange}
					spritemap="/test/path"
					title="Custom Colors"
				/>
			);

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const colorEditorToggle = (document.body as HTMLElement).querySelector(
				'.clay-color-header button'
			);

			fireEvent.click(colorEditorToggle as HTMLButtonElement, {});

			editorGetByTestId = getByTestId;
		});

		it('changes the color by changing the gradient', () => {
			const gradientMap = document.querySelector('.clay-color-map-hsb');

			mockClientRect(gradientMap as HTMLElement);

			const mouseDown = getMouseEvent('mousedown', {pageX: 0, pageY: 0});

			fireEvent(gradientMap as HTMLElement, mouseDown);

			const mouseMove = getMouseEvent('mousemove', {
				pageX: 50,
				pageY: 50,
			});

			fireEvent(gradientMap as HTMLElement, mouseMove);

			expect(handleColorsChange).toBeCalledTimes(1);
			expect(handleColorsChange.mock.calls[0][0][0]).toBe('659c95');
		});

		it('changes the color by changing the hue', () => {
			const hueSelector = document.querySelector('.clay-color-range-hue');

			mockClientRect(hueSelector as HTMLElement);

			const mouseDown = getMouseEvent('mousedown', {pageX: 0, pageY: 0});

			fireEvent(hueSelector as HTMLElement, mouseDown);

			const mouseMove = getMouseEvent('mousemove', {
				pageX: 50,
			});

			fireEvent(hueSelector as HTMLElement, mouseMove);

			expect(handleColorsChange).toBeCalledTimes(1);
			expect(handleColorsChange.mock.calls[0][0][0]).toBe('5bb062');
		});

		it('changes the color by changing the RGB', () => {
			const rInput = editorGetByTestId('rInput');
			const bInput = editorGetByTestId('bInput');
			const gInput = editorGetByTestId('gInput');

			fireEvent.change(rInput, {target: {value: '200'}});
			expect(handleColorsChange).toBeCalledTimes(1);

			fireEvent.change(gInput, {target: {value: '200'}});
			expect(handleColorsChange).toBeCalledTimes(2);

			fireEvent.change(bInput, {target: {value: '200'}});
			expect(handleColorsChange).toBeCalledTimes(3);
		});

		it('changes the color by changing the input', () => {
			const hexInput = editorGetByTestId('customHexInput');

			fireEvent.change(hexInput, {target: {value: 'DDDDDD'}});

			expect(handleColorsChange).toBeCalledTimes(1);
			expect(handleColorsChange.mock.calls[0]).toMatchObject({});
		});

		it('ability to change color of clicked splotch', () => {
			const splotchArray = document.querySelectorAll(
				'.clay-color-dropdown-menu .clay-color-swatch-item'
			);

			fireEvent.click(splotchArray[5], {});

			const hexInput = editorGetByTestId('customHexInput');

			fireEvent.change(hexInput, {target: {value: 'DDDDDD'}});

			expect(handleColorsChange).toBeCalledTimes(1);
			expect(handleColorsChange.mock.calls[0][0][0]).toBe('dddddd');
		});
	});
});
