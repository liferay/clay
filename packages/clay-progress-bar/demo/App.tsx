/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayProgressBar from '../src/ClayProgressBar';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	const [value, setValue] = React.useState(10);

	return (
		<div>
			<ClayProgressBar value={30}>{'30%'}</ClayProgressBar>

			<ClayProgressBar status="success" value={50}>
				{'50%'}
			</ClayProgressBar>

			<ClayProgressBar feedback status="success" value={100}>
				{'100% as feedback'}
			</ClayProgressBar>

			<ClayProgressBar
				feedback={value === 100}
				status={value === 100 ? 'success' : 'warning'}
				value={value}
			>
				{`${value}%`}
			</ClayProgressBar>

			<button
				onClick={() => (value >= 10 ? setValue(value - 10) : undefined)}
			>
				{'-'}
			</button>
			<button
				onClick={() => (value < 100 ? setValue(value + 10) : undefined)}
			>
				{'+'}
			</button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
