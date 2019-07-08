/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
const SPLIT_REGEX = /({\d+})/g;

/**
 * Utility function for substituting variables into language keys.
 */
export const sub = (langKey: string, args: Array<React.ReactText>) => {
	const keyArray = langKey.split(SPLIT_REGEX).filter(val => val.length !== 0);

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];

		const indexKey = `{${i}}`;

		let argIndex = keyArray.indexOf(indexKey);

		while (argIndex >= 0) {
			keyArray.splice(argIndex, 1, arg.toString());

			argIndex = keyArray.indexOf(indexKey);
		}
	}

	return keyArray.join('');
};

/**
 * Utility function for getting x & y coordinates for gradient
 */
export const colorToXY = (color: tinycolor.Instance, node: HTMLElement) => {
	const rect = node.getBoundingClientRect();

	const {s, v} = color.toHsv();

	const x = Math.round((s * 100 * rect.width) / 100);
	const y = Math.round(((v * 100 - 100) * -1 * rect.height) / 100);

	return {x, y};
};

/**
 * Utility function for getting the x position from hue
 */
export const hueToX = (hue: number, node: HTMLElement) => {
	if (Number.isNaN(hue)) {
		return 0;
	}

	return (hue / 360) * node.getBoundingClientRect().width;
};

/**
 * Utility function for getting hue from the x position
 */
export const xToHue = (x: number, node: HTMLElement) => {
	if (Number.isNaN(x)) {
		return 0;
	}

	return (x / node.getBoundingClientRect().width) * 360;
};

/**
 * Utility function for getting saturation from the x position
 */
export function xToSaturation(x: number, node: HTMLElement) {
	return Math.round((x * 100) / node.getBoundingClientRect().width);
}

/**
 * Utility function for getting visibility from the y position
 */
export function yToVisibility(y: number, node: HTMLElement) {
	return Math.round(-((y * 100) / node.getBoundingClientRect().height) + 100);
}
