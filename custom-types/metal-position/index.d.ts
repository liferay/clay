/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
// See https://github.com/metal/metal-plugins/blob/master/packages/metal-position/src/Align.js#L207

declare module 'metal-position' {
	interface IAlignments {
		Bottom: 4;
		BottomCenter: 4;
		BottomLeft: 5;
		BottomRight: 3;
		Left: 6;
		LeftCenter: 6;
		Right: 2;
		RightCenter: 2;
		Top: 0;
		TopCenter: 0;
		TopLeft: 7;
		TopRight: 1;
	}

	interface IAlignType extends IAlignments {
		align: (
			element: HTMLElement,
			alignElement: HTMLElement,
			position?: number,
			autoBestAlign?: boolean
		) => number;
	}

	const Align: IAlignType;

	export { Align };
}
