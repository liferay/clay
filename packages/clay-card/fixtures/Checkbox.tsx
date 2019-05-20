/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCheckbox from '@clayui/checkbox';

import React from 'react';

const ClayCheckboxWithState = (props: any) => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={false}
			indeterminate={false}
			onChange={() => setValue(val => !val)}
		>
			{props.children}
		</ClayCheckbox>
	);
};

export default ClayCheckboxWithState;
