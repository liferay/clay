/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import ClayTabs from '@clayui/tabs';
import React from 'react';

const tabsImportsCode = `import ClayTabs from '@clayui/tabs';
`;

const tabsCode = `const Component = () => {
	const [active, setActive] = useState(0);

	return (
		<>
			<ClayTabs active={active} onActiveChange={setActive}>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-1',
					}}
				>
					Tab 1
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-2',
					}}
				>
					Tab 2
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-3',
					}}
				>
					Tab 3
				</ClayTabs.Item>
			</ClayTabs>
			<ClayTabs.Content activeIndex={active} fade>
				<ClayTabs.TabPane aria-labelledby="tab-1">
					1. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-2">
					2. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-3">
					3. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
			</ClayTabs.Content>
		</>
	);
};

render(<Component />)`;

const Tabs = () => {
	const scope = {ClayTabs};

	return <Editor code={tabsCode} imports={tabsImportsCode} scope={scope} />;
};

const modernTabsCode = `const Component = () => {
	const [active, setActive] = useState(0);

	return (
		<>
			<ClayTabs active={active} modern onActiveChange={setActive}>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-1',
					}}
				>
					Tab 1
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-2',
					}}
				>
					Tab 2
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-3',
					}}
				>
					Tab 3
				</ClayTabs.Item>
			</ClayTabs>
			<ClayTabs.Content activeIndex={active} fade>
				<ClayTabs.TabPane aria-labelledby="tab-1">
					1. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-2">
					2. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-3">
					3. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
			</ClayTabs.Content>
		</>
	);
};

render(<Component />)`;

const ModernTabs = () => {
	const scope = {ClayTabs};

	return (
		<Editor code={modernTabsCode} imports={tabsImportsCode} scope={scope} />
	);
};

const tabsDropdownImportsCode = `import ClayDropdown, {Align} from '@clayui/drop-down';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import ClayTabs from '@clayui/tabs';
`;

const tabsDropdownCode = `const Component = () => {
	const DropDownWithState = ({
		children,
		trigger,
		...others
	}) => {
		const [active, setActive] = useState(false);
	
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

	const [active, setActive] = useState(0);

	const dropdownTabsItems = [
		{
			disabled: true,
			label: 'Tab 5',
			tabkey: 5,
		},
		{
			label: 'Tab 6',
			tabkey: 6,
		},
		{
			label: 'Tab 7',
			tabkey: 7,
		},
	];

	return (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayTabs active={active} onActiveChange={setActive}>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-1',
					}}
				>
					Tab 1
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-2',
					}}
				>
					Tab 2
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-3',
					}}
				>
					Tab 3
				</ClayTabs.Item>
				<ClayTabs.Item
					innerProps={{
						'aria-controls': 'tabpanel-4',
					}}
				>
					Tab 4
				</ClayTabs.Item>

				<DropDownWithState
					trigger={
						<ClayTabs.Item
							active={[5, 6, 7].includes(active)}
							innerProps={{
								'aria-controls': 'tabpanel-5',
							}}
						>
							More
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
											active === tabkey
										}
										aria-selected={
											active === tabkey
										}
										disabled={disabled}
										key={i}
										onClick={() =>
											setActiveTabKeyValue(tabkey)
										}
										role="tab"
										spritemap={spritemap}
										symbolRight={
											active === tabkey
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
				activeIndex={active}
				fade
			>
				<ClayTabs.TabPane aria-labelledby="tab-1">
					1. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-2">
					2. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-3">
					3. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-4">
					4. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-5">
					5. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-6">
					6. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-7">
					7. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
				<ClayTabs.TabPane aria-labelledby="tab-8">
					8. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu.
				</ClayTabs.TabPane>
			</ClayTabs.Content>
		</ClayIconSpriteContext.Provider>
	);
};

render(<Component />)`;

const TabsDropdown = () => {
	const scope = {
		Align,
		ClayDropDown,
		ClayIcon,
		ClayIconSpriteContext,
		ClayTabs,
	};

	return (
		<Editor
			code={tabsDropdownCode}
			imports={tabsDropdownImportsCode}
			scope={scope}
		/>
	);
};

export {Tabs, ModernTabs, TabsDropdown};
