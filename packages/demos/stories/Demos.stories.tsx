/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
