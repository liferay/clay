const SPLIT_REGEX = /({\d+})/g;

/**
 * Utility function for substituting variables into language keys.
 *
 * @example
 * sub('Search {0}', ['all'])
 * => 'Search all'
 * sub('Search {0}', [<b>all<b>])
 * => 'Search <b>all</b>'
 *
 * @param {string} langKey This is the language key used
 * @param {string} args Arguments to pass into language key
 * @param {string} join Boolean used to indicate whether to call `.join()` on
 * the array before it is returned. Use `false` if subbing in JSX.
 * @return {(string|Array)}
 */
export function sub(langKey, args, join = true) {
	const keyArray = langKey.split(SPLIT_REGEX).filter(val => val.length !== 0);

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];

		const indexKey = `{${i}}`;

		let argIndex = keyArray.indexOf(indexKey);

		while (argIndex >= 0) {
			keyArray.splice(argIndex, 1, arg);

			argIndex = keyArray.indexOf(indexKey);
		}
	}

	return join ? keyArray.join('') : keyArray;
}

/**
 * Utility function for getting x & y coordinates for gradient
 *
 * @param {Object} color tinycolor2 object
 * @param {HTMLElement} node
 * @return {Object}
 */
export function colorToXY(color, node) {
	const rect = node.getBoundingClientRect();

	const {s, v} = color.toHsv();

	const x = Math.round((s * 100 * rect.width) / 100);
	const y = Math.round(((v * 100 - 100) * -1 * rect.height) / 100);

	return {x, y};
}

/**
 * Utility function for getting the x position from hue
 *
 * @param {number} hue value of hue
 * @param {HTMLElement} node
 * @return {Object}
 */
export function hueToX(hue, node) {
	return (hue / 360) * node.getBoundingClientRect().width;
}

/**
 * Utility function for getting hue from the x position
 *
 * @param {number} x left coordinate
 * @param {HTMLElement} node
 * @return {Object}
 */
export function xToHue(x, node) {
	return (x / node.getBoundingClientRect().width) * 360;
}

/**
 * Utility function for getting saturation from the x position
 *
 * @param {number} x left coordinate
 * @param {HTMLElement} node
 * @return {Object}
 */
export function xToSaturation(x, node) {
	return Math.round((x * 100) / node.getBoundingClientRect().width);
}

/**
 * Utility function for getting visibility from the y position
 *
 * @param {number} y top coordinate
 * @param {HTMLElement} node
 * @return {Object}
 */
export function yToVisibility(y, node) {
	return Math.round(-((y * 100) / node.getBoundingClientRect().height) + 100);
}
