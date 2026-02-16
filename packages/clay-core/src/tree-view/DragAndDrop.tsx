/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Keys, useId} from '@clayui/shared';
import {suppressOthers} from 'aria-hidden';
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import {createPortal} from 'react-dom';

import {LiveAnnouncer} from '../live-announcer';
import {MoveItemIndex, useTreeViewContext} from './context';
import {Layout} from './useLayout';
import {createImmutableTree} from './useTree';

import type {AnnouncerAPI} from '../live-announcer';

export type DragAndDropMessages = {
	dragDescriptionKeyboard: string;
	dragItem: string;
	dragLayerPluralLabel: string;
	dragStartedKeyboard: string;
	dropCanceled: string;
	dropComplete: string;
	dropDescriptionKeyboard: string;
	dropIndicator: string;
	dropOn: string;
	endDragKeyboard: string;
	insertAfter: string;
	insertBefore: string;
};

export type Value = {
	cursor: Array<React.Key>;
	indexes: Array<number>;
	itemRef: React.RefObject<HTMLDivElement>;
	key: React.Key;
	nextKey?: React.Key;
	parentItemRef: React.RefObject<HTMLDivElement>;
	prevKey?: React.Key;
	[propName: string]: any;
};

type ContextProps = {

	/**
	 * Key of the item from which the drag interaction was initiated.
	 * This is the item the user clicked to start dragging, even when
	 * multiple items are selected.
	 */
	currentDrag: React.Key | null;

	/**
	 * Set of keys representing all selected items being dragged together.
	 * Includes the drag origin item and any other selected items.
	 */
	currentDragKeys: Set<React.Key>;
	currentTarget: React.Key | null;
	dragCancelDescribedBy: string;
	dragDescribedBy: string;
	dragDropDescribedBy: string;
	messages: DragAndDropMessages;
	onCancel: () => void;
	onClearPosition: () => void;
	onDragStart: (source: 'keyboard' | 'mouse', target: React.Key) => void;
	onDrop: () => void;
	onEnd: () => void;
	onPositionChange: (key: React.Key, position: Position) => void;
	position: Position | null;
	source: 'keyboard' | 'mouse' | null;
};

type State = Pick<
	ContextProps,
	'currentDrag' | 'currentDragKeys' | 'currentTarget' | 'position' | 'source'
> & {
	lastItem: React.Key | null;
	status: 'complete' | 'canceled' | null;
};

const DnDContext = React.createContext<ContextProps>({} as ContextProps);

type Props<T> = {
	children: React.ReactNode;
	messages?: DragAndDropMessages;
	mode: 'single' | 'multiple';
	nestedKey: string;
	onItemHover?: (
		items: T | Set<React.Key>,
		parentItem: T,
		index: MoveItemIndex,
		position: Position
	) => boolean;
	onItemMove?: (
		items: T | Set<React.Key>,
		parentItem: T,
		index: MoveItemIndex
	) => boolean;
	rootRef: React.RefObject<HTMLUListElement>;
};

const emptySet = () => new Set<React.Key>();

function getFocusableElements(rootRef: React.RefObject<HTMLUListElement>) {
	if (!rootRef.current) {
		return [];
	}

	return [
		...rootRef.current.querySelectorAll(
			'[role="treeitem"][data-dnd="true"]'
		),
	].filter((element) => !element.getAttribute('disabled'));
}

function getElementKey(element: Element): React.Key {
	const [type, key] = element.getAttribute('data-id')!.split(',');

	return type === 'number' ? Number(key) : key!;
}

export function removeDescendants(
	currentDragKeys: Set<React.Key>,
	layout: Layout
): Set<React.Key> {
	const layoutKeys = layout.layoutKeys.current;

	const isParentSelected = (key: React.Key): boolean => {
		let parentKey = layoutKeys.get(key)?.parentKey;

		while (parentKey) {
			if (currentDragKeys.has(parentKey)) {
				return true;
			}
			parentKey = layoutKeys.get(parentKey)?.parentKey;
		}

		return false;
	};

	return new Set(
		Array.from(currentDragKeys).filter((key) => !isParentSelected(key))
	);
}

export function isDescendantOfDraggedItems({
	dragKeys,
	element,
	rootRef,
}: {
	dragKeys: State['currentDragKeys'];
	element: Element;
	rootRef: React.RefObject<HTMLUListElement>;
}) {
	const elements = getFocusableElements(rootRef);

	const dragElements = elements.filter((element) => {
		const key = getElementKey(element);

		return dragKeys.has(key);
	});

	if (
		dragElements.some((dragElement) =>
			dragElement.closest('.treeview-item')!.contains(element)
		)
	) {
		return true;
	}

	return false;
}

