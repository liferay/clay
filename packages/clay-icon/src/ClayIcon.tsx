/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import warning from 'warning';

export const ClayIconSpriteContext = React.createContext('');

interface Props extends React.SVGAttributes<SVGSVGElement> {
	className?: string;
	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * The id of the icon in the spritemap.
	 */
	symbol: string;
}

const ClayIcon: React.FunctionComponent<Props> = ({
	className,
	spritemap,
	symbol,
	...otherProps
}) => {
	let spriteMapVal = React.useContext(ClayIconSpriteContext);

	if (spritemap) {
		spriteMapVal = spritemap;
	}

	warning(
		spriteMapVal,
		'ClayIcon requires a `spritemap` via prop or ClayIconSpriteContext'
	);

	return (
		<svg
			{...otherProps}
			className={classNames(
				`lexicon-icon lexicon-icon-${symbol}`,
				className
			)}
			role="presentation"
		>
			<use data-href={`${spriteMapVal}#${symbol}`} />
		</svg>
	);
};

export default ClayIcon;
