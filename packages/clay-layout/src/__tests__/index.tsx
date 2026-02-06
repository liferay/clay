/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLayout from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayLayout', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<>
				<ClayLayout.Container>
					<ClayLayout.Row justify="start">
						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>

						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>
					</ClayLayout.Row>

					<ClayLayout.Row justify="center">
						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>

						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>
					</ClayLayout.Row>

					<ClayLayout.Row justify="end">
						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>

						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>
					</ClayLayout.Row>

					<ClayLayout.Row justify="around">
						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>

						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>
					</ClayLayout.Row>

					<ClayLayout.Row justify="between">
						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>

						<ClayLayout.Col size={4}>
							One of two columns
						</ClayLayout.Col>
					</ClayLayout.Row>
				</ClayLayout.Container>

				<ClayLayout.Row>
					<ClayLayout.Col md={8} size={12}>
						.col-12 .col-md-8
					</ClayLayout.Col>

					<ClayLayout.Col md={4} size={6}>
						.col-6 .col-md-4
					</ClayLayout.Col>
				</ClayLayout.Row>

				<ClayLayout.Row>
					<ClayLayout.Col md={4} size={6}>
						.col-6 .col-md-4
					</ClayLayout.Col>

					<ClayLayout.Col md={4} size={6}>
						.col-6 .col-md-4
					</ClayLayout.Col>

					<ClayLayout.Col md={4} size={6}>
						.col-6 .col-md-4
					</ClayLayout.Col>
				</ClayLayout.Row>

				<ClayLayout.Row>
					<ClayLayout.Col size={6}>.col-6</ClayLayout.Col>

					<ClayLayout.Col size={6}>.col-6</ClayLayout.Col>
				</ClayLayout.Row>

				<ClayLayout.Row>
					<ClayLayout.Col>First, but unordered</ClayLayout.Col>

					<ClayLayout.Col className="order-12">
						Second, but last
					</ClayLayout.Col>

					<ClayLayout.Col className="order-1">
						Third, but first
					</ClayLayout.Col>
				</ClayLayout.Row>
			</>
		);

		expect(container).toMatchSnapshot();
	});

	it('removes size class when prop is set to false', () => {
		const {container} = render(
			<>
				<ClayLayout.ContainerFluid size={false}>
					test
				</ClayLayout.ContainerFluid>
			</>
		);

		expect(
			container.querySelector('.container-fluid')!.classList
		).not.toContain('container-fluid-max-xl');
	});
});
