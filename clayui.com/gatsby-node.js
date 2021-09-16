/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const express = require('express');

exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.onCreateWebpackConfig = require('./gatsby/onCreateWebpackConfig');

exports.onCreateDevServer = ({app}) => {
	app.use(express.static('static'));
};
