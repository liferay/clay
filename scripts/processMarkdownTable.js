/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

function processMarkdownTable(dataJson) {
	let table = `
|Package|Size|
|----|----|`;

	Object.keys(dataJson).forEach(package => {
		table += `\n|${package}|${dataJson[package]}|`;
	});

	return `<details>
	<summary>Bundle Sizes</summary>
	${table}
</details>`;
}

module.exports = processMarkdownTable;
