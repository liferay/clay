/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ClayButton, {DisplayType} from '../src/ClayButton';

import 'clay-css/lib/css/atlas.css';

const otherButtonTypes = [
	{
		displayType: 'primary',
		label: 'primary',
	},
	{
		displayType: 'secondary',
		label: 'secondary',
	},
	{
		displayType: 'link',
		label: 'link',
	},
	{
		displayType: 'unstyled',
		label: 'unstyled',
	},
	{label: 'Monospaced', monospaced: true},
	{block: true, label: 'Block'},
	{disabled: true, label: 'Disabled'},
	{label: 'Default Size'},
	{label: 'Small Size', small: true},
];

const App: React.FunctionComponent = () => (
	<div>
		{otherButtonTypes.map(({displayType, label, ...props}, i) => (
			<div key={i} style={{marginBottom: 12}}>
				<ClayButton displayType={displayType as DisplayType} {...props}>
					{label}
				</ClayButton>
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
