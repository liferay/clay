/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
import {createImmutableTree} from './useTree';

import type {AnnouncerAPI} from '../live-announcer';

export type DragAndDropMessages = {
	dragDescriptionKeyboard: string;
	dragItem: string;
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
	[propName: string]: any;
	cursor: Array<React.Key>;
	indexes: Array<number>;
	itemRef: React.RefObject<HTMLDivElement>;
	key: React.Key;
	nextKey?: React.Key;
	parentItemRef: React.RefObject<HTMLDivElement>;
	prevKey?: React.Key;
};

type ContextProps = {
	mode: 'keyboard' | 'mouse' | null;
	position: 'bottom' | 'middle' | 'top' | null;
	currentDrag: React.Key | null;
	dragDescribedBy: string;
	dragDropDescribedBy: string;
	dragCancelDescribedBy: string;
	currentTarget: React.Key | null;
	messages: DragAndDropMessages;
	onCancel: () => void;
	onEnd: () => void;
	onDragStart: (mode: 'keyboard' | 'mouse', target: React.Key) => void;
	onPositionChange: (key: React.Key, position: Position) => void;
	onDrop: () => void;
};

type State = Pick<
	ContextProps,
	'mode' | 'currentTarget' | 'currentDrag' | 'position'
> & {
	lastItem: React.Key | null;
	status: 'complete' | 'canceled' | null;
};

const DnDContext = React.createContext<ContextProps>({} as ContextProps);

type Props<T> = {
	children: React.ReactNode;
	messages?: DragAndDropMessages;
	nestedKey: string;
	onItemHover?: (item: T, parentItem: T, index: MoveItemIndex) => boolean;
	onItemMove?: (item: T, parentItem: T, index: MoveItemIndex) => boolean;
	rootRef: React.RefObject<HTMLUListElement>;
};

function getFocusableTree(rootRef: React.RefObject<HTMLUListElement>) {
	if (!rootRef.current) {
		return [];
	}

	return [
		...rootRef.current.querySelectorAll(
			'[role="treeitem"][data-dnd="true"]'
		),
	].filter(
		(element) =>
			!(
				element.getAttribute('disabled') ||
				element.closest('.treeview-item-dragging')
			)
	);
}

function getNextTarget(
	rootRef: React.RefObject<HTMLUListElement>,
	dragKey: React.Key
) {
	const focusableTree = getFocusableTree(rootRef);

	let dragPosition = 0;

	const items = focusableTree.filter((element, index) => {
		const [type, key] = element.getAttribute('data-id')!.split(',');
		const reactKey = type === 'number' ? Number(key) : key;

		if (reactKey === dragKey) {
			dragPosition = index;
		}

		return !(
			reactKey === dragKey ||
			element.closest(
				`[data-id="${
					typeof dragKey === 'number'
						? `number,${dragKey}`
						: `string,${dragKey}`
				}"]`
			)
		);
	});

	const target =
		items[dragPosition === items.length ? dragPosition - 1 : dragPosition];

	if (!target) {
		return null;
	}

	const [type, key] = target.getAttribute('data-id')!.split(',');

	return type === 'number' ? Number(key) : key!;
}

