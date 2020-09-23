/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useEffect, useRef} from 'react';

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
}: IBodyProps) => {
	const elementRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (
				elementRef.current &&
				(event.key === 'ArrowUp' || event.key === 'ArrowDown') &&
				!elementRef.current.contains(document.activeElement)
			) {
				if (event.defaultPrevented) {
					return;
				}

				elementRef.current.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [elementRef]);

	return (
		<div
			className={classNames('modal-body', {
				'inline-scroller': scrollable,
				'modal-body-iframe': url,
			})}
			ref={elementRef}
			tabIndex={scrollable ? -1 : undefined}
		>
			{url ? <iframe {...iFrameProps} src={url} title={url} /> : children}
		</div>
	);
};

export default ClayModalBody;