function validateTarget<T>({
	currentDrag,
	currentDragKeys,
	items,
	layout,
	mode,
	nestedKey,
	onItemHover,
	position,
	targetKey,
}: {
	currentDrag: State['currentDrag'];
	currentDragKeys: State['currentDragKeys'];
	items?: Record<string, T>[];
	layout: Layout;
	mode: 'single' | 'multiple';
	nestedKey: string;
	onItemHover?: (
		item: T | Set<React.Key>,
		parentItem: T,
		index: MoveItemIndex,
		position: Position
	) => boolean;
	position: Position;
	targetKey: React.Key;
}) {
	if (!onItemHover || !currentDrag) {
		return true;
	}

	const targetItem = layout.layoutKeys.current.get(targetKey);
	const dragItem = layout.layoutKeys.current.get(currentDrag);

	if (!targetItem || !dragItem) {
		return false;
	}

	const targetIndexes = getNewItemPath(targetItem.loc, position);
	const dragKeys = removeDescendants(currentDragKeys, layout);

	const tree = createImmutableTree(items as any, nestedKey!);
	const dragNode = tree.nodeByPath(dragItem.loc);
	const parentNode = tree.nodeByPath(targetIndexes).parent;

	if (!parentNode) {
		return false;
	}

	return onItemHover(
		mode === 'multiple' ? dragKeys : (dragNode.item as Record<any, any>),
		parentNode as Record<any, any>,
		{
			next: targetIndexes[targetIndexes.length - 1]!,
			previous: dragNode.index,
		},
		position
	);
}

type Cursor = {index: number; position: Position};
type Direction = 'up' | 'down';

const cursorTransactions = {
	down: {bottom: 'next', middle: 'bottom', top: 'middle'},
	up: {bottom: 'middle', middle: 'top', top: 'prev'},
} as const;

function getNextCursor({
	direction,
	index,
	position,
}: {
	direction: Direction;
	index: number;
	position: Position;
}): Cursor | null {
	const next = cursorTransactions[direction]?.[position];

	if (!next) {
		return null;
	}

	if (next === 'next') {
		return {index: index + 1, position: 'middle'};
	}

	if (next === 'prev') {
		return {index: index - 1, position: 'middle'};
	}

	return {index, position: next};
}

function getNextTarget<T>({
	direction,
	items,
	layout,
	mode,
	nestedKey,
	onItemHover,
	rootRef,
	state,
}: {
	direction: Direction;
	items?: Record<string, T>[];
	layout: Layout;
	mode: 'single' | 'multiple';
	nestedKey: string;
	onItemHover?: (
		item: T | Set<React.Key>,
		parentItem: T,
		index: MoveItemIndex,
		position: Position
	) => boolean;
	rootRef: React.RefObject<HTMLUListElement>;
	state: State;
}): {key: React.Key; position: Position} | null {
	const elements = getFocusableElements(rootRef);

	if (!elements.length) {
		return null;
	}

	const currentIndex = elements.findIndex(
		(element) => getElementKey(element) === state.currentTarget
	);

	let cursor: {index: number; position: Position} | null = {
		index: currentIndex,
		position: state.position || 'bottom',
	};

	while (true) {
		cursor = getNextCursor({...cursor!, direction});

		if (!cursor) {
			continue;
		}

		const {index, position} = cursor;

		if (index < 0 || index >= elements.length) {
			return null;
		}

		const targetElement = elements[index];

		if (
			!targetElement ||
			isDescendantOfDraggedItems({
				dragKeys: state.currentDragKeys,
				element: targetElement,
				rootRef,
			})
		) {
			continue;
		}

		const targetKey = getElementKey(targetElement);

		const nextTarget = {
			key: targetKey,
			position,
		};

		const isValid = validateTarget({
			currentDrag: state.currentDrag,
			currentDragKeys: state.currentDragKeys,
			items,
			layout,
			mode,
			nestedKey,
			onItemHover,
			position,
			targetKey,
		});

		if (!isValid) {
			continue;
		}

		return nextTarget;
	}
}

