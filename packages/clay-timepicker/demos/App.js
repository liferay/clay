import ReactDOM from 'react-dom';
import React from 'react';
import ClayTimepicker from '../src/ClayTimepicker';

/**
 * @return {React.Component}
 */
function DefaultState() {
	return (
		<ClayTimepicker />
	);
}

ReactDOM.render(<DefaultState />, document.getElementById('default-block'));
