/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayIcon from '@clayui/icon';
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

			<ClaySticker displayType="info">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="light">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="secondary">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="unstyled">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="warning">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<h2>{'Shape'}</h2>
			<ClaySticker>
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="danger" shape="circle">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<h2>{'Size'}</h2>
			<ClaySticker displayType="light" size="sm">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker>
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success" size="lg">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="danger" size="xl">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

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
