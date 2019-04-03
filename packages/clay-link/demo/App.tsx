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
			<h2>{'Link Styles'}</h2>
			<ClayLink href="#link-styles">{'Default'}</ClayLink>

			<ClayLink displayType="secondary" href="#link-styles">
				{'Secondary'}
			</ClayLink>

			<ClayLink buttonDisplayType="primary" href="#link-styles">
				{'Button Primary'}
			</ClayLink>

			<ClayLink buttonDisplayType="secondary" href="#link-styles">
				{'Button Secondary'}
			</ClayLink>

			<ClayLink buttonDisplayType="link" href="#link-styles">
				{'Button Link'}
			</ClayLink>

			<ClayLink aria-label="My Link" href="#link-styles" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
