/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useEffect} from 'react';

import {ClayPortal, FocusScope} from '../src';

export default {
	component: FocusScope,
	parameters: {
		chromatic: {disableSnapshot: false},
	},
	title: 'Design System/Internal Use Only/FocusScope',
};

export const Default = () => {
	useEffect(() => {
		const node1 = document && document.getElementById('test1');
		const node2 = document && document.getElementById('test2');

		if (node1 && node2 && document) {
			node1.append(
				document
					.createRange()
					.createContextualFragment(
						'<button onclick="alert();">html</button>'
					)
			);

			node2.append(
				document
					.createRange()
					.createContextualFragment(
						'<button onclick="alert();">html2</button>'
					)
			);
		}
	}, []);

	return (
		<>
			<div id="test1" />
			<FocusScope>
				<div>
					<button>React</button>
					<ClayPortal>
						<div style={{border: '1px solid'}}>
							Focuses after React button
							<ul>
								<li>
									<a href="#">link 1</a>
									<a href="#">link 2</a>
									<a href="#">link 3</a>
								</li>
							</ul>
						</div>
					</ClayPortal>
				</div>
			</FocusScope>
			<div id="test2" />
		</>
	);
};
