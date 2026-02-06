/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

import Context, {IContext} from './Context';

export function ItemGroup({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames('modal-item-group', className)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export interface IItemProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Flag for indicating if item should autofitting the width
	 */
	shrink?: boolean;
}

export function Item({children, className, shrink, ...otherProps}: IItemProps) {
	return (
		<div
			className={classNames('modal-item', className, {
				'modal-item-shrink': shrink,
			})}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export function TitleSection({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames('modal-title-section', className)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export function Title({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	const {ariaLabelledby} = React.useContext(Context);

	return (
		<h1
			className={classNames('modal-title', className)}
			tabIndex={-1}
			{...otherProps}
			id={ariaLabelledby}
		>
			{children}
		</h1>
	);
}

export function TitleIndicator({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames('modal-title-indicator', className)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export function SubtitleSection({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames('modal-subtitle-section', className)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export function Subtitle({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames('modal-subtitle', className)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

const ICON_MAP = {
	danger: 'exclamation-full',
	info: 'info-circle',
	success: 'check-circle-full',
	warning: 'warning-full',
};

function HighLevel({
	children,
	closeButtonAriaLabel = 'Close',
	onClose,
	spritemap,
	status,
}: IContext & {
	children?: React.ReactNode;
	closeButtonAriaLabel?: string;
}) {
	return (
		<>
			<Title>
				{status && (
					<TitleIndicator>
						<ClayIcon
							spritemap={spritemap}
							symbol={ICON_MAP[status]}
						/>
					</TitleIndicator>
				)}

				{children}
			</Title>

			<ClayButton
				aria-label={closeButtonAriaLabel}
				className="close"
				displayType="unstyled"
				onClick={onClose}
			>
				<ClayIcon spritemap={spritemap} symbol="times" />
			</ClayButton>
		</>
	);
}

function ClayModalHeader({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={classNames('modal-header', className)} {...otherProps}>
			{children}
		</div>
	);
}

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Aria label for the modal close button.
	 */
	closeButtonAriaLabel?: string;

	/**
	 * Flag for indicating if you want to use the Header its children being the title.
	 * Set to `false` if you want to use this as a low-level component.
	 */
	withTitle?: boolean;
}

function Header({
	children,
	closeButtonAriaLabel,
	withTitle = true,
	...otherProps
}: IHeaderProps) {
	const {onClose, spritemap, status} = React.useContext(Context);

	return (
		<ClayModalHeader {...otherProps}>
			{withTitle && (
				<HighLevel
					closeButtonAriaLabel={closeButtonAriaLabel}
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
}

export default Header;
