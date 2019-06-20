/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '@clayui/alert';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

const AlertCode = `const Component = () => {
	return (
		<>
			<ClayAlert displayType="info" spritemap={spritemap} title="Info">
				This is a default alert
			</ClayAlert>

			<ClayAlert displayType="warning" spritemap={spritemap} title="Warning" variant="stripe">
                This is a stripe alert
            </ClayAlert>
		</>
	);
}

render(<Component />);`;

export const Alert = () => {
	const scope = {ClayAlert, spritemap, useState};
	const code = AlertCode;

	return <Editor code={code} scope={scope} />;
};
