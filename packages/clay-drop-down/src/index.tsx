/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';

import DropDownItem, {DropDownItemType} from './Item';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	actionButtonProps?: React.HTMLAttributes<HTMLButtonElement>;
	captionText?: React.ReactText;
	items: DropDownItemType[];
	button?: {
		label: string;
		onClick: () => {};
	};
	disabled?: boolean;
	helpText?: string;
	preferredAlign?: string;
	spritemap?: string;
	searchable?: boolean;
}

const filterBySearch = (
	items: DropDownItemType[],
	query: string
): DropDownItemType[] => {
	const newItems = items.map(item => ({...item}));

	if (query) {
		newItems.filter((item: DropDownItemType) => {
			if (item.label) {
				if (item.type === 'group' && item.items) {
					item.items = item.items.filter(
						(nestedItem: DropDownItemType) => {
							if (!nestedItem.label) {
								return false;
							}

							return nestedItem.label.match(query);
						}
					);

					return !!item.items.length;
				}

				return item.label && item.label.match(query);
			}

			return false;
		});
	}

	return newItems;
};

const checkForSymbols = (items: DropDownItemType[]) => {
	let hasLeftSymbols = false;
	let hasRightSymbols = false;

	items.find((item: DropDownItemType) => {
		if (!hasLeftSymbols) {
			if (item.leftSymbol) {
				hasLeftSymbols = true;
			} else if (item.items) {
				const nestedLeftSymbol = checkForSymbols(
					item.items as DropDownItemType[]
				)[0];

				if (nestedLeftSymbol) {
					hasLeftSymbols = true;
				}
			}
		}

		if (!hasRightSymbols && item.rightSymbol) {
			if (item.rightSymbol) {
				hasRightSymbols = true;
			} else if (item.items) {
				const nestedRightSymbol = checkForSymbols(
					item.items as DropDownItemType[]
				)[1];

				if (nestedRightSymbol) {
					hasRightSymbols = true;
				}
			}
		}

		return hasLeftSymbols && hasRightSymbols;
	});

	return [hasLeftSymbols, hasRightSymbols];
};

const ClayDropDown: React.FunctionComponent<Props> = ({
	actionButtonProps,
	captionText,
	children,
	className,
	helpText,
	items,
	searchable,
	spritemap,
	...otherProps
}) => {
	const [active, setActive] = React.useState<boolean>(false);
	const [searchInput, setSearchInput] = React.useState<string>('');

	const filteredItems = filterBySearch(items, searchInput);

	const [hasLeftSymbols, hasRightSymbols] = checkForSymbols(items);

	return (
		<div className="dropdown">
			<ClayButton
				{...otherProps}
				className="dropdown-toggle"
				onClick={() => setActive(val => !val)}
			>
				{children}
			</ClayButton>

			{active && (
				<div
					className={classNames('dropdown-menu show', {
						'dropdown-menu-indicator-end': hasRightSymbols,
						'dropdown-menu-indicator-start': hasLeftSymbols,
					})}
				>
					{helpText && (
						<div
							className="alert alert-fluid alert-info"
							role="alert"
						>
							{helpText}
						</div>
					)}

					{searchable && (
						<form>
							<div className="dropdown-section">
								<div className="input-group input-group-sm">
									<div className="input-group-item">
										<input
											className="form-control input-group-inset input-group-inset-after"
											onChange={e =>
												setSearchInput(e.target.value)
											}
											placeholder="Search for..."
											type="text"
											value={searchInput}
										/>
										<span className="input-group-inset-item input-group-inset-item-after">
											<ClayButton
												displayType="unstyled"
												type="button"
											>
												<ClayIcon
													spritemap={spritemap}
													symbol="search"
												/>
											</ClayButton>
										</span>
									</div>
								</div>
							</div>
						</form>
					)}

					<ul className="list-unstyled">
						{filteredItems.map((item, i) => (
							<DropDownItem
								data={item}
								key={i}
								spritemap={spritemap}
							/>
						))}
					</ul>

					{captionText && (
						<div className="dropdown-caption">{captionText}</div>
					)}

					{actionButtonProps && (
						<div className="dropdown-section">
							<button
								{...actionButtonProps}
								className="btn btn-block btn-secondary"
							>
								{actionButtonProps.children}
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ClayDropDown;
