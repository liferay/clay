/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useState} from 'react';
import warning from 'warning';

export type InternalDispatch<Value> =
	| ((value: Value) => void)
	| ((value?: Value) => void)
	| React.Dispatch<React.SetStateAction<Value>>;

type Props<Value> = {
	defaultName: string;
	handleName: string;
	name: string;
	defaultValue?: Value | (() => Value);
	onChange?: InternalDispatch<Value>;
	value?: Value;
};

export function useInternalState<Value>({
	defaultName,
	defaultValue,
	handleName,
	name,
	onChange,
	value,
}: Props<Value>) {
	const [internalValue, setInternalValue] = useState(defaultValue ?? value);

	warning(
		!(typeof value === 'undefined' && typeof onChange !== 'undefined'),
		`A component is changing a controlled ${name} to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled '${name}' prop for the lifetime of the component.`
	);

	warning(
		!(typeof onChange === 'undefined' && typeof value !== 'undefined'),
		`You provided a '${name}' prop for a component without a handler '${handleName}'. This will render the component with an internal state, if the component is to be uncontrolled, use '${defaultName}'. Otherwise, set the '${handleName}' handler.`
	);

	const isUncontrolled =
		typeof value === 'undefined' || typeof onChange === 'undefined';

	if (isUncontrolled) {
		value = internalValue;
		onChange = setInternalValue;
	}

	return [value, onChange, isUncontrolled] as [
		Value,
		InternalDispatch<Value>,
		boolean
	];
}
