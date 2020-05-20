/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Element or component to render for container
	 */
	containerElement?:
		| string
		| React.JSXElementConstructor<{
				className: string;
				[key: string]: any;
		  }>;
}

const SheetHeader: React.FunctionComponent<IContainerProps> = ({
	children,
	className,
	containerElement: ContainerElement = 'div',
	...otherProps
}: IContainerProps) => {
	return (
		<ContainerElement
			{...otherProps}
			className={classNames(className, 'sheet-header')}
		>
			{children}
		</ContainerElement>
	);
};

SheetHeader.displayName = 'ClaySheetHeader';

const SheetFooter: React.FunctionComponent<IContainerProps> = ({
	children,
	className,
	containerElement: ContainerElement = 'div',
	...otherProps
}: IContainerProps) => {
	return (
		<ContainerElement
			{...otherProps}
			className={classNames(className, 'sheet-footer')}
		>
			{children}
		</ContainerElement>
	);
};

SheetFooter.displayName = 'ClaySheetFooter';

const SheetSection: React.FunctionComponent<IContainerProps> = ({
	children,
	className,
	containerElement: ContainerElement = 'div',
	...otherProps
}: IContainerProps) => {
	return (
		<ContainerElement
			{...otherProps}
			className={classNames(className, 'sheet-section')}
		>
			{children}
		</ContainerElement>
	);
};

SheetSection.displayName = 'ClaySheetSection';

interface IProps extends IContainerProps {
	/**
	 * Setting this to sets a max-width on the sheet
	 */
	size?: 'lg';
}

const Sheet: React.FunctionComponent<IProps> = ({
	children,
	className,
	containerElement: ContainerElement = 'div',
	size,
	...otherProps
}: IProps) => {
	return (
		<ContainerElement
			{...otherProps}
			className={classNames(className, 'sheet', {
				[`sheet-${size}`]: size,
			})}
		>
			{children}
		</ContainerElement>
	);
};

Sheet.displayName = 'ClaySheet';

export {Sheet, SheetFooter, SheetHeader, SheetSection};
