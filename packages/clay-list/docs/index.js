/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayList from '@clayui/list';
import React from 'react';

const listImportsCode = `import ClayList from '@clayui/list';
`;

const ListCode = `const Component = () => {
	
	return (
		<ClayList>
			<ClayList.Header>This is a header</ClayList.Header>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 1</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>

				<ClayList.ItemField expand>
					<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
					<ClayList.ItemText>Item Text</ClayList.ItemText>
				</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>
			</ClayList.Item>

			<ClayList.Item flex>
				<ClayList.ItemField>Item 2</ClayList.ItemField>
				<ClayList.ItemField expand>
					<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
					<ClayList.ItemText>Hover this item for action menu</ClayList.ItemText>
				</ClayList.ItemField>
				<ClayList.ItemField>
					<ClayList.QuickActionMenu>
						<ClayList.QuickActionMenu.Item
							aria-label="Delete"
							title="Delete"
							onClick={() => alert('Clicked the trash!')}
							spritemap={spritemap}
							symbol="trash"
						/>

						<ClayList.QuickActionMenu.Item
							aria-label="Settings"
							title="Settings"
							onClick={() => alert('Clicked the cog!')}
							spritemap={spritemap}
							symbol="cog"
						/>
					</ClayList.QuickActionMenu>
				</ClayList.ItemField>
			</ClayList.Item>

			<ClayList.Header>This is another header</ClayList.Header>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 3</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

const List = () => {
	const scope = {ClayList};
	const code = ListCode;

	return <Editor code={code} imports={listImportsCode} scope={scope} />;
};

const listQuickActionsMenuImportsCode = `import ClayList from '@clayui/list';
`;

const ListQuickActionsMenuCode = `const Component = () => {
	
	return (
		<ClayList showQuickActionsOnHover>
			<ClayList.Item flex>
				<ClayList.ItemField expand>
					<ClayList.ItemTitle>
						Item 1
					</ClayList.ItemTitle>
					<ClayList.ItemText>
						Hover this item for quick action menu
					</ClayList.ItemText>
				</ClayList.ItemField>
				<ClayList.ItemField>
					<ClayList.QuickActionMenu>
						<ClayList.QuickActionMenu.Item
							aria-label="Delete"
							title="Delete"
							onClick={() => alert('Clicked the trash!')}
							spritemap={spritemap}
							symbol="trash"
						/>
						<ClayList.QuickActionMenu.Item
							aria-label="Settings"
							title="Settings"
							onClick={() => alert('Clicked the cog!')}
							spritemap={spritemap}
							symbol="cog"
						/>
					</ClayList.QuickActionMenu>
				</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

const ListQuickActionsMenu = () => {
	const scope = {ClayList};
	const code = ListQuickActionsMenuCode;

	return (
		<Editor
			code={code}
			imports={listQuickActionsMenuImportsCode}
			scope={scope}
		/>
	);
};

export {List, ListQuickActionsMenu};
