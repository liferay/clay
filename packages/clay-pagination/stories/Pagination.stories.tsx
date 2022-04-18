/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {number} from '@storybook/addon-knobs';
import React, {useState} from 'react';

import ClayPagination, {ClayPaginationWithBasicItems} from '../src';

export default {
	title: 'Design System/Components/Pagination',
};

export const Default = () => (
	<ClayPagination>
		<ClayPagination.Item>1</ClayPagination.Item>
		<ClayPagination.Ellipsis />
		<ClayPagination.Item>End</ClayPagination.Item>
	</ClayPagination>
);

export const WithLinks = (args: any) => (
	<ClayPaginationWithBasicItems
		activePage={args.activePage}
		ellipsisBuffer={args.ellipsisBuffer}
		hrefConstructor={(page) => `/#${page}`}
		totalPages={args.totalPages}
	/>
);

WithLinks.args = {
	activePage: 8,
	ellipsisBuffer: 2,
	totalPages: 25,
};

export const WithButtons = (args: any) => {
	const [active, setActive] = useState<number>(8);

	return (
		<ClayPaginationWithBasicItems
			activePage={active}
			ellipsisBuffer={args.ellipsisBuffer}
			onPageChange={(value) => setActive(value as number)}
			totalPages={args.totalPages}
		/>
	);
};

WithButtons.args = {
	ellipsisBuffer: 2,
	totalPages: 25,
};

export const Sizes = () => (
	<>
		<ClayPaginationWithBasicItems
			activePage={number('Active Page', 8)}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			hrefConstructor={(page) => `/#${page}`}
			size="sm"
			totalPages={25}
		/>
		<ClayPaginationWithBasicItems
			activePage={number('Active Page', 8)}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			hrefConstructor={(page) => `/#${page}`}
			totalPages={25}
		/>
		<ClayPaginationWithBasicItems
			activePage={number('Active Page', 8)}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			hrefConstructor={(page) => `/#${page}`}
			size="lg"
			totalPages={25}
		/>
	</>
);

export const DisabledPages = () => {
	const [active, setActive] = useState(8);

	return (
		<ClayPaginationWithBasicItems
			activePage={active}
			disabledPages={[4, 5]}
			ellipsisBuffer={2}
			onPageChange={(value) => setActive(value as number)}
			totalPages={5}
		/>
	);
};
