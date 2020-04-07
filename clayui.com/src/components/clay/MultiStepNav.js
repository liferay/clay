/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayMultiStepNav, {
	ClayMultiStepNavWithBasicItems,
} from '@clayui/multi-step-nav';
import React, {useState} from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const multiStepNavImportsCode = `import ClayMultiStepNav from '@clayui/multi-step-nav';
import React, {useState} from 'react';`;

const multiStepNavCode = `const Component = () => {
	const [value, setValue] = useState(1);

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
	);
}

render(<Component />)`;

const MultiStepNav = () => {
	const scope = {
		ClayMultiStepNav,
		spritemap,
		useState,
	};

	return (
		<Editor
			code={multiStepNavCode}
			imports={multiStepNavImportsCode}
			scope={scope}
		/>
	);
};

const multiStepNavWithBasicItemsImportsCode = `import {ClayMultiStepNavWithBasicItems} from '@clayui/multi-step-nav';
import React, {useState} from 'react';`;

const multiStepNavWithBasicItemsCode = `const Component = (props) => {
	const [active, setActive] = useState(0);

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
	];

	return (
		<ClayMultiStepNavWithBasicItems
			activeIndex={active}
			maxStepsShown={2}
			onIndexChange={setActive}
			spritemap={spritemap}
			steps={steps}
		/>
	);
}

render(<Component />)`;

const MultiStepNavWithBasicItems = () => {
	const scope = {
		ClayMultiStepNavWithBasicItems,
		spritemap,
		useState,
	};

	return (
		<Editor
			code={multiStepNavWithBasicItemsCode}
			imports={multiStepNavWithBasicItemsImportsCode}
			scope={scope}
		/>
	);
};

export {MultiStepNav, MultiStepNavWithBasicItems};
