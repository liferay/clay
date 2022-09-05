/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useEffect, useState} from 'react';

import '@testing-library/jest-dom/extend-expect';
import {ClayPortal, FocusScope} from '..';

describe('FocusScope', () => {
	afterEach(() => {
		document.body.innerHTML = '';
		cleanup();
	});

	beforeEach(() => {
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
					<button id="reactButton">React</button>
					<ClayPortal>
						<ul>
							<li>
								<a href="#" id="linkInPortal1">
									link 1
								</a>
							</li>
							<li>
								<a href="#" id="linkInPortal2">
									link 2
								</a>
							</li>
							<li>
								<a href="#" id="linkInPortal3">
									link 3
								</a>
							</li>
						</ul>
					</ClayPortal>
				</div>
			</FocusScope>,
			{container: document.getElementById('reactRoot') as HTMLElement}
		);
	});

	it('manages focus order when using portals', () => {
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
		          id="linkInPortal1"
		        >
		          link 1
		        </a>
		      </li>
		      <li>
		        <a
		          href="#"
		          id="linkInPortal2"
		        >
		          link 2
		        </a>
		      </li>
		      <li>
		        <a
		          href="#"
		          id="linkInPortal3"
		        >
		          link 3
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
		const linkInPortalOne = document.getElementById(
			'linkInPortal1'
		) as HTMLElement;
		const linkInPortalTwo = document.getElementById(
			'linkInPortal2'
		) as HTMLElement;
		const linkInPortalThree = document.getElementById(
			'linkInPortal3'
		) as HTMLElement;

		userEvent.tab();

		expect(htmlButton1).toHaveFocus();

		userEvent.tab();

		expect(reactButton).toHaveFocus();

		userEvent.tab();

		expect(linkInPortalOne).toHaveFocus();

		userEvent.tab();

		expect(linkInPortalTwo).toHaveFocus();

		userEvent.tab();

		expect(linkInPortalThree).toHaveFocus();

		userEvent.tab();

		expect(htmlButton2).toHaveFocus();
	});

	it('interacts with shift + tab', () => {
		const htmlButton1 = document.getElementById('button1') as HTMLElement;
		const htmlButton2 = document.getElementById('button2') as HTMLElement;

		const reactButton = document.getElementById(
			'reactButton'
		) as HTMLElement;

		htmlButton2.focus();

		expect(htmlButton2).toHaveFocus();

		userEvent.tab({shift: true});

		expect(reactButton).toHaveFocus();

		userEvent.tab({shift: true});

		expect(htmlButton1).toHaveFocus();
	});

	it('interacts with down arrow key', () => {
		const linkInPortalOne = document.getElementById(
			'linkInPortal1'
		) as HTMLElement;
		const linkInPortalTwo = document.getElementById(
			'linkInPortal2'
		) as HTMLElement;
		const linkInPortalThree = document.getElementById(
			'linkInPortal3'
		) as HTMLElement;

		linkInPortalOne.focus();

		expect(linkInPortalOne).toHaveFocus();

		fireEvent.keyDown(linkInPortalOne, {key: 'ArrowDown'});

		expect(linkInPortalTwo).toHaveFocus();

		fireEvent.keyDown(linkInPortalTwo, {key: 'ArrowDown'});

		expect(linkInPortalThree).toHaveFocus();

		fireEvent.keyDown(linkInPortalThree, {key: 'ArrowDown'});
	});

	it('interacts with up arrow key', () => {
		const linkInPortalOne = document.getElementById(
			'linkInPortal1'
		) as HTMLElement;
		const linkInPortalTwo = document.getElementById(
			'linkInPortal2'
		) as HTMLElement;
		const linkInPortalThree = document.getElementById(
			'linkInPortal3'
		) as HTMLElement;

		linkInPortalThree.focus();

		expect(linkInPortalThree).toHaveFocus();

		fireEvent.keyDown(linkInPortalThree, {key: 'ArrowUp'});

		expect(linkInPortalTwo).toHaveFocus();

		fireEvent.keyDown(linkInPortalTwo, {key: 'ArrowUp'});

		expect(linkInPortalOne).toHaveFocus();

		fireEvent.keyDown(linkInPortalOne, {key: 'ArrowUp'});
	});

	describe('FocusScope outside the React Tree', () => {
		beforeEach(() => {
			document.body.innerHTML = '';
		});

		it('interacts with React.Portal', async () => {
			const {getByText} = render(
				<FocusScope>
					<div>
						<button>Button 1</button>

						<ClayPortal>
							<div id="content">
								<button>Button 2</button>
							</div>
						</ClayPortal>

						<ClayPortal>
							<FocusScope>
								<div id="content">
									<button>one</button>
									<button>two</button>
								</div>
							</FocusScope>
						</ClayPortal>
					</div>
				</FocusScope>
			);

			const button1El = getByText('Button 1');
			const button2El = getByText('Button 2');

			await userEvent.tab();

			expect(button1El).toHaveFocus();

			await userEvent.tab();

			expect(button2El).toHaveFocus();

			await userEvent.tab();

			const oneEl = getByText('one');

			expect(oneEl).toHaveFocus();

			await userEvent.tab();

			const twoEl = getByText('two');

			expect(twoEl).toHaveFocus();
		});

		it('interacts without React.Portal', () => {
			const {getByText} = render(
				<FocusScope>
					<div>
						<div id="content">
							<button>Button 1</button>
						</div>

						<ClayPortal>
							<FocusScope>
								<div id="content">
									<button>one</button>
									<button>two</button>
								</div>
							</FocusScope>
						</ClayPortal>
					</div>
				</FocusScope>
			);

			const button1El = getByText('Button 1');

			userEvent.tab();

			expect(button1El).toHaveFocus();

			userEvent.tab();

			const oneEl = getByText('one');

			expect(oneEl).toHaveFocus();

			userEvent.tab();

			const twoEl = getByText('two');

			expect(twoEl).toHaveFocus();

			userEvent.tab();

			expect(document.body).toHaveFocus();

			userEvent.tab();

			expect(button1El).toHaveFocus();
		});
	});

	type Props = {
		children: JSX.Element;
		condition: boolean;
		onRender: () => void;
	};

	it('move focus when there is an element in the tree in progress', () => {
		document.body.innerHTML = '';

		const OnRender = ({children, condition, onRender}: Props) => {
			useEffect(() => {
				if (condition) {
					onRender();
				}
			}, [condition]);

			return children;
		};

		const Menu = () => {
			const [active, setActive] = useState(false);

			return (
				<FocusScope>
					{(focusManager) => (
						<div id="wrapper">
							<button onClick={() => setActive(!active)}>
								Open
								<Icon
									spritemap="icons.svg"
									symbol={active ? 'up' : 'down'}
								/>
							</button>
							<ClayPortal>
								<OnRender
									condition={active}
									onRender={() => focusManager.focusNext()}
								>
									<ul role="menu">
										<li role="presentation">
											<a href="#" role="menuitem">
												link 1
											</a>
										</li>
										<li role="presentation">
											<a href="#" role="menuitem">
												link 2
											</a>
										</li>
										<li role="presentation">
											<a href="#" role="menuitem">
												link 3
											</a>
										</li>
									</ul>
								</OnRender>
							</ClayPortal>
						</div>
					)}
				</FocusScope>
			);
		};

		const {getAllByRole, getByRole} = render(<Menu />);

		const button = getByRole('button');

		button.focus();

		expect(button === document.activeElement).toBeTruthy();

		fireEvent.click(button);

		const [link1] = getAllByRole('menuitem');

		expect(link1 === document.activeElement).toBeTruthy();
	});
});
