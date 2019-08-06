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
	anchor: 'anchor',
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
				label: 'Tab 6',
				onClick: onClickImpl,
				tabKey: 5,
			},
			{
				active: activeTabKeyValue == 6,
				label: 'Tab 7',
				onClick: onClickImpl,
				tabKey: 6,
			},
			{
				active: activeTabKeyValue == 7,
				label: 'Tab 8',
				onClick: onClickImpl,
				tabKey: 7,
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
							onClick={onClickImpl}
							tabKey={0}
							tabName="Tab 1"
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
							onClick={onClickImpl}
							tabKey={1}
							tabName="Tab 2"
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
							onClick={onClickImpl}
							tabKey={2}
							tabName="Tab 3"
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
							onClick={onClickImpl}
							tabKey={3}
							tabName="Tab 4"
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
									tabKey={4}
									tabName="Tab 5"
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
											tabKey,
										},
										i
									) => {
										return (
											<ClayDropDown.Item
												active={
													activeTabKeyValue === tabKey
												}
												disabled={disabled}
												key={i}
												onClick={() => {
													onClick(tabKey);
												}}
												spritemap={spritemap}
												symbolRight={
													activeTabKeyValue === tabKey
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
					<ClayTabs.TabPane tabKey={0}>
						{`1. Single origin, extra id beans, eu to go, skinny
						americano ut aftertas te sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={1}>
						{`2. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={2}>
						{`3. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={3}>
						{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={4}>
						{`4. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={5}>
						{`6. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={6}>
						{`7. Single origin, extra id beans, eu to go, skinny
						americano ut aftertaste sugar. At americano, viennese
						variety iced grounds, grinder froth and pumpkin spice
						aromatic. Cultivar aged lungo, grounds café au lait,
						skinny, blue mountain, in variety sugar shop roast.
						Wings, blue mountain affogato organic cappuccino java
						plunger pot. Single shot variety pumpkin spice seasonal
						skinny barista carajillo robust cream.`}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabKey={7}>
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
