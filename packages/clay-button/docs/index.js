/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React from 'react';

const buttonDisplayTypesImportsCode = `import ClayButton from '@clayui/button';`;

const ButtonDisplayTypesCode = `const Component = () => {
	return (
		<>
			<ClayButton displayType="primary">
				Button Primary
			</ClayButton>
			<ClayButton displayType="secondary">
				Button Secondary
			</ClayButton>
			<ClayButton displayType={null}>
				Base Button
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

const buttonJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const ButtonJSPCode = `<clay:button
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
			imports: buttonDisplayTypesImportsCode,
			name: 'React',
			value: ButtonDisplayTypesCode,
		},
		{
			disabled: true,
			imports: buttonJSPImportsCode,
			name: 'JSP',
			value: ButtonJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const buttonGroupImportsCode = `import ClayButton from '@clayui/button';`;

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

const buttonIconImportsCode = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon;`;

const ButtonIconCode = `const Component = () => {
	return (
		<>
			<ClayButtonWithIcon aria-label="Close" spritemap={spritemap} symbol="times" title="Close" />

			<br />
			<br />

			<ClayButton>
				<span className="inline-item inline-item-before">
					<ClayIcon spritemap={spritemap} symbol="times" />
				</span>

				{'Close w/ text'}
			</ClayButton>
		</>
	);
}

render(<Component />);`;

const ButtonIcon = () => {
	const scope = {ClayButton, ClayButtonWithIcon, ClayIcon};
	const code = ButtonIconCode;

	return <Editor code={code} imports={buttonIconImportsCode} scope={scope} />;
};

export {ButtonDisplayTypes, ButtonGroup, ButtonIcon};
