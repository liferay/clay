/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys, getFocusableList} from '@clayui/shared';
import {useCallback} from 'react';

type Props<T> = {
	/**
	 * Flag to disable navigation in a tree.
	 */
	disabled?: boolean;

	/**
	 * Flag to indicate the ARIA role of a tree element.
	 */
	locator: {
		row: string;
		cell: string;
	};

	/**
	 * Reference of the parent element of the focusable elements.
	 */
	ref: React.RefObject<T>;
};

export function useTreeNavigation<T extends HTMLElement>({
	disabled,
	locator,
	ref,
}: Props<T>) {
	const onKeyDownCapture = useCallback(
		(event: React.KeyboardEvent<T>) => {
			if (
				![
					Keys.Left,
					Keys.Right,
					Keys.Up,
					Keys.Down,
					Keys.Home,
					Keys.End,
				].includes(event.key) ||
				disabled
			) {
				return;
			}

			const activeElement = document.activeElement as HTMLElement;
			const isRow = activeElement.getAttribute('role') === locator.row;

			let item: HTMLElement | undefined;

			switch (event.key) {
				case Keys.Up:
				case Keys.Down: {
					let items: Array<HTMLElement>;

					if (isRow) {
						items = getFocusableList<T>(ref, [
							`[role="${locator.row}"]`,
						]);
					} else {
						const colIndex =
							activeElement.getAttribute('aria-colindex');
						items = getFocusableList<T>(ref, [
							`[aria-colindex="${colIndex}"]`,
						]);
					}

					const position = items.indexOf(activeElement);

					if (position === -1) {
						break;
					}

					item =
						items[
							event.key === Keys.Up ? position - 1 : position + 1
						];
					break;
				}
				case Keys.Left: {
					if (isRow) {
						if (
							activeElement.getAttribute('aria-expanded') !==
								'true' &&
							activeElement.getAttribute('aria-level') !== '1'
						) {
							const items = getFocusableList<T>(ref, [
								`[role="${locator.row}"]`,
							]);

							let position = items.indexOf(activeElement);

							while (
								items[position]?.getAttribute('aria-level') !==
								String(
									Number(
										activeElement.getAttribute('aria-level')
									) - 1
								)
							) {
								position -= 1;
							}

							item = items[position];
						}
					} else {
						const row = activeElement.closest(
							`[role="${locator.row}"]`
						);
						const items = getFocusableList<T>({current: row as T}, [
							`[role="${locator.cell}"]`,
						]);

						const position = items.indexOf(activeElement);

						if (position === -1) {
							break;
						}

						if (position === 0) {
							item = row as T;
						} else {
							item = items[position - 1];
						}
					}
					break;
				}
				case Keys.Right: {
					if (isRow) {
						if (
							activeElement.getAttribute('aria-expanded') !==
							'false'
						) {
							item = activeElement.querySelector(
								`[role="${locator.cell}"]`
							) as HTMLElement;
						}
					} else {
						const row = activeElement.closest(
							`[role="${locator.row}"]`
						);
						const items = getFocusableList<T>({current: row as T}, [
							`[role="${locator.cell}"]`,
						]);

						const position = items.indexOf(activeElement);

						if (position === -1) {
							break;
						}

						item = items[position + 1];
					}
					break;
				}
				case Keys.Home:
				case Keys.End: {
					let items: Array<HTMLElement>;

					if (isRow) {
						items = getFocusableList<T>(ref, [
							`[role="${locator.row}"]`,
						]);
					} else {
						const row = activeElement.closest(
							`[role="${locator.row}"]`
						);
						items = getFocusableList<T>({current: row as T}, [
							`[role="${locator.cell}"]`,
						]);
					}

					item =
						items[event.key === Keys.Home ? 0 : items.length - 1];
					break;
				}
				default: {
					break;
				}
			}

			if (item) {
				event.preventDefault();
				item.focus();
			}
		},
		[disabled]
	);

	return {navigationProps: {onKeyDownCapture}};
}
