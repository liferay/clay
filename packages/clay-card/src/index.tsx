/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import React from 'react';
import {AspectRatio} from './AspectRatio';
import {Body} from './Body';
import {Description} from './Description';
import {Detail} from './Detail';
import {Group} from './Group';

type CardDisplayType = 'file' | 'image' | 'user';

export interface ICardProps {
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

interface IProps
	extends ICardProps,
		React.BaseHTMLAttributes<HTMLAnchorElement | HTMLDivElement> {}

const ClayCard: React.FunctionComponent<IProps> & {
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
	const Content: React.FunctionComponent<IProps> = ({children}) => (
		<Context.Provider value={{displayType, horizontal, interactive}}>
			{children}
		</Context.Provider>
	);

	const isCardType = {
		file: displayType === 'file',
		image: displayType === 'image',
		user: displayType === 'user',
	};

	const TagHeaderName = interactive ? 'a' : 'div';

	const TagName = interactive ? 'span' : 'div';

	return (
		<TagHeaderName
			{...otherProps}
			className={classNames(className, {
				card: !selectable,
				'card-interactive card-interactive-primary card-type-template':
					(horizontal && interactive) || interactive,
				'card-type-asset':
					!horizontal && !interactive && !(horizontal && interactive),
				'card-type-directory form-check form-check-card form-check-middle-left':
					selectable && horizontal,
				'file-card': isCardType.file,
				'form-check form-check-card form-check-top-left':
					(selectable && isCardType.file) ||
					isCardType.image ||
					isCardType.user,
				'image-card': isCardType.image,
				'template-card': interactive && !horizontal,
				'template-card-horizontal': horizontal && interactive,
				'user-card': isCardType.user,
			})}
		>
			{(selectable && !horizontal) ||
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
