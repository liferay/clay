/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import DropDown, {Align} from '@clayui/drop-down';
import Icon from '@clayui/icon';
import React, {useEffect, useState} from 'react';

import ClayTabs from '../src';

export default {
	argTypes: {
		activation: {
			control: {type: 'select'},
			options: ['manual', 'automatic'],
		},
		displayType: {
			control: {type: 'select'},
			options: ['basic', 'underline', null],
		},
	},
	component: ClayTabs,
	title: 'Design System/Components/Tabs',
};

export const Default = (args: any) => {
	const [active, setActive] = useState<number>(0);

	return (
		<>
			<ClayTabs
				activation={args.activation}
				active={active}
				displayType={args.displayType}
				justified={args.justified}
				modern={args.modern}
				onActiveChange={setActive}
			>
				<ClayTabs.Item
					disabled={args.disabledFirstTab}
					innerProps={{
						'aria-controls': 'tabpanel1',
					}}
				>
					Tab 1
				</ClayTabs.Item>
				<ClayTabs.Item
					disabled={args.disabledSecondTab}
					innerProps={{
						'aria-controls': 'tabpanel2',
					}}
				>
					Tab 2
				</ClayTabs.Item>
				<ClayTabs.Item
					disabled={args.disabledThirdTab}
					innerProps={{
						'aria-controls': 'tabpanel3',
					}}
				>
					Tab 3
				</ClayTabs.Item>
				<ClayTabs.Item
					disabled={args.disabledFourthTab}
					innerProps={{
						'aria-controls': 'tabpanel4',
					}}
				>
					Tab 4
				</ClayTabs.Item>
			</ClayTabs>
			<ClayTabs.Content activeIndex={active} fade={args.fade}>
				<ClayTabs.TabPane id="tabpanel1">
					{`1. Single origin, extra id beans, eu to go, skinny
				americano ut aftertas te sugar. At americano, viennese
				variety iced grounds, grinder froth and pumpkin spice
				aromatic. Cultivar aged lungo, grounds café au lait,
				skinny, blue mountain, in variety sugar shop roast.
				Wings, blue mountain affogato organic cappuccino java
				plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.`}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane id="tabpanel2">
					{`2. Single origin, extra id beans, eu to go, skinny
				americano ut aftertaste sugar. At americano, viennese
				variety iced grounds, grinder froth and pumpkin spice
				aromatic. Cultivar aged lungo, grounds café au lait,
				skinny, blue mountain, in variety sugar shop roast.
				Wings, blue mountain affogato organic cappuccino java
				plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.`}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane id="tabpanel3">
					{`3. Single origin, extra id beans, eu to go, skinny
				americano ut aftertaste sugar. At americano, viennese
				variety iced grounds, grinder froth and pumpkin spice
				aromatic. Cultivar aged lungo, grounds café au lait,
				skinny, blue mountain, in variety sugar shop roast.
				Wings, blue mountain affogato organic cappuccino java
				plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.`}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane id="tabpanel4">
					{`4. Single origin, extra id beans, eu to go, skinny
				americano ut aftertaste sugar. At americano, viennese
				variety iced grounds, grinder froth and pumpkin spice
				aromatic. Cultivar aged lungo, grounds café au lait,
				skinny, blue mountain, in variety sugar shop roast.
				Wings, blue mountain affogato organic cappuccino java
				plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.`}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane id="tabpanel5">
					{`4. Single origin, extra id beans, eu to go, skinny
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

Default.args = {
	activation: 'manual',
	disabledFirstTab: false,
	disabledFourthTab: false,
	disabledSecondTab: true,
	disabledThirdTab: false,
	displayType: 'underline',
	justified: false,
	modern: true,
};

export const NewDefault = (args: any) => (
	<ClayTabs activation={args.activation} displayType={args.displayType}>
		<ClayTabs.List>
			<ClayTabs.Item>Tab 1</ClayTabs.Item>
			<ClayTabs.Item>Tab 2</ClayTabs.Item>
			<ClayTabs.Item>Tab 3</ClayTabs.Item>
		</ClayTabs.List>
		<ClayTabs.Panels>
			<ClayTabs.TabPanel>Tab Content 1</ClayTabs.TabPanel>
			<ClayTabs.TabPanel>Tab Content 2</ClayTabs.TabPanel>
			<ClayTabs.TabPanel>Tab Content 3</ClayTabs.TabPanel>
		</ClayTabs.Panels>
	</ClayTabs>
);

NewDefault.args = {
	activation: 'manual',
};

export const WithState = () => {
	const [active, setActive] = useState(0);

	return (
		<div style={{padding: 50}}>
			<ClayTabs active={active} modern={false} onActiveChange={setActive}>
				{['Tab 1', 'Tab 2', 'Tab 3'].map((item) => (
					<ClayTabs.Item key={item}>{item}</ClayTabs.Item>
				))}
			</ClayTabs>

			<ClayTabs.Content activeIndex={active} fade>
				<ClayTabs.TabPane>
					Single origin, extra id beans, eu to go, skinny americano ut
					aftertaste sugar. At americano, viennese variety iced
					grounds, grinder froth and pumpkin spice aromatic. Cultivar
					aged lungo, grounds café au lait, skinny, blue mountain, in
					variety sugar shop roast. Wings, blue mountain affogato
					organic cappuccino java plunger pot. Single shot variety
					pumpkin spice seasonal skinny barista carajillo robust
					cream.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane>
					Iced, crema, coffee id kopi-luwak coffee variety. Skinny
					extraction, id trifecta qui trifecta grinder. Barista
					robusta arabica breve ut skinny milk beans macchiato
					carajillo espresso. Cultivar single shot brewed, coffee
					steamed to go wings to go cortado. Grinder, siphon coffee
					acerbic espresso cinnamon crema breve.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane>
					Skinny extraction, id trifecta qui trifecta grinder. Barista
					robusta arabica breve ut skinny milk beans macchiato
					carajillo espresso. Cultivar single shot brewed, coffee
					steamed to go wings to go cortado. Grinder, siphon coffee
					acerbic espresso cinnamon crema breve.
				</ClayTabs.TabPane>
			</ClayTabs.Content>
		</div>
	);
};

export const DropdownMenu = () => {
	const [active, setActive] = useState(0);
	const [dropdownTabActive, setDropdownTabActive] = useState(active);

	const dropdownTabsItems = [
		{
			disabled: true,
			label: 'Tab 5',
			tabkey: 4,
		},
		{
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

	useEffect(() => {
		setActive(dropdownTabActive);
	}, [dropdownTabActive]);

	return (
		<div className="p-4">
			<>
				<ClayTabs active={active} onActiveChange={setActive}>
					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-1',
							id: 'tab-1',
						}}
					>
						Tab 1
					</ClayTabs.Item>
					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-2',
							id: 'tab-2',
						}}
					>
						Tab 2
					</ClayTabs.Item>
					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-3',
							id: 'tab-3',
						}}
					>
						Tab 3
					</ClayTabs.Item>
					<ClayTabs.Item
						innerProps={{
							'aria-controls': 'tabpanel-4',
							id: 'tab-4',
						}}
					>
						Tab 4
					</ClayTabs.Item>
					<ClayTabs.Item>
						<DropDown
							alignmentPosition={Align.BottomLeft}
							hasRightSymbols
							role="none"
							trigger={
								<ClayButton
									active={[5, 6, 7].includes(active)}
									aria-label="Expand to select more tab items"
									className="nav-link"
									displayType={null}
								>
									More
									<span className="inline-item inline-item-after">
										<Icon symbol="caret-bottom" />
									</span>
								</ClayButton>
							}
						>
							<DropDown.ItemList>
								{dropdownTabsItems.map(
									({disabled = false, label, tabkey}, i) => {
										i = i + 4;

										return (
											<DropDown.Item
												active={active === tabkey}
												aria-controls={`tabpanel-${i}`}
												aria-selected={
													active === tabkey
												}
												disabled={disabled}
												id={`tab-${i}`}
												key={i}
												onClick={() => {
													setDropdownTabActive(
														tabkey
													);
												}}
												role="none"
												roleItem="tab"
												symbolRight={
													active === tabkey
														? 'check'
														: undefined
												}
											>
												{label}
											</DropDown.Item>
										);
									}
								)}
							</DropDown.ItemList>
						</DropDown>
					</ClayTabs.Item>
				</ClayTabs>
				<ClayTabs.Content activeIndex={active} fade>
					<ClayTabs.TabPane aria-labelledby="tab-1">
						1. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-2">
						2. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-3">
						3. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-4">
						4. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-5">
						5. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-6">
						6. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-7">
						7. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
					<ClayTabs.TabPane aria-labelledby="tab-8">
						8. Proin efficitur imperdiet dolor, a iaculis orci
						lacinia eu.
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		</div>
	);
};
