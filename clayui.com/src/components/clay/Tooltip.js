/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import Editor from '../Editor';

// Workaround for building gatsby's SSR with Tooltip
const {ClayTooltipProvider, default: ClayTooltip} =
	typeof window !== `undefined`
		? require('@clayui/tooltip')
		: {ClayTooltipProvider: () => <div />, default: () => <div />};

const tooltipImportsCode = `import ClayTooltip from '@clayui/tooltip';
`;

const tooltipCode = `const Component = () => (
	<div style={{height: 50}}>
		<ClayTooltip
			alignPosition="bottom"
			show
		>
			{'Tooltip content'}
		</ClayTooltip>
	</div>
);

render(<Component />);`;

const Tooltip = () => {
	const scope = {ClayTooltip};

	return (
		<Editor code={tooltipCode} imports={tooltipImportsCode} scope={scope} />
	);
};

const tooltipProviderImportsCode = `import {ClayTooltipProvider} from '@clayui/tooltip';
`;

const tooltipProviderCode = `const Component = () => (
	<ClayTooltipProvider>
		<div>
			<button data-tooltip-align="top" title="Tooltip Content">
				{'Hover'}
			</button>
		</div>
	</ClayTooltipProvider>
);

render(<Component />);`;

const TooltipProvider = () => {
	const scope = {ClayTooltipProvider};

	return (
		<Editor
			code={tooltipProviderCode}
			imports={tooltipProviderImportsCode}
			scope={scope}
		/>
	);
};

const tooltipProviderRendererImportsCode = `import {ClayTooltipProvider} from '@clayui/tooltip';
`;

const tooltipProviderRendererCode = `const Component = () => (
	<ClayTooltipProvider
		contentRenderer={props => props.title.toLowerCase().split(' ').join('-')}
	>
		<div>
			<button title="Hello World">{'kebabCase'}</button>
		</div>
	</ClayTooltipProvider>
);

render(<Component />);`;

const TooltipProviderRenderer = () => {
	const scope = {ClayTooltipProvider};

	return (
		<Editor
			code={tooltipProviderRendererCode}
			imports={tooltipProviderRendererImportsCode}
			scope={scope}
		/>
	);
};

export {Tooltip, TooltipProvider, TooltipProviderRenderer};
