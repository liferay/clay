/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';

import Editor from '../Editor';

const loadingIndicatorImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';`;

const LoadingIndicatorCode = `const Component = () => {
	return (
        <>
            <ClayLoadingIndicator />
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

const loadingIndicatorLightImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';`;

const LoadingIndicatorLightCode = `const Component = () => {
	return (
        <div className="bg-dark">
            <ClayLoadingIndicator light />
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

const loadingIndicatorSmallImportsCode = `import ClayLoadingIndicator from '@clayui/loading-indicator';
import React from 'react';`;

const LoadingIndicatorSmallCode = `const Component = () => {
	return (
        <ClayLoadingIndicator small />
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
