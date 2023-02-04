/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys, useId} from '@clayui/shared';
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import {createPortal} from 'react-dom';

import {LiveAnnouncer} from '../live-announcer';
import {useTreeViewContext} from './context';

import type {AnnouncerAPI} from '../live-announcer';

type ContextProps = {
	mode: 'keyboard' | 'mouse' | null;
	position: 'bottom' | 'middle' | 'top' | null;
	currentDrag: React.Key | null;
	dragDescribedBy: string;
	dragDropDescribedBy: string;
	dragCancelDescribedBy: string;
	currentTarget: React.Key | null;
	lastDrop: React.Key | null;
	onDragStart: (target: React.Key) => void;
	onDrop: () => void;
};

type State = Pick<
	ContextProps,
	'mode' | 'currentTarget' | 'currentDrag' | 'position' | 'lastDrop'
>;

const DnDContext = React.createContext<ContextProps>({} as ContextProps);

type Props = {
	rootRef: React.RefObject<HTMLUListElement>;
	children: React.ReactNode;
};

function getFocusableTree(rootRef: React.RefObject<HTMLUListElement>) {
	if (!rootRef.current) {
		return [];
	}

	return [...rootRef.current.querySelectorAll('[role="treeitem"]')].filter(
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

	const [type, key] = target.getAttribute('data-id')!.split(',');

	return type === 'number' ? Number(key) : key;
}

export const DragAndDropProvider = ({children, rootRef}: Props) => {
	const {dragAndDrop, layout, reorder} = useTreeViewContext();

	const announcerRef = useRef<AnnouncerAPI>(null);

	const [state, setState] = useState<State>({
		currentDrag: null,
		currentTarget: null,
		lastDrop: null,
		mode: null,
		position: null,
	});

	const onDragStart = useCallback((dragKey: React.Key) => {
		announcerRef.current?.announce(
			'Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.'
		);

		const nextTargetKey = getNextTarget(rootRef, dragKey);

		setState((state) => ({
			...state,
			currentDrag: dragKey,
			currentTarget: nextTargetKey,
			mode: 'keyboard',
			position: 'bottom',
		}));
	}, []);

	const onDrop = useCallback(() => {
		const {currentDrag, currentTarget, position} = state;
		const dropItem = layout.layoutKeys.current.get(currentTarget!);
		const dragItem = layout.layoutKeys.current.get(currentDrag!);

		reorder(dragItem!.loc, getNewItemPath(dropItem!.loc, position!));
		setState((state) => ({
			...state,
			currentDrag: null,
			currentTarget: null,
			lastDrop: currentTarget,
			mode: null,
			position: null,
		}));
		announcerRef.current?.announce('Drop complete.');
	}, [state]);

	const dragDescribedBy = useId();
	const dragDropDescribedBy = useId();
	const dragCancelDescribedBy = useId();

	useEffect(() => {
		if (state.mode === 'keyboard') {
			const onKeyDown = (event: KeyboardEvent) => {
				switch (event.key) {
					case Keys.Esc:
						announcerRef.current?.announce('Drop cancelled.');
						setState((state) => ({
							...state,
							currentDrag: null,
							currentTarget: null,
							mode: null,
							position: null,
						}));
						break;
					case Keys.Enter: {
						onDrop();
						break;
					}
					case Keys.Up:
					case Keys.Down: {
						event.preventDefault();
						event.stopPropagation();

						const items = getFocusableTree(rootRef);
						const position = items.findIndex((element) =>
							element.getAttribute('data-dnd-dropping')
						);

						const item =
							items[
								event.key === Keys.Up
									? position - 1
									: position + 1
							];

						if (
							(event.key === Keys.Down &&
								state.position === 'top') ||
							(event.key === Keys.Up &&
								state.position === 'bottom')
						) {
							setState((state) => ({
								...state,
								position: 'middle',
							}));
						} else {
							if (!item) {
								setState((state) => ({
									...state,
									position: position === 0 ? 'top' : 'bottom',
								}));

								return;
							}

							const [type, key] = item
								.getAttribute('data-id')!
								.split(',');

							setState((state) => ({
								...state,
								currentTarget:
									type === 'number' ? Number(key) : key,
								position:
									event.key === Keys.Up ? 'bottom' : 'top',
							}));
						}
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
				onDragStart,
				onDrop,
			}}
		>
			{dragAndDrop && <LiveAnnouncer ref={announcerRef} />}

			{children}

			{dragAndDrop && (
				<>
					{createPortal(
						<div id={dragDescribedBy} style={{display: 'none'}}>
							Press Enter to start dragging.
						</div>,
						document.body
					)}

					{state.mode === 'keyboard' && (
						<>
							{createPortal(
								<div
									id={dragDropDescribedBy}
									style={{display: 'none'}}
								>
									Press Enter to drop. Press Escape to cancel
									drag.
								</div>,
								document.body
							)}
							{createPortal(
								<div
									id={dragCancelDescribedBy}
									style={{display: 'none'}}
								>
									Dragging. Press Enter to cancel drag.
								</div>,
								document.body
							)}
						</>
					)}
				</>
			)}
		</DnDContext.Provider>
	);
};

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
