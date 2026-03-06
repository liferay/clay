/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Button from '@clayui/button';
import React, {useState} from 'react';

import ClayMultiStepNav, {ClayMultiStepNavWithBasicItems} from '../src';

export default {
	component: ClayMultiStepNav,
	title: 'Design System/Components/MultiStepNav',
};
export function Default(args: any) {
	const [value, setValue] = useState<number>(1);

	const steps = [
		{
			subTitle: 'Step 01',
			title: 'Ticket Buyer Information',
		},
		{
			subTitle: 'Step 02',
			title: 'Attendee Information',
		},
		{
			subTitle: 'Step 03',
			title: 'Payment Information',
		},
		{
			subTitle: 'Step 04',
			title: 'Completed',
		},
	];

	return (
		<div className="sheet">
			<ClayMultiStepNav center={args.center}>
				{steps.map(({subTitle, title}, i: number) => {
					const complete = value > i;

					return (
						<ClayMultiStepNav.Item
							active={value === i}
							expand={i + 1 !== steps.length}
							key={i}
							state={complete ? 'complete' : undefined}
						>
							<ClayMultiStepNav.Title>
								{title}
							</ClayMultiStepNav.Title>

							<ClayMultiStepNav.Divider />

							<ClayMultiStepNav.Indicator
								label={1 + i}
								onClick={() => setValue(i)}
								subTitle={subTitle}
							/>
						</ClayMultiStepNav.Item>
					);
				})}
			</ClayMultiStepNav>
		</div>
	);
}

Default.args = {
	center: false,
};

export function Disabled(args: any) {
	const [value, setValue] = useState<number>(1);

	const steps = [
		{
			subTitle: 'Step 01',
			title: 'Ticket Buyer Information',
		},
		{
			subTitle: 'Step 02',
			title: 'Payment Information',
		},
		{
			subTitle: 'Step 03',
			title: 'Completed',
		},
	];

	return (
		<div className="sheet">
			<ClayMultiStepNav center={args.center}>
				{steps.map(({subTitle, title}, i: number) => {
					const complete = value > i;
					const disabled = args[`DisabledStep${i}`];

					return (
						<ClayMultiStepNav.Item
							active={value === i}
							disabled={disabled}
							expand={i + 1 !== steps.length}
							key={i}
							state={complete ? 'complete' : undefined}
						>
							<ClayMultiStepNav.Title>
								{title}
							</ClayMultiStepNav.Title>

							<ClayMultiStepNav.Divider />

							<ClayMultiStepNav.Indicator
								disabled={disabled}
								label={1 + i}
								onClick={() => setValue(i)}
								subTitle={subTitle}
							/>
						</ClayMultiStepNav.Item>
					);
				})}
			</ClayMultiStepNav>
		</div>
	);
}

Disabled.args = {
	DisabledStep0: false,
	DisabledStep1: false,
	DisabledStep2: true,
	center: false,
};
export function NonInteractive(args: any) {
	const [value, setValue] = useState<number>(1);

	const steps = [
		{
			subTitle: 'Step 01',
			title: 'Ticket Buyer Information',
		},
		{
			subTitle: 'Step 02',
			title: 'Payment Information',
		},
		{
			subTitle: 'Step 03',
			title: 'Completed',
		},
	];

	return (
		<div className="sheet">
			<ClayMultiStepNav center={args.center}>
				{steps.map(({subTitle, title}, i: number) => {
					const complete = value > i;

					return (
						<ClayMultiStepNav.Item
							active={value === i}
							expand={i + 1 !== steps.length}
							key={i}
							state={complete ? 'complete' : undefined}
						>
							<ClayMultiStepNav.Title>
								{title}
							</ClayMultiStepNav.Title>

							<ClayMultiStepNav.Divider />

							<ClayMultiStepNav.Indicator
								label={1 + i}
								subTitle={subTitle}
							/>
						</ClayMultiStepNav.Item>
					);
				})}
			</ClayMultiStepNav>

			<Button.Group className="justify-content-between w-100" spaced>
				<Button
					disabled={value === 0}
					displayType="secondary"
					onClick={() => {
						setValue((value) => Math.max(value - 1, 0));
					}}
				>
					Previous
				</Button>

				<Button
					disabled={value === steps.length - 1}
					onClick={() => {
						setValue((value) => Math.min(value + 1, steps.length));
					}}
				>
					Next
				</Button>
			</Button.Group>
		</div>
	);
}

NonInteractive.args = {
	center: false,
};

export function MultiStepNavWithBasicItems(args: any) {
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
}

MultiStepNavWithBasicItems.args = {
	maxStepsShown: 7,
};
export function Error() {
	const steps = [
		{
			title: 'Basic Information',
		},
		{
			title: 'Segment',
		},
		{
			title: 'Goals',
		},
		{
			title: 'Review and Save',
		},
	];

	return (
		<div className="sheet">
			<ClayMultiStepNavWithBasicItems
				defaultActive={2}
				state="error"
				steps={steps}
			/>
		</div>
	);
}
