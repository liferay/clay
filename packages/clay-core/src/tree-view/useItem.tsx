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
	dragAndDropEnabled?: boolean;
	value: Value;
};

const ItemContext = React.createContext<Value>({} as Value);

function getKey(key: React.Key) {
	return `${key}`.replace('.$', '');
}

export function ItemContextProvider({
	children,
	dragAndDropEnabled = false,
	value,
}: Props) {
	const {selection} = useTreeViewContext();
	const {key: parentKey} = useItem();

	const keyRef = useRef(getKey(value.key));

	useEffect(
		() => selection.createPartialLayoutItem(keyRef.current, parentKey),
		[selection.createPartialLayoutItem, keyRef, parentKey]
	);

	const props = {
		...value,
		dragAndDropEnabled,
		key: keyRef.current,
	};

	return (
		<ItemContext.Provider value={props}>{children}</ItemContext.Provider>
	);
}

export function useItem() {
	return useContext(ItemContext);
}
