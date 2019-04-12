/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayLabel from '../src/ClayLabel';
import {ClayIconSpriteContext} from '@clayui/icon';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	const [active, setActive] = React.useState(true);

	return (
		<ClayIconSpriteContext.Provider value="node_modules/clay-css/lib/images/icons/icons.svg">
			<div>
				<ClayLabel>{'Default Label'}</ClayLabel>
				<ClayLabel displayType="info">{'Info Label'}</ClayLabel>
				<ClayLabel displayType="warning">{'Warning Label'}</ClayLabel>
				<ClayLabel displayType="danger">{'Danger Label'}</ClayLabel>
				<ClayLabel displayType="success">{'Success Label'}</ClayLabel>

				{active && (
					<ClayLabel
						closeButtonProps={{
							children: 'x',
							onClick: () => setActive(false),
						}}
						displayType="success"
					>
						{'Closable'}
					</ClayLabel>
				)}

				<ClayLabel href="#/foo/bar">{'Label w/ link'}</ClayLabel>
			</div>
		</ClayIconSpriteContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
