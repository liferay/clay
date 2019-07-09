/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayDropDown, {Align} from '../src';
import ClayForm from '@clayui/form';
import React, {useState} from 'react';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={select(
				'Alignment Position',
				{
					BottomCenter: Align.BottomCenter,
					BottomLeft: Align.BottomLeft,
					BottomRight: Align.BottomRight,
					LeftCenter: Align.LeftCenter,
					RightCenter: Align.RightCenter,
					TopCenter: Align.TopCenter,
					TopLeft: Align.TopLeft,
					TopRight: Align.TopRight,
				},
				Align.BottomLeft
			)}
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		>
			{children}
		</ClayDropDown>
	);
};

storiesOf('ClayDropDown', module)
	.add('default', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('groups', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Group #1">
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>

				<ClayDropDown.Group header="Group #2">
					{[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{href: '#three', label: 'three'},
					].map((item, i) => (
						<ClayDropDown.Item href={item.href} key={i}>
							{item.label}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('checkbox', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				<ClayDropDown.Item>
					<ClayForm.Checkbox
						checked
						label="I'm a checkbox!"
						onChange={() => {}}
					/>
				</ClayDropDown.Item>
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('radio', () => (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				<ClayDropDown.Group header="Order">
					<ClayDropDown.Item>
						<ClayForm.Radio checked label="Ascending" value="asc" />
					</ClayDropDown.Item>
					<ClayDropDown.Item>
						<ClayForm.Radio label="Descending" value="desc" />
					</ClayDropDown.Item>
				</ClayDropDown.Group>
			</ClayDropDown.ItemList>
		</DropDownWithState>
	))
	.add('caption and help', () => (
		<DropDownWithState>
			<ClayDropDown.Help>{'Can I help you?'}</ClayDropDown.Help>

			<ClayDropDown.ItemList>
				{[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>

			<ClayDropDown.Caption>{'... or maybe not.'}</ClayDropDown.Caption>
		</DropDownWithState>
	))
	.add('items with icons', () => (
		<DropDownWithState hasLeftSymbols hasRightSymbols>
			<ClayDropDown.ItemList>
				{[
					{label: 'Left', left: 'trash'},
					{label: 'Right', right: 'check'},
					{label: 'Both', left: 'trash', right: 'check'},
				].map((item, i) => (
					<ClayDropDown.Item
						key={i}
						spritemap={spritemap}
						symbolLeft={item.left}
						symbolRight={item.right}
					>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	));
