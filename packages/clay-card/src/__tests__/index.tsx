/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import CardFile from '../../fixtures/file/CardFile';
import CardFileSelectable from '../../fixtures/file/CardFileSelectable';

import CardFolder from '../../fixtures/folder/CardFolder';
import CardFolderSelectable from '../../fixtures/folder/CardFolderSelectable';

import CardHorizontalInteractive from '../../fixtures/interactive/CardHorizontalInteractive';

import CardImage from '../../fixtures/image/CardImage';
import CardImageSelectable from '../../fixtures/image/CardImageSelectable';

import CardInteractive from '../../fixtures/interactive/CardInteractive';
import CardInteractiveNoTruncateDescription from '../../fixtures/interactive/CardInteractiveNoTruncateDescription';
import CardInteractiveWithIcon from '../../fixtures/interactive/CardInteractiveWithIcon';

import CardUser from '../../fixtures/user/CardUser';
import CardUserSelectable from '../../fixtures/user/CardUserSelectable';

const imageOrSpritemap = '/path/to/some/resource.svg';

describe('ClayCard', () => {
	it('renders a ClayCard as a directory', () => {
		const testRenderer = TestRenderer.create(
			<CardFolder spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as a selectable folder', () => {
		const testRenderer = TestRenderer.create(
			<CardFolderSelectable spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as image card', () => {
		const testRenderer = TestRenderer.create(
			<CardImage spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as a selectable image card', () => {
		const testRenderer = TestRenderer.create(
			<CardImageSelectable spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as a file card', () => {
		const testRenderer = TestRenderer.create(
			<CardFile spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	})
	it('renders a ClayCard as a selectable file card', () => {
		const testRenderer = TestRenderer.create(
			<CardFileSelectable spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	})
	it('renders a ClayCard as template navigation card', () => {
		const testRenderer = TestRenderer.create(
			<CardInteractive image={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as a template navigation card truncating text on description', () => {
		const testRenderer = TestRenderer.create(
			<CardInteractiveNoTruncateDescription image={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as template navigation card with icon instead of image', () => {
		const testRenderer = TestRenderer.create(
			<CardInteractiveWithIcon spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as template navigation card as horizontal card', () => {
		const testRenderer = TestRenderer.create(
			<CardHorizontalInteractive spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as user card', () => {
		const testRenderer = TestRenderer.create(
			<CardUser spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a ClayCard as user selectable card', () => {
		const testRenderer = TestRenderer.create(
			<CardUserSelectable spritemap={imageOrSpritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
