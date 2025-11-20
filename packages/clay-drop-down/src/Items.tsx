/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayCheckbox, ClayRadio} from '@clayui/form';
import Icon from '@clayui/icon';
import {
	FOCUSABLE_ELEMENTS,
	Keys,
	MouseSafeArea,
	throttle,
	useNavigation,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useCallback, useContext, useRef, useState} from 'react';
import warning from 'warning';

import Divider from './Divider';
import DropDown from './DropDown';
import {DropDownContext} from './DropDownContext';
import {FocusMenu} from './FocusMenu';
import DropDownGroup from './Group';

export const findNested = <
	T extends {items?: Array<T>; [key: string]: any},
	K extends keyof T
>(
	items: Array<T>,
	key: K
): boolean =>
	items.some((item) => {
		if (item[key]) {
			return true;
		}

		// Ignore the search if the nested items are part of a contextual submenu
		// because it will be in another menu and the current menu does not need
		// to know the information of what exists inside the contextual one, like
		// knowing if there is an icon.
		if (item.items && item['type'] !== 'contextual') {
			return findNested(item.items, key);
		}

		return false;
	});

interface IInternalItem {
	spritemap?: string;
}

const Checkbox = ({
	checked = false,
	onChange = () => {},
	title,
	...otherProps
}: Item & IInternalItem) => {
	const [value, setValue] = useState<boolean>(checked);

	const {tabFocus} = useContext(DropDownContext);

	return (
		<DropDown.Section role="none">
			<ClayCheckbox
				{...otherProps}
				checked={value}
				label={title}
				onChange={() => {
					setValue((val) => !val);
					onChange(!value);
				}}
				tabIndex={!tabFocus ? -1 : undefined}
			/>
		</DropDown.Section>
	);
};

type Context = {
	back?: () => void;
	close: () => void;
	onForward?: (title: string, id: string) => void;
	messages?: Record<string, string>;
};

export const ClayDropDownContext = React.createContext({
	close: () => {},
} as Context);

const Item = ({
	child,
	label,
	onClick,
	spritemap,
	title,
	...props
}: Omit<Item, 'onChange'> & IInternalItem) => {
	const {back, close, messages, onForward} = useContext(ClayDropDownContext);

	title = label || title;

	return (
		<DropDown.Item
			{...props}
			onClick={(event) => {
				if (onForward && child && title) {
					event.preventDefault();
					onForward(title, child);

					return;
				}

				if (onClick) {
					onClick(event);
				}

				close();
			}}
			onKeyDown={(event) => {
				if (back && event.key === Keys.Left) {
					back();
				}
			}}
			spritemap={spritemap}
		>
			{title}

			{child && (
				<span
					aria-label={`${messages!['goTo']} ${title}`}
					className="dropdown-item-indicator-end"
					title={`${messages!['goTo']} ${title}`}
				>
					<Icon spritemap={spritemap} symbol="angle-right" />
				</span>
			)}
		</DropDown.Item>
	);
};

const Group = ({items, label, spritemap, title}: Item & IInternalItem) => {
	title = label || title;

	warning(
		typeof items !== 'undefined',
		`ClayDropDownWithItems -> The '${title}' group contains no items to render.`
	);

	if (typeof items === 'undefined') {
		return null;
	}

	return (
		<DropDownGroup header={title}>
			{items && <Items items={items} spritemap={spritemap} />}
		</DropDownGroup>
	);
};

const BOTTOM_OFFSET = [0, 1] as const;
const LEFT_OFFSET = [-1, 6] as const;
const RIGHT_OFFSET = [1, -6] as const;
const TOP_OFFSET = [0, -1] as const;

const OFFSET_MAP = {
	bctc: TOP_OFFSET,
	blbr: RIGHT_OFFSET,
	bltl: TOP_OFFSET,
	brbl: LEFT_OFFSET,
	brtr: TOP_OFFSET,
	clcr: RIGHT_OFFSET,
	crcl: LEFT_OFFSET,
	tcbc: BOTTOM_OFFSET,
	tlbl: BOTTOM_OFFSET,
	tltr: RIGHT_OFFSET,
	trbr: BOTTOM_OFFSET,
	trtl: LEFT_OFFSET,
};

function offsetFn(points: any) {
	return OFFSET_MAP[points.join('') as keyof typeof OFFSET_MAP] as [
		number,
		number
	];
}

