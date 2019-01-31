/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ClayComponentBoilerplate from '../src/index';

/**
 * Application for rendering demos
 * @return {React.Component}
 */
function App() {
	return (
		<div>
			<ClayComponentBoilerplate />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
