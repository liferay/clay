/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLoadingIndicator from '@clayui/loading-indicator';
import Editor from './Editor';
import React from 'react';

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

	return <Editor code={code} scope={scope} />;
};

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

	return <Editor code={code} scope={scope} />;
};

const LoadingIndicatorSmallCode = `const Component = () => {
	return (
        <ClayLoadingIndicator small />
	);
}

render(<Component />)`;

export const LoadingIndicatorSmall = () => {
	const scope = {ClayLoadingIndicator};
	const code = LoadingIndicatorSmallCode;

	return <Editor code={code} scope={scope} />;
};
