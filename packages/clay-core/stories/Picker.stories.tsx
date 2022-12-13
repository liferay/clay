/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Form from '@clayui/form';
import {useId} from '@clayui/shared';
import React from 'react';

import {Option, Picker} from '../src/picker';

export default {
	component: Picker,
	title: 'Design System/Components/Picker',
};

export const Default = () => {
	const pickerId = useId();
	const labelId = useId();

	return (
		<div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a fruit
				</label>
				<Picker aria-labelledby={labelId} id={pickerId}>
					<Option key="apple">Apple</Option>
					<Option disabled key="banana">
						Banana
					</Option>
					<Option key="mangos">Mangos</Option>
					<Option key="blueberry">Blueberry</Option>
					<Option key="boysenberry">Boysenberry</Option>
					<Option key="cherry">Cherry</Option>
					<Option key="cranberry">Cranberry</Option>
					<Option key="eggplant">Eggplant</Option>
					<Option key="fig">Fig</Option>
					<Option key="grape">Grape</Option>
					<Option key="guava">Guava</Option>
					<Option key="huckleberry">Huckleberry</Option>
				</Picker>
			</Form.Group>
		</div>
	);
};

export const Dynamic = () => {
	const pickerId = useId();
	const labelId = useId();

	return (
		<div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a fruit
				</label>
				<Picker
					aria-labelledby={labelId}
					id={pickerId}
					items={[
						'Apple',
						'Banana',
						'Mangos',
						'Blueberry',
						'Boysenberry',
						'Cherry',
						'Cranberry',
						'Eggplant',
						'Fig',
						'Grape',
						'Guava',
						'Huckleberry',
					]}
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
	);
};
