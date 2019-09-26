/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPagination from '@clayui/pagination';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const PaginationEllipsisBufferCode = `const Component = () => {
	const initialActivePage = 1;
	const [active, setActive] = useState(initialActivePage);

	return (
		<ClayPagination
			activePage={active}
			ellipsisBuffer={1}
			onPageChange={setActive}
			spritemap={spritemap}
			totalPages={8}
	  	/>
	);
}
render(<Component />)`;

const PaginationEllipsisBuffer = () => {
	const scope = {ClayPagination, spritemap, useState};
	const code = PaginationEllipsisBufferCode;

	return <Editor code={code} scope={scope} />;
};

export {PaginationEllipsisBuffer};
