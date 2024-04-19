/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayEmptyState from '@clayui/empty-state';
import React from 'react';

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

const emptyStateWithImageCodeImports = `import ClayEmptyState from '@clayui/empty-state';`;

const emptyStateWithImageCode = `const Component = () => {
	return (
		<ClayEmptyState
			description="You don't have more notifications to review"
			imgProps={{alt: 'Alternative Text', title: 'Hello World!'}}
			imgSrc="/images/success_state.svg"
			imgSrcReducedMotion="/images/success_state_reduced_motion.svg"
			title="Hurray"
		/>
	);
}

render(<Component />)`;

export const EmptyStateWithImage = () => {
	const scope = {ClayEmptyState};

	return (
		<Editor
			code={emptyStateWithImageCode}
			imports={emptyStateWithImageCodeImports}
			scope={scope}
		/>
	);
};

const emptyStateReducedMotionWithImageCodeImports = `import ClayEmptyState from '@clayui/empty-state';`;

const emptyStateReducedMotionWithImageCode = `const Component = () => {
	return (
		<div className="c-prefers-reduced-motion">
			<ClayEmptyState
				description="You don't have more notifications to review"
				imgProps={{alt: 'Alternative Text', title: 'Hello World!'}}
				imgSrc="/images/success_state.svg"
				imgSrcReducedMotion="/images/success_state_reduced_motion.svg"
				title="Hurray"
			/>
		</div>
	);
}

render(<Component />)`;

export const EmptyStateReducedMotionWithImage = () => {
	const scope = {ClayEmptyState};

	return (
		<Editor
			code={emptyStateReducedMotionWithImageCode}
			imports={emptyStateReducedMotionWithImageCodeImports}
			scope={scope}
		/>
	);
};
