/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

interface IConfig {
	points: readonly [string, string];
	offset: readonly [number, number];
	targetOffset: readonly [string, string];
	overflow: {adjustX: boolean; adjustY: boolean};
}

interface IConfigOptional {
	points?: readonly [string, string];
	offset?: readonly [number, number];
	targetOffset?: readonly [string, string];
	overflow?: {adjustX: boolean; adjustY: boolean};
}

declare function doAlign(
	sourceNode: HTMLElement,
	targetNode: HTMLElement,
	config?: IConfigOptional
): IConfig;

declare module 'dom-align' {
	export = doAlign;
}
