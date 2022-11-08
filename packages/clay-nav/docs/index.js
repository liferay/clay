/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayNav, {ClayVerticalNav} from '@clayui/nav';
import React from 'react';

const navigationImports = `import ClayNav from '@clayui/nav';`;

const navigationCode = `const Component = () => (
	<ClayNav>
		<ClayNav.Item>
			<ClayNav.Link active href="#">
				{'Active'}
			</ClayNav.Link>
		</ClayNav.Item>
		<ClayNav.Item>
			<ClayNav.Link href="#">{'Normal'}</ClayNav.Link>
		</ClayNav.Item>
		<ClayNav.Item>
			<ClayNav.Link disabled href="#">
				{'Disabled'}
			</ClayNav.Link>
		</ClayNav.Item>
	</ClayNav>
);

render(<Component />)`;

const Navigation = () => {
	const scope = {ClayNav};

	return (
		<Editor
			code={navigationCode}
			imports={navigationImports}
			scope={scope}
		/>
	);
};

const verticalNavigationImportsCode = `import {ClayVerticalNav} from '@clayui/nav';
`;

const VerticalNavigationCode = `const Component = () => {
	return (
		<ClayVerticalNav
			items={[
			{
				items: [
				{
					href: '#nested1',
					label: 'Nested1',
				},
				],
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
				initialExpanded: true,
				items: [
				{
					active: true,
					href: '#5',
					label: 'Five',
				},
				{
					href: '#6',
					label: 'Six',
				},
				],
				label: 'Projects',
			},
			{
				href: '#7',
				label: 'Seven',
			},
		]}
		large={false}
		spritemap={spritemap}
	  />
	);
}

render(<Component />);`;

const VerticalNavigation = () => {
	const scope = {ClayVerticalNav};

	return (
		<Editor
			code={VerticalNavigationCode}
			imports={verticalNavigationImportsCode}
			scope={scope}
		/>
	);
};

export {Navigation, VerticalNavigation};
