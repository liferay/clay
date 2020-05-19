/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

const StickerCode = `const Component = () => {
	return (
		<ClaySticker displayType="dark">A</ClaySticker>
	)
}
render(<Component />)`;

export const Sticker = () => {
	const scope = {ClaySticker, spritemap};
	const code = StickerCode;

	return <Editor code={code} scope={scope} />;
};

const StickerColorsAndSizesCode = `const Component = () => {
	return (
		<>
			<ClaySticker displayType="danger" size="sm">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="dark" size="md">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="info" size="lg">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="light" size="xl">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="secondary" size="xl">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success" size="lg">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="unstyled" size="md">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="warning" size="sm">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
		</>
	)
}
render(<Component />)`;

export const StickerColorsAndSizes = () => {
	const scope = {ClayIcon, ClaySticker, spritemap};
	const code = StickerColorsAndSizesCode;

	return <Editor code={code} scope={scope} />;
};

const StickerUserIconCode = `const Component = () => {
	return (
		<>
			<ClaySticker className="sticker-user-icon" size="xl">
				<div className="sticker-overlay">
					<img className="sticker-img" src="/images/long_user_image.png" />
				</div>
			</ClaySticker>
			<ClaySticker className="sticker-user-icon" size="xl">
				{'BS'}
			</ClaySticker>
		</>
	)
}
render(<Component />)`;

export const StickerUserIcon = () => {
	const scope = {ClaySticker};

	const code = StickerUserIconCode;

	return <Editor code={code} scope={scope} />;
};
