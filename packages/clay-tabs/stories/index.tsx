/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayTabs from '../src';

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

storiesOf('Components|ClayTabs', module)
	.add('default', () => {
		const ClayTabsWithState = () => {
			const [activeIndex, setActiveIndex] = React.useState<number>(0);

			const dropdownTabsItems = [
				{
					disabled: true,
					label: 'Tab 6',
					tabkey: 5,
				},
				{
					label: 'Tab 7',
					tabkey: 6,
				},
				{
					label: 'Tab 8',
					tabkey: 7,
				},
			];

			return (
				<ClayIconSpriteContext.Provider value={spritemap}>
					<ClayTabs
						justified={boolean('Justified', false)}
						modern={boolean('Modern', true)}
					>
						<ClayTabs.Item
							active={activeIndex == 0}
							disabled={boolean('Disable first tab', false)}
							href="#1"
							innerProps={{
								'aria-controls': 'tabpanel-1',
							}}
							onClick={() => setActiveIndex(0)}
						>
							{'Tab 1'}
						</ClayTabs.Item>
						<ClayTabs.Item
							active={activeIndex == 1}
							disabled={boolean('Disable second tab', true)}
							href="#2"
							innerProps={{
								'aria-controls': 'tabpanel-2',
							}}
							onClick={() => setActiveIndex(1)}
						>
							{'Tab 2'}
						</ClayTabs.Item>
						<ClayTabs.Item
							active={activeIndex == 2}
							disabled={boolean('Disable third tab', false)}
							href="#3"
							innerProps={{
								'aria-controls': 'tabpanel-3',
							}}
							onClick={() => setActiveIndex(2)}
						>
							{'Tab 3'}
						</ClayTabs.Item>
						<ClayTabs.Item
							active={activeIndex == 3}
							disabled={boolean('Disable fourth tab', false)}
							href="#4"
							innerProps={{
								'aria-controls': 'tabpanel-4',
							}}
							onClick={() => setActiveIndex(3)}
						>
							{'Tab 4'}
						</ClayTabs.Item>

						<DropDownWithState
							trigger={
								<ClayTabs.Item
									active={[5, 6, 7].includes(activeIndex)}
									disabled={boolean(
										'Disable fourth tab',
										false
									)}
									innerProps={{
										'aria-controls': 'tabpanel-5',
									}}
									onClick={() => setActiveIndex(4)}
								>
									{'Tab 5'}
									<ClayIcon symbol="caret-bottom" />
								</ClayTabs.Item>
							}
						>
							<ClayDropDown.ItemList>
								{dropdownTabsItems.map(
									({disabled = false, label, tabkey}, i) => {
										return (
											<ClayDropDown.Item
												active={activeIndex === tabkey}
												aria-controls={`tabpanel-${tabkey}`}
												aria-selected={
													activeIndex === tabkey
												}
												disabled={disabled}
												key={i}
												onClick={() =>
													setActiveIndex(tabkey)
												}
												role="tab"
												spritemap={spritemap}
												symbolRight={
													activeIndex === tabkey
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
					</ClayTabs>
					<ClayTabs.Content
						activeIndex={activeIndex}
						fade={boolean('Fade', true)}
					>
						<ClayTabs.TabPane aria-labelledby="tab-1">
							{`1. Single origin, extra id beans, eu to go, skinny
						americano ut aftertas te sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-2">
							{`2. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-3">
							{`3. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-4">
							{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-5">
							{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-6">
							{`6. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-7">
							{`7. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
						</ClayTabs.TabPane>
						<ClayTabs.TabPane aria-labelledby="tab-8">
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
				</ClayIconSpriteContext.Provider>
			);
		};

		return <ClayTabsWithState />;
	})
	.add('w/ state', () => {
		const [activeIndex, setActiveIndex] = React.useState(0);

		return (
			<div style={{padding: 50}}>
				<ClayTabs modern={false}>
					{['Tab 1', 'Tab 2', 'Tab 3'].map((item, index) => (
						<ClayTabs.Item
							active={activeIndex === index}
							key={item}
							onClick={() => setActiveIndex(index)}
						>
							{item}
						</ClayTabs.Item>
					))}
				</ClayTabs>

				<ClayTabs.Content activeIndex={activeIndex} fade>
					<ClayTabs.TabPane>
						{
							'Single origin, extra id beans, eu to go, skinny americano ut aftertaste sugar. At americano, viennese variety iced grounds, grinder froth and pumpkin spice aromatic. Cultivar aged lungo, grounds café au lait, skinny, blue mountain, in variety sugar shop roast. Wings, blue mountain affogato organic cappuccino java plunger pot. Single shot variety pumpkin spice seasonal skinny barista carajillo robust cream.'
						}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{
							'Iced, crema, coffee id kopi-luwak coffee variety. Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.'
						}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane>
						{
							'Skinny extraction, id trifecta qui trifecta grinder. Barista robusta arabica breve ut skinny milk beans macchiato carajillo espresso. Cultivar single shot brewed, coffee steamed to go wings to go cortado. Grinder, siphon coffee acerbic espresso cinnamon crema breve.'
						}
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</div>
		);
	});
