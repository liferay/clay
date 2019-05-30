/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
// See https://github.com/metal/metal-plugins/blob/master/packages/metal-position/src/Align.js#L207

declare module 'metal-position' {
	interface IAlignType {
		align: (
			element: HTMLElement,
			alignElement: HTMLElement,
			position?: number,
			autoBestAlign?: boolean
		) => string;
		TopCenter: 0;
		TopRight: 1;
		RightCenter: 2;
		BottomRight: 3;
		BottomCenter: 4;
		BottomLeft: 5;
		LeftCenter: 6;
		TopLeft: 7;
	}

	const Align: IAlignType;

	export {Align};
}
