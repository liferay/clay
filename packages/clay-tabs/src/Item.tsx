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
	 * This value is used to be the target of the link.
	 */
	href?: string;

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

const Item: React.FunctionComponent<IProps> = React.forwardRef(
	(
		{
			active = false,
			component = 'button',
			className,
			disabled = false,
			dropdown = false,
			forwardRef,
			itemElementProps = {},
			href,
			tabkey,
			onClick = () => {},
			spritemap,
			tabName,
			...otherProps
		}: IProps,
		IProps
	) => {
		const ElementTag = component;

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
				<ElementTag
					aria-controls={tabName.toLowerCase()}
					aria-disabled={!active}
					aria-selected={active}
					className={classNames('nav-link', {
						active,
						'btn btn-unstyled': component === 'button',
						disabled,
					})}
					data-testid={`${tabName.trim().toLowerCase()}TabItem`}
					href={href}
					onClick={() => onClick && onClick(tabkey)}
					ref={forwardRef}
					role="tab"
					tabIndex={disabled ? -1 : undefined}
					type={component === 'button' ? 'button' : undefined}
					{...itemElementProps}
				>
					{tabName}
					{dropdown && (
						<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
					)}
				</ElementTag>
			</li>
		);
	}
);

export default React.forwardRef((props: IProps, ref?) => (
	<Item {...props} forwardRef={ref} />
));
