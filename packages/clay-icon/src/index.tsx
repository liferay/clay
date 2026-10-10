/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';
import warning from 'warning';

const ClayIconSpriteContext = React.createContext('');

const ClayIconIllustrationSpriteContext = React.createContext('');

interface IProps extends React.SVGAttributes<SVGSVGElement> {
	className?: string;

	/**
	 * Flag to render the symbol as an illustration rather than a Lexicon glyph.
	 * It omits the `lexicon-icon lexicon-icon-*` classes, which force the 1em
	 * glyph sizing, so spritemaps drawn at their own size, like the
	 * illustrations in `empty_states.svg`, keep it. The spritemap falls back to
	 * `ClayIconIllustrationSpriteContext` instead of `ClayIconSpriteContext`.
	 */
	illustration?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * The id of the icon in the spritemap.
	 */
	symbol: string;
}

const Icon = React.forwardRef<SVGSVGElement, IProps>(
	(
		{
			className,
			illustration = false,
			spritemap,
			symbol,
			...otherProps
		}: IProps,
		ref
	) => {
		const glyphSpritemap = React.useContext(ClayIconSpriteContext);
		const illustrationSpritemap = React.useContext(
			ClayIconIllustrationSpriteContext
		);

		const spriteMapVal =
			spritemap ||
			(illustration ? illustrationSpritemap : glyphSpritemap);

		warning(
			spriteMapVal,
			illustration
				? 'ClayIcon requires a `spritemap` via prop or ClayIconIllustrationSpriteContext'
				: 'ClayIcon requires a `spritemap` via prop or ClayIconSpriteContext'
		);

		return (
			<svg
				{...otherProps}
				className={
					classNames(
						!illustration && `lexicon-icon lexicon-icon-${symbol}`,
						className
					) || undefined
				}
				key={symbol}
				ref={ref}
				role="presentation"
			>
				<use href={`${spriteMapVal}#${symbol}`} />
			</svg>
		);
	}
);

Icon.displayName = 'ClayIcon';

export default Icon;
export {ClayIconIllustrationSpriteContext, ClayIconSpriteContext};
