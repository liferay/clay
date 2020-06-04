/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayToolbar from '../src';

storiesOf('Components|ClayToolbar', module)
	.add('default', () => (
		<ClayToolbar>
			<ClayToolbar.Nav>
				<ClayToolbar.Item expand>{'Item #1'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>{'Item #2'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Label>{'Label #1'}</ClayToolbar.Label>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Link>{'Link #1'}</ClayToolbar.Link>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Section>{'Section #1'}</ClayToolbar.Section>
					<ClayToolbar.Section>{'Section #2'}</ClayToolbar.Section>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayToolbar>
	))
	.add('subnav', () => (
		<ClayToolbar subnav={{disabled: true, displayType: 'primary'}}>
			<ClayToolbar.Nav>
				<ClayToolbar.Item expand>{'Item #1'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>{'Item #2'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Label>{'Label #1'}</ClayToolbar.Label>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Link displayType="primary" href="#">
						{'Link #1'}
					</ClayToolbar.Link>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Section>{'Section #1'}</ClayToolbar.Section>
					<ClayToolbar.Section>{'Section #2'}</ClayToolbar.Section>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayToolbar>
	))
	.add('component toolbar', () => (
		<ClayToolbar component>
			<ClayToolbar.Nav>
				<ClayToolbar.Item expand>{'Item #1'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>{'Item #2'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Label>{'Label #1'}</ClayToolbar.Label>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Link displayType="primary" href="#">
						{'Link #1'}
					</ClayToolbar.Link>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Section>{'Section #1'}</ClayToolbar.Section>
					<ClayToolbar.Section>{'Section #2'}</ClayToolbar.Section>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayToolbar>
	))
	.add('inlineBreakpoint', () => (
		<ClayToolbar inlineBreakpoint="xl">
			<ClayToolbar.Nav>
				<ClayToolbar.Item expand>{'Item #1'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>{'Item #2'}</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Label>{'Label #1'}</ClayToolbar.Label>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Link displayType="primary" href="#">
						{'Link #1'}
					</ClayToolbar.Link>
				</ClayToolbar.Item>
				<ClayToolbar.Item expand>
					<ClayToolbar.Section>{'Section #1'}</ClayToolbar.Section>
					<ClayToolbar.Section>{'Section #2'}</ClayToolbar.Section>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayToolbar>
	));
