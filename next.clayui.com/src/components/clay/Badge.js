/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayBadge from '@clayui/badge';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

const BadgeCode = `const Component = () => {
	return (
        <>
            <ClayBadge displayType="success" label="100" />
            <ClayBadge displayType="primary" label="100" />
            <ClayBadge displayType="secondary" label="100" />
            <ClayBadge displayType="info" label="100" />
            <ClayBadge displayType="warning" label="100" />
            <ClayBadge displayType="error" label="100" />
        </>
	);
}

render(<Component />);`;

export const Badge = () => {
	const scope = {ClayBadge, spritemap};
	const code = BadgeCode;

	return <Editor code={code} scope={scope} />;
};
