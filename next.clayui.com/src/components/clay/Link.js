/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import Editor from './Editor';
import React from 'react';

const LinkCode = `const Component = () => {
	return (
		<div className="row">
			<ClayLink href="#link-styles">{'Default'}</ClayLink>

			<ClayLink displayType="secondary" href="#link-styles">
				{'Secondary'}
			</ClayLink>

			<ClayLink aria-label="My Link" href="#link-styles">
				{'With Aria Label'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

export const Link = () => {
	const scope = {ClayLink};
	const code = LinkCode;

	return <Editor code={code} scope={scope} />;
};
