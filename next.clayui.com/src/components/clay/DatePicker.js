/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDatePicker from '@clayui/date-picker';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const DatePickerWithState = () => {
	const scope = {ClayDatePicker, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			value={value}
			years={{
				end: 2024,
				start: 1997,
			}}
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

const DatePickerLocale = () => {
	const scope = {ClayDatePicker, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

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
			placeholder="DD.MM.YYYY"
			spritemap={spritemap}
			value={value}
			weekdaysShort={['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']}
			years={{
				end: 2024,
				start: 2008,
			}}
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} disabled scope={scope} />;
};

const DatePickerCustomFooter = () => {
	const scope = {ClayDatePicker, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			value={value}
			footerElement={({ spritemap }) => <span>Footer Content</span>}
			years={{
				end: 2024,
				start: 2008,
			}}
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} disabled scope={scope} />;
};

const DatePickerWithTime = () => {
	const scope = {ClayDatePicker, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD HH:mm"
			spritemap={spritemap}
			value={value}
			time
			timezone="GMT+01:00"
			years={{
				end: 2024,
				start: 2008,
			}}
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} disabled scope={scope} />;
};

export {
	DatePickerLocale,
	DatePickerWithTime,
	DatePickerCustomFooter,
	DatePickerWithState,
};
