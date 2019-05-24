/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import Context from './Context';
import {CardDisplayType} from './types';

import {AspectRatio, CardAspectRatioType} from './AspectRatio';
import {Body, CardBodyProps, CardBodyType} from './Body';
import {CardDescriptionType, Description} from './Description';
import {CardDetailType, Detail} from './Detail';
import {CardGroupType, Group} from './Group';

export interface CardProps {
	displayType?: CardDisplayType;

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
	AspectRatio: CardAspectRatioType;
	Body: CardBodyType;
	Detail: CardDetailType;
	Description: CardDescriptionType;
	Group: CardGroupType;
} = ({
	children,
	className,
	displayType = 'horizontal',
	selectable = false,
	...otherProps
}) => {
	const Content: React.FunctionComponent<Props> = ({children}) => (
		<Context.Provider value={{displayType}}>
			{React.Children.map(
				children,
				(child: React.ReactElement<CardBodyProps>, index: number) => {
					return React.cloneElement(child, {
						...child.props,
						key: index,
					});
				}
			)}
		</Context.Provider>
	);

	const isCardType = {
		file: displayType === 'file',
		horizontal: displayType === 'horizontal',
		horizontalInteractive: displayType === 'horizontal interactive',
		image: displayType === 'image',
		interactive: displayType === 'interactive',
		user: displayType === 'user',
	};

	const TagHeaderName =
		isCardType.interactive || isCardType.horizontalInteractive
			? 'a'
			: 'div';

	const TagName =
		isCardType.interactive || isCardType.horizontalInteractive
			? 'span'
			: 'div';

	return (
		<TagHeaderName
			{...otherProps}
			className={classNames(className, {
				card: !selectable,
				'card-interactive card-interactive-primary card-type-template':
					isCardType.horizontalInteractive || isCardType.interactive,
				'card-type-asset':
					!isCardType.horizontal &&
					!isCardType.interactive &&
					!isCardType.horizontalInteractive,
				'card-type-directory form-check form-check-card form-check-middle-left':
					selectable && isCardType.horizontal,
				'file-card': isCardType.file,
				'form-check form-check-card form-check-top-left':
					(selectable && isCardType.file) ||
					isCardType.image ||
					isCardType.user,
				'image-card': isCardType.image,
				'template-card': isCardType.interactive,
				'template-card-horizontal': isCardType.horizontalInteractive,
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
