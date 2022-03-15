/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayCheckbox, ClayRadio} from '@clayui/form';
import {
	MouseSafeArea,
	TInternalStateOnChange,
	useInternalState,
} from '@clayui/shared';
import React, {useContext, useRef, useState} from 'react';
import warning from 'warning';

import Caption from './Caption';
import Divider from './Divider';
import ClayDropDown from './DropDown';
import ClayDropDownGroup from './Group';
import Help from './Help';
import ClayDropDownMenu from './Menu';
import Search from './Search';

type TType =
	| 'checkbox'
	| 'contextual'
	| 'group'
	| 'item'
	| 'radio'
	| 'radiogroup'
	| 'divider';

interface IItem {
	active?: boolean;
	checked?: boolean;
	disabled?: boolean;
	href?: string;
	items?: Array<IItem>;
	label?: string;
	name?: string;
	onChange?: Function;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
	active?: React.ComponentProps<typeof ClayDropDown>['active'];

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: React.ComponentProps<
		typeof ClayDropDownMenu
	>['alignmentByViewport'];

	/**
	 * Default position of menu element. Values come from `./Menu`.
	 */
	alignmentPosition?: React.ComponentProps<
		typeof ClayDropDownMenu
	>['alignmentPosition'];

	/**
	 * Informational text that appears at the end or above the `footerContent` prop.
	 */
	caption?: string;

	className?: string;

	closeOnClickOutside?: React.ComponentProps<
		typeof ClayDropDown
	>['closeOnClickOutside'];

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: React.ComponentProps<
		typeof ClayDropDown
	>['containerElement'];

	/**
	 * Property to set the initial value of `active`.
	 */
	defaultActive?: boolean;

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
	 * Add informational text at the top of DropDown.
	 */
	helpText?: string;

	/**
	 * Prop to pass DOM element attributes to <DropDown.Menu />.
	 */
	menuElementAttrs?: React.ComponentProps<
		typeof ClayDropDown
	>['menuElementAttrs'];

	menuHeight?: React.ComponentProps<typeof ClayDropDown>['menuHeight'];

	menuWidth?: React.ComponentProps<typeof ClayDropDown>['menuWidth'];

	/**
	 * Function for setting the offset of the menu from the trigger.
	 */
	offsetFn?: React.ComponentProps<typeof ClayDropDown>['offsetFn'];

	onActiveChange?: TInternalStateOnChange<boolean>;

	/**
	 * Callback will always be called when the user is interacting with search.
	 */
	onSearchValueChange?: (newValue: string) => void;

	/**
	 * Flag indicating if the menu should be rendered lazily
	 */
	renderMenuOnClick?: React.ComponentProps<
		typeof ClayDropDown
	>['renderMenuOnClick'];

	/**
	 * Flag to show search at the top of the DropDown.
	 */
	searchable?: boolean;

	/**
	 * Pass the props to the Search component.
	 */
	searchProps?: Omit<
		React.ComponentProps<typeof Search>,
		'onChange' | 'spritemap' | 'value'
	>;

	/**
	 * The value that will be passed to the search input element.
	 */
	searchValue?: string;
}

interface IInternalItem {
	spritemap?: string;
}

const Checkbox: React.FunctionComponent<IItem & IInternalItem> = ({
	checked = false,
	onChange = () => {},
	...otherProps
}) => {
	const [value, setValue] = useState<boolean>(checked);

	return (
		<ClayDropDown.Section>
			<ClayCheckbox
				{...otherProps}
				checked={value}
				onChange={() => {
					setValue((val) => !val);
					onChange(!value);
				}}
			/>
		</ClayDropDown.Section>
	);
};

const ClayDropDownContext = React.createContext({close: () => {}});

const Item: React.FunctionComponent<Omit<IItem, 'onChange'> & IInternalItem> =
	({label, onClick, ...props}) => {
		const {close} = useContext(ClayDropDownContext);

		return (
			<ClayDropDown.Item
				onClick={(event) => {
					if (onClick) {
						onClick(event);
					}

					close();
				}}
				{...props}
			>
				{label}
			</ClayDropDown.Item>
		);
	};

const Group: React.FunctionComponent<IItem & IInternalItem> = ({
	items,
	label,
	spritemap,
}) => (
	<>
		<ClayDropDownGroup header={label} />
		{items && <DropDownContent items={items} spritemap={spritemap} />}
	</>
);

const Contextual: React.FunctionComponent<
	Omit<IItem, 'onChange'> & IInternalItem
> = ({items, label, spritemap, ...otherProps}) => {
	const [visible, setVisible] = useState(false);
	const {close} = useContext(ClayDropDownContext);

	const triggerElementRef = useRef<HTMLLIElement | null>(null);
	const menuElementRef = useRef<HTMLDivElement>(null);
	const timeoutHandleRef = useRef<any>(null);

	return (
		<ClayDropDown.Item
			{...otherProps}
			onClick={(event) => {
				if (event.currentTarget === event.target) {
					setVisible(true);

					clearTimeout(timeoutHandleRef.current);
					timeoutHandleRef.current = null;
				}
			}}
			onMouseEnter={() => {
				if (!visible) {
					timeoutHandleRef.current = setTimeout(
						() => setVisible(true),
						500
					);
				}
			}}
			onMouseLeave={() => {
				setVisible(false);

				clearTimeout(timeoutHandleRef.current);
				timeoutHandleRef.current = null;
			}}
			ref={triggerElementRef}
			spritemap={spritemap}
			symbolRight="angle-right"
		>
			{label}

			{items && (
				<ClayDropDown.Menu
					active={visible}
					alignElementRef={triggerElementRef}
					alignmentPosition={8}
					onSetActive={setVisible}
					ref={menuElementRef}
				>
					{visible && <MouseSafeArea parentRef={menuElementRef} />}
					<ClayDropDownContext.Provider
						value={{
							close: () => {
								setVisible(false);
								close();
							},
						}}
					>
						<DropDownContent items={items} spritemap={spritemap} />
					</ClayDropDownContext.Provider>
				</ClayDropDown.Menu>
			)}
		</ClayDropDown.Item>
	);
};

