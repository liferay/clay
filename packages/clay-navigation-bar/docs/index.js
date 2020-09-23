/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import React from 'react';

const navigationBarImportsCode = `import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';`;

const NavigationBarCode = `const Component = () => {

	return (
		<ClayNavigationBar triggerLabel="Item 1" spritemap={spritemap}>
			<ClayNavigationBar.Item active>
				<ClayLink className="nav-link" displayType="unstyled">
					Item 1
				</ClayLink>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
				<ClayLink className="nav-link" displayType="unstyled">
					Item 2
				</ClayLink>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
				<ClayLink className="nav-link" displayType="unstyled">
					Item 3
				</ClayLink>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
	);
}

render(<Component />);`;

const NavigationBar = () => {
	const scope = {ClayLink, ClayNavigationBar};

	const code = NavigationBarCode;

	return (
		<Editor code={code} imports={navigationBarImportsCode} scope={scope} />
	);
};

const navigationBarWithStyledItemImportsCode = `import ClayNavigationBar from '@clayui/navigation-bar';`;

const NavigationBarWithStyledItemCode = `const Component = () => {

	const btnStyle = {
		padding: "5.5px 16px 5.5px 16px",
		borderColor: "var(--indigo)"
	};

	return (
		<ClayNavigationBar triggerLabel="Item 1" spritemap={spritemap}>
			<ClayNavigationBar.Item active>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">Item 1</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">Item 2</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">Item 3</button>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
	);
}
	
render(<Component />);`;

const navigationBarJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const NavigationBarJSPCode = `<clay:navigation-bar
	navigationItems='<%=
		new JSPNavigationItemList(pageContext) {
			{
				add(
					navigationItem -> {
						navigationItem.setActive(true);
						navigationItem.setLabel("Item 1");
					}
				);
				add(
					navigationItem -> {
						navigationItem.setLabel("Item 2");
					}
				);
				add(
					navigationItem -> {
						navigationItem.setLabel("Item 3");
					}
				);
			}
		}
	%>'
/>`;

const NavigationBarWithStyledItem = () => {
	const scope = {ClayNavigationBar};

	const codeSnippets = [
		{
			imports: navigationBarWithStyledItemImportsCode,
			name: 'React',
			value: NavigationBarWithStyledItemCode,
		},
		{
			disabled: true,
			imports: navigationBarJSPImportsCode,
			name: 'JSP',
			value: NavigationBarJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

export {NavigationBar, NavigationBarWithStyledItem};
