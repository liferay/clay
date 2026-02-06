/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import React, {useState} from 'react';

import ClayNavigationBar from '../src/index';

export default {
	component: ClayNavigationBar,
	title: 'Design System/Components/NavigationBar',
};
export function NavigationBar(args: any) {
	const [triggerName, setTriggerName] = useState<string>(args.active);

	return (
		<ClayNavigationBar
			fluidSize={args.fluidSize}
			inverted={args.inverted}
			messages={{
				close: 'Close',
				open: 'Open',
				trigger: '{0} Menu, Current Page: {1}',
			}}
			triggerLabel={triggerName}
		>
			<ClayNavigationBar.Item active={args.active === 'Item 1'}>
				<ClayLink href="#">Item 1</ClayLink>
			</ClayNavigationBar.Item>

			<ClayNavigationBar.Item active={args.active === 'Item 2'}>
				<ClayButton onClick={() => setTriggerName('Item 2')}>
					Item 2
				</ClayButton>
			</ClayNavigationBar.Item>

			<ClayNavigationBar.Item active={args.active === 'Item 3'}>
				<ClayLink href="#">Item 3</ClayLink>
			</ClayNavigationBar.Item>

			<ClayNavigationBar.Item active={args.active === 'Item 4'}>
				<ClayButton onClick={() => setTriggerName('Item 4')}>
					Item 4
				</ClayButton>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
	);
}

NavigationBar.argTypes = {
	active: {
		control: {type: 'select'},
		options: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
	},
	fluidSize: {
		control: {type: 'select'},
		options: [undefined, false, 'sm', 'md', 'lg', 'xl'],
	},
};

NavigationBar.args = {
	active: 'Item 1',
	fluidSize: 'xl',
	inverted: false,
};
