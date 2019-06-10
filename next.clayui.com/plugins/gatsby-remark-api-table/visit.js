/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const VISITOR = require('./evaluators');

const evaluateTags = ast => {
	return ast
		.map(tag => {
			if (!VISITOR[tag.title]) {
				return false;
			}

			return VISITOR[tag.title](tag);
		})
		.filter(Boolean);
};

const evaluateDescription = description =>
	description.children[0].children[0].value;

const evaluateInstance = ast => {
	return ast
		.map(instance => {
			if (!instance.type) {
				return false;
			}

			const tags = {...evaluateTags(instance.tags)};

			return {
				...tags[0],
				...tags[1],
				description: evaluateDescription(instance.description),
				property: instance.name,
			};
		})
		.filter(Boolean);
};

module.exports = evaluateInstance;
