/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

// eslint-disable-next-line
import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayEmptyState from '@clayui/empty-state';
import React from 'react';
const successImage = require('@clayui/css/src/images/images/success_state.gif');

const emptyStateImportsCode = `import ClayEmptyState from '@clayui/empty-state';
import ClayButton from '@clayui/button';`;

const emptyStateCode = `const Component = () => {
	return (
		<ClayEmptyState>
			<ClayButton displayType="primary">{'Button'}</ClayButton>
		</ClayEmptyState>
	);
}

render(<Component />)`;

export const EmptyState = () => {
	const scope = {ClayButton, ClayEmptyState};

	return (
		<Editor
			code={emptyStateCode}
			imports={emptyStateImportsCode}
			scope={scope}
		/>
	);
};

const emptyStateWithImageCodeImports = `const successImage = require('@clayui/css/src/images/images/success_state.gif');
import ClayEmptyState from '@clayui/empty-state';`;

const emptyStateWithImageCode = `const Component = () => {
	return (
		<ClayEmptyState
			description="You don't have more notifications to review"
			imgProps={{alt: 'Alternative Text', title: 'Hello World!'}}
			imgSrc={successImage}
			title="Hurray"
		/>
	);
}

render(<Component />)`;

export const EmptyStateWithImage = () => {
	const scope = {ClayEmptyState, successImage};

	return (
		<Editor
			code={emptyStateWithImageCode}
			imports={emptyStateWithImageCodeImports}
			scope={scope}
		/>
	);
};
