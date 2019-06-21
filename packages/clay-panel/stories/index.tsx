/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayPanel from '../src';
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayPanel', module)
	.add('default', () => (
		<ClayPanel
			displayTitle={text('Display Title', 'Title')}
			displayType={
				select(
					'Display Type',
					{
						secondary: 'secondary',
						unstyled: 'unstyled',
					},
					undefined
				) as undefined
			}
		>
			<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
			<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
			<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
		</ClayPanel>
	))
	.add('collapsable', () => (
		<ClayPanel
			collapsable
			displayTitle="Toggle me for expanding!"
			displayType={
				select(
					'Display Type',
					{
						secondary: 'secondary',
						unstyled: 'unstyled',
					},
					undefined
				) as undefined
			}
			showCollapseIcon={boolean('Show Collapse Icon', true)}
			spritemap={spritemap}
		>
			<ClayPanel.Body>{'Here is some content inside.'}</ClayPanel.Body>
		</ClayPanel>
	))
	.add('groups', () => (
		<ClayPanel.Group>
			{['One', 'Two', 'Three'].map(item => (
				<ClayPanel
					collapsable
					displayTitle={item}
					key={item}
					showCollapseIcon={boolean('Show Collapse Icon', true)}
					spritemap={spritemap}
				>
					<ClayPanel.Body>
						{`Here is some content inside for number ${item}`}
					</ClayPanel.Body>
				</ClayPanel>
			))}
		</ClayPanel.Group>
	))
	.add('w/ sheet', () => (
		<div className="sheet">
			<ClayPanel.Group fluid={boolean('Toggle fluid', true)}>
				{['One', 'Two', 'Three'].map(item => (
					<ClayPanel
						collapsable
						displayTitle={item}
						displayType="secondary"
						key={item}
						showCollapseIcon={boolean('Show Collapse Icon', true)}
						spritemap={spritemap}
					>
						<ClayPanel.Body>
							{`Here is some content inside for number ${item}`}
						</ClayPanel.Body>
					</ClayPanel>
				))}
			</ClayPanel.Group>
		</div>
	));
