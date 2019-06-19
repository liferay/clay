/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayList from '@clayui/list';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

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
					Hover this item for action menu
				</ClayList.ItemField>
				<ClayList.ItemField>
					<ClayList.QuickActionMenu>
						<ClayList.QuickActionMenu.Item
							onClick={() => alert('Clicked the trash!')}
							spritemap={spritemap}
							symbol="trash"
						/>

						<ClayList.QuickActionMenu.Item
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

export const List = () => {
	const scope = {ClayList, spritemap};
	const code = ListCode;

	return <Editor code={code} scope={scope} />;
};

const ListHeaderCode = `const Component = () => {
	
	return (
		<ClayList>
			<ClayList.Header>This is a header</ClayList.Header>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 1</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

export const ListHeader = () => {
	const scope = {ClayList};
	const code = ListHeaderCode;

	return <Editor code={code} scope={scope} />;
};

const ListItemCode = `const Component = () => {
	
	return (
		<ClayList>
			<ClayList.Item header>
				<ClayList.ItemField>Header Item</ClayList.ItemField>
			</ClayList.Item>
			<ClayList.Item>
				<ClayList.ItemField>Default Item</ClayList.ItemField>
			</ClayList.Item>
			<ClayList.Item active>
				<ClayList.ItemField>Active Item</ClayList.ItemField>
			</ClayList.Item>
			<ClayList.Item disabled>
				<ClayList.ItemField>Disabled Item</ClayList.ItemField>
			</ClayList.Item>
			<ClayList.Item header>
				<ClayList.ItemField>Header Item</ClayList.ItemField>
			</ClayList.Item>
			<ClayList.Item action>
				<ClayList.ItemField>Action Item</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

export const ListItem = () => {
	const scope = {ClayList};
	const code = ListItemCode;

	return <Editor code={code} scope={scope} />;
};

const ListItemFieldCode = `const Component = () => {
	
	return (
		<ClayList>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 1</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>

				<ClayList.ItemField expand>
					<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
					<ClayList.ItemText>Item Text</ClayList.ItemText>
				</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

export const ListItemField = () => {
	const scope = {ClayList};
	const code = ListItemFieldCode;

	return <Editor code={code} scope={scope} />;
};

const ListItemTextCode = `const Component = () => {
	
	return (
		<ClayList>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 1</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>

				<ClayList.ItemField expand>
					<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
					<ClayList.ItemText>Item Text</ClayList.ItemText>
					<ClayList.ItemText subtext>Subtitle</ClayList.ItemText>
				</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

export const ListItemText = () => {
	const scope = {ClayList};
	const code = ListItemTextCode;

	return <Editor code={code} scope={scope} />;
};

const ListItemTitleCode = `const Component = () => {
	
	return (
		<ClayList>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 1</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>

				<ClayList.ItemField expand>
					<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
					<ClayList.ItemText>Item Text</ClayList.ItemText>
					<ClayList.ItemText subtext>Subtitle</ClayList.ItemText>
				</ClayList.ItemField>

				<ClayList.ItemField>ItemField</ClayList.ItemField>
			</ClayList.Item>
		</ClayList>
	);
}

render(<Component />)`;

export const ListItemTitle = () => {
	const scope = {ClayList};
	const code = ListItemTitleCode;

	return <Editor code={code} scope={scope} />;
};

const ListQuickActionsMenuCode = `const Component = () => {
	
	return (
		<ClayList showQuickActionsOnHover>
			<ClayList.Item flex>
				<ClayList.ItemField>Item 1</ClayList.ItemField>
				<ClayList.ItemField expand>
					Hover this item for quick action menu
				</ClayList.ItemField>
				<ClayList.ItemField>
					<ClayList.QuickActionMenu>
						<ClayList.QuickActionMenu.Item
							onClick={() => alert('Clicked the trash!')}
							spritemap={spritemap}
							symbol="trash"
						/>
						<ClayList.QuickActionMenu.Item
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

export const ListQuickActionsMenu = () => {
	const scope = {ClayList, spritemap};
	const code = ListQuickActionsMenuCode;

	return <Editor code={code} scope={scope} />;
};
