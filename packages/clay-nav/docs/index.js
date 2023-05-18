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
			active={6}
			defaultExpandedKeys={new Set([5])}
			items={[
				{
					id: 1,
					items: [
						{
							id: 2,
							href: '#nested1',
							label: 'Nested1',
						},
					],
					label: 'Home',
				},
				{
					id: 3,
					href: '#2',
					label: 'About',
				},
				{
					id: 4,
					href: '#3',
					label: 'Contact',
				},
				{
					id: 5,
					items: [
						{
							id: 6,
							href: '#5',
							label: 'Five',
						},
						{
							id: 7,
							href: '#6',
							label: 'Six',
						},
					],
					label: 'Projects',
				},
				{
					id: 8,
					href: '#7',
					label: 'Seven',
				},
			]}
			large={false}
			spritemap={spritemap}
		>
			{(item) => (
				<ClayVerticalNav.Item
					href={item.href}
					items={item.items}
					key={item.id}
				>
					{item.label}
				</ClayVerticalNav.Item>
			)}
		</ClayVerticalNav>
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
