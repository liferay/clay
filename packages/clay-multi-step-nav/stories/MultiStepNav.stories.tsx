/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import ClayMultiStepNav, {ClayMultiStepNavWithBasicItems} from '../src';

export default {
	component: ClayMultiStepNav,
	title: 'Design System/Components/MultiStepNav',
};

export const Default = () => {
	const [value, setValue] = useState<number>(1);

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
						i: number
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
								subTitle={subTitle}
							/>
						</ClayMultiStepNav.Item>
					)
				)}
			</ClayMultiStepNav>
		</div>
	);
};

export const MultiStepNavWithBasicItems = (args: any) => {
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
		},
		{
			subTitle: 'SubSix',
			title: 'Six',
		},
		{
			subTitle: 'SubSeven',
			title: 'Seven',
		},
		{
			subTitle: 'SubEight',
			title: 'Eight',
		},
		{
			subTitle: 'SubNine',
			title: 'Nine',
		},
	];

	return (
		<div className="sheet">
			<ClayMultiStepNavWithBasicItems
				maxStepsShown={args.maxStepsShown}
				steps={steps}
			/>
		</div>
	);
};

MultiStepNavWithBasicItems.args = {
	maxStepsShown: 7,
};
