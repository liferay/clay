/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import Editor from './Editor';

// Workaround for building gatsby's SSR with Tooltip
const {ClayTooltipProvider, default: ClayTooltip} =
	typeof window !== `undefined`
		? require('@clayui/tooltip')
		: {ClayTooltipProvider: () => <div />, default: () => <div />};

const tooltipImportsCode = `import ClayTooltip from '@clayui/tooltip';
import React from 'react';`;

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
import React from 'react';`;

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

export {Tooltip, TooltipProvider};
