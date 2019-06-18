/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayProgressBar from '@clayui/progress-bar';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

export const ProgressBar = () => {
	const scope = {ClayProgressBar, spritemap};
	const code = `const Component = () => {
	
	return (
		<>
			<ClayProgressBar
				spritemap={spritemap}
				value={50}
			/>
			<ClayProgressBar spritemap={spritemap} value={100} />
			<ClayProgressBar
				spritemap={spritemap}
				value={20}
			/ >
			<ClayProgressBar
				spritemap={spritemap}
				value={20}
			/ >
		</>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ProgressBarFeedback = () => {
	const scope = {ClayProgressBar, spritemap};
	const code = `const Component = () => {
	
	return (
		<>
			<ClayProgressBar
				feedback
				spritemap={spritemap}
				value={99}
			>
				<div class="progress-group-addon">99% Completed</div>
			</ClayProgressBar>
			<ClayProgressBar
				feedback
				spritemap={spritemap}
				value={100}
			>
				<div class="progress-group-addon">100% Completed</div>
			</ClayProgressBar>
			<ClayProgressBar
				feedback
				spritemap={spritemap}
				value={99}
				warn
			>
				<div class="progress-group-addon">99% Completed</div>
			</ClayProgressBar>
		</>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const ProgressBarStatus = () => {
	const scope = {ClayProgressBar, spritemap};
	const code = `const Component = () => {
	
	return (
		<>
			<ClayProgressBar
				spritemap={spritemap}
				value={0}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={50}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={100}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={50}
				warn
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={100}
				warn
			/>
		</>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};
