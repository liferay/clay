/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClaySticker from '../src/ClaySticker';

import 'clay-css/lib/css/atlas.css';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

const App: React.FunctionComponent = () => {
	return (
		<div>
			<h2>{'Styles'}</h2>
			<ClaySticker>{'A'}</ClaySticker>

			<ClaySticker displayType="danger">{'B'}</ClaySticker>

			<ClaySticker displayType="dark">{'C'}</ClaySticker>

			<ClaySticker displayType="info" icon="user" spritemap={spritemap} />

			<ClaySticker
				displayType="light"
				icon="user"
				spritemap={spritemap}
			/>

			<ClaySticker
				displayType="secondary"
				icon="user"
				spritemap={spritemap}
			/>

			<ClaySticker
				displayType="success"
				icon="user"
				spritemap={spritemap}
			/>

			<ClaySticker
				displayType="unstyled"
				icon="user"
				spritemap={spritemap}
			/>

			<ClaySticker
				displayType="warning"
				icon="user"
				spritemap={spritemap}
			/>

			<h2>{'Shape'}</h2>
			<ClaySticker icon="user" spritemap={spritemap} />

			<ClaySticker
				displayType="danger"
				icon="user"
				shape="circle"
				spritemap={spritemap}
			/>

			<h2>{'Size'}</h2>
			<ClaySticker
				displayType="light"
				icon="user"
				size="sm"
				spritemap={spritemap}
			/>

			<ClaySticker icon="user" spritemap={spritemap} />

			<ClaySticker
				displayType="success"
				icon="user"
				size="lg"
				spritemap={spritemap}
			/>

			<ClaySticker
				displayType="danger"
				icon="user"
				size="xl"
				spritemap={spritemap}
			/>

			<h2>{'Image'}</h2>
			<ClaySticker size="sm">
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>

			<ClaySticker>
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>

			<ClaySticker size="lg">
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>

			<ClaySticker size="xl">
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
