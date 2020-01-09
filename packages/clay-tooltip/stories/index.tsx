/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import * as React from 'react';

import ClayTooltip, {ClayTooltipProvider} from '../src';

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

storiesOf('Components|ClayTooltip', module)
	.add('tooltip', () => (
		<ClayTooltip
			alignPosition={
				select('Align Position', positions, 'bottom') as 'bottom'
			}
			show
		>
			{'Tooltip'}
		</ClayTooltip>
	))
	.add('tooltip w/ newline', () => (
		<ClayTooltip show>{'Tooltip\nwith\nnew\n\nlines'}</ClayTooltip>
	))
	.add('ClayTooltipProvider', () => (
		<div style={{padding: 50}}>
			<button title="Default">{'No Tooltip'}</button>

			<ClayTooltipProvider>
				<div>
					<button title="Default">{'Default'}</button>

					{/* Note that the newline has to be a string within braces. */}
					<button title={'Line1\nLine2'}>
						{'With a line Break'}
					</button>

					<button data-tooltip-align="left" title="Left">
						{'Left'}
					</button>

					<button data-tooltip-align="right" title="Right">
						{'Right'}
					</button>

					<button data-tooltip-align="top" title="Top">
						{'Top'}
					</button>

					<button
						data-tooltip-align="bottom"
						data-tooltip-delay="0"
						title="Bottom"
					>
						{'Custom Delay'}
					</button>

					<div
						data-tooltip-align="bottom"
						style={{
							backgroundColor: '#F6F8FA',
							border: '1px solid #D1D5DA',
							padding: 8,
						}}
						title="I'm on the parent element"
					>
						<button>{'nested'}</button>
					</div>
				</div>
			</ClayTooltipProvider>
		</div>
	));
