/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayCheckbox from '../src/ClayCheckbox';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	const [boxOne, setBoxOne] = React.useState(false);
	const [boxTwo, setBoxTwo] = React.useState(true);
	const [boxThree, setBoxThree] = React.useState(true);

	return (
		<div>
			<ClayCheckbox
				checked={boxOne}
				label="Unchecked"
				onChange={() => setBoxOne(!boxOne)}
			/>

			<ClayCheckbox
				checked={boxTwo}
				label="Checked"
				onChange={() => setBoxTwo(!boxTwo)}
			/>

			<ClayCheckbox
				indeterminate={boxThree}
				label="Indeterminate"
				onChange={() => setBoxThree(!boxThree)}
			/>

			<ClayCheckbox disabled label="Unchecked disabled" />

			<ClayCheckbox checked disabled label="Checked disabled" />

			<ClayCheckbox
				disabled
				indeterminate
				label="Indeterminate disabled"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
