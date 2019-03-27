/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker from '../src/ClayTimePicker';
import React from 'react';
import ReactDOM from 'react-dom';

function DefaultState() {
	return <ClayTimePicker />;
}

ReactDOM.render(<DefaultState />, document.getElementById('default-block'));
