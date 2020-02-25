/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayProgressBar from '@clayui/progress-bar';
import {boolean, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayTable from '../src';
const thumbnail = require('./static/thumbnail_coffee.jpg');

function ClayCheckboxWithState(props: any) {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={false}
			indeterminate={false}
			onChange={() => setValue(val => !val)}
			{...props}
		>
			{props.children}
		</ClayCheckbox>
	);
}

function Dropdown() {
	return (
		<ClayDropDownWithItems
			items={[
				{href: '#1', label: 'One'},
				{href: '#2', label: 'Two'},
				{href: '#3', label: 'Three'},
			]}
			spritemap={spritemap}
			trigger={
				<ClayButton
					className="component-action"
					displayType="unstyled"
					monospaced
				>
					<ClayIcon spritemap={spritemap} symbol="ellipsis-v" />
				</ClayButton>
			}
		/>
	);
}

storiesOf('Components|ClayTable', module)
	.add('default', () => (
		<ClayTable>
			<ClayTable.Head>
				<ClayTable.Row>
					<ClayTable.Cell expanded headingCell headingTitle>
						{'Teams'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						{'Region'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						{'Country'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						{'Description'}
					</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Head>
			<ClayTable.Body>
				<ClayTable.Row>
					<ClayTable.Cell headingTitle>
						{'White and Red'}
					</ClayTable.Cell>
					<ClayTable.Cell>{'South America'}</ClayTable.Cell>
					<ClayTable.Cell>{'Brazil'}</ClayTable.Cell>
					<ClayTable.Cell truncate>
						{
							'Homero aeterno conclusionemque est in, scribentur mediocritatem mea ut. Ad voluptua vituperata constituam pro. Mel at constituto efficiantur, in eirmod lobortis mei. Eam vero probo efficiendi ne, molestie pericula nec in, dolore minimum duo et. Mundi epicuri patrioque in vis, virtute legimus oporteat cu eum.'
						}
					</ClayTable.Cell>
				</ClayTable.Row>
				<ClayTable.Row>
					<ClayTable.Cell headingTitle>
						{'White and Purple'}
					</ClayTable.Cell>
					<ClayTable.Cell>{'Europe'}</ClayTable.Cell>
					<ClayTable.Cell>{'Spain'}</ClayTable.Cell>
					<ClayTable.Cell truncate>
						{
							'Homero aeterno conclusionemque est in, scribentur mediocritatem mea ut. Ad voluptua vituperata constituam pro. Mel at constituto efficiantur, in eirmod lobortis mei. Eam vero probo efficiendi ne, molestie pericula nec in, dolore minimum duo et. Mundi epicuri patrioque in vis, virtute legimus oporteat cu eum.'
						}
					</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Body>
		</ClayTable>
	))
	.add('with hover', () => {
		const DownloadButton = () => (
			<ClayButton displayType="secondary">{'Download'}</ClayButton>
		);

		const ImageCell = () => (
			<div className="autofit-row">
				<div className="autofit-col">
					<img
						alt="thumbnail"
						className="table-img"
						src={thumbnail}
					/>
				</div>
				<div className="autofit-col autofit-col-expand">
					<div className="table-title">
						<span className="text-truncate-inline">
							<span
								className="text-truncate"
								title="Homero aeterno conclusionemque est in, scribentur mediocritatem mea ut. Ad voluptua vituperata constituam pro. Mel at constituto efficiantur, in eirmod lobortis mei. Eam vero probo efficiendi ne, molestie pericula nec in, dolore minimum duo et. Mundi epicuri patrioque in vis, virtute legimus oporteat cu eum."
							>
								{
									'Homero aeterno conclusionemque est in, scribentur mediocritatem mea ut. Ad voluptua vituperata constituam pro. Mel at constituto efficiantur, in eirmod lobortis mei. Eam vero probo efficiendi ne, molestie pericula nec in, dolore minimum duo et. Mundi epicuri patrioque in vis, virtute legimus oporteat cu eum.'
								}
							</span>
						</span>
					</div>
				</div>
			</div>
		);

		const HeadCellTitles = [
			'Image',
			'Origin',
			'Time',
			'Spicy Level',
			'Download',
			'Difficulty',
			'',
		];

		const rowCellItems = [
			'',
			'',
			'',
			'',
			<DownloadButton key={5} />,
			<ClayProgressBar key={6} spritemap={spritemap} value={0} />,
			<Dropdown key={7} />,
		];

		return (
			<form>
				<ClayTable
					bodyVerticalAlignment={select(
						'body vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					borderedColumns={boolean('bordered columns', false)}
					borderless={boolean('borderless', false)}
					headingNoWrap={boolean('heading no wrap', false)}
					headVerticalAlignment={select(
						'head vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					hover={boolean('hover', true)}
					noWrap={boolean('no wrap', false)}
					responsive={boolean('responsive', false)}
					responsiveSize={select(
						'responsive size',
						{lg: 'lg', md: 'md', sm: 'sm', xl: 'xl'},
						'sm'
					)}
					striped={boolean('striped', false)}
					tableVerticalAlignment={select(
						'table vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
				>
					<ClayTable.Head>
						<ClayTable.Row>
							<ClayTable.Cell headingCell>
								<ClayButton displayType="unstyled">
									{'Name'}
								</ClayButton>
								<ClayIcon
									spritemap={spritemap}
									symbol="order-arrow-up"
								/>
							</ClayTable.Cell>
							{HeadCellTitles.map((title, index) => (
								<ClayTable.Cell headingCell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Head>
					<ClayTable.Body>
						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={8}>
								{'Folders'}
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row active>
							<ClayTable.Cell expanded headingTitle>
								{'Photos'}
							</ClayTable.Cell>
							{rowCellItems.map((child, index) => (
								<ClayTable.Cell key={index}>
									{child}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Videos'}
							</ClayTable.Cell>
							{rowCellItems.map((child, index) => (
								<ClayTable.Cell key={index}>
									{child}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>

						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={8}>
								{'Recipes'}
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Hamburger'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ImageCell />
							</ClayTable.Cell>
							<ClayTable.Cell>{'U.S.A'}</ClayTable.Cell>
							<ClayTable.Cell align="right">
								{'10 min.'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayLabel displayType="success">
									{'No Spicy'}
								</ClayLabel>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayButton displayType="secondary">
									{'Download'}
								</ClayButton>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayProgressBar
									spritemap={spritemap}
									value={2}
								/>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<Dropdown />
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Ramen'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ImageCell />
							</ClayTable.Cell>
							<ClayTable.Cell>{'China'}</ClayTable.Cell>
							<ClayTable.Cell align="right">
								{'90 min.'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayLabel displayType="warning">
									{'Spicy'}
								</ClayLabel>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayButton displayType="secondary">
									{'Download'}
								</ClayButton>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayProgressBar
									spritemap={spritemap}
									value={8}
								/>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<Dropdown />
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={8}>
								{'Chefs'}
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Ferrán Adriá'}
							</ClayTable.Cell>
							{rowCellItems.map((child, index) => (
								<ClayTable.Cell key={index}>
									{child}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Body>
				</ClayTable>
			</form>
		);
	})
	.add('with table list', () => {
		const HeadCellTitles = [
			'ID',
			'Title',
			'Status',
			'Modified Date',
			'Display Date',
			'Author',
		];

		const rowCellTitles = [
			<ClayCheckboxWithState aria-label="Select 21146" key={0} />,
			'21146',
			'Some regular text',
			'--',
			'1 Hour Ago',
			'--',
			'Stanley Nelson',
		];

		return (
			<form>
				<ClayTable
					bodyVerticalAlignment={select(
						'body vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					borderedColumns={boolean('bordered columns', false)}
					borderless={boolean('borderless', false)}
					headingNoWrap={boolean('heading no wrap', false)}
					headVerticalAlignment={select(
						'head vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					hover={boolean('hover', true)}
					noWrap={boolean('no wrap', true)}
					responsive={boolean('responsive', false)}
					responsiveSize={select(
						'responsive size',
						{lg: 'lg', md: 'md', sm: 'sm', xl: 'xl'},
						'sm'
					)}
					striped={boolean('striped', false)}
					tableVerticalAlignment={select(
						'table vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
				>
					<ClayTable.Head>
						<ClayTable.Row>
							<ClayTable.Cell />
							{HeadCellTitles.map((title, index) => (
								<ClayTable.Cell
									headingCell
									headingTitle
									key={index}
								>
									<span className="text-truncate">
										{title}
									</span>
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Head>

					<ClayTable.Body>
						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={9}>
								{'Group 1'}
							</ClayTable.Cell>
						</ClayTable.Row>
						<ClayTable.Row>
							{rowCellTitles.map((title, index) => (
								<ClayTable.Cell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
						<ClayTable.Row>
							{rowCellTitles.map((title, index) => (
								<ClayTable.Cell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
						<ClayTable.Row>
							{rowCellTitles.map((title, index) => (
								<ClayTable.Cell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Body>
				</ClayTable>
			</form>
		);
	})
	.add('with table list striped', () => (
		<form>
			<ClayTable
				bodyVerticalAlignment={select(
					'body vertical alignment',
					{bottom: 'bottom', middle: 'middle', top: 'top'},
					'middle'
				)}
				borderedColumns={boolean('bordered columns', false)}
				borderless={boolean('bordeless', false)}
				headingNoWrap={boolean('heading no wrap', false)}
				headVerticalAlignment={select(
					'head vertical alignment',
					{bottom: 'bottom', middle: 'middle', top: 'top'},
					'middle'
				)}
				hover={boolean('hover', true)}
				noWrap={boolean('no wrap', false)}
				responsive={boolean('responsive', false)}
				responsiveSize={select(
					'responsive size',
					{lg: 'lg', md: 'md', sm: 'sm', xl: 'xl'},
					'sm'
				)}
				striped={boolean('striped', true)}
				tableVerticalAlignment={select(
					'table vertical alignment',
					{bottom: 'bottom', middle: 'middle', top: 'top'},
					'middle'
				)}
			>
				<ClayTable.Head>
					<ClayTable.Row>
						<ClayTable.Cell headingCell />
						<ClayTable.Cell expanded headingCell headingTitle>
							<span className="text-truncate">
								{'Description'}
							</span>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<span className="text-truncate">{'Format'}</span>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<span className="text-truncate">{'Label'}</span>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell />
					</ClayTable.Row>
				</ClayTable.Head>

				<ClayTable.Body>
					<ClayTable.Row>
						<ClayTable.Cell>
							<ClayCheckboxWithState aria-label="Select first row" />
						</ClayTable.Cell>
						<ClayTable.Cell headingTitle truncate>
							{
								'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
							}
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="1">{'JPG'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="1">{'JPG'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<Dropdown />
						</ClayTable.Cell>
					</ClayTable.Row>
					<ClayTable.Row>
						<ClayTable.Cell>
							<ClayCheckboxWithState aria-label="Select second row" />
						</ClayTable.Cell>
						<ClayTable.Cell headingTitle truncate>
							{
								'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
							}
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="2">{'GIF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="2">{'GIF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<Dropdown />
						</ClayTable.Cell>
					</ClayTable.Row>
					<ClayTable.Row>
						<ClayTable.Cell>
							<ClayCheckboxWithState aria-label="Select third row" />
						</ClayTable.Cell>
						<ClayTable.Cell headingTitle truncate>
							{
								'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
							}
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="3">{'TIFF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="3">{'TIFF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<Dropdown />
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		</form>
	));
