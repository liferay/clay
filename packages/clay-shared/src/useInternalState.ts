/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

type TOnChange<T> = (val?: T) => void;

interface IArgs<T> {
	initialValue?: T;
	onChange?: TOnChange<T>;
	value?: T;
}

export function useInternalState<TValue>({
	initialValue,
	onChange,
	value,
}: IArgs<TValue>) {
	const [internalValue, setInteralValue] = React.useState(initialValue);

	if (typeof value === 'undefined') {
		value = internalValue;
	}

	if (typeof onChange === 'undefined') {
		onChange = setInteralValue;
	}

	return [value, onChange] as [TValue, TOnChange<TValue>];
}
