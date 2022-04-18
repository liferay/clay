/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ClaySelect, ClaySelectWithOption} from '../src';

export default {
	component: ClaySelect,
	title: 'Design System/Components/Select',
};

const options = [
	{
		label: 'Option 1',
		value: '1',
	},
	{
		label: 'Option 2',
		value: '2',
	},
];

export const Composition = (args: any) => (
	<div className="sheet">
		<div className="form-group">
			<label htmlFor="mySelectId">Select Label</label>
			<ClaySelect
				aria-label="Select Label"
				disabled={args.disabled}
				id="mySelectId"
				multiple={args.multiple}
			>
				{options.map((item) => (
					<ClaySelect.Option
						key={item.value}
						label={item.label}
						value={item.value}
					/>
				))}
			</ClaySelect>
		</div>
	</div>
);

Composition.args = {
	disabled: false,
	multiple: false,
};

export const HighLevel = (args: any) => (
	<div className="sheet">
		<div className="form-group">
			<label htmlFor="mySelectId">Select Label</label>
			<ClaySelectWithOption
				aria-label="Select Label"
				disabled={args.disabled}
				id="mySelectId"
				multiple={args.multiple}
				options={options}
			/>
		</div>
	</div>
);

HighLevel.args = {
	disabled: false,
	multiple: false,
};

export const HighLevelWithGroup = () => (
	<div className="sheet">
		<div className="form-group">
			<label htmlFor="mySelectId">Dinosaurs</label>
			<ClaySelectWithOption
				id="mySelectId"
				options={[
					{
						label: 'Theropods',
						options: [
							{
								label: 'Tyrannosaurus',
								value: 'Tyrannosaurus',
							},
							{
								label: 'Velociraptor',
								value: 'Velociraptor',
							},
						],
						type: 'group',
					},
					{
						label: 'Sauropods',
						options: [
							{
								label: 'Diplodocus',
								value: 'Diplodocus',
							},
							{
								label: 'Saltasaurus',
								value: 'Saltasaurus',
							},
						],
						type: 'group',
					},
				]}
			/>
		</div>
	</div>
);
