/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {FunctionComponent} from 'react';

export interface FooterProps {
	first?: React.ReactElement;
	last?: React.ReactElement;
	middle?: React.ReactElement;
}

const Footer: FunctionComponent<FooterProps> = ({first, last, middle}) => (
	<div className="modal-footer">
		<div className="modal-item-first">{first && first}</div>
		<div className="modal-item">{middle && middle}</div>
		<div className="modal-item-last">{last && last}</div>
	</div>
);

export default Footer;
