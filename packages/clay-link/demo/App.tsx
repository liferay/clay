/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayLink from '../src/ClayLink';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	return (
		<div>
			<h2>Link Styles</h2>
			<ClayLink href="#link-styles">
				{'Default'}
			</ClayLink>

			<ClayLink href="#link-styles" displayType="secondary">
				{'Secondary'}
			</ClayLink>

			<ClayLink href="#link-styles" buttonDisplayType="primary">
				{'Button Primary'}
			</ClayLink>

			<ClayLink href="#link-styles" buttonDisplayType="secondary">
				{'Button Secondary'}
			</ClayLink>

			<ClayLink href="#link-styles" buttonDisplayType="link">
				{'Button Link'}
			</ClayLink>

			<ClayLink href="#link-styles" aria-label="My Link" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
