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

			<div>{'Hidden label w/ aria-label'}</div>
			<ClayCheckbox
				aria-label="hello! Can you see me?"
				checked={boxOne}
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

			<ClayCheckbox
				checked
				disabled
				label="Checked disabled"
				onChange={() => {}}
			/>

			<ClayCheckbox
				disabled
				indeterminate
				label="Indeterminate disabled"
			/>

			<ClayCheckbox label="With custom JSX">
				<span className="badge badge-primary">
					<span className="badge-item badge-item-expand">{'10'}</span>
				</span>
			</ClayCheckbox>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
