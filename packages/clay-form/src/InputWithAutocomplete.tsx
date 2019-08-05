/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '@clayui/autocomplete';
import ClayDropDown from '@clayui/drop-down';
import React, {useEffect, useState} from 'react';
import {FocusScope, useFocusManagement} from '@clayui/shared';

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

const ENTER_KEY_CODE = 13;

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
	const [active, setActive] = useState(!!value);
	const focusManager = useFocusManagement();

	const handleKeyEnter = (
		event: React.KeyboardEvent<HTMLSpanElement | HTMLAnchorElement>,
		item: string | object
	) => {
		if (event.keyCode === ENTER_KEY_CODE) {
			onItemSelect(item);
		}
	};

	useEffect(() => {
		setActive(!!value);
	}, [value]);

	return (
		<FocusScope focusManager={focusManager}>
			<ClayAutocomplete>
				<ClayAutocomplete.Input
					{...otherProps}
					onChange={e => onValueChange(e.target.value)}
					ref={ref => focusManager.createScope(ref, 'input')}
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
										innerRef={ref =>
											focusManager.createScope(
												ref,
												`item${i}`,
												true
											)
										}
										key={itemSelector(item)}
										match={value.toString()}
										onClick={() =>
											onItemSelect(itemSelector(item))
										}
										onKeyDown={event =>
											handleKeyEnter(
												event,
												itemSelector(item)
											)
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
		</FocusScope>
	);
};
