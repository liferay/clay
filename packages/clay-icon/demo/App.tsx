/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayIcon, {ClayIconSpriteContext} from '../src/ClayIcon';

import 'clay-css/lib/css/atlas.css';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

const App: React.FunctionComponent = () => (
	<div>
		<div>{'Default'}</div>
		<ClayIcon spritemap={spritemap} symbol="add-cell" />

		<div>{'Custom Style Prop'}</div>
		<ClayIcon
			spritemap={spritemap}
			style={{height: 32, width: 32}}
			symbol="page-template"
		/>

		<div>{'Using Context'}</div>
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol="page-template" />
		</ClayIconSpriteContext.Provider>

		<div>
			<div>{'Throws `no spritemap` console warning'}</div>
			<ClayIcon symbol="page-template" />
		</div>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
