/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React from 'react';

const stickerColorsAndSizesImportsCode = `import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';`;

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
	);
}

render(<Component />);`;

const stickerColorsAndSizesImportsJSPCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const StickerColorsAndSizesJSPCode = `<clay:sticker
	displayType="danger"
	icon="users"
	size="sm"
/>

<clay:sticker
	displayType="dark"
	icon="users"
	size="md"
/>

<clay:sticker
	displayType="info"
	icon="users"
	size="lg"
/>

<clay:sticker
	displayType="light"
	icon="users"
	size="xl"
/>

<clay:sticker
	displayType="secondary"
	icon="users"
	size="xl"
/>

<clay:sticker
	displayType="success"
	icon="users"
	size="lg"
/>

<clay:sticker
	displayType="unstyled"
	icon="users"
	size="md"
/>

<clay:sticker
	displayType="warning"
	icon="users"
	size="sm"
/>`;

export const StickerColorsAndSizes = () => {
	const scope = {ClayIcon, ClaySticker};

	const codeSnippets = [
		{
			imports: stickerColorsAndSizesImportsCode,
			name: 'React',
			value: StickerColorsAndSizesCode,
		},
		{
			disabled: true,
			imports: stickerColorsAndSizesImportsJSPCode,
			name: 'JSP',
			value: StickerColorsAndSizesJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const stickerUserIconImportsCode = `import ClaySticker from '@clayui/sticker';
`;

const StickerUserIconCode = `const Component = () => {
	return (
		<>
			<ClaySticker className="sticker-user-icon" size="xl">
				<img className="sticker-img" src="/images/long_user_image.png" />
			</ClaySticker>
			<ClaySticker className="sticker-user-icon" size="xl">
				{'BS'}
			</ClaySticker>
		</>
	);
}

render(<Component />);`;

export const StickerUserIcon = () => {
	const scope = {ClaySticker};

	const code = StickerUserIconCode;

	return (
		<Editor
			code={code}
			imports={stickerUserIconImportsCode}
			scope={scope}
		/>
	);
};
