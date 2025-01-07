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

			<div className="mt-3">
				<ClaySticker displayType="outline-0">S</ClaySticker>
				<ClaySticker displayType="outline-1">M</ClaySticker>
				<ClaySticker displayType="outline-2">C</ClaySticker>
				<ClaySticker displayType="outline-3">M</ClaySticker>
				<ClaySticker displayType="outline-4">S</ClaySticker>
				<ClaySticker displayType="outline-5">S</ClaySticker>
				<ClaySticker displayType="outline-6">E</ClaySticker>
				<ClaySticker displayType="outline-7">Q</ClaySticker>
				<ClaySticker displayType="outline-8">D</ClaySticker>
				<ClaySticker displayType="outline-9">P</ClaySticker>
			</div>
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
/>

<clay:sticker displayType="outline-0" label="S" />
<clay:sticker displayType="outline-1" label="M" />
<clay:sticker displayType="outline-2" label="C" />
<clay:sticker displayType="outline-3" label="M" />
<clay:sticker displayType="outline-4" label="S" />
<clay:sticker displayType="outline-5" label="S" />
<clay:sticker displayType="outline-6" label="E" />
<clay:sticker displayType="outline-7" label="Q" />
<clay:sticker displayType="outline-8" label="D" />
<clay:sticker displayType="outline-9" label="P" />`;

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
			<ClaySticker userIcon size="xl">
				<ClaySticker.Image
					alt="placeholder"
					src="/images/long_user_image.png"
				/>
			</ClaySticker>

			<ClaySticker userIcon size="xl">
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
