/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import warning from 'warning';

export type TInternalStateOnChange<T> =
	| ((val: T) => void)
	| ((val?: T) => void)
	| React.Dispatch<React.SetStateAction<T>>;

interface IArgs<T> {
	defaultName: string;
	handleName: string;
	initialValue?: T | (() => T);
	name: string;
	onChange?: TInternalStateOnChange<T>;
	value?: T;
}

export function useInternalState<TValue>({
	defaultName,
	handleName,
	initialValue,
	name,
	onChange,
	value,
}: IArgs<TValue>) {
	const [internalValue, setInternalValue] = React.useState(
		initialValue ?? value
	);

	warning(
		!(typeof value === 'undefined' && typeof onChange !== 'undefined'),
		`A component is changing a controlled ${name} to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled '${name}' prop for the lifetime of the component.`
	);

	warning(
		!(typeof onChange === 'undefined' && typeof value !== 'undefined'),
		`You provided a '${name}' prop for a component without a handler '${handleName}'. This will render the component with an internal state, if the component is to be uncontrolled, use '${defaultName}'. Otherwise, set the '${handleName}' handler.`
	);

	if (typeof value === 'undefined' || typeof onChange === 'undefined') {
		value = internalValue;
		onChange = setInternalValue;
	}

	return [value, onChange] as [TValue, TInternalStateOnChange<TValue>];
}
