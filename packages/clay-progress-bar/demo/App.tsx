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
			<div>{'Default'}</div>
			<ClayProgressBar
				spritemap="node_modules/clay-css/lib/images/icons/icons.svg"
				value={value}
			/>

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

			<div>{'Custom Content'}</div>
			<ClayProgressBar value={50}>{'6/12'}</ClayProgressBar>

			<div>{'Warning color'}</div>
			<ClayProgressBar value={50} warn />

			<div>{'With feedback colors'}</div>
			<ClayProgressBar feedback value={60} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
