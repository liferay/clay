/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const DropDownGroup: React.FunctionComponent<{
	header: string;
}> = ({children, header}) => {
	return (
		<>
			{header && (
				<li className="dropdown-subheader" role="presentation">
					{header}
				</li>
			)}

			{children}
		</>
	);
};

export default DropDownGroup;
