/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as ReactDOM from 'react-dom';
import ClayColorPicker from '../src/ClayColorPicker';
import React, {useState} from 'react';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	const [color, setColor] = useState();
	const [color2, setColor2] = useState();
	const [customColors, setCustoms] = useState([
		'#008000',
		'#00FFFF',
		'#0000FF',
	]);

	return (
		<div>
			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor}
				showHex
				value={color}
			/>

			<ClayColorPicker
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor}
				showHex
				useNative
				value={color}
			/>

			<ClayColorPicker
				colors={customColors}
				label="Custom Colors"
				name="colorPicker2"
				onColorsChange={setCustoms}
				onValueChange={setColor2}
				value={color2}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
