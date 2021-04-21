/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import {ClayPortal, FocusScope} from '..';

describe('FocusScope', () => {
	afterEach(() => {
		jest.clearAllTimers();

		cleanup();
	});

	it('manages focus order when using portals', () => {
		// Create non-react based html nodes
		if (document) {
			const buttonNode = document.createElement('button');
			buttonNode.id = 'button1';

			const buttonNode2 = document.createElement('button');
			buttonNode2.id = 'button2';

			const reactRootNode = document.createElement('div');
			reactRootNode.id = 'reactRoot';

			document.body.appendChild(buttonNode);
			document.body.appendChild(reactRootNode);
			document.body.appendChild(buttonNode2);
		}

		render(
			<FocusScope>
				<div id="wrapper">
					<button id="reactButton">{'React'}</button>
					<ClayPortal>
						<ul>
							<li>
								<a href="#" id="linkInPortal">
									{'link 1'}
								</a>
							</li>
						</ul>
					</ClayPortal>
				</div>
			</FocusScope>,
			{container: document.getElementById('reactRoot') as HTMLElement}
		);

		// Putting this snapshot inline to reference the structure of the DOM
		expect(document.body).toMatchInlineSnapshot(`
		<body>
		  <button
		    id="button1"
		  />
		  <div
		    id="reactRoot"
		  >
		    <div
		      id="wrapper"
		    >
		      <button
		        id="reactButton"
		      >
		        React
		      </button>
		    </div>
		  </div>
		  <button
		    id="button2"
		  />
		  <div>
		    <ul>
		      <li>
		        <a
		          href="#"
		          id="linkInPortal"
		        >
		          link 1
		        </a>
		      </li>
		    </ul>
		  </div>
		</body>
	`);

		const htmlButton1 = document.getElementById('button1') as HTMLElement;
		const htmlButton2 = document.getElementById('button2') as HTMLElement;
		const reactButton = document.getElementById(
			'reactButton'
		) as HTMLElement;
		const linkInPortal = document.getElementById(
			'linkInPortal'
		) as HTMLElement;

		userEvent.tab();

		expect(htmlButton1).toHaveFocus();

		userEvent.tab();

		expect(reactButton).toHaveFocus();

		userEvent.tab();

		expect(linkInPortal).toHaveFocus();

		userEvent.tab();

		expect(htmlButton2).toHaveFocus();
	});
});
