/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import <%= componentName %> from '../src/<%= componentName %>';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	return (
		<div>
			<<%= componentName %> />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
