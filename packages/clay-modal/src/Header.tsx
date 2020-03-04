/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

import Context, {IContext} from './Context';

export const ItemGroup: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div className={classNames('modal-item-group', className)} {...otherProps}>
		{children}
	</div>
);

export const Item: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement> & {
		/**
		 * Flag for indicating if item should autofitting the width
		 */
		shrink?: boolean;
	}
> = ({children, className, shrink, ...otherProps}) => (
	<div
		className={classNames('modal-item', className, {
			'modal-item-shrink': shrink,
		})}
		{...otherProps}
	>
		{children}
	</div>
);

export const TitleSection: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div
		className={classNames('modal-title-section', className)}
		{...otherProps}
	>
		{children}
	</div>
);

export const Title: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div className={classNames('modal-title', className)} {...otherProps}>
		{children}
	</div>
);

export const TitleIndicator: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div
		className={classNames('modal-title-indicator', className)}
		{...otherProps}
	>
		{children}
	</div>
);

export const SubtitleSection: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div
		className={classNames('modal-subtitle-section', className)}
		{...otherProps}
	>
		{children}
	</div>
);

export const Subtitle: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div className={classNames('modal-subtitle', className)} {...otherProps}>
		{children}
	</div>
);

const ICON_MAP = {
	danger: 'exclamation-full',
	info: 'info-circle',
	success: 'check-circle-full',
	warning: 'warning-full',
};

const HighLevel: React.FunctionComponent<IContext> = ({
	children,
	onClose,
	spritemap,
	status,
}) => (
	<>
		<Title>
			{status && (
				<TitleIndicator>
					<ClayIcon spritemap={spritemap} symbol={ICON_MAP[status]} />
				</TitleIndicator>
			)}
			{children}
		</Title>

		<ClayButton
			aria-label="close"
			className="close"
			displayType="unstyled"
			onClick={onClose}
		>
			<ClayIcon spritemap={spritemap} symbol="times" />
		</ClayButton>
	</>
);

const ClayModalHeader: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => (
	<div className={classNames('modal-header', className)} {...otherProps}>
		{children}
	</div>
);

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag for indicating if you want to use the Header its children being the title.
	 * Set to `false` if you want to use this as a low-level component.
	 */
	withTitle?: boolean;
}

const ClayModalHeaderHybrid: React.FunctionComponent<IHeaderProps> = ({
	children,
	withTitle = true,
	...otherProps
}: IHeaderProps) => {
	const {onClose, spritemap, status} = React.useContext(Context);

	return (
		<ClayModalHeader {...otherProps}>
			{withTitle && (
				<HighLevel
					onClose={onClose}
					spritemap={spritemap}
					status={status}
				>
					{children}
				</HighLevel>
			)}

			{!withTitle && children}
		</ClayModalHeader>
	);
};

export default ClayModalHeaderHybrid;
