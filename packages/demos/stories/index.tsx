/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {DndProvider} from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import DragDrop from './DragDrop';
import FilesPage from './FilesPage';
import FormPage from './FormPage';
import ListPage from './ListPage';

import './Recharts';

storiesOf('Demos|Templates', module)
	.add('List Page', () => <ListPage />)
	.add('Files Page', () => <FilesPage />)
	.add('Form Page', () => <FormPage />)
	.add('Drag & Drop', () => (
		<DndProvider backend={Backend}>
			<DragDrop />
		</DndProvider>
	));
