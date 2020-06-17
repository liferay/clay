/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {
	confirmLabel: string;
}

const Footer: React.FunctionComponent<IProps> = ({
	className,
	confirmLabel,
	...otherProps
}) => (
	<footer
		{...otherProps}
		className={classNames('bg-white p-3 rounded-bottom', className)}
	>
		<ClayButton block>{confirmLabel}</ClayButton>
	</footer>
);

Footer.displayName = 'ClayDropDownFooter';

export default Footer;
