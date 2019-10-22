/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

export const H1 = props => (
	<h1
		className="clay-h1"
		id={props.children
			.toLowerCase()
			.split(' ')
			.join('-')}
	>
		{props.children}
	</h1>
);

export const H2 = props => (
	<h2
		className="clay-h2"
		id={props.children
			.toLowerCase()
			.split(' ')
			.join('-')}
	>
		{props.children}
	</h2>
);

export const H3 = props => (
	<h3
		className="clay-h3"
		id={props.children
			.toLowerCase()
			.split(' ')
			.join('-')}
	>
		{props.children}
	</h3>
);

export const H4 = props => (
	<h4
		className="clay-h4"
		id={props.children
			.toLowerCase()
			.split(' ')
			.join('-')}
	>
		{props.children}
	</h4>
);

export const P = props => (
	<p className={props.className ? props.className : 'clay-p'}>
		{props.children}
	</p>
);
