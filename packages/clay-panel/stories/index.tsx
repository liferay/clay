/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayLabel from '@clayui/label';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayPanel from '../src';

storiesOf('Components|ClayPanel', module)
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
	.add('collapsable', () => {
		const [expanded, setExpanded] = React.useState(true);

		return (
			<>
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
					<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
					<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
					<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
				</ClayPanel>

				<hr />
				<h3>{'Controlled Component'}</h3>

				<button onClick={() => setExpanded(!expanded)}>
					{'Toggle Expand'}
				</button>
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
					expanded={expanded}
					onExpandedChange={setExpanded}
					showCollapseIcon={boolean('Show Collapse Icon', true)}
					spritemap={spritemap}
				>
					<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
					<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
					<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
				</ClayPanel>
			</>
		);
	})
	.add('groups', () => (
		<ClayPanel.Group>
			{['One', 'Two', 'Three'].map((item) => (
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
				{['One', 'Two', 'Three'].map((item) => (
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
	))
	.add('collapsable w/ ClayPanelTitle', () => (
		<ClayPanel
			collapsable
			displayTitle={
				<ClayPanel.Title>
					<h3>{'Rule Name'}</h3>
					<span>{'If field '}</span>
					<ClayLabel displayType="success">{'Country'}</ClayLabel>
					<ClayLabel>{'Is Equal To'}</ClayLabel>
					<span>{'value '}</span>
					<ClayLabel displayType="info">{'Brazil'}</ClayLabel>
					<span>{'enable '}</span>
					<ClayLabel displayType="success">{'State'}</ClayLabel>
				</ClayPanel.Title>
			}
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
			<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
			<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
			<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
		</ClayPanel>
	))
	.add('w/ small', () => (
		<ClayPanel.Group small>
			{['One', 'Two', 'Three'].map((item) => (
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
	));
