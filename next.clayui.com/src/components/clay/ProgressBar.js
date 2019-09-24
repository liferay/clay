/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayProgressBar from '@clayui/progress-bar';
import React from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const ProgressBarCode = `const Component = () => {
	
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

export const ProgressBar = () => {
	const scope = {ClayProgressBar, spritemap};
	const code = ProgressBarCode;

	return <Editor code={code} scope={scope} />;
};

const ProgressBarFeedbackCode = `const Component = () => {
	
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

export const ProgressBarFeedback = () => {
	const scope = {ClayProgressBar, spritemap};
	const code = ProgressBarFeedbackCode;

	return <Editor code={code} scope={scope} />;
};

const ProgressBarStatusCode = `const Component = () => {
	
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

export const ProgressBarStatus = () => {
	const scope = {ClayProgressBar, spritemap};
	const code = ProgressBarStatusCode;

	return <Editor code={code} scope={scope} />;
};
