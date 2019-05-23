/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayTable from '..';

describe('ClayTable', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayTable />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with a Body', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Body />
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with a Head', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Head />
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with a Head and Body', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with multiple rows into Head', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Head>
					<ClayTable.Row />
					<ClayTable.Row />
					<ClayTable.Row />
				</ClayTable.Head>
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with multiple rows into Body', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row />
					<ClayTable.Row />
					<ClayTable.Row />
				</ClayTable.Body>
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with multiple Cells into Row', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row>
						<ClayTable.Cell>{'One'}</ClayTable.Cell>
						<ClayTable.Cell>
							<button type="button">{'Two'}</button>
						</ClayTable.Cell>
						<ClayTable.Cell>{'Three'}</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table with an active row', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row active />
				</ClayTable.Body>
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table bordered', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable bordered>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table hover', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable hover>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a no wrapped table', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable headingNoWrap noWrap>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a table striped', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable striped>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a responsive table', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable responsive responsiveSize="sm">
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a responsive table', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable responsive responsiveSize="sm">
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a full bottom vertical aligned table', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable
				headVerticalAlignment="bottom"
				tableVerticalAlignment="bottom"
			>
				<ClayTable.Head />
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a Cell with text alignment set to center', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable striped>
				<ClayTable.Head>
					<ClayTable.Row>
						<ClayTable.Cell align="center" headingCell>
							<a href="#1">{`Link`}</a>
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Head>
				<ClayTable.Body />
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders a Cell delimited', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable striped>
				<ClayTable.Head>
					<ClayTable.Row>
						<ClayTable.Cell cellDelimiter="start" headingCell>
							{'Start'}
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<button type="button">{'Dummy'}</button>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<button type="button">{'Dummy'}</button>
						</ClayTable.Cell>
						<ClayTable.Cell cellDelimiter="end" headingCell>
							{'End'}
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Head>
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
	it('renders with a headingTitle', () => {
		const testRenderer = TestRenderer.create(
			<ClayTable>
				<ClayTable.Body>
					<ClayTable.Row divider>
						<ClayTable.Cell colSpan={8}>{'Recipes'}</ClayTable.Cell>
					</ClayTable.Row>

					<ClayTable.Row>
						<ClayTable.Cell expanded headingTitle>
							{'Hamburger'}
						</ClayTable.Cell>
						<ClayTable.Cell />
						<ClayTable.Cell>{'U.S.A'}</ClayTable.Cell>
						<ClayTable.Cell align="right">
							{'10 min.'}
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
