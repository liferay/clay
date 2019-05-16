/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

import Action from './Action';
import Caption from './Caption';
import Divider from './Divider';
import Group from './Group';
import Help from './Help';
import Item from './Item';
import ItemList from './ItemList';
import Menu, {Align} from './Menu';
import Search from './Search';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	active: boolean;
	alignmentPosition: number;
	hasRightSymbols?: boolean;
	hasLeftSymbols?: boolean;
	onActiveChange: (val: boolean) => void;
	trigger: React.ReactElement;
}

const ClayDropDown: React.FunctionComponent<Props> & {
	Action: typeof Action;
	Caption: typeof Caption;
	Divider: typeof Divider;
	Group: typeof Group;
	Help: typeof Help;
	Item: typeof Item;
	ItemList: typeof ItemList;
	Menu: typeof Menu;
	Search: typeof Search;
} = ({
	active = false,
	alignmentPosition,
	children,
	className,
	hasLeftSymbols,
	hasRightSymbols,
	onActiveChange,
	trigger,
	...otherProps
}) => {
	const triggerElementRef = React.useRef<HTMLButtonElement>(null);
	const menuElementRef = React.useRef<HTMLDivElement>(null);

	return (
		<div {...otherProps} className="dropdown">
			<span ref={triggerElementRef} style={{display: 'inline-block'}}>
				{React.cloneElement(trigger, {
					className: 'dropdown-toggle',
					onClick: () => onActiveChange(!active),
				})}
			</span>

			<Menu
				active={active}
				alignElementRef={triggerElementRef}
				alignmentPosition={alignmentPosition}
				hasLeftSymbols={hasLeftSymbols}
				hasRightSymbols={hasRightSymbols}
				onSetActive={onActiveChange}
				ref={menuElementRef}
			>
				{children}
			</Menu>
		</div>
	);
};

ClayDropDown.Action = Action;
ClayDropDown.Caption = Caption;
ClayDropDown.Divider = Divider;
ClayDropDown.Group = Group;
ClayDropDown.Help = Help;
ClayDropDown.Menu = Menu;
ClayDropDown.Item = Item;
ClayDropDown.ItemList = ItemList;
ClayDropDown.Search = Search;

export {Align};

export default ClayDropDown;
