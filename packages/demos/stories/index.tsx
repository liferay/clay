/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {storiesOf} from '@storybook/react';
import * as React from 'react';

import FilesPage from './FilesPage';
import FormPage from './FormPage';
import ListPage from './ListPage';

storiesOf('Demos|Templates', module)
	.add('List Page', () => <ListPage />)
	.add('Files Page', () => <FilesPage />)
	.add('Form Page', () => <FormPage />);
