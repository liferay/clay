/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import React from 'react';

import ClayEmptyState from '../src';

export default {
	component: ClayEmptyState,
	title: 'Design System/Components/EmptyState',
};

export const Default = () => (
	<ClayEmptyState>
		<ClayButton displayType="primary">Button</ClayButton>
	</ClayEmptyState>
);

export const Title = () => (
	<ClayEmptyState title={null}>
		<ClayButton displayType="primary">Button</ClayButton>
	</ClayEmptyState>
);

export const EmptyState = (args: any) => (
	<ClayEmptyState small={args.small} state="empty">
		<ClayButton displayType="secondary">Button</ClayButton>
	</ClayEmptyState>
);

EmptyState.args = {
	small: false,
};

export const SearchState = () => (
	<ClayEmptyState
		description="This is a description of what the button will allow you to do"
		state="search"
		title="No content yet"
	/>
);

export const SuccessState = () => (
	<ClayEmptyState
		description="You don't have more notifications to review"
		state="success"
		title="Hurray"
	/>
);

export const WithImage = () => (
	<ClayEmptyState
		description="You don't have more notifications to review"
		state="success"
		title="Hurray"
	/>
);
