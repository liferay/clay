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
                <Button displayType={null}>
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

export {VerticalBarExample};
