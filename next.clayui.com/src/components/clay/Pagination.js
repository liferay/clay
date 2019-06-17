/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPagination from '@clayui/pagination';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

export const Pagination = () => {
	const scope = {ClayPagination, spritemap, useState};
	const code = `const Component = () => {
	const initialActivePage = 1;
	const [active, setActive] = useState(initialActivePage);

	return (
		<ClayPagination
			activePage={active}
			ellipsisBuffer={2}
			onPageChange={setActive}
			spritemap={spritemap}
			totalPages={8}
	  	/>
	);
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const PaginationWithLinks = () => {
	const scope = {ClayPagination, spritemap, useState};
	const code = `const Component = () => {
	const initialActivePage = 1;
	const [active, setActive] = useState(initialActivePage);

	return (
		<ClayPagination
			activePage={active}
			ellipsisBuffer={2}
			hrefConstructor={page => "/#" + page}
			onPageChange={setActive}
			spritemap={spritemap}
			totalPages={8}
	  	/>
	);
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const PaginationEllipsisBuffer = () => {
	const scope = {ClayPagination, spritemap, useState};
	const code = `const Component = () => {
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

	return <Editor code={code} scope={scope} />;
};

export const PaginationDisabledPages = () => {
	const scope = {ClayPagination, spritemap, useState};
	const code = `const Component = () => {
	const initialActivePage = 1;
	const [active, setActive] = useState(initialActivePage);

	return (
		<ClayPagination
			activePage={active}
			disabledPages={[2,3]}
			ellipsisBuffer={1}
			onPageChange={setActive}
			spritemap={spritemap}
			totalPages={8}
	  	/>
	);
}
 render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};
