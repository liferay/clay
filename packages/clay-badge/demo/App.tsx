/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayBadge from '../src/ClayBadge';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	return (
		<div>
			{[
				'primary',
				'secondary',
				'info',
				'danger',
				'success',
				'warning',
			].map(type => (
				<React.Fragment key={type}>
					<h3>{type}</h3>

					<ClayBadge
						label={Math.round(Math.random() * 10)}
						type={type}
					/>
				</React.Fragment>
			))}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));