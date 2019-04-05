/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayImage from '../src/ClayImage';

import 'clay-css/lib/css/atlas.css';

const App: React.FunctionComponent = () => {
	return (
		<div>
			<h2>{'Default'}</h2>
			<ClayImage
				alt="placeholder"
				src="https://via.placeholder.com/150"
			/>

			<h2>{'With className'}</h2>
			<span className="sticker sticker-circle sticker-primary">
				<span className="sticker-overlay">
					<ClayImage
						alt="placeholder"
						className="sticker-img"
						src="https://via.placeholder.com/150"
					/>
				</span>
			</span>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
