/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
export function Composition(args: any) {
	return (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor="mySelectId">Select Label</label>

				<ClaySelect
					aria-label="Select Label"
					disabled={args.disabled}
					id="mySelectId"
					multiple={args.multiple}
					shrink={args.shrink}
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
}

Composition.args = {
	disabled: false,
	multiple: false,
	shrink: false,
};
export function HighLevel(args: any) {
	return (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor="mySelectId">Select Label</label>

				<ClaySelectWithOption
					aria-label="Select Label"
					disabled={args.disabled}
					id="mySelectId"
					multiple={args.multiple}
					options={options}
					shrink={args.shrink}
				/>
			</div>
		</div>
	);
}

HighLevel.args = {
	disabled: false,
	multiple: false,
	shrink: false,
};
export function HighLevelWithGroup() {
	return (
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
}
