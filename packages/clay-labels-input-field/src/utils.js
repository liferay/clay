/**
 * If `query` matches to `string`, returns an object with the
 * corresponding characters. If there is no match, return null.
 * @param {!String} query
 * @param {!String} string
 * @return {null|Object}
 */
export const match = (query, string) => {
	let currentScore = 0;
	let totalScore = 0;
	let queryIndex = 0;
	let result = [];

	let queryToLowerCase = query.toLowerCase();
	let stringToLowerCase = string.toLowerCase();

	for (let index = 0; index < string.length; index++) {
		let element = string[index];

		if (stringToLowerCase[index] === queryToLowerCase[queryIndex]) {
			element = {value: element, match: true};

			queryIndex += 1;
			currentScore += 1 + currentScore;
		} else {
			element = {value: element};
			currentScore = 0;
		}

		totalScore += currentScore;
		result[result.length] = element;
	}

	if (queryIndex === query.length) {
		totalScore = (string === query) ? Infinity : totalScore;
		return {values: result, score: totalScore};
	}

	return null;
};
