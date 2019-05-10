/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate the 'light' variant
	 */
	light?: boolean;

	/**
	 * Flag to indicate the small size
	 */
	small?: boolean;
}

const ClayLoadingIndicator: React.FunctionComponent<Props> = ({
	className,
	light,
	small,
	...otherProps
}) => {
	return (
		<span
			aria-hidden="true"
			{...otherProps}
			className={classNames(className, `loading-animation`, {
				'loading-animation-light': light,
				'loading-animation-sm': small,
			})}
		/>
	);
};

export default ClayLoadingIndicator;
