/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTable from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayTable', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayTable />);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with a Body', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Body />
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with a Head', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Head />
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with a Head and Body', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with multiple rows into Head', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Head>
					<ClayTable.Row />
					<ClayTable.Row />
					<ClayTable.Row />
				</ClayTable.Head>
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with multiple rows into Body', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row />
					<ClayTable.Row />
					<ClayTable.Row />
				</ClayTable.Body>
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with multiple Cells into Row', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row>
						<ClayTable.Cell>One</ClayTable.Cell>
						<ClayTable.Cell>
							<button type="button">Two</button>
						</ClayTable.Cell>
						<ClayTable.Cell>Three</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with an active row', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row active />
				</ClayTable.Body>
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table with columns bordered', () => {
		const {container} = render(
			<ClayTable borderedColumns>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a table hover', () => {
		const {container} = render(
			<ClayTable hover>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a no wrapped table', () => {
		const {container} = render(
			<ClayTable headingNoWrap noWrap>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a table striped', () => {
		const {container} = render(
			<ClayTable striped>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a responsive table', () => {
		const {container} = render(
			<ClayTable responsive responsiveSize="sm">
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a responsive table', () => {
		const {container} = render(
			<ClayTable responsive responsiveSize="sm">
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a full bottom vertical aligned table', () => {
		const {container} = render(
			<ClayTable
				headVerticalAlignment="bottom"
				tableVerticalAlignment="bottom"
			>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a Cell with text alignment set to center', () => {
		const {container} = render(
			<ClayTable striped>
				<ClayTable.Head>
					<ClayTable.Row>
						<ClayTable.Cell align="center" headingCell>
							<a href="#1">Link</a>
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Head>
				<ClayTable.Body />
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders a Cell delimited', () => {
		const {container} = render(
			<ClayTable striped>
				<ClayTable.Head>
					<ClayTable.Row>
						<ClayTable.Cell cellDelimiter="start" headingCell>
							Start
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<button type="button">Dummy</button>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<button type="button">Dummy</button>
						</ClayTable.Cell>
						<ClayTable.Cell cellDelimiter="end" headingCell>
							End
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Head>
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders with a headingTitle', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row divider>
						<ClayTable.Cell colSpan={8}>Recipes</ClayTable.Cell>
					</ClayTable.Row>

					<ClayTable.Row>
						<ClayTable.Cell expanded headingTitle>
							Hamburger
						</ClayTable.Cell>
						<ClayTable.Cell />
						<ClayTable.Cell>U.S.A</ClayTable.Cell>
						<ClayTable.Cell align="right">10 min.</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders with non wrapped cells', () => {
		const {container} = render(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row divider>
						<ClayTable.Cell colSpan={8}>Recipes</ClayTable.Cell>
					</ClayTable.Row>

					<ClayTable.Row>
						<ClayTable.Cell expanded headingTitle>
							Hamburger
						</ClayTable.Cell>
						<ClayTable.Cell />
						<ClayTable.Cell noWrap>
							Originally from the U.S.A. but available anywhere
							around the world
						</ClayTable.Cell>
						<ClayTable.Cell align="right">10 min.</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		);
		expect(container).toMatchSnapshot();
	});
});
