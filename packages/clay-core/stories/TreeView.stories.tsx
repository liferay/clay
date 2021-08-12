/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import '@clayui/css/src/scss/cadmin.scss';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import Icon from '@clayui/icon';
import {Provider} from '@clayui/provider';
import Sticker from '@clayui/sticker';
import {storiesOf} from '@storybook/react';
import React from 'react';

import {TreeView} from '../src/tree-view';

storiesOf('Components|ClayTreeView', module)
	.add('light', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView displayType="light">
				<TreeView.Item>
					<TreeView.ItemStack>
						<Icon symbol="folder" />
						{'Root'}
					</TreeView.ItemStack>
					<TreeView.Group>
						<TreeView.Item>{'Item'}</TreeView.Item>
					</TreeView.Group>
				</TreeView.Item>
			</TreeView>
		</Provider>
	))
	.add('dark', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView className="bg-dark" displayType="dark">
				<TreeView.Item>
					<TreeView.ItemStack>
						<Icon symbol="folder" />
						{'Root'}
					</TreeView.ItemStack>
					<TreeView.Group>
						<TreeView.Item>{'Item'}</TreeView.Item>
					</TreeView.Group>
				</TreeView.Item>
			</TreeView>
		</Provider>
	))
	.add('dynamic', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView
				items={[
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
						name: 'Liferay Drive',
					},
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
						name: 'Repositories',
					},
					{
						children: [{name: 'PDF'}, {name: 'Word'}],
						name: 'Documents and Media',
					},
				]}
			>
				{(item) => (
					<TreeView.Item>
						<TreeView.ItemStack>
							<Icon symbol="folder" />
							{item.name}
						</TreeView.ItemStack>
						<TreeView.Group items={item.children}>
							{(item) => (
								<TreeView.Item>{item.name}</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		</Provider>
	))
	.add('sticker', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView showExpanderOnHover={false}>
				<TreeView.Item>
					<TreeView.ItemStack>
						<Sticker
							displayType="primary"
							shape="user-icon"
							size="sm"
						>
							{'JH'}
						</Sticker>
						{'Juan Hidalgo'}
					</TreeView.ItemStack>
					<TreeView.Group>
						<TreeView.Item>
							<TreeView.ItemStack>
								<Sticker
									displayType="primary"
									shape="user-icon"
									size="sm"
								>
									{'VV'}
								</Sticker>
								{'Victor Valle'}
							</TreeView.ItemStack>
							<TreeView.Group>
								<TreeView.Item>
									<Sticker
										displayType="primary"
										shape="user-icon"
										size="sm"
									>
										{'SV'}
									</Sticker>
									{'Susana Vázquez'}
								</TreeView.Item>
								<TreeView.Item>
									<Sticker
										displayType="primary"
										shape="user-icon"
										size="sm"
									>
										{'MM'}
									</Sticker>
									{'Myriam Manso'}
								</TreeView.Item>
							</TreeView.Group>
						</TreeView.Item>
						<TreeView.Item>
							<Sticker
								displayType="primary"
								shape="user-icon"
								size="sm"
							>
								{'EY'}
							</Sticker>
							{'Emily Young'}
						</TreeView.Item>
					</TreeView.Group>
				</TreeView.Item>
			</TreeView>
		</Provider>
	));
