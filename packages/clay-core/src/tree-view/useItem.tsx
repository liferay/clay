/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext, useEffect, useRef} from 'react';

import {useTreeViewContext} from './context';

type Value = {
	[propName: string]: any;
	key: React.Key;
};

type Props = {
	children: React.ReactNode;
	value: Value;
};

const ItemContext = React.createContext<Value>({} as Value);

function getKey(key: React.Key) {
	return `${key}`.replace('.$', '');
}

export function ItemContextProvider({children, value}: Props) {
	const {selection} = useTreeViewContext();
	const {key: parentKey} = useItem();

	const keyRef = useRef(getKey(value.key));

	useEffect(() => selection.mount(keyRef.current, parentKey), [
		selection.mount,
		keyRef,
		parentKey,
	]);

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
