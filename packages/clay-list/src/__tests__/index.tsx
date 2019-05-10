/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayList from '..';

describe('ClayList', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayList>
				<ClayList.Header>{'This is a header'}</ClayList.Header>
				<ClayList.Item flex>
					<ClayList.ItemField>{'Item 1'}</ClayList.ItemField>

					<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>

					<ClayList.ItemField expand>
						<ClayList.ItemTitle>{`Item Title and expanded`}</ClayList.ItemTitle>
						<ClayList.ItemText>{'Item Text'}</ClayList.ItemText>
					</ClayList.ItemField>

					<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>
				</ClayList.Item>

				<ClayList.Item flex>
					<ClayList.ItemField>{'Item 2'}</ClayList.ItemField>
					<ClayList.ItemField expand>
						{'Hover this item for action menu'}
					</ClayList.ItemField>
					<ClayList.ItemField>
						<ClayList.QuickActionMenu>
							<ClayList.QuickActionMenu.Item
								onClick={() => {}}
								spritemap="/foo/bar"
								symbol="trash"
							/>

							<ClayList.QuickActionMenu.Item
								onClick={() => {}}
								spritemap="/foo/bar"
								symbol="cog"
							/>
						</ClayList.QuickActionMenu>
					</ClayList.ItemField>
				</ClayList.Item>

				<ClayList.Header>{'This is another header'}</ClayList.Header>
				<ClayList.Item flex>
					<ClayList.ItemField>{'Item 3'}</ClayList.ItemField>

					<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>
				</ClayList.Item>
			</ClayList>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
