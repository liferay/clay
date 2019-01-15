import ReactDOM from 'react-dom';
import React from 'react';
import ClayDatepicker from '../src/ClayDatepicker';

import './style.scss';

const spritemap = './icons.svg';

/**
 * @return {React.Component}
 */
function DefaultState() {
	return (
		<ClayDatepicker
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
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
	return (
		<ClayDatepicker
			placeholder="YYYY-MM-DD HH:mm"
			spritemap={spritemap}
			time={true}
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
	return (
		<ClayDatepicker
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
			placeholder="DD.MM.YYYY HH:mm"
			spritemap={spritemap}
			time={true}
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
	return (
		<ClayDatepicker
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			useNative={true}
		/>
	);
}

ReactDOM.render(<NativeBlock />, document.getElementById('native-block'));
