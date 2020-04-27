/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayPagination, {ClayPaginationWithBasicItems} from '../src';

const PaginationWithState = (props: any) => {
	const [active, setActive] = React.useState(8);

	return (
		<ClayPaginationWithBasicItems
			{...props}
			activePage={active}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			onPageChange={setActive}
			spritemap={spritemap}
		/>
	);
};

storiesOf('Components|ClayPagination', module)
	.add('default', () => (
		<ClayPagination>
			<ClayPagination.Item>{'1'}</ClayPagination.Item>
			<ClayPagination.Ellipsis />
			<ClayPagination.Item>{'End'}</ClayPagination.Item>
		</ClayPagination>
	))
	.add('ClayPaginationWithBasicItems w/ links', () => {
		const totalPages = number('Number of pages', 25);

		return (
			<ClayPaginationWithBasicItems
				activePage={number('Active Page', 8)}
				ellipsisBuffer={number('Ellipsis Buffer', 2)}
				hrefConstructor={(page) => `/#${page}`}
				spritemap={spritemap}
				totalPages={totalPages}
			/>
		);
	})
	.add('ClayPaginationWithBasicItems w/ buttons', () => {
		const totalPages = number('Number of pages', 25);

		return <PaginationWithState totalPages={totalPages} />;
	})
	.add('ClayPaginationWithBasicItems w/ sizes', () => {
		const totalPages = number('Number of pages', 25);

		return (
			<>
				<ClayPaginationWithBasicItems
					activePage={number('Active Page', 8)}
					ellipsisBuffer={number('Ellipsis Buffer', 2)}
					hrefConstructor={(page) => `/#${page}`}
					size="sm"
					spritemap={spritemap}
					totalPages={totalPages}
				/>
				<ClayPaginationWithBasicItems
					activePage={number('Active Page', 8)}
					ellipsisBuffer={number('Ellipsis Buffer', 2)}
					hrefConstructor={(page) => `/#${page}`}
					spritemap={spritemap}
					totalPages={totalPages}
				/>
				<ClayPaginationWithBasicItems
					activePage={number('Active Page', 8)}
					ellipsisBuffer={number('Ellipsis Buffer', 2)}
					hrefConstructor={(page) => `/#${page}`}
					size="lg"
					spritemap={spritemap}
					totalPages={totalPages}
				/>
			</>
		);
	})
	.add('ClayPaginationWithBasicItems w/ disabled pages', () => {
		const totalPages = number('Number of pages', 5);

		return (
			<PaginationWithState
				disabledPages={[4, 5]}
				totalPages={totalPages}
			/>
		);
	});
