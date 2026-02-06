/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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

function Body({
	children,
	className,
	iFrameProps = {},
	scrollable,
	url,
	...otherProps
}: IBodyProps) {
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
			className={classNames('modal-body', className, {
				'inline-scroller': scrollable,
				'modal-body-iframe': url,
			})}
			ref={elementRef}
			tabIndex={scrollable ? -1 : undefined}
			{...otherProps}
		>
			{url ? <iframe {...iFrameProps} src={url} title={url} /> : children}
		</div>
	);
}

export default Body;
