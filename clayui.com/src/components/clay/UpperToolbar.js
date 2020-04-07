/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayUpperToolbar from '@clayui/upper-toolbar';
import React from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const upperToolbarImportsCode = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import ClayUpperToolbar from '@clayui/upper-toolbar';
import React from 'react';`;

const UpperToolbarCode = `const Component = () => {
	return (
		<ClayUpperToolbar>
			<ClayUpperToolbar.Item className="text-left" expand>
				<label className="component-title">{'Foo Bar'}</label>

				<ClayIcon spritemap={spritemap} symbol="lock" />
			</ClayUpperToolbar.Item>

			<ClayUpperToolbar.Input placeholder="Search..." />

			<ClayUpperToolbar.Item>
				<ClayButton.Group>
					<ClayButtonWithIcon
						displayType="secondary"
						onClick={() => {}}
						small
						spritemap={spritemap}
						symbol="angle-left"
					/>

					<ClayButtonWithIcon
						displayType="secondary"
						onClick={() => {}}
						small
						spritemap={spritemap}
						symbol="angle-right"
					/>
				</ClayButton.Group>
			</ClayUpperToolbar.Item>

			<ClayUpperToolbar.Item>
				<ClayButton displayType="secondary" onClick={() => {}}>
					{'Delete'}
				</ClayButton>

				<ClayButton className="inline-item-after" onClick={() => {}}>
					{'Edit'}
				</ClayButton>
			</ClayUpperToolbar.Item>

			<ClayUpperToolbar.Item>
				<ClayDropDownWithItems
					items={[
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
						{disabled: true, href: '#three', label: 'three'},
						{href: '#four', label: 'four'},
					]}
					spritemap={spritemap}
					trigger={
						<ClayButtonWithIcon
							displayType="unstyled"
							small
							spritemap={spritemap}
							symbol="ellipsis-v"
						/>
					}
				/>
			</ClayUpperToolbar.Item>
		</ClayUpperToolbar>
	)
};

render(<Component />);`;

export const UpperToolbarExample = () => {
	const scope = {
		ClayButton,
		ClayButtonWithIcon,
		ClayDropDownWithItems,
		ClayIcon,
		ClayUpperToolbar,
		spritemap,
	};

	return (
		<Editor
			code={UpperToolbarCode}
			imports={upperToolbarImportsCode}
			scope={scope}
		/>
	);
};
