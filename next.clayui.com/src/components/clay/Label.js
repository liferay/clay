/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '@clayui/label';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const labelImportsCode = `import ClayLabel from '@clayui/label';
import React, {useState} from 'react';`;

const LabelCode = `const Component = () => {
	const [visible, setVisible] = useState(true);

	return visible ? (
		<ClayLabel
			closeButtonProps={
				{
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
render(<Component />)`;

const Label = () => {
	const scope = {ClayLabel, spritemap, useState};
	const code = LabelCode;

	return <Editor code={code} imports={labelImportsCode} scope={scope} />;
};

const labelClosingActionsImportsCode = `import ClayLabel from '@clayui/label';
import React from 'react';`;

const LabelClosingActionsCode = `const Component = () => (
	<ClayLabel
		closeButtonProps={
			{
				id: 'closeId'
			}
		}
		displayType="success"
		spritemap={spritemap}
	>
		Label Text
	</ClayLabel>
)
render(<Component />)`;

const LabelClosingActions = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelClosingActionsCode;

	return (
		<Editor
			code={code}
			imports={labelClosingActionsImportsCode}
			scope={scope}
		/>
	);
};

const labelDisplayTypesImportsCode = `import ClayLabel from '@clayui/label';
import React from 'react';`;

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
	)
}
render(<Component />)`;

const LabelDisplayTypes = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelDisplayTypesCode;

	return (
		<Editor
			code={code}
			imports={labelDisplayTypesImportsCode}
			scope={scope}
		/>
	);
};

export {Label, LabelClosingActions, LabelDisplayTypes};
