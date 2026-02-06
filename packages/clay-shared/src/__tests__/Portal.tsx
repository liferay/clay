/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayPortal} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('Portal', () => {
	afterEach(() => {
		jest.clearAllTimers();

		cleanup();
	});

	it('renders to document.body', () => {
		render(
			<div id="parent">
				<ClayPortal>
					<div id="portal" />
				</ClayPortal>
			</div>
		);

		expect(
			document.body.contains(document.getElementById('portal'))
		).toBeTruthy();

		expect(
			document
				.getElementById('parent')!
				.contains(document.getElementById('portal'))
		).not.toBeTruthy();
	});

	it('renders multiple portals to document.body', () => {
		render(
			<div id="parent">
				<ClayPortal>
					<div id="portal1" />
				</ClayPortal>
				Normal Content
				<ClayPortal>
					<div id="portal2" />
				</ClayPortal>
			</div>
		);

		expect(
			document.body.contains(document.getElementById('portal1'))
		).toBeTruthy();

		expect(
			document.body.contains(document.getElementById('portal2'))
		).toBeTruthy();

		expect(
			document
				.getElementById('parent')!
				.contains(document.getElementById('portal'))
		).not.toBeTruthy();
	});

	it('renders inside existing portal', () => {
		render(
			<div id="parent">
				<ClayPortal>
					<div id="portal1">
						<ClayPortal>
							<div id="portal2" />
						</ClayPortal>
					</div>
				</ClayPortal>
			</div>
		);

		const portalContainer = document.getElementById('portal1')!.parentNode!;

		expect(
			document.getElementById('parent')!.contains(portalContainer)
		).toBeFalsy();

		expect(
			portalContainer.contains(document.getElementById('portal2'))
		).toBeTruthy();
	});

	it('renders inside defined container', () => {
		const App = () => {
			const contentRef = React.useRef<HTMLDivElement | null>(null);

			return (
				<div>
					<div id="content" ref={contentRef}>
						content
					</div>

					<ClayPortal containerRef={contentRef}>
						<div id="portal" />
					</ClayPortal>
				</div>
			);
		};

		render(<App />);

		expect(
			document
				.getElementById('content')!
				.contains(document.getElementById('portal'))
		).toBeTruthy();
	});

	it('renders nested portals inside the defined container', () => {
		const App = () => {
			const contentRef = React.useRef<HTMLDivElement | null>(null);

			return (
				<ClayPortal subPortalRef={contentRef}>
					<div>
						<div id="content" ref={contentRef}>
							content
						</div>
					</div>

					<ClayPortal>
						<div id="portal" />
					</ClayPortal>
				</ClayPortal>
			);
		};

		render(<App />);

		expect(
			document
				.getElementById('content')!
				.contains(document.getElementById('portal'))
		).toBeTruthy();
	});

	it('pass className and id to the root element', () => {
		const App = () => {
			return (
				<ClayPortal className="portalClass" id="portalId">
					<div id="portal" />
				</ClayPortal>
			);
		};

		render(<App />);

		expect(document.body).toMatchSnapshot();
	});
});
