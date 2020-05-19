/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

const convertBytes = function(bytes) {
	if (bytes === 0) {
		return '--';
	}

	bytes = Math.abs(bytes);

	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

	if (i === 0) {
		return `${bytes} ${sizes[i]}`;
	}

	return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
};

module.exports = convertBytes;