const defaultMessages: DragAndDropMessages = {
	dragDescriptionKeyboard: 'Press Enter to start dragging.',
	dragItem: 'Drag',
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
	nestedKey,
	onItemMove,
	onItemHover,
	rootRef,
}: Props<T>) {
	const {dragAndDrop, items, layout, reorder} = useTreeViewContext();

	const announcerRef = useRef<AnnouncerAPI>(null);

	const [state, setState] = useState<State>({
		currentDrag: null,
		currentTarget: null,
		lastItem: null,
		mode: null,
		position: null,
		status: null,
	});

	const onDragStart = useCallback(
		(mode: 'keyboard' | 'mouse', dragKey: React.Key) => {
			if (mode === 'mouse') {
				setState((state) => ({
					...state,
					currentDrag: dragKey,
					mode: 'mouse',
					status: null,
				}));
			} else {
				const nextTargetKey = getNextTarget(rootRef, dragKey);

				if (nextTargetKey === null) {
					return;
				}

				announcerRef.current?.announce(messages.dragStartedKeyboard);
				setState((state) => ({
					...state,
					currentDrag: dragKey,
					currentTarget: nextTargetKey,
					mode: 'keyboard',
					position: 'bottom',
					status: null,
				}));
			}
		},
		[]
	);

	const onEnd = useCallback(() => {
		setState((state) => ({
			currentDrag: null,
			currentTarget: null,
			lastItem: state.currentDrag,
			mode: null,
			position: null,
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

	const onCancel = useCallback(() => {
		announcerRef.current?.announce(messages.dropCanceled);
		setState((state) => ({
			currentDrag: null,
			currentTarget: null,
			lastItem: state.currentDrag,
			mode: null,
			position: null,
			status: 'canceled',
		}));
	}, []);

	const onDrop = useCallback(() => {
		const {currentDrag, currentTarget, position} = state;
		const dropLayoutItem = layout.layoutKeys.current.get(currentTarget!);
		const dragLayoutItem = layout.layoutKeys.current.get(currentDrag!);

		const indexes = getNewItemPath(dropLayoutItem!.loc, position!);

		if (onItemMove) {
			const tree = createImmutableTree(items as any, nestedKey!);

			const dragNode = tree.nodeByPath(dragLayoutItem!.loc);

			const isMoved = onItemMove(
				dragNode.item as Record<any, any>,
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

		reorder(dragLayoutItem!.cursor, dropLayoutItem!.cursor, position!);
		setState({
			currentDrag: null,
			currentTarget: null,
			lastItem: currentDrag,
			mode: null,
			position: null,
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
		if (rootRef.current && state.mode === 'keyboard') {
			return suppressOthers([
				...rootRef.current.querySelectorAll(
					'[aria-roledescription="drop indicator"], [data-draggable="true"], [class="component-text"]'
				),
				document.body.querySelector<Element>(
					'[data-live-announcer="true"]'
				)!,
			]);
		}
	}, [state.mode]);

	const dragDescribedBy = useId();
	const dragDropDescribedBy = useId();
	const dragCancelDescribedBy = useId();

	useEffect(() => {
		if (state.mode === 'keyboard') {
			const denylist = new Set<React.Key>();

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

						const focusableItems = getFocusableTree(rootRef).filter(
							(item) => {
								if (item.getAttribute('data-dnd-dropping')) {
									return true;
								}

								const [type, key] = item
									.getAttribute('data-id')!
									.split(',');

								return !denylist.has(
									type === 'number' ? Number(key) : key!
								);
							}
						);
						const position = focusableItems.findIndex((element) =>
							element.getAttribute('data-dnd-dropping')
						);

						const item =
							focusableItems[
								event.key === Keys.Up
									? position - 1
									: position + 1
							];

						const newState: State = {
							...state,
						};

						if (item && denylist.has(newState.currentTarget!)) {
							const [type, key] = item
								.getAttribute('data-id')!
								.split(',');

							newState.position =
								event.key === Keys.Up ? 'top' : 'bottom';
							newState.currentTarget =
								type === 'number' ? Number(key) : key!;
						} else if (
							(event.key === Keys.Up &&
								state.position === 'bottom') ||
							(event.key === Keys.Down &&
								state.position === 'top')
						) {
							newState.position = 'middle';
						} else if (
							event.key === Keys.Down &&
							state.position === 'middle'
						) {
							newState.position = 'bottom';
						} else {
							if (!item) {
								newState.position =
									position === 0 ? 'top' : 'bottom';
							} else {
								const [type, key] = item
									.getAttribute('data-id')!
									.split(',');

								newState.position =
									event.key === Keys.Up ? 'bottom' : 'middle';
								newState.currentTarget =
									type === 'number' ? Number(key) : key!;
							}
						}

						if (onItemHover) {
							const dropLayoutItem =
								layout.layoutKeys.current.get(
									newState.currentTarget!
								);
							const dragLayoutItem =
								layout.layoutKeys.current.get(
									newState.currentDrag!
								);
							const tree = createImmutableTree(
								items as any,
								nestedKey!
							);
							const indexes = getNewItemPath(
								dropLayoutItem!.loc,
								newState.position!
							);

							const dragNode = tree.nodeByPath(
								dragLayoutItem!.loc
							);

							const isHovered = onItemHover(
								dragNode.item as Record<any, any>,
								tree.nodeByPath(indexes).parent as Record<
									any,
									any
								>,
								{
									next: indexes[indexes.length - 1]!,
									previous: dragNode.index,
								}
							);

							if (!isHovered) {
								// Removes the item from the list so that the next function
								// call looks for the next element.
								denylist.add(newState.currentTarget!);

								// Try moving to the next item.
								onKeyDown(event);

								return;
							}
						}

						setState(newState);
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
				onDragStart,
				onDrop,
				onEnd,
				onPositionChange,
			}}
		>
			{dragAndDrop && <LiveAnnouncer ref={announcerRef} />}

			{state.mode === 'keyboard' ? (
				<>
					<span
						aria-hidden="true"
						data-focus-scope-start="true"
						tabIndex={0}
					/>
					{children}
					<span
						aria-hidden="true"
						data-focus-scope-end="true"
						tabIndex={0}
					/>
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

					{state.mode === 'keyboard' && (
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

export const useDnD = () => {
	return useContext(DnDContext);
};
