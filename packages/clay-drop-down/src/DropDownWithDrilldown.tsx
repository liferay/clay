/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import React from 'react';

import ClayDropDown from './DropDown';
import {ClayDropDownContext, findNested} from './DropDownWithItems';
import Header from './Header';
import Menu from './Menu';

type TType = 'checkbox' | 'group' | 'item' | 'radio' | 'radiogroup' | 'divider';

interface IItem {
	active?: boolean;
	checked?: boolean;
	disabled?: boolean;
	href?: string;
	icon?: string;
	childItems?: Array<IItem>;
	items?: Array<IItem>;
	label?: string;
	name?: string;
	onChange?: Function;
	onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	symbolLeft?: string;
	symbolRight?: string;
	type?: TType;
	value?: string;
}

interface IDropDownContentProps {
	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * List of items to display in drop down menu
	 */
	items: Array<IItem>;
}

export interface IProps extends IDropDownContentProps {
	/**
	 * Default position of menu element. Values come from `./Menu`.
	 */
	alignmentPosition?: React.ComponentProps<typeof Menu>['alignmentPosition'];

	/**
	 * Informational text that appears at the end or above the `footerContent` prop.
	 */
	caption?: string;

	className?: string;

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: React.ComponentProps<
		typeof ClayDropDown
	>['containerElement'];

	/**
	 * A label for the button in the Footer, use this instead of footerContent if you want a single Button
	 */
	footerBtnLabel?: string;

	/**
	 * Add an action button or any other element you want to be fixed position to the
	 * footer from the DropDown.
	 */
	footerContent?: React.ReactElement;

	/**
	 * Element that is used as the trigger which will activate the dropdown on click.
	 */
	trigger: React.ReactElement;

	/**
	 * Text to be displayed in the Dropdown's header.
	 */
	headerText?: string;

	/**
	 * Prop to pass DOM element attributes to <DropDown.Menu />.
	 */
	menuElementAttrs?: React.ComponentProps<
		typeof ClayDropDown
	>['menuElementAttrs'];

	/**
	 * Function for setting the offset of the menu from the trigger.
	 */
	offsetFn?: React.ComponentProps<typeof ClayDropDown>['offsetFn'];

	/**
	 * Flag that adds a back button to the header
	 */
	undo?: boolean;
}

interface IInternalItem {
	spritemap?: string;
}

const Item: React.FunctionComponent<
	Omit<IItem, 'onChange'> & IInternalItem
> = ({label, onClick, ...props}) => {
	const {close} = React.useContext(ClayDropDownContext);

	return (
		<ClayDropDown.Item
			onClick={(e) => {
				if (onClick) {
					onClick(e);
				}

				close();
			}}
			{...props}
		>
			{label}
		</ClayDropDown.Item>
	);
};

interface IDropDownContentProps {
	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * List of items to display in drop down menu
	 */
	items: Array<IItem>;
}

const DropDownContent: React.FunctionComponent<IDropDownContentProps> = ({
	items,
	spritemap,
}) => (
	<ClayDropDown.ItemList>
		{items.map(({...item}, key) => (
			<Item {...item} key={key} spritemap={spritemap} />
		))}
	</ClayDropDown.ItemList>
);

export const ClayDropdownWithDrilldown: React.FunctionComponent<IProps> = ({
	alignmentPosition,
	className,
	containerElement,
	footerBtnLabel,
	footerContent,
	headerText,
	items,
	menuElementAttrs,
	offsetFn,
	spritemap,
	trigger,
	undo,
}: IProps) => {
	const [active, setActive] = React.useState(false);

	const hasRightSymbols = React.useMemo(
		() => !!findNested(items, 'symbolRight'),
		[items]
	);
	const hasLeftSymbols = React.useMemo(
		() => !!findNested(items, 'symbolLeft'),
		[items]
	);

	return (
		<ClayDropDown
			active={active}
			alignmentPosition={alignmentPosition}
			className={className}
			containerElement={containerElement}
			hasLeftSymbols={hasLeftSymbols}
			hasRightSymbols={hasRightSymbols}
			menuElementAttrs={menuElementAttrs}
			offsetFn={offsetFn}
			onActiveChange={setActive}
			trigger={trigger}
		>
			<ClayDropDownContext.Provider
				value={{close: () => setActive(false)}}
			>
				{headerText && (
					<Header spritemap={spritemap} undo={undo}>
						{headerText}
					</Header>
				)}

				<DropDownContent items={items} />

				{footerContent ? (
					footerContent
				) : (
					<footer className="p-3">
						<ClayButton block>{footerBtnLabel}</ClayButton>
					</footer>
				)}
			</ClayDropDownContext.Provider>
		</ClayDropDown>
	);
};
