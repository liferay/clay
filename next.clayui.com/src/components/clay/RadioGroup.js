/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm from '@clayui/form';
import Editor from './Editor';
import React, {useState} from 'react';

const radioGroupCode = `const Component = () => {
	const [value, setValue] = useState('one');

	return (
		<ClayForm.RadioGroup
			inline
			onSelectedValueChange={val => setValue(val)}
			selectedValue={value}
		>
			<ClayForm.Radio label="One" value="one" />
			<ClayForm.Radio label="Two" value="two" />
			<ClayForm.Radio label="Three" value="three" />
		</ClayForm.RadioGroup>
	);
}

render(<Component />)`;

const RadioGroup = () => {
	const scope = {ClayForm, useState};
	return <Editor code={radioGroupCode} scope={scope} />;
};

export {RadioGroup};
