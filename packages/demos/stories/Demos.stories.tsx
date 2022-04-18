/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import DragDrop from './DragDrop';
import {DemoFilesPage} from './FilesPage';
import DemoFormPage from './FormPage';
import DemoListPage from './ListPage';
import ClayTableWithDraggableColumns from './TableColumnsDragDrop';
import ClayTableWithDraggableRows from './TableRowsDragDrop';

export default {
	title: 'Demos/Templates',
};

export const ListPage = () => <DemoListPage />;

export const FilesPage = () => <DemoFilesPage />;

export const FormPage = () => <DemoFormPage />;

export const TableRowsWithDragAndDrop = () => (
	<DndProvider backend={HTML5Backend}>
		<ClayTableWithDraggableRows />
	</DndProvider>
);

export const TableColumnsWithDragAndDrop = () => (
	<DndProvider backend={HTML5Backend}>
		<ClayTableWithDraggableColumns />
	</DndProvider>
);

export const DragAndDrop = () => (
	<DndProvider backend={HTML5Backend}>
		<DragDrop />
	</DndProvider>
);
