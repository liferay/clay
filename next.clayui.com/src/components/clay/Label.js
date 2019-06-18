/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '@clayui/label';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

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

export const Label = () => {
	const scope = {ClayLabel, spritemap, useState};
	const code = LabelCode;

	return <Editor code={code} scope={scope} />;
};

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

export const LabelClosingActions = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelClosingActionsCode;

	return <Editor code={code} scope={scope} />;
};

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

export const LabelDisplayTypes = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelDisplayTypesCode;

	return <Editor code={code} scope={scope} />;
};

const LabelLinkCode = `const Component = () => {
	return (
		<>
			<ClayLabel
				displayType="info"
				href="#1"
				spritemap={spritemap}
			>
				Label Link
			</ClayLabel>
		</>
	)
}
render(<Component />)`;

export const LabelLink = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelLinkCode;

	return <Editor code={code} scope={scope} />;
};

const LabelSizesCode = `const Component = () => {
	return (
		<>
			<ClayLabel
				displayType="info"
				spritemap={spritemap}
			>
				Label Default
			</ClayLabel>
			<ClayLabel
				displayType="info"
				large
				spritemap={spritemap}
			>
				Label Large
			</ClayLabel>
		</>
	)
}
render(<Component />)`;

export const LabelSizes = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelSizesCode;

	return <Editor code={code} scope={scope} />;
};

const LabelWithChildrenCode = `const Component = () => (
	<div class="col-md-4">
		<ClayLabel
			displayType="success"
			spritemap={spritemap}
		>
			<span className="text-truncate">
				Pneumonoultramicroscopicsilicovolcanoconiosis
			</span>
		</ClayLabel>
	</div>
)
 render(<Component />)`;

export const LabelWithChildren = () => {
	const scope = {ClayLabel, spritemap};
	const code = LabelWithChildrenCode;

	return <Editor code={code} scope={scope} />;
};
