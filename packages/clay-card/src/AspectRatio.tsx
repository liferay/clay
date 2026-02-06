/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import Context from './Context';

type ContainerAspectRatioType = '1/1' | '3/2' | '4/3' | '8/5' | '16/9';

type Props = {

	/**
	 * AspectRatio content.
	 */
	children: React.ReactNode;

	/**
	 * Defines a CSS class for the element.
	 */
	className?: string;

	/**
	 * Contrains an image for a given Aspect Ratio.
	 */
	containerAspectRatio?: ContainerAspectRatioType;
};

function AspectRatio({children, className, containerAspectRatio}: Props) {
	const {interactive} = React.useContext(Context);
	const TagName = interactive ? 'span' : 'div';

	return (
		<TagName
			className={classNames(className, 'aspect-ratio', {
				[`aspect-ratio-${
					containerAspectRatio
						? containerAspectRatio.replace('/', '-to-')
						: null
				}`]: containerAspectRatio,
			})}
		>
			{children}
		</TagName>
	);
}

export default AspectRatio;
