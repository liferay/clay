/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

import Context from './Context';

type BackgroundImageAspectRatioType = 'contain' | 'cover' | 'center';

type ContainerAspectRatioType = '1/1' | '3/2' | '4/3' | '8/5' | '16/9';

interface ICardAspectRatioProps
	extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
	/**
	 * Aspect ratio to be applied on the background image of the card.
	 */
	backgroundImageAspectRatio?: BackgroundImageAspectRatioType;

	/**
	 * Contrains an image for a given Aspect Ratio.
	 */
	containerAspectRatio?: ContainerAspectRatioType;
}

const ClayCardAspectRatio: React.FunctionComponent<ICardAspectRatioProps> = ({
	backgroundImageAspectRatio,
	children,
	className,
	containerAspectRatio,
}: ICardAspectRatioProps) => {
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
				[`aspect-ratio-bg-${backgroundImageAspectRatio}`]: backgroundImageAspectRatio,
			})}
		>
			{children}
		</TagName>
	);
};

export default ClayCardAspectRatio;
