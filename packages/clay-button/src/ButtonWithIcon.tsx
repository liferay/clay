/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from './Button';
import ClayIcon from '@clayui/icon';
import React from 'react';

interface IProps extends React.ComponentProps<typeof ClayButton> {
	spritemap?: string;
	symbol: string;
}

const ClayButtonWithIcon: React.FunctionComponent<IProps> = ({
	spritemap,
	symbol,
	...otherProps
}) => (
	<ClayButton {...otherProps} monospaced>
		<ClayIcon spritemap={spritemap} symbol={symbol} />
	</ClayButton>
);

export default ClayButtonWithIcon;
