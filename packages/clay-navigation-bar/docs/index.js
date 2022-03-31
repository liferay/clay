/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import React, {useState} from 'react';

const navigationBarImportsCode = `import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import React, {useState} from 'react';`;

const NavigationBarCode = `const Component = () => {
	const [active, setActive] = useState('Item 1');

	return (
		<ClayNavigationBar triggerLabel={active} spritemap={spritemap}>
			<ClayNavigationBar.Item active={active === 'Item 1'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Item 1');
					}}
				>
					Item 1
				</ClayLink>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Item 2'}>
				<ClayButton
					onClick={() => setActive('Item 2')}
				>
					Item 2
				</ClayButton>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Item 3'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Item 3');
					}}
				>
					Item 3
				</ClayLink>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
	);
}

render(<Component />);`;

const NavigationBar = () => {
	const scope = {ClayButton, ClayLink, ClayNavigationBar, useState};

	const codeSnippets = [
		{
			imports: navigationBarImportsCode,
			name: 'React',
			value: NavigationBarCode,
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

const navigationBarWithStyledItemImportsCode = `import ClayNavigationBar from '@clayui/navigation-bar';`;

const NavigationBarWithStyledItemCode = `const Component = () => {

	const btnStyle = {
		padding: "5.5px 16px 5.5px 16px",
		borderColor: "var(--indigo)"
	};

	return (
		<ClayNavigationBar triggerLabel="Item 1" spritemap={spritemap}>
			<ClayNavigationBar.Item active>
					<button className="btn btn-unstyled" style={btnStyle} type="button">Item 1</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled" style={btnStyle} type="button">Item 2</button>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item>
					<button className="btn btn-unstyled" style={btnStyle} type="button">Item 3</button>
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

	return (
		<Editor
			code={NavigationBarWithStyledItemCode}
			imports={navigationBarWithStyledItemImportsCode}
			scope={scope}
		/>
	);
};

export {NavigationBar, NavigationBarWithStyledItem};
