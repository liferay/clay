/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useCallback, useRef, useState} from 'react';
import warning from 'warning';

export type InternalDispatch<Value> =
	| ((value: Value) => void)
	| ((value?: Value) => void)
	| ((value: Value | (() => Value)) => void)
	| ((value?: Value | (() => Value)) => void)
	| React.Dispatch<React.SetStateAction<Value>>;

type Props<Value> = {
	defaultName: string;
	handleName: string;
	name: string;
	defaultValue?: Value | (() => Value);
	onChange?: InternalDispatch<Value>;
	value?: Value;
};

export function useControlledState<Value>({
	defaultName,
	defaultValue,
	handleName,
	name,
	onChange,
	value,
}: Props<Value>) {
	const [stateValue, setStateValue] = useState(
		defaultValue === undefined ? value : defaultValue
	);

	const ref = useRef(value !== undefined);
	const wasControlled = ref.current;
	const isControlled = value !== undefined;

	if (wasControlled !== isControlled) {
		console.warn(
			`WARN: A component changed from ${
				wasControlled ? 'controlled' : 'uncontrolled'
			} to ${
				isControlled ? 'controlled' : 'uncontrolled'
			}. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled '${name}' prop for the lifetime of the component.`
		);
	}

	ref.current = isControlled;

	warning(
		!(typeof onChange === 'undefined' && typeof value !== 'undefined'),
		`You provided a '${name}' prop for a component without a handler '${handleName}'. This will render the component with an internal state, if the component is to be uncontrolled, use '${defaultName}'. Otherwise, set the '${handleName}' handler.`
	);

	const setValue = useCallback(
		(value: Value) => {
			if (!isControlled) {
				setStateValue(value);
			}

			if (onChange) {
				onChange(value);
			}
		},
		[isControlled, onChange]
	);

	if (!isControlled) {
		value = stateValue;
	}

	return [value, setValue, !isControlled] as [
		Value,
		InternalDispatch<Value>,
		boolean
	];
}
