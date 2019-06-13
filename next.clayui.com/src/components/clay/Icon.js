/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

export const Icon = () => {
	const scope = {ClayIcon, spritemap};
	const code = `const Component = () => {

	return (
		<ClayIcon symbol="heart" spritemap={spritemap} />
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const IconWithContext = () => {
	const scope = {ClayIcon, ClayIconSpriteContext, spritemap};
	const code = `const Component = () => {

	return (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol="add-cell" />
		</ClayIconSpriteContext.Provider>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};
