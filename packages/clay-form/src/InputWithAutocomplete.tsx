/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '@clayui/autocomplete';
import ClayDropDown from '@clayui/drop-down';
import React, {useEffect, useRef, useState} from 'react';
import {useKeyHandlerForList} from '@clayui/shared';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Flag to indicate is loading indicator should be shown.
	 */
	loading?: boolean;

	/**
	 * Message displayed in dropdown when laoding is indicated.
	 */
	loadingMessage?: string;

	/**
	 * Items that will show up in the dropdown list
	 */
	items: Array<string> | Array<Object>;

	/**
	 * Function that returns the value that should be showed in the list.
	 */
	itemSelector?: (val: string | Object) => string;

	/**
	 * Callback for when input value changes
	 */
	onItemSelect: (val: string | Object) => string | Object;

	/**
	 * Callback for when input value changes
	 */
	onValueChange: (val: string | Object) => void;

	/**
	 * Flag to indicate if loading message should show in drop down
	 */
	showLoadingMessage?: boolean;
}

export const ClayInputWithAutocomplete: React.FunctionComponent<IProps> = ({
	items = [],
	itemSelector = val => val as string,
	loading,
	loadingMessage = 'Loading...',
	onItemSelect,
	onValueChange,
	showLoadingMessage = true,
	value = '',
	...otherProps
}) => {
	const activeListItemRef = useRef<HTMLLIElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [active, setActive] = useState(!!value);

	const keyHandler = useKeyHandlerForList({
		activeListItemRef,
		index: activeIndex,
		inputRef,
		onIndexChange: setActiveIndex,
		onIndexSelect: (index: number) => onItemSelect(items[index]),
		totalItems: items.length,
	});

	useEffect(() => {
		setActive(!!value);
	}, [value]);

	useEffect(() => {
		setActiveIndex(-1);
	}, [active]);

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				{...otherProps}
				onChange={e => onValueChange(e.target.value)}
				onKeyDown={keyHandler}
				ref={inputRef}
				value={value}
			/>

			{((loading && showLoadingMessage) || !!items.length) && (
				<ClayAutocomplete.DropDown
					active={active}
					onSetActive={setActive}
				>
					<ClayDropDown.ItemList>
						{!loading &&
							items.map((item, i) => (
								<ClayAutocomplete.Item
									active={i === activeIndex}
									key={itemSelector(item)}
									match={value.toString()}
									onClick={() =>
										onItemSelect(itemSelector(item))
									}
									ref={
										activeIndex === i
											? activeListItemRef
											: undefined
									}
									value={itemSelector(item)}
								/>
							))}

						{loading && showLoadingMessage && (
							<ClayAutocomplete.Item
								disabled
								value={loadingMessage}
							/>
						)}
					</ClayDropDown.ItemList>
				</ClayAutocomplete.DropDown>
			)}

			{loading && <ClayAutocomplete.LoadingIndicator />}
		</ClayAutocomplete>
	);
};
