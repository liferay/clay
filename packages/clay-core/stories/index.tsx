/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
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

storiesOf('DemosCore|Templates', module).add('Files Page', () => <FilesPage />);
// .add('Form Page', () => <FormPage />)
// .add('Drag & Drop', () => (
// 	<DndProvider backend={Backend}>
// 		<DragDrop />
// 	</DndProvider>
// ));
