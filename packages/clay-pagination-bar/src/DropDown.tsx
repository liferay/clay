/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import classNames from 'classnames';
import * as React from 'react';

const ClayPaginationBarDropDown: React.FunctionComponent<
	React.ComponentProps<typeof ClayDropDownWithItems>
> = ({className, ...otherProps}) => {
	return (
		<ClayDropDownWithItems
			className={classNames(className, 'pagination-items-per-page')}
			{...otherProps}
		/>
	);
};

export default ClayPaginationBarDropDown;
