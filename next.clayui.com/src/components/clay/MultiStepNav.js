/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayMultiStepNav, {
	ClayMultiStepNavWithBasicItems,
} from '@clayui/multi-step-nav';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

const MultiStepNavCode = `const Component = () => {
    const [value, setValue] = React.useState(1);

    const steps = [
        {
            active: value === 0,
            complete: value > 0,
            onClick: () => setValue(0),
            subTitle: 'SubOne',
            title: 'One',
        },
        {
            active: value === 1,
            complete: value > 1,
            onClick: () => setValue(1),
            subTitle: 'SubTwo',
            title: 'Two',
        },
        {
            active: value === 2,
            complete: value > 2,
            onClick: () => setValue(2),
            subTitle: 'SubThree',
            title: 'Three',
        },
        {
            active: value === 3,
            complete: value > 3,
            onClick: () => setValue(3),
            subTitle: 'SubFour',
            title: 'Four',
        },
    ];

    return (
        <div className="sheet">
            <ClayMultiStepNav>
                {steps.map(
                    (
                        {active, complete, onClick, subTitle, title},
                        i
                    ) => (
                        <ClayMultiStepNav.Item
                            active={active}
                            complete={complete}
                            expand={i + 1 !== steps.length}
                            key={i}
                        >
                            <ClayMultiStepNav.Title>
                                {title}
                            </ClayMultiStepNav.Title>
                            <ClayMultiStepNav.Divider />
                            <ClayMultiStepNav.Indicator
                                complete={complete}
                                label={1 + i}
                                onClick={onClick}
                                spritemap={spritemap}
                                subTitle={subTitle}
                            />
                        </ClayMultiStepNav.Item>
                    )
                )}
            </ClayMultiStepNav>
        </div>
    );
}

render(<Component />);`;

export const MultiStepNav = () => {
	const scope = {ClayMultiStepNav, spritemap};
	const code = MultiStepNavCode;

	return <Editor code={code} scope={scope} />;
};

const MultiStepNavHighLevelCode = `const Component = () => {
    const [active, setActive] = React.useState(0);

    const steps = [
        {
            subTitle: 'SubOne',
            title: 'One',
        },
        {
            subTitle: 'SubTwo',
            title: 'Two',
        },
        {
            subTitle: 'SubThree',
            title: 'Three',
        },
        {
            subTitle: 'SubFour',
            title: 'Four',
        },
        {
            subTitle: 'SubFive',
            title: 'Five',
        }
    ];

    return (
        <div className="sheet">
            <ClayMultiStepNavWithBasicItems
                activeIndex={active}
                maxStepsShown={3}
                onIndexChange={setActive}
                spritemap={spritemap}
                steps={steps}
            />
        </div>
    )
};

render(<Component />);`;

export const MultiStepNavHighLevel = () => {
	const scope = {ClayMultiStepNavWithBasicItems, spritemap};
	const code = MultiStepNavHighLevelCode;

	return <Editor code={code} scope={scope} />;
};
