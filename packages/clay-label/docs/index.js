/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayLabel from '@clayui/label';
import React from 'react';

const labelImportsCode = `import ClayLabel from '@clayui/label';`;

const LabelCode = `const Component = () => {
	const [visible, setVisible] = useState(true);

	return visible ? (
		<ClayLabel
			closeButtonProps={
				{
					'aria-label': 'Close',
					title: 'Close',
					onClick: () => setVisible(val => !val)
				}
			}
			displayType="success"
			spritemap={spritemap}
		>
			Label Text
		</ClayLabel>
	) : null;
}

render(<Component />);`;

const Label = () => {
	const scope = {ClayLabel};
	const code = LabelCode;

	return <Editor code={code} imports={labelImportsCode} scope={scope} />;
};

const labelClosingActionsImportsCode = `import ClayLabel from '@clayui/label';`;

const LabelClosingActionsCode = `const Component = () => (
	<ClayLabel
		closeButtonProps={{
			'aria-label': 'Close',
			title: 'Close',
			id: 'closeId'
		}}
		displayType="success"
		spritemap={spritemap}
	>
		Label Text
	</ClayLabel>
);

render(<Component />);`;

const LabelClosingActions = () => {
	const scope = {ClayLabel};
	const code = LabelClosingActionsCode;

	return (
		<Editor
			code={code}
			imports={labelClosingActionsImportsCode}
			scope={scope}
		/>
	);
};

const labelDisplayTypesImportsCode = `import ClayLabel from '@clayui/label';`;

const LabelDisplayTypesCode = `const Component = () => {
	return (
		<>
			<ClayLabel
				displayType="success"
				spritemap={spritemap}
			>
				Label Success
			</ClayLabel>
			<ClayLabel
				displayType="info"
				spritemap={spritemap}
			>
				Label Info
			</ClayLabel>
			<ClayLabel
				displayType="secondary"
				spritemap={spritemap}
			>
				Label Secondary
			</ClayLabel>
			<ClayLabel
				displayType="warning"
				spritemap={spritemap}
			>
				Label Warning
			</ClayLabel>
			<ClayLabel
				displayType="danger"
				spritemap={spritemap}
			>
				Label Danger
			</ClayLabel>
		</>
	);
}

render(<Component />);`;

const labelJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const LabelJSPCode = `<clay:label
	displayType="success"
	label="Label Success"
/>

<clay:label
	displayType="info"
	label="Label Info"
/>

<clay:label
	displayType="secondary"
	label="Label Secondary"
/>

<clay:label
	displayType="warning"
	label="Label Warning"
/>

<clay:label
	displayType="danger"
	label="Label Danger"
/>`;

const LabelDisplayTypes = () => {
	const scope = {ClayLabel};

	const codeSnippets = [
		{
			imports: labelDisplayTypesImportsCode,
			name: 'React',
			value: LabelDisplayTypesCode,
		},
		{
			disabled: true,
			imports: labelJSPImportsCode,
			name: 'JSP',
			value: LabelJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

export {Label, LabelClosingActions, LabelDisplayTypes};
