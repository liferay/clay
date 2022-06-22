/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';

const loadingIndicatorImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorCode = `const Component = () => {
	return (
		<>
			<ClayLoadingIndicator displayType="secondary" size="sm" />
		</>
	);
}

render(<Component />)`;

export const LoadingIndicator = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorSquaresImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorSquaresCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="primary" shape="squares" size="md" />
	);
}

render(<Component />)`;

export const LoadingIndicatorSquares = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorSquaresCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorSquaresImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorPrimaryImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorPrimaryCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="primary" shape="squares" size="lg" />
	);
}

render(<Component />)`;

export const LoadingIndicatorPrimary = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorPrimaryCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorPrimaryImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorSecondaryImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorSecondaryCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="secondary" size="sm" />
	);
}

render(<Component />)`;

export const LoadingIndicatorSecondary = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorSecondaryCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorSecondaryImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorLightImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorLightCode = `const Component = () => {
	return (
		<div className="bg-dark">
			<ClayLoadingIndicator displayType="light" shape="squares" size="md" />
		</div>
	);
}

render(<Component />)`;

export const LoadingIndicatorLight = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorLightCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorLightImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorExtraSmallImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorExtraSmallCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="secondary" size="xs" />
	);
}

render(<Component />)`;

export const LoadingIndicatorExtraSmall = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorExtraSmallCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorExtraSmallImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorSmallImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorSmallCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="secondary" size="sm" />
	);
}

render(<Component />)`;

export const LoadingIndicatorSmall = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorSmallCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorSmallImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorMediumImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorMediumCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="primary" shape="squares" size="md" />
	);
}

render(<Component />)`;

export const LoadingIndicatorMedium = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorMediumCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorMediumImportsCode}
			scope={scope}
		/>
	);
};

const loadingIndicatorLargeImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
`;

const LoadingIndicatorLargeCode = `const Component = () => {
	return (
		<ClayLoadingIndicator displayType="primary" shape="squares" size="lg" />
	);
}

render(<Component />)`;

export const LoadingIndicatorLarge = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorLargeCode;

	return (
		<Editor
			code={code}
			imports={loadingIndicatorLargeImportsCode}
			scope={scope}
		/>
	);
};
