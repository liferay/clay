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
import LayoutDragDrop from './LayoutContentDragDrop';
import ListPage from './ListPage';
import ClayTableWithDraggableColumns from './TableColumnsDragDrop';
import ClayTableWithDraggableRows from './TableRowsDragDrop';

import './Recharts';

storiesOf('Demos|Templates', module)
	.add('List Page', () => <ListPage />)
	.add('Files Page', () => <FilesPage />)
	.add('Form Page', () => <FormPage />)
	.add('Table Rows Drag & Drop', () => (
		<DndProvider backend={Backend}>
			<ClayTableWithDraggableRows />
		</DndProvider>
	))
	.add('Table Columns Drag & Drop', () => (
		<DndProvider backend={Backend}>
			<ClayTableWithDraggableColumns />
		</DndProvider>
	))
	.add('Drag & Drop', () => (
		<DndProvider backend={Backend}>
			<DragDrop />
		</DndProvider>
	))
	.add('Layout.Content Drag & Drop', () => (
		<DndProvider backend={Backend}>
			<LayoutDragDrop />
		</DndProvider>
	));
