/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React, {FunctionComponent, HtmlHTMLAttributes} from 'react';

interface Props extends HtmlHTMLAttributes<SVGAElement> {
	spritemap: string;
	symbol: string;
}

const Icon: FunctionComponent<Props> = ({spritemap, symbol}) => (
	<svg
		className={classnames('lexicon-icon', {
			[`lexicon-icon-${symbol}`]: symbol,
		})}
		role="presentation"
	>
		<use xlinkHref={`${spritemap}#${symbol}`} />
	</svg>
);

export default Icon;
