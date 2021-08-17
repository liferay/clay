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

interface IItem {
	children?: Array<IItem>;
	name: string;
	status?: string;
	type?: string;
}

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
	.add('nested', () => {
		const TYPES_TO_SYMBOLS = {
			document: 'document-text',
			pdf: 'document-pdf',
			success: 'check-circle-full',
			warning: 'warning-full',
		} as Record<string, string>;

		const TYPES_TO_COLORS = {
			document: 'text-primary',
			pdf: 'text-danger',
			success: 'text-success',
			warning: 'text-warning',
		} as Record<string, string>;

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					items={[
						{
							children: [
								{
									children: [
										{
											children: [{name: 'Research 1'}],
											name: 'Research',
										},
										{
											children: [{name: 'News 1'}],
											name: 'News',
										},
									],
									name: 'Blogs',
								},
								{
									children: [
										{
											children: [
												{
													name: 'Instructions.pdf',
													status: 'success',
													type: 'pdf',
												},
											],
											name: 'PDF',
										},
										{
											children: [
												{
													name:
														'Treeview review.docx',
													status: 'success',
													type: 'document',
												},
												{
													name:
														'Heuristics Evaluation.docx',
													status: 'success',
													type: 'document',
												},
											],
											name: 'Word',
										},
									],
									name: 'Documents and Media',
								},
							],
							name: 'Liferay Drive',
							type: 'cloud',
						},
						{
							children: [
								{name: 'Blogs'},
								{name: 'Documents and Media'},
							],
							name: 'Repositories',
							type: 'repository',
						},
						{
							children: [{name: 'PDF'}, {name: 'Word'}],
							name: 'Documents and Media',
							status: 'warning',
						},
					]}
					nestedKey="children"
				>
					{(item: IItem) => (
						<TreeView.Item>
							<TreeView.ItemStack>
								<Icon symbol={item.type ?? 'folder'} />
								{item.name}
								{item.status && (
									<Icon
										className={TYPES_TO_COLORS[item.status]}
										symbol={TYPES_TO_SYMBOLS[item.status]}
									/>
								)}
							</TreeView.ItemStack>
							<TreeView.Group items={item.children}>
								{({name, status, type}: IItem) => (
									<TreeView.Item>
										{type && (
											<Icon
												className={
													TYPES_TO_COLORS[type]
												}
												symbol={TYPES_TO_SYMBOLS[type]}
											/>
										)}
										{name}
										{status && (
											<Icon
												className={
													TYPES_TO_COLORS[status]
												}
												symbol={
													TYPES_TO_SYMBOLS[status]
												}
											/>
										)}
									</TreeView.Item>
								)}
							</TreeView.Group>
						</TreeView.Item>
					)}
				</TreeView>
			</Provider>
		);
	})
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
