/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayRadioGroup from '@clayui/radio-group';
import Editor from './Editor';
import React, {useState} from 'react';

const radioGroupCode = `const Component = () => {
	const [value, setValue] = useState('one');

	return (
		<ClayRadioGroup
			inline
			onSelectedValueChange={val => setValue(val)}
			selectedValue={value}
		>
			<ClayRadioGroup.Radio label="One" value="one" />
			<ClayRadioGroup.Radio label="Two" value="two" />
			<ClayRadioGroup.Radio label="Three" value="three" />
		</ClayRadioGroup>
	);
}

render(<Component />)`;

const RadioGroup = () => {
	const scope = {ClayRadioGroup, useState};
	return <Editor code={radioGroupCode} scope={scope} />;
};

export {RadioGroup};
