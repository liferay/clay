/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import ClayLinkContext from './Context';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Renders the button as a block element.
	 */
	block?: boolean;

	/**
	 * Flag to indicate if link should be borderless.
	 */
	borderless?: boolean;

	/**
	 * Config for button props
	 */
	button?:
		| boolean
		| {
				block?: boolean;
				monospaced?: boolean;
				small?: boolean;
		  };

	/**
	 * Determines how the link is displayed.
	 */
	displayType?: 'primary' | 'secondary' | 'unstyled';

	/**
	 * Flag to indicate if link should be monospaced.
	 */
	monospaced?: boolean;

	/**
	 * Flag to indicate if link need have an outline.
	 */
	outline?: boolean;

	/**
	 * Indicates button should be a small variant.
	 */
	small?: boolean;
}

const ClayLink = React.forwardRef<HTMLAnchorElement, IProps>(
	(
		{
			block,
			borderless,
			button,
			children,
			className,
			displayType,
			monospaced,
			outline,
			rel,
			small,
			target,
			...otherProps
		}: IProps,
		ref
	) => {
		const TagOrComponent = React.useContext(ClayLinkContext);

		let classes;

		if (button) {
			button = button === true ? {} : button;

			classes = {
				btn: !!button,
				'btn-block': button.block || block,
				'btn-monospaced': button.monospaced || monospaced,
				'btn-outline-borderless': borderless,
				'btn-sm': button.small || small,
				[`btn-${displayType}`]: displayType && !outline && !borderless,
				[`btn-outline-${displayType}`]:
					displayType && (outline || borderless),
			};
		} else {
			classes = {
				'link-monospaced': monospaced,
				'link-outline': outline,
				'link-outline-borderless': borderless,
				[`link-${displayType}`]: displayType && !outline,
				[`link-outline-${displayType}`]: displayType && outline,
			};
		}

		if (target && !rel) {
			rel = 'noreferrer noopener';
		}

		return (
			<TagOrComponent
				className={classNames(className, classes)}
				ref={ref}
				rel={rel}
				target={target}
				{...otherProps}
			>
				{children}
			</TagOrComponent>
		);
	}
);

ClayLink.displayName = 'ClayLink';

export {ClayLinkContext};

export default ClayLink;
