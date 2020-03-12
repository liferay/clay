/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const emptyImage = require('@clayui/css/src/images/images/empty_state.gif');
const searchImage = require('@clayui/css/src/images/images/search_state.gif');
const successImage = require('@clayui/css/src/images/images/success_state.gif');
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayEmptyState from '../src';

storiesOf('Components|ClayEmptyState', module)
	.add('default', () => (
		<ClayEmptyState>
			<ClayButton displayType="primary">{'Button'}</ClayButton>
		</ClayEmptyState>
	))
	.add('empty state', () => (
		<ClayEmptyState imgSrc={emptyImage}>
			<ClayButton displayType="secondary">{'Button'}</ClayButton>
		</ClayEmptyState>
	))
	.add('search state', () => (
		<ClayEmptyState
			description="This is a description of what the button will allow you to do"
			imgSrc={searchImage}
			title="No content yet"
		/>
	))
	.add('success state', () => (
		<ClayEmptyState
			description="You don't have more notifications to review"
			imgSrc={successImage}
			title="Hurray"
		/>
	))
	.add('w/ imgProps', () => (
		<ClayEmptyState
			description="You don't have more notifications to review"
			imgProps={{alt: 'test test', title: 'hello world'}}
			imgSrc={successImage}
			title="Hurray"
		/>
	));
