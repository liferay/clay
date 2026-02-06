/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Button, FocusTrap} from '../../';

describe('FocusTrap basic rendering', () => {
	afterEach(cleanup);

	it('render static content when focus trap is actived', () => {
		render(
			<FocusTrap active>
				<Button>Apple</Button>
			</FocusTrap>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('render static content when focus trap is not actived', () => {
		render(
			<FocusTrap active={false}>
				<Button>Apple</Button>
			</FocusTrap>
		);

		expect(document.body).toMatchSnapshot();
	});
});
