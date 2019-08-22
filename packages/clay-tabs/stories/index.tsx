/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import ClayTabs from '../src';
import React from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import {ElementType} from '../src/Item';
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
						onClick={() => setActiveTabKeyValue(0)}
					>
						{'Tab 1'}
					</ClayTabs.Item>
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
						onClick={() => setActiveTabKeyValue(1)}
					>
						{'Tab 2'}
					</ClayTabs.Item>
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
						onClick={() => setActiveTabKeyValue(2)}
					>
						{'Tab 3'}
					</ClayTabs.Item>
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
						onClick={() => setActiveTabKeyValue(3)}
					>
						{'Tab 4'}
					</ClayTabs.Item>

					<DropDownWithState
						trigger={
							<ClayTabs.Item
								active={[5, 6, 7].includes(activeTabKeyValue)}
								component={
									select(
										'Tab Item Component',
										tabElements,
										'button'
									) as ElementType
								}
								disabled={boolean('Disable fourth tab', false)}
								onClick={() => setActiveTabKeyValue(4)}
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
											active={
												activeTabKeyValue === tabkey
											}
											disabled={disabled}
											key={i}
											onClick={() =>
												setActiveTabKeyValue(tabkey)
											}
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
			</ClayIconSpriteContext.Provider>
		);
	};

	return <ClayTabsWithState />;
});
