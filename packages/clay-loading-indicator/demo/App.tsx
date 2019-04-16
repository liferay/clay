/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayLoadingIndicator from '../src/ClayLoadingIndicator';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	return (
		<div>
			<label>{'Default'}</label>
			<ClayLoadingIndicator />

			<label>{'Small'}</label>
			<ClayLoadingIndicator small />

			<div style={{backgroundColor: '#ddd'}}>
				<label>{'Light'}</label>
				<ClayLoadingIndicator light />

				<label>{'Light and Small'}</label>
				<ClayLoadingIndicator light small />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
