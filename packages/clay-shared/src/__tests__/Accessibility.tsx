/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {TreeView} from '@clayui/core';
import {ClayCheckbox as Checkbox} from '@clayui/form';
import ProgressBar from '@clayui/progress-bar';
import {cleanup, render} from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe';
import React from 'react';

// Just to avoid TypeScript error with required props
const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

OptionalCheckbox.displayName = 'ClayCheckbox';

describe('Clay Components Accessibility Compliance', () => {
	afterEach(cleanup);

	it('Treeview renders with all accessibility rules correctly', async () => {
		expect.extend(toHaveNoViolations);

		const {container} = render(
			<TreeView
				defaultItems={[
					{
						children: [{id: 2, name: 'Item'}],
						id: 1,
						name: 'Root',
					},
				]}
				defaultSelectedKeys={new Set([1, 2])}
			>
				{(item) => (
					<TreeView.Item>
						<TreeView.ItemStack>
							<OptionalCheckbox />
							{item.name}
						</TreeView.ItemStack>
						<TreeView.Group items={item.children}>
							{(item) => (
								<TreeView.Item>
									<OptionalCheckbox />
									{item.name}
								</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		);

		jest.useRealTimers();
		const results = await axe(container, {
			rules: {
				'color-contrast': {enabled: false},
			},
			runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
		});
		jest.useFakeTimers();

		expect(results).toHaveNoViolations();
	});

	it('Progressbar renders with all accessibility rules correctly', async () => {
		expect.extend(toHaveNoViolations);

		const {container} = render(
			<div>
				<ProgressBar value={100} />
				<ProgressBar value={50} />
				<ProgressBar value={50}>50%</ProgressBar>
				<ProgressBar value={50} warn />
			</div>
		);

		jest.useRealTimers();
		const results = await axe(container, {
			rules: {
				'color-contrast': {enabled: false},
			},
			runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
		});
		jest.useFakeTimers();

		expect(results).toHaveNoViolations();
	});
});
