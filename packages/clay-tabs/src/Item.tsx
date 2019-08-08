/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import React from 'react';
import {ElementType} from './types';

interface IProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
	/**
	 * Flag to indicate if the component is active or not.
	 */
	active?: boolean;

	/**
	 * Tab Item component to render. Can be an 'anchor' or a 'button'.
	 */
	component?: ElementType;

	/**
	 * Flag to indicate if the TabPane is disabled.
	 */
	disabled?: boolean;

	/**
	 * Flag to indicate if the Tab Item is a dropdown.
	 */
	dropdown?: boolean;

	forwardRef?: React.Ref<any>;

	/**
	 * Props to be added to the item element that can be an anchor or a button.
	 */
	itemElementProps?: React.HTMLAttributes<
		HTMLAnchorElement | HTMLButtonElement
	>;

	/**
	 * Registers the `tabkey` for the Tab Item.
	 */
	tabkey: number;

	/**
	 * Callback to be used when clicking to a Tab Item.
	 */
	onClick?: (val: number) => void;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * Name of the Tab
	 */
	tabName: string;
}

const TabHeader = React.forwardRef(
	(
		{
			active = false,
			component = 'button',
			disabled = false,
			dropdown = false,
			forwardRef,
			itemElementProps = {},
			tabkey,
			onClick,
			spritemap,
			tabName,
		}: IProps,
		IProps
	) => {
		if (component === 'anchor') {
			return (
				<>
					<a
						aria-controls={tabName.toLowerCase()}
						aria-disabled={!active}
						aria-selected={!active}
						className={classNames('nav-link', {
							active,
							disabled,
						})}
						href={`#${tabName.trim().toLowerCase()}`}
						id={`${tabName}Tab`}
						onClick={() => onClick && onClick(tabkey)}
						ref={forwardRef}
						role="tab"
						tabIndex={disabled ? -1 : undefined}
						{...itemElementProps}
					>
						{tabName}
						{dropdown && (
							<ClayIcon
								spritemap={spritemap}
								symbol="caret-bottom"
							/>
						)}
					</a>
				</>
			);
		}

		return (
			<>
				<button
					aria-controls={tabName.toLowerCase()}
					aria-disabled={!active}
					aria-selected={active}
					className={classNames('btn btn-unstyled nav-link', {
						active,
						disabled,
					})}
					id={`${tabName}Tab`}
					onClick={() => onClick && onClick(tabkey)}
					ref={forwardRef}
					role="tab"
					tabIndex={disabled ? -1 : undefined}
					type="button"
					{...itemElementProps}
				>
					{tabName}
					{dropdown && (
						<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
					)}
				</button>
			</>
		);
	}
);

const Item: React.FunctionComponent<IProps> = ({
	active = false,
	component,
	className,
	disabled,
	dropdown,
	forwardRef,
	itemElementProps,
	tabkey,
	onClick = () => {},
	spritemap,
	tabName,
	...otherProps
}: IProps) => {
	return (
		<li
			className={classNames(
				'nav-item',
				{
					dropdown,
				},
				className
			)}
			{...otherProps}
		>
			{tabName && (
				<TabHeader
					active={active}
					component={component}
					disabled={disabled}
					dropdown={dropdown}
					forwardRef={forwardRef}
					itemElementProps={itemElementProps}
					onClick={onClick}
					spritemap={spritemap}
					tabkey={tabkey}
					tabName={tabName}
				/>
			)}
		</li>
	);
};

export default React.forwardRef((props: IProps, ref?) => (
	<Item {...props} forwardRef={ref} />
));
