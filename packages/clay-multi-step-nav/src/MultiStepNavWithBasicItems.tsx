/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import React from 'react';

import ClayMultiStepNav from './MultiStepNav';

interface ISteps {
	/**
	 * Value that is displayed below the step icon.
	 */
	subTitle?: string;

	/**
	 * Value that is displayed above the step icon.
	 */
	title?: string;
}

interface IProps extends React.ComponentProps<typeof ClayMultiStepNav> {
	/**
	 * Value for which step index is active
	 */
	activeIndex: number;

	/**
	 * Determines at what point a dropdown is show. The dropdown will
	 * always show as the 2nd to last step.
	 */
	maxStepsShown?: number;

	/**
	 * Callback for when step is clicked
	 */
	onIndexChange: (val: number) => void;

	/**
	 * Path to spritemap for icon symbol.
	 */
	spritemap?: string;

	/**
	 * List of steps to display
	 */
	steps: Array<ISteps>;
}

const MAX_STEPS_SHOWN = 7;

const IndicatorWithInnerRef = React.forwardRef<HTMLButtonElement, any>(
	({spritemap, ...otherProps}, ref) => (
		<ClayMultiStepNav.Indicator
			{...otherProps}
			innerRef={ref}
			label="..."
			spritemap={spritemap}
		/>
	)
);

IndicatorWithInnerRef.displayName = 'ClayIndicatorWithInnerRef';

export const ClayMultiStepNavWithBasicItems: React.FunctionComponent<IProps> = ({
	activeIndex,
	maxStepsShown = MAX_STEPS_SHOWN,
	onIndexChange,
	spritemap,
	steps,
	...otherProps
}: IProps) => {
	let dropdownItems;
	let showSteps = steps;
	const indexEnd = steps.length - 1;

	const lastStep = steps[indexEnd];

	if (steps.length > maxStepsShown) {
		const indexBeforeDropdown = maxStepsShown - 1;

		dropdownItems = steps
			.slice(indexBeforeDropdown, indexEnd)
			.map((step, i) => {
				const index = indexBeforeDropdown + i;

				return {
					active: activeIndex === index,
					label: `${index + 1}. ${step.title}`,
					onClick: () => onIndexChange(index),
					symbolRight: activeIndex > index ? 'check' : undefined,
				};
			});

		showSteps = steps.slice(0, indexBeforeDropdown);
	}

	const activeInDropDown =
		activeIndex > showSteps.length - 1 && activeIndex < indexEnd;

	return (
		<ClayMultiStepNav {...otherProps}>
			{showSteps.map(({subTitle, title}, i: number) => {
				const complete = activeIndex > i;

				return (
					<ClayMultiStepNav.Item
						active={activeIndex === i}
						complete={complete}
						expand={i + 1 !== steps.length}
						key={i}
					>
						<ClayMultiStepNav.Title>{title}</ClayMultiStepNav.Title>
						<ClayMultiStepNav.Divider />
						<ClayMultiStepNav.Indicator
							complete={complete}
							label={1 + i}
							onClick={() => onIndexChange(i)}
							spritemap={spritemap}
							subTitle={subTitle}
						/>
					</ClayMultiStepNav.Item>
				);
			})}

			{dropdownItems && (
				<>
					<ClayMultiStepNav.Item
						active={activeInDropDown}
						complete={activeIndex === indexEnd}
						expand
					>
						<ClayMultiStepNav.Title>
							{activeInDropDown
								? steps[activeIndex].title
								: steps[showSteps.length].title}
						</ClayMultiStepNav.Title>
						<ClayMultiStepNav.Divider />

						<ClayDropDownWithItems
							items={dropdownItems}
							spritemap={spritemap}
							trigger={<IndicatorWithInnerRef />}
						/>
					</ClayMultiStepNav.Item>

					<ClayMultiStepNav.Item active={activeIndex === indexEnd}>
						<ClayMultiStepNav.Title>
							{lastStep.title}
						</ClayMultiStepNav.Title>
						<ClayMultiStepNav.Divider />
						<ClayMultiStepNav.Indicator
							label={steps.length}
							onClick={() => onIndexChange(indexEnd)}
							spritemap={spritemap}
							subTitle={lastStep.subTitle}
						/>
					</ClayMultiStepNav.Item>
				</>
			)}
		</ClayMultiStepNav>
	);
};
