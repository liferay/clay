/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayPopover, {ALIGN_POSITIONS} from '../src';

storiesOf('Components|ClayPopover', module)
	.add('popover', () => (
		<ClayPopover
			alignPosition={
				select('Align Position', ALIGN_POSITIONS, 'bottom') as 'bottom'
			}
			disableScroll={boolean('Disable Scroll', false)}
			header="Popover"
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
	))
	.add('popover w/ trigger', () => {
		return (
			<div>
				<ClayPopover
					alignPosition={
						select(
							'Align Position',
							ALIGN_POSITIONS,
							'right'
						) as 'right'
					}
					disableScroll={boolean('Disable Scroll', false)}
					header="Popover"
					trigger={
						<ClayButtonWithIcon
							spritemap={spritemap}
							symbol="info-circle-open"
						/>
					}
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
			</div>
		);
	})
	.add('popover w/ manual show', () => {
		const [show, setShow] = React.useState(false);

		return (
			<>
				<ClayButton
					onClick={() => setShow(!show)}
					style={{marginRight: 40}}
				>
					{'additional trigger'}
				</ClayButton>

				<ClayPopover
					header="Popover"
					onShowChange={setShow}
					show={show}
					trigger={
						<ClayButtonWithIcon
							spritemap={spritemap}
							symbol="info-circle-open"
						/>
					}
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
			</>
		);
	});
