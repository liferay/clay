/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayBreadcrumb from '@clayui/breadcrumb';
import React from 'react';

const breadcrumbImportsCode = `import ClayBreadcrumb from '@clayui/breadcrumb';
`;

const BreadcrumbCode = `const Component = () => {
	return (
		<ClayBreadcrumb
			items={[
				{
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
					active: true,
					href: '#5',
					label: 'Five',
				}
			]}
			spritemap={spritemap}
		/>
	);
}

render(<Component />);`;

const Breadcrumb = () => {
	const scope = {ClayBreadcrumb};
	const code = BreadcrumbCode;

	return <Editor code={code} imports={breadcrumbImportsCode} scope={scope} />;
};

export {Breadcrumb};
