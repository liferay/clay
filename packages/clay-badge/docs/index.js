/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayBadge from '@clayui/badge';
import React from 'react';

const badgeImportsCode = `import ClayBadge from '@clayui/badge';
`;

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
	const scope = {ClayBadge};
	const code = BadgeCode;

	return <Editor code={code} imports={badgeImportsCode} scope={scope} />;
};
