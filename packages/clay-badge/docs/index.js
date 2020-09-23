/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayBadge from '@clayui/badge';
import React from 'react';

const badgeImportsCode = `import ClayBadge from '@clayui/badge';`;

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

const badgeJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const BadgeJSPCode = `<clay:badge
    displayType="success"
    label="100" 
/>

<clay:badge
    displayType="primary"
    label="100" 
/>

<clay:badge
    displayType="secondary"
    label="100" 
/>

<clay:badge
    displayType="info"
    label="100" 
/>

<clay:badge
    displayType="warning"
    label="100" 
/>

<clay:badge
    displayType="danger"
    label="100" 
/>`;

export const Badge = () => {
	const scope = {ClayBadge};

	const codeSnippets = [
		{
			imports: badgeImportsCode,
			name: 'React',
			value: BadgeCode,
		},
		{
			disabled: true,
			imports: badgeJSPImportsCode,
			name: 'JSP',
			value: BadgeJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};
