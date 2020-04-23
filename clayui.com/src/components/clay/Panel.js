/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '@clayui/label';
import ClayPanel from '@clayui/panel';
import React from 'react';

import Editor from '../Editor';

const panelImportsCode = `import ClayPanel from '@clayui/panel';
`;

const panelCode = `const Component = () => (
	<ClayPanel
		collapsable
		displayTitle="Title"
		displayType="secondary"
		showCollapseIcon={true}
		spritemap={spritemap}
	>
		<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
	</ClayPanel>
);

render(<Component />)`;

const Panel = () => {
	const scope = {ClayPanel};

	return <Editor code={panelCode} imports={panelImportsCode} scope={scope} />;
};

const panelWithCustomTitleImports = `import ClayPanel from '@clayui/panel';
import ClayLabel from '@clayui/label';
import React from 'react';`;

const panelWithCustomTitleCode = `const Component = () => (
	<ClayPanel
		collapsable
		displayTitle={
			<ClayPanel.Title>
				<h3>{'Title'}</h3>
				<span>{'If field '}</span>
				<ClayLabel displayType="success">{'Country'}</ClayLabel>
				<ClayLabel>{'Is Equal To'}</ClayLabel>
				<span>{'value '}</span>
				<ClayLabel displayType="info">{'Brazil'}</ClayLabel>
				<span>{'enable '}</span>
				<ClayLabel displayType="success">{'State'}</ClayLabel>
			</ClayPanel.Title>
		}
		displayType="secondary"
		showCollapseIcon={true}
		spritemap={spritemap}
	>
		<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
	</ClayPanel>
);

render(<Component />)`;

const PanelWithCustomTitle = () => {
	const scope = {ClayLabel, ClayPanel};

	return (
		<Editor
			code={panelWithCustomTitleCode}
			imports={panelWithCustomTitleImports}
			scope={scope}
		/>
	);
};

export {Panel, PanelWithCustomTitle};
