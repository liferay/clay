/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

const ClayImage: React.FunctionComponent<
	React.ImgHTMLAttributes<HTMLImageElement>
> = ({className, ...otherProps}) => (
	<img
		{...otherProps}
		className={classNames(className, {
			'img-fluid': !className,
		})}
	/>
);

export default ClayImage;