const defaultMessages: DragAndDropMessages = {
	dragDescriptionKeyboard: 'Press Enter to start dragging.',
	dragItem: 'Drag',
	dragLayerPluralLabel: '{0} Items',
	dragStartedKeyboard:
		'Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.',
	dropCanceled: 'Drop cancelled.',
	dropComplete: 'Drop complete.',
	dropDescriptionKeyboard:
		'Press Enter to drop. Press Escape to cancel drag.',
	dropIndicator: 'drop indicator',
	dropOn: 'Drop on',
	endDragKeyboard: 'Dragging. Press Enter to cancel drag.',
	insertAfter: 'Insert on bottom of the',
	insertBefore: 'Insert on top of the',
};

export function DragAndDropProvider<T>({
	children,
	messages = defaultMessages,
	mode,
	nestedKey,
	onItemMove,
	onItemHover,
	rootRef,
}: Props<T>) {
	const {
		dragAndDrop,
		expandedKeys,
		items,
		layout,
		open,
		reorder,
		selection: {selectedKeys},
	} = useTreeViewContext();

	const announcerRef = useRef<AnnouncerAPI>(null);

	const [state, setState] = useState<State>({
		currentDrag: null,
		currentDragKeys: emptySet(),
		currentTarget: null,
		lastItem: null,
		position: null,
		source: null,
		status: null,
	});

	const onDragStart = useCallback(
		(source: 'keyboard' | 'mouse', dragKey: React.Key) => {
			const dragKeys =
				mode === 'multiple' && selectedKeys.has(dragKey)
					? selectedKeys
					: new Set([dragKey]);

			if (source === 'mouse') {
				setState((state) => ({
					...state,
					currentDrag: dragKey,
					currentDragKeys: dragKeys,
					source: 'mouse',
					status: null,
				}));
			}
			else {
				announcerRef.current?.announce(messages.dragStartedKeyboard);

				const [first] = [...dragKeys];

				if (!first) {
					return;
				}

				setState((state) => ({
					...state,
					currentDrag: dragKey,
					currentDragKeys: dragKeys,
					currentTarget: first,
					position: 'top',
					source: 'keyboard',
					status: null,
				}));
			}
		},
		[selectedKeys]
	);

	const onEnd = useCallback(() => {
		setState((state) => ({
			currentDrag: null,
			currentDragKeys: emptySet(),
			currentTarget: null,
			lastItem: state.currentDrag,
			position: null,
			source: null,
			status: null,
		}));
	}, []);

	const onPositionChange = useCallback(
		(key: React.Key, position: Position) => {
			setState((state) => ({
				...state,
				currentTarget: key,
				position,
			}));
		},
		[]
	);

	const onClearPosition = useCallback(() => {
		setState((state) => ({
			...state,
			currentTarget: null,
			position: null,
		}));
	}, []);

	const onCancel = useCallback(() => {
		announcerRef.current?.announce(messages.dropCanceled);
		setState((state) => ({
			currentDrag: null,
			currentDragKeys: emptySet(),
			currentTarget: null,
			lastItem: state.currentDrag,
			position: null,
			source: null,
			status: 'canceled',
		}));
	}, []);

	const onDrop = useCallback(() => {
		const {currentDrag, currentTarget, position} = state;
		const dropLayoutItem = layout.layoutKeys.current.get(currentTarget!);
		const dragLayoutItem = layout.layoutKeys.current.get(currentDrag!);
		const dragKeys = removeDescendants(state.currentDragKeys, layout);

		const indexes = getNewItemPath(dropLayoutItem!.loc, position!);

		if (onItemMove) {
			const tree = createImmutableTree(items as any, nestedKey!);

			const dragNode = tree.nodeByPath(dragLayoutItem!.loc);

			const isMoved = onItemMove(
				mode === 'multiple'
					? dragKeys
					: (dragNode.item as Record<any, any>),
				tree.nodeByPath(indexes).parent as Record<any, any>,
				{
					next: indexes[indexes.length - 1]!,
					previous: dragNode.index,
				}
			);

			if (!isMoved) {
				onCancel();

				return;
			}
		}

		reorder(dragKeys, dropLayoutItem!.cursor, position!);
		setState({
			currentDrag: null,
			currentDragKeys: emptySet(),
			currentTarget: null,
			lastItem: currentDrag,
			position: null,
			source: null,
			status: 'complete',
		});
		announcerRef.current?.announce(messages.dropComplete);
	}, [state, onCancel]);

	useEffect(() => {
		if (state.lastItem && state.status) {
			const element = rootRef.current?.querySelector<HTMLDivElement>(
				`[data-id="${
					typeof state.lastItem === 'number'
						? `number,${state.lastItem}`
						: `string,${state.lastItem}`
				}"]${state.status === 'canceled' ? ' [data-draggable]' : ''}`
			);

			if (element) {
				element.focus();
			}
		}
	}, [state]);

	useEffect(() => {
		if (rootRef.current && state.source === 'keyboard') {
			return suppressOthers([
				...rootRef.current.querySelectorAll(
					'[aria-roledescription="drop indicator"], [data-draggable="true"], [class="component-text"]'
				),
				document.body.querySelector<Element>(
					'[data-live-announcer="true"]'
				)!,
			]);
		}
	}, [state.source]);

	const dragDescribedBy = useId();
	const dragDropDescribedBy = useId();
	const dragCancelDescribedBy = useId();

	useEffect(() => {
		if (state.source === 'keyboard') {
			const onKeyDown = (event: KeyboardEvent) => {
				switch (event.key) {
					case Keys.Esc:
						onCancel();
						break;
					case Keys.Enter: {
						if (
							(event.target as HTMLDivElement).getAttribute(
								'aria-roledescription'
							)
						) {
							onDrop();
						}
						break;
					}
					case Keys.Up:
					case Keys.Down: {
						event.preventDefault();
						event.stopPropagation();

						const nextTarget = getNextTarget<T>({
							direction: event.key === Keys.Up ? 'up' : 'down',
							items,
							layout,
							mode,
							nestedKey,
							onItemHover,
							rootRef,
							state,
						});

						if (!nextTarget) {
							return;
						}

						const {key, position} = nextTarget;

						const item = layout.layoutKeys.current.get(key);

						if (!item) {
							return;
						}

						if (
							!expandedKeys.has(key) &&
							(item.children.size || item.lazyChild)
						) {
							open(key);
						}

						setState((state) => ({
							...state,
							currentTarget: key,
							position,
						}));

						break;
					}
					default:
						break;
				}
			};

			document.addEventListener('keydown', onKeyDown, true);

			return () => {
				document.removeEventListener('keydown', onKeyDown, true);
			};
		}
	}, [state]);

	return (
		<DnDContext.Provider
			value={{
				...state,
				dragCancelDescribedBy,
				dragDescribedBy,
				dragDropDescribedBy,
				messages,
				onCancel,
				onClearPosition,
				onDragStart,
				onDrop,
				onEnd,
				onPositionChange,
			}}
		>
			{dragAndDrop && <LiveAnnouncer ref={announcerRef} />}

			{state.source === 'keyboard' ? (
				<>
					<span data-focus-scope-start="true" />
					{children}
					<span data-focus-scope-end="true" />
				</>
			) : (
				children
			)}

			{dragAndDrop && (
				<>
					{createPortal(
						<div
							aria-hidden="true"
							id={dragDescribedBy}
							style={{display: 'none'}}
						>
							{messages.dragDescriptionKeyboard}
						</div>,
						document.body
					)}

					{state.source === 'keyboard' && (
						<>
							{createPortal(
								<div
									aria-hidden="true"
									id={dragDropDescribedBy}
									style={{display: 'none'}}
								>
									{messages.dropDescriptionKeyboard}
								</div>,
								document.body
							)}
							{createPortal(
								<div
									aria-hidden="true"
									id={dragCancelDescribedBy}
									style={{display: 'none'}}
								>
									{messages.endDragKeyboard}
								</div>,
								document.body
							)}
						</>
					)}
				</>
			)}
		</DnDContext.Provider>
	);
}

export const TARGET_POSITION = {
	BOTTOM: 'bottom',
	MIDDLE: 'middle',
	TOP: 'top',
} as const;

type ValueOf<T> = T[keyof T];

export type Position = ValueOf<typeof TARGET_POSITION>;

export function getNewItemPath(path: Array<number>, overPosition: Position) {
	let indexes = [...path];

	const lastPathIndex = indexes.pop() as number;

	switch (overPosition) {
		case TARGET_POSITION.BOTTOM:
			indexes = [...indexes, lastPathIndex + 1];
			break;
		case TARGET_POSITION.MIDDLE:
			indexes = [...indexes, lastPathIndex, 0];
			break;
		case TARGET_POSITION.TOP:
			indexes = [...indexes, lastPathIndex];
			break;
		default:
			break;
	}

	return indexes;
}
export function useDnD() {
	return useContext(DnDContext);
}
