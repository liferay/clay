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

	const icon = bytesDiff > 0 ? '⬆️ +' : '⬇️ -';

	return `${icon} ${convertBytes(bytesDiff)} (${diffPercent})`;
};

const TABLE_HEADER = `
|Package|Previous Size|New Size|Change|
|----|----|----|----|`;

const getTableSummary = statsArray => {
	const summary = statsArray.reduce(
		({changed, size}, item) => ({
			changed: item.diffSize === 0 ? changed : changed + 1,
			size: size + item.diffSize,
		}),
		{changed: 0, size: 0}
	);

	const arrow = summary.size > 0 ? '⬆️' : '⬇️';
	const symbol = summary.size > 0 ? '+' : '-';

	return `**${
		summary.changed
	}** packages changed. ${arrow} **${symbol}${convertBytes(
		summary.size
	)}** total changed.`;
};

const getStatsArray = (prevStats, newStats) =>
	Object.keys(prevStats).map(dirName => ({
		diffSize: newStats[dirName] - prevStats[dirName],
		newSize: newStats[dirName],
		packageName: dirName.replace('clay-', '@clayui/'),
		prevSize: prevStats[dirName],
	}));

function processMarkdownTable(prevStats, newStats) {
	const statsArray = getStatsArray(prevStats, newStats);

	const table = statsArray.sort(sortDiffSize).reduce((acc, item) => {
		const row = [
			item.packageName,
			convertBytes(item.prevSize),
			`**${convertBytes(item.newSize)}**`,
			setChangedData(item.prevSize, item.newSize),
		];

		return `${acc}\n|${row.join('|')}|`;
	}, TABLE_HEADER);

	return `${getTableSummary(statsArray)}
<details>
	<summary>Packages</summary>
	${table}
</details>`;
}

module.exports = processMarkdownTable;
