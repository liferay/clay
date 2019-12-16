/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

import ClayLinkContext from './Context';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Flag to indicate if link should be borderless.
	 */
	borderless?: boolean;

	/**
	 * Determines how the link is displayed.
	 */
	displayType?: 'primary' | 'secondary';

	/**
	 * Flag to indicate if link should be monospaced.
	 */
	monospaced?: boolean;

	/**
	 * Flag to indicate if link need have an outline.
	 */
	outline?: boolean;
}

const ClayLink = React.forwardRef<HTMLAnchorElement, IProps>(
	(
		{
			borderless,
			children,
			className,
			displayType,
			monospaced,
			outline,
			...otherProps
		},
		ref
	) => {
		const TagOrComponent = React.useContext(ClayLinkContext);

		return (
			<TagOrComponent
				className={classNames(className, {
					'link-monospaced': monospaced,
					'link-outline': outline,
					'link-outline-borderless': borderless,
					[`link-${displayType}`]: displayType && !outline,
					[`link-outline-${displayType}`]: displayType && outline,
				})}
				ref={ref}
				{...otherProps}
			>
				{children}
			</TagOrComponent>
		);
	}
);

export {ClayLinkContext};

export default ClayLink;
