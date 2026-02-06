/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
export function Default() {
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
}
