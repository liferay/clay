/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import {storiesOf} from '@storybook/react';
import React from 'react';

const emptyImage = require('../images/empty_state.gif');
const searchImage = require('../images/search_state.gif');
const successImage = require('../images/success_state.gif');
import ClayEmptyState from '../src';

storiesOf('Components|ClayEmptyState', module)
	.add('default', () => <ClayEmptyState />)
	.add('empty state', () => <ClayEmptyState imageSrc={emptyImage} />)
	.add('search state', () => (
		<ClayEmptyState
			description="This is a description of what the button will allow you to do"
			imageSrc={searchImage}
			title="No content yet"
		>
			<ClayButton displayType="secondary">{'Button'}</ClayButton>
		</ClayEmptyState>
	))
	.add('success state', () => (
		<ClayEmptyState
			description="You don't have more notifications to review"
			imageSrc={successImage}
			title="Hurray"
		/>
	));
