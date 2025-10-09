/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Button, Icon, VerticalBar} from '../../';

const spritemap = 'icons.svg';

describe('VerticalBar basic rendering', () => {
	afterEach(cleanup);

	it('render static content', () => {
		const {container} = render(
			<VerticalBar>
				<VerticalBar.Content>
					<VerticalBar.Panel>Tag</VerticalBar.Panel>

					<VerticalBar.Panel>Message</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar>
					<VerticalBar.Item divider>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="message" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('render dynamic content', () => {
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

		const {container} = render(
			<VerticalBar>
				<VerticalBar.Content items={items}>
					{(item) => (
						<VerticalBar.Panel key={item.title}>
							{item.title}
						</VerticalBar.Panel>
					)}
				</VerticalBar.Content>

				<VerticalBar.Bar items={items}>
					{(item) => (
						<VerticalBar.Item
							divider={item.divider}
							key={item.title}
						>
							<Button displayType={null}>
								<Icon
									spritemap={spritemap}
									symbol={item.icon}
								/>
							</Button>
						</VerticalBar.Item>
					)}
				</VerticalBar.Bar>
			</VerticalBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('render light theme', () => {
		const {container} = render(
			<VerticalBar>
				<VerticalBar.Content displayType="light">
					<VerticalBar.Panel>Tag</VerticalBar.Panel>

					<VerticalBar.Panel>Message</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar displayType="light">
					<VerticalBar.Item divider>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="message" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('render dark theme', () => {
		const {container} = render(
			<VerticalBar>
				<VerticalBar.Content displayType="dark">
					<VerticalBar.Panel>Tag</VerticalBar.Panel>

					<VerticalBar.Panel>Message</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar displayType="dark">
					<VerticalBar.Item divider>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="message" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('render component in left position', () => {
		const {container} = render(
			<VerticalBar position="left">
				<VerticalBar.Bar>
					<VerticalBar.Item divider>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="message" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>

				<VerticalBar.Content>
					<VerticalBar.Panel>Tag</VerticalBar.Panel>

					<VerticalBar.Panel>Message</VerticalBar.Panel>
				</VerticalBar.Content>
			</VerticalBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders the component with the active panel', () => {
		const {container} = render(
			<VerticalBar defaultActive="$.0">
				<VerticalBar.Content>
					<VerticalBar.Panel>Tag</VerticalBar.Panel>

					<VerticalBar.Panel>Message</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar>
					<VerticalBar.Item divider>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button displayType={null}>
							<Icon spritemap={spritemap} symbol="message" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		);

		expect(container).toMatchSnapshot();
	});
});
