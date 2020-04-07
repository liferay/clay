/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import React from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const iconImportsCode = `import ClayIcon from '@clayui/icon';
import React from 'react';`;

const IconCode = `const Component = () => {
	return (
		<ClayIcon symbol="heart" spritemap={spritemap} />
	);
}

render(<Component />)`;

export const Icon = () => {
	const scope = {ClayIcon, spritemap};
	const code = IconCode;

	return <Editor code={code} imports={iconImportsCode} scope={scope} />;
};

const iconWithContextImportsCode = `import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import React from 'react';`;

const IconWithContextCode = `const Component = () => {
	return (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol="add-cell" />
		</ClayIconSpriteContext.Provider>
	);
}

render(<Component />)`;

export const IconWithContext = () => {
	const scope = {ClayIcon, ClayIconSpriteContext, spritemap};
	const code = IconWithContextCode;

	return (
		<Editor
			code={code}
			imports={iconWithContextImportsCode}
			scope={scope}
		/>
	);
};
