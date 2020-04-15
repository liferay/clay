/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const convertBytes = require('./convertBytes');

const sortDiffSize = (a, b) => {
	if (a.diffSize === b.diffSize) {
		return 0;
	}

	if (a.diffSize === 0 || (b.diffSize !== 0 && a.diffSize < b.diffSize)) {
		return 1;
	}

	if (b.diffSize === 0 || a.diffSize > b.diffSize) {
		return -1;
	}
};

const setChangedData = function(prevSize, newSize) {
	const bytesDiff = newSize - prevSize;

	if (bytesDiff === 0) {
		return '--';
	}

	const diffPercent = `${((bytesDiff / prevSize) * 100).toFixed(2)}%`;

	const icon = bytesDiff > 0 ? '⬆️' : '⬇';

	return `${icon} ${convertBytes(bytesDiff)} (${diffPercent})`;
};

const padValue = (val, length) => {
	const trailingSpaces = Math.max(length - 1 - val.length, 1);

	return SPACE + val + SPACE.repeat(trailingSpaces);
};

const SPACE = ' ';
const BORDER =
	'+----------------------------+--------------+--------------+------------------------+';
const TABLE_HEADER = `
${BORDER}
|            Package         |   Old Size   |   New Size   |       Difference       |
${BORDER}`;

const getStatsArray = (prevStats, newStats) => {
	const packageNames = Object.keys(prevStats);

	const prevTotal = packageNames.reduce(
		(tot, key) => tot + prevStats[key],
		0
	);
	const newTotal = packageNames.reduce((tot, key) => tot + newStats[key], 0);

	const packageStats = packageNames.map(dirName => ({
		diffSize: newStats[dirName] - prevStats[dirName],
		newSize: newStats[dirName],
		packageName: dirName.replace('clay-', '@clayui/'),
		prevSize: prevStats[dirName],
	}));

	return [
		packageStats,
		Math.round(((newTotal - prevTotal) / prevTotal) * 100),
	];
};

function processMarkdownTable(prevStats, newStats) {
	const [statsArray, totalDiffPercent] = getStatsArray(prevStats, newStats);

	const table = statsArray.sort(sortDiffSize).reduce((acc, item) => {
		const row = [
			padValue(item.packageName, 28),
			padValue(convertBytes(item.prevSize), 14),
			padValue(convertBytes(item.newSize), 14),
			padValue(setChangedData(item.prevSize, item.newSize), 24),
		];

		return `${acc}\n|${row.join('|')}|`;
	}, TABLE_HEADER);

	return [`${table}\nTotal Diff: ${totalDiffPercent}%`, totalDiffPercent];
}

module.exports = processMarkdownTable;
