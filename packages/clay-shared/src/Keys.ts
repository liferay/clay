/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

/**
 * Key names for comparison with `Event.prototype.key`.
 *
 * Note that because React normalizes key names in its synthetic
 * event system, we don't have to worry about browser-specific
 * edge cases (such as "Spacebar" instead of " " in IE):
 *
 * See:
 *
 * - https://github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js#L12-L29
 * - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 */
export const Keys = {
	Backspace: 'Backspace',
	Del: 'Delete',
	Down: 'ArrowDown',
	End: 'End',
	Enter: 'Enter',
	Esc: 'Escape',
	F2: 'F2',
	Home: 'Home',
	Left: 'ArrowLeft',
	R: 'R',
	Right: 'ArrowRight',
	Spacebar: ' ',
	Tab: 'Tab',
	Up: 'ArrowUp',
};
