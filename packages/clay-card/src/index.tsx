/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import Context from './Context';
import {CardDisplayType} from './types';

import {AspectRatio} from './AspectRatio';
import {Body, CardBodyProps} from './Body';
import {Description} from './Description';
import {Detail} from './Detail';
import {Group} from './Group';

export interface CardProps {
	displayType?: CardDisplayType;

	/**
	 * This property, when enabled, is used to apply horizontal styles into cards.
	 */
	horizontal?: boolean;

	/**
	 * This property, when enabled, is used to apply interactive styles into cards.
	 */
	interactive?: boolean;

	/**
	 * Flag that indicates if the card can be selectable.
	 */
	selectable?: boolean;
}

interface Props
	extends CardProps,
		React.BaseHTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
	children:
		| React.ReactElement<CardBodyProps>[]
		| React.ReactElement<CardBodyProps>;
}

const ClayCard: React.FunctionComponent<Props> & {
	AspectRatio: typeof AspectRatio;
	Body: typeof Body;
	Detail: typeof Detail;
	Description: typeof Description;
	Group: typeof Group;
} = ({
	children,
	className,
	displayType,
	horizontal,
	interactive,
	selectable = false,
	...otherProps
}) => {
	const Content: React.FunctionComponent<Props> = ({children}) => (
		<Context.Provider value={{displayType, horizontal, interactive}}>
			{children}
		</Context.Provider>
	);

	const isCardType = {
		file: displayType === 'file',
		horizontal,
		image: displayType === 'image',
		interactive,
		user: displayType === 'user',
	};

	const TagHeaderName =
		isCardType.interactive ||
		(isCardType.horizontal && isCardType.interactive)
			? 'a'
			: 'div';

	const TagName =
		isCardType.interactive ||
		(isCardType.horizontal && isCardType.interactive)
			? 'span'
			: 'div';

	return (
		<TagHeaderName
			{...otherProps}
			className={classNames(className, {
				card: !selectable,
				'card-interactive card-interactive-primary card-type-template':
					(isCardType.horizontal && isCardType.interactive) ||
					isCardType.interactive,
				'card-type-asset':
					!isCardType.horizontal &&
					!isCardType.interactive &&
					!(isCardType.horizontal && isCardType.interactive),
				'card-type-directory form-check form-check-card form-check-middle-left':
					selectable && isCardType.horizontal,
				'file-card': isCardType.file,
				'form-check form-check-card form-check-top-left':
					(selectable && isCardType.file) ||
					isCardType.image ||
					isCardType.user,
				'image-card': isCardType.image,
				'template-card':
					isCardType.interactive && !isCardType.horizontal,
				'template-card-horizontal':
					isCardType.horizontal && isCardType.interactive,
				'user-card': isCardType.user,
			})}
		>
			{(selectable && !isCardType.horizontal) ||
			(selectable && isCardType.image) ||
			isCardType.user ? (
				<TagName className="card">
					<Content>{children}</Content>
				</TagName>
			) : (
				<Content>{children}</Content>
			)}
		</TagHeaderName>
	);
};

ClayCard.AspectRatio = AspectRatio;
ClayCard.Body = Body;
ClayCard.Detail = Detail;
ClayCard.Description = Description;
ClayCard.Group = Group;

export default ClayCard;
