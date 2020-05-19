/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import ClayTabs from '@clayui/tabs';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const tabsImportsCode = `import ClayTabs from '@clayui/tabs';
import React, {useState} from 'react';`;

const tabsCode = `const Component = () => {
    const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);

    return (
        <>
            <ClayTabs modern>
                <ClayTabs.Item
                    active={activeTabKeyValue == 0}
                    innerProps={{
                        'aria-controls': 'tabpanel-1',
                    }}
                    onClick={() => setActiveTabKeyValue(0)}
                >
                    {'Tab 1'}
                </ClayTabs.Item>
                <ClayTabs.Item
                    active={activeTabKeyValue == 1}
                    innerProps={{
                        'aria-controls': 'tabpanel-2',
                    }}
                    onClick={() => setActiveTabKeyValue(1)}
                >
                    {'Tab 2'}
                </ClayTabs.Item>
                <ClayTabs.Item
                    active={activeTabKeyValue == 2}
                    innerProps={{
                        'aria-controls': 'tabpanel-3',
                    }}
                    onClick={() => setActiveTabKeyValue(2)}
                >
                    {'Tab 3'}
                </ClayTabs.Item>
            </ClayTabs>
            <ClayTabs.Content activeIndex={activeTabKeyValue} fade>
                <ClayTabs.TabPane aria-labelledby="tab-1">
                    {\`1. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-2">
                    {\`2. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-3">
                    {\`3. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
            </ClayTabs.Content>
        </>
    );
};

render(<Component />)`;

const Tabs = () => {
	const scope = {ClayTabs, spritemap, useState};
	return <Editor code={tabsCode} imports={tabsImportsCode} scope={scope} />;
};

const tabsDropdownImportsCode = `import ClayDropdown, {Align} from '@clayui/drop-down';
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import ClayTabs from '@clayui/tabs';
import React, {useState} from 'react';`;

const tabsDropdownCode = `const Component = () => {
    const DropDownWithState = ({
        children,
        trigger,
        ...others
    }) => {
        const [active, setActive] = React.useState(false);
    
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

    const [activeTabKeyValue, setActiveTabKeyValue] = React.useState(0);

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
            <ClayTabs modern>
                <ClayTabs.Item
                    active={activeTabKeyValue == 0}
                    innerProps={{
                        'aria-controls': 'tabpanel-1',
                    }}
                    onClick={() => setActiveTabKeyValue(0)}
                >
                    {'Tab 1'}
                </ClayTabs.Item>
                <ClayTabs.Item
                    active={activeTabKeyValue == 1}
                    innerProps={{
                        'aria-controls': 'tabpanel-2',
                    }}
                    onClick={() => setActiveTabKeyValue(1)}
                >
                    {'Tab 2'}
                </ClayTabs.Item>
                <ClayTabs.Item
                    active={activeTabKeyValue == 2}
                    innerProps={{
                        'aria-controls': 'tabpanel-3',
                    }}
                    onClick={() => setActiveTabKeyValue(2)}
                >
                    {'Tab 3'}
                </ClayTabs.Item>
                <ClayTabs.Item
                    active={activeTabKeyValue == 3}
                    innerProps={{
                        'aria-controls': 'tabpanel-4',
                    }}
                    onClick={() => setActiveTabKeyValue(3)}
                >
                    {'Tab 4'}
                </ClayTabs.Item>

                <DropDownWithState
                    trigger={
                        <ClayTabs.Item
                            active={[5, 6, 7].includes(activeTabKeyValue)}
                            innerProps={{
                                'aria-controls': 'tabpanel-5',
                            }}
                            onClick={() => setActiveTabKeyValue(4)}
                        >
                            {'More'}
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
                                        aria-selected={
                                            activeTabKeyValue === tabkey
                                        }
                                        disabled={disabled}
                                        key={i}
                                        onClick={() =>
                                            setActiveTabKeyValue(tabkey)
                                        }
                                        role="tab"
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
                activeIndex={activeTabKeyValue}
                fade
            >
                <ClayTabs.TabPane aria-labelledby="tab-1">
                    {\`1. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-2">
                    {\`2. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-3">
                    {\`3. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-4">
                    {\`4. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-5">
                    {\`5. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-6">
                    {\`6. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-7">
                    {\`7. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
                </ClayTabs.TabPane>
                <ClayTabs.TabPane aria-labelledby="tab-8">
                    {\`8. Proin efficitur imperdiet dolor, a iaculis orci lacinia eu. Proin pulvinar facilisis purus vitae ornare. Donec ut sodales sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id volutpat ligula. Sed sodales pellentesque aliquam. Donec interdum a mi ac auctor. Etiam auctor lacus nec posuere feugiat. Maecenas pulvinar ante nisl, auctor fringilla quam molestie eu. Sed non ultrices est. Ut congue leo in placerat pharetra.\`}
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
		spritemap,
		useState,
	};
	return (
		<Editor
			code={tabsDropdownCode}
			imports={tabsDropdownImportsCode}
			scope={scope}
		/>
	);
};

export {Tabs, TabsDropdown};
