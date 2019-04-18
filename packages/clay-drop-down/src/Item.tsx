/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import ClayCheckbox from '@clayui/checkbox';
import ClayIcon from '@clayui/icon';
import ClayRadioGroup from '@clayui/radio-group';
import Divider from './Divider';

interface BaseDropDownItem {
	active?: boolean;
	disabled?: boolean;
	href?: string;
	items?: (BaseDropDownItem | FormItem)[];
	label?: string;
	onClick?: () => void;
	type?: 'group' | 'radio' | 'checkbox' | 'divider';
	rightSymbol?: string;
	leftSymbol?: string;
}

interface FormItem extends BaseDropDownItem {
	label: string;
	name: string;
	items: FormItem[];
	onChange: (val?: React.ChangeEvent | React.ReactText) => void;
	type: 'radio' | 'checkbox';
	value: string | number;
}

export type DropDownItemType = FormItem | BaseDropDownItem;

interface Props {
	data: DropDownItemType;
	spritemap?: string;
}

const DropDownItem: React.FunctionComponent<Props> = ({data, spritemap}) => {
	if (data.type === 'divider') {
		return <Divider />;
	} else if (data.type === 'group') {
		const {items, label} = data;

		return (
			<React.Fragment>
				{label && (
					<li className="dropdown-subheader" role="presentation">
						{label}
					</li>
				)}

				{items &&
					items.map((nestItem, j) => (
						<DropDownItem
							data={nestItem}
							key={`nested${j}`}
							spritemap={spritemap}
						/>
					))}
			</React.Fragment>
		);
	} else if (data.type === 'checkbox') {
		const {disabled, label, name, onChange, value} = data as FormItem;

		return (
			<li className="dropdown-item">
				<ClayCheckbox
					checked={!!value}
					disabled={disabled}
					label={label}
					name={name}
					onChange={onChange}
				/>
			</li>
		);
	} else if (data.type === 'radio') {
		const {items, label, name, onChange, value} = data as FormItem;

		return (
			<React.Fragment>
				{label && (
					<li className="dropdown-subheader" role="presentation">
						{label}
					</li>
				)}

				{items &&
					items.map((nestItem, j) => (
						<li key={j}>
							<div className="dropdown-item">
								<ClayRadioGroup.Radio
									checked={nestItem.value === value}
									label={nestItem.label}
									name={name}
									onChange={e => {
										e.preventDefault();

										onChange(nestItem.value);
									}}
									value={nestItem.value as React.ReactText}
								/>
							</div>
						</li>
					))}
			</React.Fragment>
		);
	} else {
		const {href, label, leftSymbol, onClick, rightSymbol} = data;

		return (
			<li>
				{href && (
					<a className="dropdown-item" href={href}>
						{leftSymbol && (
							<span className="dropdown-item-indicator-start">
								<ClayIcon
									spritemap={spritemap}
									symbol={leftSymbol}
								/>
							</span>
						)}

						{label}

						{rightSymbol && (
							<span className="dropdown-item-indicator-end">
								<ClayIcon
									spritemap={spritemap}
									symbol={rightSymbol}
								/>
							</span>
						)}
					</a>
				)}

				{!href && (
					<span className="dropdown-item" onClick={onClick}>
						{leftSymbol && (
							<span className="dropdown-item-indicator-start">
								<ClayIcon
									spritemap={spritemap}
									symbol={leftSymbol}
								/>
							</span>
						)}

						{label}

						{rightSymbol && (
							<span className="dropdown-item-indicator-end">
								<ClayIcon
									spritemap={spritemap}
									symbol={rightSymbol}
								/>
							</span>
						)}
					</span>
				)}
			</li>
		);
	}
};

export default DropDownItem;
