/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {boolean, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayPopover from '../src';

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

storiesOf('Components|ClayPopover', module).add('popover', () => (
	<ClayPopover
		alignPosition={
			select('Align Position', positions, 'bottom') as 'bottom'
		}
		disableScroll={boolean('Disable Scroll', false)}
		header="Popover"
		show={boolean('Show', true)}
	>
		{`Viennese flavour cup eu, percolator froth ristretto mazagran
				caffeine. White roast seasonal, mocha trifecta, dripper caffeine
				spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
				caffeine. White roast seasonal, mocha trifecta, dripper caffeine
				spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
				caffeine. White roast seasonal, mocha trifecta, dripper caffeine
				spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
				caffeine. White roast seasonal, mocha trifecta, dripper caffeine
				spoon acerbic to go macchiato strong.`}
	</ClayPopover>
));
