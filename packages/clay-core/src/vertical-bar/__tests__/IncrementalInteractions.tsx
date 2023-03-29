/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

import {Button, Icon, VerticalBar} from '../../';

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

const spritemap = 'icons.svg';

describe('VerticalBar incremental interactions', () => {
	afterEach(cleanup);

	it('clicking the item opens the panel with static content', () => {
		const {getByLabelText, getByText} = render(
			<VerticalBar>
				<VerticalBar.Content>
					<VerticalBar.Panel>Tag</VerticalBar.Panel>

					<VerticalBar.Panel>Message</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar>
					<VerticalBar.Item divider>
						<Button aria-label="Tag" displayType={null}>
							<Icon spritemap={spritemap} symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button aria-label="Message" displayType={null}>
							<Icon spritemap={spritemap} symbol="message" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		);

		const tagButton = getByLabelText('Tag');

		fireEvent.click(tagButton);

		const tagPanel = getByText('Tag');

		expect(tagButton.classList).toContain('active');
		expect(tagPanel.classList).toContain('c-slideout-show');
	});

	it('clicking the item opens the panel with dynamic content', () => {
		const {getByLabelText, getByText} = render(
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
							<Button aria-label={item.title} displayType={null}>
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

		const messageButton = getByLabelText('Message');

		fireEvent.click(messageButton);

		const messagePanel = getByText('Message');

		expect(messageButton.classList).toContain('active');
		expect(messagePanel.classList).toContain('c-slideout-show');
	});

	it('clicking the item closes the panel', () => {
		const {getByLabelText, getByText} = render(
			<VerticalBar defaultActive="Message">
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
							<Button aria-label={item.title} displayType={null}>
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

		const messageButton = getByLabelText('Message');

		fireEvent.click(messageButton);

		const messagePanel = getByText('Message');

		expect(messageButton.classList).not.toContain('active');
		expect(messagePanel.classList).not.toContain('c-slideout-show');
	});

	it('clicking the item switches between the visible panel', () => {
		const {getByLabelText, getByText} = render(
			<div id="switchBetweenVisiblePanel">
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
								<Button
									aria-label={item.title}
									displayType={null}
								>
									<Icon
										spritemap={spritemap}
										symbol={item.icon}
									/>
								</Button>
							</VerticalBar.Item>
						)}
					</VerticalBar.Bar>
				</VerticalBar>
			</div>
		);

		const messageButton = getByLabelText('Message');

		fireEvent.click(messageButton);

		const messagePanel = getByText('Message');

		expect(messageButton.classList).toContain('active');
		expect(messagePanel.classList).toContain('c-slideout-show');

		const tagButton = getByLabelText('Tag');

		fireEvent.click(tagButton);

		const container = document.getElementById('switchBetweenVisiblePanel');

		container?.addEventListener('transitionend', () => {
			const tagPanel = getByText('Tag');

			expect(messageButton.classList).not.toContain('active');
			expect(messagePanel.classList).not.toContain('c-slideout-show');
			expect(tagButton.classList).toContain('active');
			expect(tagPanel.classList).toContain('c-slideout-show');
		});
	});
});
