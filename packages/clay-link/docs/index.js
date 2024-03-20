/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayLink, {ClayLinkContext} from '@clayui/link';
import React from 'react';

const linkImportsCode = `import ClayLink from '@clayui/link';`;

const LinkCode = `const Component = () => {
	return (
		<div className="row">
			<ClayLink displayType="primary" href="#link-styles">
				{'Primary'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

const linkJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const LinkJSPCode = `<clay:link href="#link-styles" label="Default" />

<clay:link
	ariaLabel="My Link"
	href="#link-styles"
	label="Wih Aria Label"
/>

<clay:link
	displayType="primary"
	href="#link-styles"
	label="Primary"
/>`;

export const Link = () => {
	const scope = {ClayLink};
	const codeSnippets = [
		{
			imports: linkImportsCode,
			name: 'React',
			value: LinkCode,
		},
		{
			disabled: true,
			imports: linkJSPImportsCode,
			name: 'JSP',
			value: LinkJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const linkContextImportsCode = `import ClayLink, {ClayLinkContext} from '@clayui/link';`;

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
