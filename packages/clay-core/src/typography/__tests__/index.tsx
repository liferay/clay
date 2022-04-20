/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {Heading} from '..';
 import {cleanup, render} from '@testing-library/react';
 import React from 'react';

 describe('Heading', () => {
	afterEach(cleanup);

	it('renders as h1 with normal style', () => {
		

		render(
			<Heading
		    level={1}
		    weight='normal'
	        >
		        This is a Heading
	        </Heading>
		);
        
        expect(document.querySelector('.font-weight-normal')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

    it('renders as h3 with semi-bold style', () => {
		

		render(
			<Heading
		    level={3}
		    weight='semi-bold'
	        >
		        This is a Heading
	        </Heading>
		);
        
        expect(document.querySelector('.font-weight-semi-bold')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});
});