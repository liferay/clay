/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from './Editor';
import React from 'react';
import {ClayVerticalNav} from '@clayui/navigation';

const spritemap = '/images/icons/icons.svg';

const VerticalNavigationCode = `const Component = () => {
	return (
		<ClayVerticalNav
            activeLabel="Five"
            items={[
            {
                initialExpanded: true,
                items: [
                {
                    href: '#nested1',
                    label: 'Nested1',
                },
                ],
                label: 'Home',
            },
            {
                href: '#2',
                label: 'About',
            },
            {
                href: '#3',
                label: 'Contact',
            },
            {
                items: [
                {
                    active: true,
                    href: '#5',
                    label: 'Five',
                },
                {
                    href: '#6',
                    label: 'Six',
                },
                ],
                label: 'Projects',
            },
            {
                href: '#7',
                label: 'Seven',
            },
        ]}
        large={false}
        spritemap={spritemap}
      />
	);
}

render(<Component />);`;

const VerticalNavigation = () => {
	const scope = {ClayVerticalNav, spritemap};
	const code = VerticalNavigationCode;

	return <Editor code={code} scope={scope} />;
};

export {VerticalNavigation};
