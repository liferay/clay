/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

interface IBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Url to place an iframe in the body of the modal.
	 */
	url?: string;
}

const ClayModalBody: React.FunctionComponent<IBodyProps> = ({
	children,
	url,
}: IBodyProps) => (
	<div
		className={classNames('modal-body', {
			'modal-body-iframe': url,
		})}
	>
		{url ? <iframe src={url} title={url} /> : children}
	</div>
);

export default ClayModalBody;
