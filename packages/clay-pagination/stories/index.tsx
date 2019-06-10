/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import 'clay-css/lib/css/atlas.css';
import ClayPagination from '../src';
import React, {useState} from 'react';
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const PaginationWithState = (props: any) => {
	const [active, setActive] = useState(8);

	return (
		<ClayPagination
			{...props}
			activePage={active}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			onPageChange={setActive}
			spritemap={spritemap}
		/>
	);
};

storiesOf('ClayPagination', module)
	.add('links', () => {
		const totalPages = number('Number of pages', 25);

		return (
			<ClayPagination
				activePage={number('Active Page', 8)}
				ellipsisBuffer={number('Ellipsis Buffer', 2)}
				hrefConstructor={page => `/#${page}`}
				spritemap={spritemap}
				totalPages={totalPages}
			/>
		);
	})
	.add('buttons', () => {
		const totalPages = number('Number of pages', 25);

		return <PaginationWithState totalPages={totalPages} />;
	})
	.add('w/ disabled pages', () => {
		const totalPages = number('Number of pages', 5);

		return (
			<PaginationWithState
				disabledPages={[4, 5]}
				totalPages={totalPages}
			/>
		);
	});
