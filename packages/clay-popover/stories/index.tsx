/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayPopover from '../src';
import React from 'react';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const positions = [
	'top',
	'top-left',
	'top-right',
	'bottom',
	'bottom-left',
	'bottom-right',
	'left',
	'left-top',
	'left-bottom',
	'right',
	'right-top',
	'right-bottom',
] as const;

storiesOf('ClayPopover', module).add('popover', () => (
	<ClayPopover
		alignPosition={
			select('Align Position', positions, 'bottom') as 'bottom'
		}
		header="Popover"
	>
		{`Viennese flavour cup eu, percolator froth ristretto mazagran
				caffeine. White roast seasonal, mocha trifecta, dripper caffeine
				spoon acerbic to go macchiato strong.`}
	</ClayPopover>
));
