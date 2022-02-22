/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const getId = (children) => {
	if (typeof children !== 'string') {
		return;
	}

	if (children.match(/\(#/)) {
		return children.match(/\(#(.*?)\)$/)[1];
	}

	return children.toLowerCase().split(' ').join('-');
};

const getChildren = (children) => {
	if (typeof children !== 'string' || !children.match(/\(#/)) {
		return children;
	}

	return children.match(/(.*?)\(#/)[1];
};

const Heading = ({as: As = 'h1', children}) => (
	<As className={`clay-${As}`} id={getId(children)}>
		{getChildren(children)}
	</As>
);

export const H1 = (props) => <Heading as="h1" {...props} />;

export const H2 = (props) => <Heading as="h2" {...props} />;

export const H3 = (props) => <Heading as="h3" {...props} />;

export const H4 = (props) => <Heading as="h4" {...props} />;

export const P = (props) => (
	<p className={props.className ? props.className : 'clay-p'}>
		{props.children}
	</p>
);
