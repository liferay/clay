/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import warning from 'warning';

import Col from './Col';
import Container from './Container';
import ContainerFluid from './ContainerFluid';
import {ContentCol, ContentRow, ContentSection} from './Content';
import Row from './Row';
import {Sheet, SheetFooter, SheetHeader, SheetSection} from './Sheet';

export {
	Col,
	Container,
	ContainerFluid,
	ContentCol,
	ContentRow,
	ContentSection,
	Row,
	Sheet,
	SheetFooter,
	SheetHeader,
	SheetSection,
};

function ClayLayout(): null & {
	Col: typeof Col;
	Container: typeof Container;
	ContainerFluid: typeof ContainerFluid;
	ContentCol: typeof ContentCol;
	ContentRow: typeof ContentRow;
	ContentSection: typeof ContentSection;
	Row: typeof Row;
	Sheet: typeof Sheet;
	SheetFooter: typeof SheetFooter;
	SheetHeader: typeof SheetHeader;
	SheetSection: typeof SheetSection;
};

function ClayLayout() {
	warning(
		true,
		`ClayLayout is a no-op and is not expected to be used by itself. Try using one of the many namespaced components like '<ClayLayout.ContainerFluid>'`
	);

	return null;
}

ClayLayout.Col = Col;
ClayLayout.Container = Container;
ClayLayout.ContainerFluid = ContainerFluid;
ClayLayout.ContentCol = ContentCol;
ClayLayout.ContentRow = ContentRow;
ClayLayout.ContentSection = ContentSection;
ClayLayout.Row = Row;
ClayLayout.Sheet = Sheet;
ClayLayout.SheetFooter = SheetFooter;
ClayLayout.SheetHeader = SheetHeader;
ClayLayout.SheetSection = SheetSection;

export default ClayLayout;
