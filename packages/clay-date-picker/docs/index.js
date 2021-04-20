/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayDatePicker from '@clayui/date-picker';
import React from 'react';

const datePickerWithStateImportsCode = `import ClayDatePicker from '@clayui/date-picker';
`;

const DatePickerWithState = () => {
	const scope = {ClayDatePicker};
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

	return (
		<Editor
			code={code}
			imports={datePickerWithStateImportsCode}
			scope={scope}
		/>
	);
};

const datePickerLocaleImportsCode = `import ClayDatePicker from '@clayui/date-picker';
`;

const DatePickerLocale = () => {
	const scope = {ClayDatePicker};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

	return (
		<ClayDatePicker
			dateFormat="dd.MM.yyyy"
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

	return (
		<Editor
			code={code}
			disabled
			imports={datePickerLocaleImportsCode}
			scope={scope}
		/>
	);
};

const datePickerCustomFooterImportsCode = `import ClayDatePicker from '@clayui/date-picker';
`;

const DatePickerCustomFooter = () => {
	const scope = {ClayDatePicker};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD"
			spritemap={spritemap}
			value={value}
			footerElement={() => <span>Footer Content</span>}
			years={{
				end: 2024,
				start: 2008,
			}}
		/>
	);
}

render(<Component />)`;

	return (
		<Editor
			code={code}
			disabled
			imports={datePickerCustomFooterImportsCode}
			scope={scope}
		/>
	);
};

const DatePickerWithTimeCode = `import ClayDatePicker from '@clayui/date-picker';
`;

const DatePickerWithTime = () => {
	const scope = {ClayDatePicker};
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

	return (
		<Editor
			code={code}
			disabled
			imports={DatePickerWithTimeCode}
			scope={scope}
		/>
	);
};

const DatePickerWithRangeCode = `import ClayDatePicker from '@clayui/date-picker';
`;

const DatePickerWithRange = () => {
	const scope = {ClayDatePicker};
	const code = `const Component = () => {
	const [value, setValue] = useState(null);

	return (
		<ClayDatePicker
			onValueChange={setValue}
			placeholder="YYYY-MM-DD - YYYY-MM-DD"
			range
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

	return (
		<Editor
			code={code}
			disabled
			imports={DatePickerWithRangeCode}
			scope={scope}
		/>
	);
};

export {
	DatePickerCustomFooter,
	DatePickerLocale,
	DatePickerWithRange,
	DatePickerWithState,
	DatePickerWithTime,
};
