/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayDatePicker, {FirstDayOfWeek} from '../src';

const ClayDatePickerWithState = (props: {[key: string]: any}) => {
	const [value, setValue] = React.useState<string | Date>('');

	return (
		<ClayDatePicker
			{...props}
			onValueChange={setValue}
			spritemap={spritemap}
			value={value as string}
		/>
	);
};

storiesOf('Components|ClayDatePicker', module)
	.addDecorator(storyFn => (
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
	.add('locale', () => (
		<ClayDatePickerWithState
			dateFormat="DD.MM.YYYY"
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
			placeholder="DD.MM.YYYY HH:mm"
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
	.add('native', () => (
		<ClayDatePickerWithState
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			useNative
		/>
	));
