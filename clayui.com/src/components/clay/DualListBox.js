/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDualListBox} from '@clayui/form';
import React from 'react';

import Editor from '../Editor';

const dualListBoxImports = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
`;

const dualListBoxCode = `const Component = () => {
    const moveBoxesOptions = [
        [
            {
                label: 'Discord',
                value: 'discord',
            },
            {
                label: 'Evernote',
                value: 'evernote',
            },
            {
                label: 'Facebook',
                value: 'facebook',
            },
            {
                label: 'LinkedIn',
                value: 'linkedin',
            },
        ],
        [
            {
                label: 'Reddit',
                value: 'reddit',
            },
            {
                label: 'Slack',
                value: 'slack',
            },
            {
                label: 'Twitter',
                value: 'twitter',
            },
        ],
    ];

	const [items, setItems] = useState(moveBoxesOptions);
	const [leftSelected, setLeftSelected] = useState([]);
	const [rightSelected, setRightSelected] = useState([]);

	return (
		<ClayDualListBox
			items={items}
			left={{
				label: 'In Use',
				onSelectChange: setLeftSelected,
				selected: leftSelected,
			}}
			onItemsChange={setItems}
			right={{
				label: 'Available',
				onSelectChange: setRightSelected,
				selected: rightSelected,
			}}
			size={8}
			spritemap={spritemap}
		/>
	);
}

render(<Component />)`;

export const DualListBox = () => {
	const scope = {
		ClayDualListBox,
	};

	return (
		<Editor
			code={dualListBoxCode}
			imports={dualListBoxImports}
			scope={scope}
		/>
	);
};
