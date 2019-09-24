/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker from '@clayui/time-picker';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

const timePickerCode = `const Component = () => {
	const [state, setState] = useState({
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
	const scope = {ClayTimePicker, spritemap, useState};
	return <Editor code={timePickerCode} scope={scope} />;
};
export {TimePickerWithState};
