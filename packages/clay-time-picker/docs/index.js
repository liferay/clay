/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayTimePicker from '@clayui/time-picker';
import React from 'react';

const timePickerImportsCode = `import ClayTimePicker from '@clayui/time-picker';
`;

const timePickerCode = `const Component = () => {
	const [state, setState] = useState({
		hours: '--',
		minutes: '--',
	});

	return (
		<ClayTimePicker
			onChange={setState}
			spritemap={spritemap}
			timezone="GMT+01:00"
			use12Hours
			value={state}
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
