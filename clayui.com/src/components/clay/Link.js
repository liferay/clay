/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink, {ClayLinkContext} from '@clayui/link';
import React from 'react';

import Editor from '../Editor';

const linkImportsCode = `import ClayLink from '@clayui/link';
`;

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

	return <Editor code={code} imports={linkImportsCode} scope={scope} />;
};

const linkContextImportsCode = `import ClayLink, {ClayLinkContext} from '@clayui/link';
`;

const LinkContextCode = `const Component = () => {
	const ConfirmBeforeNavigate = ({children, href, ...otherProps}) => (
		<a
			{...otherProps}
			href={href}
			onClick={e =>
				window.confirm('r u sure?') ? undefined : e.preventDefault()
			}
		>
			{children}
		</a>
	);

	return (
		<ClayLinkContext.Provider value={ConfirmBeforeNavigate}>
			<div>
				<ClayLink href="#">Click me</ClayLink>
			</div>
		</ClayLinkContext.Provider>
	);
}

render(<Component />);`;

export const LinkContext = () => {
	const scope = {ClayLink, ClayLinkContext};
	const code = LinkContextCode;

	return (
		<Editor code={code} imports={linkContextImportsCode} scope={scope} />
	);
};
