/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
const emptyImage = require('@clayui/css/src/images/images/empty_state.gif');
const searchImage = require('@clayui/css/src/images/images/search_state.gif');
const successImage = require('@clayui/css/src/images/images/success_state.gif');
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
	<ClayEmptyState imgSrc={emptyImage} small={args.small}>
		<ClayButton displayType="secondary">Button</ClayButton>
	</ClayEmptyState>
);

EmptyState.args = {
	small: false,
};

export const SearchState = () => (
	<ClayEmptyState
		description="This is a description of what the button will allow you to do"
		imgSrc={searchImage}
		title="No content yet"
	/>
);

export const SuccessState = () => (
	<ClayEmptyState
		description="You don't have more notifications to review"
		imgSrc={successImage}
		imgSrcReducedMotion={null}
		title="Hurray"
	/>
);

export const WithImage = () => (
	<ClayEmptyState
		description="You don't have more notifications to review"
		imgProps={{
			alt: 'test test',
			title: 'hello world',
		}}
		imgSrc={successImage}
		title="Hurray"
	/>
);
