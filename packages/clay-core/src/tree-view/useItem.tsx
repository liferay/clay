/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext, useRef} from 'react';

type Value = Record<string, any>;

type Props = {
	children: React.ReactNode;
	value: Value;
};

const ItemContext = React.createContext<Value>({});

function getKey(key: React.Key) {
	return `${key}`.replace('.$', '');
}

export function ItemContextProvider({children, value = {}}: Props) {
	const keyRef = useRef(getKey(value.key));

	const props = {
		...value,
		key: keyRef.current,
	};

	return (
		<ItemContext.Provider value={props}>{children}</ItemContext.Provider>
	);
}

export function useItem() {
	return useContext(ItemContext);
}
