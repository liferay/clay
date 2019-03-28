/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayButton, {DISPLAY_TYPES} from '../src/ClayButton';

import 'clay-css/lib/css/atlas.css';

const otherButtonTypes = [
	{displayType: 'primary', label: 'Monospaced', monospaced: true},
	{block: true, displayType: 'primary', label: 'Block'},
	{disabled: true, displayType: 'primary', label: 'Disabled'},
	{displayType: 'primary', label: 'Default Size'},
	{displayType: 'primary', label: 'Small Size', small: true},
];

const App: React.FunctionComponent = () => (
	<div>
		{DISPLAY_TYPES.map(displayType => ({
			displayType,
			label: displayType,
		}))
			.concat(otherButtonTypes)
			.map(({label, ...props}) => (
				<div style={{marginBottom: 12}}>
					<ClayButton {...props}>{label}</ClayButton>
				</div>
			))}

		<ClayButton.Group>
			<ClayButton>{'This'}</ClayButton>
			<ClayButton displayType="secondary">{'is'}</ClayButton>
			<ClayButton>{'a'}</ClayButton>
			<ClayButton displayType="secondary">{'button'}</ClayButton>
			<ClayButton>{'group.'}</ClayButton>
		</ClayButton.Group>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
