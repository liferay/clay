/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayBadge from '@clayui/badge';
import React from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const badgeImportsCode = `import ClayBadge from '@clayui/badge';
import React from 'react';`;

const BadgeCode = `const Component = () => {
	return (
        <>
            <ClayBadge displayType="success" label="100" />
            <ClayBadge displayType="primary" label="100" />
            <ClayBadge displayType="secondary" label="100" />
            <ClayBadge displayType="info" label="100" />
            <ClayBadge displayType="warning" label="100" />
            <ClayBadge displayType="danger" label="100" />
        </>
	);
}

render(<Component />);`;

export const Badge = () => {
	const scope = {ClayBadge, spritemap};
	const code = BadgeCode;

	return <Editor code={code} imports={badgeImportsCode} scope={scope} />;
};
