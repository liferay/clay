/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Props to add to the iframe element
	 */
	iFrameProps?: React.HTMLAttributes<HTMLIFrameElement>;

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
	iFrameProps = {},
	scrollable,
	url,
}: IBodyProps) => (
	<div
		className={classNames('modal-body', {
			'inline-scroller': scrollable,
			'modal-body-iframe': url,
		})}
		tabIndex={scrollable ? 0 : undefined}
	>
		{url ? <iframe {...iFrameProps} src={url} title={url} /> : children}
	</div>
);

export default ClayModalBody;
