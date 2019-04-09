/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayModal from '../src/ClayModal';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	return (
		<div>
			<ClayModal />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
