/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import React from 'react';

const iconImportsCode = `import ClayIcon from '@clayui/icon';`;

const IconCode = `const Component = () => {
	return (
		<ClayIcon symbol="heart" spritemap={spritemap} />
	);
}

render(<Component />)`;

const iconJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const IconJSPCode = `<clay:icon symbol="heart" />`;

export const Icon = () => {
	const scope = {ClayIcon};

	const codeSnippets = [
		{
			imports: iconImportsCode,
			name: 'React',
			value: IconCode,
		},
		{
			disabled: true,
			imports: iconJSPImportsCode,
			name: 'JSP',
			value: IconJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const iconWithContextImportsCode = `import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
`;

const IconWithContextCode = `const Component = () => {
	return (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol="add-cell" />
		</ClayIconSpriteContext.Provider>
	);
}

render(<Component />)`;

export const IconWithContext = () => {
	const scope = {ClayIcon, ClayIconSpriteContext};
	const code = IconWithContextCode;

	return (
		<Editor
			code={code}
			imports={iconWithContextImportsCode}
			scope={scope}
		/>
	);
};
