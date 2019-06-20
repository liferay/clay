/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '@clayui/autocomplete';
import ClayMultiSelect from './MultiSelect';
import React, {useLayoutEffect} from 'react';

interface IProps extends React.ComponentProps<typeof ClayMultiSelect> {
	sourceItems: string[];
}

const MultiSelectWithAutocomplete: React.FunctionComponent<IProps> = ({
	inputValue = '',
	items,
	onInputChange,
	onItemsChange,
	sourceItems,
	...otherProps
}) => {
	const alignElementRef = React.useRef<any>(null);
	const [active, setActive] = React.useState(false);

	useLayoutEffect(() => {
		const matchedItems = sourceItems.filter(
			item => inputValue && item.match(inputValue)
		);

		setActive(matchedItems.length !== 0);
	}, [sourceItems, inputValue]);

	return (
		<ClayMultiSelect
			{...otherProps}
			inputValue={inputValue}
			items={items}
			onInputChange={onInputChange}
			onItemsChange={onItemsChange}
			ref={alignElementRef}
		>
			<ClayAutocomplete.DropDown
				active={active}
				alignElementRef={alignElementRef}
				onSetActive={setActive}
			>
				{sourceItems
					.filter(item => inputValue && item.match(inputValue))
					.map(item => (
						<ClayAutocomplete.Item
							key={item}
							match={inputValue}
							onClick={() => {
								onItemsChange([...items, item]);

								if (onInputChange) {
									onInputChange('');
								}
							}}
							value={item}
						/>
					))}
			</ClayAutocomplete.DropDown>
		</ClayMultiSelect>
	);
};

export default MultiSelectWithAutocomplete;
