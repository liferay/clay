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
			<ClayLink href="#link-styles">{'Default'}</ClayLink>

			<span className="mr-1"></span>

			<ClayLink aria-label="My Link" href="#link-styles">
				{'With Aria Label'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="primary" href="#link-styles">
				{'Primary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="secondary" href="#link-styles">
				{'Secondary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="danger" href="#link-styles">
				{'Danger'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="tertiary" href="#link-styles">
				{'Tertiary'}
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
/>

<clay:link
	displayType="secondary"
	href="#link-styles"
	label="Secondary"
/>

<clay:link
	displayType="danger"
	href="#link-styles"
	label="Danger"
/>

<clay:link
	displayType="tertiary"
	href="#link-styles"
	label="Tertiary"
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

const linkWeightImportsCode = `import ClayLink from '@clayui/link';`;

const LinkWeightCode = `const Component = () => {
	return (
		<div className="row">
			<ClayLink displayType="primary" href="#link-styles" weight="semi-bold">
				{'Primary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="secondary" href="#link-styles" weight="semi-bold">
				{'Secondary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="danger" href="#link-styles" weight="semi-bold">
				{'Danger'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="tertiary" href="#link-styles" weight="semi-bold">
				{'Tertiary'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

const linkWeightJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const LinkWeightJSPCode = `<clay:link
	displayType="primary"
	href="#link-styles"
	label="Primary"
	weight="semi-bold"
/>

<clay:link
	displayType="secondary"
	href="#link-styles"
	label="Secondary"
	weight="semi-bold"
/>

<clay:link
	displayType="danger"
	href="#link-styles"
	label="Danger"
	weight="semi-bold"
/>

<clay:link
	displayType="tertiary"
	href="#link-styles"
	label="Tertiary"
	weight="semi-bold"
/>`;

export const LinkWeight = () => {
	const scope = {ClayLink};
	const codeSnippets = [
		{
			imports: linkWeightImportsCode,
			name: 'React',
			value: LinkWeightCode,
		},
		{
			disabled: true,
			imports: linkWeightJSPImportsCode,
			name: 'JSP',
			value: LinkWeightJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const linkFontSizeImportsCode = `import ClayLink from '@clayui/link';`;

const LinkFontSizeCode = `const Component = () => {
	return (
		<div>
			<ClayLink displayType="primary" fontSize="11" href="#link-styles" weight="semi-bold">
				{'Primary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="secondary" fontSize="8" href="#link-styles" weight="semi-bold">
				{'Secondary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="danger" fontSize="6" href="#link-styles" weight="semi-bold">
				{'Danger'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="tertiary" fontSize="2" href="#link-styles" weight="semi-bold">
				{'Tertiary'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

const linkFontSizeJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const LinkFontSizeJSPCode = `<clay:link
	displayType="primary"
	fontSize="11"
	href="#link-styles"
	label="Primary"
	weight="semi-bold"
/>`;

export const LinkFontSize = () => {
	const scope = {ClayLink};
	const codeSnippets = [
		{
			imports: linkFontSizeImportsCode,
			name: 'React',
			value: LinkFontSizeCode,
		},
		{
			disabled: true,
			imports: linkFontSizeJSPImportsCode,
			name: 'JSP',
			value: LinkFontSizeJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const LinkOutlineCode = `const Component = () => {
	return (
		<div>
			<ClayLink displayType="primary" href="#link-styles" outline>
				{'Primary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="secondary" href="#link-styles" outline>
				{'Secondary'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

const LinkOutlineJSPCode = `<clay:link
	displayType="primary"
	href="#link-styles"
	label="Primary"
	outline
/>`;

export const LinkOutline = () => {
	const scope = {ClayLink};
	const codeSnippets = [
		{
			imports: `import ClayLink from '@clayui/link';`,
			name: 'React',
			value: LinkOutlineCode,
		},
		{
			disabled: true,
			imports: `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`,
			name: 'JSP',
			value: LinkOutlineJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const LinkBorderlessCode = `const Component = () => {
	return (
		<div>
			<ClayLink borderless displayType="primary" href="#link-styles" outline>
				{'Primary'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink borderless displayType="secondary" href="#link-styles" outline>
				{'Secondary'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

const LinkBorderlessJSPCode = `<clay:link
	borderless
	displayType="primary"
	href="#link-styles"
	label="Primary"
	outline
/>`;

export const LinkBorderless = () => {
	const scope = {ClayLink};
	const codeSnippets = [
		{
			imports: `import ClayLink from '@clayui/link';`,
			name: 'React',
			value: LinkBorderlessCode,
		},
		{
			disabled: true,
			imports: `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`,
			name: 'JSP',
			value: LinkBorderlessJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const LinkMonospacedCode = `const Component = () => {
	return (
		<div>
			<ClayLink displayType="primary" href="#link-styles" monospaced outline>
				{'P'}
			</ClayLink>

			<span className="mr-1"></span>

			<ClayLink displayType="secondary" href="#link-styles" monospaced outline>
				{'S'}
			</ClayLink>
		</div>
	);
}

render(<Component />);`;

const LinkMonospacedJSPCode = `<clay:link
	displayType="primary"
	href="#link-styles"
	label="Primary"
	monospaced
	outline
/>`;

export const LinkMonospaced = () => {
	const scope = {ClayLink};
	const codeSnippets = [
		{
			imports: `import ClayLink from '@clayui/link';`,
			name: 'React',
			value: LinkMonospacedCode,
		},
		{
			disabled: true,
			imports: `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`,
			name: 'JSP',
			value: LinkMonospacedJSPCode,
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
