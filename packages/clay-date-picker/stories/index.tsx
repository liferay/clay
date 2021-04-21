/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayDatePicker, {FirstDayOfWeek} from '../src';

const ClayDatePickerWithState = (props: {[key: string]: any}) => {
	const [value, setValue] = React.useState<string | Date>('');

	return (
		<>
			<label>{'Date Picker'}</label>
			<ClayDatePicker
				{...props}
				ariaLabels={{
					buttonChooseDate: `Choose Date, selected date is ${
						value.toLocaleString() ?? value
					}`,
					buttonDot: 'Go to today',
					buttonNextMonth: 'Next month',
					buttonPreviousMonth: 'Previous month',
					input: value.toLocaleString(),
				}}
				onValueChange={setValue}
				spritemap={spritemap}
				value={value as string}
			/>
		</>
	);
};

storiesOf('Components|ClayDatePicker', module)
	.addDecorator((storyFn) => (
		<div className="sheet">
			<div className="form-group" style={{maxWidth: 520}}>
				{storyFn()}
			</div>
		</div>
	))
	.add('default', () => (
		<ClayDatePickerWithState
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			years={{
				end: 2024,
				start: 1997,
			}}
		/>
	))
	.add('disabled', () => (
		<ClayDatePickerWithState
			disabled={boolean('Disabled', true)}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			years={{
				end: 2024,
				start: 1997,
			}}
		/>
	))
	.add('time', () => (
		<ClayDatePickerWithState
			placeholder="YYYY-MM-DD HH:mm"
			spritemap={spritemap}
			time
			timezone="GMT+01:00"
			years={{
				end: 2024,
				start: 1997,
			}}
		/>
	))
	.add('w/ locale', () => (
		<ClayDatePickerWithState
			dateFormat="dd.MM.yyyy"
			firstDayOfWeek={FirstDayOfWeek.Monday}
			months={[
				'Январь',
				'Февраль',
				'Март',
				'Апрель',
				'Май',
				'Июнь',
				'Июль',
				'Август',
				'Сентябрь',
				'Октябрь',
				'Ноябрь',
				'Декабрь',
			]}
			placeholder="YYYY-MM-DD HH:mm"
			spritemap={spritemap}
			time
			timezone="GMT+03:00"
			weekdaysShort={['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']}
			years={{
				end: 2024,
				start: 1997,
			}}
		/>
	))
	.add('w/ custom expand', () => {
		const [expanded, setExpanded] = React.useState(false);
		const [value, setValue] = React.useState<string | Date>('');

		return (
			<>
				<button onClick={() => setExpanded(true)}>
					{'Open Picker'}
				</button>

				<br />
				<br />

				<ClayDatePicker
					expanded={expanded}
					onExpandedChange={setExpanded}
					onValueChange={(val, type) => {
						setValue(val);

						if (type === 'click') {
							setExpanded(false);
						}
					}}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
					value={value as string}
					years={{
						end: 2024,
						start: 1997,
					}}
				/>
			</>
		);
	})
	.add('native', () => (
		<ClayDatePickerWithState
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			useNative
		/>
	))
	.add('w/ date range', () => (
		<ClayDatePickerWithState
			dateFormat="yyyy/MM/dd"
			placeholder="YYYY/MM/DD - YYYY/MM/DD"
			range
			spritemap={spritemap}
			years={{
				end: 2024,
				start: 1997,
			}}
		/>
	));
