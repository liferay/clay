/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayTabs from '../src';
import React from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import {ClayIconSpriteContext} from '@clayui/icon';
import {ElementType} from '../src/types';
import {storiesOf} from '@storybook/react';

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	trigger,
	...others
}) => {
	const [active, setActive] = React.useState<boolean>(false);

	return (
		<ClayDropDown
			active={active}
			alignmentPosition={Align.BottomLeft}
			hasRightSymbols
			onActiveChange={newVal => setActive(newVal)}
			trigger={trigger}
			{...others}
		>
			{children}
		</ClayDropDown>
	);
};

const tabElements = {
	a: 'a',
	button: 'button',
};

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayTabs', module).add('default', () => {
	const ClayTabsWithState = () => {
		const [activeTabKeyValue, setActiveTabKeyValue] = React.useState<
			number
		>(0);

		const onClickImpl = (val: number) => setActiveTabKeyValue(val);

		const dropdownTabsItems = [
			{
				active: activeTabKeyValue == 5,
				disabled: true,
				href: '#6',
				label: 'Tab 6',
				onClick: onClickImpl,
				tabkey: 5,
			},
			{
				active: activeTabKeyValue == 6,
				href: '#7',
				label: 'Tab 7',
				onClick: onClickImpl,
				tabkey: 6,
			},
			{
				active: activeTabKeyValue == 7,
				href: '#8',
				label: 'Tab 8',
				onClick: onClickImpl,
				tabkey: 7,
			},
		];

		return (
			<>
				<ClayTabs
					justified={boolean('Justified', false) as false}
					modern={boolean('Modern', true) as true}
				>
					<ClayIconSpriteContext.Provider value={spritemap}>
						<ClayTabs.Item
							active={activeTabKeyValue == 0}
							component={
								select(
									'Tab Item Component',
									tabElements,
									'button'
								) as ElementType
							}
							disabled={boolean('Disable first tab', false)}
							href="#1"
							onClick={onClickImpl}
							tabName="Tab 1"
							tabkey={0}
						/>
						<ClayTabs.Item
							active={activeTabKeyValue == 1}
							component={
								select(
									'Tab Item Component',
									tabElements,
									'button'
								) as ElementType
							}
							disabled={boolean('Disable second tab', true)}
							href="#2"
							onClick={onClickImpl}
							tabName="Tab 2"
							tabkey={1}
						/>
						<ClayTabs.Item
							active={activeTabKeyValue == 2}
							component={
								select(
									'Tab Item Component',
									tabElements,
									'button'
								) as ElementType
							}
							disabled={boolean('Disable third tab', false)}
							href="#3"
							onClick={onClickImpl}
							tabName="Tab 3"
							tabkey={2}
						/>
						<ClayTabs.Item
							active={activeTabKeyValue == 3}
							component={
								select(
									'Tab Item Component',
									tabElements,
									'button'
								) as ElementType
							}
							disabled={boolean('Disable fourth tab', false)}
							href="#4"
							onClick={onClickImpl}
							tabName="Tab 4"
							tabkey={3}
						/>

						<DropDownWithState
							trigger={
								<ClayTabs.Item
									active={[5, 6, 7].includes(
										activeTabKeyValue
									)}
									component={
										select(
											'Tab Item Component',
											tabElements,
											'button'
										) as ElementType
									}
									disabled={boolean(
										'Disable fourth tab',
										false
									)}
									dropdown
									onClick={onClickImpl}
									tabName="Tab 5"
									tabkey={4}
								/>
							}
						>
							<ClayDropDown.ItemList>
								{dropdownTabsItems.map(
									(
										{
											disabled = false,
											label,
											onClick,
											tabkey,
										},
										i
									) => {
										return (
											<ClayDropDown.Item
												active={
													activeTabKeyValue === tabkey
												}
												disabled={disabled}
												key={i}
												onClick={() => {
													onClick(tabkey);
												}}
												spritemap={spritemap}
												symbolRight={
													activeTabKeyValue === tabkey
														? 'check'
														: undefined
												}
											>
												{label}
											</ClayDropDown.Item>
										);
									}
								)}
							</ClayDropDown.ItemList>
						</DropDownWithState>
					</ClayIconSpriteContext.Provider>
				</ClayTabs>
				<ClayTabs.Content
					activeTabKey={activeTabKeyValue}
					fade={boolean('Fade', true)}
				>
					<ClayTabs.TabPane>
						{`1. Single origin, extra id beans, eu to go, skinny
						americano ut aftertas te sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`2. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`3. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`6. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`7. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{`8. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);
	};

	return <ClayTabsWithState />;
});