const Contextual = ({
	items,
	label,
	spritemap,
	title,
	...otherProps
}: Omit<Item, 'onChange'> & IInternalItem) => {
	const [visible, setVisible] = useState(false);
	const {close} = useContext(ClayDropDownContext);

	const triggerElementRef = useRef<HTMLLIElement | null>(null);
	const menuElementRef = useRef<HTMLDivElement>(null);
	const timeoutHandleRef = useRef<any>(null);

	const keyboardRef = useRef(false);

	const hasRightSymbols = React.useMemo(
		() => items && findNested(items, 'symbolRight'),
		[items]
	);
	const hasLeftSymbols = React.useMemo(
		() => items && findNested(items, 'symbolLeft'),
		[items]
	);

	const {navigationProps} = useNavigation({
		activation: 'manual',
		containerRef: menuElementRef,
		loop: true,
		orientation: 'vertical',
		typeahead: true,
		visible,
	});

	const setThrottleVisible = useCallback(
		// eslint-disable-next-line react-compiler/react-compiler
		throttle((value: boolean) => setVisible(value), 100),
		[]
	);

	title = label || title;

	return (
		<DropDown.Item
			{...otherProps}
			aria-expanded={visible}
			aria-haspopup={Boolean(items)}
			className={classNames({
				active: visible,
			})}
			onClick={(event) => {
				keyboardRef.current = false;
				if (event.currentTarget === event.target) {
					setVisible(true);

					clearTimeout(timeoutHandleRef.current);
					timeoutHandleRef.current = null;
				}
			}}
			onKeyDown={(event) => {
				switch (event.key) {
					case Keys.Enter:
					case Keys.Right:
						setVisible(true);
						keyboardRef.current = true;
						break;
					default:
						break;
				}
			}}
			onMouseEnter={() => {
				if (!visible) {
					keyboardRef.current = false;
					timeoutHandleRef.current = setTimeout(
						() => setThrottleVisible(true),
						400
					);
				}
			}}
			onMouseLeave={() => {
				keyboardRef.current = false;
				setThrottleVisible(false);

				clearTimeout(timeoutHandleRef.current);
				timeoutHandleRef.current = null;
			}}
			ref={triggerElementRef}
			spritemap={spritemap}
			symbolRight="angle-right"
		>
			{title}

			{items && (
				<DropDown.Menu
					active={visible}
					alignElementRef={triggerElementRef}
					alignmentPosition={8}
					hasLeftSymbols={hasLeftSymbols}
					hasRightSymbols={hasRightSymbols}
					offsetFn={offsetFn}
					onActiveChange={setVisible}
					onKeyDown={navigationProps.onKeyDown}
					ref={menuElementRef}
				>
					{visible && <MouseSafeArea parentRef={menuElementRef} />}
					<ClayDropDownContext.Provider
						value={{
							back: () => {
								(
									triggerElementRef.current
										?.children[0] as HTMLElement
								).focus();
								setVisible(false);
							},
							close: () => {
								setVisible(false);
								close();
							},
						}}
					>
						<FocusMenu
							condition={visible}
							onRender={() => {
								if (
									menuElementRef.current &&
									keyboardRef.current
								) {
									const first =
										menuElementRef.current.querySelector<HTMLElement>(
											FOCUSABLE_ELEMENTS.join(',')
										);

									if (first) {
										first.focus();
									}
								}
							}}
						>
							<DropDownItems
								items={items}
								spritemap={spritemap}
							/>
						</FocusMenu>
					</ClayDropDownContext.Provider>
				</DropDown.Menu>
			)}
		</DropDown.Item>
	);
};

interface IRadioContext {
	checked: string;
	name?: string;
	onChange: (value: string) => void;
}

const RadioGroupContext = React.createContext({} as IRadioContext);

const Radio = ({title, value = '', ...otherProps}: Item & IInternalItem) => {
	const {checked, name, onChange} = useContext(RadioGroupContext);

	const {tabFocus} = useContext(DropDownContext);

	return (
		<DropDown.Section role="none">
			<ClayRadio
				{...otherProps}
				checked={checked === value}
				inline
				label={title}
				name={name}
				onChange={() => onChange(value as string)}
				tabIndex={!tabFocus ? -1 : undefined}
				value={value as string}
			/>
		</DropDown.Section>
	);
};

const RadioGroup = ({
	items,
	label,
	name,
	onChange = () => {},
	spritemap,
	title,
	value: defaultValue = '',
}: Item & IInternalItem) => {
	const [value, setValue] = useState(defaultValue);

	const params = {
		checked: value,
		name,
		onChange: (value: string) => {
			onChange(value);
			setValue(value);
		},
	};

	title = label || title;

	warning(
		items && items.filter((item) => item.type !== 'radio').length === 0,
		'ClayDropDownWithItems -> Items of type `radiogroup` should be used `radio` if you need to use others, it is recommended to use type `group`.'
	);

	return (
		<DropDownGroup header={title} role="radiogroup">
			{items && (
				<RadioGroupContext.Provider value={params}>
					<Items items={items} spritemap={spritemap} />
				</RadioGroupContext.Provider>
			)}
		</DropDownGroup>
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

export type Item = {
	active?: boolean;
	checked?: boolean;
	disabled?: boolean;
	href?: string;
	/**
	 * The unique id that references the next menu.
	 */
	child?: string;
	title?: string;
	items?: Array<Item>;

	/**
	 * @deprecated since v3.129.0 - use `title` instead.
	 */
	label?: string;
	name?: string;
	onChange?: Function;
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	symbolLeft?: string;
	symbolRight?: string;
	target?: string;
	type?:
		| 'checkbox'
		| 'contextual'
		| 'group'
		| 'item'
		| 'radio'
		| 'radiogroup'
		| 'divider';
	value?: string;
};

export type Props = {
	'aria-label'?: string;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * List of items to display in drop down menu
	 */
	items: Array<Item>;

	role?: string;
};

export const DropDownItems = ({
	items,
	role,
	spritemap,
	...otherProps
}: Props) => (
	<DropDown.ItemList aria-label={otherProps['aria-label']} role={role}>
		<Items items={items} spritemap={spritemap} />
	</DropDown.ItemList>
);

const Items = ({items, spritemap}: Props) => {
	return (
		<>
			{items.map(({type, ...item}, key) => {
				const Item = TYPE_MAP[type || 'item'];

				return <Item {...item} key={key} spritemap={spritemap} />;
			})}
		</>
	);
};