interface IRadioContext {
	checked: string;
	name?: string;
	onChange: (value: string) => void;
}

const RadioGroupContext = React.createContext({} as IRadioContext);

const Radio: React.FunctionComponent<IItem & IInternalItem> = ({
	value = '',
	...otherProps
}) => {
	const {checked, name, onChange} = useContext(RadioGroupContext);

	return (
		<ClayDropDown.Section>
			<ClayRadio
				{...otherProps}
				checked={checked === value}
				inline
				name={name}
				onChange={() => onChange(value as string)}
				value={value as string}
			/>
		</ClayDropDown.Section>
	);
};

const RadioGroup: React.FunctionComponent<IItem & IInternalItem> = ({
	items,
	label,
	name,
	onChange = () => {},
	spritemap,
}) => {
	const [value, setValue] = useState('');

	const params = {
		checked: value,
		name,
		onChange: (value: string) => {
			onChange(value);
			setValue(value);
		},
	};

	warning(
		items && items.filter((item) => item.type !== 'radio').length === 0,
		'ClayDropDownWithItems -> Items of type `radiogroup` should be used `radio` if you need to use others, it is recommended to use type `group`.'
	);

	return (
		<>
			{label && <ClayDropDownGroup header={label} />}
			{items && (
				<li aria-label={label} role="radiogroup">
					<RadioGroupContext.Provider value={params}>
						<DropDownContent items={items} spritemap={spritemap} />
					</RadioGroupContext.Provider>
				</li>
			)}
		</>
	);
};

const DividerWithItem = () => <Divider />;

const TYPE_MAP = {
	checkbox: Checkbox,
	contextual: Contextual,
	divider: DividerWithItem,
	group: Group,
	item: Item,
	radio: Radio,
	radiogroup: RadioGroup,
};

const DropDownContent: React.FunctionComponent<IDropDownContentProps> = ({
	items,
	spritemap,
}) => (
	<ClayDropDown.ItemList>
		{items.map(({type, ...item}, key) => {
			const Item = TYPE_MAP[type || 'item'];

			return <Item {...item} key={key} spritemap={spritemap} />;
		})}
	</ClayDropDown.ItemList>
);

const findNested = <
	T extends {items?: Array<T>; [key: string]: any},
	K extends keyof T
>(
	items: Array<T>,
	key: K
): T | undefined =>
	items.find((item) => {
		if (item[key]) {
			return true;
		}

		if (item.items) {
			return findNested(item.items, key);
		}

		return false;
	});

export const ClayDropDownWithItems: React.FunctionComponent<IProps> = ({
	active,
	alignmentByViewport,
	alignmentPosition,
	caption,
	className,
	closeOnClickOutside,
	containerElement,
	defaultActive,
	footerContent,
	helpText,
	items,
	menuElementAttrs,
	menuHeight,
	menuWidth,
	offsetFn,
	onActiveChange,
	onSearchValueChange = () => {},
	renderMenuOnClick,
	searchable,
	searchProps,
	searchValue = '',
	spritemap,
	trigger,
}: IProps) => {
	const [internalActive, setInternalActive] = useInternalState({
		defaultName: 'defaultActive',
		handleName: 'onActiveChange',
		initialValue: defaultActive,
		name: 'active',
		onChange: onActiveChange,
		value: active,
	});

	const hasRightSymbols = React.useMemo(
		() => !!findNested(items, 'symbolRight'),
		[items]
	);
	const hasLeftSymbols = React.useMemo(
		() => !!findNested(items, 'symbolLeft'),
		[items]
	);

	const Wrap = footerContent ? 'form' : React.Fragment;

	return (
		<ClayDropDown
			active={internalActive}
			alignmentByViewport={alignmentByViewport}
			alignmentPosition={alignmentPosition}
			className={className}
			closeOnClickOutside={closeOnClickOutside}
			containerElement={containerElement}
			hasLeftSymbols={hasLeftSymbols}
			hasRightSymbols={hasRightSymbols}
			menuElementAttrs={menuElementAttrs}
			menuHeight={menuHeight}
			menuWidth={menuWidth}
			offsetFn={offsetFn}
			onActiveChange={setInternalActive}
			renderMenuOnClick={renderMenuOnClick}
			trigger={trigger}
		>
			<ClayDropDownContext.Provider
				value={{close: () => setInternalActive(false)}}
			>
				{helpText && <Help>{helpText}</Help>}

				{searchable && (
					<Search
						{...searchProps}
						onChange={(event) =>
							onSearchValueChange(event.target.value)
						}
						spritemap={spritemap}
						value={searchValue}
					/>
				)}

				<Wrap>
					{footerContent ? (
						<div className="inline-scroller">
							<DropDownContent
								items={items}
								spritemap={spritemap}
							/>
						</div>
					) : (
						<DropDownContent items={items} spritemap={spritemap} />
					)}

					{caption && <Caption>{caption}</Caption>}

					{footerContent && (
						<div className="dropdown-section">{footerContent}</div>
					)}
				</Wrap>
			</ClayDropDownContext.Provider>
		</ClayDropDown>
	);
};

ClayDropDownWithItems.displayName = 'ClayDropDownWithItems';
