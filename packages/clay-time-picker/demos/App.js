import ReactDOM from 'react-dom';
import React from 'react';
import ClayTimePicker from '../src/ClayTimePicker';

/**
 * @return {React.Component}
 */
function DefaultState() {
	return (
		<ClayTimePicker />
	);
}

ReactDOM.render(<DefaultState />, document.getElementById('default-block'));
