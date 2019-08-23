/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClaySlider from '../src';
import React, {useState} from 'react';
import {boolean, number, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

storiesOf('ClaySlider', module).add('default', () => {
	const [value, setValue] = useState<number>(50);

	return (
		<div className="sheet">
			<div className="form-group">
				<label>{'With Tooltip'}</label>
				<ClaySlider
					disabled={boolean('Disabled', false)}
					max={number('Max', 100)}
					min={number('Min', 0)}
					onValueChange={setValue}
					step={number('Step', 1)}
					tooltipPosition={
						select('Tooltip position', ['bottom', 'top'], 'top') as
							| 'bottom'
							| 'top'
					}
					value={value}
				/>
			</div>
		</div>
	);
});
