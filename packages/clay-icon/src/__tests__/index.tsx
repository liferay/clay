/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon, {
	ClayIconIllustrationSpriteContext,
	ClayIconSpriteContext,
} from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayIcon', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayIcon
				spritemap="/path/to/some/resource.svg"
				symbol="cool-icon"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with context spritemap', () => {
		const testRenderer = TestRenderer.create(
			<ClayIconSpriteContext.Provider value="foo/bar.svg">
				<ClayIcon symbol="cool-icon" />
			</ClayIconSpriteContext.Provider>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders without the lexicon-icon classes when `illustration` is true', () => {
		const testRenderer = TestRenderer.create(
			<ClayIcon
				illustration
				spritemap="/path/to/some/empty_states.svg"
				symbol="success-state"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders the className when `illustration` is true', () => {
		const testRenderer = TestRenderer.create(
			<ClayIcon
				className="custom-icon"
				illustration
				spritemap="/path/to/some/empty_states.svg"
				symbol="success-state"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with the illustration context spritemap when `illustration` is true', () => {
		const testRenderer = TestRenderer.create(
			<ClayIconSpriteContext.Provider value="/icons.svg">
				<ClayIconIllustrationSpriteContext.Provider value="/empty_states.svg">
					<ClayIcon symbol="cool-icon" />

					<ClayIcon illustration symbol="success-state" />
				</ClayIconIllustrationSpriteContext.Provider>
			</ClayIconSpriteContext.Provider>
		);

		const [glyph, illustration] = testRenderer.root.findAllByType('use');

		expect(glyph.props.href).toBe('/icons.svg#cool-icon');
		expect(illustration.props.href).toBe('/empty_states.svg#success-state');
	});

	it('prefers the `spritemap` prop over the illustration context', () => {
		const testRenderer = TestRenderer.create(
			<ClayIconIllustrationSpriteContext.Provider value="/empty_states.svg">
				<ClayIcon
					illustration
					spritemap="/custom.svg"
					symbol="success-state"
				/>
			</ClayIconIllustrationSpriteContext.Provider>
		);

		expect(testRenderer.root.findByType('use').props.href).toBe(
			'/custom.svg#success-state'
		);
	});
});
