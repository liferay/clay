/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
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
		toJSON: () => {},
		top: 0,
		width: 144,
		x: 0,
		y: 0,
	});
};

const ClayColorPickerWithState = (
	props: React.ComponentProps<typeof ClayColorPicker>
) => {
	const [value, setValue] = React.useState('');

	return (
		<ClayColorPicker
			label="Default Colors"
			name="colorPicker1"
			onChange={setValue}
			spritemap="/test/path"
			title="Default"
			value={value}
			{...props}
		/>
	);
};

const ClayColorPickerWithCustomColors = (props: any) => {
	const [customColors, setCustoms] = React.useState([
		'008000',
		'00FFFF',
		'0000FF',
		'blue',
		'black',
		'var(--blue)',
	]);

	const [color, setColor] = React.useState('');

	return (
		<ClayColorPickerWithState
			{...props}
			colors={customColors}
			onChange={setColor}
			onColorsChange={setCustoms}
			value={color}
		/>
	);
};

describe('Rendering', () => {
	afterEach(cleanup);

	it('default', () => {
		render(
			<ClayColorPicker
				defaultValue="FFF"
				label="Default Colors"
				name="colorPicker1"
				spritemap="/test/path"
				title="Default"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders w/ var()', () => {
		render(
			<ClayColorPicker
				defaultValue="var(--blue)"
				label="Default Colors"
				name="colorPicker1"
				spritemap="/test/path"
				title="Default"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders with a hash for the value', () => {
		render(
			<ClayColorPicker
				defaultValue="#FFF"
				label="Default Colors"
				name="colorPicker1"
				spritemap="/test/path"
				title="Default"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders with a named color for the value', () => {
		render(
			<ClayColorPicker
				defaultValue="red"
				label="Default Colors"
				name="colorPicker1"
				spritemap="/test/path"
				title="Default"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('small color-picker', () => {
		render(
			<ClayColorPicker
				defaultValue="FFF"
				label="Default Colors"
				name="colorPicker1"
				small
				spritemap="/test/path"
				title="Small"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('disabled state', () => {
		render(
			<ClayColorPicker
				defaultValue="FFF"
				disabled
				label="Default Colors"
				name="colorPicker1"
				spritemap="/test/path"
				title="Default"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('disabled palette', () => {
		render(
			<ClayColorPicker
				defaultValue="FFF"
				label="Default Colors"
				name="colorPicker1"
				showPalette={false}
				spritemap="/test/path"
				title="Default"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('typing in the input the color in hex fixes it to the correct value', () => {
		const {getByLabelText} = render(<ClayColorPickerWithState />);

		const input = getByLabelText(/Color selection is/) as HTMLInputElement;

		fireEvent.change(input, {target: {value: 'fff'}});
		fireEvent.blur(input);

		expect(input.value).toBe('ffffff');
	});

	it('typing an invalid color in the input sets the input to an empty value', () => {
		const {getByLabelText} = render(<ClayColorPickerWithState />);

		const input = getByLabelText(/Color selection is/) as HTMLInputElement;

		fireEvent.change(input, {target: {value: 'ff'}});
		fireEvent.blur(input);

		expect(input.value).toBe('');

		fireEvent.change(input, {target: {value: 'redd'}});
		fireEvent.blur(input);

		expect(input.value).toBe('');

		fireEvent.change(input, {target: {value: 'var'}});
		fireEvent.blur(input);

		expect(input.value).toBe('');
	});

	it('accept value with colors using CSS variable', () => {
		const {getByLabelText} = render(<ClayColorPickerWithState />);

		const input = getByLabelText(/Color selection is/) as HTMLInputElement;

		fireEvent.change(input, {target: {value: 'var(--red)'}});
		fireEvent.blur(input);

		expect(input.value).toBe('var(--red)');
	});

	it('opens color picker drop down when clicked', () => {
		const {container} = render(
			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onChange={() => {}}
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
				onChange={() => {}}
				onColorsChange={() => {}}
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
					onChange={handleValueChange}
					onColorsChange={handleColorsChange}
					spritemap="/test/path"
					title="Custom Colors"
					value="FFFFFF"
				/>
			);

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const colorEditorToggle = (
				document.body as HTMLElement
			).querySelector('.clay-color-header button');

			fireEvent.click(colorEditorToggle as HTMLButtonElement, {});

			editorGetByTestId = getByTestId;
		});

		it('changes the color by changing the gradient', () => {
			const gradientMap = document.querySelector(
				'.clay-color-map-hsb'
			) as HTMLElement;

			mockClientRect(gradientMap);

			fireEvent.focus(gradientMap);

			const mouseDown = getMouseEvent('pointerdown', {
				pageX: 0,
				pageY: 0,
			});

			fireEvent(gradientMap, mouseDown);

			const mouseMove = getMouseEvent('pointermove', {
				pageX: 50,
				pageY: 50,
			});

			fireEvent(gradientMap, mouseMove);

			expect(handleColorsChange).toBeCalledTimes(2);
			expect(handleColorsChange.mock.calls[0][0][0]).toBe('5BB0A5');
		});

		it('changes the color by changing the hue', () => {
			const hueSelector = document.querySelector('.clay-color-range-hue');

			mockClientRect(hueSelector as HTMLElement);

			const mouseDown = getMouseEvent('pointerdown', {
				pageX: 0,
				pageY: 0,
			});

			fireEvent(hueSelector as HTMLElement, mouseDown);

			const mouseMove = getMouseEvent('pointermove', {
				pageX: 50,
			});

			fireEvent(hueSelector as HTMLElement, mouseMove);

			expect(handleColorsChange).toBeCalledTimes(1);
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
		});

		it('ability to change color of clicked splotch', () => {
			const splotchArray = document.querySelectorAll(
				'.clay-color-dropdown-menu .clay-color-swatch-item'
			);

			fireEvent.click(splotchArray[5], {});

			const hexInput = editorGetByTestId('customHexInput');

			fireEvent.change(hexInput, {target: {value: 'DDDDDD'}});

			expect(handleColorsChange).toBeCalledTimes(1);

			expect(document.body).toMatchSnapshot();
		});
	});

	describe('color editor changing color value', () => {
		let editorGetByLabelText: any;
		let editorGetByTitle: any;
		let editorGetByTestId: any;

		afterEach(cleanup);

		beforeEach(() => {
			const {getByLabelText, getByTestId, getByTitle} = render(
				<ClayColorPickerWithCustomColors />
			);

			editorGetByLabelText = getByLabelText;
			editorGetByTestId = getByTestId;
			editorGetByTitle = getByTitle;
		});

		it('does not update when a sploch is not clicked', () => {
			const input = editorGetByLabelText(
				/Color selection is/
			) as HTMLInputElement;

			fireEvent.change(input, {target: {value: 'DFCAFF'}});

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const colorEditorToggle = (
				document.body as HTMLElement
			).querySelector('.clay-color-header button');

			fireEvent.click(colorEditorToggle as HTMLButtonElement, {});

			expect(input.value).toBe('DFCAFF');

			expect(
				document.body.querySelectorAll('button[title="#dfcaff"]').length
			).toBe(0);

			expect(editorGetByTestId('rInput').value).toBe('223');
			expect(editorGetByTestId('bInput').value).toBe('255');
			expect(editorGetByTestId('gInput').value).toBe('202');

			expect(editorGetByTestId('customHexInput').value).toBe('DFCAFF');
		});

		it('updates when a sploch is clicked with value of FFFFFF', () => {
			const input = editorGetByLabelText(
				/Color selection is/
			) as HTMLInputElement;

			fireEvent.change(input, {target: {value: 'DFCAFF'}});

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const blankSplotch = (
				document.body as HTMLButtonElement
			).querySelector('button[title="#FFFFFF"]');

			fireEvent.click(blankSplotch as HTMLButtonElement, {});

			expect(input.value).toBe('DFCAFF');

			expect(
				document.body.querySelectorAll('button[title="#dfcaff"]').length
			).toBe(1);

			expect(editorGetByTestId('rInput').value).toBe('223');
			expect(editorGetByTestId('bInput').value).toBe('255');
			expect(editorGetByTestId('gInput').value).toBe('202');

			expect(editorGetByTestId('customHexInput').value).toBe('DFCAFF');
		});

		it('does not update when sploch clicked has not value of FFFFFF', () => {
			const input = editorGetByLabelText(
				/Color selection is/
			) as HTMLInputElement;

			fireEvent.change(input, {target: {value: 'DFCAFF'}});

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const colorSplotch = editorGetByTitle(
				'#008000'
			) as HTMLButtonElement;

			fireEvent.click(colorSplotch as HTMLButtonElement, {});

			const colorEditorToggle = (
				document.body as HTMLElement
			).querySelector('.clay-color-header button');

			fireEvent.click(colorEditorToggle as HTMLButtonElement, {});

			expect(input.value).toBe('008000');

			expect(
				document.body.querySelectorAll('button[title="#dfcaff"]').length
			).toBe(0);

			expect(editorGetByTestId('rInput').value).toBe('0');
			expect(editorGetByTestId('bInput').value).toBe('0');
			expect(editorGetByTestId('gInput').value).toBe('128');

			expect(editorGetByTestId('customHexInput').value).toBe('008000');
		});

		it('only updates the inputs and the color editor components', () => {
			const input = editorGetByLabelText(
				/Color selection is/
			) as HTMLInputElement;

			fireEvent.change(input, {target: {value: 'DFCAFF'}});

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const colorEditorToggle = (
				document.body as HTMLElement
			).querySelector('.clay-color-header button');

			fireEvent.click(colorEditorToggle as HTMLButtonElement, {});

			const rInput = editorGetByTestId('rInput');
			const bInput = editorGetByTestId('bInput');
			const gInput = editorGetByTestId('gInput');

			fireEvent.change(rInput, {target: {value: '200'}});

			fireEvent.change(gInput, {target: {value: '200'}});

			fireEvent.change(bInput, {target: {value: '200'}});

			expect(input.value).toBe('c8c8c8');

			expect(
				document.body.querySelector(
					'.clay-color-header button[title="#c8c8c8"]'
				)
			).toBeNull();

			expect(editorGetByTestId('customHexInput').value).toBe('C8C8C8');
		});

		it('can duplicate colors', () => {
			const input = editorGetByLabelText(
				/Color selection is/
			) as HTMLInputElement;

			fireEvent.change(input, {target: {value: 'DFCAFF'}});
			fireEvent.blur(input, {target: {value: 'DFCAFF'}});

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const blankSplotch = (
				document.body as HTMLButtonElement
			).querySelector('button[title="#FFFFFF"]');

			fireEvent.click(blankSplotch as HTMLButtonElement, {});

			expect(input.value).toBe('dfcaff');

			const greenSplotch = (
				document.body as HTMLButtonElement
			).querySelector('button[title="#008000"]');

			fireEvent.click(greenSplotch as HTMLButtonElement, {});

			fireEvent.change(input, {target: {value: 'DFCAFF'}});

			const purpleSplotchs = (
				document.body as HTMLButtonElement
			).querySelectorAll('button[title="#dfcaff"]');

			expect(purpleSplotchs.length).toBe(2);
		});

		it('named colors are displayed in HEX in the custom hex input', () => {
			const input = editorGetByLabelText(
				/Color selection is/
			) as HTMLInputElement;

			fireEvent.change(input, {target: {value: 'red'}});

			const dropdownToggle = document.querySelector('.dropdown-toggle');

			fireEvent.click(dropdownToggle as HTMLButtonElement, {});

			const blankSplotch = (
				document.body as HTMLButtonElement
			).querySelector('button[title="#FFFFFF"]');

			fireEvent.click(blankSplotch as HTMLButtonElement, {});

			expect(input.value).toBe('red');

			expect(editorGetByTestId('customHexInput').value).toBe('FF0000');
		});
	});
});
