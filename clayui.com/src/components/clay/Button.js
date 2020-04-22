/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import React from 'react';

import Editor from '../Editor';

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

const ButtonDisplayTypes = () => {
	const scope = {ClayButton};
	const code = ButtonDisplayTypesCode;

	return (
		<Editor
			code={code}
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
