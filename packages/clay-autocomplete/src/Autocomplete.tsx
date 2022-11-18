/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {__NOT_PUBLIC_COLLECTION} from '@clayui/core';
import DropDown from '@clayui/drop-down';
import {ClayInput as Input} from '@clayui/form';
import LoadingIndicator from '@clayui/loading-indicator';
import {
	InternalDispatch,
	Keys,
	useDebounce,
	useId,
	useInternalState,
	useNavigation,
} from '@clayui/shared';
import {hideOthers} from 'aria-hidden';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import type {ICollectionProps} from '@clayui/core';

const {Collection} = __NOT_PUBLIC_COLLECTION;

type Messages = {
	loading: string;
	notFound: string;
};

type ItemProps<T> = {
	children: React.ReactElement;
	index: number;
	item: T;
	keyValue: React.Key;
};

export interface IProps<T>
	extends Omit<
			React.HTMLAttributes<HTMLInputElement>,
			'onChange' | 'children'
		>,
		Omit<Partial<ICollectionProps<T, unknown>>, 'virtualize'> {
	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;

	/**
	 * Component to render.
	 */
	as?:
		| 'div'
		| typeof Input
		| React.ComponentType
		| React.ForwardRefExoticComponent<any>;

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: boolean;

	/**
	 * Autocomplete container reference.
	 * @ignore
	 */
	containerElementRef: React.MutableRefObject<HTMLElement | null>;

	/**
	 * The initial value of the active state (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * The initial value of the input (uncontrolled).
	 */
	defaultValue?: string;

	/**
	 * Defines the name of the property key that is used in the items filter
	 * test (Dynamic content).
	 */
	filterKey?: string;

	/**
	 * Property to set the initial value of `items` (uncontrolled).
	 */
	defaultItems?: Array<T>;

	/**
	 * Messages for autocomplete.
	 */
	messages?: Messages;

	/**
	 * Callback for when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Callback called when input value changes (controlled).
	 */
	onChange?: InternalDispatch<string>;

	/**
	 * Callback called when items change (controlled).
	 */
	onItemsChange?: InternalDispatch<Array<T>>;

	/**
	 * Callback is called when more items need to be loaded when the scroll
	 * reaches the bottom.
	 */
	onLoadMore?: () => Promise<any> | null;

	/**
	 * The current value of the input (controlled).
	 */
	value?: string;

	/**
	 * The interaction required to display the menu.
	 */
	menuTrigger?: 'input' | 'focus';

	/**
	 * The current state of Autocomplete current loading. Determines whether the
	 * loading indicator should be shown or not.
	 */
	loadingState?: number;
}

type LoadingProps = {
	'data-index': number;
	'aria-label': string;
	style: React.StyleHTMLAttributes<HTMLSpanElement>;
};

const Loading = React.forwardRef<HTMLLIElement, LoadingProps>(
	({style, ...props}, ref) => (
		<DropDown.Item
			{...props}
			aria-valuemax={100}
			aria-valuemin={0}
			ref={ref}
			roleItem="progressbar"
			style={style}
		>
			<LoadingIndicator />
		</DropDown.Item>
	)
);

Loading.displayName = 'AutocompleteLoading';

