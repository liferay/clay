/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
