/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import AspectRatio from './AspectRatio';
import Body from './Body';
import Caption from './Caption';
import {ClayCardHorizontal} from './CardHorizontal';
import {ClayCardNavigation} from './CardNavigation';
import Context, {IContext} from './Context';
import Description from './Description';
import Group from './Group';
import Row from './Row';

export interface ICardProps extends IContext {
	/**
	 * Flag that indicates if `active` class is applied
	 */
	active?: boolean;

	/**
	 * Determines the style of the card
	 */
	displayType?: 'file' | 'image' | 'user';

	/**
	 * Flag that indicates if the card can be selectable.
	 */
	selectable?: boolean;
}

interface IProps
	extends ICardProps,
		React.BaseHTMLAttributes<
			HTMLAnchorElement | HTMLSpanElement | HTMLDivElement
		> {}

const ClayCard: React.FunctionComponent<IProps> = ({
	active,
	children,
	className,
	displayType,
	selectable = false,
	...otherProps
}) => {
	const isCardType = {
		file: displayType === 'file',
		image: displayType === 'image',
		user: displayType === 'user',
	};

	return (
		<Context.Provider value={{horizontal: false, interactive: false}}>
			<div
				className={classNames(
					className,
					{
						active,
						card: !selectable,
						'file-card': isCardType.file,
						'form-check-card form-check form-check-top-left':
							selectable,
						'image-card': isCardType.image,
						'user-card': isCardType.user,
					},
					'card-type-asset'
				)}
				{...otherProps}
			>
				{selectable ? <div className="card">{children}</div> : children}
			</div>
		</Context.Provider>
	);
};

const ClayCardHybrid: React.FunctionComponent<IProps> & {
	AspectRatio: typeof AspectRatio;
	Body: typeof Body;
	Caption: typeof Caption;
	Description: typeof Description;
	Group: typeof Group;
	Row: typeof Row;
} = ({children, horizontal, interactive, ...otherProps}: IProps) => {
	const Container = interactive
		? ClayCardNavigation
		: horizontal
		? ClayCardHorizontal
		: ClayCard;

	return (
		<Container horizontal={horizontal} {...otherProps}>
			{children}
		</Container>
	);
};

ClayCardHybrid.displayName = 'ClayCard';

ClayCardHybrid.AspectRatio = AspectRatio;
ClayCardHybrid.Body = Body;
ClayCardHybrid.Caption = Caption;
ClayCardHybrid.Description = Description;
ClayCardHybrid.Group = Group;
ClayCardHybrid.Row = Row;

export default ClayCardHybrid;
