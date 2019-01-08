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
 * Regex to only handle values of A,B,C,D,E,F,0,1,2,3,4,5,6,7,8,9
 */
export const HEX_REGEX = /[a-fA-F0-9]+/;
