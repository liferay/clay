/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
const SPLIT_REGEX = /({\d+})/g;

/**
 * Utility function for substituting variables into language keys.
 *
 * @param langKey This is the language key used
 * @param args Arguments to pass into language key
 */
export const sub = (langKey: string, args: React.ReactText[]) => {
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
 *
 * @param {Object} color tinycolor2 object
 * @param {HTMLElement} node
 * @return {Object}
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
 *
 * @param {number} hue value of hue
 * @param {HTMLElement} node
 * @return {Object}
 */
export const hueToX = (hue: number, node: HTMLElement) => {
	return (hue / 360) * node.getBoundingClientRect().width;
};

/**
 * Utility function for getting hue from the x position
 *
 * @param {number} x left coordinate
 * @param {HTMLElement} node
 * @return {Object}
 */
export const xToHue = (x: number, node: HTMLElement) => {
	return (x / node.getBoundingClientRect().width) * 360;
};

/**
 * Utility function for getting saturation from the x position
 *
 * @param {number} x left coordinate
 * @param {HTMLElement} node
 * @return {Object}
 */
export function xToSaturation(x: number, node: HTMLElement) {
	return Math.round((x * 100) / node.getBoundingClientRect().width);
}

/**
 * Utility function for getting visibility from the y position
 *
 * @param {number} y top coordinate
 * @param {HTMLElement} node
 * @return {Object}
 */
export function yToVisibility(y: number, node: HTMLElement) {
	return Math.round(-((y * 100) / node.getBoundingClientRect().height) + 100);
}
