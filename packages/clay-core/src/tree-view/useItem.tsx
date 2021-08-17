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

// From https://gist.github.com/gordonbrander/2230317
function getUUID() {
	const array = window.crypto.getRandomValues(new Uint32Array(8));

	let output = '';

	for (let i = 0; i < array.length; i++) {
		output += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
	}

	return output;
}

export function ItemContextProvider({children, value}: Props) {
	const idRef = useRef(value.id ?? getUUID());

	const props = {
		...value,
		id: idRef.current,
	};

	return (
		<ItemContext.Provider value={props}>{children}</ItemContext.Provider>
	);
}

export function useItem() {
	return useContext(ItemContext);
}
