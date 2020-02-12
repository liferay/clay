/* eslint-disable no-console */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import '../src/Sidebar.scss';

import {ClayButtonWithIcon} from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayForm from '@clayui/form';
import {storiesOf} from '@storybook/react';
import classNames from 'classnames';
import React, {useContext} from 'react';

import ClaySidebar from '../src';
import SidebarContext from '../src/Context';

// const renderIcon = (props: any) => {
// 	console.log('props from renderIcon: ', props);
// 	// return (
// 	// 	<div className="bg-success" onClick={openCallback}>
// 	// 		{children}
// 	// 	</div>
// 	// );
// };

const items = [
	{
		icon: 'analytics',
		items: [
			{
				icon: 'square',
				label: 'Widgets',
				panelKey: 'widgets',
			},
			{
				icon: 'change',
				label: 'Applications',
				panelKey: 'apps',
			},
		],
		label: 'dxp',
	},

	{
		icon: 'anonymize',
		label: 'walter white',
	},

	{
		icon: 'bolt',
		items: [
			{
				icon: 'times',
				label: 'Times',
				panelKey: 'times',
			},
			{
				icon: 'adjust',
				label: 'Adjust',
				panelKey: 'adjust',
			},
		],
		label: 'musicxmatch',
	},
];

function Panel({...props}) {
	const {selectedPanelId} = useContext(SidebarContext);

	return (
		<div
			className={classNames('cm-panel', {
				'cm-active': selectedPanelId !== '',
			})}
			{...props}
		>
			<ClayButtonWithIcon
				className="btn-link cm-panel-close"
				displayType="link"
				spritemap={spritemap}
				symbol="times"
			/>
			<h1 className="cm-panel-title">{'Your sites'}</h1>
			<h2 className="cm-panel-title">
				<span>{'Soundhub Global'}</span>
			</h2>
			<ClayForm.Group className="cm-panel-search">
				<h3 className="cm-panel-subtitle">{'Recent'}</h3>
			</ClayForm.Group>
			{props.children}
		</div>
	);
}

storiesOf('Components|ClaySidebar', module).add('default', () => (
	<ClaySidebar items={items} spritemap={spritemap}>
		<Panel panelKey="widgets" />
	</ClaySidebar>
));
