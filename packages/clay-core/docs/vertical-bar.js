/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Button, Provider, TreeView, VerticalBar} from '@clayui/core';
import Icon from '@clayui/icon';
import React from 'react';

const exampleImports = `import {Provider, TreeView} from '@clayui/core';
import Icon from '@clayui/icon';`;

const exampleCode = `const VerticalBarExample = () => {
	const items = [
		{
			icon: 'tag',
			title: 'Tag',
		},
		{
			divider: true,
			icon: 'message',
			title: 'Message',
		},
		{
			icon: 'effects',
			title: 'Effects',
		},
	];

	return (
		<div style={{height: '400px'}}>
			<Provider spritemap={spritemap}>
				<VerticalBar absolute defaultActive="Tag">
					<VerticalBar.Content
						items={items}
					>
						{(item) => (
							<VerticalBar.Panel key={item.title}>
								<div className="sidebar-header">
									<div className="component-title">{item.title}</div>
								</div>
							</VerticalBar.Panel>
						)}
					</VerticalBar.Content>

					<VerticalBar.Bar displayType="light" items={items}>
						{(item) => (
							<VerticalBar.Item divider={item.divider} key={item.title}>
								<Button aria-label={'Open ' + item.title} displayType={null}>
									<Icon symbol={item.icon} />
								</Button>
							</VerticalBar.Item>
						)}
					</VerticalBar.Bar>
				</VerticalBar>
			</Provider>
		</div>
	);
};

render(<VerticalBarExample />)`;

const VerticalBarExample = () => {
	const scope = {Button, Icon, Provider, TreeView, VerticalBar};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

const resizeImports = `import {Provider, TreeView} from '@clayui/core';
import Icon from '@clayui/icon';
import React, {useState} from 'react';`;

const resizeCode = `const VerticalBarResize = () => {
	const items = [
		{
			icon: 'tag',
			title: 'Tag',
		},
		{
			divider: true,
			icon: 'message',
			title: 'Message',
		},
		{
			icon: 'effects',
			title: 'Effects',
		},
	];

	const [width, setWidth] = useState(320);

	return (
		<div id="verticalBarResizeContainer1" style={{minHeight: '400px', paddingLeft: '52px'}}>
			And aged, cinnamon, redeye dripper, organic and mocha cinnamon qui macchiato. Whipped, cream single origin, coffee eu a brewed macchiato. Instant, whipped barista so ut siphon viennese medium aftertaste steamed.

			Cappuccino plunger pot macchiato coffee froth caramelization froth, so id rich cream pumpkin spice. Milk rich, a that cultivar shop saucer a caffeine. French press acerbic qui that cortado plunger pot beans bar  cappuccino.
			<Provider spritemap={spritemap}>
				<VerticalBar
					absolute
					onPanelWidthChange={(width) => {
						setWidth(width);

						document.getElementById('verticalBarResizeContainer1').style.paddingLeft = width + 52 + 'px';
					}}
					panelWidth={width}
					panelWidthMax={700}
					panelWidthMin={150}
					position="left"
					resize
				>
					<VerticalBar.Bar displayType="light" items={items}>
						{(item) => (
							<VerticalBar.Item divider={item.divider} key={item.title}>
								<Button aria-label={'Open ' + item.title} displayType={null}>
									<Icon symbol={item.icon} />
								</Button>
							</VerticalBar.Item>
						)}
					</VerticalBar.Bar>

					<VerticalBar.Content
						items={items}
					>
						{(item) => (
							<VerticalBar.Panel key={item.title}>
								<div className="sidebar-header">
									<div className="component-title">{item.title}</div>
								</div>
							</VerticalBar.Panel>
						)}
					</VerticalBar.Content>
				</VerticalBar>
			</Provider>
		</div>
	);
};

render(<VerticalBarResize />)`;

const VerticalBarResize = () => {
	const scope = {Button, Icon, Provider, TreeView, VerticalBar};

	return <Editor code={resizeCode} imports={resizeImports} scope={scope} />;
};

export {VerticalBarExample, VerticalBarResize};
