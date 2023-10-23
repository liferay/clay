/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import {ClayCheckbox} from '../src';

export default {
	title: 'Design System/Components/Checkbox',
};

export const Default = (args: any) => {
	const [value, setValue] = useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={args.disabled}
			indeterminate={args.indeterminate}
			label={args.label}
			onChange={() => setValue((val) => !val)}
			value="default"
		/>
	);
};

Default.args = {
	disabled: false,
	indeterminate: false,
	label: 'Default',
};

export const Accessibility = () => {
	const [value, setValue] = useState<boolean>(false);

	return (
		<ClayCheckbox
			aria-label="hello! Can you see me?"
			checked={value}
			onChange={() => setValue((val) => !val)}
		/>
	);
};

export const CustomContent = () => {
	const [value, setValue] = useState<boolean>(false);
	const [value2, setValue2] = useState<boolean>(false);

	return (
		<div style={{width: '300px'}}>
			<ClayCheckbox
				checked={value}
				label="Badge"
				onChange={() => setValue((val) => !val)}
			>
				<span className="badge badge-primary ml-1">
					<span className="badge-item badge-item-expand">10</span>
				</span>
			</ClayCheckbox>
			<ClayCheckbox
				checked={value2}
				label="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
				onChange={() => setValue2((val) => !val)}
			>
				<span className="badge badge-primary ml-1">
					<span className="badge-item badge-item-expand">10</span>
				</span>
			</ClayCheckbox>
		</div>
	);
};
