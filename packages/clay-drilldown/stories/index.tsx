/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayIcon from '@clayui/icon';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayDrilldown from '../src';

storiesOf('Components|ClayDrilldown', module).add('default', () => (
	<div style={{width: 300, margin: '0 auto'}}>
		<style
			dangerouslySetInnerHTML={{
				__html: `

				.drilldown-next-enter {
					transform: translateX(0%);
				}

				.drilldown-next-enter-active {
					transform: translateX(-100%);
				}

				.drilldown-next-exit {
					transform: translateX(0%);
				}

				.drilldown-next-exit-active {
					transform: translateX(-100%);
				}



				.drilldown-prev-enter {
					transform: translateX(-100%);
				}

				.drilldown-prev-enter-active {
					transform: translateX(0%);
				}

				.drilldown-prev-exit {
					transform: translateX(-100%);
				}

				.drilldown-prev-exit-active {
					transform: translateX(0%);
				}
			`,
			}}
		/>

		<ClayDrilldown
			items={[
				{href: '#', title: 'One'},
				{onClick: () => alert('test'), title: 'Two'},
				{
					items: [
						{title: 'Four', href: '#'},
						// {
						// 	items: [{title: 'Six'}, {title: 'Seven'}],
						// 	title: 'Five',
						// },
					],
					title: 'Three',
				},
			]}
			spritemap={spritemap}
		/>
	</div>
));