export function Autocomplete<T extends Record<string, any>>({
	as: As = Input,
	active: externalActive,
	alignmentByViewport,
	children,
	containerElementRef,
	defaultActive,
	defaultItems,
	defaultValue,
	filterKey,
	items: externalItems,
	loadingState,
	menuTrigger = 'input',
	messages = {loading: '', notFound: ''},
	onActiveChange,
	onChange,
	onItemsChange,
	onLoadMore,
	value: externalValue,
	...otherProps
}: IProps<T>) {
	const inputRef = useRef<HTMLInputElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const currentItemSelected = useRef<string>('');

	const firstItemId = useRef<string>('');

	const isLoading = Boolean(loadingState !== undefined && loadingState === 1);

	const debouncedLoadingChange = useDebounce(isLoading, 500);

	const cursorsRef = useRef<Map<string, boolean>>(new Map());

	const [infiniteScroll, setInfiniteScroll] = useState(Boolean(onLoadMore));

	const [focus, setFocus] = useState<string>();

	const [items, , isItemsUncontrolled] = useInternalState({
		defaultName: 'defaultItems',
		defaultValue: defaultItems,
		handleName: 'onItemsChange',
		name: 'items',
		onChange: onItemsChange,
		value: externalItems,
	});

	const [value = '', setValue] = useInternalState({
		defaultName: 'defaultValue',
		defaultValue,
		handleName: 'onChange',
		name: 'value',
		onChange,
		value: externalValue,
	});

	const [active, setActive] = useInternalState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});

	const virtualizerRef = useRef<any>();

	const navigationProps = useNavigation({
		activation: 'manual',
		containeRef: menuRef,
		getPosition: useCallback(
			(list) =>
				list.findIndex(
					(element: HTMLElement) =>
						element.getAttribute('id')! === focus
				),
			[focus]
		),
		loop: true,
		onNavigate: (element) => {
			if (virtualizerRef.current) {
				virtualizerRef.current?.scrollToIndex(
					Number(element.getAttribute('data-index')!),
					{smoothScroll: false}
				);
			}

			setFocus(element.getAttribute('id')!);
		},
		orientation: 'vertical',
	});

	const ariaControlsId = useId();

	useEffect(() => {
		if (menuRef.current && inputRef.current && active) {
			// Hide everything from ARIA except the MenuElement and Input
			return hideOthers([menuRef.current, inputRef.current]);
		}
	}, [active]);

	useEffect(() => {
		if (active === false) {
			setFocus(undefined);
			setValue(currentItemSelected.current);
		}
	}, [active]);

	useEffect(() => {
		setInfiniteScroll(
			Boolean(onLoadMore) && !cursorsRef.current.has(value)
		);
	}, [value]);

	const previousLengthRef = useRef(items?.length);

	useEffect(() => {
		if (!items) {
			return;
		}

		if (items.length < previousLengthRef.current) {
			setFocus(undefined);
		}

		previousLengthRef.current = items.length;
	}, [items?.length]);

	const filterFn = useCallback(
		(itemValue: string) => itemValue.match(new RegExp(value, 'i')) !== null,
		[value]
	);

	const filteredItems = useMemo(() => {
		if (debouncedLoadingChange) {
			return [];
		}

		if (!isItemsUncontrolled) {
			return items;
		}

		return items?.filter((option) =>
			filterFn(filterKey ? option[filterKey] : option)
		);
	}, [debouncedLoadingChange, isItemsUncontrolled, items, filterFn]);

	const isNotFound = filteredItems?.length === 0;

	return (
		<>
			<As
				{...otherProps}
				aria-activedescendant={active ? focus : undefined}
				aria-autocomplete="list"
				aria-controls={ariaControlsId}
				aria-expanded={active}
				autoComplete="off"
				autoCorrect="off"
				insetAfter={isLoading}
				onBlur={(event) => {
					if (otherProps.onBlur) {
						otherProps.onBlur(event);
					}

					setFocus(undefined);
				}}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					const {value} = event.target;

					if (!value) {
						currentItemSelected.current = value;
					}

					setActive(true);
					setValue(value);
				}}
				onFocus={(event) => {
					if (otherProps.onFocus) {
						otherProps.onFocus(event);
					}

					if (menuTrigger === 'focus') {
						setActive(true);
					}
				}}
				onKeyDown={(event) => {
					if (otherProps.onKeyDown) {
						otherProps.onKeyDown(event);
					}

					switch (event.key) {
						case Keys.Enter: {
							if (focus) {
								const element =
									menuRef.current?.querySelector<HTMLElement>(
										`#${focus}`
									);

								if (element) {
									element.click();
								}
							}

							setActive(false);
							break;
						}
						case Keys.Down: {
							if (!active && event.altKey) {
								event.stopPropagation();
								setActive(true);
							} else {
								if (!active) {
									setActive(true);
									setFocus(firstItemId.current);
								} else if (!focus) {
									setFocus(firstItemId.current);
								}

								event.preventDefault();
								navigationProps.onKeyDown(event);
							}
							break;
						}
						case Keys.Up:
							event.preventDefault();
							navigationProps.onKeyDown(event);
							break;
						default:
							setFocus(undefined);
							navigationProps.onKeyDown(event);
							break;
					}
				}}
				ref={inputRef}
				role="combobox"
				spellCheck={false}
				value={value}
			/>

			{active && (
				<DropDown.Menu
					active={active}
					alignElementRef={containerElementRef}
					alignmentByViewport={alignmentByViewport}
					autoBestAlign={!!alignmentByViewport}
					className="autocomplete-dropdown-menu"
					focusRefOnEsc={inputRef}
					id={ariaControlsId}
					onActiveChange={setActive}
					ref={menuRef}
					style={{
						maxWidth: 'none',
						width: `${containerElementRef.current?.clientWidth}px`,
					}}
				>
					<Collection<T>
						aria-label={otherProps['aria-label']}
						aria-labelledby={otherProps['aria-labelledby']}
						as={DropDown.ItemList}
						estimateSize={37}
						filter={isNotFound ? undefined : filterFn}
						filterKey="value"
						infiniteScroll={infiniteScroll}
						isLoading={loadingState === 1}
						itemContainer={({
							children,
							index,
							keyValue,
						}: ItemProps<any>) => {
							const itemValue =
								children.props.value ?? children.props.children;
							const id = `${ariaControlsId}-${itemValue
								.toLowerCase()
								.split(' ')
								.join('-')}-${keyValue}`;

							if (index === 0) {
								firstItemId.current = id;
							}

							return React.cloneElement(children, {
								className: id === focus ? 'active' : null,
								id,
								match: value,
								onClick: (
									event: React.MouseEvent<
										| HTMLSpanElement
										| HTMLButtonElement
										| HTMLAnchorElement
									>
								) => {
									if (children.props.onClick) {
										children.props.onClick(event);
									}

									currentItemSelected.current = itemValue;
									setActive(false);
									setValue(itemValue);

									inputRef.current?.focus();
								},
								roleItem: 'option',
								tabIndex: -1,
							}) as React.ReactElement;
						}}
						items={filteredItems}
						loadingComponent={Loading}
						onBottom={() => {
							if (onLoadMore) {
								const hasItems = onLoadMore();

								if (hasItems === null) {
									cursorsRef.current.set(value, true);
									setInfiniteScroll(false);
								}
							}
						}}
						parentRef={menuRef}
						role="listbox"
						virtualize
						virtualizerRef={virtualizerRef}
					>
						{debouncedLoadingChange ? (
							<DropDown.Item
								aria-disabled="true"
								className="disabled"
								roleItem="option"
							>
								{messages.loading}
							</DropDown.Item>
						) : isNotFound ? (
							<DropDown.Item
								aria-disabled="true"
								className="disabled"
								roleItem="option"
							>
								{messages.notFound}
							</DropDown.Item>
						) : (
							children
						)}
					</Collection>
				</DropDown.Menu>
			)}

			{isLoading && (
				<Input.GroupInsetItem
					after
					aria-label={messages.loading}
					aria-valuemax={100}
					aria-valuemin={0}
					role="progressbar"
				>
					<span className="inline-item inline-item-middle">
						<LoadingIndicator size="sm" />
					</span>
				</Input.GroupInsetItem>
			)}
		</>
	);
}
