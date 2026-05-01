/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import domAlign from 'dom-align';

import {doAlign} from '../doAlign';

jest.mock('dom-align', () => jest.fn());

const domAlignMock = domAlign as unknown as jest.Mock;

describe('doAlign', () => {
	afterEach(() => {
		domAlignMock.mockReset();
	});

	it('clears stale top, left, right and bottom inline styles on sourceElement before invoking dom-align', () => {
		const target = document.createElement('div');

		document.body.appendChild(target);

		const source = document.createElement('div');

		source.style.bottom = '40px';
		source.style.left = '20px';
		source.style.right = '30px';
		source.style.top = '10px';

		document.body.appendChild(source);

		let bottomAtCall: string | undefined;
		let leftAtCall: string | undefined;
		let rightAtCall: string | undefined;
		let topAtCall: string | undefined;

		domAlignMock.mockImplementation(
			(srcElement: HTMLElement, _target, config) => {
				bottomAtCall = srcElement.style.bottom;
				leftAtCall = srcElement.style.left;
				rightAtCall = srcElement.style.right;
				topAtCall = srcElement.style.top;

				return config;
			}
		);

		doAlign({
			points: ['tl', 'bl'],
			sourceElement: source,
			targetElement: target,
		});

		expect(bottomAtCall).toBe('');
		expect(leftAtCall).toBe('');
		expect(rightAtCall).toBe('');
		expect(topAtCall).toBe('');

		document.body.removeChild(source);
		document.body.removeChild(target);
	});
});
