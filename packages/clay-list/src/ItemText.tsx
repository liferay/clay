/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {

	/**
	 * Flag to indicate if content should be styled as subtext.
	 */
	subtext?: boolean;
}
const ItemText = React.forwardRef<HTMLParagraphElement, IProps>(
	({children, className, subtext, ...otherProps}: IProps, ref) => (
		<p
			{...otherProps}
			className={classNames(className, {
				'list-group-subtext': subtext,
				'list-group-text': !subtext,
			})}
			ref={ref}
		>
			{children}
		</p>
	)
);

ItemText.displayName = 'ClayListItemText';

export default ItemText;
