/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
interface IFakeMouseEventInit {
	bubbles?: boolean;
	cancelable?: boolean;
	composed?: boolean;
	altKey?: boolean;
	button?: 0 | 1 | 2 | 3 | 4;
	buttons?: number;
	clientX?: number;
	clientY?: number;
	ctrlKey?: boolean;
	metaKey?: boolean;
	movementX?: number;
	movementY?: number;
	offsetX?: number;
	offsetY?: number;
	pageX?: number;
	pageY?: number;
	screenX?: number;
	screenY?: number;
	shiftKey?: boolean;
	x?: number;
	y?: number;
}

class FakeMouseEvent extends MouseEvent {
	offsetX: number;
	offsetY: number;
	pageX: number;
	pageY: number;
	x: number;
	y: number;

	constructor(type: string, values: IFakeMouseEventInit) {
		const {offsetX, offsetY, pageX, pageY, x, y, ...mouseValues} = values;

		super(type, mouseValues);

		this.offsetX = offsetX || 0;
		this.offsetY = offsetY || 0;
		this.pageX = pageX || 0;
		this.pageY = pageY || 0;
		this.x = x || 0;
		this.y = y || 0;
	}
}

export default function getMouseEvent(
	type: string,
	values: IFakeMouseEventInit
): FakeMouseEvent {
	values = {
		bubbles: true,
		cancelable: true,
		...values,
	};
	return new FakeMouseEvent(type, values);
}
