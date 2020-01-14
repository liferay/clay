/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IFooterProps {
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

const ClayModalFooter: React.FunctionComponent<IFooterProps> = ({
	first,
	last,
	middle,
}: IFooterProps) => (
	<div className="modal-footer">
		<div className="modal-item-first">{first}</div>
		<div className="modal-item">{middle}</div>
		<div className="modal-item-last">{last}</div>
	</div>
);

export default ClayModalFooter;
