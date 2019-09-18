/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from './Editor';
import React from 'react';
import {ClayBreadcrumbNav} from '@clayui/navigation';

const spritemap = '/images/icons/icons.svg';

const BreadcrumbCode = `const Component = () => {
	return (
		<ClayBreadcrumbNav
			ellipsisBuffer={3}
			items={[
				{
					active: true,
					href: '#1',
					label: 'Home',
				},
				{
					href: '#2',
					label: 'About',
				},
				{
					href: '#3',
					label: 'Contact',
				},
				{
					href: '#4',
					label: 'Projects',
				},
				{
					href: '#5',
					label: 'Five',
				},
				{
					href: '#6',
					label: 'Six',
				},
				{
					href: '#7',
					label: 'Seven',
				},
				{
					href: '#8',
					label: 'Eight',
				},
				{
					href: '#9',
					label: 'Nine',
				},
				{
					href: '#10',
					label: 'Ten',
				},
				{
					href: '#11',
					label: 'Eleven',
				},
			]}
			spritemap={spritemap}
		/>
	);
}

render(<Component />);`;

const Breadcrumbs = () => {
	const scope = {ClayBreadcrumbNav, spritemap};
	const code = BreadcrumbCode;

	return <Editor code={code} scope={scope} />;
};

export {Breadcrumbs};
