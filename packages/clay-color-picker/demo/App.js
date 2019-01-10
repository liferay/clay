import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from '../src/index';

/**
 * Application for rendering demos
 * @return {React.Component}
 */
function App() {
	const [color, setColor] = useState();
	const [color2, setColor2] = useState();
	const [customColors, setCustoms] = useState([
		'#008000',
		'#00FFFF',
		'#0000FF',
	]);

	return (
		<div>
			<ColorPicker
				allowAny
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor}
				showHex
				value={color}
			/>

			<ColorPicker
				allowAny
				label="Default Colors"
				name="colorPicker1"
				onValueChange={setColor}
				showHex
				useNative
				value={color}
			/>

			<ColorPicker
				colors={customColors}
				label="Custom Colors"
				name="colorPicker2"
				onColorsChange={setCustoms}
				onValueChange={setColor2}
				value={color2}
			/>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
