/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDatePicker, {firstDayOfWeek} from '../src/ClayDatePicker';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const spritemap = '../../../node_modules/clay-css/lib/images/icons/icons.svg';

function DefaultState() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			value={value}
			years={{
				start: 1997,
				end: 2024,
			}}
		/>
	);
}

ReactDOM.render(<DefaultState />, document.getElementById('default-block'));

function TimeBlock() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD HH:mm"
			spritemap={spritemap}
			time
			timezone="GMT+01:00"
			value={value}
			years={{
				start: 1997,
				end: 2024,
			}}
		/>
	);
}

ReactDOM.render(<TimeBlock />, document.getElementById('time-block'));

function LocaleBlock() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			dateFormat="DD.MM.YYYY"
			firstDayOfWeek={firstDayOfWeek.Monday}
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
			onValueChange={setValue}
			placeholder="DD.MM.YYYY HH:mm"
			spritemap={spritemap}
			time
			timezone="GMT+03:00"
			value={value}
			weekdaysShort={['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']}
			years={{
				start: 1997,
				end: 2024,
			}}
		/>
	);
}

ReactDOM.render(<LocaleBlock />, document.getElementById('locale-block'));

function NativeBlock() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			useNative
			value={value}
		/>
	);
}

ReactDOM.render(<NativeBlock />, document.getElementById('native-block'));
