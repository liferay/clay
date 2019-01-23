/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import ClayDatePicker from '../src/ClayDatePicker';

import './style.scss';

const spritemap = '../../../node_modules/clay-css/lib/images/icons/icons.svg';

/**
 * @return {React.Component}
 */
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

/**
 * @return {React.Component}
 */
function TimeBlock() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD HH:mm"
			spritemap={spritemap}
			time={true}
			value={value}
			years={{
				start: 1997,
				end: 2024,
			}}
		/>
	);
}

ReactDOM.render(<TimeBlock />, document.getElementById('time-block'));

/**
 * @return {React.Component}
 */
function LocaleBlock() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			dateFormat="DD.MM.YYYY"
			firstDayOfWeek={1}
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
			time={true}
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

/**
 * @return {React.Component}
 */
function NativeBlock() {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			useNative={true}
			value={value}
		/>
	);
}

ReactDOM.render(<NativeBlock />, document.getElementById('native-block'));
