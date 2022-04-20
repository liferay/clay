/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {ClayRadio, ClayRadioGroup} from '@clayui/form';
import React from 'react';

const radioGroupImportsCode = `import {ClayRadio, ClayRadioGroup} from '@clayui/form';`;

const radioGroupCode = `const Component = () => {
	return (
		<ClayRadioGroup
			defaultValue="one"
			inline
		>
			<ClayRadio label="One" value="one" />
			<ClayRadio label="Two" value="two" />
			<ClayRadio label="Three" value="three" />
		</ClayRadioGroup>
	);
}

render(<Component />)`;

const radioGroupJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const RadioGroupJSPCode = `<clay:radio
	checked="<%= true %>"
	label="One"
	name="one"
/>
	
<clay:radio
	disabled="<%= true %>"
	label="Two"
	name="two"
/>
	
<clay:radio
	checked="<%= true %>"
	disabled="<%= true %>"
	label="Three"
	name="three"
	showLabel="<%= false %>"
/>`;

const RadioGroup = () => {
	const scope = {ClayRadio, ClayRadioGroup};

	const codeSnippets = [
		{
			imports: radioGroupImportsCode,
			name: 'React',
			value: radioGroupCode,
		},
		{
			disabled: true,
			imports: radioGroupJSPImportsCode,
			name: 'JSP',
			value: RadioGroupJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

export {RadioGroup};
