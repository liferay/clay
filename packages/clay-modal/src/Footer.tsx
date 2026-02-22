/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IFooterProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Sets the elements that are positioned `first following
	 * the LTR direction on the footer.
	 */
	first?: React.ReactElement;

	/**
	 * Sets the elements that are positioned `last` following
	 * the LTR direction on the footer.
	 */
	last?: React.ReactElement;

	/**
	 * Sets the elements that are positioned in the middle
	 * of the footer.
	 */
	middle?: React.ReactElement;
}

function Footer({className, first, last, middle, ...otherProps}: IFooterProps) {
	return (
		<div className={classNames('modal-footer', className)} {...otherProps}>
			{first ? <div className="modal-item-first">{first}</div> : null}

			{middle ? <div className="modal-item">{middle}</div> : null}

			{last ? <div className="modal-item-last">{last}</div> : null}
		</div>
	);
}

export default Footer;
