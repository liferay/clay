/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import ClayPagination, {ClayPaginationWithBasicItems} from '../src';

export default {
	title: 'Design System/Components/Pagination',
};
export function Default() {
	return (
		<ClayPagination>
			<ClayPagination.Item>1</ClayPagination.Item>

			<ClayPagination.Ellipsis aria-label="More" title="More" />

			<ClayPagination.Item aria-label="Go to the end">
				End
			</ClayPagination.Item>
		</ClayPagination>
	);
}
export function WithLinks(args: any) {
	return (
		<ClayPaginationWithBasicItems
			defaultActive={args.activePage}
			ellipsisBuffer={args.ellipsisBuffer}
			ellipsisProps={{
				'aria-label': 'More {0} through {1}',
				'title': 'More {0} through {1}',
			}}
			hrefConstructor={(page) => `#${page}`}
			totalPages={args.totalPages}
		/>
	);
}

WithLinks.args = {
	activePage: 8,
	ellipsisBuffer: 2,
	totalPages: 25,
};
export function NoHref(args: any) {
	return (
		<ClayPaginationWithBasicItems
			defaultActive={8}
			ellipsisBuffer={args.ellipsisBuffer}
			totalPages={args.totalPages}
		/>
	);
}

NoHref.args = {
	ellipsisBuffer: 2,
	totalPages: 25,
};
export function DisabledPages() {
	return (
		<ClayPaginationWithBasicItems
			defaultActive={8}
			disabledPages={[4, 5]}
			ellipsisBuffer={2}
			ellipsisProps={{
				'aria-label': 'Show page links {0} to {1}',
				'title': 'Show page links {0} to {1}',
			}}
			totalPages={5}
		/>
	);
}
