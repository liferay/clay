/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

const DropDownMenu: React.FunctionComponent<
	React.HTMLAttributes<HTMLUListElement> & {
		hasLeftSymbols?: boolean;
		hasRightSymbols?: boolean;
	}
> = ({children, className, hasLeftSymbols, hasRightSymbols, ...otherProps}) => {
	return (
		<ul
			{...otherProps}
			className={classNames('dropdown-menu list-unstyled show', {
				'dropdown-menu-indicator-end': hasRightSymbols,
				'dropdown-menu-indicator-start': hasLeftSymbols,
			})}
		>
			{children}
		</ul>
	);
};

export default DropDownMenu;
