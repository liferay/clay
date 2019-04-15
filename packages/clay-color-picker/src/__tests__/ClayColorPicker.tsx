/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayColorPicker from '../ClayColorPicker';
import ReactDOM from 'react-dom';
import {act, Simulate} from 'react-dom/test-utils';

describe('ClayColorPicker', () => {
	let container: HTMLElement | null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		if (container) {
			document.body.removeChild(container);
			container = null;
		}
	});

	it('renders', () => {
		act(() => {
			ReactDOM.render(
				<ClayColorPicker
					label="Default Colors"
					name="colorPicker1"
					onValueChange={() => {}}
					spritemap="/test/path"
					title="Default"
					value="FFF"
				/>,
				container
			);
		});

		expect(container).toMatchSnapshot();
	});

	it('renders with menu displayed', () => {
		act(() => {
			ReactDOM.render(
				<ClayColorPicker
					label="Default Colors"
					name="colorPicker1"
					onValueChange={() => {}}
					spritemap="/test/path"
					title="Default"
					value="FFF"
				/>,
				container
			);
		});

		const dropdownToggle = (container as HTMLElement).querySelector(
			'.dropdown-toggle'
		);

		act(() => {
			if (dropdownToggle) {
				Simulate.click(dropdownToggle);
			}
		});

		expect(container).toMatchSnapshot();
	});

	it('displays custom colors', () => {
		act(() => {
			ReactDOM.render(
				<ClayColorPicker
					colors={['008000', '00FFFF', '0000FF']}
					label="Custom Colors"
					name="colorPicker2"
					onColorsChange={() => {}}
					onValueChange={() => {}}
					spritemap="/test/path"
					title="Custom Colors"
					value="008000"
				/>,
				container
			);
		});

		const dropdownToggle = (container as HTMLElement).querySelector(
			'.dropdown-toggle'
		);

		act(() => {
			if (dropdownToggle) {
				Simulate.click(dropdownToggle);
			}
		});

		expect(container).toMatchSnapshot();
	});

	it('displays custom color editor', () => {
		act(() => {
			ReactDOM.render(
				<ClayColorPicker
					colors={['008000', '00FFFF', '0000FF']}
					label="Custom Colors"
					name="colorPicker2"
					onColorsChange={() => {}}
					onValueChange={() => {}}
					spritemap="/test/path"
					title="Custom Colors"
					value="008000"
				/>,
				container
			);
		});

		const dropdownToggle = (container as HTMLElement).querySelector(
			'.dropdown-toggle'
		);

		act(() => {
			if (dropdownToggle) {
				Simulate.click(dropdownToggle);
			}
		});

		const colorEditorToggle = (container as HTMLElement).querySelector(
			'.clay-color-header button'
		);

		act(() => {
			if (colorEditorToggle) {
				Simulate.click(colorEditorToggle);
			}
		});

		expect(container).toMatchSnapshot();
	});
});
