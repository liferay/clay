/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import {Align} from 'metal-position';
import {createPortal} from 'react-dom';
import {useDropdownCloseInteractions} from './hooks';

import Action from './Action';
import Caption from './Caption';
import Divider from './Divider';
import Group from './Group';
import Help from './Help';
import Item from './Item';
import ItemList from './ItemList';
import Search from './Search';

const Portal = ({children}: {children: React.ReactNode}) => {
	const portalRef = React.useRef(document.createElement('div'));
	const elToMountTo = document && document.body;

	React.useEffect(() => {
		elToMountTo.appendChild(portalRef.current);
		return () => {
			elToMountTo.removeChild(portalRef.current);
		};
	}, [elToMountTo]);

	return createPortal(children, portalRef.current);
};

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
	Search: typeof Search;
} = ({
	active = false,
	alignmentPosition = Align.BottomLeft,
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

	useDropdownCloseInteractions(
		[triggerElementRef, menuElementRef],
		onActiveChange
	);

	React.useLayoutEffect(() => {
		if (triggerElementRef.current && menuElementRef.current) {
			Align.align(
				menuElementRef.current,
				triggerElementRef.current,
				alignmentPosition
			);
		}
	});

	return (
		<div {...otherProps} className="dropdown">
			<span ref={triggerElementRef} style={{display: 'inline-block'}}>
				{React.cloneElement(trigger, {
					className: 'dropdown-toggle',
					onClick: () => onActiveChange(!active),
				})}
			</span>

			{active && (
				<Portal>
					<div
						className={classNames('dropdown-menu show', {
							'dropdown-menu-indicator-end': hasRightSymbols,
							'dropdown-menu-indicator-start': hasLeftSymbols,
						})}
						ref={menuElementRef}
					>
						{children}
					</div>
				</Portal>
			)}
		</div>
	);
};

ClayDropDown.Action = Action;
ClayDropDown.Caption = Caption;
ClayDropDown.Divider = Divider;
ClayDropDown.Group = Group;
ClayDropDown.Help = Help;
ClayDropDown.Item = Item;
ClayDropDown.ItemList = ItemList;
ClayDropDown.Search = Search;

export {Align};

export default ClayDropDown;
