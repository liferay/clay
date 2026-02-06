/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayToolbar from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayToolbar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayToolbar />);

		expect(container).toMatchSnapshot();
	});
});
