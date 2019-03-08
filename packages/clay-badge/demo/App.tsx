/**
 * © 2019 Liferay, Inc. <https://liferay.com>
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
			].map(displayType => (
				<React.Fragment key={displayType}>
					<h3>{displayType}</h3>

					<ClayBadge
						displayType={displayType}
						label={Math.round(Math.random() * 10)}
					/>
				</React.Fragment>
			))}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));