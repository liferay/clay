/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

export type TInternalStateOnChange<T> =
	| ((val: T) => void)
	| ((val?: T) => void)
	| React.Dispatch<React.SetStateAction<T>>;

interface IArgs<T> {
	initialValue?: T;
	onChange?: TInternalStateOnChange<T>;
	value?: T;
}

export function useInternalState<TValue>({
	initialValue,
	onChange,
	value,
}: IArgs<TValue>) {
	const [internalValue, setInternalValue] = React.useState(initialValue);

	if (typeof value === 'undefined' || typeof onChange === 'undefined') {
		value = internalValue;
		onChange = setInternalValue;
	}

	return [value, onChange] as [TValue, TInternalStateOnChange<TValue>];
}
