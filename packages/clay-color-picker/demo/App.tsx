/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as ReactDOM from 'react-dom';
import ClayColorPicker from '../src/ClayColorPicker';
import React, {useState} from 'react';

import 'clay-css/lib/css/atlas.css';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

const App: React.FunctionComponent = () => {
	const [color, setColor] = useState();
	const [color2, setColor2] = useState();
	const [color3, setColor3] = useState();
	const [customColors, setCustoms] = useState(['008000', '00FFFF', '0000FF']);

	return (
		<div>
			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor}
				spritemap={spritemap}
				title={'Default'}
				value={color}
			/>

			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor2}
				showHex={false}
				spritemap={spritemap}
				title={'Default without hex input'}
				value={color2}
			/>

			<ClayColorPicker
				colors={customColors}
				label="Custom Colors"
				name="colorPicker2"
				onColorsChange={setCustoms}
				onValueChange={setColor3}
				spritemap={spritemap}
				title={'Custom Colors'}
				value={color3}
			/>

			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor}
				spritemap={spritemap}
				title={'Native'}
				useNative
				value={color}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
