/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {number} from '@storybook/addon-knobs';
import React from 'react';

import ClayPagination, {ClayPaginationWithBasicItems} from '../src';

export default {
	title: 'Design System/Components/Pagination',
};

export const Default = () => (
	<ClayPagination>
		<ClayPagination.Item>1</ClayPagination.Item>
		<ClayPagination.Ellipsis aria-label="More" title="More" />
		<ClayPagination.Item aria-label="Go to the end">
			End
		</ClayPagination.Item>
	</ClayPagination>
);

export const WithLinks = (args: any) => (
	<ClayPaginationWithBasicItems
		activePage={args.activePage}
		ellipsisBuffer={args.ellipsisBuffer}
		ellipsisProps={{
			'aria-label': 'More {0} through {1}',
			title: 'More {0} through {1}',
		}}
		hrefConstructor={(page) => `#${page}`}
		totalPages={args.totalPages}
	/>
);

WithLinks.args = {
	activePage: 8,
	ellipsisBuffer: 2,
	totalPages: 25,
};

export const NoHref = (args: any) => (
	<ClayPaginationWithBasicItems
		defaultActive={8}
		ellipsisBuffer={args.ellipsisBuffer}
		totalPages={args.totalPages}
	/>
);

NoHref.args = {
	ellipsisBuffer: 2,
	totalPages: 25,
};

export const Sizes = () => (
	<>
		<ClayPaginationWithBasicItems
			defaultActive={number('Active Page', 8)}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			ellipsisProps={{
				'aria-label': 'More {0} through {1}',
				title: 'More {0} through {1}',
			}}
			hrefConstructor={(page) => `#${page}`}
			size="sm"
			totalPages={25}
		/>
		<ClayPaginationWithBasicItems
			defaultActive={number('Active Page', 8)}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			ellipsisProps={{
				'aria-label': 'More {0} through {1}',
				title: 'More {0} through {1}',
			}}
			hrefConstructor={(page) => `#${page}`}
			totalPages={25}
		/>
		<ClayPaginationWithBasicItems
			defaultActive={number('Active Page', 8)}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			ellipsisProps={{
				'aria-label': 'More {0} through {1}',
				title: 'More {0} through {1}',
			}}
			hrefConstructor={(page) => `#${page}`}
			size="lg"
			totalPages={25}
		/>
	</>
);

export const DisabledPages = () => (
	<ClayPaginationWithBasicItems
		defaultActive={8}
		disabledPages={[4, 5]}
		ellipsisBuffer={2}
		ellipsisProps={{
			'aria-label': 'Show page links {0} to {1}',
			title: 'Show page links {0} to {1}',
		}}
		totalPages={5}
	/>
);
