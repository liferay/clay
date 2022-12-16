/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import React from 'react';

const exampleImports = `import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import React from 'react';`;

const exampleCode = `const SelectAnFruit = () => {
  return (
    <div style={{width: '150px'}}>
			<Form.Group>
        <label htmlFor="picker" id="picker-label">
					Choose a fruit
				</label>
				<Picker
          aria-labelledby="picker-label"
          id="picker"
					items={[
						'Apple',
						'Banana',
						'Mangos',
						'Blueberry',
						'Boysenberry',
						'Cherry',
						'Cranberry',
						'Eggplant',
						'Fig',
						'Grape',
						'Guava',
						'Huckleberry',
					]}
          placeholder="Select a fruit"
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
  );
};

render(<SelectAnFruit />)`;

const PickerExample = () => {
	const scope = {Form, Option, Picker};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

export {PickerExample};
