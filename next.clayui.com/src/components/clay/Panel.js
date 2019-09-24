/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPanel from '@clayui/panel';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

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
	const scope = {ClayPanel, spritemap, useState};
	return <Editor code={panelCode} scope={scope} />;
};

export {Panel};
