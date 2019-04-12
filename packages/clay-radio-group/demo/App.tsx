/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayRadioGroup from '../src/ClayRadioGroup';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	const [value, setValue] = React.useState<React.ReactText>('one');

	return (
		<div>
			<ClayRadioGroup
				onSelectedValueChange={val => setValue(val)}
				selectedValue={value}
			>
				<ClayRadioGroup.Radio label="One" value="one" />
				<ClayRadioGroup.Radio label="Two" value="two" />
				<ClayRadioGroup.Radio label="Three" value="three" />
			</ClayRadioGroup>

			<div>{'Inline'}</div>
			<ClayRadioGroup
				inline
				onSelectedValueChange={val => setValue(val)}
				selectedValue={value}
			>
				<ClayRadioGroup.Radio label="One" value="one" />
				<ClayRadioGroup.Radio label="Two" value="two" />
				<ClayRadioGroup.Radio disabled label="Disabled" value="three" />
			</ClayRadioGroup>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
