/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker from '@clayui/time-picker';
import React from 'react';

import Editor from '../Editor';

const timePickerImportsCode = `import ClayTimePicker from '@clayui/time-picker';
`;

const timePickerCode = `const Component = () => {
	const [state, setState] = React.useState({
		hours: '--',
		minutes: '--',
	});

	return (
		<ClayTimePicker
			spritemap={spritemap}
			onInputChange={setState}
			values={state}
			timezone="GMT+01:00"
			use12Hours
		/>
	);
}

render(<Component />)`;

const TimePickerWithState = () => {
	const scope = {ClayTimePicker};

	return (
		<Editor
			code={timePickerCode}
			imports={timePickerImportsCode}
			scope={scope}
		/>
	);
};
export {TimePickerWithState};
