/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import React from 'react';

const buttonDisplayTypesImportsCode = `import ClayButton from '@clayui/button';
`;

const ButtonDisplayTypesCode = `const Component = () => {
	return (
		<>
			<ClayButton displayType="primary">
				Button Primary
			</ClayButton>
			<ClayButton displayType="secondary">
				Button Secondary
			</ClayButton>
			<ClayButton displayType="link">
				Button Link
			</ClayButton>
			<ClayButton displayType="unstyled">
				Button Unstyled
			</ClayButton>
		</>
	);
}

render(<Component />);`;

const ButtonJSPCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>

<clay:button
	displayType="primary"
	label="Button Primary"
/>

<clay:button
	displayType="secondary"
	label="Button Secondary"
/>

<clay:button
	displayType="link"
	label="Button Link"
/>

<clay:button
	displayType="unstyled"
	label="Button Unstyled"
/>`;

const ButtonDisplayTypes = () => {
	const scope = {ClayButton};
	const codeSnippets = [
		{
			name: 'React',
			value: ButtonDisplayTypesCode,
		},
		{
			name: 'JSP',
			value: ButtonJSPCode,
		},
	];

	return (
		<Editor
			code={codeSnippets}
			imports={buttonDisplayTypesImportsCode}
			scope={scope}
		/>
	);
};

const buttonGroupImportsCode = `import ClayButton from '@clayui/button';
`;

const ButtonGroupCode = `const Component = () => {
	return (
        <ClayButton.Group>
			<ClayButton>{'This'}</ClayButton>
			<ClayButton displayType="secondary">{'is'}</ClayButton>
			<ClayButton>{'a'}</ClayButton>
			<ClayButton displayType="secondary">{'button'}</ClayButton>
			<ClayButton>{'group.'}</ClayButton>
		</ClayButton.Group>
	);
}

render(<Component />);`;

const ButtonGroup = () => {
	const scope = {ClayButton};
	const code = ButtonGroupCode;

	return (
		<Editor code={code} imports={buttonGroupImportsCode} scope={scope} />
	);
};

export {ButtonDisplayTypes, ButtonGroup};
