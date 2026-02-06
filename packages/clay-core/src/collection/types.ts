/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import type {Virtualizer} from '@tanstack/react-virtual';

type ChildType = {
	displayName?: string;
	passthroughKey?: boolean;
};

interface IReactTypeElement extends Omit<React.ReactElement<any>, 'type'> {
	type: ChildType;
}

export type ChildElement = IReactTypeElement & {
	ref?: (node: HTMLElement | null) => void;
};

export type ChildrenFunction<T, P> =
	P extends Array<unknown>
		? (item: T, ...args: P) => React.ReactElement
		: (item: T, index?: number) => React.ReactElement;

export interface ICollectionProps<T, P> {

	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T, P>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;

	/**
	 * Flag to indicate whether the list should be virtualized.
	 */
	virtualize?: boolean;
}

export type CollectionState = {
	UNSAFE_virtualizer?: Virtualizer<HTMLElement, Element>;
	collection: JSX.Element;
	getFirstItem: () => {index: number; key: React.Key; value: string};
	getItem: (key: React.Key) => {index: number; value: string};
	getItems: () => Array<React.Key>;
	getLastItem: () => {index: number; key: React.Key; value: string};
	getSize: () => number;
	hasItem: (key: React.Key) => boolean;
	size?: number;
	virtualize: boolean;
};

export type Props<P, K> = {

	/**
	 * Flag to enable all nested collections to share the same data.
	 */
	connectNested?: boolean;

	/**
	 * Properties that should be omitted from item data when passed to
	 * children function.
	 */
	exclude?: Set<K>;

	/**
	 * Test method for filtering elements in children (static only).
	 */
	filter?: (value: string) => boolean;

	/**
	 * Defines the name of the property key that is used in the filter (static only).
	 */
	filterKey?: string;

	/**
	 * Flag to enable force updating the root collection when layout creation
	 * is done at render time from nested collections instead of assembling
	 * everything in the root.
	 *
	 * NOTE: This can be slow when you have a large list and is not necessary
	 * when you don't have nested collections or the collections are group
	 * primitives when the nested items are created in the root.
	 */
	forceDeepRootUpdate?: boolean;

	/**
	 * Defines a component that will be used as a wrapper for items in the
	 * collection if defined.
	 */
	itemContainer?: (props: any) => JSX.Element | null;

	/**
	 * Defines which key should be used as the item identifier.
	 */
	itemIdKey?: string;

	/**
	 * Renders an element when there is no item matching the list of items.
	 */
	notFound?: JSX.Element;

	/**
	 * Set for the parent's key to create the unique key of the list items, if
	 * the collection is rendered nested.
	 */
	parentKey?: React.Key;

	/**
	 * Flag to pass the key value to the element.
	 */
	passthroughKey?: boolean;

	/**
	 * Defines the public APIs that are passed in the children function when
	 * it is a dynamic collection.
	 */
	publicApi?: P;

	suppressTextValueWarning?: boolean;

	virtualizer?: Virtualizer<HTMLElement, Element>;

	/**
	 * Flag to render only the defined elements but does not affect the layout
	 * registration, for example when getting all the items in the collection it
	 * will still be there.
	 */
	visibleKeys?: Set<React.Key> | Array<number>;
};
