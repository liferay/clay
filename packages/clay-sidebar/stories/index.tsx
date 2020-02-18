/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {ClayButtonWithIcon} from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React, {useState} from 'react';

import ClaySidebar from '../src';

const panels = [
	{
		expand: true,
		icon: 'chip',
		label: 'Infrastructure',
		panelId: 'infra',
	},
	{
		icon: 'calendar',
		label: 'Calendar',
		panelId: 'cal',
	},
	{
		expand: true,
		icon: 'bolt',
		label: 'Speed',
		panelId: 'speed',
	},
];

storiesOf('Components|ClaySidebar', module).add('default', () => {
	const [activePanelId, setActivePanelId] = useState<string>('');

	return (
		<ClaySidebar>
			<ClaySidebar.Panel show={activePanelId === 'infra'}>
				<h1>{'Panel 1'}</h1>
				<ClaySidebar.Search
					placeholder="Search on Panel 1"
					spritemap={spritemap}
				/>
			</ClaySidebar.Panel>
			<ClaySidebar.Panel show={activePanelId === 'cal'}>
				<h1>{'Panel 2'}</h1>
				<ClaySidebar.Search
					placeholder="Search on Panel 2"
					spritemap={spritemap}
				/>
			</ClaySidebar.Panel>
			<ClaySidebar.Panel show={activePanelId === 'speed'}>
				<h1>{'Panel 3'}</h1>
				<ClaySidebar.Search
					placeholder="Search on Panel 3"
					spritemap={spritemap}
				/>
			</ClaySidebar.Panel>
			<ClaySidebar.Toolbar>
				{panels.map(({expand, icon, label, panelId}) => (
					<ClaySidebar.ToolbarItem
						expand={expand}
						key={`ToolbarItem${panelId}`}
					>
						<ClayButtonWithIcon
							aria-label={label}
							onClick={() => {
								if (activePanelId === panelId) {
									setActivePanelId('');
									return;
								}
								setActivePanelId(panelId);
							}}
							spritemap={spritemap}
							symbol={icon}
						/>
					</ClaySidebar.ToolbarItem>
				))}
			</ClaySidebar.Toolbar>
		</ClaySidebar>
	);
});
