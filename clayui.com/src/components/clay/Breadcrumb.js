/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayBreadcrumb from '@clayui/breadcrumb';
import React from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const breadcrumbImportsCode = `import ClayBreadcrumb from '@clayui/breadcrumb';
import React from 'react';`;

const BreadcrumbCode = `const Component = () => {
	return (
		<ClayBreadcrumb
			ellipsisBuffer={1}
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
				}
			]}
			spritemap={spritemap}
		/>
	);
}

render(<Component />);`;

const Breadcrumbs = () => {
	const scope = {ClayBreadcrumb, spritemap};
	const code = BreadcrumbCode;

	return <Editor code={code} imports={breadcrumbImportsCode} scope={scope} />;
};

export {Breadcrumbs};
