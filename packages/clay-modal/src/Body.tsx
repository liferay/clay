/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if body should be a fixed height with a scrollable overflow.
	 */
	scrollable?: boolean;

	/**
	 * Url to place an iframe in the body of the modal.
	 */
	url?: string;
}

const ClayModalBody: React.FunctionComponent<IBodyProps> = ({
	children,
	scrollable,
	url,
}: IBodyProps) => (
	<div
		className={classNames('modal-body', {
			'inline-scroller': scrollable,
			'modal-body-iframe': url,
		})}
	>
		{url ? <iframe src={url} title={url} /> : children}
	</div>
);

export default ClayModalBody;
