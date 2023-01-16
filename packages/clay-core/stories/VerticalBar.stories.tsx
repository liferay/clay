/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import React from 'react';

import {VerticalBar} from '../src/vertical-bar';

export default {
	argTypes: {
		activation: {
			control: {type: 'select'},
			options: ['manual', 'automatic'],
		},
		barDisplayType: {
			control: {type: 'select'},
			options: [null, 'light', 'dark'],
		},
		contentDisplayType: {
			control: {type: 'select'},
			options: [null, 'light', 'dark'],
		},
	},
	component: VerticalBar,
	title: 'Design System/Components/VerticalBar',
};

export const Default = (args: any) => {
	return (
		<>
			<VerticalBar activation={args.activation} position="left">
				<VerticalBar.Bar displayType={args.barDisplayType}>
					<VerticalBar.Item>
						<Button aria-label="Tag tab" displayType={null}>
							<Icon symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item divider>
						<Button aria-label="Message tab" displayType={null}>
							<Icon symbol="message" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button
							aria-label="Effects tab"
							displayType={null}
							onClick={(event) => {
								event.preventDefault();

								alert('Clicked');
							}}
						>
							<Icon symbol="effects" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>

				<VerticalBar.Content displayType={args.contentDisplayType}>
					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Tag</div>
						</div>
					</VerticalBar.Panel>

					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Message</div>
						</div>
					</VerticalBar.Panel>
				</VerticalBar.Content>
			</VerticalBar>

			<VerticalBar activation={args.activation} position="right">
				<VerticalBar.Content displayType={args.contentDisplayType}>
					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Tag</div>
						</div>
					</VerticalBar.Panel>

					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Message</div>
						</div>
					</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar displayType={args.barDisplayType}>
					<VerticalBar.Item>
						<Button aria-label="Tag tab" displayType={null}>
							<Icon symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item divider>
						<Button aria-label="Message tab" displayType={null}>
							<Icon symbol="message" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button
							aria-label="Effects tab"
							displayType={null}
							onClick={(event) => {
								event.preventDefault();

								alert('Clicked');
							}}
						>
							<Icon symbol="effects" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		</>
	);
};

Default.args = {
	activation: 'manual',
	barDisplayType: 'light',
	contentDisplayType: 'light',
};

export const DynamicContent = (args: any) => {
	const items = [
		{
			icon: 'tag',
			title: 'Tag',
		},
		{
			divider: true,
			icon: 'message',
			title: 'Message',
		},
		{
			icon: 'effects',
			title: 'Effects',
		},
	];

	return (
		<VerticalBar defaultActive="Tag">
			<VerticalBar.Content
				displayType={args.contentDisplayType}
				items={items}
			>
				{(item) => (
					<VerticalBar.Panel key={item.title} tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">{item.title}</div>
						</div>
					</VerticalBar.Panel>
				)}
			</VerticalBar.Content>

			<VerticalBar.Bar
				displayType={args.barDisplayType}
				items={items}
				virtualize
			>
				{(item) => (
					<VerticalBar.Item divider={item.divider} key={item.title}>
						<Button
							aria-label={`${item.title} tab`}
							displayType={null}
						>
							<Icon symbol={item.icon} />
						</Button>
					</VerticalBar.Item>
				)}
			</VerticalBar.Bar>
		</VerticalBar>
	);
};

DynamicContent.args = {
	barDisplayType: 'light',
	contentDisplayType: 'light',
};
